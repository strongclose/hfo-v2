"use client";

import React, { useState } from "react";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { StandardizedCTA } from "../../components/StandardizedCTA";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  ChevronRight,
  Search,
  MapPin,
  TrendingUp,
  TrendingDown,
  Building,
  Star,
  DollarSign,
  Users,
  Shield,
  Info,
  BarChart3,
  User,
  Trophy,
  SlidersHorizontal,
} from "lucide-react";

export default function ExploreLocationPage() {
  const [currentPage, setCurrentPage] = useState("exploreLocation");
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const handleNavigateToHomepage = () => (window.location.href = "/");
  const handleNavigateToInternalSearch = () =>
    (window.location.href = "/search");
  const handleNavigateToComparePrices = () => (window.location.href = "/");
  const handleNavigateToPriceComparison = () =>
    (window.location.href = "/price-comparison");
  const handleNavigateToSearchByProcedure = () =>
    (window.location.href = "/search-procedure");
  const handleNavigateToFAQ = () => (window.location.href = "/faq");
  const handleNavigateToBlog = () => setCurrentPage("blog");
  const handleNavigateToExplore = () => setCurrentPage("explore");
  const handleNavigateToExploreByLocation = () =>
    setCurrentPage("exploreLocation");
  const handleNavigateToInsights = () =>
    (window.location.href = "/insights/comparisons");
  const handleNavigateToPatientResources = () =>
    (window.location.href = "/learn");
  const handleNavigateToTools = () =>
    (window.location.href = "/tools/cost-calculator");
  const handleNavigateToCommunity = () => (window.location.href = "/community");
  const handleNavigateToProfessionals = () =>
    (window.location.href = "/professionals");
  const handleNavigateToDisclosures = () => setCurrentPage("disclosures");
  const handleCTAAssistant = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const topMarkets = [
    {
      city: "Boston, MA",
      hospitals: 42,
      transparencyScore: 94,
      avgSavings: "$3,200",
      trend: "up",
      change: "+8%",
      population: "4.9M",
      featured: true,
      region: "Northeast",
      benchmarkText: "18% below national avg",
    },
    {
      city: "Seattle, WA",
      hospitals: 38,
      transparencyScore: 91,
      avgSavings: "$2,850",
      trend: "up",
      change: "+12%",
      population: "4.0M",
      featured: true,
      region: "West Coast",
      benchmarkText: "22% below national avg",
    },
    {
      city: "San Francisco, CA",
      hospitals: 45,
      transparencyScore: 89,
      avgSavings: "$3,100",
      trend: "stable",
      change: "+2%",
      population: "4.7M",
      featured: false,
      region: "West Coast",
      benchmarkText: "20% below national avg",
    },
    {
      city: "Denver, CO",
      hospitals: 32,
      transparencyScore: 87,
      avgSavings: "$2,600",
      trend: "up",
      change: "+15%",
      population: "2.9M",
      featured: false,
      region: "Midwest",
      benchmarkText: "30% below national avg",
    },
    {
      city: "Austin, TX",
      hospitals: 28,
      transparencyScore: 85,
      avgSavings: "$2,400",
      trend: "up",
      change: "+10%",
      population: "2.3M",
      featured: false,
      region: "Southwest",
      benchmarkText: "35% below national avg",
    },
  ];

  const states = [
    { code: "CA", name: "California", hospitals: 456, avgCost: "$3,200" },
    { code: "TX", name: "Texas", hospitals: 378, avgCost: "$2,800" },
    { code: "NY", name: "New York", hospitals: 289, avgCost: "$3,800" },
    { code: "FL", name: "Florida", hospitals: 267, avgCost: "$2,900" },
    { code: "MA", name: "Massachusetts", hospitals: 156, avgCost: "$3,400" },
    { code: "WA", name: "Washington", hospitals: 134, avgCost: "$3,100" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

      <div className="flex-1">
        {/* Hero Section with AI Chat Interface */}
        <section className="relative bg-gradient-to-b from-blue-50 via-white to-gray-50 py-16 lg:py-24">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Breadcrumb */}
              <div className="text-sm text-muted-foreground mb-6">
                <button
                  onClick={handleNavigateToHomepage}
                  className="hover:text-primary transition-colors"
                >
                  Home
                </button>
                <ChevronRight className="w-4 h-4 inline mx-2" />
                <span className="text-muted-foreground">Explore Data</span>
                <ChevronRight className="w-4 h-4 inline mx-2" />
                <span className="text-primary font-medium">By Location</span>
              </div>

              {/* Hero Header */}
              <div className="text-center mb-12">
                <div className="max-w-5xl mx-auto">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                    Find Top Healthcare Markets by Location
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                    Ask our AI about healthcare markets in any city or explore
                    the best metro areas for quality care and savings
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span>Top performing markets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>50+ metro areas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span>Transparent pricing</span>
                  </div>
                </div>
              </div>
              {/* Main AI Chat Interface */}
              <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden mb-8 relative">
                  {/* Filters Button */}
                  <div className="absolute top-4 right-4 z-10">
                    <Button
                      variant="tertiary"
                      size="sm"
                      onClick={() =>
                        setShowAdvancedFilters(!showAdvancedFilters)
                      }
                      className="w-8 h-8 p-0"
                      title="Filter search results"
                    >
                      <SlidersHorizontal className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Chat Messages Area */}
                  <div className="min-h-[250px] max-h-[350px] overflow-y-auto p-6 bg-white">
                    <div className="space-y-6">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">
                            H
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-medium text-gray-900">
                              HFO Pro
                            </span>
                            <span className="text-xs text-muted-foreground">
                              now
                            </span>
                          </div>
                          <div
                            className="bg-gray-50 rounded-2xl rounded-tl-md p-4 border border-gray-100"
                            style={{ maxWidth: "475px" }}
                          >
                            <div className="text-sm leading-relaxed text-foreground">
                              👋 Hi! I can help you find the best healthcare
                              markets by location. Try asking:
                              <br />
                              <br />
                              • "What are the top healthcare markets in
                              California?"
                              <br />
                              • "Which cities have the lowest procedure costs?"
                              <br />
                              • "Best metro areas for quality care and savings"
                              <br />
                              <br />
                              What location would you like to explore?
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Clean Input Area */}
                  <div className="p-4 bg-white border-t border-gray-100">
                    <div className="flex gap-3">
                      <Input
                        placeholder="Ask about healthcare markets by location..."
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                        className="flex-1 border-0 bg-gray-50 focus:bg-white transition-colors rounded-2xl"
                      />
                      <button className="ask-ai-button px-4 py-2 rounded-full text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group">
                        <MapPin className="w-4 h-4 group-hover:animate-pulse" />
                        Ask AI
                        <span className="sparkle-icon text-sm">✨</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Advanced Filters Panel */}
                {showAdvancedFilters && (
                  <div className="text-center mb-8">
                    <div className="text-sm text-muted-foreground mb-4">
                      Advanced Search Options:
                    </div>
                    <Card className="max-w-5xl mx-auto bg-white border border-gray-200 shadow-sm">
                      <CardContent className="p-8">
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">
                              Procedure Type
                            </label>
                            <Select defaultValue="all">
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select procedure" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="all">
                                  All Procedures
                                </SelectItem>
                                <SelectItem value="imaging">
                                  Imaging (MRI, CT, X-Ray)
                                </SelectItem>
                                <SelectItem value="surgery">Surgery</SelectItem>
                                <SelectItem value="maternity">
                                  Maternity Care
                                </SelectItem>
                                <SelectItem value="emergency">
                                  Emergency Care
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">
                              Distance Range
                            </label>
                            <Select defaultValue="25">
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select distance" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="10">
                                  Within 10 miles
                                </SelectItem>
                                <SelectItem value="25">
                                  Within 25 miles
                                </SelectItem>
                                <SelectItem value="50">
                                  Within 50 miles
                                </SelectItem>
                                <SelectItem value="100">
                                  Within 100 miles
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">
                              Insurance Plan
                            </label>
                            <Select defaultValue="all">
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select insurance" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="all">All Plans</SelectItem>
                                <SelectItem value="aetna">Aetna</SelectItem>
                                <SelectItem value="blue-cross">
                                  Blue Cross Blue Shield
                                </SelectItem>
                                <SelectItem value="kaiser">
                                  Kaiser Permanente
                                </SelectItem>
                                <SelectItem value="cigna">Cigna</SelectItem>
                                <SelectItem value="united">
                                  UnitedHealthcare
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">
                              Price Range
                            </label>
                            <Select defaultValue="all">
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select price range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="all">All Prices</SelectItem>
                                <SelectItem value="low">$0 - $1,000</SelectItem>
                                <SelectItem value="medium">
                                  $1,000 - $5,000
                                </SelectItem>
                                <SelectItem value="high">$5,000+</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="flex gap-3 justify-center">
                          <Button variant="primary" className="px-6">
                            Apply Filters
                          </Button>
                          <Button
                            variant="secondary"
                            onClick={() => setShowAdvancedFilters(false)}
                          >
                            Close
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Region Quick Filters */}
                <div className="text-center mb-8">
                  <div className="text-sm text-muted-foreground mb-4">
                    Browse by region:
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      "All Markets",
                      "Northeast",
                      "Southeast",
                      "Midwest",
                      "Southwest",
                      "West Coast",
                    ].map((region) => (
                      <Button
                        key={region}
                        variant={
                          selectedState === region ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setSelectedState(region)}
                        className="text-xs"
                      >
                        {region}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Markets */}
        <section className="py-12 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Top Performing Markets</h2>
                <div className="flex items-center gap-3">
                  <Select defaultValue="savings">
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="savings">Highest Savings</SelectItem>
                      <SelectItem value="population">Population</SelectItem>
                      <SelectItem value="hospitals">Hospital Count</SelectItem>
                      <SelectItem value="transparency">
                        Transparency Score
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="secondary" size="sm">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Show More Markets
                  </Button>
                </div>
              </div>
              <div className="grid gap-6">
                {topMarkets.map((market, index) => (
                  <Card
                    key={index}
                    className={`${market.featured ? "border-primary" : ""} hover:shadow-lg transition-shadow`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <MapPin className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-semibold">
                                {market.city}
                              </h3>
                              {market.featured && (
                                <Badge className="bg-primary text-white">
                                  Top Rated
                                </Badge>
                              )}
                              <div
                                className={`flex items-center gap-1 ${
                                  market.trend === "up"
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {market.trend === "up" ? (
                                  <TrendingUp className="w-4 h-4" />
                                ) : (
                                  <TrendingDown className="w-4 h-4" />
                                )}
                                <span className="text-sm font-medium">
                                  {market.change}
                                </span>
                              </div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Population: {market.population}
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6 text-center">
                          <div className="cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors group flex flex-col items-center justify-center min-h-[80px]">
                            <div className="flex items-center justify-center gap-1 mb-2">
                              <p className="text-sm text-muted-foreground">
                                Hospitals
                              </p>
                              <div className="relative">
                                <Shield className="w-3 h-3 text-gray-400" />
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                                  Click to view provider list
                                </div>
                              </div>
                            </div>
                            <p className="text-xl font-bold">
                              {market.hospitals}
                            </p>
                          </div>
                          <div className="flex flex-col items-center justify-center min-h-[80px] p-3">
                            <p className="text-sm text-muted-foreground mb-2">
                              Transparency
                            </p>
                            <p className="text-xl font-bold text-primary">
                              {market.transparencyScore}%
                            </p>
                            <Badge variant="secondary" className="text-xs mt-1">
                              Top 5 cities
                            </Badge>
                          </div>
                          <div className="group relative flex flex-col items-center justify-center min-h-[80px] p-3">
                            <div className="flex items-center justify-center gap-1 mb-2">
                              <p className="text-sm text-muted-foreground">
                                Avg. Savings*
                              </p>
                              <div className="relative">
                                <TrendingDown className="w-3 h-3 text-gray-400" />
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                                  vs. area hospital list price
                                </div>
                              </div>
                            </div>
                            <p className="text-xl font-bold text-green-600 flex items-center justify-center gap-1">
                              {market.avgSavings}
                              <TrendingDown className="w-4 h-4" />
                            </p>
                            <p className="text-xs text-green-600 mt-1 text-center">
                              {market.benchmarkText || "25% below national avg"}
                            </p>
                          </div>
                        </div>
                        <Button variant="secondary">Explore Market</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: State vs State Comparison Chart */}
        <section className="py-12 bg-gray-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">
                  How States Compare on Healthcare Pricing
                </h2>
                <div className="flex items-center gap-3">
                  <Select defaultValue="avgCost">
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="avgCost">Avg Cost</SelectItem>
                      <SelectItem value="savings">Savings</SelectItem>
                      <SelectItem value="transparency">Transparency</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Procedure" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Procedures</SelectItem>
                      <SelectItem value="mri">MRI Scan</SelectItem>
                      <SelectItem value="surgery">Surgery</SelectItem>
                      <SelectItem value="maternity">Maternity Care</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Interactive Bar Chart */}
              <Card className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      state: "California",
                      avgCost: "$3,200",
                      savings: "22%",
                      transparency: 89,
                      hospitals: 456,
                      color: "bg-blue-500",
                    },
                    {
                      state: "Texas",
                      avgCost: "$2,800",
                      savings: "28%",
                      transparency: 85,
                      hospitals: 378,
                      color: "bg-green-500",
                    },
                    {
                      state: "New York",
                      avgCost: "$3,800",
                      savings: "15%",
                      transparency: 87,
                      hospitals: 289,
                      color: "bg-red-500",
                    },
                    {
                      state: "Florida",
                      avgCost: "$2,900",
                      savings: "25%",
                      transparency: 83,
                      hospitals: 267,
                      color: "bg-orange-500",
                    },
                    {
                      state: "Massachusetts",
                      avgCost: "$3,400",
                      savings: "18%",
                      transparency: 94,
                      hospitals: 156,
                      color: "bg-purple-500",
                    },
                    {
                      state: "Washington",
                      avgCost: "$3,100",
                      savings: "21%",
                      transparency: 91,
                      hospitals: 134,
                      color: "bg-teal-500",
                    },
                  ].map((state, index) => (
                    <div
                      key={state.state}
                      className="group cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-24 text-sm font-medium">
                          {state.state}
                        </div>
                        <div className="flex-1 relative">
                          <div className="w-full bg-gray-200 rounded-full h-6 relative overflow-hidden">
                            <div
                              className={`${state.color} h-6 rounded-full transition-all duration-1000 ease-out`}
                              style={{ width: `${60 + index * 5}%` }}
                            ></div>
                            <div className="absolute inset-0 flex items-center justify-between px-3">
                              <span className="text-white text-xs font-medium">
                                {state.avgCost}
                              </span>
                              <span className="text-gray-700 text-xs">
                                {state.savings} savings
                              </span>
                            </div>
                          </div>
                          {/* Tooltip */}
                          <div className="absolute top-8 left-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs rounded px-3 py-2 z-10 whitespace-nowrap">
                            Transparency: {state.transparency}% • Hospitals:{" "}
                            {state.hospitals}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Step 3: Top Procedures by Market Grid */}
        <section className="py-12 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">
                  Which Cities Offer the Best Prices for Common Procedures?
                </h2>
                <Select defaultValue="all">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="imaging">Imaging</SelectItem>
                    <SelectItem value="surgery">Surgery</SelectItem>
                    <SelectItem value="maternity">Maternity</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Interactive Grid/Heatmap */}
              <Card className="p-6 overflow-x-auto">
                <div className="min-w-[800px]">
                  <div className="grid grid-cols-6 gap-1 text-xs">
                    {/* Header Row */}
                    <div className="p-3 font-medium"></div>
                    {["Boston", "Seattle", "Austin", "Denver", "Phoenix"].map(
                      (city) => (
                        <div
                          key={city}
                          className="p-3 font-medium text-center bg-gray-100 rounded-t"
                        >
                          {city}
                        </div>
                      ),
                    )}

                    {/* Data Rows */}
                    {[
                      {
                        procedure: "C-Section",
                        costs: [
                          "$8,200",
                          "$7,850",
                          "$6,400",
                          "$6,800",
                          "$5,900",
                        ],
                      },
                      {
                        procedure: "MRI Brain",
                        costs: [
                          "$2,100",
                          "$1,950",
                          "$1,650",
                          "$1,800",
                          "$1,450",
                        ],
                      },
                      {
                        procedure: "Colonoscopy",
                        costs: ["$1,450", "$1,320", "$980", "$1,100", "$850"],
                      },
                      {
                        procedure: "Hip Replace",
                        costs: [
                          "$52,100",
                          "$48,900",
                          "$41,200",
                          "$44,500",
                          "$38,800",
                        ],
                      },
                      {
                        procedure: "CT Scan",
                        costs: ["$1,200", "$1,100", "$850", "$950", "$750"],
                      },
                    ].map((row, rowIndex) => (
                      <React.Fragment key={row.procedure}>
                        <div className="p-3 font-medium bg-gray-100 rounded-l">
                          {row.procedure}
                        </div>
                        {row.costs.map((cost, colIndex) => {
                          const costNum = parseInt(cost.replace(/[$,]/g, ""));
                          const intensity = Math.min(
                            100,
                            (costNum / 60000) * 100,
                          );
                          return (
                            <div
                              key={colIndex}
                              className="p-3 text-center cursor-pointer hover:shadow-lg transition-all rounded border border-gray-200 group relative"
                              style={{
                                backgroundColor: `rgba(59, 130, 246, ${(intensity / 100) * 0.3 + 0.1})`,
                                color: intensity > 50 ? "white" : "black",
                              }}
                            >
                              <div className="font-semibold">{cost}</div>
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap">
                                Click to explore
                              </div>
                            </div>
                          );
                        })}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Step 4: Interactive U.S. Map */}
        <section className="py-12 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Explore the Price Landscape Nationwide
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Procedure type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Procedures</SelectItem>
                      <SelectItem value="imaging">Imaging</SelectItem>
                      <SelectItem value="surgery">Surgery</SelectItem>
                      <SelectItem value="emergency">Emergency</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="in-network-map"
                      className="rounded"
                    />
                    <label htmlFor="in-network-map" className="text-sm">
                      In-network only
                    </label>
                  </div>
                  <Select defaultValue="2024">
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Interactive Map Placeholder */}
              <Card className="p-8">
                <div className="relative w-full h-96 bg-gradient-to-br from-slate-100 to-blue-100 rounded-xl border border-gray-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">
                        Interactive U.S. Healthcare Map
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Hover over states to see pricing data
                      </p>
                      <div className="flex justify-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-green-400 rounded"></div>
                          <span>Low Cost</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                          <span>Medium Cost</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-red-400 rounded"></div>
                          <span>High Cost</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sample State Markers */}
                  {[
                    {
                      state: "CA",
                      position: { top: "40%", left: "8%" },
                      cost: "$3,200",
                      color: "bg-red-500",
                    },
                    {
                      state: "TX",
                      position: { top: "60%", left: "35%" },
                      cost: "$2,800",
                      color: "bg-yellow-500",
                    },
                    {
                      state: "NY",
                      position: { top: "20%", left: "75%" },
                      cost: "$3,800",
                      color: "bg-red-600",
                    },
                    {
                      state: "FL",
                      position: { top: "75%", left: "70%" },
                      cost: "$2,900",
                      color: "bg-yellow-500",
                    },
                  ].map((marker) => (
                    <div
                      key={marker.state}
                      className={`absolute w-8 h-8 ${marker.color} rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform flex items-center justify-center text-white text-xs font-bold`}
                      style={{
                        top: marker.position.top,
                        left: marker.position.left,
                      }}
                      title={`${marker.state}: ${marker.cost} avg`}
                    >
                      {marker.state}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Step 5: Price Transparency Scorecard */}
        <section className="py-12 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                How Transparent is Healthcare Across the U.S.?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Top 5 States */}
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
                    Top 5 Most Transparent States
                  </h3>
                  <div className="space-y-4">
                    {[
                      { state: "Massachusetts", score: 94, change: "+3%" },
                      { state: "Washington", score: 91, change: "+2%" },
                      { state: "California", score: 89, change: "+1%" },
                      { state: "New York", score: 87, change: "+4%" },
                      { state: "Colorado", score: 86, change: "+2%" },
                    ].map((item, index) => (
                      <div key={item.state} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{item.state}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold text-green-600">
                                {item.score}%
                              </span>
                              <div className="flex items-center text-green-600 text-xs">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                {item.change}
                              </div>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div
                              className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${item.score}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Scoring Bands */}
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-6">
                    Transparency Score Bands
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">Excellent (90-100%)</div>
                        <div className="text-sm text-gray-600">
                          Full price transparency with detailed breakdowns
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">Good (75-89%)</div>
                        <div className="text-sm text-gray-600">
                          Most procedures have clear pricing
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">
                          Needs Improvement (&lt;75%)
                        </div>
                        <div className="text-sm text-gray-600">
                          Limited pricing transparency
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Info className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-blue-900">
                          About Transparency Scores
                        </span>
                      </div>
                      <p className="text-sm text-blue-700">
                        Based on hospital compliance with federal price
                        transparency requirements and data accessibility.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Step 6: Did You Know? Rotating Insight Cards */}
        <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Did You Know?
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: "💡",
                    stat: "A colonoscopy costs $1,100 in Miami, but $3,400 in Chicago.",
                    link: "Compare Colonoscopy Prices",
                  },
                  {
                    icon: "📊",
                    stat: "New York has 32% lower transparency scores than Denver.",
                    link: "Explore Transparency Data",
                  },
                  {
                    icon: "🏥",
                    stat: "Texas has 40% more hospitals per capita than California.",
                    link: "View Hospital Distribution",
                  },
                  {
                    icon: "💰",
                    stat: "MRI costs vary by up to 500% between different metro areas.",
                    link: "Compare MRI Pricing",
                  },
                  {
                    icon: "🤖",
                    stat: "AI analysis shows 73% of patients overpay for routine procedures.",
                    link: "Get AI Analysis",
                  },
                  {
                    icon: "⚡",
                    stat: "Emergency room visits cost 3x more on weekends in major cities.",
                    link: "Emergency Cost Analysis",
                  },
                ].map((insight, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  >
                    <div className="text-4xl mb-4">{insight.icon}</div>
                    <p className="text-gray-700 mb-4 group-hover:text-gray-900 transition-colors">
                      {insight.stat}
                    </p>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-white transition-colors"
                    >
                      {insight.link}
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Step 7: Major Metro Areas (Relocated to Bottom) */}
        <section className="py-12 bg-gray-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Browse by State</h2>
                <p className="text-sm text-muted-foreground">
                  *Estimated average savings vs. area hospital list price
                  (chargemaster). Based on most common procedures.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {states.map((state, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">{state.name}</h3>
                        <Badge variant="secondary">{state.code}</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Hospitals:
                          </span>
                          <span className="font-medium">{state.hospitals}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Avg. Cost:
                          </span>
                          <span className="font-medium">{state.avgCost}</span>
                        </div>
                      </div>
                      <Button variant="secondary" className="w-full mt-4">
                        View {state.name}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Step 8: Final CTA Block */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Compare Healthcare Markets for Your Needs
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get personalized recommendations based on your location,
              insurance, and healthcare priorities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={handleCTAAssistant}
                className="ask-ai-button px-8 py-4 rounded-lg text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group"
              >
                <MapPin className="w-6 h-6 group-hover:animate-pulse" />
                Ask AI Assistant
                <span className="sparkle-icon">✨</span>
              </button>

              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleNavigateToComparePrices}
                  className="text-white border-white/30 hover:bg-white/10 bg-white/5"
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Compare Cities
                </Button>
                <span className="hidden sm:block text-white/50">|</span>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleNavigateToInternalSearch}
                  className="text-white border-white/30 hover:bg-white/10 bg-white/5"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Find Nearby Hospitals
                </Button>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <p className="text-blue-100 text-sm mb-2">💡 Rotating Tip:</p>
              <p className="text-white font-medium">
                "Where's the cheapest hospital for childbirth in Texas?"
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer onNavigateToDisclosures={handleNavigateToDisclosures} />
    </div>
  );
}
