/**
 * TertiaryCTA Component Showcase
 *
 * Design reference for the standardized tertiary call-to-action component.
 * This component demonstrates all variants and use cases.
 */

import { TertiaryCTA, TertiaryCTAButton } from "./TertiaryCTA";

export function TertiaryCTAShowcase() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">TertiaryCTA Showcase</h1>
        <p className="text-gray-600 mb-8">
          Standardized low-friction, text-based call-to-action links for
          HealthFees.org
        </p>
      </div>

      {/* Basic Usage */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Basic Usage</h2>
        <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <TertiaryCTA href="/data">See the data</TertiaryCTA>
          </div>
          <div>
            <TertiaryCTA href="/compare">Compare plans</TertiaryCTA>
          </div>
          <div>
            <TertiaryCTA href="/search">Search procedures</TertiaryCTA>
          </div>
        </div>
      </section>

      {/* With Arrow */}
      <section>
        <h2 className="text-xl font-semibold mb-4">With Arrow</h2>
        <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <TertiaryCTA href="/location" withArrow>
              Browse by location
            </TertiaryCTA>
          </div>
          <div>
            <TertiaryCTA href="/insurance" withArrow>
              Compare insurance options
            </TertiaryCTA>
          </div>
          <div>
            <TertiaryCTA href="/providers" withArrow>
              Find healthcare providers
            </TertiaryCTA>
          </div>
        </div>
      </section>

      {/* Size Variants */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Size Variants</h2>
        <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="text-sm text-gray-600 mb-2">
              Default Size (16px desktop / 14px mobile):
            </p>
            <TertiaryCTA href="/default">View all procedures</TertiaryCTA>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Small Size (14px):</p>
            <TertiaryCTA href="/small" size="small">
              Terms and conditions
            </TertiaryCTA>
          </div>
        </div>
      </section>

      {/* Button Variant */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Button Variant (onClick handlers)
        </h2>
        <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <TertiaryCTAButton onClick={() => alert("Clicked!")}>
              Show more details
            </TertiaryCTAButton>
          </div>
          <div>
            <TertiaryCTAButton onClick={() => alert("Clicked!")} withArrow>
              Load more results
            </TertiaryCTAButton>
          </div>
          <div>
            <TertiaryCTAButton onClick={() => alert("Clicked!")} size="small">
              Collapse section
            </TertiaryCTAButton>
          </div>
        </div>
      </section>

      {/* In Context Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-4">In Context Examples</h2>
        <div className="space-y-6">
          {/* Card Example */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">MRI Scan</h3>
            <p className="text-gray-600 mb-4">
              Average cost: $1,200 - $3,000 depending on location and facility.
            </p>
            <TertiaryCTA href="/mri-data" withArrow>
              See the data
            </TertiaryCTA>
          </div>

          {/* Quick Actions Example */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <div>
                <TertiaryCTA href="/location">Browse by location</TertiaryCTA>
              </div>
              <div>
                <TertiaryCTA href="/insurance">
                  Compare insurance plans
                </TertiaryCTA>
              </div>
              <div>
                <TertiaryCTA href="/procedures">
                  Search all procedures
                </TertiaryCTA>
              </div>
            </div>
          </div>

          {/* Footer Example */}
          <div className="bg-gray-900 text-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Footer Links</h3>
            <div className="space-y-2">
              <div>
                <TertiaryCTA
                  href="/privacy"
                  size="small"
                  className="text-white hover:text-white"
                >
                  Privacy policy
                </TertiaryCTA>
              </div>
              <div>
                <TertiaryCTA
                  href="/terms"
                  size="small"
                  className="text-white hover:text-white"
                >
                  Terms of service
                </TertiaryCTA>
              </div>
              <div>
                <TertiaryCTA
                  href="/contact"
                  size="small"
                  className="text-white hover:text-white"
                >
                  Contact us
                </TertiaryCTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Specifications */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Design Specifications</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <ul className="space-y-2 text-sm">
            <li>
              <strong>Font Family:</strong> Inter (locked globally)
            </li>
            <li>
              <strong>Font Size:</strong> 16px desktop / 14px mobile (small
              variant: 14px)
            </li>
            <li>
              <strong>Font Weight:</strong> Medium (500)
            </li>
            <li>
              <strong>Text Color:</strong> Brand blue #2563EB
            </li>
            <li>
              <strong>Background:</strong> None
            </li>
            <li>
              <strong>Border:</strong> None
            </li>
            <li>
              <strong>Border Radius:</strong> 0px
            </li>
            <li>
              <strong>Hover State:</strong> Underline only (no color change,
              glow, or shadow)
            </li>
            <li>
              <strong>Text Transform:</strong> Sentence case (never all caps)
            </li>
            <li>
              <strong>Arrow Spacing:</strong> 8px gap from text
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
