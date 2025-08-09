/**
 * HealthFees.org Button Showcase
 *
 * Reference component showing the official blue-based button hierarchy.
 * Use this for design reviews and implementation guidance.
 */

import { Button } from "./button";
import { ChevronRight, Search, Heart, Mail } from "lucide-react";

export function ButtonShowcase() {
  return (
    <div className="p-8 space-y-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">
          HealthFees.org Official Button System
        </h1>
        <p className="text-gray-600 mb-8">
          Consistent, blue-based button hierarchy following our brand standards.
        </p>

        {/* Primary CTA Buttons */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            🔵 Primary CTA - Page-Defining Actions
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            High-priority conversions - ONLY ONE per visual block
          </p>
          <div className="flex flex-wrap gap-4 items-center bg-white p-6 rounded-lg border">
            <Button variant="primary" size="sm">
              + Ask AI
            </Button>
            <Button variant="primary">Compare Prices</Button>
            <Button variant="primary" size="lg">
              Get Started Free
            </Button>
            <Button variant="primary">
              Join the Waitlist <Mail className="w-4 h-4" />
            </Button>
            <Button variant="primary" size="icon">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Secondary CTA Buttons */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            ⚪ Secondary CTA - Supporting Actions
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Alternative actions with white background and blue border
          </p>
          <div className="flex flex-wrap gap-4 items-center bg-white p-6 rounded-lg border">
            <Button variant="secondary" size="sm">
              Learn More
            </Button>
            <Button variant="secondary">Browse Hospitals</Button>
            <Button variant="secondary" size="lg">
              View Details
            </Button>
            <Button variant="secondary">
              Start Planning <ChevronRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary">Shop Procedures</Button>
          </div>
        </section>

        {/* Tertiary CTA Buttons */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            🔗 Tertiary CTA - Low Priority Links
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Inline links and navigation - 90% font size, underline on hover
          </p>
          <div className="flex flex-wrap gap-6 items-center bg-white p-6 rounded-lg border">
            <Button variant="tertiary">Read More</Button>
            <Button variant="tertiary">Compare by Insurance</Button>
            <Button variant="tertiary">Explore More Insights</Button>
            <Button variant="tertiary">
              View Rankings <ChevronRight className="w-3 h-3" />
            </Button>
          </div>
        </section>

        {/* Hierarchy Example */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            📐 Proper Hierarchy Example
          </h2>
          <div className="bg-white p-8 rounded-lg border space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                Healthcare Cost Calculator
              </h3>
              <p className="text-gray-600 mb-6">
                Get instant estimates for medical procedures in your area
              </p>

              {/* One Primary per section */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                <Button variant="primary" size="lg">
                  Calculate Costs
                </Button>
                <Button variant="secondary">Learn How It Works</Button>
              </div>

              {/* Tertiary for additional options */}
              <div className="flex gap-4 justify-center text-sm">
                <Button variant="tertiary">Browse Procedures</Button>
                <Button variant="tertiary">Compare Insurance Plans</Button>
              </div>
            </div>
          </div>
        </section>

        {/* States and Sizes */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            🔄 Button States & Sizes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-medium mb-4 text-gray-700">Size Variants</h3>
              <div className="space-y-3">
                <Button variant="primary" size="sm" className="w-full">
                  Small (36px)
                </Button>
                <Button variant="primary" size="default" className="w-full">
                  Default (44px)
                </Button>
                <Button variant="primary" size="lg" className="w-full">
                  Large (48px)
                </Button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-medium mb-4 text-gray-700">Normal States</h3>
              <div className="space-y-3">
                <Button variant="primary" className="w-full">
                  Primary Active
                </Button>
                <Button variant="secondary" className="w-full">
                  Secondary Active
                </Button>
                <Button variant="tertiary">Tertiary Link</Button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-medium mb-4 text-gray-700">
                Disabled States
              </h3>
              <div className="space-y-3">
                <Button variant="primary" disabled className="w-full">
                  Primary Disabled
                </Button>
                <Button variant="secondary" disabled className="w-full">
                  Secondary Disabled
                </Button>
                <Button variant="tertiary" disabled>
                  Tertiary Disabled
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Guidelines */}
        <section className="bg-blue-50 p-6 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            🎨 Brand Color System
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-700 mb-3">
                Official Colors
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#2563EB] rounded border"></div>
                  <span>Primary Blue: #2563EB</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#1D4ED8] rounded border"></div>
                  <span>Hover Blue: #1D4ED8</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#F0F5FF] rounded border"></div>
                  <span>Light Blue BG: #F0F5FF</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-red-700 mb-3">
                ❌ Eliminated Colors
              </h3>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="line-through">Green buttons (#10B981)</div>
                <div className="line-through">
                  Orange/Yellow buttons (#F59E0B)
                </div>
                <div className="line-through">Teal gradients</div>
                <div className="line-through">Mixed color themes</div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Rules */}
        <section className="bg-white p-6 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            📋 Usage Rules
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-green-700 mb-2">✅ Do</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• Use ONE primary button per visual block</li>
                <li>• Pair primary with secondary when needed</li>
                <li>• Use consistent 44px height on desktop</li>
                <li>• Use 40px height on mobile (mobile size)</li>
                <li>• Write clear, action-oriented labels</li>
                <li>• Follow Inter font family</li>
                <li>• Use 8px border radius consistently</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-700 mb-2">❌ Don't</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• Use multiple primary buttons in one section</li>
                <li>• Introduce green, orange, or custom colors</li>
                <li>• Override the established height/padding</li>
                <li>• Use vague labels like "Click here"</li>
                <li>• Create custom button styles</li>
                <li>• Ignore mobile size requirements</li>
                <li>• Mix button hierarchies randomly</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
