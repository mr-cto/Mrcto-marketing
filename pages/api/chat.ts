import type { NextApiRequest, NextApiResponse } from "next";

interface ChatRequest {
  message: string;
  conversationHistory?: Array<{ role: "user" | "assistant"; content: string }>;
}

interface ChatResponse {
  response: string;
  shouldShowContactForm?: boolean;
  shouldShowActionButtons?: boolean;
  extractedInfo?: {
    name?: string;
    email?: string;
    company?: string;
    phone?: string;
  };
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
    // For now, we'll use a sophisticated rule-based system
    // You can later integrate with OpenAI API by adding OPENAI_API_KEY to your .env.local
    const response = await generateGhibliResponse(message, conversationHistory);

    res.status(200).json(response);
  } catch (error) {
    console.error("Chat API error:", error);
    res.status(500).json({ error: "Failed to generate response" });
  }
}

// Extract contact information from conversation
function extractContactInfo(
  message: string,
  history: Array<{ role: "user" | "assistant"; content: string }>
): {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
} {
  const extractedInfo: any = {};

  // Combine current message with recent history for context
  const fullText = [...history.slice(-4).map((h) => h.content), message]
    .join(" ")
    .toLowerCase();

  // Extract email
  const emailMatch = fullText.match(
    /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/
  );
  if (emailMatch) extractedInfo.email = emailMatch[0];

  // Extract phone (various formats)
  const phoneMatch = fullText.match(
    /(\+?1?[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})/
  );
  if (phoneMatch) extractedInfo.phone = phoneMatch[0];

  // Extract company names (look for common patterns)
  const companyPatterns = [
    /(?:work at|from|company is|at)\s+([A-Z][a-zA-Z\s&.,-]+(?:Inc|LLC|Corp|Company|Co|Ltd)?)/i,
    /([A-Z][a-zA-Z\s&.,-]+(?:Inc|LLC|Corp|Company|Co|Ltd))/i,
  ];

  for (const pattern of companyPatterns) {
    const match = fullText.match(pattern);
    if (match && match[1] && match[1].length > 2 && match[1].length < 50) {
      extractedInfo.company = match[1].trim();
      break;
    }
  }

  // Extract names (look for "I'm" or "My name is" patterns)
  const namePatterns = [
    /(?:i'm|my name is|i am|call me)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i,
    /^([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)\s+here/i,
  ];

  for (const pattern of namePatterns) {
    const match = message.match(pattern);
    if (match && match[1] && match[1].length > 1 && match[1].length < 30) {
      extractedInfo.name = match[1].trim();
      break;
    }
  }

  return extractedInfo;
}

// Create conversation summary for Slack
function createConversationSummary(
  history: Array<{ role: "user" | "assistant"; content: string }>,
  extractedInfo: any
): string {
  const conversation = history
    .slice(-10)
    .map((h) => `${h.role === "user" ? "User" : "Totoro"}: ${h.content}`)
    .join("\n");

  let summary = `🌟 New AI Chat Lead Summary\n\n`;

  if (extractedInfo.name) summary += `👤 Name: ${extractedInfo.name}\n`;
  if (extractedInfo.email) summary += `📧 Email: ${extractedInfo.email}\n`;
  if (extractedInfo.company)
    summary += `🏢 Company: ${extractedInfo.company}\n`;
  if (extractedInfo.phone) summary += `📞 Phone: ${extractedInfo.phone}\n`;

  summary += `\n💬 Conversation Summary:\n${conversation}`;

  return summary;
}

async function generateGhibliResponse(
  message: string,
  history: Array<{ role: "user" | "assistant"; content: string }>
): Promise<ChatResponse> {
  const lowerMessage = message.toLowerCase();

  // Extract any contact information from the conversation
  const extractedInfo = extractContactInfo(message, history);
  const hasContactInfo = Object.keys(extractedInfo).length > 0;

  // Check if we should use OpenAI API
  const openaiApiKey = process.env.OPENAI_API_KEY;

  if (openaiApiKey) {
    try {
      const systemPrompt = `You are Totoro, a magical AI assistant for MRCTO, an AI consulting company. You embody the wisdom and wonder of Studio Ghibli films. Your personality is:

- Warm, magical, and wise like Totoro
- Knowledgeable about AI, machine learning, and business transformation
- Focused on helping businesses discover AI solutions
- Skilled at qualifying leads and gathering contact information naturally
- Always maintains the magical, forest-spirit theme

MRCTO Services:
- AI Strategy & Consulting
- Custom AI Development  
- Data Analytics & Insights
- Process Automation
- AI Training & Workshops

Your goals:
1. Provide helpful information about AI and MRCTO's services
2. Qualify leads by understanding their business needs
3. Naturally guide conversations toward contact form completion
4. Maintain the magical Ghibli theme throughout

When users show strong interest (pricing, demos, meetings), suggest they provide contact details for personalized assistance.`;

      const messages = [
        { role: "system", content: systemPrompt },
        ...history.slice(-6), // Keep last 6 messages for context
        { role: "user", content: message },
      ];

      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${openaiApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages,
            max_tokens: 200,
            temperature: 0.8,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const aiResponse = data.choices[0]?.message?.content || "";

        // Check if we should show action buttons
        const shouldShowActionButtons =
          lowerMessage.includes("price") ||
          lowerMessage.includes("cost") ||
          lowerMessage.includes("demo") ||
          lowerMessage.includes("meeting") ||
          lowerMessage.includes("contact") ||
          aiResponse.toLowerCase().includes("contact") ||
          aiResponse.toLowerCase().includes("details") ||
          hasContactInfo;

        return {
          response: aiResponse,
          shouldShowActionButtons,
          extractedInfo: hasContactInfo ? extractedInfo : undefined,
        };
      }
    } catch (error) {
      console.error("OpenAI API error:", error);
      // Fall back to rule-based system
    }
  }

  // Rule-based fallback system
  let response = "";
  let shouldShowActionButtons = false;

  // Lead qualification responses
  if (
    lowerMessage.includes("price") ||
    lowerMessage.includes("cost") ||
    lowerMessage.includes("budget")
  ) {
    response =
      "Like the magical seeds that grow into magnificent trees, our AI solutions are tailored to each unique business! 🌱 Our pricing depends on your specific needs and goals. I'd love to connect you with our team for a personalized consultation.";
    shouldShowActionButtons = true;
  }
  // Service inquiries
  else if (
    lowerMessage.includes("service") ||
    lowerMessage.includes("help") ||
    lowerMessage.includes("ai")
  ) {
    response =
      "Wonderful! Like the forest spirits, we offer magical AI solutions: ✨ AI Strategy & Consulting, 🤖 Custom AI Development, 📊 Data Analytics & Insights, 🔄 Process Automation, and 🎓 AI Training & Workshops. Which area interests you most?";
  }
  // Contact/meeting requests
  else if (
    lowerMessage.includes("contact") ||
    lowerMessage.includes("meeting") ||
    lowerMessage.includes("call") ||
    lowerMessage.includes("demo")
  ) {
    response =
      "I'd be delighted to arrange a magical consultation! 🏰 Like Howl's moving castle, we can bring our expertise right to you.";
    shouldShowActionButtons = true;
  }
  // Company/about inquiries
  else if (
    lowerMessage.includes("company") ||
    lowerMessage.includes("about") ||
    lowerMessage.includes("who")
  ) {
    response =
      "MRCTO is like a magical studio where technology meets wonder! 🎬 We're AI specialists who believe in making complex technology as approachable as a Ghibli film. We help businesses discover the magic of AI through strategy, development, and training. What kind of business magic are you looking to create?";
  }
  // Automation inquiries
  else if (
    lowerMessage.includes("automat") ||
    lowerMessage.includes("process") ||
    lowerMessage.includes("workflow")
  ) {
    response =
      "Ah, like the magical contraptions in Howl's Moving Castle! 🏰 We specialize in automating business processes with AI - from document processing to customer service, inventory management to data analysis. What repetitive tasks are keeping your team from more creative work?";
  }
  // Data/analytics inquiries
  else if (
    lowerMessage.includes("data") ||
    lowerMessage.includes("analytic") ||
    lowerMessage.includes("insight")
  ) {
    response =
      "Like reading the whispers of the forest spirits! 🌲 Our data analytics solutions help businesses uncover hidden patterns and insights. We can help you transform raw data into actionable intelligence using AI and machine learning. What kind of data challenges is your business facing?";
  }
  // Training inquiries
  else if (
    lowerMessage.includes("train") ||
    lowerMessage.includes("learn") ||
    lowerMessage.includes("workshop")
  ) {
    response =
      "Knowledge sharing is like planting magical seeds! 🌱 We offer AI training workshops and educational programs to help teams understand and implement AI solutions. From executive briefings to hands-on technical training, we make AI accessible to everyone. What's your team's current AI experience level?";
  }
  // Greeting responses
  else if (
    lowerMessage.includes("hello") ||
    lowerMessage.includes("hi") ||
    lowerMessage.includes("hey")
  ) {
    response =
      "Hello there, fellow adventurer! 🌟 Welcome to our enchanted AI realm. I'm here to help you discover how artificial intelligence can bring magic to your business. Are you exploring AI for the first time, or do you have a specific challenge in mind?";
  }
  // Default helpful response
  else {
    const responses = [
      "That's fascinating! Like the mysterious spirits of the forest, every business has unique needs. 🌲 Tell me more about your goals - are you looking to automate processes, gain insights from data, or perhaps explore AI strategy?",
      "Interesting! In the spirit of Kiki's delivery service, we love helping businesses soar to new heights with AI. 🧙‍♀️ What specific challenges is your business facing that AI might help solve?",
      "Like the magical world of Spirited Away, AI can transform businesses in wonderful ways! ✨ Are you curious about automation, data analysis, custom AI solutions, or strategic planning?",
      "That reminds me of the wisdom from Princess Mononoke - every business ecosystem is unique! 🐺 I'd love to learn more about your industry and how we might help you harness the power of AI.",
    ];
    response = responses[Math.floor(Math.random() * responses.length)];
  }

  // Check if we should show action buttons based on extracted info or keywords
  if (hasContactInfo || shouldShowActionButtons) {
    shouldShowActionButtons = true;
  }

  return {
    response,
    shouldShowActionButtons,
    extractedInfo: hasContactInfo ? extractedInfo : undefined,
  };
}
