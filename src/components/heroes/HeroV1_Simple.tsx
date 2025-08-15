"use client";

import { Shield, CheckCircle, Search } from "lucide-react";
import { Button } from "../ui/button";

interface HeroV1Props {
  onSearch: (procedure: string, location: string) => void;
  selectedRadius: number;
  onRadiusChange: (radius: number) => void;
}

/**
 * HeroV1_Simple - Clean, Simple Hero for Current Use
 *
 * Features:
 * - Clean gradient background
 * - Simple headline and CTA
 * - No complex chatbot interface
 * - Focus on core value proposition
 * - Quick implementation
 *
 * Use Case: Current production use while AI features are in development
 *
 * Created: [Current Date]
 * Status: Ready for immediate deployment
 */
export function HeroV1_Simple({
  onSearch,
  selectedRadius,
  onRadiusChange,
}: HeroV1Props) {
  return (
    <div
      className="relative min-h-screen pt-24 bg-gradient-to-br from-gray-900 via-blue-800 to-blue-600 font-sans"
    >
      {/* Background decoration - Company Logo */}
      <div className="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2 opacity-5 z-0">
        <div className="relative w-96 h-96">
          <Shield
            className="w-96 h-96 text-teal-500"
            strokeWidth={1.5}
            fill="rgba(20, 184, 166, 0.1)"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="w-48 h-48 text-teal-500/30" strokeWidth={1} />
          </div>
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] text-center px-6 pt-16">
        {/* Headline */}
        <h1
          className="text-center text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight max-w-6xl"
          style={{ fontSize: "48px", fontWeight: 700 }}
        >
          The Modern Way to Search for Healthcare
        </h1>

        {/* Subheadline */}
        <p
          className="text-center text-lg md:text-xl text-white mb-8 max-w-3xl leading-relaxed mx-auto"
          style={{
            fontSize: "20px",
            fontWeight: 400,
            maxWidth: "720px",
            lineHeight: 1.6,
          }}
        >
          We take government mandated hospital and insurance pricing data,
          including Trillions of data points and Petabytes of files, and turn it
          into something clear, usable, and finally, helpful.
        </p>

        {/* Simple CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => (window.location.href = "/search-procedure")}
            className="px-8 py-4 text-lg"
          >
            Explore Data
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => (window.location.href = "/insights")}
            className="px-8 py-4 text-lg"
          >
            See Insights
          </Button>
        </div>
      </div>
    </div>
  );
}
