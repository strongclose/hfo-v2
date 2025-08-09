"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface ChatMessage {
  id: string;
  type: "bot" | "user";
  content: string;
  timestamp: Date;
  resultCards?: Array<{
    id: string;
    hospitalName: string;
    price: string;
    badge?: string;
    originalPrice?: string;
    savings?: string;
  }>;
}

interface GlobalChatbotProps {
  className?: string;
  height?: "sm" | "md" | "lg" | "xl";
  placeholder?: string;
  initialMessage?: string;
  context?: "healthcare" | "insurance" | "procedure" | "location" | "general";
  style?: React.CSSProperties;
}

const heightClasses = {
  sm: "h-64",
  md: "h-80",
  lg: "h-96",
  xl: "h-[32rem]",
};

const chatHeightClasses = {
  sm: "h-32",
  md: "h-48",
  lg: "h-64",
  xl: "h-80",
};

export function GlobalChatbot({
  className = "",
  height = "md",
  placeholder = "Give it a try...",
  initialMessage = 'Hi! I can help you find the best prices for any medical procedure. Try asking: "MRI cost in Boston" or "Cheapest CT scan near me" What healthcare costs would you like to learn more about?',
  context = "healthcare",
  style,
}: GlobalChatbotProps) {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: "bot",
      content: initialMessage,
      timestamp: new Date(),
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const generateBotResponse = (userMessage: string): ChatMessage => {
    const responses = {
      healthcare: [
        "I can help you find pricing for that procedure. Healthcare costs can vary significantly by location and provider. Would you like me to search for specific providers in your area?",
        "That's a great question about healthcare costs. Prices can range widely depending on your insurance coverage and the facility. Let me help you find the most affordable options.",
        "Understanding healthcare pricing is important for making informed decisions. I can provide you with cost estimates and help you compare different providers and locations.",
      ],
      insurance: [
        "Let me help you understand your insurance coverage options. Different plans have varying deductibles, copays, and coverage networks that affect your out-of-pocket costs.",
        "Insurance can be complex, but I'm here to help you navigate your options and understand what's covered under different plans.",
        "That's a smart question about insurance. Understanding your benefits can save you thousands of dollars on medical procedures.",
      ],
      procedure: [
        "I can help you find cost estimates for that specific procedure. Prices vary by location, provider, and your insurance coverage. Would you like me to search for options in your area?",
        "That procedure can have different pricing depending on where it's performed. I can help you compare costs at different facilities and find the most affordable options.",
        "Great question about that medical procedure. Let me help you understand the typical costs and find providers that offer competitive pricing.",
      ],
      location: [
        "Location plays a big role in healthcare pricing. I can help you find the most affordable options in your area or compare costs across different regions.",
        "Healthcare costs can vary significantly by location. Would you like me to help you find providers in your area or compare pricing across different cities?",
        "That's a smart approach to consider location when looking at healthcare costs. I can help you find the best options in your preferred area.",
      ],
      general: [
        "I'm here to help you understand healthcare costs and find the best options for your needs. What specific procedure or service are you interested in learning about?",
        "Healthcare pricing can be confusing, but I'm here to help you navigate your options and find affordable care. What would you like to know more about?",
        "That's a great question about healthcare costs. I can help you find pricing information, compare providers, and understand your options.",
      ],
    };

    const contextResponses = responses[context] || responses.general;
    const randomResponse =
      contextResponses[Math.floor(Math.random() * contextResponses.length)];

    // Add some result cards for healthcare context
    const shouldAddCards = context === "healthcare" && Math.random() > 0.5;
    const resultCards = shouldAddCards
      ? [
          {
            id: "1",
            hospitalName: "City Medical Center",
            price: "$1,250",
            badge: "Best Value",
            originalPrice: "$2,100",
            savings: "40%",
          },
          {
            id: "2",
            hospitalName: "Regional Health System",
            price: "$1,890",
            originalPrice: "$2,400",
            savings: "21%",
          },
        ]
      : undefined;

    return {
      id: Date.now().toString(),
      type: "bot",
      content: randomResponse,
      timestamp: new Date(),
      resultCards,
    };
  };

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content: chatInput,
      timestamp: new Date(),
    };

    setChatMessages((prev) => [...prev, userMessage]);
    setChatInput("");
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(
      () => {
        const botResponse = generateBotResponse(chatInput);
        setChatMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      },
      1000 + Math.random() * 1000,
    );
  };

  const handleChatKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`max-w-2xl w-full ${className}`} style={style}>
      <div
        className={`backdrop-blur-xl rounded-2xl border border-white/30 overflow-hidden shadow-2xl ${heightClasses[height]} flex flex-col`}
        style={{
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Chat Messages Area */}
        <div ref={chatContainerRef} className="p-6 flex-1 overflow-y-auto">
          <div className="space-y-4">
            {chatMessages.map((message) => (
              <div key={message.id}>
                {message.type === "bot" && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">✨</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white/60 backdrop-blur-sm rounded-2xl rounded-tl-md py-4 px-3 border border-white/20">
                        <div className="text-sm leading-relaxed text-gray-800">
                          <p
                            className="text-justify break-words whitespace-normal hyphens-auto"
                            style={{
                              wordWrap: "break-word",
                              overflowWrap: "break-word",
                            }}
                          >
                            {message.content
                              .split("\n")
                              .filter((line) => line.trim() !== "")
                              .join(" ")
                              .replace(/\*\*(.*?)\*\*/g, "$1")}
                          </p>
                        </div>
                        {message.resultCards && (
                          <div className="mt-4 space-y-3">
                            {message.resultCards.map((card) => (
                              <div
                                key={card.id}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3"
                              >
                                <div className="flex justify-between items-start">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <h4 className="font-semibold text-white text-sm">
                                        {card.hospitalName}
                                      </h4>
                                      {card.badge && (
                                        <span className="bg-teal-400/30 text-teal-100 text-xs px-2 py-1 rounded-full font-medium">
                                          {card.badge}
                                        </span>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <span className="text-2xl font-bold text-teal-400">
                                        {card.price}
                                      </span>
                                      {card.originalPrice && (
                                        <>
                                          <span className="text-sm text-gray-400 line-through">
                                            {card.originalPrice}
                                          </span>
                                          <span className="text-sm text-green-400 font-medium">
                                            Save {card.savings}
                                          </span>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {message.type === "user" && (
                  <div className="flex gap-3 justify-end">
                    <div className="bg-blue-600/20 backdrop-blur-sm rounded-2xl rounded-tr-md py-3 px-4 border border-blue-500/30 max-w-xs">
                      <p className="text-sm text-gray-800">{message.content}</p>
                    </div>
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">You</span>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">✨</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl rounded-tl-md py-4 px-3 border border-white/5">
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
                    <div
                      className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Input Area */}
        <div className="pt-4 px-4 pb-2 border-t border-gray-200/30">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={handleChatKeyPress}
                placeholder={placeholder}
                className="w-full bg-white/80 border-2 border-teal-400/70 text-gray-800 placeholder-gray-600 rounded-xl px-4 py-3 focus:border-teal-500 focus:ring-0 transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                }}
                disabled={isTyping}
              />
            </div>
            <Button
              variant="ask-ai"
              onClick={handleSendMessage}
              disabled={!chatInput.trim() || isTyping}
              className="ask-ai-button transition-all duration-300 hover:scale-105 h-9"
              style={{
                opacity: 1,
                filter:
                  !chatInput.trim() || isTyping ? "grayscale(20%)" : "none",
              }}
            >
              Ask AI
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
