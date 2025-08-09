import { useState, useEffect } from "react";
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
    tooltip: "Preparing the cleaned, standardized data so it's fast and easy to search on HealthFees.org.",
    isSearchIndexing: true
  }
];

const priceComparison = [
  { provider: "Provider A", price: "$3,200", type: "Cash", best: true },
  { provider: "Provider B", price: "$4,800", type: "Insurance", best: false },
  { provider: "Provider C", price: "$6,100", type: "Insurance", best: false }
];

const exploreActionCards = [
  {
    icon: Search,
    title: "Price Comparison Tool",
    desc: "Compare provider, payer, and cash prices instantly.",
    link: "/price-comparison",
    color: "text-blue-600"
  },
  {
    icon: Database,
    title: "Data Explorer",
    desc: "Search, filter, and analyze raw pricing data.",
    link: "/data-explorer",
    color: "text-teal-600"
  },
  {
    icon: BookOpen,
    title: "Insights Blog",
    desc: "Read analysis, trends, and data-driven reports.",
    link: "/insights",
    color: "text-purple-600"
  },
  {
    icon: Building2,
    title: "Provider Directory",
    desc: "Browse providers and healthcare facilities.",
    link: "/provider-directory",
    color: "text-emerald-600"
  },
  {
    icon: Shield,
    title: "Payer Directory",
    desc: "View insurance companies and plan data.",
    link: "/payer-directory",
    color: "text-indigo-600"
  },
  {
    icon: CheckCircle,
    title: "Compliance Tool",
    desc: "Check TiC and ADA transparency compliance.",
    link: "/compliance-tool",
    color: "text-orange-600"
  },
  {
    icon: Activity,
    title: "Data Methodology",
    desc: "See how we collect, process, and verify data.",
    link: "/data-methodology",
    color: "text-cyan-600"
  },
  {
    icon: Globe,
    title: "Enterprise Data Hosting",
    desc: "Partner with HFO to host and manage your data.",
    link: "/enterprise-data-hosting",
    color: "text-rose-600"
  }
];

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
    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 w-full">
      <div className="text-sm text-white/80 mb-3">Knee Replacement Price Range (CA)</div>
      <div className="relative">
        <div className="flex justify-between text-xs text-white/70 mb-2">
          <span>Low</span>
          <span>Avg</span>
          <span>High</span>
        </div>
        <div className="h-4 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 rounded-full"></div>
        </div>
        <div className="flex justify-between text-xs text-white mt-2">
          <span>$18K</span>
          <span>$42K</span>
          <span>$67K</span>
        </div>
      </div>
    </div>
  );

  const VariationBarChart = () => (
    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 w-full">
      <div className="text-sm text-white/80 mb-3">Cost Variation - Same Procedure</div>
      <div className="space-y-3">
        {[
          { label: "Provider A", value: 20, color: "bg-green-400" },
          { label: "Provider B", value: 60, color: "bg-yellow-400" },
          { label: "Provider C", value: 100, color: "bg-red-400" }
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="text-xs text-white/70 w-20 flex-shrink-0">{item.label}</span>
            <div className="flex-1 h-3 bg-white/20 rounded-full">
              <div className={`h-full ${item.color} rounded-full transition-all duration-500`} style={{ width: `${item.value}%` }}></div>
            </div>
            <span className="text-xs text-white/70 w-8 text-right">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );

  const SavingsPieChart = () => (
    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 w-full">
      <div className="text-sm text-white/80 mb-3">Potential Savings Breakdown</div>
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 flex-shrink-0">
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="14" fill="transparent" stroke="rgba(255,255,255,0.2)" strokeWidth="4"/>
            <circle cx="16" cy="16" r="14" fill="transparent" stroke="#10b981" strokeWidth="4" strokeDasharray="70 100" strokeLinecap="round"/>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xs text-white font-bold">70%</div>
        </div>
        <div className="text-xs text-white/80">
          <div className="mb-1">Potential Savings</div>
          <div className="text-emerald-300 font-semibold">$1,800 avg</div>
        </div>
      </div>
    </div>
  );

  const BenchmarkChart = () => (
    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 w-full">
      <div className="text-sm text-white/80 mb-3">Rate Comparison</div>
      <div className="space-y-3">
        {[
          { label: "Your Rate", value: 75, color: "bg-purple-400" },
          { label: "Market Avg", value: 60, color: "bg-blue-400" },
          { label: "Competitor", value: 45, color: "bg-gray-400" }
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="text-xs text-white/70 w-20 flex-shrink-0">{item.label}</span>
            <div className="flex-1 h-3 bg-white/20 rounded-full">
              <div className={`h-full ${item.color} rounded-full transition-all duration-500`} style={{ width: `${item.value}%` }}></div>
            </div>
            <span className="text-xs text-white/70 w-8 text-right">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );

  const CompetitivenessMap = () => (
    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 w-full">
      <div className="text-sm text-white/80 mb-3">Network Competitiveness</div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {Array.from({ length: 9 }, (_, idx) => (
          <div
            key={idx}
            className={`h-6 rounded ${
              idx < 3 ? 'bg-green-400' : idx < 6 ? 'bg-yellow-400' : 'bg-red-400'
            } transition-all duration-300 hover:scale-105`}
          ></div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-white/70">
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

        {/* 2. Why This Matters Section - Updated content */}
        <section className="relative py-24 overflow-hidden" id="why-matters">
          {/* Background with gradient mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/50 to-cyan-50/40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.12),transparent_50%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.10),transparent_50%)] pointer-events-none"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8 shadow-lg shadow-blue-500/25" style={{ background: 'linear-gradient(to bottom right, #3b82f6, #06b6d4)' }}>
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 tracking-tight">
                Why This
                <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                  {" "}
                  Matters
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-800 max-w-5xl mx-auto leading-relaxed font-medium mb-8">
                For decades, healthcare pricing was kept secret. Providers could charge anything, and patients only found out the cost after receiving care—sometimes leading to financial devastation.
              </p>
              
              <div className="mt-8 p-8 rounded-3xl bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-xl border border-white/40 shadow-xl shadow-black/5 max-w-4xl mx-auto">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(to bottom right, #3b82f6, #0891b2)' }}>
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-lg text-gray-800 font-semibold mb-2">Federal Law Changed Everything</p>
                    <p className="text-gray-800">
                      New transparency regulations require providers and payers to publish their real negotiated rates. But the data is scattered across thousands of files and websites.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-800 font-medium text-center">
                  <span className="text-blue-600 font-bold">We've organized it all</span> in one searchable platform, so you can finally see what you'll actually pay before you get care.
                </p>
              </div>
              
              <div className="mt-12">
                <PriceComparisonCTA
                  size="xl"
                  variant="accent"
                >
                  Start Comparing Prices Now
                </PriceComparisonCTA>
              </div>
            </div>
          </div>
        </section>

        {/* 3. How It Works Section - COMPLETELY REDESIGNED */}
        <section className="relative py-24 overflow-hidden bg-white">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-blue-50/30 to-indigo-50/20"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.03) 0%, transparent 50%), 
                              radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.03) 0%, transparent 50%)`
          }}></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8 shadow-lg shadow-blue-500/25" style={{ background: 'linear-gradient(to bottom right, #3b82f6, #14b8a6)' }}>
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
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
                </div>
              </div>

              <div className="space-y-20">
                {/* Step 1: We Collect */}
                <div className="relative">
                  {/* Timeline Node */}
                  <div className="hidden lg:block absolute left-1/2 top-20 w-8 h-8 rounded-full border-4 border-white shadow-xl transform -translate-x-1/2 z-10" style={{ backgroundColor: '#1e40af' }}>
                  </div>

                  {/* Content Grid */}
                  <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    {/* Left Content */}
                    <div className="lg:pr-16 lg:text-right">
                      <div className="group">
                        {/* Icon and Visual */}
                        <div className="flex justify-center lg:justify-end mb-8">
                          <div className="relative">
                            <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-xl group-hover:scale-105 transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, #1e40af, #0891b2)' }}>
                              <Database className="w-12 h-12 text-white fill-current" />
                            </div>
                          </div>
                        </div>

                        <div className="text-center lg:text-right">
                          <div className="flex items-center justify-center lg:justify-end gap-2 mb-4">
                            <h3 className="text-2xl font-bold text-gray-900">We Collect</h3>
                            <Tooltip content="Federal law requires providers and payers to publish machine-readable files with their negotiated rates under transparency regulations.">
                              <Info className="w-5 h-5 text-blue-500 cursor-help" />
                            </Tooltip>
                          </div>
                          
                          <div className="text-lg text-gray-700 leading-relaxed mb-6">
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
                              <p className="text-2xl font-bold text-blue-600">6,000+</p>
                              <p className="text-sm text-blue-700 font-medium">Providers</p>
                            </div>
                            <div className="w-px h-12 bg-blue-300"></div>
                            <div className="text-center">
                              <p className="text-2xl font-bold text-blue-600">400+</p>
                              <p className="text-sm text-blue-700 font-medium">Payers</p>
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
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-200">
                        <h4 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <FileText className="w-5 h-5 text-blue-600" />
                          Live Data Sources
                        </h4>
                        <div className="space-y-3">
                          {dataSources.map((source, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-xl border border-blue-100">
                              <div>
                                <p className="font-medium text-gray-900">{source.name}</p>
                                <p className="text-sm text-gray-600">{source.count}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
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
                  <div className="hidden lg:block absolute left-1/2 top-24 w-8 h-8 rounded-full border-4 border-white shadow-xl transform -translate-x-1/2 z-10" style={{ backgroundColor: '#6b21a8' }}>
                  </div>

                  {/* Content Grid - Reversed */}
                  <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    {/* Left Visual */}
                    <div className="lg:pr-16 mb-12 lg:mb-0">
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-200">
                        <h4 className="text-base font-semibold text-gray-900 mb-2 flex items-center gap-2">
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
                            <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-xl group-hover:scale-105 transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, #6b21a8, #be185d)' }}>
                              <Sparkles className="w-12 h-12 text-white fill-current" />
                            </div>
                          </div>
                        </div>

                        <div className="text-center lg:text-left">
                          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                            <h3 className="text-2xl font-bold text-gray-900">We Organize</h3>
                            <Tooltip content="We use advanced algorithms to clean, validate, and structure raw pricing data into searchable formats.">
                              <Info className="w-5 h-5 text-purple-500 cursor-help" />
                            </Tooltip>
                          </div>
                          
                          <p className="text-lg text-gray-700 leading-relaxed mb-6">
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
                  <div className="hidden lg:block absolute left-1/2 top-24 w-8 h-8 rounded-full border-4 border-white shadow-xl transform -translate-x-1/2 z-10" style={{ backgroundColor: '#065f46' }}>
                  </div>

                  {/* Content Grid */}
                  <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    {/* Left Content */}
                    <div className="lg:pr-16 lg:text-right">
                      <div className="group">
                        {/* Icon and Visual */}
                        <div className="flex justify-center lg:justify-end mb-8">
                          <div className="relative">
                            <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-xl group-hover:scale-105 transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, #065f46, #0f766e)' }}>
                              <Search className="w-12 h-12 text-white fill-current" />
                            </div>
                          </div>
                        </div>

                        <div className="text-center lg:text-right">
                          <div className="flex items-center justify-center lg:justify-end gap-2 mb-4">
                            <h3 className="text-2xl font-bold text-gray-900">You Compare</h3>
                            <Tooltip content="Compare prices across providers, payers, and cash payment options to find the best value for your healthcare needs.">
                              <Info className="w-5 h-5 text-emerald-500 cursor-help" />
                            </Tooltip>
                          </div>
                          
                          <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Instantly see and compare prices for providers, payers, and cash options side-by-side. Use this information to save money, avoid surprise bills, and choose what's best for you.
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
                              variant="success"
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
                        <h4 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-emerald-600" />
                          Price Comparison Example
                        </h4>
                        <div className="space-y-4">
                          {priceComparison.map((item, idx) => (
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
              <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to see what you'll actually pay?</h3>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  Join thousands of patients who've saved money by comparing healthcare prices before their procedures.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <PriceComparisonCTA
                    size="lg"
                    variant="primary"
                  >
                    Compare Prices Now
                  </PriceComparisonCTA>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.location.href = "/how-it-works";
                      }
                    }}
                  >
                    Learn More About Our Process
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* 5. Explore HealthFees.org - 8-Card Action Grid */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-blue-50">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8 shadow-lg shadow-blue-500/25" style={{ background: 'linear-gradient(to bottom right, #3b82f6, #9333ea)' }}>
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
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

            {/* 8-Card Action Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {exploreActionCards.map((card, index) => (
                <div
                  key={index}
                  className="group relative cursor-pointer bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.location.href = card.link;
                    }
                  }}
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <card.icon className={`w-8 h-8 ${card.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {card.desc}
                  </p>

                  {/* Action Arrow */}
                  <div className="flex justify-end">
                    <ArrowRight className={`w-5 h-5 ${card.color} group-hover:translate-x-1 transition-transform duration-300`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Who Uses HealthFees.org - Enhanced Persona Insights */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_40%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.15),transparent_40%)]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8 shadow-lg shadow-emerald-500/25" style={{ background: 'linear-gradient(to bottom right, #34d399, #22d3ee)' }}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
                Who Uses
                <span className="text-white">
                  {" "}
                  HealthFees.org
                </span>
              </h2>
            </div>

            {/* Enhanced Persona Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {Object.entries(personas).map(([key, persona]) => (
                <button
                  key={key}
                  onClick={() => setActivePersona(key)}
                  className={`px-8 py-4 rounded-full font-semibold transition-all duration-500 flex items-center gap-3 ${
                    activePersona === key
                      ? `bg-gradient-to-r ${persona.bgColor} text-white shadow-xl scale-105`
                      : 'bg-white/20 text-white border border-white/30 hover:bg-white/30 hover:scale-105'
                  }`}
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
                  <div className={`relative p-8 md:p-12 rounded-3xl bg-gradient-to-br ${persona.bgColor} bg-opacity-20 backdrop-blur-xl border border-white/20 shadow-2xl`}>

                    {/* Hero Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

                      {/* Left: Primary Content */}
                      <div className="flex flex-col h-full">
                        {/* Header */}
                        <div className="flex items-center gap-6 mb-8">
                          <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl flex-shrink-0" style={{ background: `linear-gradient(to bottom right, ${persona.bgColor === 'from-blue-500 to-cyan-500' ? '#3b82f6, #06b6d4' : persona.bgColor === 'from-blue-400 to-indigo-500' ? '#60a5fa, #6366f1' : persona.bgColor === 'from-emerald-400 to-teal-500' ? '#34d399, #14b8a6' : persona.bgColor === 'from-purple-400 to-violet-500' ? '#a78bfa, #8b5cf6' : '#22d3ee, #3b82f6'})` }}>
                            <persona.icon className="w-10 h-10 text-white" />
                          </div>
                          <h3 className="text-xl lg:text-2xl font-bold text-white">{persona.title}</h3>
                        </div>

                        {/* Primary Insight with Animated Number */}
                        <div className="p-6 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/30 mb-8 flex-grow">
                          <p className="text-base font-semibold text-emerald-300 mb-3">Primary Insight</p>
                          <div className="text-lg lg:text-xl text-white leading-relaxed">
                            {persona.primaryNumber > 0 ? (
                              persona.title === "Patients & Families" ? (
                                <>Save an average of <span className="text-2xl font-bold text-emerald-400">${animatedNumber.toLocaleString()}</span> per procedure by comparing prices before care.</>
                              ) : persona.title === "Researchers & Analysts" ? (
                                <>Uncover price variations of up to <span className="text-2xl font-bold text-blue-400">{animatedNumber}%</span> for the same procedure.</>
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
                          <Button
                            onClick={() => {
                              if (typeof window !== 'undefined') {
                                window.location.href = persona.primaryCTALink;
                              }
                            }}
                            variant={key === 'patients' ? 'accent' :
                                    key === 'researchers' ? 'primary' :
                                    key === 'employers' ? 'success' :
                                    key === 'providers' ? 'purple' : 'accent'}
                            size="lg"
                          >
                            {persona.primaryCTA}
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                          <Button
                            onClick={() => {
                              if (typeof window !== 'undefined') {
                                window.location.href = persona.secondaryCTALink;
                              }
                            }}
                            variant="glass"
                            size="lg"
                          >
                            {persona.secondaryCTA}
                          </Button>
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
                        <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                          <p className="text-white/90 font-medium text-sm">{persona.supportingData}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Transparency Scoring & Compliance Support */}
        <section className="relative py-24 overflow-hidden bg-white">
          {/* Subtle accent elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(20,184,166,0.03),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.03),transparent_70%)]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8 shadow-lg shadow-teal-500/25" style={{ background: 'linear-gradient(to bottom right, #14b8a6, #2563eb)' }}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
                Transparency Scoring
                <span className="text-teal-700">
                  {" "}
                  & Compliance Support
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-900 max-w-5xl mx-auto leading-relaxed font-medium">
                Recognizing leaders and supporting progress — we measure every provider and payer's transparency and help them achieve full compliance.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">

              {/* Left Column - Leaderboard Snapshot */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-teal-600" />
                  Top Transparency Leaders
                </h3>

                <div className="space-y-4 mb-8">
                  {/* Leaderboard Cards */}
                  <div className="p-6 rounded-2xl bg-gray-50 border-2 border-gray-300 shadow-lg hover:shadow-xl hover:border-teal-300 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(to bottom right, #facc15, #eab308)' }}>
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-900">Provider A</span>
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

                  <div className="p-6 rounded-2xl bg-gray-50 border-2 border-gray-300 shadow-lg hover:shadow-xl hover:border-teal-300 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(to bottom right, #9ca3af, #6b7280)' }}>
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-900">Payer B</span>
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

                  <div className="p-6 rounded-2xl bg-gray-50 border-2 border-gray-300 shadow-lg hover:shadow-xl hover:border-teal-300 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(to bottom right, #d97706, #f97316)' }}>
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-900">Provider C</span>
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
                  variant="accent"
                  size="lg"
                  className="w-full"
                >
                  View Full Scores
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Right Column - Score Distribution Chart */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <PieChart className="w-6 h-6 text-blue-600" />
                  Compliance Across the Industry
                </h3>

                {/* Donut Chart */}
                <div className="p-8 rounded-2xl bg-gray-50 border-2 border-gray-300 shadow-lg mb-6">
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
                        <div className="w-5 h-5 rounded-full" style={{ backgroundColor: '#10b981' }}></div>
                        <span className="text-gray-900 font-bold text-lg">Fully Compliant</span>
                      </div>
                      <span className="text-gray-900 font-semibold text-lg">45%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full" style={{ backgroundColor: '#3b82f6' }}></div>
                        <span className="text-gray-900 font-medium text-base">Partially Compliant</span>
                      </div>
                      <span className="text-gray-900 font-semibold text-lg">35%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full" style={{ backgroundColor: '#6b7280' }}></div>
                        <span className="text-gray-900 font-medium text-base">Non Compliant</span>
                      </div>
                      <span className="text-gray-900 font-semibold text-lg">20%</span>
                    </div>
                  </div>
                </div>

                {/* Support Box */}
                <div className="p-6 rounded-2xl bg-gray-50 border-2 border-teal-300 shadow-lg mb-6">
                  <h4 className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-teal-600" />
                    Our Support
                  </h4>
                  <p className="text-gray-800 leading-relaxed mb-4 font-medium">
                    We provide guidance, tools, and remediation services to help all entities reach 100% compliance.
                  </p>
                  <Button
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.location.href = "/compliance-tool";
                      }
                    }}
                    variant="accent"
                  >
                    See How We Can Help
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Call to Action Strip */}
            <div className="p-8 rounded-3xl bg-gray-100 border-2 border-gray-400 shadow-xl">
              <div className="flex flex-col lg:flex-row items-center gap-6">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg flex-shrink-0" style={{ background: 'linear-gradient(to bottom right, #14b8a6, #2563eb)' }}>
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-lg md:text-xl text-gray-900 font-semibold leading-relaxed">
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
                    variant="accent"
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
                    variant="outline"
                    size="lg"
                  >
                    Request Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. What the Data Reveals - Enhanced with animated counters */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/60 to-cyan-50/50"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8 shadow-lg shadow-rose-500/25" style={{ background: 'linear-gradient(to bottom right, #f43f5e, #f97316)' }}>
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
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
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #ef4444, #ec4899)' }}>
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">10x</div>
                    <div className="w-full bg-red-200 rounded-full h-2 mb-4">
                      <div className="bg-red-600 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    <p className="text-lg text-gray-800 font-semibold leading-relaxed">
                      Same procedure can cost 10x more at different providers in the same city
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="relative p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #f59e0b, #ea580c)' }}>
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
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #10b981, #0d9488)' }}>
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

        {/* 9. Join the Movement - Enhanced with gradient overlay */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900">
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-900/60 to-purple-900/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(20,184,166,0.12),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.1),transparent_50%)]"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8 shadow-lg shadow-teal-500/25" style={{ background: 'linear-gradient(to bottom right, #2dd4bf, #3b82f6)' }}>
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white tracking-tight">
                Join the Movement for
                <span className="text-white">
                  {" "}
                  Healthcare Transparency
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                Every search helps build a more transparent healthcare system. Share HealthFees.org with others so they can make informed decisions too.
              </p>

              <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center">
                <PriceComparisonCTA
                  size="xl"
                  variant="accent"
                >
                  Start Comparing Prices
                </PriceComparisonCTA>

                <Button
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.location.href = "/about";
                    }
                  }}
                  variant="glass"
                  size="xl"
                >
                  Learn Our Mission
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <Button
                  variant="glass"
                  size="lg"
                  onClick={() => {
                    if (typeof window !== 'undefined' && navigator.clipboard) {
                      navigator.clipboard.writeText(window.location.href);
                    }
                  }}
                >
                  <Lightbulb className="w-5 h-5" />
                  Copy Link
                </Button>
                <Button
                  variant="glass"
                  size="lg"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.open(
                        `mailto:?subject=Check out HealthFees.org&body=I found this helpful tool for comparing healthcare prices: ${window.location.href}`,
                        "_blank",
                      );
                    }
                  }}
                >
                  <ChevronRight className="w-5 h-5" />
                  Email
                </Button>
                <Button
                  variant="glass"
                  size="lg"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.open(
                        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                        "_blank",
                      );
                    }
                  }}
                >
                  <Users className="w-5 h-5" />
                  LinkedIn
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
