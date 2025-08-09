"use client";

import React, { useState } from "react";
import { Navigation } from "../../components/Header";
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
import {
  ChevronRight,
  GraduationCap,
  Database,
  BarChart3,
  FileText,
  Search,
  Download,
  TrendingUp,
  CheckCircle2,
  Star,
  Quote,
  ArrowRight,
  Users,
  Globe,
  Shield,
  Zap,
} from "lucide-react";

export default function ResearchersPage() {
  const [currentPage, setCurrentPage] = useState("whoWeHelpResearchers");

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

  const valueCards = [
    {
      icon: Database,
      title: "Comprehensive healthcare pricing dataset",
      description:
        "Access pricing data from 5,000+ hospitals and 15,000+ procedures for robust research analysis.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: BarChart3,
      title: "Regional variation analysis",
      description:
        "Study healthcare cost disparities across geographic regions, demographics, and market conditions.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: TrendingUp,
      title: "Longitudinal trend data",
      description:
        "Track healthcare cost evolution over time with historical data spanning multiple years.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Shield,
      title: "De-identified & compliant",
      description:
        "All research data is HIPAA-compliant, de-identified, and ethically sourced for academic use.",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ];

  const dataFeatures = [
    {
      title: "Hospital Pricing Data",
      description: "Chargemaster data, negotiated rates, and quality metrics",
      icon: Database,
      dataPoints: "2.5M+",
    },
    {
      title: "Insurance Networks",
      description: "Provider networks, plan details, and coverage analysis",
      icon: Shield,
      dataPoints: "850+",
    },
    {
      title: "Geographic Coverage",
      description: "MSA-level analysis across all 50 states",
      icon: Globe,
      dataPoints: "384",
    },
    {
      title: "Procedure Categories",
      description: "Standardized CPT codes and medical specialties",
      icon: FileText,
      dataPoints: "15,000+",
    },
  ];

  const researchUses = [
    "Healthcare policy analysis and reform proposals",
    "Price transparency impact studies",
    "Healthcare market competition research",
    "Access and affordability assessments",
    "Quality-cost correlation analysis",
    "Insurance market dynamics studies",
  ];

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
                <span className="text-muted-foreground">Who We Help</span>
                <ChevronRight className="w-4 h-4 inline mx-2" />
                <span className="text-primary font-medium">
                  For Researchers
                </span>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      For Academic & Policy Research
                    </Badge>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                    Healthcare Cost Research Made Simple
                  </h1>

                  <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                    Access comprehensive healthcare pricing data for academic
                    research, policy analysis, and market studies.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      onClick={() =>
                        (window.location.href = "/tools/data-explorer")
                      }
                      className="flex items-center gap-2"
                    >
                      <Database className="w-5 h-5" />
                      Request Data Access
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={() =>
                        (window.location.href = "/insights/visualizations")
                      }
                      className="flex items-center gap-2"
                    >
                      <BarChart3 className="w-5 h-5" />
                      View Sample Data
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white rounded-lg shadow-lg p-6 border">
                    <div className="flex items-center gap-3 mb-4">
                      <Database className="w-6 h-6 text-blue-500" />
                      <span className="font-semibold">
                        Research Dataset Overview
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">
                            5,000+
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Hospitals
                          </div>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">
                            15K+
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Procedures
                          </div>
                        </div>
                        <div className="text-center p-3 bg-purple-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">
                            384
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Metro Areas
                          </div>
                        </div>
                        <div className="text-center p-3 bg-orange-50 rounded-lg">
                          <div className="text-2xl font-bold text-orange-600">
                            2.5M+
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Data Points
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground text-center pt-3 border-t">
                        Updated daily • HIPAA compliant • Academic licensing
                        available
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Cards */}
        <section className="py-16 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Researchers Choose Our Data
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive, reliable healthcare cost data for rigorous
                  academic research
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {valueCards.map((card, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-12 h-12 ${card.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}
                      >
                        <card.icon className={`w-6 h-6 ${card.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {card.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Data Features */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Research-Grade Data Features
                </h2>
                <p className="text-xl text-muted-foreground">
                  Designed specifically for academic and policy research needs
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dataFeatures.map((feature, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow bg-white"
                  >
                    <CardContent className="p-6 text-center">
                      <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {feature.dataPoints}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research Applications */}
        <section className="py-16 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Proven Research Applications
                  </h2>
                  <p className="text-xl text-muted-foreground mb-6">
                    Our data has powered groundbreaking research in healthcare
                    economics, policy analysis, and market competition studies.
                  </p>
                  <div className="space-y-3 mb-8">
                    {researchUses.map((use, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>{use}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    size="lg"
                    onClick={() => (window.location.href = "/methodology")}
                    className="flex items-center gap-2"
                  >
                    <FileText className="w-5 h-5" />
                    View Methodology
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border">
                  <div className="text-center">
                    <GraduationCap className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">
                      Sample Research Output
                    </h3>
                    <div className="space-y-3 text-left">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="font-medium text-blue-800">
                          Price Variation Study
                        </div>
                        <div className="text-sm text-blue-600">
                          Knee replacement costs vary by 340% within same metro
                          area
                        </div>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="font-medium text-green-800">
                          Quality-Cost Analysis
                        </div>
                        <div className="text-sm text-green-600">
                          No correlation between price and quality ratings
                          (r=0.12)
                        </div>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="font-medium text-purple-800">
                          Market Competition
                        </div>
                        <div className="text-sm text-purple-600">
                          Markets with 5+ providers show 23% lower average costs
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-gray-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Quote className="w-8 h-8 text-blue-600 flex-shrink-0 mt-2" />
                    <div className="flex-1">
                      <blockquote className="text-xl italic text-muted-foreground mb-6">
                        "HospitalFees.org's dataset enabled our team to conduct
                        the most comprehensive analysis of healthcare price
                        transparency to date. The data quality and coverage are
                        exceptional for academic research."
                      </blockquote>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="font-semibold">Dr. Maria Rodriguez</p>
                          <p className="text-sm text-muted-foreground">
                            Director, Health Economics Research
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Stanford University School of Medicine
                          </p>
                        </div>
                        <div className="mt-3 sm:mt-0 text-right">
                          <p className="text-sm text-blue-600 font-medium">
                            Published in NEJM
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Peer-reviewed research
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Power Your Research?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get access to the most comprehensive healthcare pricing dataset
                available for academic research
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() =>
                    (window.location.href = "/tools/data-explorer")
                  }
                  className="flex items-center gap-2"
                >
                  <Database className="w-5 h-5" />
                  Request Data Access
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                  onClick={() => (window.location.href = "/methodology")}
                >
                  <FileText className="w-5 h-5 mr-2" />
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer onNavigateToDisclosures={handleNavigateToDisclosures} />
    </div>
  );
}
