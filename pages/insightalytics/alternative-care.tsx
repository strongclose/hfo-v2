import React from "react";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { Leaf } from "lucide-react";

export default function AlternativeCare() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="relative pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 mb-8 shadow-lg">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Alternative Care Analytics
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Cost-effective and alternative healthcare options for holistic &
            cost-conscious users
          </p>
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-teal-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-teal-700">
              This tool will help users explore alternative treatment costs,
              wellness program ROI, preventive care analysis, and holistic
              health economics.
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
