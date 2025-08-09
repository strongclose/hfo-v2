import { Mail } from "lucide-react";

interface FooterProps {
  onNavigateToDisclosures?: () => void;
}

export function Footer({ onNavigateToDisclosures }: FooterProps) {
  return (
    <footer className="relative bg-gray-900/95 backdrop-blur-md border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-green-900/20" />
      <div className="relative w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-3">
          {/* Single horizontal row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8">
            {/* Left: Contact and Copyright */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div className="text-xs text-gray-300">
                <a
                  href="mailto:hello@healthfees.org"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <Mail className="w-3 h-3" />
                  hello@healthfees.org
                </a>
              </div>
              <div className="text-xs text-gray-400">
                © 2025 HealthFees.org
              </div>
            </div>

            {/* Right: Links in horizontal layout */}
            <div className="flex flex-wrap gap-1 md:gap-4 text-xs">
              <a
                href="/methodology"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Methodology
              </a>
              <span className="text-gray-500 hidden md:inline">•</span>
              <button
                onClick={onNavigateToDisclosures}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Disclosures
              </button>
              <span className="text-gray-500 hidden md:inline">•</span>
              <a
                href="/privacy-policy"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Privacy
              </a>
              <span className="text-gray-500 hidden md:inline">•</span>
              <a
                href="/terms-of-use"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Terms
              </a>
              <span className="text-gray-500 hidden md:inline">•</span>
              <a
                href="/disclaimer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
