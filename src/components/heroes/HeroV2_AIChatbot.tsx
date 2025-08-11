import { NoSSR } from "../NoSSR";
import { GlobalChatbot } from "../GlobalChatbot";
import { CheckCircle2, Activity } from "lucide-react";

interface HeroV2Props {
  onNavigateToInternalSearch: () => void;
  selectedLocation: string;
  onLocationChange: (value: string) => void;
  selectedProcedure: string;
  onProcedureChange: (value: string) => void;
  selectedPayer: string;
  onPayerChange: (value: string) => void;
  selectedRadius: string;
  onRadiusChange: (value: string) => void;
}

export function HeroV2({
  onNavigateToInternalSearch,
  selectedLocation,
  onLocationChange,
  selectedProcedure,
  onProcedureChange,
  selectedPayer,
  onPayerChange,
  selectedRadius,
  onRadiusChange,
}: HeroV2Props) {
  return (
    <div className="relative min-h-screen pt-24 bg-gray-50 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.05),transparent_50%)]"></div>
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
          <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
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
      </div>
    </div>
  );
}
