import React, { useState } from "react";
import { Navigation } from "./Nav";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import {
  Stethoscope,
  Search,
  TrendingUp,
  Users,
  ArrowRight,
  Activity,
  DollarSign,
  BarChart3,
} from "lucide-react";

interface ProceduresPageProps {
  onNavigateToDisclosures: () => void;
  onNavigateToMriBrainScan: () => void;
  onNavigateToKneeReplacement: () => void;
  onNavigateToColonoscopy: () => void;
  onNavigateToErVisit: () => void;
  onNavigateToConditions: () => void;
  onNavigateToCostComparisons: () => void;
  onNavigateToAlternativeCare: () => void;
  onNavigateToLocationInsights: () => void;
}

export function ProceduresPage({
  onNavigateToDisclosures,
  onNavigateToMriBrainScan,
  onNavigateToKneeReplacement,
  onNavigateToColonoscopy,
  onNavigateToErVisit,
  onNavigateToConditions,
  onNavigateToCostComparisons,
  onNavigateToAlternativeCare,
  onNavigateToLocationInsights,
}: ProceduresPageProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const featuredProcedures = [
    {
      name: "MRI Brain Scan",
      category: "Diagnostic Imaging",
      avgCost: "$3,200",
      priceRange: "$1,200 - $8,500",
      trend: "-3%",
      complexity: "Standard",
      gradient: "from-blue-500 to-indigo-500",
      action: onNavigateToMriBrainScan,
    },
    {
      name: "Knee Replacement",
      category: "Orthopedic Surgery",
      avgCost: "$35,000",
      priceRange: "$15,000 - $65,000",
      trend: "+2%",
      complexity: "Complex",
      gradient: "from-green-500 to-emerald-500",
      action: onNavigateToKneeReplacement,
    },
    {
      name: "Colonoscopy",
      category: "Preventive Care",
      avgCost: "$1,185",
      priceRange: "$600 - $3,000",
      trend: "-8%",
      complexity: "Standard",
      gradient: "from-purple-500 to-violet-500",
      action: onNavigateToColonoscopy,
    },
    {
      name: "Emergency Room Visit",
      category: "Emergency Care",
      avgCost: "$2,200",
      priceRange: "$150 - $15,000",
      trend: "+12%",
      complexity: "Variable",
      gradient: "from-red-500 to-pink-500",
      action: onNavigateToErVisit,
    },
    {
      name: "CT Scan Chest",
      category: "Diagnostic Imaging",
      avgCost: "$1,200",
      priceRange: "$400 - $3,000",
      trend: "-5%",
      complexity: "Standard",
      gradient: "from-teal-500 to-cyan-500",
      action: () => {}, // Placeholder
    },
    {
      name: "Hip Replacement",
      category: "Orthopedic Surgery",
      avgCost: "$32,000",
      priceRange: "$18,000 - $55,000",
      trend: "+1%",
      complexity: "Complex",
      gradient: "from-orange-500 to-red-500",
      action: () => {}, // Placeholder
    },
    {
      name: "Mammography",
      category: "Preventive Care",
      avgCost: "$280",
      priceRange: "$150 - $800",
      trend: "-2%",
      complexity: "Standard",
      gradient: "from-pink-500 to-rose-500",
      action: () => {}, // Placeholder
    },
    {
      name: "Appendectomy",
      category: "General Surgery",
      avgCost: "$15,000",
      priceRange: "$8,000 - $35,000",
      trend: "+4%",
      complexity: "Complex",
      gradient: "from-indigo-500 to-purple-500",
      action: () => {}, // Placeholder
    },
    {
      name: "Echocardiogram",
      category: "Cardiac Testing",
      avgCost: "$800",
      priceRange: "$300 - $2,000",
      trend: "-6%",
      complexity: "Standard",
      gradient: "from-blue-400 to-blue-600",
      action: () => {}, // Placeholder
    },
    {
      name: "Blood Test Panel",
      category: "Laboratory",
      avgCost: "$150",
      priceRange: "$50 - $500",
      trend: "-10%",
      complexity: "Simple",
      gradient: "from-green-400 to-green-600",
      action: () => {}, // Placeholder
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 mb-8 shadow-lg">
              <Stethoscope className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
              Procedures
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light mb-8">
              Search and analyze healthcare procedure costs. Compare pricing
              across providers and track market trends.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search procedures (e.g., MRI, surgery, colonoscopy)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Procedures */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {searchTerm
                ? `Search Results for "${searchTerm}"`
                : "All Procedures"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {searchTerm
                ? `Found ${
                    featuredProcedures.filter(
                      (p) =>
                        p.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        p.category
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()),
                    ).length
                  } procedures matching your search`
                : `Browse all ${featuredProcedures.length} available medical procedures with detailed cost analysis`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProcedures
              .filter(
                (procedure) =>
                  searchTerm === "" ||
                  procedure.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  procedure.category
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()),
              )
              .map((procedure, index) => (
                <Card
                  key={index}
                  className="bg-white border-0 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {procedure.name}
                        </h3>
                        <div className="flex gap-2">
                          <Badge className="bg-gray-100 text-gray-700">
                            {procedure.category}
                          </Badge>
                          <Badge
                            className={`${
                              procedure.complexity === "Complex"
                                ? "bg-red-100 text-red-700"
                                : procedure.complexity === "Variable"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-green-100 text-green-700"
                            }`}
                          >
                            {procedure.complexity}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {procedure.avgCost}
                        </div>
                        <div
                          className={`text-sm font-medium flex items-center gap-1 ${
                            procedure.trend.startsWith("+")
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          <TrendingUp className="w-4 h-4" />
                          {procedure.trend}
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <div className="text-sm text-gray-600 mb-1">
                        Price Range
                      </div>
                      <div className="text-lg font-semibold text-gray-900">
                        {procedure.priceRange}
                      </div>
                    </div>

                    <Button
                      onClick={procedure.action}
                      className={`w-full bg-gradient-to-r ${procedure.gradient} text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity`}
                    >
                      Analyze {procedure.name}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Other Insightalytics Tools */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Other Analytics
            </h2>
            <p className="text-xl text-gray-600">
              Discover insights beyond procedures with our comprehensive
              healthcare analytics suite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              className="bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              onClick={onNavigateToConditions}
            >
              <CardContent className="p-6 text-center">
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-4"
                  style={{
                    background: "linear-gradient(to right, #ec4899, #f43f5e)",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Conditions
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Analyze costs by medical condition and treatment pathways.
                </p>
                <div className="text-xs text-pink-600 font-medium">
                  For patients & wellness-seekers
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              onClick={onNavigateToCostComparisons}
            >
              <CardContent className="p-6 text-center">
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-4"
                  style={{
                    background: "linear-gradient(to right, #059669, #047857)",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Cost Comparisons
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Advanced market analysis and payer performance metrics.
                </p>
                <div className="text-xs text-green-600 font-medium">
                  For payers, employers & watchdogs
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              onClick={onNavigateToAlternativeCare}
            >
              <CardContent className="p-6 text-center">
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-4"
                  style={{
                    background: "linear-gradient(to right, #0d9488, #0f766e)",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Alternative Care
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Explore cost-effective and holistic healthcare options.
                </p>
                <div className="text-xs text-teal-600 font-medium">
                  For holistic & cost-conscious users
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              onClick={onNavigateToLocationInsights}
            >
              <CardContent className="p-6 text-center">
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-4"
                  style={{
                    background: "linear-gradient(to right, #9333ea, #7c3aed)",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Location Insights
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Geographic analysis of healthcare pricing and markets.
                </p>
                <div className="text-xs text-purple-600 font-medium">
                  For patients, regulators & SEO
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200">
              <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-800 font-medium">
                5 specialized analytics tools for every healthcare stakeholder
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigateToDisclosures={onNavigateToDisclosures} />
    </div>
  );
}
