import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Slider } from "./ui/slider";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
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
  const [filterProcedure, setFilterProcedure] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterRadius, setFilterRadius] = useState("100");
  const [filterProvider, setFilterProvider] = useState("");
  const [coverageType, setCoverageType] = useState("in-network");
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
  const [showProcedureSuggestions, setShowProcedureSuggestions] =
    useState(false);

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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-8 shadow-lg shadow-blue-500/25">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
              Explore Real-World Healthcare Prices with the
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                {" "}
                Data Explorer
              </span>
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
      <section className="py-16 bg-white">
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
                      placeholder="ZIP code or city"
                      value={filterLocation}
                      onChange={(e) => setFilterLocation(e.target.value)}
                      className="h-14 text-lg rounded-xl border-2 border-gray-200 focus:border-blue-500"
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
                      Provider
                    </label>
                    <Select
                      value={filterProvider}
                      onValueChange={setFilterProvider}
                    >
                      <SelectTrigger className="h-14 text-lg rounded-xl border-2 border-gray-200">
                        <SelectValue placeholder="Select provider" />
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
                            placeholder="ZIP or city"
                            value={filterLocation}
                            onChange={(e) => setFilterLocation(e.target.value)}
                            className="h-9 text-sm rounded-lg border border-gray-300 focus:border-blue-500"
                          />
                        </div>

                        {/* Provider */}
                        <div>
                          <Select
                            value={filterProvider}
                            onValueChange={setFilterProvider}
                          >
                            <SelectTrigger className="h-9 text-sm rounded-lg border border-gray-300">
                              <SelectValue placeholder="Provider" />
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
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {provider.name}
                          </h3>
                          <p className="text-gray-600 flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {provider.location}
                          </p>
                        </div>
                        <div className="mt-4 md:mt-0 flex gap-2">
                          {/* Compliance Badge */}
                          <div
                            className={`px-3 py-1 rounded-full font-bold text-xs ${
                              provider.isCompliant
                                ? "bg-teal-500 text-white"
                                : "bg-gray-200 text-gray-700"
                            }`}
                          >
                            {provider.isCompliant ? "Compliant" : "Non-Compliant"} – {provider.complianceScore}%
                          </div>
                          <div
                            className="px-4 py-2 rounded-full font-semibold text-sm inline-block"
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
                                  ? "0 10px 15px -3px rgba(16, 185, 129, 0.25)"
                                  : "none",
                            }}
                          >
                            {provider.contextTag}
                          </div>
                        </div>
                      </div>

                      {/* Price Comparison Section */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                          {/* Provider Cost (Static) */}
                          <div className="text-center md:text-left">
                            <p className="text-sm font-semibold text-gray-600 mb-2">
                              Provider Cost
                            </p>
                            <p className="text-3xl font-bold text-gray-900 mb-1">
                              ${provider.avgPrice.toLocaleString()}
                            </p>
                            <p className="text-sm text-gray-600">
                              Range: {priceRange}
                            </p>
                          </div>

                          {/* Coverage Amount */}
                          <div className="text-center md:text-right">
                            <p className="text-sm font-semibold text-gray-600 mb-2">
                              {recentPriceProviders.has(provider.id)
                                ? "Most Recent Coverage"
                                : "6-Month Average Coverage"}
                            </p>
                            <p
                              className={`font-bold mb-1 transition-all duration-500 ease-in-out ${
                                recentPriceProviders.has(provider.id)
                                  ? "text-4xl text-blue-600 transform scale-105"
                                  : "text-3xl text-green-700 transform scale-100"
                              }`}
                            >
                              $
                              {(
                                updatedPrices[provider.id]?.coverageAmount ||
                                provider.coverageAmount
                              ).toLocaleString()}
                            </p>
                            {recentPriceProviders.has(provider.id) && (
                              <div className="flex items-center justify-center md:justify-end gap-1 text-xs text-green-600 mt-1">
                                <CheckCircle2 className="w-3 h-3" />
                                <span>
                                  Most recent price as of{" "}
                                  {new Date(
                                    new Date().getFullYear(),
                                    new Date().getMonth() - 1,
                                  ).toLocaleDateString("en-US", {
                                    month: "long",
                                    year: "numeric",
                                  })}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Additional Details */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-1">
                            Transparency Score
                          </p>
                          <p className="text-lg font-bold text-gray-900">
                            {provider.complianceScore}/100
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-1">
                            Payer
                          </p>
                          <Badge className="bg-purple-50 text-purple-700 border border-purple-200">
                            {provider.payer}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-1">
                            Coverage Type
                          </p>
                          <Badge className="bg-blue-50 text-blue-700 border border-blue-200">
                            {provider.coverageType}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-1">
                            % vs State Average
                          </p>
                          <Badge
                            className={`flex items-center gap-1 ${
                              provider.comparison.includes("below")
                                ? "bg-green-50 text-green-700 border border-green-200"
                                : "bg-red-50 text-red-700 border border-red-200"
                            }`}
                          >
                            <span>
                              {provider.comparison.includes("below")
                                ? "↓"
                                : "↑"}
                            </span>
                            <span>
                              {provider.comparison.match(/\d+/)?.[0]}%
                            </span>
                          </Badge>
                        </div>
                      </div>

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
                      <a href="/methodology" className="text-blue-600 hover:text-blue-800 underline text-sm font-medium">
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

                  {/* 3. Consumer Tip */}
                  <Card className="bg-gradient-to-br from-amber-50 to-orange-100 border-amber-200 rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <Info className="w-6 h-6 text-amber-600 mr-2" />
                        <h3 className="font-bold text-amber-900">
                          Consumer Tip
                        </h3>
                      </div>
                      <p className="text-amber-800">
                        Confirm the price directly with the provider before your visit.
                      </p>
                    </CardContent>
                  </Card>

                  {/* 4. Glossary Section */}
                  <Card className="bg-white border border-gray-200 rounded-2xl">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-gray-900 mb-4">Glossary</h3>
                      <div className="space-y-4">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="cursor-help">
                              <h4 className="font-semibold text-gray-800 mb-1 underline decoration-dotted">
                                Negotiated Rate
                              </h4>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-900 text-white max-w-xs">
                            <p>Contracted price between a provider and insurer.</p>
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="cursor-help">
                              <h4 className="font-semibold text-gray-800 mb-1 underline decoration-dotted">
                                Allowed Amount
                              </h4>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-900 text-white max-w-xs">
                            <p>The maximum your plan will pay for a covered service.</p>
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="cursor-help">
                              <h4 className="font-semibold text-gray-800 mb-1 underline decoration-dotted">
                                Gross Charge
                              </h4>
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

      <Footer onNavigateToDisclosures={onNavigateToDisclosures} />
    </div>
  );
}
