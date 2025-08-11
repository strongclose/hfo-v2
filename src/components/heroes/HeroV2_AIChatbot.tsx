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
        <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-4xl leading-relaxed font-light">
          Ask our AI to search billions of federally mandated hospital and insurer prices. Compare cash, in-network, and out-of-network rates side by side—updated monthly.
        </p>

        {/* Trust Badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-50 border border-green-200 mb-8">
          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
          <span className="text-green-800 font-medium text-sm">
            Powered by government-mandated data. Updated monthly.
          </span>
        </div>

        {/* AI Chatbot - Matching compare-prices design */}
        <div className="w-full max-w-4xl">
          <NoSSR
            fallback={
              <div className="bg-gradient-to-br from-teal-50 via-blue-50/50 to-indigo-50/30 backdrop-blur-xl border-2 border-teal-200/50 rounded-3xl shadow-2xl p-6 h-64 flex flex-col relative overflow-hidden">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-blue-500/5 rounded-3xl"></div>

                {/* Header */}
                <div className="relative z-10 pb-3 border-b border-teal-100/50">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Activity className="w-6 h-6 text-teal-600" />
                      <div className="absolute inset-0 animate-pulse">
                        <Activity className="w-6 h-6 text-teal-400 opacity-40" />
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">AI Price Assistant</h2>
                  </div>
                </div>

                {/* Loading Content */}
                <div className="relative z-10 flex-1 flex items-center justify-center">
                  <div className="text-gray-600 text-sm">Loading AI Assistant...</div>
                </div>

                {/* Input Area */}
                <div className="relative z-10 flex items-center gap-0 mt-4">
                  <div className="flex-1 h-12 bg-white/95 border-2 border-teal-200 rounded-l-xl flex items-center px-4">
                    <div className="text-gray-500 text-base">Type a question to find the best healthcare prices…</div>
                  </div>
                  <div className="h-12 bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 rounded-r-xl px-4 flex items-center border-2 border-l-0 border-teal-200">
                    <Activity className="w-4 h-4 text-white animate-pulse" />
                  </div>
                </div>
              </div>
            }
          >
            <div className="bg-gradient-to-br from-teal-50 via-blue-50/50 to-indigo-50/30 backdrop-blur-xl border-2 border-teal-200/50 rounded-3xl shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 p-6 relative overflow-hidden">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-blue-500/5 rounded-3xl"></div>

              {/* Header */}
              <div className="relative z-10 pb-4 border-b border-teal-100/50 mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Activity className="w-6 h-6 text-teal-600" />
                    <div className="absolute inset-0 animate-pulse">
                      <Activity className="w-6 h-6 text-teal-400 opacity-40" />
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">AI Price Assistant</h2>
                </div>
              </div>

              <GlobalChatbot
                height="sm"
                context="healthcare"
                placeholder="Type a question to find the best healthcare prices…"
                initialMessage="Hi there 👋 — I can help you find the best prices for your care. You can ask me something like:\n\n• Find knee replacement prices near me\n• Show providers for Aetna in Chicago\n• List cash prices for MRI in 90001"
                className="relative z-10"
              />
            </div>
          </NoSSR>
        </div>

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
          <p className="text-gray-600 text-sm">Or ask our AI above for instant answers</p>
        </div>
      </div>
    </div>
  );
}
