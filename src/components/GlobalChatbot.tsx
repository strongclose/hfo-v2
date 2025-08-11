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
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Initialize on client side only
  useEffect(() => {
    setIsClient(true);
    setChatMessages([
      {
        id: "initial",
        type: "bot",
        content: initialMessage,
        timestamp: new Date(),
      },
    ]);
  }, [initialMessage]);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const generateBotResponse = (userMessage: string, messageCount: number): ChatMessage => {
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
    // Use deterministic selection based on message count instead of random
    const responseIndex = messageCount % contextResponses.length;
    const selectedResponse = contextResponses[responseIndex];

    // Add result cards for healthcare context - deterministic based on message count
    const shouldAddCards = context === "healthcare" && messageCount % 2 === 0;
    const resultCards = shouldAddCards
      ? [
          {
            id: "card-1",
            hospitalName: "City Medical Center",
            price: "$1,250",
            badge: "Best Value",
            originalPrice: "$2,100",
            savings: "40%",
          },
          {
            id: "card-2",
            hospitalName: "Regional Health System",
            price: "$1,890",
            originalPrice: "$2,400",
            savings: "21%",
          },
        ]
      : undefined;

    return {
      id: `bot-${messageCount}`,
      type: "bot",
      content: selectedResponse,
      timestamp: new Date(),
      resultCards,
    };
  };

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    setChatMessages((prev) => {
      const messageCount = prev.length;
      const userMessage: ChatMessage = {
        id: `user-${messageCount}`,
        type: "user",
        content: chatInput,
        timestamp: new Date(),
      };

      setChatInput("");
      setIsTyping(true);

      // Simulate bot response delay - fixed delay instead of random
      setTimeout(
        () => {
          const botResponse = generateBotResponse(chatInput, messageCount + 1);
          setChatMessages((prevMessages) => [...prevMessages, botResponse]);
          setIsTyping(false);
        },
        1500, // Fixed 1.5 second delay
      );

      return [...prev, userMessage];
    });
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
        className={`bg-gradient-to-br from-teal-50 via-blue-50/50 to-indigo-50/30 backdrop-blur-xl border-2 border-teal-200/50 rounded-3xl shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 ${heightClasses[height]} flex flex-col relative overflow-hidden`}
      >
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-blue-500/5 rounded-3xl"></div>

        {/* Header */}
        <div className="relative z-10 pb-3 border-b border-teal-100/50 p-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div className="absolute inset-0 animate-pulse">
                <svg className="w-6 h-6 text-teal-400 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-900">AI Price Assistant</h2>
          </div>
        </div>
        {/* Chat Messages Area */}
        <div ref={chatContainerRef} className="relative z-10 p-4 flex-1 overflow-y-auto">
          {!isClient ? (
            <div className="p-6 flex items-center justify-center">
              <div className="text-gray-600 text-sm">Loading chat...</div>
            </div>
          ) : (
            <div className="space-y-4">
              {chatMessages.map((message) => (
              <div key={message.id}>
                {message.type === "bot" && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">✨</span>
                    </div>
                    <div className="flex-1">

                      <div className="bg-white/95 backdrop-blur-sm rounded-2xl rounded-tl-md py-4 px-3 border border-gray-200 shadow-md">
                        <div className="text-sm leading-relaxed text-gray-900">
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
                                className="bg-white backdrop-blur-sm border border-gray-200 rounded-lg p-3 shadow-sm"
                              >
                                <div className="flex justify-between items-start">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <h4 className="font-semibold text-gray-900 text-sm">
                                        {card.hospitalName}
                                      </h4>
                                      {card.badge && (
                                        <span className="bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded-full font-medium">
                                          {card.badge}
                                        </span>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <span className="text-2xl font-bold text-teal-600">
                                        {card.price}
                                      </span>
                                      {card.originalPrice && (
                                        <>
                                          <span className="text-sm text-gray-500 line-through">
                                            {card.originalPrice}
                                          </span>
                                          <span className="text-sm text-green-600 font-medium">
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
                    <div className="bg-teal-400/30 backdrop-blur-sm rounded-2xl rounded-tr-md py-3 px-4 border border-teal-300/30 max-w-xs">
                      <p className="text-sm text-white">{message.content}</p>
                    </div>
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
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
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.1s]"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="pt-4 px-4 pb-2 border-t border-white/20">
          {!isClient ? (
            <div className="flex gap-3 opacity-50">
              <div className="flex-1 bg-white/25 rounded-xl px-4 py-3">
                <div className="text-white/60 text-sm">{placeholder}</div>
              </div>
              <div className="px-6 py-3 bg-white/25 rounded-xl text-white/60 text-sm">
                Ask AI
              </div>
            </div>
          ) : (
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={handleChatKeyPress}
                  placeholder={placeholder}
                  className="w-full bg-white/25 border-2 border-teal-400/60 text-white placeholder-white rounded-xl px-4 py-3 focus:border-teal-400 focus:ring-0 transition-all duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(10px)",
                  }}
                  disabled={isTyping}
                />
              </div>
              <Button
                variant="secondary"
                onClick={handleSendMessage}
                disabled={!chatInput.trim() || isTyping}
                className="transition-all duration-300 hover:scale-105 px-6"
                style={{
                  height: '2.25rem', // Match input h-9 exactly
                  border: '2px solid white',
                  opacity: 1,
                  filter:
                    !chatInput.trim() || isTyping ? "grayscale(20%)" : "none",
                }}
              >
                Ask AI
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
