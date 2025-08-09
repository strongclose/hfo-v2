"use client";

import { Shield, CheckCircle, Search, Activity } from "lucide-react";
import { GlobalChatbot } from "../GlobalChatbot";

interface HeroV2Props {
  onSearch: (procedure: string, location: string) => void;
  selectedRadius: number;
  onRadiusChange: (radius: number) => void;
}

/**
 * HeroV2_AIChatbot - Advanced Hero with AI Chatbot Integration
 *
 * Features:
 * - Dark gradient background (135deg, #0A0F1C → #2563EB)
 * - GlobalChatbot component for AI-powered healthcare cost queries
 * - Decorative shield + magnifying glass background elements
 * - Stats row with savings/procedures/cost data
 * - Fully responsive design
 * - Inter font family
 *
 * Use Case: When ready to deploy AI-powered cost estimation interface
 *
 * Created: [Current Date]
 * Status: Ready for production deployment
 */
export function HeroV2_AIChatbot({
  onSearch,
  selectedRadius,
  onRadiusChange,
}: HeroV2Props) {
  return (
    <div
      className="relative py-24 pt-32 hero-animated-bg overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial Gradient Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.08),transparent_50%)] motion-safe:animate-pulse motion-safe:animation-duration-[8s]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.06),transparent_50%)] motion-safe:animate-pulse motion-safe:animation-duration-[10s]"></div>
      </div>
      {/* Subtle decorative elements */}
      <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 opacity-10 z-0">
        <div className="relative">
          <Shield
            className="w-64 h-64 text-teal-600"
            strokeWidth={1}
            fill="rgba(20, 184, 166, 0.05)"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="w-32 h-32 text-blue-600/30" strokeWidth={1} />
          </div>
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center px-6 max-w-7xl mx-auto">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight max-w-6xl">
          Healthcare Prices Are Now Public.
          <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-purple-600 bg-clip-text text-transparent">
            {" "}
            Dig In.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-800 mb-8 max-w-4xl leading-normal">
          Recent federal transparency laws require hospitals and insurers to publish their real prices. We've organized trillions of data points and added a layer of{" "}
          <span className="intelligent-gradient-text font-semibold">
            intelligence
          </span>{" "}
          to make this information accessible, easy to use, and free for everyone.
        </p>

        {/* Global Chatbot Component */}
        <GlobalChatbot
          height="sm"
          context="healthcare"
          placeholder="Give it a try..."
          initialMessage="What healthcare price would you like to see? Try: 'MRI price in Boston'."
          className="max-w-4xl"
        />
      </div>
    </div>
  );
}
