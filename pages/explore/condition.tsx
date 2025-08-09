"use client";

import { useState } from "react";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { StandardizedCTA } from "../../components/StandardizedCTA";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import {
  ChevronRight,
  Search,
  Heart,
  Brain,
  Bone,
  Eye,
  Stethoscope,
  Activity,
} from "lucide-react";

export default function ExploreConditionPage() {
  const [currentPage, setCurrentPage] = useState("exploreCondition");
  const [searchTerm, setSearchTerm] = useState("");

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

  const conditions = [
    {
      name: "Cardiovascular Conditions",
      icon: Heart,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      procedures: 45,
      avgCost: "$12,500",
      commonTreatments: [
        "Angioplasty",
        "Bypass Surgery",
        "Cardiac Catheterization",
      ],
    },
    {
      name: "Neurological Conditions",
      icon: Brain,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      procedures: 38,
      avgCost: "$8,900",
      commonTreatments: ["MRI Brain", "CT Head", "Neurological Surgery"],
    },
    {
      name: "Orthopedic Conditions",
      icon: Bone,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      procedures: 67,
      avgCost: "$15,200",
      commonTreatments: ["Joint Replacement", "Arthroscopy", "Fracture Repair"],
    },
    {
      name: "Vision & Eye Conditions",
      icon: Eye,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      procedures: 28,
      avgCost: "$3,400",
      commonTreatments: ["Cataract Surgery", "Retinal Surgery", "LASIK"],
    },
    {
      name: "Respiratory Conditions",
      icon: Activity,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      procedures: 34,
      avgCost: "$6,800",
      commonTreatments: ["Bronchoscopy", "Lung Surgery", "Sleep Studies"],
    },
    {
      name: "General Medicine",
      icon: Stethoscope,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      procedures: 89,
      avgCost: "$2,100",
      commonTreatments: ["Physical Exams", "Lab Tests", "Preventive Care"],
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
                <span className="text-primary font-medium">By Condition</span>
              </div>

              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Healthcare Costs by Medical Condition
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Explore treatment costs, procedures, and pricing data
                  organized by medical specialty and condition type.
                </p>
              </div>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search conditions, symptoms, or medical specialties..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Conditions */}
        <section className="py-12 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">
                Browse by Medical Specialty
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {conditions.map((condition, index) => (
                  <Card
                    key={index}
                    className={`hover:shadow-lg transition-all duration-300 cursor-pointer ${condition.borderColor} ${condition.bgColor}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 rounded-lg bg-white flex items-center justify-center`}
                        >
                          <condition.icon
                            className={`w-6 h-6 ${condition.color}`}
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">
                            {condition.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {condition.procedures} procedures available
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">
                            Average Cost:
                          </span>
                          <span className="font-semibold">
                            {condition.avgCost}
                          </span>
                        </div>

                        <div>
                          <p className="text-sm text-muted-foreground mb-2">
                            Common Treatments:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {condition.commonTreatments.map(
                              (treatment, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {treatment}
                                </Badge>
                              ),
                            )}
                          </div>
                        </div>
                      </div>

                      <Button variant="secondary" className="w-full">
                        Explore Treatments
                      </Button>
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
