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
  Eye,
  Users,
  Heart,
  CheckCircle2,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";

export default function AccessibilityPage() {
  const [currentPage, setCurrentPage] = useState("accessibility");

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

  const commitments = [
    "Screen reader compatibility for all content and interactive elements",
    "Keyboard navigation support throughout the platform",
    "High contrast color schemes that meet WCAG AA standards",
    "Alt text for all images, charts, and visual content",
    "Clear heading structure and semantic HTML markup",
    "Accessible form labels and error messaging",
    "Responsive design that works across all devices and assistive technologies",
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
        <section className="relative bg-gradient-to-b from-purple-50 via-white to-gray-50 py-16 lg:py-24">
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
                <span className="text-primary font-medium">
                  Accessibility Statement
                </span>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-purple-600" />
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    Accessibility Commitment
                  </Badge>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Accessibility Statement
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                  We are committed to ensuring healthcare cost transparency is
                  accessible to everyone, regardless of ability or technology
                  used.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-16 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Heart className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="text-xl">
                      Our Accessibility Commitment
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    HospitalFees.org believes that healthcare cost information
                    should be accessible to all users. We strive to meet and
                    exceed Web Content Accessibility Guidelines (WCAG) 2.1 Level
                    AA standards.
                  </p>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg mb-4">
                      What We've Implemented:
                    </h3>
                    {commitments.map((commitment, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {commitment}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Standards & Guidelines */}
        <section className="py-16 bg-gray-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Standards We Follow
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-6 h-6 text-blue-600" />
                      <h3 className="text-lg font-semibold">
                        WCAG 2.1 Level AA
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      We follow Web Content Accessibility Guidelines to ensure
                      our content is perceivable, operable, understandable, and
                      robust for all users.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Eye className="w-6 h-6 text-green-600" />
                      <h3 className="text-lg font-semibold">Section 508</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Our platform complies with Section 508 standards for
                      federal accessibility, ensuring government and public
                      sector users can access our tools.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback & Contact */}
        <section className="py-16 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-purple-200 bg-purple-50">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4">Help Us Improve</h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    If you encounter any accessibility barriers or have
                    suggestions for improvement, please contact us. We're
                    committed to continuous improvement and value your feedback.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      accessibility@hospitalfees.org
                    </Button>
                    <Button
                      variant="secondary"
                      className="flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      1-800-HOSPITAL
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground mt-4">
                    We aim to respond to accessibility inquiries within 2
                    business days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* External Resources */}
        <section className="py-16 bg-gray-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">
                Accessibility Resources
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">
                      Web Accessibility Guidelines
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Learn more about WCAG standards and web accessibility best
                      practices.
                    </p>
                    <a
                      href="https://www.w3.org/WAI/WCAG21/quickref/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      WCAG Quick Reference
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">
                      Assistive Technology
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Information about screen readers and other assistive
                      technologies.
                    </p>
                    <a
                      href="https://webaim.org/resources/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      WebAIM Resources
                      <ExternalLink className="w-4 h-4" />
                    </a>
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
