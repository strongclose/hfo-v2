import { useState } from "react";
import { Hero } from "./Hero";
import { Navigation } from "./Navigation";
import { ExploreCompareSection } from "./homepage/ExploreCompareSection";
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
  FileText,
  Brain,
  Database,
  Building2,
  Stethoscope,
  Calculator,
  Map,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  Globe,
  PieChart,
  Activity,
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

  const PriceComparisonCTA = ({ 
    size = "default", 
    variant = "primary", 
    className = "",
    children = "Compare Healthcare Prices"
  }) => (
    <Button
      onClick={() => (window.location.href = "/search-procedure")}
      size={size}
      variant={variant}
      className={`${className} transition-all duration-300 hover:scale-105`}
    >
      <span className="flex items-center gap-2">
        {children}
        <ArrowRight className="w-5 h-5" />
      </span>
    </Button>
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Global Navigation - Sticks to top for entire page */}
      <Navigation />

      <div className="flex-1">
        {/* 1. Hero Section - PRESERVED EXACTLY AS IS */}
        <Hero
          onSearch={handleSearch}
          selectedRadius={selectedRadius}
          onRadiusChange={setSelectedRadius}
        />

        {/* 2. Why This Matters Section */}
        <section className="relative py-24 overflow-hidden" id="why-matters">
          {/* Background with gradient mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 motion-safe:animate-pulse motion-safe:animation-duration-[8s]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.08),transparent_50%)] pointer-events-none motion-safe:animate-bounce motion-safe:animation-duration-[12s]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.06),transparent_50%)] pointer-events-none motion-safe:animate-pulse motion-safe:animation-duration-[10s]"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-600 mb-8 shadow-lg shadow-red-500/25">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
                Why This
                <span className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                  {" "}
                  Matters
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-800 max-w-5xl mx-auto leading-relaxed font-medium mb-8">
                For decades, healthcare pricing was kept secret. Hospitals could charge anything, and patients only found out the cost after receiving care—sometimes leading to financial devastation.
              </p>
              <div className="mt-8 p-8 rounded-3xl bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-xl border border-white/40 shadow-xl shadow-black/5 max-w-4xl mx-auto">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-lg text-gray-800 font-semibold mb-2">Federal Law Changed Everything</p>
                    <p className="text-gray-800">
                      New transparency regulations require hospitals and insurers to publish their real negotiated rates. But the data is scattered across thousands of files and websites.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-800 font-medium text-center">
                  <span className="text-teal-600 font-bold">We've organized it all</span> in one searchable platform, so you can finally see what you'll actually pay before you get care.
                </p>
              </div>
              
              <div className="mt-12">
                <PriceComparisonCTA 
                  size="lg" 
                  className="px-10 py-4 text-lg bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white rounded-2xl shadow-lg"
                >
                  Start Comparing Prices Now
                </PriceComparisonCTA>
              </div>
            </div>
          </div>
        </section>

        {/* 3. How It Works / Where Data Comes From Section - Side-by-Side Layout */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(20,184,166,0.15),transparent_40%)] motion-safe:animate-pulse motion-safe:animation-duration-[6s]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.15),transparent_40%)] motion-safe:animate-pulse motion-safe:animation-duration-[8s]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Split Layout: Content Left, Visual Right */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center shadow-lg shadow-teal-500/25">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                      Where our Data
                      <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {" "}
                        Comes From
                      </span>
                    </h2>
                  </div>
                </div>

                <p className="text-xl text-gray-100 leading-relaxed">
                  We collect, organize, and update pricing data from official government-mandated hospital and insurance disclosures.
                </p>

                {/* Process Steps */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Federal Requirements</h3>
                      <p className="text-gray-200 leading-relaxed">
                        Hospitals must publish machine-readable files with all negotiated rates, and insurance companies must disclose pricing under new transparency laws.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Automated Collection</h3>
                      <p className="text-gray-200 leading-relaxed">
                        Our systems continuously monitor thousands of hospital websites and insurance portals, automatically processing new pricing files.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Intelligence Layer</h3>
                      <p className="text-gray-200 leading-relaxed">
                        We clean, standardize, and organize trillions of data points into a searchable format that makes sense for real people.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Data Stats */}
              <div className="relative">
                <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20">
                  <h3 className="text-2xl font-bold text-white text-center mb-8">By the Numbers</h3>

                  {/* Large Stats Display */}
                  <div className="space-y-6">
                    <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-400/30">
                      <p className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">6,000+</p>
                      <p className="text-gray-200 font-medium">Hospitals Tracked</p>
                      <div className="w-full bg-white/20 rounded-full h-2 mt-3">
                        <div className="bg-gradient-to-r from-teal-400 to-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>

                    <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30">
                      <p className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">400+</p>
                      <p className="text-gray-200 font-medium">Insurance Plans</p>
                      <div className="w-full bg-white/20 rounded-full h-2 mt-3">
                        <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full" style={{width: '70%'}}></div>
                      </div>
                    </div>

                    <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30">
                      <p className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">2.4T+</p>
                      <p className="text-gray-200 font-medium">Data Points Processed</p>
                      <div className="w-full bg-white/20 rounded-full h-2 mt-3">
                        <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full" style={{width: '95%'}}></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30">
                    <div className="flex items-center justify-center gap-2">
                      <Activity className="w-5 h-5 text-emerald-400" />
                      <p className="text-emerald-400 font-semibold">Updated Monthly</p>
                    </div>
                    <p className="text-gray-200 text-sm text-center mt-2">Fresh data from the latest disclosures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Platform Features Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.06),transparent_50%)] pointer-events-none"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-8 shadow-lg shadow-blue-500/25">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
                Explore
                <span className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 bg-clip-text text-transparent">
                  {" "}
                  HealthFees.org
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed mb-8">
                From quick price comparisons to in-depth market analysis, we have tools for every healthcare stakeholder.
              </p>
              
              <PriceComparisonCTA 
                size="lg" 
                className="px-10 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl shadow-lg mb-16"
              >
                Start with Price Comparison
              </PriceComparisonCTA>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Search,
                  title: "Price Comparison Tool",
                  desc: "Search any procedure, see real prices from hospitals and insurance plans in your area.",
                  gradient: "from-blue-500 to-cyan-500",
                  link: "/search-procedure",
                  primary: true
                },
                {
                  icon: Brain,
                  title: "AI Healthcare Assistant",
                  desc: "Ask natural language questions about healthcare costs and get instant, data-backed answers.",
                  gradient: "from-purple-600 to-pink-600",
                  link: "#"
                },
                {
                  icon: BarChart3,
                  title: "Market Analytics",
                  desc: "Analyze pricing trends, compare markets, and understand cost variations across regions.",
                  gradient: "from-emerald-500 to-teal-500",
                  link: "/insightalytics"
                },
                {
                  icon: Building2,
                  title: "Provider Directory",
                  desc: "Find hospitals, clinics, and specialists with transparent pricing and quality metrics.",
                  gradient: "from-orange-500 to-red-500",
                  link: "/hospitals"
                },
                {
                  icon: Shield,
                  title: "Insurance Navigator",
                  desc: "Compare insurance plans, understand coverage, and find the best value for your needs.",
                  gradient: "from-indigo-500 to-purple-500",
                  link: "/insurance"
                },
                {
                  icon: Users,
                  title: "Compliance Tools",
                  desc: "Help healthcare organizations meet transparency requirements and benchmark their pricing.",
                  gradient: "from-yellow-500 to-orange-500",
                  link: "/who-we-help/hospitals"
                }
              ].map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="relative p-8 rounded-3xl bg-white backdrop-blur-xl border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: feature.title === "AI Healthcare Assistant"
                          ? "linear-gradient(135deg, #9333ea, #db2777)"
                          : feature.title === "Price Comparison Tool"
                          ? "linear-gradient(135deg, #3b82f6, #06b6d4)"
                          : feature.title === "Market Analytics"
                          ? "linear-gradient(135deg, #10b981, #14b8a6)"
                          : feature.title === "Provider Directory"
                          ? "linear-gradient(135deg, #f97316, #ef4444)"
                          : feature.title === "Insurance Navigator"
                          ? "linear-gradient(135deg, #6366f1, #a855f7)"
                          : "linear-gradient(135deg, #eab308, #f97316)"
                      }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 text-center group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 text-center leading-relaxed mb-6">
                      {feature.desc}
                    </p>
                    <div className="text-center">
                      <Button
                        onClick={() => window.location.href = feature.link}
                        variant={feature.primary ? "primary" : "outline"}
                        className={`${feature.primary ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} transition-all duration-300 hover:scale-105`}
                      >
                        Explore {feature.title.split(' ')[0]}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Who Uses HealthFees.org Section - Timeline/Journey Format */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_40%)] motion-safe:animate-pulse motion-safe:animation-duration-[10s]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.15),transparent_40%)] motion-safe:animate-pulse motion-safe:animation-duration-[12s]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 mb-8 shadow-lg shadow-emerald-500/25">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
                Who Uses
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}
                  HealthFees.org
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
                From individual patients to large healthcare organizations, our platform serves everyone who values transparency in healthcare pricing.
              </p>
            </div>

            {/* Journey Timeline */}
            <div className="relative">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-emerald-400 via-cyan-400 to-purple-400 h-full hidden lg:block"></div>

              {/* Timeline Items */}
              <div className="space-y-16">
                {[
                  {
                    icon: Stethoscope,
                    title: "Patients & Families",
                    desc: "Compare costs before scheduling procedures and make informed healthcare decisions.",
                    detail: "Search for procedures, view real negotiated rates, and find the most affordable options in your area.",
                    gradient: "from-blue-500 to-cyan-500",
                    link: "/who-we-help/patients",
                    side: "left"
                  },
                  {
                    icon: Building2,
                    title: "Healthcare Employers",
                    desc: "Help employees make cost-effective healthcare choices and reduce overall benefits costs.",
                    detail: "Integrate our API to provide employees with cost transparency tools and reduce benefits spend.",
                    gradient: "from-purple-500 to-pink-500",
                    link: "/who-we-help/employers",
                    side: "right"
                  },
                  {
                    icon: BarChart3,
                    title: "Researchers & Analysts",
                    desc: "Study healthcare pricing trends, market dynamics, and cost variations across regions.",
                    detail: "Access comprehensive datasets and analytics tools for market research and policy analysis.",
                    gradient: "from-emerald-500 to-teal-500",
                    link: "/who-we-help/researchers",
                    side: "left"
                  },
                  {
                    icon: Shield,
                    title: "Insurance Companies",
                    desc: "Benchmark pricing, analyze network performance, and ensure competitive rates.",
                    detail: "Compare your negotiated rates against market standards and optimize network contracts.",
                    gradient: "from-orange-500 to-red-500",
                    link: "/who-we-help/insurance-providers",
                    side: "right"
                  },
                  {
                    icon: Hospital,
                    title: "Healthcare Providers",
                    desc: "Compare pricing against competitors and ensure transparency compliance.",
                    detail: "Meet federal transparency requirements and understand your competitive position in the market.",
                    gradient: "from-indigo-500 to-purple-500",
                    link: "/who-we-help/hospitals",
                    side: "left"
                  },
                  {
                    icon: FileText,
                    title: "Journalists & Advocates",
                    desc: "Access reliable healthcare pricing data for investigative reporting and advocacy work.",
                    detail: "Uncover pricing disparities and hold healthcare systems accountable with verified data.",
                    gradient: "from-yellow-500 to-orange-500",
                    link: "/who-we-help/journalists",
                    side: "right"
                  }
                ].map((audience, index) => (
                  <div key={index} className={`relative flex items-center ${audience.side === 'left' ? 'lg:justify-start' : 'lg:justify-end'} justify-center`}>
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-emerald-400 z-10 hidden lg:block"></div>

                    {/* Content Card */}
                    <div className={`w-full lg:w-5/12 ${audience.side === 'right' ? 'lg:ml-auto' : ''}`}>
                      <div className="group relative">
                        <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
                          {/* Icon and Number */}
                          <div className="flex items-center gap-4 mb-6">
                            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${audience.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <audience.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-white/30">0{index + 1}</div>
                          </div>

                          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                            {audience.title}
                          </h3>

                          <p className="text-white/90 group-hover:text-white transition-colors duration-300 leading-relaxed mb-4">
                            {audience.desc}
                          </p>

                          <p className="text-white/70 text-sm leading-relaxed mb-6">
                            {audience.detail}
                          </p>

                          <Button
                            onClick={() => window.location.href = audience.link}
                            className="bg-white/20 text-white border-2 border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold backdrop-blur-sm"
                          >
                            Explore Solutions
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. What the Data Shows Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 mb-8 shadow-lg shadow-rose-500/25">
                <PieChart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
                What the Data
                <span className="bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                  {" "}
                  Shows
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
                Our analysis of healthcare pricing data reveals shocking disparities and opportunities for savings.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
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
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
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
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
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

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Regional Variations</h3>
                <p className="text-gray-800 leading-relaxed">
                  Healthcare costs vary dramatically by region. A knee replacement that costs $15,000 in one state might cost $45,000 in another—for the exact same procedure.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Insurance Surprises</h3>
                <p className="text-gray-800 leading-relaxed">
                  Your insurance "in-network" rate might be higher than the cash price. We've found cases where patients could save thousands by paying cash instead of using insurance.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={() => (window.location.href = "/insights")}
                className="relative px-10 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mr-4"
              >
                <span className="relative z-10 flex items-center">
                  Explore the Insights
                  <ChevronRight className="w-5 h-5 ml-2" />
                </span>
              </Button>
              
              <PriceComparisonCTA 
                variant="outline" 
                size="lg"
                className="px-10 py-4 text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-2xl"
              >
                See Your Local Prices
              </PriceComparisonCTA>
            </div>
          </div>
        </section>


        {/* 8. Help Others Save / Join the Movement Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(20,184,166,0.12),transparent_50%)] motion-safe:animate-pulse motion-safe:animation-duration-[8s]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.1),transparent_50%)] motion-safe:animate-pulse motion-safe:animation-duration-[10s]"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 mb-8 shadow-lg shadow-teal-500/25">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight">
                Join the Movement for
                <span className="text-white">
                  {" "}
                  Healthcare Transparency
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                Every search helps build a more transparent healthcare system. Share HealthFees.org with others so they can make informed decisions too.
              </p>

              <div className="mb-12">
                <PriceComparisonCTA 
                  size="lg"
                  className="px-12 py-5 text-xl font-semibold bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white rounded-2xl shadow-xl mr-4 mb-4 md:mb-0"
                >
                  Start Comparing Prices
                </PriceComparisonCTA>
                
                <Button
                  onClick={() => (window.location.href = "/about")}
                  size="lg"
                  className="px-12 py-5 text-xl bg-white/20 border-2 border-white text-white hover:bg-white/30 hover:border-white rounded-2xl backdrop-blur-sm font-semibold"
                >
                  Learn Our Mission
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() =>
                    navigator.clipboard.writeText(window.location.href)
                  }
                  className="flex items-center gap-3 px-6 py-4 text-lg rounded-2xl bg-white/30 hover:bg-white/40 border-white/50 hover:border-white/70 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-white font-semibold"
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
                  className="flex items-center gap-3 px-6 py-4 text-lg rounded-2xl bg-white/30 hover:bg-white/40 border-white/50 hover:border-white/70 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-white font-semibold"
                >
                  <ChevronRight className="w-5 h-5" />
                  Email a Colleague
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() =>
                    window.open(
                      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                      "_blank",
                    )
                  }
                  className="flex items-center gap-3 px-6 py-4 text-lg rounded-2xl bg-white/30 hover:bg-white/40 border-white/50 hover:border-white/70 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-white font-semibold"
                >
                  <Users className="w-5 h-5" />
                  Share on LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <FooterExpanded />
    </div>
  );
}
