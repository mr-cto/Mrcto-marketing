"use client";

import { useState, useRef, useEffect } from "react";
import GhibliTotoro from "./GhibliTotoro";
import GhibliDustBunny from "./GhibliDustBunny";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface UserInfo {
  name?: string;
  email?: string;
  company?: string;
}

// Session management utilities
const CHAT_SESSION_KEY = "ghibli-chat-session";
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

interface ChatSession {
  messages: Message[];
  conversationHistory: Array<{ role: "user" | "assistant"; content: string }>;
  userInfo: UserInfo;
  timestamp: number;
  sessionId: string;
}

// Utility functions for session management
const generateSessionId = () =>
  `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

const saveSession = (session: ChatSession) => {
  try {
    if (typeof window === "undefined") return;

    const consent = localStorage.getItem("cookie-consent");
    const consentData = consent ? JSON.parse(consent) : null;

    if (consentData?.accepted) {
      localStorage.setItem(CHAT_SESSION_KEY, JSON.stringify(session));
    }
  } catch (error) {
    console.error("Failed to save chat session:", error);
  }
};

const loadSession = (): ChatSession | null => {
  try {
    if (typeof window === "undefined") return null;

    const consent = localStorage.getItem("cookie-consent");
    const consentData = consent ? JSON.parse(consent) : null;

    if (!consentData?.accepted) return null;

    const sessionData = localStorage.getItem(CHAT_SESSION_KEY);
    if (!sessionData) return null;

    const session: ChatSession = JSON.parse(sessionData);

    // Check if session is expired (24 hours)
    if (Date.now() - session.timestamp > SESSION_DURATION) {
      localStorage.removeItem(CHAT_SESSION_KEY);
      return null;
    }

    return session;
  } catch (error) {
    console.error("Failed to load chat session:", error);
    if (typeof window !== "undefined") {
      localStorage.removeItem(CHAT_SESSION_KEY);
    }
    return null;
  }
};

const clearSession = () => {
  try {
    if (typeof window !== "undefined") {
      localStorage.removeItem(CHAT_SESSION_KEY);
    }
  } catch (error) {
    console.error("Failed to clear chat session:", error);
  }
};

export default function GhibliChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId] = useState(() => generateSessionId());
  const [messages, setMessages] = useState<Message[]>(() => {
    const session = loadSession();
    if (session?.messages) {
      // Convert timestamp strings back to Date objects
      return session.messages.map((msg) => ({
        ...msg,
        timestamp: new Date(msg.timestamp),
      }));
    }
    return [
      {
        id: "1",
        text: "Hello! I'm Totoro, your magical AI guide from the enchanted forest of MRCTO! 🌳✨ I'm here to help you discover how AI can transform your business. What brings you to our magical realm today?",
        isUser: false,
        timestamp: new Date(),
      },
    ];
  });
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>(() => {
    const session = loadSession();
    return session?.userInfo || {};
  });
  const [showContactForm, setShowContactForm] = useState(false);
  const [showActionButtons, setShowActionButtons] = useState(false);
  const [extractedInfo, setExtractedInfo] = useState<any>({});
  const [conversationHistory, setConversationHistory] = useState<
    Array<{ role: "user" | "assistant"; content: string }>
  >(() => {
    const session = loadSession();
    return session?.conversationHistory || [];
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Save session to localStorage whenever state changes
  useEffect(() => {
    const session: ChatSession = {
      messages,
      conversationHistory,
      userInfo,
      timestamp: Date.now(),
      sessionId,
    };
    saveSession(session);
  }, [messages, conversationHistory, userInfo, sessionId]);

  // Clear expired sessions on component mount
  useEffect(() => {
    const session = loadSession();
    if (!session) {
      clearSession();
    }
  }, []);

  const addMessage = (text: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const generateAIResponse = async (userMessage: string) => {
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setIsTyping(false);
        addMessage(data.response, false);

        // Update conversation history
        const newHistory = [
          ...conversationHistory,
          { role: "user" as const, content: userMessage },
          { role: "assistant" as const, content: data.response },
        ];
        setConversationHistory(newHistory.slice(-10)); // Keep last 10 messages

        // Show action buttons if suggested by AI
        if (data.shouldShowActionButtons) {
          setShowActionButtons(true);
          if (data.extractedInfo) {
            setExtractedInfo(data.extractedInfo);
          }
        }
      } else {
        throw new Error("Failed to get AI response");
      }
    } catch (error) {
      console.error("Chat error:", error);
      setIsTyping(false);
      addMessage(
        "Oops! Like a mischievous dust bunny, something went wrong with my magic. Please try again! ✨",
        false
      );
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    addMessage(inputValue, true);
    const userMessage = inputValue;
    setInputValue("");

    await generateAIResponse(userMessage);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSubmitLead = async () => {
    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          extractedInfo,
          conversationHistory,
          sessionId,
        }),
      });

      if (response.ok) {
        setShowActionButtons(false);
        addMessage(
          "Thank you! 🌟 Your information has been sent to our team like a message carried by forest spirits. We'll be in touch within 24 hours to discuss how we can help with your AI journey!",
          false
        );
      } else {
        throw new Error("Failed to submit lead");
      }
    } catch (error) {
      console.error("Lead submission error:", error);
      addMessage(
        "Oops! Like a mischievous dust bunny, something went wrong. Please try again or use our contact form.",
        false
      );
    }
  };

  const handleNotReady = () => {
    setShowActionButtons(false);
    addMessage(
      "No worries at all! 🌸 I'm here whenever you're ready to explore the magical world of AI. Feel free to ask me anything else about our services or how AI might help your business!",
      false
    );
  };

  const clearChatSession = () => {
    clearSession();
    setMessages([
      {
        id: "1",
        text: "Hello! I'm Totoro, your magical AI guide from the enchanted forest of MRCTO! 🌳✨ I'm here to help you discover how AI can transform your business. What brings you to our magical realm today?",
        isUser: false,
        timestamp: new Date(),
      },
    ]);
    setConversationHistory([]);
    setUserInfo({});
    setShowContactForm(false);
    setShowActionButtons(false);
    setExtractedInfo({});
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const contactData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: `Chat lead: ${
        formData.get("message") || "Interested in AI services"
      }`,
    };

    // Send to existing contact API
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        setUserInfo({
          name: contactData.name,
          email: contactData.email,
          company: contactData.company,
        });
        setShowContactForm(false);
        addMessage(
          `Thank you ${
            contactData.name
          }! 🌟 Your information has been sent to our team like a message carried by forest spirits. We'll be in touch within 24 hours to discuss how we can help ${
            contactData.company || "your business"
          } with AI magic!`,
          false
        );
      }
    } catch (error) {
      addMessage(
        "Oops! Like a mischievous dust bunny, something went wrong. Please try again or use our contact form on the website.",
        false
      );
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 z-50 group"
      >
        <div className="flex items-center space-x-2">
          <GhibliTotoro
            size="small"
            variant="blue"
            className="animate-float-slow"
          />
          <span className="hidden group-hover:block text-sm font-medium">
            Chat with Totoro
          </span>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border-4 border-green-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 text-white relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <GhibliTotoro
              size="small"
              variant="blue"
              className="animate-float-slow"
            />
            <div>
              <h3 className="font-bold text-lg">Totoro AI Assistant</h3>
              <p className="text-green-100 text-sm">Your magical AI guide</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={clearChatSession}
              className="text-white hover:text-green-200 text-sm px-2 py-1 rounded hover:bg-green-600 transition-colors"
              title="Clear chat history"
            >
              🗑️
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-green-200 text-xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
        <GhibliDustBunny
          className="absolute top-2 right-12 opacity-30 animate-float-medium"
          size="small"
        />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-green-50 to-blue-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.isUser ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                message.isUser
                  ? "bg-green-500 text-white"
                  : "bg-white text-green-800 shadow-md border border-green-100"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
              <p
                className={`text-xs mt-1 ${
                  message.isUser ? "text-green-100" : "text-green-500"
                }`}
              >
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white text-green-800 p-3 rounded-2xl shadow-md border border-green-100">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        {showActionButtons && (
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-2xl shadow-md border border-green-100 max-w-sm">
              <div className="text-center mb-3">
                <p className="text-green-800 text-sm font-medium">
                  {Object.keys(extractedInfo).length > 0
                    ? "I've gathered some information from our chat. Ready to connect with our team?"
                    : "Would you like to connect with our team for personalized assistance?"}
                </p>
                {Object.keys(extractedInfo).length > 0 && (
                  <div className="mt-2 text-xs text-green-600 bg-green-50 p-2 rounded-lg">
                    {extractedInfo.name && <div>👤 {extractedInfo.name}</div>}
                    {extractedInfo.email && <div>📧 {extractedInfo.email}</div>}
                    {extractedInfo.company && (
                      <div>🏢 {extractedInfo.company}</div>
                    )}
                    {extractedInfo.phone && <div>📞 {extractedInfo.phone}</div>}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleSubmitLead}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-4 rounded-xl hover:shadow-lg transition-all duration-300 font-medium text-sm"
                >
                  Yes, Connect Me! ✨
                </button>
                <button
                  onClick={handleNotReady}
                  className="border-2 border-green-500 text-green-600 py-2 px-4 rounded-xl hover:bg-green-50 transition-all duration-300 font-medium text-sm"
                >
                  Not Ready Yet 🌸
                </button>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="absolute inset-0 bg-white z-10 p-4 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-green-800">
              Let's Connect! 🌟
            </h3>
            <button
              onClick={() => setShowContactForm(false)}
              className="text-green-600 hover:text-green-800 text-xl font-bold"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label className="block text-green-700 font-medium mb-1 text-sm">
                Name *
              </label>
              <input
                name="name"
                required
                className="w-full border-2 border-green-200 p-2 rounded-xl focus:border-green-500 focus:outline-none text-sm"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-green-700 font-medium mb-1 text-sm">
                Email *
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full border-2 border-green-200 p-2 rounded-xl focus:border-green-500 focus:outline-none text-sm"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-green-700 font-medium mb-1 text-sm">
                Company
              </label>
              <input
                name="company"
                className="w-full border-2 border-green-200 p-2 rounded-xl focus:border-green-500 focus:outline-none text-sm"
                placeholder="Your company"
              />
            </div>

            <div>
              <label className="block text-green-700 font-medium mb-1 text-sm">
                How can we help?
              </label>
              <textarea
                name="message"
                className="w-full border-2 border-green-200 p-2 rounded-xl focus:border-green-500 focus:outline-none text-sm h-20 resize-none"
                placeholder="Tell us about your AI needs..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-4 rounded-xl hover:shadow-lg transition-all duration-300 font-medium"
            >
              Send Message ✨
            </button>
          </form>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-green-200 bg-white">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask Totoro about AI magic..."
            className="flex-1 border-2 border-green-200 p-2 rounded-xl focus:border-green-500 focus:outline-none text-sm"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="bg-green-500 text-white p-2 rounded-xl hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
