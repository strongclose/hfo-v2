import { useState } from "react";
import { Hero } from "./Hero";
import { Navigation } from "./Navigation";
import { ExploreCompareSection } from "./homepage/ExploreCompareSection";
import { StateCoverageBanner } from "./homepage/StateCoverageBanner";
import { FooterExpanded } from "./homepage/FooterExpanded";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  ChevronRight,
  Search,
  BarChart3,
  Shield,
  TrendingUp,
  Lightbulb,
  Hospital,
  Users,
  DollarSign,
  AlertTriangle,
} from "lucide-react";

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedRadius, setSelectedRadius] = useState<number>(25);

  const handleSearch = (query: string, location?: string) => {
    console.log("Search:", query, location);
  };

  // Navigation handlers for Header component
  const handleNavigateToHomepage = () => setCurrentPage("home");
  const handleNavigateToInternalSearch = () => setCurrentPage("internalSearch");
  const handleNavigateToComparePrices = () =>
    (window.location.href = "/compare-prices");
  const handleNavigateToPriceComparison = () =>
    (window.location.href = "/price-comparison");
  const handleNavigateToSearchByProcedure = () =>
    (window.location.href = "/search-procedure");
  const handleNavigateToFAQ = () => (window.location.href = "/faq");
  const handleNavigateToExplore = () => (window.location.href = "/explore");
  const handleNavigateToExploreByLocation = () =>
    (window.location.href = "/explore/location");
  const handleNavigateToInsights = () => (window.location.href = "/insights");
  const handleNavigateToPatientResources = () =>
    (window.location.href = "/learn");
  const handleNavigateToTools = () => (window.location.href = "/tools");
  const handleNavigateToCommunity = () => (window.location.href = "/community");
  const handleNavigateToProfessionals = () =>
    (window.location.href = "/professionals");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Global Navigation - Sticks to top for entire page */}
      <Navigation />

      <div className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onSearch={handleSearch}
          selectedRadius={selectedRadius}
          onRadiusChange={setSelectedRadius}
        />

        {/* 2. Why This Matters Section */}
        <section className="relative py-32 overflow-hidden">
          {/* Background with gradient mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.05),transparent_50%)] pointer-events-none"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-8 shadow-lg shadow-blue-500/25">
                <span className="text-2xl">🧭</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-gray-900 tracking-tight">
                Why This
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  {" "}
                  Matters
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-light">
                Healthcare pricing has been hidden behind complex insurance
                negotiations and opaque billing practices. Government-mandated
                transparency rules now require hospitals and insurers to publish
                their actual prices—but the data is scattered across thousands
                of files and websites.
              </p>
              <div className="mt-12 p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-xl shadow-black/5 max-w-4xl mx-auto">
                <p className="text-lg text-gray-800 font-medium">
                  We've organized it all in one searchable platform, so you can
                  finally see what you'll actually pay before you get care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Who Uses HealthFees.org Section */}
        <section className="relative py-32 overflow-hidden">
          {/* Dynamic background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_40%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.15),transparent_40%)]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 mb-8 shadow-lg shadow-emerald-500/25">
                <span className="text-2xl">👥</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
                Who Uses
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}
                  HealthFees.org
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Users,
                  title: "Patients",
                  desc: "Compare costs before scheduling procedures",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: BarChart3,
                  title: "Researchers",
                  desc: "Analyze healthcare pricing trends and patterns",
                  gradient: "from-emerald-500 to-teal-500",
                },
                {
                  icon: TrendingUp,
                  title: "Analysts",
                  desc: "Study market dynamics and cost variations",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  icon: Shield,
                  title: "Insurers",
                  desc: "Benchmark pricing and network performance",
                  gradient: "from-orange-500 to-red-500",
                },
                {
                  icon: Hospital,
                  title: "Providers",
                  desc: "Compare their pricing against competitors",
                  gradient: "from-indigo-500 to-purple-500",
                },
                {
                  icon: DollarSign,
                  title: "Employers",
                  desc: "Help employees make cost-effective choices",
                  gradient: "from-yellow-500 to-orange-500",
                },
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
                    <div
                      className="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
                      }}
                    ></div>
                    <div
                      className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. What the Data Shows Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 mb-8 shadow-lg shadow-rose-500/25">
                <span className="text-2xl">📊</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
                What the Data
                <span className="bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                  {" "}
                  Shows
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-xl text-gray-800 font-semibold leading-relaxed text-center">
                    Same procedure can cost{" "}
                    <span className="text-red-600 font-bold">10x more</span> at
                    different hospitals in the same city
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-xl text-gray-800 font-semibold leading-relaxed text-center">
                    <span className="text-amber-600 font-bold">
                      "In-network"
                    </span>{" "}
                    doesn't guarantee you'll pay less than cash prices
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-xl text-gray-800 font-semibold leading-relaxed text-center">
                    Patients who compare prices save an average of{" "}
                    <span className="text-emerald-600 font-bold">$3,200</span>{" "}
                    per procedure
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={() => (window.location.href = "/insights")}
                className="relative px-10 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  Explore the Insights
                  <ChevronRight className="w-5 h-5 ml-2" />
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* 5. California Coverage Section */}
        <StateCoverageBanner />

        {/* 6. Sharing CTA Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_60%)]"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative p-16 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/30 shadow-2xl">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 mb-8 shadow-lg shadow-blue-500/25">
                    <span className="text-3xl">📣</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 tracking-tight">
                    Help Others Save on
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                      {" "}
                      Healthcare
                    </span>
                  </h2>
                  <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
                    Share HealthFees.org with colleagues, friends, and family so
                    they can make informed healthcare decisions too.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={() =>
                        navigator.clipboard.writeText(window.location.href)
                      }
                      className="flex items-center gap-3 px-8 py-4 text-lg rounded-2xl bg-white/60 hover:bg-white/80 border-gray-200 hover:border-gray-300 backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <Lightbulb className="w-5 h-5" />
                      Copy Page Link
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={() =>
                        window.open(
                          `mailto:?subject=Check out HealthFees.org&body=I found this helpful tool for comparing healthcare prices: ${window.location.href}`,
                          "_blank",
                        )
                      }
                      className="flex items-center gap-3 px-8 py-4 text-lg rounded-2xl bg-white/60 hover:bg-white/80 border-gray-200 hover:border-gray-300 backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <ChevronRight className="w-5 h-5" />
                      Send to a Colleague
                    </Button>
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() =>
                        window.open(
                          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                          "_blank",
                        )
                      }
                      className="flex items-center gap-3 px-8 py-4 text-lg rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <Users className="w-5 h-5" />
                      Recommend to Your Team
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 7. Footer */}
      <FooterExpanded />
    </div>
  );
}
