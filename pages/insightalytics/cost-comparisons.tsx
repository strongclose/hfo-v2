import React from "react";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { DollarSign } from "lucide-react";

export default function CostComparisons() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="relative pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-8 shadow-lg">
            <DollarSign className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Cost Comparisons
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced cost analysis tools for payers, employers & watchdogs
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-blue-700">
              This advanced analytics tool is currently in development. It will
              provide market basket analysis, payer performance metrics,
              employer cost benchmarking, and regulatory compliance tracking.
            </p>
          </div>
        </div>
      </section>

      <Footer
        onNavigateToDisclosures={() => (window.location.href = "/disclosures")}
      />
    </div>
  );
}
