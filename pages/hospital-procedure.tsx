"use client";

import { useState } from "react";
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
import { Progress } from "../components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import {
  ArrowLeft,
  MapPin,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Info,
  Building,
  Shield,
  Clock,
  Users,
  BarChart3,
  FileText,
  Download,
  AlertTriangle,
  CheckCircle,
  Star,
  Calendar,
  Phone,
  Eye,
  Share2,
} from "lucide-react";

export default function HospitalProcedurePage() {
  const [selectedComparison, setSelectedComparison] = useState("county");
  const [selectedTimeframe, setSelectedTimeframe] = useState("current");
  const [showPhoneDialog, setShowPhoneDialog] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedInsurancePlan, setSelectedInsurancePlan] = useState("");
  const [isSubmittingPhone, setIsSubmittingPhone] = useState(false);

  const handleNavigateToHomepage = () => (window.location.href = "/");
  const handleNavigateToInternalSearch = () =>
    (window.location.href = "/internal-search");
  const handleNavigateToComparePrices = () =>
    (window.location.href = "/compare-prices");
  const handleNavigateToPriceComparison = () =>
    (window.location.href = "/price-comparison");
  const handleNavigateToSearchByProcedure = () =>
    (window.location.href = "/search-procedure");
  const handleNavigateToFAQ = () => (window.location.href = "/faq");
  const handleNavigateToBlog = () => (window.location.href = "/blog");
  const handleNavigateToExplore = () => (window.location.href = "/explore");
  const handleNavigateToExploreByLocation = () =>
    (window.location.href = "/locations");
  const handleNavigateToInsights = () => (window.location.href = "/insights");
  const handleNavigateToPatientResources = () =>
    (window.location.href = "/learn");
  const handleNavigateToTools = () => (window.location.href = "/tools");
  const handleNavigateToCommunity = () => (window.location.href = "/community");
  const handleNavigateToProfessionals = () =>
    (window.location.href = "/professionals");
  const handleNavigateToDisclosures = () =>
    (window.location.href = "/disclosures");
  const handleNavigateToHospital = () => (window.location.href = "/hospital");
  const handleCTAAssistant = () => (window.location.href = "/tools");

  // Phone number dialog handlers
  const handleGetCoverage = (insurancePlan: string) => {
    setSelectedInsurancePlan(insurancePlan);
    setShowPhoneDialog(true);
  };

  const handlePhoneSubmit = async () => {
    if (!phoneNumber.trim()) return;

    setIsSubmittingPhone(true);

    // Simulate API call to schedule AI phone service
    try {
      // Here you would integrate with your AI phone service API
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Success handling
      alert(
        `Great! Our AI specialist will call you at ${phoneNumber} within the next 15 minutes to help you understand your coverage for ${selectedInsurancePlan}.`,
      );

      setShowPhoneDialog(false);
      setPhoneNumber("");
      setSelectedInsurancePlan("");
    } catch (error) {
      alert(
        "Sorry, there was an error scheduling your call. Please try again.",
      );
    } finally {
      setIsSubmittingPhone(false);
    }
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const phoneNumber = value.replace(/\D/g, "");

    // Format as (XXX) XXX-XXXX
    if (phoneNumber.length <= 3) return phoneNumber;
    if (phoneNumber.length <= 6)
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedNumber);
  };

  // Sample data
  const procedure = {
    name: "MRI Brain (with and without contrast)",
    cptCode: "70553",
    category: "Diagnostic Imaging",
    description:
      "Magnetic resonance imaging of the brain using contrast material to enhance visualization of structures and detect abnormalities.",
    duration: "45-60 minutes",
    preparation:
      "Remove metal objects, inform of implants, may require fasting",
    hospitalPrice: 1850,
    lastUpdated: "2024-01-15",
  };

  const hospital = {
    name: "Boston Medical Center",
    address: "1 Boston Medical Center Pl, Boston, MA 02118",
    phone: "(617) 638-8000",
    county: "Suffolk County",
    state: "Massachusetts",
  };

  const insuranceBreakdown = [
    {
      payer: "Blue Cross Blue Shield MA",
      inNetwork: true,
      negotiatedRate: 1245,
      patientCopay: 125,
      deductible: 250,
      coinsurance: "20%",
      estimatedOOP: 374,
      tier: "Tier 1",
    },
    {
      payer: "Aetna",
      inNetwork: true,
      negotiatedRate: 1320,
      patientCopay: 150,
      deductible: 500,
      coinsurance: "15%",
      estimatedOOP: 348,
      tier: "Tier 1",
    },
    {
      payer: "Harvard Pilgrim",
      inNetwork: true,
      negotiatedRate: 1180,
      patientCopay: 100,
      deductible: 300,
      coinsurance: "25%",
      estimatedOOP: 395,
      tier: "Tier 1",
    },
    {
      payer: "Cigna",
      inNetwork: true,
      negotiatedRate: 1420,
      patientCopay: 175,
      deductible: 750,
      coinsurance: "20%",
      estimatedOOP: 459,
      tier: "Tier 2",
    },
    {
      payer: "UnitedHealthcare",
      inNetwork: false,
      negotiatedRate: null,
      patientCopay: null,
      deductible: 1000,
      coinsurance: "30%",
      estimatedOOP: 1555,
      tier: "Out of Network",
    },
    {
      payer: "Tufts Health Plan",
      inNetwork: true,
      negotiatedRate: 1275,
      patientCopay: 125,
      deductible: 400,
      coinsurance: "20%",
      estimatedOOP: 380,
      tier: "Tier 1",
    },
  ];

  const priceComparisons = {
    county: {
      name: "Suffolk County, MA",
      average: 2240,
      median: 2100,
      range: "$1,600 - $3,200",
      hospitals: 12,
      position: "18% below average",
      trend: "down",
    },
    state: {
      name: "Massachusetts",
      average: 2450,
      median: 2300,
      range: "$1,400 - $4,100",
      hospitals: 67,
      position: "24% below average",
      trend: "down",
    },
    federal: {
      name: "United States",
      average: 2850,
      median: 2600,
      range: "$900 - $6,500",
      hospitals: 3240,
      position: "35% below average",
      trend: "down",
    },
  };

  const qualityMetrics = [
    {
      metric: "Equipment Quality",
      score: 95,
      description: "3T MRI scanner with latest imaging technology",
    },
    {
      metric: "Radiologist Rating",
      score: 92,
      description: "Board-certified radiologists with subspecialty training",
    },
    {
      metric: "Patient Experience",
      score: 89,
      description: "Based on patient satisfaction surveys",
    },
    {
      metric: "Turnaround Time",
      score: 87,
      description: "Average time from exam to report",
    },
  ];

  const recentTrends = [
    { period: "Q4 2024", price: 1850, change: 0 },
    { period: "Q3 2024", price: 1850, change: 0 },
    { period: "Q2 2024", price: 1920, change: -70 },
    { period: "Q1 2024", price: 1980, change: -60 },
    { period: "Q4 2023", price: 2050, change: -70 },
    { period: "Q3 2023", price: 2120, change: -70 },
  ];

  const alternativeProviders = [
    {
      name: "Boston Imaging Center",
      type: "Outpatient Facility",
      distance: "2.3 miles",
      price: 1420,
      savings: 430,
      rating: 4.6,
      inNetwork: true,
    },
    {
      name: "Cambridge Health Alliance",
      type: "Hospital",
      distance: "4.1 miles",
      price: 1680,
      savings: 170,
      rating: 4.4,
      inNetwork: true,
    },
    {
      name: "Massachusetts General Hospital",
      type: "Academic Medical Center",
      distance: "1.8 miles",
      price: 2890,
      savings: -1040,
      rating: 4.9,
      inNetwork: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
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
        currentPage="hospital"
      />

      <div className="flex-1">
        {/* Breadcrumb Navigation */}
        <section className="bg-gray-50 py-4">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <button
                  onClick={handleNavigateToHospital}
                  className="flex items-center gap-1 hover:text-primary"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {hospital.name}
                </button>
                <span>/</span>
                <span className="text-foreground font-medium">
                  {procedure.name}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Procedure Header */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-12">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Procedure Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="w-8 h-8 text-primary" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-3xl md:text-4xl font-bold">
                          {procedure.name}
                        </h1>
                        <Badge variant="secondary">CPT {procedure.cptCode}</Badge>
                      </div>

                      <p className="text-lg text-muted-foreground mb-3">
                        {procedure.category}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {procedure.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">
                            Duration:{" "}
                          </span>
                          <span className="font-medium">
                            {procedure.duration}
                          </span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">
                            Last Updated:{" "}
                          </span>
                          <span className="font-medium">
                            {procedure.lastUpdated}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hospital Info */}
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{hospital.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {hospital.address}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="secondary" size="sm">
                            <Phone className="w-3 h-3 mr-1" />
                            Call
                          </Button>
                          <Button variant="secondary" size="sm">
                            <MapPin className="w-3 h-3 mr-1" />
                            Directions
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Price Summary */}
                <div>
                  <Card className="border-primary">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-primary" />
                        Hospital Price
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-primary mb-2">
                        ${procedure.hospitalPrice.toLocaleString()}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Base facility price (before insurance)
                      </p>

                      <div className="space-y-3">
                        <Button className="w-full">
                          <Calendar className="w-4 h-4 mr-2" />
                          Schedule Procedure
                        </Button>
                        <Button variant="secondary" className="w-full">
                          <FileText className="w-4 h-4 mr-2" />
                          Get Price Quote
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <Tabs defaultValue="insurance" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="insurance">Insurance Costs</TabsTrigger>
                  <TabsTrigger value="comparisons">
                    Price Comparisons
                  </TabsTrigger>
                  <TabsTrigger value="quality">Quality Metrics</TabsTrigger>
                  <TabsTrigger value="trends">Price Trends</TabsTrigger>
                  <TabsTrigger value="alternatives">Alternatives</TabsTrigger>
                </TabsList>

                <TabsContent value="insurance" className="mt-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold">
                        Insurance Coverage Breakdown
                      </h3>
                      <div className="text-sm text-muted-foreground">
                        Estimated out-of-pocket costs by insurance plan
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {insuranceBreakdown.map((insurance, index) => (
                        <Card
                          key={index}
                          className={`${!insurance.inNetwork ? "border-red-200 bg-red-50" : ""}`}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <Shield
                                  className={`w-5 h-5 ${insurance.inNetwork ? "text-green-600" : "text-red-600"}`}
                                />
                                <div>
                                  <h4 className="font-semibold text-lg">
                                    {insurance.payer}
                                  </h4>
                                  <div className="flex items-center gap-2">
                                    <Badge
                                      variant={
                                        insurance.inNetwork
                                          ? "default"
                                          : "destructive"
                                      }
                                    >
                                      {insurance.inNetwork
                                        ? "In Network"
                                        : "Out of Network"}
                                    </Badge>
                                    <Badge variant="secondary">
                                      {insurance.tier}
                                    </Badge>
                                  </div>
                                </div>
                              </div>

                              <div className="text-right">
                                <div className="text-2xl font-bold text-primary">
                                  ${insurance.estimatedOOP.toLocaleString()}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Est. Out-of-Pocket
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div>
                                <p className="text-muted-foreground">
                                  Negotiated Rate
                                </p>
                                <p className="font-semibold">
                                  {insurance.negotiatedRate
                                    ? `$${insurance.negotiatedRate.toLocaleString()}`
                                    : "N/A"}
                                </p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Copay</p>
                                <p className="font-semibold">
                                  {insurance.patientCopay
                                    ? `$${insurance.patientCopay}`
                                    : "N/A"}
                                </p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">
                                  Deductible
                                </p>
                                <p className="font-semibold">
                                  ${insurance.deductible}
                                </p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">
                                  Coinsurance
                                </p>
                                <p className="font-semibold">
                                  {insurance.coinsurance}
                                </p>
                              </div>
                            </div>

                            {!insurance.inNetwork && (
                              <div className="mt-4 p-3 bg-red-100 border border-red-200 rounded-lg">
                                <div className="flex items-start gap-2">
                                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5" />
                                  <div className="text-sm text-red-800">
                                    <strong>Out of Network:</strong> You may be
                                    responsible for additional charges beyond
                                    the estimated out-of-pocket cost shown
                                    above.
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Get Coverage Button */}
                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <Button
                                onClick={() =>
                                  handleGetCoverage(insurance.payer)
                                }
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                                size="sm"
                              >
                                <Phone className="w-4 h-4 mr-2" />
                                Get Coverage Details
                              </Button>
                              <p className="text-xs text-muted-foreground mt-2 text-center">
                                Speak with an AI specialist about your specific
                                coverage
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-blue-800 mb-1">
                            Important Note
                          </h4>
                          <p className="text-sm text-blue-700">
                            These are estimates based on typical plan designs.
                            Your actual cost may vary depending on your specific
                            plan details, deductible status, and whether you've
                            met your annual out-of-pocket maximum.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="comparisons" className="mt-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold">
                        Geographic Price Comparisons
                      </h3>
                      <select
                        value={selectedComparison}
                        onChange={(e) => setSelectedComparison(e.target.value)}
                        className="px-3 py-2 border rounded-md"
                      >
                        <option value="county">County Level</option>
                        <option value="state">State Level</option>
                        <option value="federal">National Level</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      {Object.entries(priceComparisons).map(([level, data]) => (
                        <Card
                          key={level}
                          className={`${selectedComparison === level ? "border-primary bg-primary/5" : ""}`}
                        >
                          <CardContent className="p-6">
                            <h4 className="font-semibold text-lg mb-4">
                              {data.name}
                            </h4>

                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">
                                  This Hospital
                                </span>
                                <span className="font-bold text-2xl text-primary">
                                  ${procedure.hospitalPrice.toLocaleString()}
                                </span>
                              </div>

                              <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">
                                  Average
                                </span>
                                <span className="font-semibold">
                                  ${data.average.toLocaleString()}
                                </span>
                              </div>

                              <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">
                                  Median
                                </span>
                                <span className="font-semibold">
                                  ${data.median.toLocaleString()}
                                </span>
                              </div>

                              <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">
                                  Range
                                </span>
                                <span className="font-semibold">
                                  {data.range}
                                </span>
                              </div>

                              <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">
                                  Hospitals
                                </span>
                                <span className="font-semibold">
                                  {data.hospitals}
                                </span>
                              </div>
                            </div>

                            <div className="mt-4 pt-4 border-t">
                              <div className="flex items-center gap-2">
                                {data.trend === "down" ? (
                                  <TrendingDown className="w-4 h-4 text-green-600" />
                                ) : (
                                  <TrendingUp className="w-4 h-4 text-red-600" />
                                )}
                                <span
                                  className={`font-semibold ${data.trend === "down" ? "text-green-600" : "text-red-600"}`}
                                >
                                  {data.position}
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Price Distribution Chart</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                            <p className="text-muted-foreground">
                              Interactive price distribution chart would be
                              displayed here
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="quality" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Quality Metrics</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {qualityMetrics.map((metric, index) => (
                            <div key={index}>
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium">
                                  {metric.metric}
                                </span>
                                <span className="font-bold">
                                  {metric.score}%
                                </span>
                              </div>
                              <Progress
                                value={metric.score}
                                className="h-2 mb-1"
                              />
                              <p className="text-xs text-muted-foreground">
                                {metric.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Procedure Preparation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                            <div>
                              <h4 className="font-semibold">
                                Before Your Procedure
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {procedure.preparation}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                            <div>
                              <h4 className="font-semibold">Duration</h4>
                              <p className="text-sm text-muted-foreground">
                                {procedure.duration}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <FileText className="w-5 h-5 text-purple-600 mt-0.5" />
                            <div>
                              <h4 className="font-semibold">What to Expect</h4>
                              <p className="text-sm text-muted-foreground">
                                You'll lie on a table that slides into the MRI
                                machine. The procedure is painless but can be
                                noisy. You'll need to remain still during
                                imaging.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="trends" className="mt-8">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Price History</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {recentTrends.map((trend, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                              <span className="font-medium">
                                {trend.period}
                              </span>
                              <div className="flex items-center gap-3">
                                <span className="font-semibold">
                                  ${trend.price.toLocaleString()}
                                </span>
                                {trend.change !== 0 && (
                                  <div
                                    className={`flex items-center gap-1 ${trend.change < 0 ? "text-green-600" : "text-red-600"}`}
                                  >
                                    {trend.change < 0 ? (
                                      <TrendingDown className="w-4 h-4" />
                                    ) : (
                                      <TrendingUp className="w-4 h-4" />
                                    )}
                                    <span className="text-sm font-medium">
                                      ${Math.abs(trend.change)}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Market Analysis</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <TrendingDown className="w-5 h-5 text-green-600" />
                              <span className="font-semibold text-green-800">
                                Price Trend: Decreasing
                              </span>
                            </div>
                            <p className="text-sm text-green-700">
                              This hospital's prices for this procedure have
                              decreased by 9.8% over the past year, making it
                              increasingly competitive in the market.
                            </p>
                          </div>

                          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <BarChart3 className="w-5 h-5 text-blue-600" />
                              <span className="font-semibold text-blue-800">
                                Market Position
                              </span>
                            </div>
                            <p className="text-sm text-blue-700">
                              Currently priced 35% below the national average,
                              ranking in the top 20% of hospitals for value on
                              this procedure.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="alternatives" className="mt-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">
                      Alternative Providers
                    </h3>

                    <div className="grid gap-4">
                      {alternativeProviders.map((provider, index) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h4 className="text-lg font-semibold">
                                    {provider.name}
                                  </h4>
                                  <Badge variant="secondary">
                                    {provider.type}
                                  </Badge>
                                  {provider.inNetwork && (
                                    <Badge className="bg-green-100 text-green-800">
                                      In Network
                                    </Badge>
                                  )}
                                </div>

                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                  <div className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    <span>{provider.distance}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    <span>{provider.rating}</span>
                                  </div>
                                </div>

                                <div className="flex items-center gap-4">
                                  <div>
                                    <span className="text-sm text-muted-foreground">
                                      Price:{" "}
                                    </span>
                                    <span className="font-semibold text-lg">
                                      ${provider.price.toLocaleString()}
                                    </span>
                                  </div>
                                  <div
                                    className={`flex items-center gap-1 ${provider.savings > 0 ? "text-green-600" : "text-red-600"}`}
                                  >
                                    {provider.savings > 0 ? (
                                      <>
                                        <TrendingDown className="w-4 h-4" />
                                        <span className="font-semibold">
                                          Save ${provider.savings}
                                        </span>
                                      </>
                                    ) : (
                                      <>
                                        <TrendingUp className="w-4 h-4" />
                                        <span className="font-semibold">
                                          ${Math.abs(provider.savings)} more
                                        </span>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-col gap-2">
                                <Button variant="secondary" size="sm">
                                  <Eye className="w-3 h-3 mr-1" />
                                  View Details
                                </Button>
                                <Button variant="secondary" size="sm">
                                  <Phone className="w-3 h-3 mr-1" />
                                  Contact
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <StandardizedCTA
          onCTAAssistant={handleCTAAssistant}
          onNavigateToComparePrices={handleNavigateToComparePrices}
          onNavigateToInternalSearch={handleNavigateToInternalSearch}
        />
      </div>

      <Footer onNavigateToDisclosures={handleNavigateToDisclosures} />

      {/* Phone Number Dialog */}
      <Dialog open={showPhoneDialog} onOpenChange={setShowPhoneDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-600" />
              Get Coverage Details
            </DialogTitle>
            <DialogDescription>
              Our AI specialist will call you to explain your specific coverage
              details for <strong>{selectedInsurancePlan}</strong> and help you
              understand your exact out-of-pocket costs.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={phoneNumber}
                onChange={handlePhoneChange}
                maxLength={14}
                className="text-center text-lg"
              />
              <p className="text-xs text-muted-foreground">
                We'll call you within 15 minutes during business hours (9 AM - 6
                PM ET)
              </p>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-blue-600 mt-0.5" />
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">What to expect:</p>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li>5-10 minute call with an AI insurance specialist</li>
                    <li>Explanation of your specific plan benefits</li>
                    <li>Exact out-of-pocket cost calculations</li>
                    <li>Tips for maximizing your insurance coverage</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="secondary"
                onClick={() => setShowPhoneDialog(false)}
                className="flex-1"
                disabled={isSubmittingPhone}
              >
                Cancel
              </Button>
              <Button
                onClick={handlePhoneSubmit}
                disabled={
                  !phoneNumber.trim() ||
                  phoneNumber.length < 14 ||
                  isSubmittingPhone
                }
                className="flex-1"
              >
                {isSubmittingPhone ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Scheduling...
                  </div>
                ) : (
                  <>
                    <Phone className="w-4 h-4 mr-2" />
                    Schedule Call
                  </>
                )}
              </Button>
            </div>

            <div className="text-xs text-muted-foreground text-center">
              By providing your phone number, you consent to receive calls from
              our AI service.
              <br />
              Standard message and data rates may apply.
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
