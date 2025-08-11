import { useState, useEffect } from "react";
import { Shield, Search, Menu, X } from "lucide-react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-3 backdrop-blur-md transition-all duration-500 border-b border-gray-200/20 bg-white/80">
      <div className="max-w-7xl mx-auto relative">
        <button
          onClick={() => (window.location.href = "/")}
          className="absolute left-0 top-0 flex items-center space-x-3 hover:opacity-80 transition-opacity"
        >
          <div className="relative">
            <Shield
              className="w-10 h-10 transition-all"
              fill="#1E40AF"
              stroke="white"
              strokeWidth={1}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
          </div>
          <span className="text-xl font-bold transition-colors text-gray-900">
            <span className="text-teal-400">Health</span>
            <span className="text-gray-900">Fees</span>
            <span className="text-teal-400">.org</span>
          </span>
        </button>

        <div className="hidden md:flex items-center justify-center space-x-2">
          <a
            href="/compare-prices"
            className="px-6 py-3 font-medium transition-all duration-300 text-base rounded-full hover:scale-105 inline-block text-gray-600 hover:text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25"
          >
            Compare Prices
          </a>
          <a
            href="/insights"
            className="px-6 py-3 font-medium transition-all duration-300 text-base rounded-full hover:scale-105 inline-block text-gray-600 hover:text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25"
          >
            Insights
          </a>
          <a
            href="/who-we-help"
            className="px-6 py-3 font-medium transition-all duration-300 text-base rounded-full hover:scale-105 inline-block text-gray-600 hover:text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25"
          >
            Who We Help
          </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="absolute right-0 top-0 md:hidden transition-colors text-gray-900 hover:text-teal-600"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-16 border rounded-lg backdrop-blur-md border-gray-200/20 bg-white/90">
            <div className="px-6 py-4 space-y-3">
              <a
                href="/compare-prices"
                className="block w-full text-left font-medium py-2 text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Compare Prices
              </a>
              <a
                href="/insights"
                className="block w-full text-left font-medium py-2 text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Insights
              </a>
              <a
                href="/who-we-help"
                className="block w-full text-left font-medium py-2 text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Who We Help
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
