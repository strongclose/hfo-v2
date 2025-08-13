import React, { useState, useEffect } from "react";
import { Hero } from "./Hero";
import { Navigation } from "./Navigation";
import { ExploreCompareSection } from "./homepage/ExploreCompareSection";
import { FooterExpanded } from "./homepage/FooterExpanded";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { LazySection } from "./LazySection";
import { LazyAnimatedStats } from "./LazyAnimatedStats";
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
  Briefcase,
  Heart,
  CreditCard,
  TrendingDown as TrendingDownIcon,
} from "lucide-react";

const dataSources = [
  { name: "Provider Price Files", status: "Active", count: "6,000+" },
  { name: "Payer Rate Files", status: "Active", count: "400+" },
  { name: "Federal Compliance Data", status: "Monitoring", count: "Daily" }
];

const monthlyProcessingStatus = [
  {
    stage: "Price File Collection",
    progress: 92,
    tooltip: "Gathering provider and payer machine-readable files from required transparency postings.",
    isSearchIndexing: false
  },
  {
    stage: "Data Cleaning & Validation",
    progress: 78,
    tooltip: "Checking for errors, missing values, and formatting issues to ensure accuracy.",
    isSearchIndexing: false
  },
  {
    stage: "Rate Standardization",
    progress: 65,
    tooltip: "Converting different file formats and structures into a consistent, comparable dataset.",
    isSearchIndexing: false
  },
  {
    stage: "Search Indexing",
    progress: 45,
    tooltip: "Preparing the cleaned, standardized data so it's fast and easy to search on HFO.",
    isSearchIndexing: true
  }
];

const priceComparison = [
  { provider: "Provider A", price: "$3,200", type: "Cash", best: true },
  { provider: "Provider B", price: "$4,800", type: "Insurance", best: false },
  { provider: "Provider C", price: "$6,100", type: "Insurance", best: false }
];

const exploreToolsByUserType = {
  patients: [
    {
      icon: Search,
      title: "Price Comparison Tool",
      desc: "Compare provider, payer, and cash prices instantly.",
      link: "/price-comparison"
    },
    {
      icon: Building2,
      title: "Provider Directory",
      desc: "Browse providers and healthcare facilities.",
      link: "/provider-directory"
    },
    {
      icon: Shield,
      title: "Payer Directory",
      desc: "View insurance companies and plan data.",
      link: "/payer-directory"
    }
  ],
  analysts: [
    {
      icon: Database,
      title: "Data Explorer",
      desc: "Search, filter, and analyze raw pricing data.",
      link: "/data-explorer"
    },
    {
      icon: BookOpen,
      title: "Insights Blog",
      desc: "Read analysis, trends, and data-driven reports.",
      link: "/insights"
    },
    {
      icon: Activity,
      title: "Data Methodology",
      desc: "See how we collect, process, and verify data.",
      link: "/data-methodology"
    }
  ],
  providers: [
    {
      icon: CheckCircle,
      title: "Compliance Tool",
      desc: "Check TiC and ADA transparency compliance.",
      link: "/compliance-tool"
    },
    {
      icon: Globe,
      title: "Enterprise Data Hosting",
      desc: "Partner with HFO to host and manage your data.",
      link: "/enterprise-data-hosting"
    }
  ]
};

