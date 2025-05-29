import type { NextApiRequest, NextApiResponse } from "next";

interface LeadSubmissionRequest {
  extractedInfo: {
    name?: string;
    email?: string;
    company?: string;
    phone?: string;
  };
  conversationHistory: Array<{ role: "user" | "assistant"; content: string }>;
  sessionId: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ success: boolean; error?: string }>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ success: false, error: `Method ${req.method} Not Allowed` });
  }

  const { extractedInfo, conversationHistory, sessionId } =
    req.body as LeadSubmissionRequest;

  if (!extractedInfo || !conversationHistory) {
    return res
      .status(400)
      .json({ success: false, error: "Missing required data" });
  }

  const webhook = process.env.SLACK_WEBHOOK_URL;
  if (!webhook) {
    console.error("Missing SLACK_WEBHOOK_URL");
    return res
      .status(500)
      .json({ success: false, error: "Configuration error" });
  }

  // Create conversation summary
  const conversation = conversationHistory
    .slice(-10)
    .map((h) => `${h.role === "user" ? "👤 User" : "🌟 Totoro"}: ${h.content}`)
    .join("\n\n");

  let slackMessage = `🌳 *New AI Chat Lead from Totoro's Forest!* ✨\n\n`;

  // Add extracted contact information
  if (extractedInfo.name) slackMessage += `👤 *Name:* ${extractedInfo.name}\n`;
  if (extractedInfo.email)
    slackMessage += `📧 *Email:* ${extractedInfo.email}\n`;
  if (extractedInfo.company)
    slackMessage += `🏢 *Company:* ${extractedInfo.company}\n`;
  if (extractedInfo.phone)
    slackMessage += `📞 *Phone:* ${extractedInfo.phone}\n`;

  slackMessage += `🆔 *Session ID:* ${sessionId}\n`;
  slackMessage += `⏰ *Time:* ${new Date().toLocaleString()}\n\n`;
  slackMessage += `💬 *Conversation Summary:*\n\`\`\`\n${conversation}\n\`\`\``;

  try {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: slackMessage,
        username: "Totoro AI Assistant",
        icon_emoji: ":totoro:",
      }),
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Slack webhook error", err);
    res
      .status(500)
      .json({ success: false, error: "Failed to send notification" });
  }
}
