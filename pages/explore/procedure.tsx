"use client";

import { useState } from "react";
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
  Stethoscope,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Users,
  DollarSign,
  Clock,
  Building,
} from "lucide-react";

export default function ExploreProcedurePage() {
  const [currentPage, setCurrentPage] = useState("exploreProcedure");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

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
    (window.location.href = "/explore/location");
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

  const procedureCategories = [
    { name: "Diagnostic Imaging", count: 156, icon: "🔍" },
    { name: "Surgery", count: 289, icon: "🏥" },
    { name: "Emergency Care", count: 78, icon: "🚨" },
    { name: "Laboratory Tests", count: 245, icon: "🧪" },
    { name: "Maternity Care", count: 45, icon: "👶" },
    { name: "Mental Health", count: 67, icon: "🧠" },
  ];

  const popularProcedures = [
    {
      name: "MRI Brain",
      cpt: "70551",
      avgPrice: 2400,
      trend: "down",
      volume: "12K/month",
    },
    {
      name: "CT Scan Chest",
      cpt: "71260",
      avgPrice: 1850,
      trend: "stable",
      volume: "8K/month",
    },
    {
      name: "Hip Replacement",
      cpt: "27130",
      avgPrice: 42000,
      trend: "down",
      volume: "3K/month",
    },
    {
      name: "Colonoscopy",
      cpt: "45380",
      avgPrice: 1200,
      trend: "up",
      volume: "15K/month",
    },
    {
      name: "Mammogram",
      cpt: "77067",
      avgPrice: 280,
      trend: "stable",
      volume: "25K/month",
    },
    {
      name: "Blood Panel",
      cpt: "80053",
      avgPrice: 180,
      trend: "down",
      volume: "45K/month",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-12">
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
                <span className="text-primary font-medium">By Procedure</span>
              </div>

              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Explore Healthcare Procedures
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Discover pricing data, trends, and insights for thousands of
                  medical procedures across the United States.
                </p>
              </div>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search procedures, CPT codes, or medical terms..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button>Search</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Procedure Categories */}
        <section className="py-12 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {procedureCategories.map((category, index) => (
                  <Card
                    key={index}
                    className="cursor-pointer hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-3xl">{category.icon}</div>
                        <div>
                          <h3 className="font-semibold text-lg">
                            {category.name}
                          </h3>
                          <p className="text-muted-foreground">
                            {category.count} procedures
                          </p>
                        </div>
                      </div>
                      <Button variant="secondary" className="w-full">
                        Explore Category
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Procedures */}
        <section className="py-12 bg-gray-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Most Searched Procedures</h2>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="imaging">Diagnostic Imaging</SelectItem>
                    <SelectItem value="surgery">Surgery</SelectItem>
                    <SelectItem value="lab">Laboratory Tests</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-4">
                {popularProcedures.map((procedure, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Stethoscope className="w-8 h-8 text-primary" />
                          <div>
                            <h3 className="font-semibold text-lg">
                              {procedure.name}
                            </h3>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                              <span>CPT: {procedure.cpt}</span>
                              <span>•</span>
                              <div className="flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                {procedure.volume}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="text-2xl font-bold">
                              ${procedure.avgPrice.toLocaleString()}
                            </div>
                            <div
                              className={`flex items-center gap-1 ${
                                procedure.trend === "down"
                                  ? "text-green-600"
                                  : procedure.trend === "up"
                                    ? "text-red-600"
                                    : "text-gray-600"
                              }`}
                            >
                              {procedure.trend === "down" && (
                                <TrendingDown className="w-4 h-4" />
                              )}
                              {procedure.trend === "up" && (
                                <TrendingUp className="w-4 h-4" />
                              )}
                              {procedure.trend === "stable" && (
                                <BarChart3 className="w-4 h-4" />
                              )}
                              <span className="text-sm capitalize">
                                {procedure.trend}
                              </span>
                            </div>
                          </div>
                          <Button size="sm" variant="secondary">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <StandardizedCTA onCTAAssistant={handleCTAAssistant} />
      </div>

      <Footer onNavigateToDisclosures={handleNavigateToDisclosures} />
    </div>
  );
}
