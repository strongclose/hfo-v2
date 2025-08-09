import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export function FooterExpanded() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const footerSections = [
    {
      title: "🧰 Tools",
      links: [
        { name: "Compare by Procedure", href: "/explore/procedure" },
        { name: "Browse Hospitals", href: "/hospitals" },
        { name: "Explore Insurance", href: "/explore/insurance" },
        { name: "Cost Calculator", href: "/tools/calculator" },
      ],
    },
    {
      title: "📊 Insights",
      links: [
        { name: "Shocking Truths", href: "/insights/truths" },
        { name: "Transparency Scorecard", href: "/insights/comparisons" },
        { name: "Pricing Methodology", href: "/methodology" },
        { name: "Data Visualizations", href: "/insights/visualizations" },
      ],
    },
    {
      title: "🧭 Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "⚖️ Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Use", href: "/terms" },
        { name: "Disclaimer", href: "/disclaimer" },
        { name: "Data Sources", href: "/sources" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-700 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-xl font-bold">HFO</div>
              <div className="text-sm text-gray-400">
                © 2025 HospitalFees.org. All rights reserved.
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Follow us:</span>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
