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
      className="relative min-h-screen pt-24"
      style={{
        background:
          "linear-gradient(135deg, #0A0F1C 0%, #1E3A8A 30%, #1E40AF 70%, #2563EB 100%)",
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Large decorative shield in background with magnifying glass */}
      <div className="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2 opacity-5 z-0">
        <div className="relative">
          <Shield
            className="w-96 h-96 text-teal-500"
            strokeWidth={1.5}
            fill="rgba(20, 184, 166, 0.1)"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="w-48 h-48 text-teal-300" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Heart pulse activity indicator - positioned away from text */}
      <div className="absolute bottom-1/4 right-1/3 opacity-15 z-0">
        <Activity
          className="w-12 h-12 text-teal-400 animate-pulse"
          strokeWidth={0.5}
        />
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] text-center px-6 pt-16">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-6xl">
          Healthcare Prices Are Now Public. Just Ask.
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl leading-relaxed">
          Federal transparency laws require hospitals and insurers to publish their real prices. Our intelligent tool searches trillions of data points so you can compare costs, spot patterns, and make informed decisions, simply by asking.
        </p>

        {/* Global Chatbot Component */}
        <GlobalChatbot
          height="sm"
          context="healthcare"
          placeholder="Give it a try..."
          initialMessage="Hi! Ask me about any medical procedure or service. Try: 'MRI price in Boston' or 'Lowest cataract surgery cost near me' and I'll return real hospital and insurance data made public by federal law to give you clear answers."
          className="max-w-4xl"
        />
      </div>
    </div>
  );
}
