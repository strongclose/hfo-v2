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
import {
  ChevronRight,
  Database,
  Cpu,
  Calculator,
  Scale,
  AlertTriangle,
  Shield,
  ExternalLink,
  FileText,
  BarChart3,
  CheckCircle2,
  TrendingUp,
  Users,
  Building,
} from "lucide-react";

export default function MethodologyPage() {
  const [currentPage, setCurrentPage] = useState("methodology");

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

  const dataSources = [
    "Machine-readable files (MRFs) published by hospitals",
    "CMS-mandated standard charges",
    "Publicly accessible chargemasters or price transparency APIs",
    "Some supplemental data from state transparency programs",
  ];

  const processingSteps = [
    "Normalize data formats and units",
    "Extract common CPT and DRG codes",
    "Remove obvious duplicates or corrupted values",
    "Aggregate data at provider, region, and payer level",
  ];

  const calculations = [
    {
      title: "Median Prices",
      description:
        "We calculate median prices per procedure or payer, not averages (to avoid outlier distortion)",
      icon: Calculator,
    },
    {
      title: "Transparency Scores",
      description: "Based on presence of required fields and update freshness",
      icon: BarChart3,
    },
    {
      title: "Comparative Savings",
      description: "Benchmarking against national medians and regional peers",
      icon: TrendingUp,
    },
  ];

  const legalFramework = [
    "CMS Price Transparency Rule (45 CFR §180.50)",
    "First Amendment protections for the publication of public data",
    "Legal precedent supporting comparative transparency and public accountability",
  ];

  const sections = [
    {
      id: "data-sources",
      title: "Data Sources",
      icon: Database,
      content: "We source pricing data directly from:",
      list: dataSources,
    },
    {
      id: "data-processing",
      title: "Data Processing",
      icon: Cpu,
      content: "Upon collection, we:",
      list: processingSteps,
    },
    {
      id: "calculation-methods",
      title: "Calculation Methods",
      icon: Calculator,
      content: "We calculate:",
      customContent: calculations,
    },
    {
      id: "legal-use",
      title: "Legal Use & Fair Access",
      icon: Scale,
      content:
        "This data is publicly available under federal law and compiled in accordance with:",
      list: legalFramework,
    },
    {
      id: "margin-error",
      title: "Margin of Error & Data Gaps",
      icon: AlertTriangle,
      content:
        "Not all hospitals publish complete or current data. When data is missing, we:",
      list: [
        "Flag it visually",
        "Exclude it from scoring calculations",
        "Invite the provider to submit corrections",
      ],
    },
    {
      id: "why-legal",
      title: "Why This Is Legal",
      icon: Shield,
      content:
        "HospitalFees.org does not scrape, resell, or fabricate healthcare pricing information. Our role is to transform federally mandated public data into an accessible and informative experience. We protect ourselves and our users through responsible sourcing, transparency about limitations, and commitment to educational use.",
    },
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
                <span className="text-primary font-medium">Methodology</span>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    Data Methodology
                  </Badge>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  How We Gather and Analyze Hospital Pricing Data
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                  Understanding how we process data builds transparency—and
                  trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Pipeline Overview */}
        <section className="py-16 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Data Pipeline
              </h2>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Collection</h3>
                  <p className="text-sm text-muted-foreground">
                    Gather MRFs from 5,000+ hospitals
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Normalize and clean pricing data
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Calculate medians and transparency scores
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Presentation</h3>
                  <p className="text-sm text-muted-foreground">
                    Make data accessible to consumers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Methodology Sections */}
        <section className="py-16 bg-gray-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {sections.map((section, index) => (
                  <Card
                    key={section.id}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <section.icon className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-xl">{section.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {section.content}
                      </p>

                      {section.list && (
                        <ul className="space-y-2 mb-4">
                          {section.list.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.customContent && (
                        <div className="grid md:grid-cols-3 gap-4">
                          {section.customContent.map((calc, i) => (
                            <Card
                              key={i}
                              className="border-l-4 border-l-green-500"
                            >
                              <CardContent className="p-4">
                                <div className="flex items-center gap-3 mb-2">
                                  <calc.icon className="w-5 h-5 text-green-600" />
                                  <h4 className="font-semibold">
                                    {calc.title}
                                  </h4>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  {calc.description}
                                </p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Data Quality Metrics */}
        <section className="py-16 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Data Quality & Coverage
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      5,000+
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Hospitals Monitored
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      15K+
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Procedure Codes
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      Daily
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Data Updates
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      85%
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Compliance Rate
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Framework */}
        <section className="py-12 bg-blue-50 border-y border-blue-200">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-blue-300 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Scale className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">
                        Legal Foundation
                      </h3>
                      <p className="text-blue-700 leading-relaxed mb-4">
                        Our methodology is grounded in federal law and
                        constitutional protections. The CMS Hospital Price
                        Transparency Rule requires hospitals to publish their
                        prices, and the First Amendment protects our right to
                        republish and analyze this public data.
                      </p>
                      <a
                        href="https://www.cms.gov/hospital-price-transparency"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Read the CMS Rule
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-gray-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">
                Related Resources
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => (window.location.href = "/disclaimer")}
                >
                  <CardContent className="p-6 text-center">
                    <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Disclaimer</h3>
                    <p className="text-muted-foreground text-sm">
                      Important limitations and disclaimers about our data
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() =>
                    (window.location.href = "/tools/data-explorer")
                  }
                >
                  <CardContent className="p-6 text-center">
                    <Database className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      Data Explorer
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Interactive tool to explore our methodology in action
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() =>
                    (window.location.href = "/who-we-help/researchers")
                  }
                >
                  <CardContent className="p-6 text-center">
                    <FileText className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      For Researchers
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Academic and research applications of our data
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
