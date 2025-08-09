"use client";

import { useState, useEffect } from "react";
import { Navigation } from "../components/Header";
import { Footer } from "../components/Footer";
import { StandardizedCTA } from "../components/StandardizedCTA";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  MapPin,
  Phone,
  Globe,
  Star,
  Shield,
  Clock,
  Users,
  Award,
  Heart,
  Navigation,
  ChevronRight,
  TrendingDown,
  TrendingUp,
  DollarSign,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Calendar,
  FileText,
  Building,
  Stethoscope,
} from "lucide-react";

export default function HospitalDetailPage() {
  const [currentPage, setCurrentPage] = useState("hospitalDetail");

  // This would typically come from URL params or API
  const hospital = {
    id: "oakland-general",
    name: "Oakland General Hospital",
    address: "789 Telegraph Ave, Oakland, CA 94612",
    phone: "(510) 555-0123",
    website: "www.oaklandgeneral.org",
    rating: 4.5,
    transparencyScore: 94,
    patientSatisfaction: 4.6,
    established: "1952",
    beds: 420,
    employees: 2800,
    emergencyRoom: true,
    trauma: "Level II",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800",
    description:
      "Oakland General Hospital is a leading healthcare provider serving the East Bay community for over 70 years. We specialize in comprehensive medical care with state-of-the-art facilities and compassionate staff.",
    certifications: ["Joint Commission", "Magnet Recognition", "ISO 9001"],
    acceptedPlans: [
      "Aetna",
      "Blue Cross Blue Shield",
      "Cigna",
      "Kaiser Permanente",
      "UnitedHealthcare",
      "Medicare",
      "Medicaid",
    ],
    specialties: [
      { name: "Cardiology", procedures: 45, avgPrice: "$8,500" },
      { name: "Orthopedics", procedures: 38, avgPrice: "$12,200" },
      { name: "Maternity Care", procedures: 22, avgPrice: "$9,800" },
      { name: "Emergency Medicine", procedures: 67, avgPrice: "$3,200" },
      { name: "Radiology", procedures: 89, avgPrice: "$1,850" },
      { name: "Surgery", procedures: 156, avgPrice: "$15,600" },
    ],
    commonProcedures: [
      {
        name: "MRI Brain",
        cpt: "70551",
        price: 2400,
        trend: "down",
        savings: "23%",
      },
      {
        name: "CT Scan Chest",
        cpt: "71260",
        price: 1850,
        trend: "stable",
        savings: "12%",
      },
      {
        name: "Hip Replacement",
        cpt: "27130",
        price: 42000,
        trend: "down",
        savings: "18%",
      },
      {
        name: "Colonoscopy",
        cpt: "45380",
        price: 1200,
        trend: "up",
        savings: "8%",
      },
      {
        name: "Mammogram",
        cpt: "77067",
        price: 280,
        trend: "stable",
        savings: "15%",
      },
      {
        name: "Blood Panel",
        cpt: "80053",
        price: 180,
        trend: "down",
        savings: "25%",
      },
    ],
    qualityMetrics: {
      readmissionRate: "8.2%",
      infectionRate: "0.8%",
      mortalityRate: "2.1%",
      patientExperience: "4.6/5",
      safetyGrade: "A",
    },
    billingInfo: {
      financialAssistance: true,
      paymentPlans: true,
      priceTransparency: "Full disclosure",
      estimateAccuracy: "High (±5%)",
    },
  };

  const handleNavigateToHomepage = () => (window.location.href = "/");
  const handleNavigateToInternalSearch = () =>
    (window.location.href = "/search");
  const handleNavigateToComparePrices = () => (window.location.href = "/");
  const handleNavigateToPriceComparison = () =>
    (window.location.href = "/hospital-procedure");
  const handleNavigateToSearchByProcedure = () =>
    (window.location.href = "/search-procedure");
  const handleNavigateToFAQ = () => (window.location.href = "/faq");
  const handleNavigateToBlog = () => setCurrentPage("blog");
  const handleNavigateToExplore = () => setCurrentPage("explore");
  const handleNavigateToExploreByLocation = () =>
    (window.location.href = "/locations");
  const handleNavigateToInsights = () => (window.location.href = "/insights");
  const handleNavigateToPatientResources = () =>
    (window.location.href = "/learn");
  const handleNavigateToTools = () => (window.location.href = "/tools");
  const handleNavigateToCommunity = () => (window.location.href = "/community");
  const handleNavigateToProfessionals = () =>
    (window.location.href = "/professionals");
  const handleNavigateToDisclosures = () => setCurrentPage("disclosures");
  const handleCTAAssistant = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

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
        <section className="bg-white py-12">
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
                <button
                  onClick={handleNavigateToExploreByLocation}
                  className="hover:text-primary transition-colors"
                >
                  Locations
                </button>
                <ChevronRight className="w-4 h-4 inline mx-2" />
                <span className="text-primary font-medium">
                  {hospital.name}
                </span>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-6 mb-6">
                    <img
                      src={hospital.image}
                      alt={hospital.name}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h1 className="text-3xl font-bold mb-2">
                        {hospital.name}
                      </h1>
                      <div className="flex items-center gap-4 text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{hospital.address}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="font-semibold">
                            {hospital.rating}/5
                          </span>
                          <span className="text-muted-foreground">
                            ({hospital.patientSatisfaction}/5 satisfaction)
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4 text-blue-600" />
                          <span className="font-semibold">
                            {hospital.transparencyScore}%
                          </span>
                          <span className="text-muted-foreground">
                            transparency
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {hospital.description}
                  </p>

                  {/* Quick Stats */}
                  <div className="grid md:grid-cols-4 gap-4 mb-8">
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium">Established</span>
                      </div>
                      <div className="text-2xl font-bold">
                        {hospital.established}
                      </div>
                    </Card>
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium">Beds</span>
                      </div>
                      <div className="text-2xl font-bold">{hospital.beds}</div>
                    </Card>
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Heart className="w-4 h-4 text-red-600" />
                        <span className="text-sm font-medium">Staff</span>
                      </div>
                      <div className="text-2xl font-bold">
                        {hospital.employees.toLocaleString()}
                      </div>
                    </Card>
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-medium">
                          Trauma Level
                        </span>
                      </div>
                      <div className="text-2xl font-bold">
                        {hospital.trauma}
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Contact & Quick Actions */}
                <div className="space-y-6">
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <a
                          href={`tel:${hospital.phone}`}
                          className="hover:text-primary transition-colors"
                        >
                          {hospital.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-4 h-4 text-muted-foreground" />
                        <a
                          href={`https://${hospital.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          {hospital.website}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Navigation className="w-4 h-4 text-muted-foreground" />
                        <button className="hover:text-primary transition-colors">
                          Get Directions
                        </button>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">Accepted Insurance</h3>
                    <div className="flex flex-wrap gap-2">
                      {hospital.acceptedPlans.map((plan, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {plan}
                        </Badge>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">Certifications</h3>
                    <div className="space-y-2">
                      {hospital.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-yellow-600" />
                          <span className="text-sm">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Information Tabs */}
        <section className="py-12">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <Tabs defaultValue="procedures" className="space-y-8">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="procedures">
                    Procedures & Pricing
                  </TabsTrigger>
                  <TabsTrigger value="specialties">Specialties</TabsTrigger>
                  <TabsTrigger value="quality">Quality Metrics</TabsTrigger>
                  <TabsTrigger value="billing">Billing Info</TabsTrigger>
                </TabsList>

                <TabsContent value="procedures" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5" />
                        Common Procedures & Pricing
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        {hospital.commonProcedures.map((proc, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-1">
                                <h4 className="font-semibold">{proc.name}</h4>
                                <Badge variant="secondary" className="text-xs">
                                  CPT {proc.cpt}
                                </Badge>
                                {proc.trend === "down" && (
                                  <TrendingDown className="w-4 h-4 text-green-600" />
                                )}
                                {proc.trend === "up" && (
                                  <TrendingUp className="w-4 h-4 text-red-600" />
                                )}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {proc.savings} below average
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold">
                                ${proc.price.toLocaleString()}
                              </div>
                              <Button
                                variant="tertiary"
                                size="sm"
                                className="mt-2"
                              >
                                View Details
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="specialties" className="space-y-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hospital.specialties.map((specialty, index) => (
                      <Card key={index} className="p-6">
                        <h3 className="font-semibold mb-3">{specialty.name}</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Procedures Available:
                            </span>
                            <span className="font-medium">
                              {specialty.procedures}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Avg. Price:
                            </span>
                            <span className="font-medium">
                              {specialty.avgPrice}
                            </span>
                          </div>
                        </div>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="w-full mt-4"
                        >
                          <Stethoscope className="w-4 h-4 mr-2" />
                          View Procedures
                        </Button>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="quality" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6">
                      <h3 className="font-semibold mb-4">
                        Patient Safety Metrics
                      </h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Safety Grade</span>
                          <Badge className="bg-green-100 text-green-800">
                            {hospital.qualityMetrics.safetyGrade}
                          </Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Readmission Rate</span>
                          <span className="font-medium">
                            {hospital.qualityMetrics.readmissionRate}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Infection Rate</span>
                          <span className="font-medium">
                            {hospital.qualityMetrics.infectionRate}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Mortality Rate</span>
                          <span className="font-medium">
                            {hospital.qualityMetrics.mortalityRate}
                          </span>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h3 className="font-semibold mb-4">Patient Experience</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Overall Rating</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="font-medium">
                              {hospital.qualityMetrics.patientExperience}
                            </span>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Based on patient surveys and feedback from the past 12
                          months.
                        </div>
                      </div>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="billing" className="space-y-6">
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">
                      Billing & Financial Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          {hospital.billingInfo.financialAssistance ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                          ) : (
                            <AlertTriangle className="w-5 h-5 text-orange-600" />
                          )}
                          <span>Financial Assistance Available</span>
                        </div>
                        <div className="flex items-center gap-3">
                          {hospital.billingInfo.paymentPlans ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                          ) : (
                            <AlertTriangle className="w-5 h-5 text-orange-600" />
                          )}
                          <span>Payment Plans Offered</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Price Transparency</span>
                          <span className="font-medium">
                            {hospital.billingInfo.priceTransparency}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Estimate Accuracy</span>
                          <span className="font-medium">
                            {hospital.billingInfo.estimateAccuracy}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <StandardizedCTA onCTAAssistant={handleCTAAssistant} />
      </div>

      <Footer onNavigateToDisclosures={handleNavigateToDisclosures} />
    </div>
  );
}
