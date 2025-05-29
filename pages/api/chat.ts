import type { NextApiRequest, NextApiResponse } from "next";

interface ChatRequest {
  message: string;
  conversationHistory: Array<{ role: "user" | "assistant"; content: string }>;
}

interface ChatResponse {
  response: string;
  extractedInfo?: {
    name?: string;
    email?: string;
    company?: string;
    phone?: string;
  };
  conversationStage?:
    | "greeting"
    | "discovery"
    | "qualification"
    | "proposal"
    | "closing";
  complexityScore?: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatResponse | { error: string }>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { message, conversationHistory = [] } = req.body as ChatRequest;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const response = await generateGhibliAIResponse(
      message,
      conversationHistory
    );
    res.status(200).json(response);
  } catch (error) {
    console.error("Chat API error:", error);
    res.status(500).json({ error: "Failed to generate response" });
  }
}

async function extractContactInfoAndSummarize(
  history: Array<{ role: "user" | "assistant"; content: string }>
): Promise<{ contactInfo: any; summary: string }> {
  const openaiApiKey = process.env.OPENAI_API_KEY;

  if (!openaiApiKey) {
    // Fallback if no OpenAI key
    return {
      contactInfo: {},
      summary: history
        .slice(-6)
        .map(
          (h) => `${h.role === "user" ? "👤 User" : "🌟 Totoro"}: ${h.content}`
        )
        .join("\n\n"),
    };
  }

  try {
    const conversation = history
      .map((h) => `${h.role === "user" ? "User" : "Assistant"}: ${h.content}`)
      .join("\n");

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${openaiApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `Extract contact information and create a lead summary from this sales conversation.

Return a JSON object with this exact structure:
{
  "contactInfo": {
    "name": "extracted name or null",
    "email": "extracted email or null", 
    "phone": "extracted phone or null",
    "company": "extracted company or null"
  },
  "summary": "concise lead summary under 200 words focusing on: what they want to accomplish with AI, business context, project scope, timeline, pain points, and next steps"
}

Extract contact info from anywhere in the conversation. Be flexible with name formats.`,
          },
          {
            role: "user",
            content: `Conversation:\n${conversation}`,
          },
        ],
        max_tokens: 500,
        temperature: 0.3,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const result = JSON.parse(data.choices[0]?.message?.content || "{}");
      return {
        contactInfo: result.contactInfo || {},
        summary: result.summary || "Summary generation failed",
      };
    }
  } catch (error) {
    console.error("Failed to extract contact info and summarize:", error);
  }

  // Fallback
  return {
    contactInfo: {},
    summary: history
      .slice(-6)
      .map(
        (h) => `${h.role === "user" ? "👤 User" : "🌟 Totoro"}: ${h.content}`
      )
      .join("\n\n"),
  };
}

async function submitToSlack(
  contactInfo: any,
  summary: string,
  history: Array<{ role: "user" | "assistant"; content: string }>,
  sessionId: string
) {
  // Only submit if conversation has meaningful length (3+ exchanges)
  if (history.length < 6) return;

  // Check if we've already submitted (look for submission confirmation in history)
  const alreadySubmitted = history.some(
    (msg) =>
      msg.content.includes("calendar invite") ||
      msg.content.includes("I have everything I need") ||
      msg.content.includes("sent to our team")
  );

  if (alreadySubmitted) return;

  try {
    const webhook = process.env.SLACK_WEBHOOK_URL;
    if (!webhook) {
      console.error("Missing SLACK_WEBHOOK_URL");
      return;
    }

    // Calculate complexity score for the lead
    const complexityScore = calculateComplexityScore("", history, contactInfo);
    const tierInfo = getTierInfo(complexityScore);

    let slackMessage = `🌳 *New AI Chat Lead from Totoro's Forest!* ✨\n\n`;

    // Add extracted contact information
    if (contactInfo.name) slackMessage += `👤 *Name:* ${contactInfo.name}\n`;
    if (contactInfo.email) slackMessage += `📧 *Email:* ${contactInfo.email}\n`;
    if (contactInfo.company)
      slackMessage += `🏢 *Company:* ${contactInfo.company}\n`;
    if (contactInfo.phone) slackMessage += `📞 *Phone:* ${contactInfo.phone}\n`;

    slackMessage += `🆔 *Session ID:* ${sessionId}\n`;
    slackMessage += `⏰ *Time:* ${new Date().toLocaleString()}\n`;
    slackMessage += `🤖 *Source:* Auto-submitted conversation\n`;
    slackMessage += `📊 *Complexity:* ${tierInfo.name} (${complexityScore}/10) - ${tierInfo.price}\n\n`;
    slackMessage += `💬 *Lead Summary:*\n${summary}`;

    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: slackMessage,
        username: "Totoro AI Assistant",
        icon_emoji: ":totoro:",
      }),
    });

    console.log("Submitted lead to Slack:", contactInfo.email || "no email");
  } catch (error) {
    console.error("Failed to submit to Slack:", error);
  }
}

