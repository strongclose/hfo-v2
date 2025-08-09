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
  Baby,
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
  Calendar,
  FileText,
  Users,
} from "lucide-react";

export default function ExpectingParentsPage() {
  const [currentPage, setCurrentPage] = useState("whoWeHelpExpectingParents");

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
      icon: DollarSign,
      title: "Plan for delivery costs",
      description:
        "Compare hospital delivery packages and understand what your insurance covers for childbirth.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Calendar,
      title: "Prenatal care cost tracking",
      description:
        "Budget for regular checkups, ultrasounds, and prenatal testing throughout your pregnancy.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Shield,
      title: "Insurance optimization",
      description:
        "Understand maternity benefits and maximize your coverage for pregnancy and delivery.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Heart,
      title: "Newborn care preparation",
      description:
        "Plan for pediatric costs, NICU coverage, and your baby's first year of healthcare needs.",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ];

  const deliveryCosts = [
    {
      type: "Vaginal Delivery",
      averageCost: "$10,800",
      range: "$8,200 - $15,400",
      savings: "Up to $4,200",
    },
    {
      type: "C-Section",
      averageCost: "$16,200",
      range: "$12,800 - $22,100",
      savings: "Up to $6,800",
    },
    {
      type: "NICU Stay (per day)",
      averageCost: "$3,400",
      range: "$2,200 - $5,800",
      savings: "Up to $1,800",
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
        <section className="relative bg-gradient-to-b from-pink-50 via-white to-gray-50 py-16 lg:py-24">
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
                  For Expecting Parents
                </span>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                      <Baby className="w-6 h-6 text-pink-600" />
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      For Expecting Parents
                    </Badge>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                    Plan Your Baby's Arrival with Confidence
                  </h1>

                  <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                    Compare delivery costs, understand your insurance coverage,
                    and budget for your growing family's healthcare needs.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      onClick={() =>
                        (window.location.href = "/tools/cost-calculator")
                      }
                      className="flex items-center gap-2"
                    >
                      <Calculator className="w-5 h-5" />
                      Calculate Delivery Costs
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={() =>
                        (window.location.href = "/explore/insurance")
                      }
                      className="flex items-center gap-2"
                    >
                      <Shield className="w-5 h-5" />
                      Compare Maternity Plans
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white rounded-lg shadow-lg p-6 border">
                    <div className="flex items-center gap-3 mb-4">
                      <Heart className="w-6 h-6 text-pink-500" />
                      <span className="font-semibold">
                        Delivery Cost Ranges
                      </span>
                    </div>
                    <div className="space-y-4">
                      {deliveryCosts.map((delivery, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-3 bg-pink-50 rounded-lg"
                        >
                          <div>
                            <p className="font-medium">{delivery.type}</p>
                            <p className="text-sm text-muted-foreground">
                              {delivery.range}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-pink-600">
                              {delivery.averageCost}
                            </p>
                            <p className="text-xs text-green-600">
                              Save {delivery.savings}
                            </p>
                          </div>
                        </div>
                      ))}
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
                  Everything You Need for Your Baby's Arrival
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  From pregnancy planning to delivery and beyond
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

        {/* Pregnancy Timeline Tool */}
        <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Pregnancy Cost Timeline
                  </h2>
                  <p className="text-xl text-muted-foreground mb-6">
                    Track expected healthcare costs throughout your pregnancy
                    journey. Our timeline helps you budget for each trimester
                    and delivery.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span>
                        First trimester: Initial visits & testing ($800-1,200)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span>
                        Second trimester: Ultrasounds & monitoring ($600-900)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span>
                        Third trimester: Frequent visits & delivery prep
                        ($400-800)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span>
                        Delivery & postpartum: Hospital stay & recovery
                        ($8,000-22,000)
                      </span>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    onClick={() =>
                      (window.location.href = "/tools/cost-calculator")
                    }
                    className="flex items-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Plan Your Timeline
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border">
                  <div className="text-center">
                    <Baby className="w-16 h-16 text-pink-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">
                      Sample Pregnancy Budget
                    </h3>
                    <div className="space-y-3 text-left">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Prenatal care:
                        </span>
                        <span className="font-medium">$2,000 - $3,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Delivery:</span>
                        <span className="font-medium">$8,000 - $16,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Newborn care:
                        </span>
                        <span className="font-medium">$1,500 - $3,000</span>
                      </div>
                      <div className="border-t pt-3 mt-3">
                        <div className="flex justify-between font-semibold">
                          <span>Total estimated:</span>
                          <span className="text-pink-600">
                            $11,500 - $22,000
                          </span>
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>With good planning:</span>
                          <span className="text-green-600">Save 20-40%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Planning for Your Baby Today
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get personalized cost estimates and find the best care for your
                growing family
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() =>
                    (window.location.href = "/tools/cost-calculator")
                  }
                  className="flex items-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Calculate My Costs
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="border-white text-white hover:bg-white hover:text-pink-600"
                  onClick={() => (window.location.href = "/explore/insurance")}
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Find Maternity Coverage
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
