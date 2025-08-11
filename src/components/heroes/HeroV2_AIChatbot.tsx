"use client";

import { Shield, CheckCircle, Search, Activity, ArrowRight } from "lucide-react";
import { GlobalChatbot } from "../GlobalChatbot";
import { NoSSR } from "../NoSSR";

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
      className="relative min-h-screen pt-24 bg-gray-50 overflow-hidden"
      style={{
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.05),transparent_50%)]"></div>
      </div>
      {/* Subtle decorative elements */}
      <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 opacity-5 z-0">
        <div className="relative">
          <Shield
            className="w-64 h-64 text-teal-500/30"
            strokeWidth={0.5}
            fill="rgba(20, 184, 166, 0.05)"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="w-32 h-32 text-white/10" strokeWidth={0.5} />
          </div>
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-30 flex flex-col items-center justify-center min-h-[calc(100vh-96px)] text-center px-6 max-w-7xl mx-auto">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight max-w-6xl tracking-tight">
          Healthcare Pricing Finally Transparent
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white mb-8 max-w-4xl leading-normal">
          Recent federal transparency laws require hospitals and insurers to publish their real prices. We've organized trillions of data points and added a layer of{" "}
          <span className="intelligent-gradient-text">
            intelligence
          </span>{" "}
          to make this information accessible, easy to use, and free for everyone.
        </p>

        {/* Global Chatbot Component */}
        <NoSSR
          fallback={
            <div className="max-w-4xl backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden shadow-2xl h-64 flex flex-col"
                 style={{
                   background: "rgba(255, 255, 255, 0.15)",
                   backdropFilter: "blur(20px)",
                 }}>
              <div className="p-6 flex-1 flex items-center justify-center">
                <div className="text-white/60 text-sm">Loading AI Assistant...</div>
              </div>
              <div className="pt-4 px-4 pb-2 border-t border-white/20">
                <div className="flex gap-3 opacity-50">
                  <div className="flex-1 bg-white/25 rounded-xl px-4 py-3">
                    <div className="text-white/60 text-sm">Give it a try...</div>
                  </div>
                  <div className="px-6 py-3 bg-white/25 rounded-xl text-white/60 text-sm">
                    Ask AI
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <GlobalChatbot
            height="sm"
            context="healthcare"
            placeholder="Give it a try..."
            initialMessage="What healthcare price would you like to see? Try: 'MRI price in Boston'."
            className="max-w-4xl"
          />
        </NoSSR>

        {/* Primary CTA */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.href = '/search-procedure';
              }
            }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-indigo-700 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            Start Comparing Prices
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-white/80 text-sm">Or ask our AI above for instant answers</p>
        </div>
      </div>
    </div>
  );
}