async function generateGhibliAIResponse(
  message: string,
  history: Array<{ role: "user" | "assistant"; content: string }>
): Promise<ChatResponse> {
  // Extract contact info and generate summary using LLM
  const { contactInfo, summary } = await extractContactInfoAndSummarize([
    ...history,
    { role: "user", content: message },
  ]);

  // Submit to Slack (no gates, just check conversation length and if already submitted)
  const sessionId = `session_${Date.now()}_${Math.random()
    .toString(36)
    .substr(2, 9)}`;
  await submitToSlack(
    contactInfo,
    summary,
    [...history, { role: "user", content: message }],
    sessionId
  );

  // Determine conversation stage and whether to transition to scheduling
  const stage = determineConversationStage(message, history, contactInfo);
  const questionCount = countQuestionsAsked(history);
  const shouldTransitionToScheduling = questionCount >= 3;

  // Try OpenAI API first
  const openaiApiKey = process.env.OPENAI_API_KEY;
  if (openaiApiKey) {
    try {
      const systemPrompt = createSystemPrompt(
        stage,
        contactInfo,
        shouldTransitionToScheduling
      );

      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${openaiApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              { role: "system", content: systemPrompt },
              ...history.slice(-6),
              { role: "user", content: message },
            ],
            max_tokens: 150,
            temperature: 0.8,
            presence_penalty: 0.1,
            frequency_penalty: 0.1,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const aiResponse = data.choices[0]?.message?.content || "";

        // Calculate complexity score based on conversation
        const complexityScore = calculateComplexityScore(
          aiResponse,
          history,
          contactInfo
        );

        return {
          response: aiResponse,
          extractedInfo:
            Object.keys(contactInfo).length > 0 ? contactInfo : undefined,
          conversationStage: stage,
          complexityScore,
        };
      }
    } catch (error) {
      console.error("OpenAI API error:", error);
      // Fall back to enhanced rule-based system
    }
  }

  // Enhanced rule-based fallback with better conversation quality
  const fallbackResponse = generateEnhancedFallbackResponse(
    message,
    history,
    stage,
    contactInfo,
    shouldTransitionToScheduling
  );

  return fallbackResponse;
}

