import { useState, useEffect } from "react";
import { Shield, Search, Menu, X } from "lucide-react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomepage, setIsHomepage] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const checkHomepage = () => {
      setIsHomepage(window.location.pathname === "/");
    };

    checkHomepage();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isHomepage) {
        const heroHeight = window.innerHeight;
        const whyMattersStart = heroHeight;
        const whoUsesStart = whyMattersStart + 800;
        const dataShowsStart = whoUsesStart + 800;

        if (currentScrollY < whyMattersStart) {
          setIsScrolled(false);
        } else if (
          currentScrollY >= whyMattersStart &&
          currentScrollY < whoUsesStart
        ) {
          setIsScrolled(true);
        } else if (
          currentScrollY >= whoUsesStart &&
          currentScrollY < dataShowsStart
        ) {
          setIsScrolled(false);
        } else {
          setIsScrolled(true);
        }
      } else {
        setIsScrolled(true);
      }

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY && currentScrollY > 300) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    setTimeout(() => handleScroll(), 0);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", checkHomepage);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", checkHomepage);
    };
  }, [isHomepage, lastScrollY]);

  const navigation = [
    {
      name: "Compare Prices",
      href: "/compare-prices",
    },
    {
      name: "Insights",
      href: "/insights",
    },
    {
      name: "Who We Help",
      href: "/who-we-help",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-3 backdrop-blur-md transition-all duration-500 border-b ${
        isScrolled ? "border-gray-200/20 bg-white/80" : "border-white/10 bg-white/5"
      }`}
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        transition:
          "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease",
      }}
    >
      <div className="max-w-7xl mx-auto relative">
        <button
          onClick={() => (window.location.href = "/")}
          className="absolute left-0 top-0 flex items-center space-x-3 hover:opacity-80 transition-opacity"
        >
          <div className="relative">
            <Shield
              className="w-10 h-10 transition-all"
              fill={isScrolled ? "#1E40AF" : "url(#heroGradient)"}
              stroke="white"
              strokeWidth={1}
            />
            <svg width="0" height="0">
              <defs>
                <linearGradient
                  id="heroGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#1E3A8A" />
                  <stop offset="50%" stopColor="#1E40AF" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
          </div>
          <span
            className={`text-xl font-bold transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}
          >
            <span className="text-teal-400">Health</span>
            <span className={isScrolled ? "text-gray-900" : "text-white"}>
              Fees
            </span>
            <span className="text-teal-400">
              .org
            </span>
          </span>
        </button>

        <div className="hidden md:flex items-center justify-center space-x-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`px-6 py-3 font-medium transition-all duration-300 text-base rounded-full hover:scale-105 inline-block ${
                isScrolled
                  ? "text-gray-600 hover:text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25"
                  : "text-white hover:text-white hover:bg-white/20 hover:backdrop-blur-sm hover:shadow-lg hover:shadow-white/10"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`absolute right-0 top-0 md:hidden transition-colors ${
            isScrolled
              ? "text-gray-900 hover:text-teal-600"
              : "text-white hover:text-teal-400"
          }`}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {isMobileMenuOpen && (
          <div
            className={`md:hidden mt-16 border rounded-lg backdrop-blur-md ${
              isScrolled
                ? "border-gray-200/20 bg-white/90"
                : "border-white/10 bg-white/5"
            }`}
          >
            <div className="px-6 py-4 space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block w-full text-left font-medium py-2 ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
