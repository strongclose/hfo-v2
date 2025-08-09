import React from "react";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { MapPin } from "lucide-react";

export default function LocationInsights() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="relative pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 mb-8 shadow-lg">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Location-Based Insights
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Geographic analysis of healthcare pricing for patients, regulators &
            SEO
          </p>
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-purple-700">
              This tool will provide regional price mapping, market
              concentration analysis, accessibility insights, and regulatory
              impact assessment.
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
