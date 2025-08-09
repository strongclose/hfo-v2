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
import {
  ChevronRight,
  Users2,
  DollarSign,
  Shield,
  Heart,
  Search,
  Calculator,
  TrendingDown,
  CheckCircle2,
  Star,
  Quote,
  ArrowRight,
  Stethoscope,
  FileText,
  Phone,
} from "lucide-react";

export default function PatientsPage() {
  const [currentPage, setCurrentPage] = useState("whoWeHelpPatients");

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
  const handleCTAAssistant = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const valueCards = [
    {
      icon: DollarSign,
      title: "Save 60% on outpatient care",
      description:
        "Compare prices across thousands of providers and find the best value for your healthcare needs.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Shield,
      title: "Transparent insurance comparison",
      description:
        "Understand your coverage options and out-of-pocket costs before you need care.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Search,
      title: "Real pricing data for 5,000+ hospitals",
      description:
        "Access the largest database of transparent healthcare pricing information.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Heart,
      title: "Personalized cost guidance",
      description:
        "Get tailored recommendations based on your insurance, location, and medical needs.",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ];

  const howItWorksSteps = [
    {
      step: 1,
      title: "Search",
      description:
        "Enter your procedure, condition, or provider to explore pricing options.",
      icon: Search,
    },
    {
      step: 2,
      title: "Compare",
      description:
        "View side-by-side cost comparisons and quality ratings across providers.",
      icon: Calculator,
    },
    {
      step: 3,
      title: "Act",
      description:
        "Make informed decisions and potentially save thousands on your healthcare.",
      icon: CheckCircle2,
    },
  ];

  const testimonial = {
    quote:
      "I saved over $3,000 on my knee surgery by using HospitalFees.org to compare prices. The transparency gave me confidence to choose the right provider.",
    author: "Sarah M.",
    location: "Denver, CO",
    procedure: "Knee arthroscopy",
    savings: "$3,247",
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

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
                <span className="text-primary font-medium">For Patients</span>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Users2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      For Patients & Families
                    </Badge>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                    Take Control of Your Healthcare Costs
                  </h1>

                  <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                    Find transparent pricing, compare providers, and save money
                    on medical procedures with confidence.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      onClick={() =>
                        (window.location.href = "/search-procedure")
                      }
                      className="flex items-center gap-2"
                    >
                      <Search className="w-5 h-5" />
                      Compare Costs Now
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={() =>
                        (window.location.href = "/tools/cost-calculator")
                      }
                      className="flex items-center gap-2"
                    >
                      <Calculator className="w-5 h-5" />
                      Use Cost Calculator
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white rounded-lg shadow-lg p-6 border">
                    <div className="flex items-center gap-3 mb-4">
                      <Heart className="w-6 h-6 text-red-500" />
                      <span className="font-semibold">
                        Recent Patient Savings
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <div>
                          <p className="font-medium">Knee Replacement</p>
                          <p className="text-sm text-muted-foreground">
                            Boston, MA
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-600">
                            $12,400 saved
                          </p>
                          <p className="text-xs text-muted-foreground">
                            vs. avg price
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <div>
                          <p className="font-medium">MRI Scan</p>
                          <p className="text-sm text-muted-foreground">
                            Austin, TX
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-600">$890 saved</p>
                          <p className="text-xs text-muted-foreground">
                            vs. avg price
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                        <div>
                          <p className="font-medium">Colonoscopy</p>
                          <p className="text-sm text-muted-foreground">
                            Miami, FL
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-purple-600">
                            $650 saved
                          </p>
                          <p className="text-xs text-muted-foreground">
                            vs. avg price
                          </p>
                        </div>
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
                  Why Patients Choose HospitalFees.org
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Join thousands of patients who have taken control of their
                  healthcare costs
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

        {/* Tool Highlight */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Interactive Cost Calculator
                  </h2>
                  <p className="text-xl text-muted-foreground mb-6">
                    Get personalized cost estimates based on your insurance,
                    location, and procedure type. Our calculator uses real
                    pricing data from thousands of providers.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span>Instant estimates for 500+ procedures</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span>Factors in your specific insurance plan</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span>Shows potential savings opportunities</span>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    onClick={() =>
                      (window.location.href = "/tools/cost-calculator")
                    }
                    className="flex items-center gap-2"
                  >
                    <Calculator className="w-5 h-5" />
                    Try the Calculator
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border">
                  <div className="text-center">
                    <Calculator className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">
                      Sample Calculation
                    </h3>
                    <div className="space-y-3 text-left">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Procedure:
                        </span>
                        <span className="font-medium">Knee MRI</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Location:</span>
                        <span className="font-medium">Seattle, WA</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Insurance:
                        </span>
                        <span className="font-medium">Blue Cross PPO</span>
                      </div>
                      <div className="border-t pt-3 mt-3">
                        <div className="flex justify-between font-semibold">
                          <span>Your estimated cost:</span>
                          <span className="text-green-600">$450 - $890</span>
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>Potential savings:</span>
                          <span className="text-green-600">Up to $1,200</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  How It Works
                </h2>
                <p className="text-xl text-muted-foreground">
                  Three simple steps to healthcare savings
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {howItWorksSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
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
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.location}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.procedure}
                          </p>
                        </div>
                        <div className="mt-3 sm:mt-0 text-right">
                          <p className="text-2xl font-bold text-green-600">
                            {testimonial.savings}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Total savings
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

        {/* Related Tools */}
        <section className="py-16 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Explore Our Patient Tools
                </h2>
                <p className="text-xl text-muted-foreground">
                  Everything you need to navigate healthcare costs
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => (window.location.href = "/search-procedure")}
                >
                  <CardContent className="p-6 text-center">
                    <Stethoscope className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      Procedure Search
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Find and compare procedures by name, CPT code, or medical
                      specialty.
                    </p>
                    <Button variant="secondary" className="w-full">
                      Search Procedures
                    </Button>
                  </CardContent>
                </Card>

                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => (window.location.href = "/explore/insurance")}
                >
                  <CardContent className="p-6 text-center">
                    <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      Insurance Guide
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Compare insurance plans and understand your coverage
                      options.
                    </p>
                    <Button variant="secondary" className="w-full">
                      Explore Insurance
                    </Button>
                  </CardContent>
                </Card>

                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => (window.location.href = "/faq")}
                >
                  <CardContent className="p-6 text-center">
                    <FileText className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      Patient Resources
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Learn about healthcare costs, billing, and patient rights.
                    </p>
                    <Button variant="secondary" className="w-full">
                      View Resources
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Take Control of Your Healthcare Costs?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of patients who have saved money on medical
                procedures
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => (window.location.href = "/search-procedure")}
                  className="flex items-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  Start Comparing Costs
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                  onClick={() => (window.location.href = "/faq")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Support
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