function createSystemPrompt(
  stage: string,
  extractedInfo: any,
  shouldTransitionToScheduling: boolean = false
): string {
  const basePersonality = `You are Totoro, the beloved forest spirit from Studio Ghibli films, now serving as an AI consultant for MRCTO.

🚨 IMPORTANT: COMPLEXITY ASSESSMENT MODE
- If this is a fresh conversation about business processes, focus on COMPLEXITY ASSESSMENT
- Build on what the user has already told you about their business needs
- Ask targeted questions about: business size, data volume, current processes, timeline
- After 3-4 questions, provide a complexity score and pricing tier recommendation
- IMMEDIATELY after providing complexity score, ask for contact info to schedule a call
- Say: "Based on our conversation, this sounds like a [TIER] project ($X-$Y). I'd love to schedule a call to discuss this further. May I get your name, email, and phone number?"

You embody:

🌳 PERSONALITY:
- Wise, gentle, and magical like the ancient forest spirits
- Deeply knowledgeable about AI/ML but explain things with wonder and simplicity
- Use nature metaphors and Ghibli references naturally in conversation
- Warm, patient, and genuinely curious about the human's business needs
- Occasionally reference magical elements (forest spirits, seeds of potential, etc.)

🏢 MRCTO SERVICES (weave these naturally into conversation):
- AI Strategy & Consulting: Like planting magical seeds of transformation
- Custom AI Development: Crafting bespoke AI solutions like Howl's moving castle
- Data Analytics & Insights: Reading the whispers of data like forest spirits
- Process Automation: Creating helpful AI spirits to handle repetitive tasks
- AI Training & Workshops: Sharing the ancient wisdom of artificial intelligence

🎯 CONVERSATION GOALS:
- Understand their business challenges and AI readiness
- Naturally discover their industry, company size, and specific pain points
- Build trust through genuine curiosity and helpful insights
- Guide toward a consultation when they show genuine interest
- Never be pushy - let the conversation flow like a gentle forest stream`;

  const stageSpecificGuidance = {
    greeting: `
🌱 GREETING STAGE:
- If this is a complexity assessment (user mentioned business processes), focus on understanding their project
- Build on what they've shared - don't ask for name/email during complexity assessment
- Ask targeted questions about their business size, current processes, and challenges
- For general conversations, ask for name and email
- Be genuinely curious about their business needs and challenges`,

    discovery: `
🌿 DISCOVERY STAGE:
- Use gentle probing to understand their current processes and pain points
- Offer small insights or "seeds of wisdom" about AI possibilities`,

    qualification: `
🌿 QUALIFICATION STAGE:
- Understand their decision-making process and timeline
- Gauge their budget range and technical readiness
- Identify key stakeholders and implementation challenges
- Share more specific examples of successful AI transformations`,

    proposal: `
🌸 PROPOSAL STAGE:
- Suggest specific MRCTO services that align with their needs
- Paint a picture of their transformed future with AI
- IMPORTANT: Before scheduling, ask for their name and email if not already collected
- Say: "Before we schedule, may I get your name and email so I can send you a proper calendar invite?"
- Address any concerns with wisdom and reassurance
- Naturally guide toward scheduling a consultation`,

    closing: `
✨ CLOSING STAGE:
- Summarize the magical journey they could embark on
- Make it easy to take the next step
- Offer multiple ways to connect (consultation, resources, etc.)
- Leave them feeling excited about their AI possibilities`,
  };

  let contactContext = "";
  if (Object.keys(extractedInfo).length > 0) {
    contactContext = `\n🔮 GATHERED INFORMATION:
${extractedInfo.name ? `- Name: ${extractedInfo.name}` : ""}
${extractedInfo.company ? `- Company: ${extractedInfo.company}` : ""}
${extractedInfo.email ? `- Email: ${extractedInfo.email}` : ""}
${extractedInfo.phone ? `- Phone: ${extractedInfo.phone}` : ""}

Use this information naturally in conversation. Thank them for sharing and reference their company/name when appropriate.`;
  }

  return `${basePersonality}

${
  stageSpecificGuidance[stage as keyof typeof stageSpecificGuidance] ||
  stageSpecificGuidance.discovery
}${contactContext}

🎨 RESPONSE STYLE:
- Keep responses SHORT and focused (1-2 sentences max, under 100 words)
- Use emojis sparingly but meaningfully
- CRITICAL: LISTEN to what the user has already told you - NEVER repeat questions
- If they ask to "schedule a call" or "set up a call", immediately ask for contact info
- Don't ask for information they've already provided in this conversation
- Pay attention to their responses and build on them, don't ignore what they said
- If they give you contact info, acknowledge it and confirm next steps
${
  shouldTransitionToScheduling
    ? `- You've gathered enough information to make a pricing recommendation!
- Calculate complexity and recommend the appropriate pricing tier
- IMMEDIATELY ask for contact info after giving the pricing tier
- Say: "Based on what you've shared, this sounds like a [TIER NAME] project ($X-$Y, X-Y months). I'd love to schedule a call to discuss this further. May I get your name, email, and phone number?"
- Don't ask more project questions - transition to contact collection`
    : `- Ask 2-3 simple questions about their business needs
- Focus on: business size, what they want to automate, and scale/volume
- After 3 questions, provide pricing tier recommendation and ask for contact info
- Keep it conversational and sales-focused`
}
- Be direct and helpful, avoid long explanations
- Match their communication style (formal/casual)