const personas = {
  patients: {
    title: "Patients & Families",
    primaryInsight: "Save an average of $3,200 per procedure by comparing prices before care.",
    primaryNumber: 3200,
    supportingData: "CA range: $18K–$67K",
    primaryCTA: "Check Prices Near You",
    primaryCTALink: "/price-comparison",
    secondaryCTA: "See Top Savings by Procedure",
    secondaryCTALink: "/insights?filter=savings",
    icon: Heart,
    bgColor: "from-blue-500 to-cyan-500",
    accentColor: "text-blue-600"
  },
  researchers: {
    title: "Researchers & Analysts",
    primaryInsight: "Uncover price variations of up to 900% for the same procedure.",
    primaryNumber: 900,
    supportingData: "2.4T+ records across 6K+ sources",
    primaryCTA: "Explore the Data",
    primaryCTALink: "/data-explorer",
    secondaryCTA: "Read Market Insights",
    secondaryCTALink: "/insights",
    icon: BarChart3,
    bgColor: "from-blue-400 to-indigo-500",
    accentColor: "text-blue-600"
  },
  employers: {
    title: "Healthcare Employers",
    primaryInsight: "Reduce benefits spend by steering employees toward cost-effective care.",
    primaryNumber: 1800,
    supportingData: "$1,800 avg savings potential",
    primaryCTA: "Get a Custom Savings Report",
    primaryCTALink: "/compliance-tool?type=employer",
    secondaryCTA: "See Real-World Savings Data",
    secondaryCTALink: "/insights",
    icon: Briefcase,
    bgColor: "from-emerald-400 to-teal-500",
    accentColor: "text-emerald-600"
  },
  providers: {
    title: "Providers",
    primaryInsight: "Benchmark your rates against peers and the market instantly.",
    primaryNumber: 0, // No specific number for this persona
    supportingData: "Compare with competitors.",
    primaryCTA: "Benchmark Your Rates",
    primaryCTALink: "/provider-directory?view=benchmark",
    secondaryCTA: "Learn How to Use HFO for Compliance",
    secondaryCTALink: "/compliance-tool",
    icon: Hospital,
    bgColor: "from-purple-400 to-violet-500",
    accentColor: "text-purple-600"
  },
  payers: {
    title: "Payers",
    primaryInsight: "Ensure network competitiveness and meet transparency compliance.",
    primaryNumber: 0, // No specific number for this persona
    supportingData: "All rates in one view",
    primaryCTA: "Access Payer Data",
    primaryCTALink: "/payer-directory",
    secondaryCTA: "Partner with HFO to Host Your Data",
    secondaryCTALink: "/enterprise-data-hosting",
    icon: Shield,
    bgColor: "from-cyan-400 to-blue-500",
    accentColor: "text-cyan-600"
  }
};

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedRadius, setSelectedRadius] = useState<number>(25);
  const [activePersona, setActivePersona] = useState("patients");
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // Custom hook for animated number counting
  const useCountUp = (target: number, duration: number = 1000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (target === 0) {
        setCount(0);
        return;
      }

      const startTime = Date.now();
      const startCount = 0;

      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.round(startCount + (target - startCount) * easeOutCubic);

        setCount(currentCount);

        if (progress >= 1) {
          clearInterval(timer);
          setCount(target);
        }
      }, 16);

      return () => clearInterval(timer);
    }, [target, duration]);

    return count;
  };

  const animatedNumber = useCountUp(personas[activePersona].primaryNumber, 1200);

  const handleSearch = (query: string, location?: string) => {
    console.log("Search:", query, location);
  };

  // Navigation handlers for Header component
  const handleNavigateToHomepage = () => setCurrentPage("home");
  const handleNavigateToInternalSearch = () => setCurrentPage("internalSearch");
  const handleNavigateToComparePrices = () => {
    if (typeof window !== 'undefined') {
      window.location.href = "/compare-prices";
    }
  };
  const handleNavigateToPriceComparison = () => {
    if (typeof window !== 'undefined') {
      window.location.href = "/price-comparison";
    }
  };
  const handleNavigateToSearchByProcedure = () => {
    if (typeof window !== 'undefined') {
      window.location.href = "/search-procedure";
    }
  };
  const handleNavigateToFAQ = () => {
    if (typeof window !== 'undefined') {
      window.location.href = "/faq";
    }
  };
  const handleNavigateToExplore = () => {
    if (typeof window !== 'undefined') {
      window.location.href = "/explore";
    }
  };
  const handleNavigateToExploreByLocation = () => {
    if (typeof window !== 'undefined') {
      window.location.href = "/explore/location";
    }
  };
  const handleNavigateToInsights = () => {
    if (typeof window !== 'undefined') {
      window.location.href = "/insights";
    }
  };
  const handleNavigateToPatientResources = () => {
    if (typeof window !== 'undefined') {
      window.location.href = "/learn";
    }
  };
  const handleNavigateToTools = () => {
    if (typeof window !== 'undefined') {
      window.location.href = "/tools";
    }
  };
  const handleNavigateToCommunity = () => {
    if (typeof window !== 'undefined') {
      window.location.href = "/community";
    }
  };
  const handleNavigateToProfessionals = () => {
    if (typeof window !== 'undefined') {
      window.location.href = "/professionals";
    }
  };

  const PriceComparisonCTA = ({
    size = "default",
    variant = "primary",
    className = "",
    children = "Compare Healthcare Prices"
  }) => (
    <Button
      onClick={() => {
        if (typeof window !== 'undefined') {
          window.location.href = "/search-procedure";
        }
      }}
      size={size}
      variant={variant}
      className={className}
    >
      {children}
      <ArrowRight className="w-5 h-5" />
    </Button>
  );


  const Tooltip = ({ children, content }: { children: React.ReactNode; content: string }) => {
    const tooltipId = content.slice(0, 20); // Use first 20 chars as unique ID
    const isActive = activeTooltip === tooltipId;

    return (
      <span className="relative inline-block mx-1">
        <span
          className="cursor-help inline-block"
          onMouseEnter={() => setActiveTooltip(tooltipId)}
          onMouseLeave={() => setActiveTooltip(null)}
        >
          {children}
        </span>
        {isActive && (
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-5 py-4 bg-white text-gray-900 text-sm leading-relaxed rounded-lg shadow-xl border border-gray-200 w-72 opacity-100 visible transition-all duration-300 pointer-events-none whitespace-normal"
            style={{ zIndex: 99999 }}
          >
            {content}
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></span>
          </span>
        )}
      </span>
    );
  };

  // Mini Visualization Components
  const PriceRangeChart = () => (
    <div className="bg-white rounded-xl p-4 border border-gray-200 w-full shadow-sm">
      <div className="text-sm hf-text-primary font-semibold mb-3">Knee Replacement Price Range (CA)</div>
      <div className="relative">
        <div className="flex justify-between text-xs hf-text-secondary mb-2">
          <span>Low</span>
          <span>Avg</span>
          <span>High</span>
        </div>
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full"></div>
        </div>
        <div className="flex justify-between text-xs hf-text-primary font-semibold mt-2">
          <span>$18K</span>
          <span>$42K</span>
          <span>$67K</span>
        </div>
      </div>
    </div>
  );

  const VariationBarChart = () => (
    <div className="bg-white rounded-xl p-4 border border-gray-200 w-full shadow-sm">
      <div className="text-sm hf-text-primary font-semibold mb-3">Cost Variation - Same Procedure</div>
      <div className="space-y-3">
        {[
          { label: "Provider A", value: 20, color: "bg-green-400" },
          { label: "Provider B", value: 60, color: "bg-yellow-400" },
          { label: "Provider C", value: 100, color: "bg-red-400" }
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="text-xs hf-text-secondary w-20 flex-shrink-0">{item.label}</span>
            <div className="flex-1 h-3 bg-gray-200 rounded-full">
              <div className={`h-full ${item.color} rounded-full transition-all duration-500`} style={{ width: `${item.value}%` }}></div>
            </div>
            <span className="text-xs hf-text-primary font-semibold w-8 text-right">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );

  const SavingsPieChart = () => (
    <div className="bg-white rounded-xl p-4 border border-gray-200 w-full shadow-sm">
      <div className="text-sm hf-text-primary font-semibold mb-3">Potential Savings Breakdown</div>
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 flex-shrink-0">
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="14" fill="transparent" stroke="rgba(200,200,200,0.5)" strokeWidth="4"/>
            <circle cx="16" cy="16" r="14" fill="transparent" stroke="#10b981" strokeWidth="4" strokeDasharray="70 100" strokeLinecap="round"/>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xs hf-text-primary font-bold">70%</div>
        </div>
        <div className="text-xs hf-text-secondary">
          <div className="mb-1">Potential Savings</div>
          <div className="text-emerald-600 font-semibold">$1,800 avg</div>
        </div>
      </div>
    </div>
  );

  const BenchmarkChart = () => (
    <div className="bg-white rounded-xl p-4 border border-gray-200 w-full shadow-sm">
      <div className="text-sm hf-text-primary font-semibold mb-3">Rate Comparison</div>
      <div className="space-y-3">
        {[
          { label: "Your Rate", value: 75, color: "bg-purple-400" },
          { label: "Market Avg", value: 60, color: "bg-blue-400" },
          { label: "Competitor", value: 45, color: "bg-gray-400" }
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="text-xs hf-text-secondary w-20 flex-shrink-0">{item.label}</span>
            <div className="flex-1 h-3 bg-gray-200 rounded-full">
              <div className={`h-full ${item.color} rounded-full transition-all duration-500`} style={{ width: `${item.value}%` }}></div>
            </div>
            <span className="text-xs hf-text-primary font-semibold w-8 text-right">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );

  const CompetitivenessMap = () => (
    <div className="bg-white rounded-xl p-4 border border-gray-200 w-full shadow-sm">
      <div className="text-sm hf-text-primary font-semibold mb-3">Network Competitiveness</div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {Array.from({ length: 9 }, (_, idx) => (
          <div
            key={idx}
            className={`h-6 rounded ${
              idx < 3 ? 'bg-green-500' : idx < 6 ? 'bg-yellow-500' : 'bg-red-500'
            } transition-all duration-300 hover:scale-105`}
          ></div>
        ))}
      </div>
      <div className="flex justify-between text-xs hf-text-secondary">
        <span>Competitive</span>
        <span>At Risk</span>
      </div>
    </div>
  );

  const getMiniVisualization = (persona: string) => {
    switch (persona) {
      case 'patients':
        return <PriceRangeChart />;
      case 'researchers':
        return <VariationBarChart />;
      case 'employers':
        return <SavingsPieChart />;
      case 'providers':
        return <BenchmarkChart />;
      case 'payers':
        return <CompetitivenessMap />;
      default:
        return null;
    }
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

        {/* 2. How It Works Section - COMPLETELY REDESIGNED */}
        <LazySection
          className="relative py-24 overflow-hidden bg-white"
          minHeight="800px"
        >
        <section>
          {/* White background with subtle blue accents */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-100 to-blue-200"></div>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-blue-100"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8 shadow-lg shadow-blue-500/25 hf-gradient-accent">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <h2 className="ds-h2 mb-6 text-gray-900">
                How It Works
              </h2>
              <p className="ds-body text-gray-600 max-w-3xl mx-auto">
                From scattered government files to instant price comparisons — here's how we make healthcare pricing transparent.
              </p>
            </div>

            {/* Enhanced Timeline with Rich Content */}
            <div className="relative">
              {/* Connection Line - Desktop */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2">
                <div className="h-full ds-timeline-line">
                </div>
              </div>

              <div className="space-y-20">
                {/* Step 1: We Collect */}
                <div className="relative">
                  {/* Timeline Node */}
                  <div className="hidden lg:block absolute left-1/2 top-20 w-8 h-8 rounded-full border-4 border-white shadow-xl transform -translate-x-1/2 z-10 hf-gradient-primary">
                  </div>

                  {/* Content Grid */}
                  <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    {/* Left Content */}
                    <div className="lg:pr-16 lg:text-right">
                      <div className="group">
                        {/* Icon and Visual */}
                        <div className="flex justify-center lg:justify-end mb-8">
                          <div className="relative">
                            <div className="ds-timeline-icon">
                              <Database />
                            </div>
                          </div>
                        </div>

                        <div className="text-center lg:text-right">
                          <div className="flex items-center justify-center lg:justify-end gap-2 mb-4">
                            <h3 className="ds-h3 text-gray-900">We Collect</h3>
                            <Tooltip content="Federal law requires providers and payers to publish machine-readable files with their negotiated rates under transparency regulations.">
                              <Info className="w-5 h-5 text-blue-500 cursor-help" />
                            </Tooltip>
                          </div>
                          
                          <div className="ds-body text-gray-600 mb-6">
                            <Tooltip content="The Hospital Price Transparency Final Rule (45 CFR ����180) requires providers to publish machine-readable files with all their negotiated rates.">
                              <span className="underline decoration-blue-300 decoration-2 cursor-help">Federal law</span>
                            </Tooltip>
                            {" "}requires providers and payers to publish their real prices under the Hospital Price Transparency Final Rule and the Transparency in Coverage Rule. We automatically monitor thousands of these{" "}
                            <Tooltip content="Machine-readable files are structured data files (like JSON or CSV) that computers can easily process, as opposed to human-readable PDFs.">
                              <span className="underline decoration-blue-300 decoration-2 cursor-help">machine-readable files</span>
                            </Tooltip>
                            {" "}so you don't have to.
                          </div>

                          {/* Stats Box */}
                          <div className="inline-flex items-center gap-6 p-4 bg-blue-50 rounded-2xl border border-blue-200">
                            <div className="text-center">
                              <p className="ds-stat-number" style="color: var(--ds-primary-blue)">6,000+</p>
                              <p className="ds-stat-label text-blue-700">Providers</p>
                            </div>
                            <div className="w-px h-12 bg-blue-300"></div>
                            <div className="text-center">
                              <p className="ds-stat-number" style="color: var(--ds-primary-blue)">400+</p>
                              <p className="ds-stat-label text-blue-700">Payers</p>
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
                            <Button
                              variant="link"
                              onClick={() => {
                                if (typeof window !== 'undefined') {
                                  window.open('https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-E/part-180', '_blank');
                                }
                              }}
                            >
                              Learn about the federal requirements
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Visual - Mobile shows above, Desktop shows right */}
                    <div className="order-first lg:order-last lg:pl-16 mb-12 lg:mb-0">
                      <div className="hf-card p-8 border-blue-200" style={{ background: 'rgba(59, 130, 246, 0.05)' }}>
                        <h4 className="hf-heading-h4 hf-text-primary mb-4 flex items-center gap-2">
                          <FileText className="w-5 h-5 text-blue-600" />
                          Live Data Sources
                        </h4>
                        <div className="space-y-3">
                          {dataSources.map((source, idx) => {
                            const statusColors = {
                              'Active': { bg: 'bg-green-50', text: 'text-green-700', dot: 'bg-green-500' },
                              'Monitoring': { bg: 'bg-yellow-50', text: 'text-yellow-700', dot: 'bg-yellow-500' },
                              'Inactive': { bg: 'bg-red-50', text: 'text-red-700', dot: 'bg-red-500' }
                            };
                            const colors = statusColors[source.status] || statusColors['Active'];

                            return (
                              <div key={idx} className={`hf-card flex items-center justify-between p-3 ${colors.bg} border-blue-100`}>
                                <div>
                                  <p className="hf-heading-h6 hf-text-primary">{source.name}</p>
                                  <p className="text-sm hf-text-muted">{source.count}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className={`w-2 h-2 rounded-full ${colors.dot}`}></div>
                                  <span className={`text-sm font-medium ${colors.text}`}>{source.status}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2: We Organize */}
                <div className="relative">
                  {/* Timeline Node */}
                  <div className="hidden lg:block absolute left-1/2 top-24 w-8 h-8 rounded-full border-4 border-white shadow-xl transform -translate-x-1/2 z-10 hf-gradient-accent">
                  </div>

                  {/* Content Grid - Reversed */}
                  <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    {/* Left Visual */}
                    <div className="lg:pr-16 mb-12 lg:mb-0">
                      <div className="hf-card p-8 border-blue-200" style={{ background: 'rgba(59, 130, 246, 0.05)' }}>
                        <h4 className="hf-heading-h4 hf-text-primary mb-2 flex items-center gap-2">
                          <Brain className="w-5 h-5 text-purple-600" />
                          Current Monthly Data Processing Status
                        </h4>

                        <div className="space-y-5">
                          {monthlyProcessingStatus.map((stage, idx) => (
                            <div key={idx} className="group">
                              {/* Mobile: Label above bar */}
                              <div className="flex items-center justify-between mb-2 sm:hidden">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-medium text-gray-800">{stage.stage}</span>
                                  <Tooltip content={stage.tooltip}>
                                    <Info className="w-3 h-3 text-gray-500 cursor-help" />
                                  </Tooltip>
                                </div>
                                <span className="text-sm font-semibold text-gray-700">{stage.progress}%</span>
                              </div>

                              {/* Desktop: Label inline with bar */}
                              <div className="hidden sm:flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2 min-w-0 flex-1">
                                  <span className="text-sm font-medium text-gray-800 truncate">{stage.stage}</span>
                                  <Tooltip content={stage.tooltip}>
                                    <Info className="w-4 h-4 text-gray-500 cursor-help flex-shrink-0" />
                                  </Tooltip>
                                </div>
                                <span className="text-sm font-semibold text-gray-700 ml-4">{stage.progress}%</span>
                              </div>

                              {/* Progress Bar */}
                              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                <div
                                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                                    stage.isSearchIndexing
                                      ? 'bg-gradient-to-r from-orange-500 to-orange-600'
                                      : 'bg-gradient-to-r from-teal-500 to-blue-600'
                                  }`}
                                  style={{
                                    width: `${stage.progress}%`,
                                    boxShadow: stage.isSearchIndexing
                                      ? '0 1px 3px rgba(251, 146, 60, 0.4)'
                                      : '0 1px 3px rgba(20, 184, 166, 0.4)'
                                  }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Progress Summary */}
                        <div className="mt-6 pt-4 border-t border-purple-200">
                          <div className="flex items-center justify-between text-xs text-gray-600">
                            <span>Overall Progress</span>
                            <span className="font-semibold">
                              {Math.round(monthlyProcessingStatus.reduce((acc, stage) => acc + stage.progress, 0) / monthlyProcessingStatus.length)}% Complete
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:pl-16">
                      <div className="group">
                        {/* Icon and Visual */}
                        <div className="flex justify-center lg:justify-start mb-8">
                          <div className="relative">
                            <div className="ds-timeline-icon">
                              <Sparkles />
                            </div>
                          </div>
                        </div>

                        <div className="text-center lg:text-left">
                          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                            <h3 className="hf-heading-h3 hf-text-primary">We Organize</h3>
                            <Tooltip content="We use advanced algorithms to clean, validate, and structure raw pricing data into searchable formats.">
                              <Info className="w-5 h-5 text-purple-500 cursor-help" />
                            </Tooltip>
                          </div>
                          
                          <p className="hf-body-medium hf-text-secondary mb-6">
                            We take trillions of raw data points and transform them into a clean, searchable format that makes sense. No more wading through spreadsheets. Now you can get straight to the answers you need.
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
                            <Button
                              variant="link"
                              onClick={() => {
                                if (typeof window !== 'undefined') {
                                  window.location.href = "/data-methodology";
                                }
                              }}
                            >
                              See our data methodology
                              <ArrowRight className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3: You Compare */}
                <div className="relative">
                  {/* Timeline Node */}
                  <div className="hidden lg:block absolute left-1/2 top-24 w-8 h-8 rounded-full border-4 border-white shadow-xl transform -translate-x-1/2 z-10 hf-gradient-primary">
                  </div>

                  {/* Content Grid */}
                  <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    {/* Left Content */}
                    <div className="lg:pr-16 lg:text-right">
                      <div className="group">
                        {/* Icon and Visual */}
                        <div className="flex justify-center lg:justify-end mb-8">
                          <div className="relative">
                            <div className="ds-timeline-icon">
                              <Search />
                            </div>
                          </div>
                        </div>

                        <div className="text-center lg:text-right">
                          <div className="flex items-center justify-center lg:justify-end gap-2 mb-4">
                            <h3 className="hf-heading-h3 hf-text-primary">You Compare</h3>
                            <Tooltip content="Compare prices across providers, payers, and cash payment options to find the best value for your healthcare needs.">
                              <Info className="w-5 h-5 text-emerald-500 cursor-help" />
                            </Tooltip>
                          </div>
                          
                          <p className="hf-body-medium hf-text-secondary mb-6">
                            Instantly see and compare prices for providers, payers, and cash options side-by-side. Use this information to save money, avoid surprise bills, and choose what's best for you.
                          </p>

                          {/* Highlighted Benefit */}
                          <div className="p-6 rounded-2xl border border-emerald-200 mb-6" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
                            <div className="flex items-center justify-center lg:justify-end gap-2 mb-3">
                              <TrendingDown className="w-6 h-6 text-emerald-600" />
                              <span className="text-2xl font-bold text-emerald-700">$3,200</span>
                            </div>
                            <p className="text-emerald-800 font-semibold">Average savings per procedure</p>
                            <p className="text-sm text-emerald-700 mt-1">for patients who compare prices before care</p>
                          </div>

                        </div>
                      </div>
                    </div>

                    {/* Right Visual */}
                    <div className="order-first lg:order-last lg:pl-16 mb-12 lg:mb-0">
                      <div className="hf-card p-8 border-emerald-200" style={{ background: 'rgba(16, 185, 129, 0.05)' }}>
                        <h4 className="hf-heading-h4 hf-text-primary mb-4 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-emerald-600" />
                          Price Comparison Example
                        </h4>
                        <div className="space-y-4">
                          {priceComparison.map((item, idx) => (
                            <div key={idx} className={`hf-card flex items-center justify-between p-4 border-2 transition-all ${
                              item.best 
                                ? 'bg-emerald-100 border-emerald-300 shadow-md' 
                                : 'bg-white border-gray-200'
                            }`}>
                              <div className="flex items-center gap-3">
                                {item.best && <span className="text-emerald-600 font-bold text-sm">BEST VALUE</span>}
                                <div>
                                  <p className="hf-heading-h6 hf-text-primary">{item.provider}</p>
                                  <p className="text-sm hf-text-muted">{item.type} Price</p>
                                </div>
                              </div>
                              <div className={`text-lg font-bold ${item.best ? 'text-emerald-700' : 'text-gray-700'}`}>
                                {item.price}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="hf-card mt-4 p-3 bg-emerald-100">
                          <p className="text-sm text-emerald-800 font-semibold">💡 You could save $2,900 by choosing Provider A</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="mt-20 text-center">
              <div className="hf-card p-8 border-blue-200" style={{ background: 'rgba(59, 130, 246, 0.05)' }}>
                <h3 className="hf-heading-h3 hf-text-primary mb-4">Ready to see what you'll actually pay?</h3>
                <p className="hf-body-medium hf-text-secondary mb-8 max-w-2xl mx-auto">
                  Join thousands of patients who've saved money by comparing healthcare prices before their procedures.
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    className="ds-btn-primary"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.location.href = "/search-procedure";
                      }
                    }}
                  >
                    Start Comparing Prices
                  </button>
                  <button
                    className="ds-btn-secondary"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.location.href = "/how-it-works";
                      }
                    }}
                  >
                    Learn More About Our Process
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        </LazySection>

        {/* 3. What the Data Reveals - Enhanced with animated counters */}
        <LazySection
          className="relative py-24 overflow-hidden"
          minHeight="500px"
        >
        <section>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8 hf-gradient-accent">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h2 className="ds-h2 mb-6 text-gray-900">
                What the Data Reveals
              </h2>
            </div>

            {/* Animated Statistics */}
            <LazyAnimatedStats
              stats={[
                {
                  value: "10x",
                  label: "Same procedure can cost 10x more at different providers in the same city",
                  icon: TrendingUp,
                  color: "linear-gradient(to bottom right, #ef4444, #ec4899)"
                },
                {
                  value: "33%",
                  label: 'Of the time, "in-network" costs more than cash prices',
                  icon: AlertTriangle,
                  color: "linear-gradient(to bottom right, #f59e0b, #ea580c)"
                },
                {
                  value: "$3,200",
                  label: "Average savings when patients compare prices before care",
                  icon: DollarSign,
                  color: "linear-gradient(to bottom right, #10b981, #0d9488)"
                }
              ]}
            />
          </div>
        </section>
        </LazySection>

        {/* 4. Who Uses HealthFees.org - Enhanced Persona Insights */}
        <LazySection
          className="relative py-24 overflow-hidden bg-white"
          minHeight="700px"
        >
        <section>
          {/* Standardized subtle background */}
          <div className="absolute inset-0 hf-gradient-subtle"></div>
          <div className="absolute inset-0 hf-overlay-secondary"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="ds-icon mx-auto mb-8">
                <Users />
              </div>
              <h2 className="ds-h2 mb-6 text-gray-900">
                Who Uses HealthFees.org
              </h2>
            </div>

            {/* Enhanced Persona Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(personas).map(([key, persona]) => (
                <button
                  key={key}
                  onClick={() => setActivePersona(key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    activePersona === key
                      ? 'text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                  }`}
                  style={activePersona === key ? { background: 'var(--ds-gradient-blue)' } : {}}
                >
                  <persona.icon className="w-5 h-5" />
                  {persona.title}
                </button>
              ))}
            </div>

            {/* Enhanced Active Persona Content */}
            {Object.entries(personas).map(([key, persona]) => (
              <div
                key={key}
                className={`transition-all duration-500 ${activePersona === key ? 'block opacity-100' : 'hidden opacity-0'}`}
              >
                <div className="max-w-6xl mx-auto">
                  <div className={`relative p-8 md:p-12 rounded-3xl hf-card border-gray-200`}>

                    {/* Hero Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

                      {/* Left: Primary Content */}
                      <div className="flex flex-col h-full">
                        {/* Header */}
                        <div className="flex items-center gap-6 mb-8">
                          <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl flex-shrink-0" style={{ background: `linear-gradient(to bottom right, ${persona.bgColor === 'from-blue-500 to-cyan-500' ? '#3b82f6, #06b6d4' : persona.bgColor === 'from-blue-400 to-indigo-500' ? '#60a5fa, #6366f1' : persona.bgColor === 'from-emerald-400 to-teal-500' ? '#34d399, #14b8a6' : persona.bgColor === 'from-purple-400 to-violet-500' ? '#a78bfa, #8b5cf6' : '#22d3ee, #3b82f6'})` }}>
                            <persona.icon className="w-10 h-10 text-white" />
                          </div>
                          <h3 className="hf-heading-h3 hf-text-primary">{persona.title}</h3>
                        </div>

                        {/* Primary Insight with Animated Number */}
                        <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 mb-8 flex-grow">
                          <p className="hf-heading-h6 text-blue-600 mb-3">Primary Insight</p>
                          <div className="hf-body-medium hf-text-primary">
                            {persona.primaryNumber > 0 ? (
                              persona.title === "Patients & Families" ? (
                                <>Save an average of <span className="hf-heading-h3 text-emerald-600">${animatedNumber.toLocaleString()}</span> per procedure by comparing prices before care.</>
                              ) : persona.title === "Researchers & Analysts" ? (
                                <>Uncover price variations of up to <span className="hf-heading-h3 text-blue-600">{animatedNumber}%</span> for the same procedure.</>
                              ) : persona.title === "Healthcare Employers" ? (
                                <>Reduce benefits spend by steering employees toward cost-effective care.</>
                              ) : (
                                persona.primaryInsight
                              )
                            ) : (
                              persona.primaryInsight
                            )}
                          </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col gap-3">
                          <button
                            className="ds-btn-primary"
                            onClick={() => {
                              if (typeof window !== 'undefined') {
                                window.location.href = persona.primaryCTALink;
                              }
                            }}
                          >
                            {persona.primaryCTA}
                            <ArrowRight className="w-4 h-4" />
                          </button>
                          <button
                            className="ds-btn-secondary"
                            onClick={() => {
                              if (typeof window !== 'undefined') {
                                window.location.href = persona.secondaryCTALink;
                              }
                            }}
                          >
                            {persona.secondaryCTA}
                          </button>
                        </div>
                      </div>

                      {/* Right: Mini Visualization & Supporting Data */}
                      <div className="order-first lg:order-last flex flex-col">
                        {/* Spacer for alignment */}
                        <div className="hidden lg:block h-28"></div>

                        {/* Mini Visualization */}
                        <div className="mb-6">
                          {getMiniVisualization(key)}
                        </div>

                        {/* Supporting Data Point */}
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                          <p className="hf-text-primary hf-heading-h6 font-semibold">{persona.supportingData}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        </LazySection>

        {/* 5. Transparency Scoring & Compliance Support */}
        <LazySection
          className="relative py-24 overflow-hidden bg-white"
          minHeight="800px"
        >
        <section>
          {/* Subtle accent elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(20,184,166,0.03),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.03),transparent_70%)]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8 shadow-lg shadow-teal-500/25 hf-gradient-accent">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="hf-heading-h2 mb-6 hf-text-primary tracking-tight">
                Transparency Scoring
                <span className="text-teal-700">
                  {" "}
                  & Compliance Support
                </span>
              </h2>
              <p className="hf-body-large hf-text-primary max-w-5xl mx-auto font-medium">
                Recognizing leaders and supporting progress — we measure every provider and payer's transparency and help them achieve full compliance.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-12">

              {/* Left Column - Leaderboard Snapshot */}
              <div>
                <h3 className="hf-heading-h3 hf-text-primary mb-8 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-teal-600" />
                  Top Transparency Leaders
                </h3>

                <div className="space-y-4 mb-8">
                  {/* Leaderboard Cards */}
                  <div className="hf-card p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-500">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="hf-heading-h6 hf-text-primary">Provider A</span>
                            <div className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-200 text-yellow-900">Gold</div>
                          </div>
                          <div className="text-sm text-gray-700 font-medium">Transparency Certified</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-gray-900">98</div>
                        <div className="text-sm text-gray-700 font-medium">/100</div>
                      </div>
                    </div>
                  </div>

                  <div className="hf-card p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br from-gray-400 to-gray-500">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="hf-heading-h6 hf-text-primary">Payer B</span>
                            <div className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-200 text-gray-900">Silver</div>
                          </div>
                          <div className="text-sm text-gray-700 font-medium">Healthcare Insurer</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-gray-900">95</div>
                        <div className="text-sm text-gray-700 font-medium">/100</div>
                      </div>
                    </div>
                  </div>

                  <div className="hf-card p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br from-orange-600 to-orange-500">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="hf-heading-h6 hf-text-primary">Provider C</span>
                            <div className="px-3 py-1 rounded-full text-sm font-semibold bg-amber-200 text-amber-900">Bronze</div>
                          </div>
                          <div className="text-sm text-gray-700 font-medium">Regional Medical Center</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-gray-900">92</div>
                        <div className="text-sm text-gray-700 font-medium">/100</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.location.href = "/transparency-scores";
                    }
                  }}
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  View Transparency Scores
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Right Column - Score Distribution Chart */}
              <div>
                <h3 className="hf-heading-h3 hf-text-primary mb-8 flex items-center gap-3">
                  <PieChart className="w-6 h-6 text-blue-600" />
                  Compliance Across the Industry
                </h3>

                {/* Donut Chart */}
                <div className="hf-card p-8 mb-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative w-48 h-48">
                      <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
                        {/* Background circle */}
                        <circle cx="50" cy="50" r="35" fill="transparent" stroke="#e5e7eb" strokeWidth="8"/>
                        {/* Fully Compliant - 45% */}
                        <circle cx="50" cy="50" r="35" fill="transparent" stroke="#10b981" strokeWidth="8"
                                strokeDasharray="63 157" strokeLinecap="round"/>
                        {/* Partially Compliant - 35% */}
                        <circle cx="50" cy="50" r="35" fill="transparent" stroke="#3b82f6" strokeWidth="8"
                                strokeDasharray="49 171" strokeDashoffset="-63" strokeLinecap="round"/>
                        {/* Non Compliant - 20% */}
                        <circle cx="50" cy="50" r="35" fill="transparent" stroke="#6b7280" strokeWidth="8"
                                strokeDasharray="28 192" strokeDashoffset="-112" strokeLinecap="round"/>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-gray-900">6,400+</div>
                          <div className="text-sm text-gray-700 font-medium">Entities Scored</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-500"></div>
                        <span className="text-gray-900 font-bold text-lg">Fully Compliant</span>
                      </div>
                      <span className="text-gray-900 font-semibold text-lg">45%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-500"></div>
                        <span className="text-gray-900 font-medium text-base">Partially Compliant</span>
                      </div>
                      <span className="text-gray-900 font-semibold text-lg">35%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-gray-500"></div>
                        <span className="text-gray-900 font-medium text-base">Non Compliant</span>
                      </div>
                      <span className="text-gray-900 font-semibold text-lg">20%</span>
                    </div>
                  </div>
                </div>

                {/* Support Box */}
                <div className="hf-card p-6 mb-6 border-teal-300">
                  <h4 className="hf-heading-h4 hf-text-primary mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-teal-600" />
                    Our Support
                  </h4>
                  <p className="hf-text-primary mb-4 font-medium">
                    We provide guidance, tools, and remediation services to help all entities reach 100% compliance.
                  </p>
                  <Button
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.location.href = "/compliance-tool";
                      }
                    }}
                    variant="secondary"
                  >
                    Get Compliance Help
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Call to Action Strip */}
            <div className="hf-card mt-16 p-8 bg-gray-100 border-gray-400">
              <div className="flex flex-col lg:flex-row items-center gap-6">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 hf-gradient-accent">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="hf-body-medium hf-text-primary font-semibold">
                      Check your Transparency Score or request compliance support to join the leaders in healthcare transparency.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                  <Button
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.location.href = "/compliance-tool";
                      }
                    }}
                    variant="secondary"
                    size="lg"
                  >
                    Check Your Score
                  </Button>
                  <Button
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.location.href = "/contact";
                      }
                    }}
                    variant="secondary"
                    size="lg"
                  >
                    Request Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        </LazySection>

        {/* 6. Explore HealthFees.org - Grouped Tools by User Type */}
        <LazySection
          className="relative py-24 overflow-hidden bg-white"
          minHeight="600px"
        >
        <section>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="ds-icon mx-auto mb-8">
                <Target />
              </div>
              <h2 className="ds-h2 mb-6 text-gray-900">
                Explore HealthFees.org
              </h2>
              <p className="ds-body text-gray-600 max-w-4xl mx-auto">
                From quick price comparisons to in-depth market analysis, we have tools for every healthcare stakeholder.
              </p>
            </div>

            {/* Grouped Tools */}
            <div className="space-y-12">
              {Object.entries(exploreToolsByUserType).map(([userType, tools]) => (
                <div key={userType}>
                  <h3 className="ds-h3 text-gray-900 mb-6 capitalize text-center">
                    {userType === 'patients' ? 'For Patients' : userType === 'analysts' ? 'For Analysts' : 'For Providers'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tools.map((tool, index) => (
                      <div
                        key={index}
                        className="ds-tool-card cursor-pointer"
                        onClick={() => {
                          if (typeof window !== 'undefined') {
                            window.location.href = tool.link;
                          }
                        }}
                      >
                        {/* Icon */}
                        <div className="ds-icon mx-auto">
                          <tool.icon />
                        </div>

                        {/* Title */}
                        <h4 className="ds-tool-name">
                          {tool.title}
                        </h4>

                        {/* Description */}
                        <p className="ds-body text-gray-600">
                          {tool.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        </LazySection>

      </div>

      {/* Footer with Get Data Updates field */}
      <FooterExpanded />
    </div>
  );
}
