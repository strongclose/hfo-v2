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
  ArrowDown,
  MapPin,
  Filter,
  Workflow,
  BookOpen,
  TrendingDown,
  Info,
  ExternalLink,
  Sparkles,
  Clock,
} from "lucide-react";

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedRadius, setSelectedRadius] = useState<number>(25);
  const [activePersona, setActivePersona] = useState("patients");
  const [activeStep, setActiveStep] = useState(0);

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

  const personas = {
    patients: {
      title: "Patients & Families",
      insight: "Patients who compare prices before care save an average of $3,200 per procedure.",
      support: "Easily check hospital, insurer, and cash prices side-by-side so you know what to expect before you go.",
      cta: "Check prices near you",
      icon: Stethoscope,
      link: "/who-we-help/patients"
    },
    researchers: {
      title: "Researchers & Analysts", 
      insight: "Access over 2.4 trillion pricing records across 6,000+ hospitals and 400+ insurers — updated monthly.",
      support: "Download structured, machine-readable files to power your analysis, policy research, or market studies.",
      cta: "Explore the data",
      icon: BarChart3,
      link: "/who-we-help/researchers"
    },
    employers: {
      title: "Healthcare Employers",
      insight: "Employers can cut common procedure costs by up to 18% by steering employees to lower-cost providers.",
      support: "Identify high-value care options and reduce total benefits spending without reducing quality.",
      cta: "Compare provider rates",
      icon: Building2,
      link: "/who-we-help/employers"
    },
    providers: {
      title: "Providers",
      insight: "Benchmark your prices against competitors in and out of network to identify strengths and opportunities.",
      support: "Monitor competitor rates and track changes in published transparency files each month.",
      cta: "Run a compliance scan",
      icon: Hospital,
      link: "/who-we-help/hospitals"
    },
    insurers: {
      title: "Insurance Companies",
      insight: "Track competitor networks and published rates to stay competitive in your region.",
      support: "Use our organized data to monitor market changes and meet federal transparency requirements.",
      cta: "See network pricing",
      icon: Shield,
      link: "/who-we-help/insurance-providers"
    }
  };

  const Tooltip = ({ children, content }: { children: React.ReactNode; content: string }) => {
    return (
      <div className="group relative inline-block">
        <div className="cursor-help">
          {children}
        </div>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg z-20 max-w-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Global Navigation - Sticks to top for entire page */}
      <Navigation />

      <div className="flex-1">
        {/* 1. Hero Section - PRESERVED EXACTLY AS IS with added Check Prices button */}
        <Hero
          onSearch={handleSearch}
          selectedRadius={selectedRadius}
          onRadiusChange={setSelectedRadius}
        />

        {/* 2. Why This Matters Section - Updated content */}
        <section className="relative py-24 overflow-hidden" id="why-matters">
          {/* Background with gradient mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/50 to-cyan-50/40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.12),transparent_50%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.10),transparent_50%)] pointer-events-none"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-8 shadow-lg shadow-blue-500/25">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
                Why This
                <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                  {" "}
                  Matters
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-800 max-w-5xl mx-auto leading-relaxed font-medium mb-8">
                For decades, healthcare pricing was kept secret. Hospitals could charge anything, and patients only found out the cost after receiving care—sometimes leading to financial devastation.
              </p>
              
              <div className="mt-8 p-8 rounded-3xl bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-xl border border-white/40 shadow-xl shadow-black/5 max-w-4xl mx-auto">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
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
                  <span className="text-blue-600 font-bold">We've organized it all</span> in one searchable platform, so you can finally see what you'll actually pay before you get care.
                </p>
              </div>
              
              <div className="mt-12">
                <PriceComparisonCTA 
                  size="lg" 
                  className="px-10 py-4 text-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-2xl shadow-lg"
                >
                  Start Comparing Prices Now
                </PriceComparisonCTA>
              </div>
            </div>
          </div>
        </section>

        {/* 3. How It Works Section - COMPLETELY REDESIGNED */}
        <section className="relative py-32 overflow-hidden bg-white">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-blue-50/30 to-indigo-50/20"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.03) 0%, transparent 50%), 
                              radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.03) 0%, transparent 50%)`
          }}></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 mb-8 shadow-lg shadow-blue-500/25">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
                How It
                <span className="bg-gradient-to-r from-blue-900 to-slate-800 bg-clip-text text-transparent">
                  {" "}
                  Works
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                From scattered government files to instant price comparisons — here's how we make healthcare pricing transparent.
              </p>
            </div>

            {/* Enhanced Timeline with Rich Content */}
            <div className="relative">
              {/* Animated Connection Line - Desktop */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2">
                <div className="h-full bg-gradient-to-b from-blue-700 via-purple-700 to-emerald-700 rounded-full shadow-lg">
                  {/* Animated flow dots */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full shadow-sm animate-pulse"
                        style={{
                          left: '50%',
                          transform: 'translateX(-50%)',
                          top: `${20 + i * 15}%`,
                          animationDelay: `${i * 0.3}s`,
                          animationDuration: '2s'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-24 lg:space-y-32">
                {/* Step 1: We Collect */}
                <div className="relative">
                  {/* Timeline Node */}
                  <div className="hidden lg:block absolute left-1/2 top-24 w-8 h-8 bg-blue-700 rounded-full border-4 border-white shadow-xl transform -translate-x-1/2 z-10">
                    <div className="absolute inset-0 bg-blue-700 rounded-full animate-ping opacity-30"></div>
                  </div>

                  {/* Content Grid */}
                  <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    {/* Left Content */}
                    <div className="lg:pr-16 lg:text-right">
                      <div className="group">
                        {/* Icon and Visual */}
                        <div className="flex justify-center lg:justify-end mb-8">
                          <div className="relative">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-700 to-cyan-700 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-500">
                              <Database className="w-12 h-12 text-white" />
                            </div>
                            {/* Pulse animation */}
                            <div className="absolute inset-0 bg-blue-400 rounded-3xl animate-ping opacity-20"></div>
                          </div>
                        </div>

                        <div className="text-center lg:text-right">
                          <div className="flex items-center justify-center lg:justify-end gap-2 mb-4">
                            <h3 className="text-3xl font-bold text-gray-900">We Collect</h3>
                            <Tooltip content="Federal law requires hospitals and insurers to publish machine-readable files with their negotiated rates under transparency regulations.">
                              <Info className="w-5 h-5 text-blue-500 cursor-help" />
                            </Tooltip>
                          </div>
                          
                          <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            <Tooltip content="The Hospital Price Transparency Final Rule (45 CFR §180) requires hospitals to publish machine-readable files with all their negotiated rates.">
                              <span className="underline decoration-blue-300 decoration-2 cursor-help">Federal law</span>
                            </Tooltip>
                            {" "}requires hospitals and insurers to publish their real prices under the Hospital Price Transparency Final Rule and the Transparency in Coverage Rule. We automatically monitor thousands of these{" "}
                            <Tooltip content="Machine-readable files are structured data files (like JSON or CSV) that computers can easily process, as opposed to human-readable PDFs.">
                              <span className="underline decoration-blue-300 decoration-2 cursor-help">machine-readable files</span>
                            </Tooltip>
                            {" "}so you don't have to.
                          </p>

                          {/* Stats Box */}
                          <div className="inline-flex items-center gap-6 p-4 bg-blue-50 rounded-2xl border border-blue-200">
                            <div className="text-center">
                              <p className="text-2xl font-bold text-blue-600">6,000+</p>
                              <p className="text-sm text-blue-700 font-medium">Hospitals</p>
                            </div>
                            <div className="w-px h-12 bg-blue-300"></div>
                            <div className="text-center">
                              <p className="text-2xl font-bold text-blue-600">400+</p>
                              <p className="text-sm text-blue-700 font-medium">Insurers</p>
                            </div>
                            <div className="w-px h-12 bg-blue-300"></div>
                            <div className="text-center flex items-center gap-1">
                              <Clock className="w-4 h-4 text-blue-600" />
                              <div>
                                <p className="text-sm font-semibold text-blue-700">Updated</p>
                                <p className="text-sm text-blue-600">Monthly</p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6">
                            <a 
                              href="https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-E/part-180" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                            >
                              Learn about the federal requirements
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Visual - Mobile shows above, Desktop shows right */}
                    <div className="order-first lg:order-last lg:pl-16 mb-12 lg:mb-0">
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-200">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <FileText className="w-5 h-5 text-blue-600" />
                          Live Data Sources
                        </h4>
                        <div className="space-y-3">
                          {[
                            { name: "Hospital Price Files", status: "Active", count: "6,000+" },
                            { name: "Insurance Rate Files", status: "Active", count: "400+" },
                            { name: "Federal Compliance Data", status: "Monitoring", count: "Daily" }
                          ].map((source, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-xl border border-blue-100">
                              <div>
                                <p className="font-medium text-gray-900">{source.name}</p>
                                <p className="text-sm text-gray-600">{source.count}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-green-700 font-medium">{source.status}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2: We Organize */}
                <div className="relative">
                  {/* Timeline Node */}
                  <div className="hidden lg:block absolute left-1/2 top-24 w-8 h-8 bg-purple-700 rounded-full border-4 border-white shadow-xl transform -translate-x-1/2 z-10">
                    <div className="absolute inset-0 bg-purple-700 rounded-full animate-ping opacity-30"></div>
                  </div>

                  {/* Content Grid - Reversed */}
                  <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    {/* Left Visual */}
                    <div className="lg:pr-16 mb-12 lg:mb-0">
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-200">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <Brain className="w-5 h-5 text-purple-600" />
                          Data Processing Pipeline
                        </h4>
                        <div className="space-y-4">
                          {[
                            { step: "Raw Data Ingestion", progress: 100, color: "bg-green-500" },
                            { step: "Cleaning & Validation", progress: 100, color: "bg-blue-700" },
                            { step: "Standardization", progress: 100, color: "bg-purple-700" },
                            { step: "Search Indexing", progress: 85, color: "bg-orange-500" }
                          ].map((item, idx) => (
                            <div key={idx}>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-gray-700">{item.step}</span>
                                <span className="text-sm text-gray-500">{item.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className={`h-2 rounded-full ${item.color} transition-all duration-1000`}
                                  style={{ width: `${item.progress}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:pl-16">
                      <div className="group">
                        {/* Icon and Visual */}
                        <div className="flex justify-center lg:justify-start mb-8">
                          <div className="relative">
                            <div className="w-24 h-24 bg-gradient-to-br from-purple-700 to-pink-700 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-500">
                              <Sparkles className="w-12 h-12 text-white animate-pulse" />
                            </div>
                            {/* Pulse animation */}
                            <div className="absolute inset-0 bg-purple-400 rounded-3xl animate-ping opacity-20"></div>
                          </div>
                        </div>

                        <div className="text-center lg:text-left">
                          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                            <h3 className="text-3xl font-bold text-gray-900">We Organize</h3>
                            <Tooltip content="We use advanced algorithms to clean, validate, and structure raw pricing data into searchable formats.">
                              <Info className="w-5 h-5 text-purple-500 cursor-help" />
                            </Tooltip>
                          </div>
                          
                          <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            We take trillions of raw data points and transform them into a clean, searchable format that makes sense. No more wading through spreadsheets — you can get straight to the answers you need.
                          </p>

                          {/* Stats Box */}
                          <div className="inline-flex items-center gap-6 p-4 bg-purple-50 rounded-2xl border border-purple-200">
                            <div className="text-center">
                              <p className="text-2xl font-bold text-purple-600">2.4T+</p>
                              <p className="text-sm text-purple-700 font-medium">Pricing Records</p>
                            </div>
                            <div className="w-px h-12 bg-purple-300"></div>
                            <div className="text-center">
                              <p className="text-2xl font-bold text-purple-600">99.9%</p>
                              <p className="text-sm text-purple-700 font-medium">Data Accuracy</p>
                            </div>
                            <div className="w-px h-12 bg-purple-300"></div>
                            <div className="text-center flex items-center gap-1">
                              <Zap className="w-4 h-4 text-purple-600" />
                              <div>
                                <p className="text-sm font-semibold text-purple-700">Real-time</p>
                                <p className="text-sm text-purple-600">Processing</p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6">
                            <button className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors">
                              See our data methodology
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3: You Compare */}
                <div className="relative">
                  {/* Timeline Node */}
                  <div className="hidden lg:block absolute left-1/2 top-24 w-8 h-8 bg-emerald-700 rounded-full border-4 border-white shadow-xl transform -translate-x-1/2 z-10">
                    <div className="absolute inset-0 bg-emerald-700 rounded-full animate-ping opacity-30"></div>
                  </div>

                  {/* Content Grid */}
                  <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    {/* Left Content */}
                    <div className="lg:pr-16 lg:text-right">
                      <div className="group">
                        {/* Icon and Visual */}
                        <div className="flex justify-center lg:justify-end mb-8">
                          <div className="relative">
                            <div className="w-24 h-24 bg-gradient-to-br from-emerald-700 to-teal-700 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-500">
                              <Search className="w-12 h-12 text-white" />
                              {/* Search pulse animation */}
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 border-2 border-white rounded-full animate-ping opacity-30"></div>
                              </div>
                            </div>
                            {/* Pulse animation */}
                            <div className="absolute inset-0 bg-emerald-400 rounded-3xl animate-ping opacity-20"></div>
                          </div>
                        </div>

                        <div className="text-center lg:text-right">
                          <div className="flex items-center justify-center lg:justify-end gap-2 mb-4">
                            <h3 className="text-3xl font-bold text-gray-900">You Compare</h3>
                            <Tooltip content="Compare prices across hospitals, insurance plans, and cash payment options to find the best value for your healthcare needs.">
                              <Info className="w-5 h-5 text-emerald-500 cursor-help" />
                            </Tooltip>
                          </div>
                          
                          <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Instantly see and compare prices for hospitals, insurers, and cash options side-by-side. Use this information to save money, avoid surprise bills, and choose what's best for you.
                          </p>

                          {/* Highlighted Benefit */}
                          <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 mb-6">
                            <div className="flex items-center justify-center lg:justify-end gap-2 mb-3">
                              <TrendingDown className="w-6 h-6 text-emerald-600" />
                              <span className="text-2xl font-bold text-emerald-700">$3,200</span>
                            </div>
                            <p className="text-emerald-800 font-semibold">Average savings per procedure</p>
                            <p className="text-sm text-emerald-700 mt-1">for patients who compare prices before care</p>
                          </div>

                          <div className="flex justify-center lg:justify-end">
                            <PriceComparisonCTA 
                              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl shadow-lg"
                            >
                              Start Comparing Now
                            </PriceComparisonCTA>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Visual */}
                    <div className="order-first lg:order-last lg:pl-16 mb-12 lg:mb-0">
                      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-200">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-emerald-600" />
                          Price Comparison Example
                        </h4>
                        <div className="space-y-4">
                          {[
                            { provider: "Hospital A", price: "$3,200", type: "Cash", best: true },
                            { provider: "Hospital B", price: "$4,800", type: "Insurance", best: false },
                            { provider: "Hospital C", price: "$6,100", type: "Insurance", best: false }
                          ].map((item, idx) => (
                            <div key={idx} className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                              item.best 
                                ? 'bg-emerald-100 border-emerald-300 shadow-md' 
                                : 'bg-white border-gray-200'
                            }`}>
                              <div className="flex items-center gap-3">
                                {item.best && <span className="text-emerald-600 font-bold text-sm">BEST VALUE</span>}
                                <div>
                                  <p className="font-medium text-gray-900">{item.provider}</p>
                                  <p className="text-sm text-gray-600">{item.type} Price</p>
                                </div>
                              </div>
                              <div className={`text-lg font-bold ${item.best ? 'text-emerald-700' : 'text-gray-700'}`}>
                                {item.price}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 p-3 bg-emerald-100 rounded-xl">
                          <p className="text-sm text-emerald-800 font-semibold">💡 You could save $2,900 by choosing Hospital A</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="mt-20 text-center">
              <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to see what you'll actually pay?</h3>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  Join thousands of patients who've saved money by comparing healthcare prices before their procedures.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <PriceComparisonCTA 
                    size="lg"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl shadow-lg"
                  >
                    Compare Prices Now
                  </PriceComparisonCTA>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.location.href = "/how-it-works"}
                    className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl"
                  >
                    Learn More About Our Process
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Where Our Data Comes From - Split layout */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(20,184,166,0.15),transparent_40%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.15),transparent_40%)]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left column - Content */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                    Where Our Data
                    <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                      {" "}
                      Comes From
                    </span>
                  </h2>
                </div>
                
                <p className="text-xl text-gray-100 leading-relaxed mb-8">
                  We collect, organize, and update pricing data from official government-mandated hospital and insurance disclosures across the United States.
                </p>

                {/* By the Numbers */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <p className="text-3xl font-bold text-teal-400 mb-2">6,000+</p>
                    <p className="text-gray-200 font-medium">Hospitals</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <p className="text-3xl font-bold text-blue-400 mb-2">400+</p>
                    <p className="text-gray-200 font-medium">Insurers</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <p className="text-3xl font-bold text-purple-400 mb-2">2.4T+</p>
                    <p className="text-gray-200 font-medium">Pricing Records</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <p className="text-3xl font-bold text-emerald-400 mb-2">Monthly</p>
                    <p className="text-gray-200 font-medium">Updates</p>
                  </div>
                </div>
              </div>

              {/* Right column - Animated US Map placeholder */}
              <div className="relative">
                <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Data Coverage Nationwide</h3>
                  </div>
                  
                  {/* Simple animated US map representation */}
                  <div className="relative bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl p-8 h-64 flex items-center justify-center">
                    <div className="relative">
                      <Globe className="w-32 h-32 text-white/30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid grid-cols-3 gap-2">
                          {[...Array(9)].map((_, i) => (
                            <div 
                              key={i}
                              className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"
                              style={{
                                animationDelay: `${i * 0.2}s`,
                                animationDuration: '2s'
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-center text-gray-300 mt-4">
                    Real-time data collection from all 50 states
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Explore HealthFees.org - Two rows with alternating backgrounds */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/70 to-indigo-50/60"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-8 shadow-lg shadow-blue-500/25">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
                Explore
                <span className="bg-gradient-to-r from-blue-900 to-indigo-800 bg-clip-text text-transparent">
                  {" "}
                  HealthFees.org
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed mb-8">
                From quick price comparisons to in-depth market analysis, we have tools for every healthcare stakeholder.
              </p>
            </div>

            {/* First Row - White background */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {[
                {
                  icon: Search,
                  title: "Price Comparison Tool",
                  desc: "Search any procedure, see real prices from hospitals and insurance plans in your area.",
                  link: "/search-procedure",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Brain,
                  title: "AI Healthcare Assistant",
                  desc: "Ask natural language questions about healthcare costs and get instant, data-backed answers.",
                  link: "#",
                  gradient: "from-purple-600 to-pink-600"
                },
                {
                  icon: BarChart3,
                  title: "Market Analytics",
                  desc: "Analyze pricing trends, compare markets, and understand cost variations across regions.",
                  link: "/insightalytics",
                  gradient: "from-emerald-500 to-teal-500"
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="group relative cursor-pointer transform hover:scale-105 transition-all duration-300" 
                  onClick={() => window.location.href = feature.link}
                >
                  <div className="relative p-8 rounded-3xl bg-white backdrop-blur-xl border border-gray-200/50 shadow-xl hover:shadow-2xl">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 text-center group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 text-center leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - Light gray background */}
            <div className="grid md:grid-cols-3 gap-8 p-8 rounded-3xl bg-gray-50/80">
              {[
                {
                  icon: Building2,
                  title: "Provider Directory",
                  desc: "Find hospitals, clinics, and specialists with transparent pricing and quality metrics.",
                  link: "/hospitals",
                  gradient: "from-orange-500 to-red-500"
                },
                {
                  icon: Shield,
                  title: "Insurance Navigator",
                  desc: "Compare insurance plans, understand coverage, and find the best value for your needs.",
                  link: "/insurance",
                  gradient: "from-indigo-500 to-purple-500"
                },
                {
                  icon: Users,
                  title: "Compliance Tools",
                  desc: "Help healthcare organizations meet transparency requirements and benchmark their pricing.",
                  link: "/who-we-help/hospitals",
                  gradient: "from-yellow-500 to-orange-500"
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="group relative cursor-pointer transform hover:scale-105 transition-all duration-300" 
                  onClick={() => window.location.href = feature.link}
                >
                  <div className="relative p-8 rounded-3xl bg-white backdrop-blur-xl border border-gray-200/50 shadow-xl hover:shadow-2xl">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 text-center group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 text-center leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Who Uses HealthFees.org - Persona Insights with Tabs */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_40%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.15),transparent_40%)]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 mb-8 shadow-lg shadow-emerald-500/25">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
                Who Uses
                <span className="text-white">
                  {" "}
                  HealthFees.org
                </span>
              </h2>
            </div>

            {/* Persona Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(personas).map(([key, persona]) => (
                <button
                  key={key}
                  onClick={() => setActivePersona(key)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activePersona === key
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg'
                      : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
                  }`}
                >
                  {persona.title}
                </button>
              ))}
            </div>

            {/* Active Persona Content */}
            {Object.entries(personas).map(([key, persona]) => (
              <div
                key={key}
                className={`transition-all duration-500 ${
                  activePersona === key ? 'opacity-100 block' : 'opacity-0 hidden'
                }`}
              >
                <div className="max-w-4xl mx-auto">
                  <div className="relative p-12 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg">
                        <persona.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-6">{persona.title}</h3>
                    </div>

                    <div className="space-y-6 text-center">
                      <div className="p-6 rounded-2xl bg-white/10 border border-white/20">
                        <p className="text-xl font-semibold text-emerald-300 mb-3">Key Insight</p>
                        <p className="text-lg text-white leading-relaxed">{persona.insight}</p>
                      </div>

                      <p className="text-lg text-gray-200 leading-relaxed">{persona.support}</p>

                      <div className="pt-6">
                        <Button
                          onClick={() => window.location.href = persona.link}
                          className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                          {persona.cta}
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. What the Data Reveals - Enhanced with animated counters */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/60 to-cyan-50/50"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 mb-8 shadow-lg shadow-rose-500/25">
                <PieChart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
                What the Data
                <span className="bg-gradient-to-r from-rose-900 to-orange-800 bg-clip-text text-transparent">
                  {" "}
                  Reveals
                </span>
              </h2>
            </div>

            {/* Animated Statistics */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="group relative">
                <div className="relative p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">10x</div>
                    <div className="w-full bg-red-200 rounded-full h-2 mb-4">
                      <div className="bg-red-600 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    <p className="text-lg text-gray-800 font-semibold leading-relaxed">
                      Same procedure can cost 10x more at different hospitals in the same city
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="relative p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-2">33%</div>
                    <div className="w-full bg-amber-200 rounded-full h-2 mb-4">
                      <div className="bg-amber-600 h-2 rounded-full" style={{width: '33%'}}></div>
                    </div>
                    <p className="text-lg text-gray-800 font-semibold leading-relaxed">
                      Of the time, "in-network" costs more than cash prices
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="relative p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">$3,200</div>
                    <div className="w-full bg-emerald-200 rounded-full h-2 mb-4">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                    <p className="text-lg text-gray-800 font-semibold leading-relaxed">
                      Average savings when patients compare prices before care
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Mid-Page CTA Banner - NEW */}
        <section className="relative py-16 overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See how much you could save before your next appointment
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of patients who've saved money by comparing prices first
            </p>
            <Button
              onClick={() => window.location.href = "/search-procedure"}
              size="lg"
              className="px-12 py-4 text-xl bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Compare Prices Now
            </Button>
          </div>
        </section>

        {/* 9. Join the Movement - Enhanced with gradient overlay */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900">
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-900/60 to-purple-900/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(20,184,166,0.12),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.1),transparent_50%)]"></div>

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

      {/* Footer with Get Data Updates field */}
      <FooterExpanded />
    </div>
  );
}
