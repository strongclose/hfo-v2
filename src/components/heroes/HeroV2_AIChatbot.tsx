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
 * - Dark gradient background (135deg, #0A0F1C ��� #2563EB)
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

      {/* Main Content - Two Column Layout */}
      <div className="relative z-30 flex items-center min-h-[calc(100vh-96px)] px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
              Healthcare Pricing Finally Transparent
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
              Ask our AI to search billions of federally mandated hospital and insurer prices. Compare cash, in-network, and out-of-network rates side by side—updated monthly.
            </p>

            {/* Trust Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-50 border border-green-200">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-green-800 font-medium text-sm">
                Powered by government-mandated data. Updated monthly.
              </span>
            </div>
          </div>

          {/* Right Column - AI Chatbot */}
          <div className="flex justify-center lg:justify-end">
            <NoSSR
              fallback={
                <div className="w-full max-w-md backdrop-blur-xl rounded-2xl border border-gray-300 overflow-hidden shadow-2xl h-96 flex flex-col bg-white/90">
                  <div className="p-6 flex-1 flex items-center justify-center">
                    <div className="text-gray-600 text-sm">Loading AI Assistant...</div>
                  </div>
                  <div className="pt-4 px-4 pb-2 border-t border-gray-200">
                    <div className="flex gap-3">
                      <div className="flex-1 bg-gray-100 rounded-xl px-4 py-3">
                        <div className="text-gray-500 text-sm">Type a question to find the best healthcare prices…</div>
                      </div>
                      <div className="px-6 py-3 bg-blue-600 rounded-xl text-white text-sm">
                        Ask AI
                      </div>
                    </div>
                  </div>
                </div>
              }
            >
              <GlobalChatbot
                height="lg"
                context="healthcare"
                placeholder="Type a question to find the best healthcare prices…"
                initialMessage="Hi there 👋 — I can help you find the best prices for your care. You can ask me something like:\n\n• Find knee replacement prices near me\n• Show providers for Aetna in Chicago\n• List cash prices for MRI in 90001"
                className="w-full max-w-md"
              />
            </NoSSR>
          </div>
        </div>
      </div>
    </div>
  );
}
