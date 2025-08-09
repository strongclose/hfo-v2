import { Github, Twitter, Linkedin } from "lucide-react";

export function FooterExpanded() {
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
      {/* Newsletter Signup Section */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 mb-6">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Get Data Updates</h3>
            <p className="text-gray-300 mb-8">
              Stay informed about new hospital pricing data, transparency insights, and platform updates.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50">
                <p className="text-green-300 font-semibold">Thanks for subscribing! You'll receive updates soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

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
