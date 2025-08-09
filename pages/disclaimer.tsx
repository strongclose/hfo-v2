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
  Shield,
  AlertTriangle,
  FileText,
  Users,
  ExternalLink,
  Scale,
  HelpCircle,
  Mail,
  CheckCircle2,
  Info,
  Building,
  Database,
} from "lucide-react";

export default function DisclaimerPage() {
  const [currentPage, setCurrentPage] = useState("disclaimer");

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

  const sections = [
    {
      id: "what-we-do",
      title: "What We Do",
      icon: Database,
      content:
        "HospitalFees.org aggregates publicly available pricing data from U.S. hospitals as required by the CMS Hospital Price Transparency Rule (2021). We present this data in consumer-friendly formats, searchable by procedure, provider, insurer, and geography.",
    },
    {
      id: "limitations",
      title: "Limitations of Our Data",
      icon: AlertTriangle,
      content:
        "Prices shown on this site are estimates derived from chargemasters and machine-readable files (MRFs) published by hospitals.",
      bulletPoints: [
        "These prices do not guarantee your final bill",
        "They may not include bundled services, physician fees, or non-covered charges",
        "Insurance negotiations and individual coverage can significantly affect your out-of-pocket costs",
      ],
    },
    {
      id: "no-advice",
      title: "No Medical or Financial Advice",
      icon: Users,
      content:
        "This site is not intended to provide medical, financial, or legal advice. Always consult with your healthcare provider, insurance plan, or a licensed professional for specific questions.",
    },
    {
      id: "no-endorsement",
      title: "No Endorsement or Ranking",
      icon: Scale,
      content:
        'HospitalFees.org does not endorse any provider, payer, or procedure. Any references to "lowest cost," "most transparent," or "best performing" are derived from published data and statistical calculations—not subjective opinion or promotional consideration.',
    },
    {
      id: "data-sources",
      title: "Data Source Attribution",
      icon: FileText,
      content:
        "All pricing information originates from hospital MRFs required by CMS and/or state transparency mandates.",
      link: {
        text: "Learn more about the federal rule here: CMS Hospital Price Transparency",
        url: "https://www.cms.gov/hospital-price-transparency",
      },
    },
    {
      id: "feedback",
      title: "Feedback & Corrections",
      icon: Mail,
      content:
        "Are you a hospital or provider who believes the data listed for your facility is incorrect? Contact us here. We welcome valid corrections and will review requests in good faith.",
      cta: {
        text: "Submit Correction Request",
        action: () => (window.location.href = "/contact"),
      },
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
        <section className="relative bg-gradient-to-b from-blue-50 via-white to-gray-50 py-16 lg:py-24">
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
                <span className="text-primary font-medium">Disclaimer</span>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    Legal Information
                  </Badge>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Transparency You Can Trust—With Clear Boundaries
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                  We are committed to empowering healthcare consumers through
                  transparent data—but it's important to understand the limits
                  of that data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
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
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <section.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-xl">{section.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {section.content}
                      </p>

                      {section.bulletPoints && (
                        <ul className="space-y-2 mb-4">
                          {section.bulletPoints.map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.link && (
                        <div className="mb-4">
                          <a
                            href={section.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            {section.link.text}
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      )}

                      {section.cta && (
                        <Button
                          onClick={section.cta.action}
                          className="flex items-center gap-2"
                        >
                          <Mail className="w-4 h-4" />
                          {section.cta.text}
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-12 bg-yellow-50 border-y border-yellow-200">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-yellow-300 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Info className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                        Important: This Information is for Educational Purposes
                        Only
                      </h3>
                      <p className="text-yellow-700 leading-relaxed">
                        The information provided on HospitalFees.org is intended
                        for educational and informational purposes only. It
                        should not be used as a substitute for professional
                        medical advice, diagnosis, or treatment. Always seek the
                        advice of your physician or other qualified health
                        provider with any questions you may have regarding a
                        medical condition.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 bg-gray-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">
                Related Information
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => (window.location.href = "/methodology")}
                >
                  <CardContent className="p-6 text-center">
                    <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      Our Methodology
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Learn how we collect, process, and analyze hospital
                      pricing data
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => (window.location.href = "/privacy-policy")}
                >
                  <CardContent className="p-6 text-center">
                    <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      Privacy Policy
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      How we collect, use, and protect your personal information
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => (window.location.href = "/terms-of-use")}
                >
                  <CardContent className="p-6 text-center">
                    <Scale className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Terms of Use</h3>
                    <p className="text-muted-foreground text-sm">
                      Legal terms and conditions for using our platform
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
