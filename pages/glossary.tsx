"use client";

import React, { useState } from "react";
import { Navigation } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  ChevronRight,
  BookOpen,
  Search,
  Filter,
  DollarSign,
  FileText,
  Building,
  Users,
} from "lucide-react";

export default function GlossaryPage() {
  const [currentPage, setCurrentPage] = useState("glossary");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Navigation handlers
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

  const glossaryTerms = [
    {
      term: "Chargemaster",
      definition:
        "A comprehensive list of charges for all services, procedures, and supplies provided by a hospital. Also called the Charge Description Master (CDM).",
      category: "billing",
      icon: FileText,
    },
    {
      term: "CPT Code",
      definition:
        "Current Procedural Terminology codes used to describe medical, surgical, and diagnostic services. These standardized codes help identify specific procedures.",
      category: "medical",
      icon: FileText,
    },
    {
      term: "DRG",
      definition:
        "Diagnosis-Related Group - a system used to classify hospital cases into groups for payment purposes. Each DRG has a predetermined payment amount.",
      category: "billing",
      icon: DollarSign,
    },
    {
      term: "Machine-Readable File (MRF)",
      definition:
        "Digital files published by hospitals containing pricing information in a standardized format, as required by CMS price transparency rules.",
      category: "data",
      icon: FileText,
    },
    {
      term: "Negotiated Rate",
      definition:
        "The price that a hospital has agreed to accept from an insurance company for a specific service or procedure.",
      category: "billing",
      icon: DollarSign,
    },
    {
      term: "Out-of-Pocket Maximum",
      definition:
        "The most you'll pay for covered healthcare services in a plan year. After you reach this amount, insurance pays 100% of covered services.",
      category: "insurance",
      icon: DollarSign,
    },
    {
      term: "Price Transparency",
      definition:
        "The practice of making healthcare prices publicly available and easily accessible to consumers before they receive care.",
      category: "data",
      icon: Building,
    },
    {
      term: "Provider",
      definition:
        "A hospital, clinic, doctor, or other healthcare professional or facility that provides medical services to patients.",
      category: "medical",
      icon: Users,
    },
    {
      term: "Standard Charges",
      definition:
        "The regular rates that hospitals charge for services, before any negotiated rates or discounts are applied.",
      category: "billing",
      icon: DollarSign,
    },
    {
      term: "Transparency Score",
      definition:
        "HospitalFees.org's proprietary metric measuring how complete and current a hospital's pricing data is, based on CMS requirements.",
      category: "data",
      icon: Building,
    },
    // Add more terms as needed
  ];

  const categories = [
    { value: "all", label: "All Categories", icon: BookOpen },
    { value: "billing", label: "Billing & Costs", icon: DollarSign },
    { value: "medical", label: "Medical Terms", icon: Users },
    { value: "insurance", label: "Insurance", icon: Building },
    { value: "data", label: "Data & Technology", icon: FileText },
  ];

  const filteredTerms = glossaryTerms.filter((term) => {
    const matchesSearch =
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header
        onNavigateToHomepage={handleNavigateToHomepage}
        onNavigateToInternalSearch={handleNavigateToInternalSearch}
        onNavigateToComparePrices={handleNavigateToComparePrices}
        onNavigateToPriceComparison={handleNavigateToPriceComparison}
        onNavigateToSearchByProcedure={handleNavigateToSearchByProcedure}
        onNavigateToFAQ={handleNavigateToFAQ}

        onNavigateToExplore={handleNavigateToExplore}
        onNavigateToExploreByLocation={handleNavigateToExploreByLocation}
        onNavigateToInsights={handleNavigateToInsights}
        onNavigateToPatientResources={handleNavigateToPatientResources}
        onNavigateToTools={handleNavigateToTools}
        onNavigateToCommunity={handleNavigateToCommunity}
        onNavigateToProfessionals={handleNavigateToProfessionals}
        currentPage={currentPage}
      />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-green-50 via-white to-gray-50 py-16 lg:py-24">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="text-sm text-muted-foreground mb-6">
                <button
                  onClick={handleNavigateToHomepage}
                  className="hover:text-primary transition-colors"
                >
                  Home
                </button>
                <ChevronRight className="w-4 h-4 inline mx-2" />
                <span className="text-primary font-medium">Glossary</span>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    Healthcare Terms
                  </Badge>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Healthcare Cost Glossary
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                  Understanding healthcare terminology helps you make informed
                  decisions about your care and costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-white border-b">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                  <Input
                    placeholder="Search terms or definitions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                  {categories.map((category) => (
                    <Button
                      key={category.value}
                      variant={
                        selectedCategory === category.value
                          ? "default"
                          : "outline"
                      }
                      size="sm"
                      onClick={() => setSelectedCategory(category.value)}
                      className="flex items-center gap-2 whitespace-nowrap"
                    >
                      <category.icon className="w-4 h-4" />
                      {category.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Results count */}
              <div className="mt-4 text-sm text-muted-foreground">
                Showing {filteredTerms.length} of {glossaryTerms.length} terms
                {searchTerm && ` for "${searchTerm}"`}
                {selectedCategory !== "all" &&
                  ` in ${categories.find((c) => c.value === selectedCategory)?.label}`}
              </div>
            </div>
          </div>
        </section>

        {/* Glossary Terms */}
        <section className="py-16 bg-gray-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {filteredTerms.length > 0 ? (
                <div className="space-y-4">
                  {filteredTerms.map((item, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-xl font-semibold text-foreground">
                                {item.term}
                              </h3>
                              <Badge variant="secondary" className="text-xs">
                                {
                                  categories.find(
                                    (c) => c.value === item.category,
                                  )?.label
                                }
                              </Badge>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.definition}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      No terms found
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search or selecting a different
                      category
                    </p>
                    <Button
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("all");
                      }}
                      variant="secondary"
                    >
                      Clear Filters
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">
                Need More Help?
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => (window.location.href = "/faq")}
                >
                  <CardContent className="p-6 text-center">
                    <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">FAQ</h3>
                    <p className="text-muted-foreground text-sm">
                      Common questions about healthcare costs and our platform
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => (window.location.href = "/methodology")}
                >
                  <CardContent className="p-6 text-center">
                    <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Methodology</h3>
                    <p className="text-muted-foreground text-sm">
                      How we collect and analyze healthcare pricing data
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => (window.location.href = "/learn")}
                >
                  <CardContent className="p-6 text-center">
                    <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      Patient Resources
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Educational materials about healthcare costs and rights
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer onNavigateToDisclosures={handleNavigateToDisclosures} />
    </div>
  );
}
