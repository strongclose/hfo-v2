"use client";

import { Button } from "../ui/button";
import { MapPin, Mail } from "lucide-react";

export function StateCoverageBanner() {
  const handleWaitlistClick = () => {
    // Could open a modal or navigate to waitlist page
    window.location.href = "/waitlist";
  };

  return (
    <section className="py-16 bg-yellow-50 border-y border-yellow-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            {/* California Map Placeholder */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-yellow-600" />
              <h2 className="text-3xl font-bold text-yellow-900">
                Now Live in California
              </h2>
            </div>

            <p className="text-xl text-yellow-800 mb-8 max-w-2xl mx-auto">
              We're starting with hospital pricing across California. Want to
              see your state next?
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handleWaitlistClick}
                className="flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Join the Waitlist
              </Button>

              <p className="text-sm text-yellow-700">
                Get notified when we expand to your state
              </p>
            </div>

            {/* Trust indicator */}
            <div className="mt-8 pt-6 border-t border-yellow-300">
              <p className="text-sm text-yellow-700">
                🏥 Currently tracking 400+ California hospitals • 📊 50,000+
                pricing data points • 🔄 Updated monthly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