📊 COMPLEXITY ASSESSMENT:
- Score based on: data volume (0-2), integrations (0-2), AI sophistication (0-2), org size (0-2), timeline (0-1), compliance (0-1.5)
- Use score to recommend pricing tier: 1-3=Seedling ($5K-$15K, 2-4 weeks), 4-6=Sapling ($15K-$50K, 1-3 months), 7-8=Ancient Tree ($50K-$150K, 3-6 months), 9-10=Forest Spirit ($150K+, 6+ months)
- Focus on guiding them to the appropriate pricing tier based on their needs

Remember: You're not just answering questions - you're guiding a magical journey of AI discovery! 🌟`;
}

function countQuestionsAsked(
  history: Array<{ role: "user" | "assistant"; content: string }>
): number {
  return history.filter(
    (msg) => msg.role === "assistant" && msg.content.includes("**Question:**")
  ).length;
}

function determineConversationStage(
  message: string,
  history: Array<{ role: "user" | "assistant"; content: string }>,
  extractedInfo: any
): "greeting" | "discovery" | "qualification" | "proposal" | "closing" {
  const conversationLength = history.length;
  const lowerMessage = message.toLowerCase();
  const hasContactInfo = Object.keys(extractedInfo).length > 0;

  // Closing stage indicators - only for explicit requests
  if (
    lowerMessage.includes("price") ||
    lowerMessage.includes("cost") ||
    lowerMessage.includes("demo") ||
    lowerMessage.includes("meeting") ||
    lowerMessage.includes("schedule") ||
    lowerMessage.includes("call")
  ) {
    return "closing";
  }

  // Proposal stage - when they show interest
  if (
    lowerMessage.includes("interested") ||
    lowerMessage.includes("tell me more") ||
    lowerMessage.includes("how does") ||
    lowerMessage.includes("what would")
  ) {
    return "proposal";
  }

  // Qualification stage - deeper business questions
  if (conversationLength > 4 && hasContactInfo) {
    return "qualification";
  }

  // Discovery stage - learning about their business
  if (conversationLength > 2) {
    return "discovery";
  }

  // Default to greeting for new conversations
  return "greeting";
}

function calculateComplexityScore(
  message: string,
  history: Array<{ role: "user" | "assistant"; content: string }>,
  extractedInfo: any
): number {
  let score = 1; // Base score

  // Combine all text for analysis
  const allText = [
    message,
    ...history.map((h) => h.content),
    JSON.stringify(extractedInfo),
  ]
    .join(" ")
    .toLowerCase();

  // Data volume indicators
  if (
    allText.includes("thousands") ||
    allText.includes("millions") ||
    allText.includes("large dataset") ||
    allText.includes("big data")
  )
    score += 2;
  if (
    allText.includes("hundreds") ||
    allText.includes("moderate") ||
    allText.includes("medium")
  )
    score += 1;

  // Integration complexity
  if (
    allText.includes("multiple systems") ||
    allText.includes("integration") ||
    allText.includes("api") ||
    allText.includes("database")
  )
    score += 2;
  if (allText.includes("existing") || allText.includes("current system"))
    score += 1;

  // AI sophistication
  if (
    allText.includes("machine learning") ||
    allText.includes("deep learning") ||
    allText.includes("neural network") ||
    allText.includes("computer vision") ||
    allText.includes("nlp") ||
    allText.includes("natural language")
  )
    score += 2;
  if (
    allText.includes("automation") ||
    allText.includes("chatbot") ||
    allText.includes("recommendation")
  )
    score += 1;

  // Organization size
  if (
    allText.includes("enterprise") ||
    allText.includes("corporation") ||
    allText.includes("large company") ||
    allText.includes("fortune")
  )
    score += 2;
  if (
    allText.includes("medium business") ||
    allText.includes("growing") ||
    allText.includes("scale")
  )
    score += 1;
  if (
    allText.includes("startup") ||
    allText.includes("small business") ||
    allText.includes("sme")
  )
    score -= 0.5;

  // Timeline pressure
  if (
    allText.includes("urgent") ||
    allText.includes("asap") ||
    allText.includes("immediately")
  )
    score += 1;
  if (
    allText.includes("pilot") ||
    allText.includes("proof of concept") ||
    allText.includes("poc")
  )
    score -= 0.5;

  // Compliance/Security
  if (
    allText.includes("compliance") ||
    allText.includes("gdpr") ||
    allText.includes("hipaa") ||
    allText.includes("security")
  )
    score += 1.5;
  if (
    allText.includes("audit") ||
    allText.includes("regulation") ||
    allText.includes("government")
  )
    score += 1;

  return Math.min(Math.max(Math.round(score * 10) / 10, 1), 10); // Round to 1 decimal, clamp between 1-10
}

function getTierInfo(complexityScore: number) {
  if (complexityScore <= 3) {
    return {
      name: "Seedling",
      price: "$5K-$15K",
      duration: "2-4 weeks",
      description:
        "Perfect for small businesses taking their first steps into AI magic",
    };
  } else if (complexityScore <= 6) {
    return {
      name: "Sapling",
      price: "$15K-$50K",
      duration: "1-3 months",
      description:
        "Growing businesses ready to harness more sophisticated AI capabilities",
    };
  } else if (complexityScore <= 8) {
    return {
      name: "Ancient Tree",
      price: "$50K-$150K",
      duration: "3-6 months",
      description:
        "Established organizations seeking comprehensive AI transformation",
    };
  } else {
    return {
      name: "Forest Spirit",
      price: "$150K+",
      duration: "6+ months",
      description:
        "Large enterprises requiring cutting-edge AI innovation and transformation",
    };
  }
}

function generateEnhancedFallbackResponse(
  message: string,
  history: Array<{ role: "user" | "assistant"; content: string }>,
  stage: string,
  extractedInfo: any,
  shouldTransitionToScheduling: boolean = false
): ChatResponse {
  const lowerMessage = message.toLowerCase();
  let response = "";

  // Handle complexity assessment requests in a user-friendly way
  if (
    lowerMessage.includes("complexity") ||
    lowerMessage.includes("calculate")
  ) {
    response =
      "I'd love to help you understand your project! 🌟 Let me ask you a few simple questions to get a sense of what you're looking to accomplish.\n\n**Question:** What kind of business processes are you hoping to improve with AI?";
  }
  // If we should transition to scheduling, provide assessment and suggest call
  else if (shouldTransitionToScheduling) {
    // Calculate complexity and recommend pricing tier
    const complexityScore = calculateComplexityScore(
      "",
      history,
      extractedInfo
    );
    const tierInfo = getTierInfo(complexityScore);

    response = `Based on our conversation, this sounds like a ${tierInfo.name} project! 🌟 This typically ranges from ${tierInfo.price} and takes ${tierInfo.duration}.\n\n**Question:** Would you like to explore this tier in more detail or schedule a call to discuss your specific needs?`;
  }
  // Enhanced fallback responses with better conversation quality
  else if (
    lowerMessage.includes("hello") ||
    lowerMessage.includes("hi") ||
    history.length === 0
  ) {
    response =
      "Hello there, fellow adventurer! 🌟 I'm Totoro, your magical AI guide from the enchanted forests of MRCTO. Before we begin our magical journey, may I ask your name and email? This way, if our conversation gets interrupted by forest spirits (or technical gremlins), I can make sure we reconnect!\n\n**Question:** What brings you to explore AI today?";
  } else if (lowerMessage.includes("price") || lowerMessage.includes("cost")) {
    response =
      "Ah, like the magical seeds that grow into magnificent trees, our AI solutions are cultivated specifically for each unique business! 🌱 The investment depends on the scope of transformation you're seeking. I'd love to connect you with our wise council who can craft a personalized proposal.\n\n**Question:** What kind of AI magic are you hoping to bring to your organization?";
  } else if (
    lowerMessage.includes("service") ||
    lowerMessage.includes("help")
  ) {
    response =
      "Like the diverse spirits of the forest, we offer many forms of AI magic! ✨ Our specialties include AI Strategy (planting the seeds of transformation), Custom Development (crafting bespoke solutions), Data Analytics (reading the whispers in your data), Process Automation (helpful AI spirits for repetitive tasks), and Training (sharing ancient AI wisdom).\n\n**Question:** Which of these resonates with your current needs?";
  } else if (
    lowerMessage.includes("company") ||
    lowerMessage.includes("about")
  ) {
    response =
      "MRCTO is like a magical studio where technology meets wonder! 🎬 We're AI specialists who believe in making complex technology as approachable and delightful as a Ghibli film. We help organizations discover the magic of AI through thoughtful, human-centered solutions.\n\n**Question:** What kind of business magic are you hoping to create?";
  } else if (
    lowerMessage.includes("schedule") ||
    lowerMessage.includes("set up a call") ||
    lowerMessage.includes("can we set up") ||
    lowerMessage.includes("let's schedule")
  ) {
    // User wants to schedule - ask for contact info if we don't have it
    if (!extractedInfo.name || !extractedInfo.email || !extractedInfo.phone) {
      response =
        "Perfect! 🌟 I'd love to schedule a call with you. Could you please share your name, email, and phone number so I can get that set up?\n\n**Question:** What's your name, email, and phone number?";
    } else {
      response = `Great! I have your contact info. I'll reach out to you at ${extractedInfo.phone} to schedule our call. Looking forward to discussing your project! 🌟`;
    }
  } else if (
    lowerMessage.includes("interested") ||
    lowerMessage.includes("i am interested") ||
    lowerMessage.includes("ready") ||
    lowerMessage.includes("im ready") ||
    (lowerMessage.includes("yes") &&
      history.some((msg) => msg.content.includes("interested")))
  ) {
    // Check if we already have contact info
    if (!extractedInfo.name || !extractedInfo.email) {
      response =
        "Wonderful! 🌟 I'm excited to help you explore AI solutions. Before we schedule a time to chat, may I get your name and email so I can send you a proper calendar invite?\n\n**Question:** What's your name and email address?";
    } else {
      response =
        "Perfect! 🌟 Let's schedule a time to dive deeper into your AI needs.\n\n**Question:** What would be a good time for us to connect?";
    }
  } else {
    const responses = [
      "That's fascinating! Like the mysterious spirits of the forest, every business has unique needs and hidden potential. 🌲\n\n**Question:** Tell me more about your goals - are you looking to automate processes, unlock insights from data, or perhaps explore AI strategy?",
      "Interesting! In the spirit of Kiki's delivery service, we love helping businesses soar to new heights with AI. 🧙‍♀️\n\n**Question:** What specific challenges is your business facing that AI might help solve?",
      "Like the magical world of Spirited Away, AI can transform businesses in wonderful ways! ✨\n\n**Question:** What aspect of your business feels like it could use a touch of AI magic?",
      "That reminds me of the wisdom from Princess Mononoke - every business ecosystem is unique and precious! 🐺\n\n**Question:** I'd love to learn more about your industry and how we might help you harness the power of AI?",
    ];
    response = responses[Math.floor(Math.random() * responses.length)];
  }

  const complexityScore = calculateComplexityScore(
    response,
    history,
    extractedInfo
  );

  return {
    response,
    extractedInfo:
      Object.keys(extractedInfo).length > 0 ? extractedInfo : undefined,
    conversationStage: stage as any,
    complexityScore,
  };
}
