import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Slider } from "./ui/slider";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Copy, Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import {
  Search,
  CheckCircle2,
  ChevronRight,
  BarChart3,
  Info,
  DollarSign,
  AlertTriangle,
  TrendingUp,
  MapPin,
  Eye,
  Star,
  Clock,
  Loader2,
  Shield,
  Tag,
} from "lucide-react";

interface SearchByProcedurePageProps {
  onNavigateToHomepage: () => void;
  onNavigateToInternalSearch: () => void;
  onNavigateToComparePrices: () => void;
  onNavigateToPriceComparison: () => void;
  onNavigateToSearchByProcedure: () => void;
  onNavigateToFAQ: () => void;
  onNavigateToExplore: () => void;
  onNavigateToExploreByLocation: () => void;
  onNavigateToInsights: () => void;
  onNavigateToPatientResources: () => void;
  onNavigateToTools: () => void;
  onNavigateToCommunity: () => void;
  onNavigateToProfessionals: () => void;
  onNavigateToDisclosures: () => void;
  onCTAAssistant: () => void;
  currentPage: string;
}

export function SearchByProcedurePage({
  onCTAAssistant,
  onNavigateToDisclosures,
}: SearchByProcedurePageProps) {
  // Enhanced filter state
  const [filterProcedure, setFilterProcedure] = useState("");
  const [selectedProcedure, setSelectedProcedure] = useState<{code: string, description: string} | null>(null);
  const [filterZipCode, setFilterZipCode] = useState("");
  const [zipError, setZipError] = useState("");
  const [filterRadius, setFilterRadius] = useState("25");
  const [filterPayer, setFilterPayer] = useState("");
  const [filterPlan, setFilterPlan] = useState("");
  const [showPlanField, setShowPlanField] = useState(false);
  const [coverageType, setCoverageType] = useState("cash");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFloatingFilters, setShowFloatingFilters] = useState(false);

  // Scroll detection for floating filters
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const filterSection = document.getElementById('main-filters');
      if (filterSection) {
        const filterBottom = filterSection.offsetTop + filterSection.offsetHeight;
        setShowFloatingFilters(scrollPosition > filterBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [loadingProviders, setLoadingProviders] = useState<Set<number>>(
    new Set(),
  );
  const [recentPriceProviders, setRecentPriceProviders] = useState<Set<number>>(
    new Set(),
  );
  const [updatedPrices, setUpdatedPrices] = useState<
    Record<
      number,
      { avgPrice: number; priceRange: string; coverageAmount: number }
    >
  >({});
  const [showProcedureSuggestions, setShowProcedureSuggestions] = useState(false);
  const [showPayerSuggestions, setShowPayerSuggestions] = useState(false);
  const [showPlanSuggestions, setShowPlanSuggestions] = useState(false);
  const [selectedComplianceProvider, setSelectedComplianceProvider] = useState<number | null>(null);
  const [badgeStyle, setBadgeStyle] = useState<'light' | 'dark'>('light');
  const [copiedCode, setCopiedCode] = useState(false);

  // Handle filter clicks
  const handlePayerFilter = (payer: string) => {
    setFilterPayer(payer);
    console.log('Filtering by payer:', payer);
  };

  const handleCoverageFilter = (coverage: string) => {
    setCoverageType(coverage.toLowerCase());
    console.log('Filtering by coverage:', coverage);
  };

  // ZIP code validation
  const validateZipCode = (zip: string) => {
    const zipRegex = /^\d{5}$/;
    if (!zip) {
      setZipError("");
      return true;
    }
    if (!zipRegex.test(zip)) {
      setZipError("Enter a valid 5-digit ZIP code");
      return false;
    }
    setZipError("");
    return true;
  };

  // Coverage type change handler
  const handleCoverageTypeChange = (type: string) => {
    setCoverageType(type);
    if (type === 'cash') {
      setFilterPayer("");
      setFilterPlan("");
      setShowPlanField(false);
    } else if (type === 'in-network' && filterPayer) {
      // Show plan field if payer is selected
      setShowPlanField(true);
    } else if (type === 'out-of-network') {
      setFilterPlan("");
      setShowPlanField(false);
    }
  };

  // Payer selection handler
  const handlePayerSelection = (payer: string) => {
    setFilterPayer(payer);
    if (coverageType === 'cash') {
      setCoverageType('in-network');
    }
    if (['Medicare', 'Medicaid'].includes(payer)) {
      setCoverageType('in-network');
    }
    setShowPlanField(coverageType !== 'out-of-network');
  };

  // Clear all filters
  const clearAllFilters = () => {
    setFilterProcedure("");
    setSelectedProcedure(null);
    setFilterZipCode("");
    setZipError("");
    setFilterRadius("25");
    setFilterPayer("");
    setFilterPlan("");
    setShowPlanField(false);
    setCoverageType("cash");
  };

  // Active filters for chips
  const getActiveFilters = () => {
    const filters = [];
    if (selectedProcedure) {
      filters.push({type: 'procedure', label: `${selectedProcedure.code} ${selectedProcedure.description}`, value: selectedProcedure});
    }
    if (filterZipCode && !zipError) {
      filters.push({type: 'location', label: filterZipCode, value: filterZipCode});
    }
    if (filterRadius !== '25') {
      filters.push({type: 'radius', label: `${filterRadius} mi`, value: filterRadius});
    }
    if (filterPayer) {
      filters.push({type: 'payer', label: filterPayer, value: filterPayer});
    }
    if (filterPlan) {
      filters.push({type: 'plan', label: filterPlan, value: filterPlan});
    }
    if (coverageType !== 'cash') {
      const typeLabel = coverageType === 'in-network' ? 'In-Network' : 'Out-of-Network';
      filters.push({type: 'coverage', label: typeLabel, value: coverageType});
    }
    return filters;
  };

  // Remove active filter
  const removeFilter = (type: string) => {
    switch (type) {
      case 'procedure':
        setFilterProcedure("");
        setSelectedProcedure(null);
        break;
      case 'location':
        setFilterZipCode("");
        break;
      case 'radius':
        setFilterRadius("25");
        break;
      case 'payer':
        setFilterPayer("");
        setShowPlanField(false);
        break;
      case 'plan':
        setFilterPlan("");
        break;
      case 'coverage':
        setCoverageType("cash");
        break;
    }
  };

  // Generate embed code for a provider
  const generateEmbedCode = (provider: any, style: 'light' | 'dark') => {
    const entityId = `HFO-${provider.id.toString().padStart(5, '0')}`;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';

    return {
      script: `<!-- HealthFees.org Compliance Rating Badge -->
<div id="hfo-badge"></div>
<script
  src="https://cdn.healthfees.org/badge/v1.js"
  async
  data-entity-type="provider"
  data-entity-id="${entityId}"
  data-style="${style}"
  data-token="${token}">
</script>`,
      iframe: `<iframe
  title="HealthFees.org Compliance Rating"
  src="https://badge.healthfees.org/embed?entity=provider&id=${entityId}&style=${style}&token=${token}"
  width="280"
  height="180"
  loading="lazy"
  referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin">
</iframe>`
    };
  };

  const handleCopyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  // Predefined payers list
  const predefinedPayers = [
    // Commercial
    { name: "Aetna", type: "commercial" },
    { name: "Anthem", type: "commercial" },
    { name: "Blue Cross Blue Shield", type: "commercial" },
    { name: "Cigna", type: "commercial" },
    { name: "Humana", type: "commercial" },
    { name: "Kaiser Permanente", type: "commercial" },
    { name: "UnitedHealthcare", type: "commercial" },
    { name: "Molina Healthcare", type: "commercial" },
    { name: "Centene", type: "commercial" },
    { name: "WellCare", type: "commercial" },
    // Public
    { name: "Medicare", type: "public" },
    { name: "Medicaid", type: "public" },
    // Other
    { name: "Self-Pay", type: "other" },
  ];

  // Predefined plans (conditional on payer)
  const predefinedPlans = {
    "Aetna": ["Aetna PPO", "Aetna HMO", "Aetna Open Access"],
    "Blue Cross Blue Shield": ["Blue Shield Silver 70", "Blue Shield Gold", "Blue Shield Bronze"],
    "Cigna": ["Cigna PPO", "Cigna HMO", "Cigna Open Access Plus"],
    "UnitedHealthcare": ["United Choice Plus", "United Navigate", "United Select Plus"],
  };

  // Predefined procedures list
  const predefinedProcedures = [
    { name: "MRI Brain without Contrast", code: "70553" },
    { name: "MRI Brain with Contrast", code: "70554" },
    { name: "MRI Lumbar Spine without Contrast", code: "72148" },
    { name: "CT Chest without Contrast", code: "71250" },
    { name: "CT Abdomen and Pelvis with Contrast", code: "74177" },
    { name: "Colonoscopy with Biopsy", code: "45380" },
    { name: "Colonoscopy Screening", code: "45378" },
    { name: "Echocardiogram Complete", code: "93306" },
    { name: "Upper Endoscopy Diagnostic", code: "43235" },
    { name: "Mammography Screening", code: "77057" },
    { name: "X-ray Chest Single View", code: "71045" },
    { name: "Ultrasound Abdomen Complete", code: "76700" },
    { name: "Knee Arthroscopy with Meniscectomy", code: "29881" },
    { name: "Cataract Surgery", code: "66984" },
    { name: "Hip Replacement Total", code: "27130" },
    { name: "Appendectomy Laparoscopic", code: "44970" },
    { name: "Gallbladder Removal Laparoscopic", code: "47562" },
    { name: "Stress Test Cardiovascular", code: "93015" },
    { name: "Sleep Study", code: "95810" },
    { name: "Blood Test Complete Metabolic Panel", code: "80053" },
  ];

  // Filter procedures based on search input
  const filteredProcedures = predefinedProcedures.filter(
    (proc) =>
      proc.name.toLowerCase().includes(filterProcedure.toLowerCase()) ||
      proc.code.includes(filterProcedure),
  );

  // Handle getting current price with Cloudflare turnstile validation
  const handleGetCurrentPrice = async (providerId: number) => {
    try {
      // Add to loading set
      setLoadingProviders((prev) => new Set(prev).add(providerId));

      // Simulate Cloudflare Turnstile validation
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate fetching most recent price
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Generate updated pricing (simulate new pricing data)
      const provider = sampleProviders.find((p) => p.id === providerId);
      if (provider) {
        const updatedAvgPrice = Math.floor(
          provider.avgPrice * (0.95 + Math.random() * 0.1),
        ); // +/-5% variation
        const updatedCoverageAmount = Math.floor(updatedAvgPrice * 0.85); // Recalculate coverage
        const lowerRange = Math.floor(updatedAvgPrice * 0.8);
        const upperRange = Math.floor(updatedAvgPrice * 1.2);

        setUpdatedPrices((prev) => ({
          ...prev,
          [providerId]: {
            avgPrice: updatedAvgPrice,
            priceRange: `$${lowerRange.toLocaleString()} – $${upperRange.toLocaleString()}`,
            coverageAmount: updatedCoverageAmount,
          },
        }));
      }

      // Remove from loading and add to recent price providers
      setLoadingProviders((prev) => {
        const newSet = new Set(prev);
        newSet.delete(providerId);
        return newSet;
      });
      setRecentPriceProviders((prev) => new Set(prev).add(providerId));
    } catch (error) {
      // Handle error - remove from loading
      setLoadingProviders((prev) => {
        const newSet = new Set(prev);
        newSet.delete(providerId);
        return newSet;
      });
    }
  };

  // Sample data for demonstration
  const sampleProviders = [
    {
      id: 1,
      name: "Stanford Medical Center",
      location: "Palo Alto, CA – 7.2 miles away",
      procedureName: "MRI Brain without Contrast",
      cptCode: "70553",
      avgPrice: 8340,
      priceRange: "$6,700 – $10,200",
      coverageType: "In-Network",
      payer: "Blue Cross Blue Shield",
      coverageAmount: 6672, // 80% coverage example
      contextTag: "Best Price",
      comparison: "12% below state average",
      complianceLevel: "High",
      complianceScore: 92,
      isCompliant: true,
      payerComplianceScore: 88,
      payerIsCompliant: true,
    },
    {
      id: 2,
      name: "UCSF Medical Center",
      location: "San Francisco, CA – 12.4 miles away",
      procedureName: "MRI Brain without Contrast",
      cptCode: "70553",
      avgPrice: 9650,
      priceRange: "$7,800 – $12,100",
      coverageType: "In-Network",
      payer: "Aetna",
      coverageAmount: 8685, // 90% coverage example
      contextTag: "Best Match",
      comparison: "8% above state average",
      complianceLevel: "High",
      complianceScore: 88,
      isCompliant: true,
      payerComplianceScore: 91,
      payerIsCompliant: true,
    },
    {
      id: 3,
      name: "Kaiser Permanente",
      location: "San Jose, CA – 15.1 miles away",
      procedureName: "MRI Brain without Contrast",
      cptCode: "70553",
      avgPrice: 7520,
      priceRange: "$6,200 – $9,400",
      coverageType: "In-Network",
      payer: "Kaiser Permanente",
      coverageAmount: 7144, // 95% coverage example
      contextTag: "Best Match",
      comparison: "18% below state average",
      complianceLevel: "Medium",
      complianceScore: 54,
      isCompliant: false,
      payerComplianceScore: 76,
      payerIsCompliant: true,
    },
  ];

  // Calculate price range from all providers
  const allPrices = sampleProviders.map((p) => p.avgPrice);
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);
  const priceRange = `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* 1. Page Introduction */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.05),transparent_50%)] pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
              Explore{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Real-World
              </span>
              {" "}Healthcare Prices
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-light mb-8">
              Search billions of prices collected from federally mandated hospital and insurer disclosures. Compare cash, in-network, and out-of-network rates side by side to see what providers typically charge for care.
            </p>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-50 border border-green-200">
              <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-800 font-medium">
                Powered by government-mandated data. Updated monthly.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Search and Filter Controls */}
      <section id="main-filters" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-10">
              <div className="space-y-8">
                {/* First Row: Main Search Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Search by Procedure */}
                  <div className="lg:col-span-1 relative">
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Search by Procedure or Code
                    </label>
                    <div className="relative">
                      <Input
                        placeholder="e.g., MRI, 70553, colonoscopy"
                        value={filterProcedure}
                        onChange={(e) => {
                          setFilterProcedure(e.target.value);
                          setShowProcedureSuggestions(
                            e.target.value.length > 0,
                          );
                        }}
                        onFocus={() =>
                          setShowProcedureSuggestions(
                            filterProcedure.length > 0,
                          )
                        }
                        onBlur={() =>
                          setTimeout(
                            () => setShowProcedureSuggestions(false),
                            200,
                          )
                        }
                        className="h-14 text-lg rounded-xl border-2 border-gray-200 focus:border-blue-500"
                      />
                      {showProcedureSuggestions &&
                        filteredProcedures.length > 0 && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-64 overflow-y-auto">
                            {filteredProcedures
                              .slice(0, 8)
                              .map((proc, index) => (
                                <button
                                  key={index}
                                  onClick={() => {
                                    setFilterProcedure(
                                      `${proc.name} (${proc.code})`,
                                    );
                                    setShowProcedureSuggestions(false);
                                  }}
                                  className="w-full text-left px-4 py-3 hover:bg-blue-50 focus:bg-blue-50 focus:outline-none border-b border-gray-100 last:border-b-0"
                                >
                                  <div className="font-medium text-gray-900">
                                    {proc.name}
                                  </div>
                                  <div className="text-sm text-gray-500 font-mono">
                                    CPT: {proc.code}
                                  </div>
                                </button>
                              ))}
                          </div>
                        )}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="lg:col-span-1">
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Location
                    </label>
                    <Input
                      placeholder="Enter ZIP code"
                      value={filterZipCode}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '').slice(0, 5);
                        setFilterZipCode(value);
                      }}
                      onBlur={() => validateZipCode(filterZipCode)}
                      className={`h-14 text-lg rounded-xl border-2 ${
                        zipError ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                      }`}
                      maxLength={5}
                    />
                  </div>

                  {/* Radius */}
                  <div className="lg:col-span-1">
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Search Radius
                    </label>
                    <Select
                      value={filterRadius}
                      onValueChange={setFilterRadius}
                    >
                      <SelectTrigger className="h-14 text-lg rounded-xl border-2 border-gray-200">
                        <SelectValue placeholder="Select radius" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10 miles</SelectItem>
                        <SelectItem value="25">25 miles</SelectItem>
                        <SelectItem value="50">50 miles</SelectItem>
                        <SelectItem value="100">100 miles</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Provider */}
                  <div className="lg:col-span-1">
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Payer
                    </label>
                    <Select
                      value={filterPayer}
                      onValueChange={handlePayerSelection}
                      disabled={coverageType === 'cash'}
                    >
                      <SelectTrigger className={`h-14 text-lg rounded-xl border-2 border-gray-200 ${
                        coverageType === 'cash' ? 'opacity-50 cursor-not-allowed' : ''
                      }`}>
                        <SelectValue placeholder="Select payer" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="aetna">Aetna</SelectItem>
                        <SelectItem value="anthem">Anthem</SelectItem>
                        <SelectItem value="blue-cross">
                          Blue Cross Blue Shield
                        </SelectItem>
                        <SelectItem value="cigna">Cigna</SelectItem>
                        <SelectItem value="humana">Humana</SelectItem>
                        <SelectItem value="kaiser">
                          Kaiser Permanente
                        </SelectItem>
                        <SelectItem value="united">UnitedHealth</SelectItem>
                        <SelectItem value="medicare">Medicare</SelectItem>
                        <SelectItem value="medicaid">Medicaid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Second Row: Coverage Type Radio Buttons */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-4">
                    Coverage Type
                  </label>
                  <div className="flex flex-wrap gap-6">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            value="cash"
                            checked={coverageType === "cash"}
                            onChange={(e) => setCoverageType(e.target.value)}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
                          />
                          <span className="ml-2 text-gray-700 font-medium">
                            Cash Pay
                          </span>
                        </label>
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-900 text-white">
                        <p>Price without insurance, paid directly to the provider.</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            value="in-network"
                            checked={coverageType === "in-network"}
                            onChange={(e) => setCoverageType(e.target.value)}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
                          />
                          <span className="ml-2 text-gray-700 font-medium">
                            In-Network
                          </span>
                        </label>
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-900 text-white">
                        <p>Contracted price between your insurer and provider.</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            value="out-of-network"
                            checked={coverageType === "out-of-network"}
                            onChange={(e) => setCoverageType(e.target.value)}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
                          />
                          <span className="ml-2 text-gray-700 font-medium">
                            Out-of-Network
                          </span>
                        </label>
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-900 text-white">
                        <p>Price when provider is not contracted with your insurer.</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </div>

              {/* Search Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center mt-12 space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  size="lg"
                  className="h-16 px-12 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Search className="w-6 h-6 mr-3" />
                  Search Prices
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="h-16 px-8 text-lg text-gray-600 hover:text-gray-900 rounded-2xl"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Filter Bar */}
      {showFloatingFilters && (
        <div className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-lg transition-all duration-300 animate-in slide-in-from-top-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center gap-4 justify-between">
              {/* Compact Filter Controls */}
              <div className="flex items-center gap-4 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">
                    {selectedProcedure ? selectedProcedure.description : 'Select procedure'}
                  </span>
                  <button className="text-blue-600 hover:text-blue-700">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">
                    {filterZipCode || 'Enter ZIP'} • {filterRadius || 'Select radius'} mi
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">
                    {filterPayer || 'Select payer'}
                  </span>
                </div>
                {/* Coverage Type Segmented Control */}
                <div className="flex items-center bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => handleCoverageTypeChange('cash')}
                    className={`px-3 py-1 text-xs font-medium rounded ${
                      coverageType === 'cash' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                    }`}
                  >
                    Cash
                  </button>
                  <button
                    onClick={() => handleCoverageTypeChange('in-network')}
                    className={`px-3 py-1 text-xs font-medium rounded ${
                      coverageType === 'in-network' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                    }`}
                  >
                    In-Network
                  </button>
                  <button
                    onClick={() => handleCoverageTypeChange('out-of-network')}
                    className={`px-3 py-1 text-xs font-medium rounded ${
                      coverageType === 'out-of-network' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                    }`}
                  >
                    Out-Network
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {getActiveFilters().length > 0 && (
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-500">{getActiveFilters().length} filter{getActiveFilters().length !== 1 ? 's' : ''}</span>
                    <button
                      onClick={clearAllFilters}
                      className="text-xs text-gray-500 hover:text-gray-700 underline"
                    >
                      Clear
                    </button>
                  </div>
                )}
                <Button
                  size="sm"
                  disabled={!selectedProcedure || !filterZipCode || !!zipError}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Price Summary Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                  Price Range for MRI Brain in San Francisco, CA
                </CardTitle>
                <p className="text-gray-600 text-center mt-2">
                  Based on six-month averages across 12 facilities
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-600 mb-2">
                      Lowest Price
                    </p>
                    <p className="text-3xl font-bold text-green-600">$6,200</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-600 mb-2">
                      Average Price
                    </p>
                    <p className="text-3xl font-bold text-blue-600">$8,470</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-600 mb-2">
                      Highest Price
                    </p>
                    <p className="text-3xl font-bold text-red-600">$12,100</p>
                  </div>
                </div>
                <div className="w-full h-4 bg-gradient-to-r from-green-400 via-blue-400 to-red-400 rounded-full mb-4"></div>
                <p className="text-xs text-gray-500 text-center">
                  Average price is calculated from all available records over
                  the past six months and weighted by provider availability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Provider Results and 5. Insights Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Provider Results */}
            <div className="lg:col-span-2">
              <div className="sticky top-0 z-50 mb-8">
                <div className="bg-white pt-6 -mx-8 px-8 pb-0">
                  <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-lg">
                    <div className="space-y-4">
                      <h1 className="text-2xl font-bold text-gray-900">
                        Provider Results
                      </h1>

                      {/* Compact Filter Controls */}
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                        {/* Procedure Search */}
                        <div className="relative">
                          <Input
                            placeholder="Procedure or CPT code"
                            value={filterProcedure}
                            onChange={(e) => {
                              setFilterProcedure(e.target.value);
                              setShowProcedureSuggestions(
                                e.target.value.length > 0,
                              );
                            }}
                            onFocus={() =>
                              setShowProcedureSuggestions(
                                filterProcedure.length > 0,
                              )
                            }
                            onBlur={() =>
                              setTimeout(
                                () => setShowProcedureSuggestions(false),
                                200,
                              )
                            }
                            className="h-9 text-sm rounded-lg border border-gray-300 focus:border-blue-500"
                          />
                          {showProcedureSuggestions &&
                            filteredProcedures.length > 0 && (
                              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto">
                                {filteredProcedures
                                  .slice(0, 4)
                                  .map((proc, index) => (
                                    <button
                                      key={index}
                                      onClick={() => {
                                        setFilterProcedure(
                                          `${proc.name} (${proc.code})`,
                                        );
                                        setShowProcedureSuggestions(false);
                                      }}
                                      className="w-full text-left px-3 py-2 hover:bg-blue-50 focus:bg-blue-50 focus:outline-none border-b border-gray-100 last:border-b-0"
                                    >
                                      <div className="font-medium text-gray-900 text-sm">
                                        {proc.name}
                                      </div>
                                      <div className="text-xs text-gray-500 font-mono">
                                        CPT: {proc.code}
                                      </div>
                                    </button>
                                  ))}
                              </div>
                            )}
                        </div>

                        {/* Location */}
                        <div>
                          <Input
                            placeholder="ZIP code"
                            value={filterZipCode}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '').slice(0, 5);
                              setFilterZipCode(value);
                            }}
                            className="h-9 text-sm rounded-lg border border-gray-300 focus:border-blue-500"
                            maxLength={5}
                          />
                        </div>

                        {/* Payer */}
                        <div>
                          <Select
                            value={filterPayer}
                            onValueChange={handlePayerSelection}
                          >
                            <SelectTrigger className="h-9 text-sm rounded-lg border border-gray-300">
                              <SelectValue placeholder="Payer" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="aetna">Aetna</SelectItem>
                              <SelectItem value="blue-cross">
                                Blue Cross
                              </SelectItem>
                              <SelectItem value="cigna">Cigna</SelectItem>
                              <SelectItem value="kaiser">Kaiser</SelectItem>
                              <SelectItem value="medicare">Medicare</SelectItem>
                              <SelectItem value="medicaid">Medicaid</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Coverage Type */}
                        <div>
                          <Select
                            value={coverageType}
                            onValueChange={setCoverageType}
                          >
                            <SelectTrigger className="h-9 text-sm rounded-lg border border-gray-300">
                              <SelectValue placeholder="Coverage" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cash">Cash Pay</SelectItem>
                              <SelectItem value="in-network">
                                In-Network
                              </SelectItem>
                              <SelectItem value="out-of-network">
                                Out-of-Network
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Radius */}
                        <div>
                          <Select
                            value={filterRadius}
                            onValueChange={setFilterRadius}
                          >
                            <SelectTrigger className="h-9 text-sm rounded-lg border border-gray-300">
                              <SelectValue placeholder="Radius" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="10">10 mi</SelectItem>
                              <SelectItem value="25">25 mi</SelectItem>
                              <SelectItem value="50">50 mi</SelectItem>
                              <SelectItem value="100">100 mi</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                {sampleProviders.map((provider) => (
                  <Card
                    key={provider.id}
                    className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-2xl overflow-hidden"
                  >
                    <CardContent className="p-0">
                      {/* Row A - Header */}
                      <div className="flex items-center justify-between px-5 py-3">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">
                            {provider.name}
                          </h4>
                          <p className="text-xs text-gray-500 flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {provider.location}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          {/* Compliance Badge */}
                          <Dialog>
                            <DialogTrigger asChild>
                              <button
                                className={`px-3 py-1.5 rounded-lg font-bold text-sm cursor-pointer hover:shadow-md transition-all ${
                                  provider.isCompliant
                                    ? "bg-white border-2 border-gray-200 text-green-600 hover:border-green-300"
                                    : "bg-gray-100 border-2 border-gray-300 text-gray-600 hover:border-gray-400"
                                }`}
                                style={{
                                  color: provider.isCompliant ? "#00A651" : "#6B7280"
                                }}
                                aria-label="View compliance rating details"
                              >
                                {provider.isCompliant ? "A+" : "C"} – {provider.complianceScore}%
                              </button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>HealthFees.org Compliance Badge</DialogTitle>
                              </DialogHeader>

                              <Tabs value="embed" className="w-full">
                                <TabsList className="grid w-full grid-cols-2">
                                  <TabsTrigger value="embed">Embed Code</TabsTrigger>
                                  <TabsTrigger value="about">About this Rating</TabsTrigger>
                                </TabsList>

                                <TabsContent value="embed" className="space-y-6 mt-4">
                                  <div>
                                    <h3 className="text-lg font-semibold mb-2">Add this badge to your site</h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                      {provider.name} — ID: HFO-{provider.id.toString().padStart(5, '0')}
                                    </p>
                                  </div>

                                  {/* Style Selector */}
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">Badge Style</label>
                                    <div className="flex gap-4">
                                      <label className="flex items-center cursor-pointer">
                                        <input
                                          type="radio"
                                          value="light"
                                          checked={badgeStyle === 'light'}
                                          onChange={(e) => setBadgeStyle(e.target.value as 'light' | 'dark')}
                                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                        />
                                        <span className="ml-2 text-sm text-gray-700">Light</span>
                                      </label>
                                      <label className="flex items-center cursor-pointer">
                                        <input
                                          type="radio"
                                          value="dark"
                                          checked={badgeStyle === 'dark'}
                                          onChange={(e) => setBadgeStyle(e.target.value as 'light' | 'dark')}
                                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                        />
                                        <span className="ml-2 text-sm text-gray-700">Dark</span>
                                      </label>
                                    </div>
                                  </div>

                                  {/* Badge Preview */}
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">Preview</label>
                                    <div className={`inline-block p-4 rounded-lg border ${
                                      badgeStyle === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
                                    }`}>
                                      <div
                                        className={`px-4 py-3 rounded-lg font-bold text-lg ${
                                          provider.isCompliant
                                            ? badgeStyle === 'dark'
                                              ? "bg-gray-800 border-2 border-green-400 text-green-400"
                                              : "bg-white border-2 border-green-200 text-green-600 shadow-sm"
                                            : badgeStyle === 'dark'
                                              ? "bg-gray-700 border-2 border-gray-500 text-gray-400"
                                              : "bg-gray-100 border-2 border-gray-300 text-gray-600"
                                        }`}
                                        style={{
                                          color: provider.isCompliant
                                            ? badgeStyle === 'dark' ? '#4ADE80' : '#00A651'
                                            : badgeStyle === 'dark' ? '#9CA3AF' : '#6B7280'
                                        }}
                                      >
                                        {provider.isCompliant ? "A+" : "C"} – {provider.complianceScore}%
                                      </div>
                                    </div>
                                  </div>

                                  {/* Embed Code */}
                                  <div>
                                    <div className="flex items-center justify-between mb-3">
                                      <label className="block text-sm font-medium text-gray-700">Embed Code</label>
                                      <Button
                                        onClick={() => handleCopyCode(generateEmbedCode(provider, badgeStyle).script)}
                                        size="sm"
                                        variant="outline"
                                        className="h-8"
                                      >
                                        {copiedCode ? (
                                          <><Check className="w-3 h-3 mr-1" /> Copied</>
                                        ) : (
                                          <><Copy className="w-3 h-3 mr-1" /> Copy</>
                                        )}
                                      </Button>
                                    </div>
                                    <textarea
                                      readOnly
                                      value={generateEmbedCode(provider, badgeStyle).script}
                                      className="w-full h-32 p-3 text-xs font-mono border border-gray-300 rounded-md bg-gray-50 resize-none"
                                    />
                                  </div>

                                  {/* Installation Steps */}
                                  <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Installation Steps</h4>
                                    <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                                      <li>Paste the code into your site where you want the badge to appear.</li>
                                      <li>Do not modify the code. The badge updates automatically each month.</li>
                                      <li>The badge links to your public rating page on HealthFees.org.</li>
                                    </ol>
                                  </div>

                                  {/* Terms */}
                                  <div className="text-xs text-gray-500 p-3 bg-gray-50 rounded-md">
                                    By embedding, you agree not to alter the badge and to allow HealthFees.org to display updates to your rating.
                                    <a href="/badge-terms" className="text-blue-600 hover:text-blue-800 underline ml-1">
                                      Badge Terms
                                    </a>
                                  </div>
                                </TabsContent>

                                <TabsContent value="about" className="space-y-4 mt-4">
                                  <div className="text-center space-y-4">
                                    <div
                                      className={`inline-block px-8 py-6 rounded-xl font-bold text-4xl ${
                                        provider.isCompliant
                                          ? "bg-white border-4 border-green-200 text-green-600 shadow-lg"
                                          : "bg-gray-100 border-4 border-gray-300 text-gray-600"
                                      }`}
                                      style={{
                                        color: provider.isCompliant ? "#00A651" : "#6B7280"
                                      }}
                                    >
                                      {provider.isCompliant ? "A+" : "C"} – {provider.complianceScore}%
                                    </div>

                                    <div>
                                      <h3 className="text-lg font-semibold mb-4">HealthFees.org Compliance Rating</h3>
                                      <p className="text-gray-700 mb-4">
                                        This rating reflects adherence to federal pricing transparency mandates.
                                        Scores update monthly from public payer and provider files.
                                      </p>
                                      <a
                                        href="/methodology"
                                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                                      >
                                        See how we measure compliance
                                      </a>
                                    </div>
                                  </div>
                                </TabsContent>
                              </Tabs>
                            </DialogContent>
                          </Dialog>
                          <div
                            className="px-3 py-1.5 rounded-full font-semibold text-sm"
                            style={{
                              background:
                                provider.contextTag === "Best Price"
                                  ? "linear-gradient(to right, #10b981, #059669)"
                                  : "#f3e8ff",
                              color:
                                provider.contextTag === "Best Price"
                                  ? "#ffffff"
                                  : "#7c3aed",
                              boxShadow:
                                provider.contextTag === "Best Price"
                                  ? "0 8px 12px -3px rgba(16, 185, 129, 0.2)"
                                  : "none",
                            }}
                          >
                            {provider.contextTag}
                          </div>
                        </div>
                      </div>

                      {/* Row B - Pricing Band */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 mx-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Column 1: Provider Cost */}
                          <div>
                            <div className="flex items-center mb-1">
                              <Tag className="w-3 h-3 text-gray-500 mr-1" aria-hidden="true" />
                              <p className="text-sm font-medium text-gray-700">
                                Provider Cost
                              </p>
                            </div>
                            <p className="text-2xl font-bold text-gray-900 mb-1">
                              ${provider.avgPrice.toLocaleString()}
                            </p>
                            <p className="text-xs text-gray-500">
                              Range ${Math.floor(provider.avgPrice * 0.8).toLocaleString()} – ${Math.floor(provider.avgPrice * 1.2).toLocaleString()}
                            </p>
                          </div>

                          {/* Column 2: Coverage */}
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-1">
                              6‑Month Average Coverage{" "}
                              <button
                                onClick={() => handlePayerFilter(provider.payer)}
                                className="text-purple-600 hover:text-purple-800 underline transition-colors"
                                aria-label={`Filter by ${provider.payer}`}
                              >
                                ({provider.payer})
                              </button>
                            </p>
                            <p className="text-2xl font-bold text-gray-900">
                              $
                              {(
                                updatedPrices[provider.id]?.coverageAmount ||
                                provider.coverageAmount
                              ).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Row C - Meta Row */}
                      <div className="px-5 py-3 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                        {/* Left group - Compliance inline */}
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <span className="text-gray-700">Provider:</span>
                            <span className="font-semibold">{provider.complianceScore}/100</span>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button className="text-gray-400 hover:text-gray-600" aria-label="Provider Compliance Rating info">
                                  <Info className="w-3 h-3" />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent className="bg-gray-900 text-white max-w-xs">
                                <p>Based on this provider's compliance with federal pricing transparency mandates. Updated periodically when new provider TiC data is available. <a href="/methodology" className="underline text-blue-300">See how we measure compliance</a>.</p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          <span className="text-gray-400">•</span>
                          <div className="flex items-center gap-1">
                            <span className="text-gray-700">Payer:</span>
                            <span className="font-semibold">{provider.payerComplianceScore}/100</span>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button className="text-gray-400 hover:text-gray-600" aria-label="Payer Compliance Rating info">
                                  <Info className="w-3 h-3" />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent className="bg-gray-900 text-white max-w-xs">
                                <p>Based on this payer's compliance with federal pricing transparency mandates. Updated monthly when new payer TiC files are published. <a href="/methodology" className="underline text-blue-300">See how we measure compliance</a>.</p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        </div>

                        {/* Right group - Coverage + state delta inline */}
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-gray-700">Coverage:</span>
                          <button
                            onClick={() => handleCoverageFilter(provider.coverageType)}
                            className="text-blue-600 hover:text-blue-800 underline transition-colors"
                            aria-label={`Filter by ${provider.coverageType} coverage`}
                          >
                            {provider.coverageType}
                          </button>
                          <span className="text-gray-400">•</span>
                          <div
                            className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
                              provider.comparison.includes("below")
                                ? "bg-green-50 text-green-700"
                                : "bg-red-50 text-red-700"
                            }`}
                          >
                            <span>
                              {provider.comparison.includes("below") ? "↓" : "↑"}
                            </span>
                            <span>
                              {provider.comparison.match(/\d+/)?.[0]}% vs state average
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="px-5 pb-4">
                        <Button
                          onClick={() => handleGetCurrentPrice(provider.id)}
                          disabled={
                            loadingProviders.has(provider.id) ||
                            recentPriceProviders.has(provider.id)
                          }
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {loadingProviders.has(provider.id) ? (
                            <div className="flex items-center gap-2">
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Fetching Latest Price...</span>
                            </div>
                          ) : recentPriceProviders.has(provider.id) ? (
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4" />
                              <span>Showing Latest Price</span>
                            </div>
                          ) : (
                            "Get Current Price"
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Insights Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-8">
                  Insights
                </h3>

                <div className="space-y-6">
                  {/* 1. Compliance Insight */}
                  <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <CheckCircle2 className="w-6 h-6 text-blue-600 mr-2" />
                        <h3 className="font-bold text-blue-900">
                          Compliance Insight
                        </h3>
                      </div>
                      <p className="text-blue-800 mb-3">
                        3 of 5 hospitals in this area are compliant with federal pricing transparency rules.
                      </p>
                      <a href="/methodology" className="text-teal-600 hover:text-teal-800 underline text-sm font-medium">
                        See how we measure compliance
                      </a>
                    </CardContent>
                  </Card>

                  {/* 2. Regional Comparison */}
                  <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
                        <h3 className="font-bold text-green-900">
                          Regional Comparison
                        </h3>
                      </div>
                      <p className="text-green-800">
                        Average price in this area is 14% lower than the California state average for this procedure.
                      </p>
                    </CardContent>
                  </Card>

                  {/* 3. Glossary Section */}
                  <Card className="bg-white border border-gray-200 rounded-2xl">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-gray-900 mb-4">Glossary</h3>
                      <div className="space-y-3">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="cursor-help">
                              <span className="font-semibold text-gray-800 underline decoration-dotted hover:text-blue-600">
                                Negotiated Rate
                              </span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-900 text-white max-w-xs">
                            <p>Contracted price between a provider and insurer.</p>
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="cursor-help">
                              <span className="font-semibold text-gray-800 underline decoration-dotted hover:text-blue-600">
                                Allowed Amount
                              </span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-900 text-white max-w-xs">
                            <p>The maximum your plan will pay for a covered service.</p>
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="cursor-help">
                              <span className="font-semibold text-gray-800 underline decoration-dotted hover:text-blue-600">
                                Gross Charge
                              </span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-900 text-white max-w-xs">
                            <p>Provider's full, undiscounted rate before any insurance or discounts.</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Transparency Footer Strip */}
      <section className="py-6 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
            <p className="text-sm text-gray-600">
              Data sources: CMS, hospital Transparency in Coverage files, insurer disclosures.
            </p>
            <div className="flex space-x-6">
              <a href="/methodology" className="text-sm text-blue-600 hover:text-blue-800 underline font-medium">
                See Methodology
              </a>
              <button
                onClick={() => {
                  // Open modal form for error reporting
                  alert('Report Error form would open here');
                }}
                className="text-sm text-blue-600 hover:text-blue-800 underline font-medium"
              >
                Report an Error
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigateToDisclosures={onNavigateToDisclosures} />
    </div>
  );
}
