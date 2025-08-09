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
  MapPin,
  Phone,
  Globe,
  Star,
  Shield,
  Clock,
  Users,
  Award,
  Building,
  Heart,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Info,
  Navigation,
  Mail,
  Calendar,
  CheckCircle,
  AlertTriangle,
  FileText,
  BarChart3,
  Eye,
  Share2,
  Bookmark,
  Filter,
} from "lucide-react";

interface HospitalPageProps {
  onViewProcedure?: () => void;
}

export default function HospitalPage({ onViewProcedure }: HospitalPageProps) {
  const [selectedProcedure, setSelectedProcedure] = useState("all");
  const [selectedTimeRange, setSelectedTimeRange] = useState("6months");

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
  const handleCTAAssistant = () => (window.location.href = "/tools");

  // Sample hospital data
  const hospital = {
    name: "Boston Medical Center",
    address: "1 Boston Medical Center Pl, Boston, MA 02118",
    phone: "(617) 638-8000",
    website: "bmc.org",
    type: "Academic Medical Center",
    beds: 514,
    founded: 1996,
    transparencyScore: 96,
    overallRating: 4.8,
    totalReviews: 1247,
    priceRange: "Below Average",
    verified: true,
    features: [
      "Level I Trauma Center",
      "Teaching Hospital",
      "Research Facility",
      "Charity Care",
    ],
    certifications: [
      "Joint Commission",
      "Magnet Recognition",
      "DNV Accreditation",
    ],
  };

  const keyMetrics = [
    {
      title: "Transparency Score",
      value: "96%",
      change: "+4%",
      trend: "up",
      description: "Price transparency compliance",
      icon: Shield,
      color: "text-green-600",
    },
    {
      title: "Patient Rating",
      value: "4.8",
      change: "+0.2",
      trend: "up",
      description: "Average patient satisfaction",
      icon: Star,
      color: "text-yellow-600",
    },
    {
      title: "Price Level",
      value: "12% Below",
      change: "+2%",
      trend: "up",
      description: "Compared to area average",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Response Time",
      value: "18 min",
      change: "-3 min",
      trend: "up",
      description: "Average ER wait time",
      icon: Clock,
      color: "text-blue-600",
    },
  ];

  const specialties = [
    { name: "Cardiology", rating: 4.9, procedures: 45, featured: true },
    { name: "Emergency Medicine", rating: 4.8, procedures: 32, featured: true },
    { name: "Neurology", rating: 4.7, procedures: 28, featured: false },
    { name: "Orthopedics", rating: 4.6, procedures: 38, featured: false },
    { name: "Oncology", rating: 4.9, procedures: 22, featured: true },
    { name: "Pediatrics", rating: 4.8, procedures: 31, featured: false },
  ];

  const pricingData = [
    {
      procedure: "MRI Brain",
      price: "$1,850",
      marketAvg: "$2,400",
      savings: "23%",
      trend: "down",
      volume: "High",
    },
    {
      procedure: "Emergency Room Visit",
      price: "$2,200",
      marketAvg: "$3,100",
      savings: "29%",
      trend: "down",
      volume: "Very High",
    },
    {
      procedure: "CT Scan",
      price: "$680",
      marketAvg: "$980",
      savings: "31%",
      trend: "down",
      volume: "High",
    },
    {
      procedure: "Blood Tests",
      price: "$240",
      marketAvg: "$340",
      savings: "29%",
      trend: "down",
      volume: "Very High",
    },
    {
      procedure: "X-Ray",
      price: "$125",
      marketAvg: "$180",
      savings: "31%",
      trend: "down",
      volume: "High",
    },
  ];

  const insuranceNetworks = [
    { name: "Blue Cross Blue Shield", inNetwork: true, tier: "Tier 1" },
    { name: "Aetna", inNetwork: true, tier: "Tier 1" },
    { name: "Cigna", inNetwork: true, tier: "Tier 2" },
    { name: "UnitedHealthcare", inNetwork: false, tier: "Out of Network" },
    { name: "Harvard Pilgrim", inNetwork: true, tier: "Tier 1" },
    { name: "Tufts Health Plan", inNetwork: true, tier: "Tier 1" },
  ];

  const recentReviews = [
    {
      id: 1,
      rating: 5,
      title: "Excellent emergency care",
      review:
        "The ER staff was incredibly professional and efficient. Despite being busy, they provided excellent care and kept me informed throughout my visit.",
      author: "Sarah M.",
      date: "2 days ago",
      verified: true,
      helpful: 12,
    },
    {
      id: 2,
      rating: 4,
      title: "Great cardiology department",
      review:
        "Dr. Johnson and the cardiology team were thorough and caring. The facility is modern and well-equipped. Pricing was transparent and reasonable.",
      author: "Michael R.",
      date: "1 week ago",
      verified: true,
      helpful: 8,
    },
    {
      id: 3,
      rating: 5,
      title: "Transparent pricing saved us money",
      review:
        "We were able to get upfront pricing before my surgery. The financial counselor was very helpful in explaining costs and payment options.",
      author: "Jennifer L.",
      date: "2 weeks ago",
      verified: true,
      helpful: 15,
    },
  ];

  const qualityMetrics = [
    { metric: "Patient Safety", score: 95, benchmark: "Above Average" },
    { metric: "Infection Prevention", score: 92, benchmark: "Above Average" },
    { metric: "Readmission Rate", score: 88, benchmark: "Average" },
    { metric: "Patient Experience", score: 94, benchmark: "Above Average" },
    { metric: "Clinical Excellence", score: 91, benchmark: "Above Average" },
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
        currentPage="internalSearch"
      />

      <div className="flex-1">
        {/* Hospital Header */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-12">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Hospital Info */}
                <div className="flex-1">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Building className="w-10 h-10 text-primary" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-3xl md:text-4xl font-bold">
                          {hospital.name}
                        </h1>
                        {hospital.verified && (
                          <Badge className="bg-green-100 text-green-800">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>

                      <p className="text-lg text-muted-foreground mb-3">
                        {hospital.type}
                      </p>

                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{hospital.address}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          <span>{hospital.phone}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Globe className="w-4 h-4" />
                          <span>{hospital.website}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {hospital.features.map((feature, index) => (
                      <Badge key={index} variant="secondary">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Quick Actions */}
                  <div className="flex flex-wrap gap-3">
                    <Button>
                      <DollarSign className="w-4 h-4 mr-2" />
                      Compare Prices
                    </Button>
                    <Button variant="secondary">
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                    <Button variant="secondary">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Hospital
                    </Button>
                    <Button variant="secondary">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="secondary">
                      <Bookmark className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="lg:w-80">
                  <div className="grid grid-cols-2 gap-4">
                    {keyMetrics.map((metric, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <metric.icon
                              className={`w-5 h-5 ${metric.color}`}
                            />
                            <div
                              className={`flex items-center gap-1 text-xs ${
                                metric.trend === "up"
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
                              {metric.trend === "up" ? (
                                <TrendingUp className="w-3 h-3" />
                              ) : (
                                <TrendingDown className="w-3 h-3" />
                              )}
                              <span>{metric.change}</span>
                            </div>
                          </div>
                          <div className="text-2xl font-bold mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {metric.description}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="pricing">Pricing</TabsTrigger>
                  <TabsTrigger value="specialties">Specialties</TabsTrigger>
                  <TabsTrigger value="insurance">Insurance</TabsTrigger>
                  <TabsTrigger value="quality">Quality</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <Card>
                        <CardHeader>
                          <CardTitle>Hospital Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Founded
                              </p>
                              <p className="font-semibold">
                                {hospital.founded}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Bed Count
                              </p>
                              <p className="font-semibold">
                                {hospital.beds} beds
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Type
                              </p>
                              <p className="font-semibold">{hospital.type}</p>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">
                              Certifications & Accreditations
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {hospital.certifications.map((cert, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                  <span className="text-sm">{cert}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                              <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                              <div>
                                <h4 className="font-semibold text-blue-800 mb-1">
                                  Financial Assistance Available
                                </h4>
                                <p className="text-sm text-blue-700">
                                  This hospital offers charity care and
                                  financial assistance programs for eligible
                                  patients. Contact the financial counseling
                                  department for more information.
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <Card>
                        <CardHeader>
                          <CardTitle>Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <Phone className="w-4 h-4 text-muted-foreground" />
                              <div>
                                <p className="text-sm text-muted-foreground">
                                  Main Number
                                </p>
                                <p className="font-semibold">
                                  {hospital.phone}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <Globe className="w-4 h-4 text-muted-foreground" />
                              <div>
                                <p className="text-sm text-muted-foreground">
                                  Website
                                </p>
                                <p className="font-semibold text-primary">
                                  {hospital.website}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
                              <div>
                                <p className="text-sm text-muted-foreground">
                                  Address
                                </p>
                                <p className="font-semibold">
                                  {hospital.address}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="pt-4 border-t">
                            <Button className="w-full mb-2">
                              <Navigation className="w-4 h-4 mr-2" />
                              Get Directions
                            </Button>
                            <Button variant="secondary" className="w-full">
                              <Calendar className="w-4 h-4 mr-2" />
                              Schedule Appointment
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="pricing" className="mt-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold">Procedure Pricing</h3>
                      <div className="flex gap-2">
                        <select
                          value={selectedProcedure}
                          onChange={(e) => setSelectedProcedure(e.target.value)}
                          className="px-3 py-2 border rounded-md"
                        >
                          <option value="all">All Procedures</option>
                          <option value="imaging">Imaging</option>
                          <option value="emergency">Emergency</option>
                          <option value="surgery">Surgery</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {pricingData.map((item, index) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold mb-2">
                                  {item.procedure}
                                </h4>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <Badge variant="secondary">
                                    {item.volume} Volume
                                  </Badge>
                                </div>
                              </div>

                              <div className="flex items-center gap-4">
                                <div className="text-right">
                                  <div className="text-2xl font-bold text-green-600 mb-1">
                                    {item.price}
                                  </div>
                                  <div className="text-sm text-muted-foreground mb-1">
                                    Market avg: {item.marketAvg}
                                  </div>
                                  <Badge className="bg-green-100 text-green-800">
                                    {item.savings} savings
                                  </Badge>
                                </div>

                                <Button
                                  variant="secondary"
                                  size="sm"
                                  onClick={onViewProcedure}
                                >
                                  <Eye className="w-3 h-3 mr-1" />
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-yellow-800 mb-1">
                            Pricing Disclaimer
                          </h4>
                          <p className="text-sm text-yellow-700">
                            Prices shown are estimates based on
                            hospital-reported data. Your actual cost may vary
                            based on your insurance, deductible status, and
                            specific medical needs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="specialties" className="mt-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {specialties.map((specialty, index) => (
                      <Card
                        key={index}
                        className={`${specialty.featured ? "border-primary" : ""}`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">
                              {specialty.name}
                            </h3>
                            {specialty.featured && (
                              <Badge className="bg-primary text-white">
                                Featured
                              </Badge>
                            )}
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">
                                Rating
                              </span>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="font-semibold">
                                  {specialty.rating}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">
                                Procedures Available
                              </span>
                              <span className="font-semibold">
                                {specialty.procedures}
                              </span>
                            </div>
                          </div>

                          <Button variant="secondary" className="w-full mt-4">
                            <Eye className="w-4 h-4 mr-2" />
                            View Procedures
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="insurance" className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Insurance Networks</CardTitle>
                      <p className="text-muted-foreground">
                        Check if this hospital is in your insurance network
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {insuranceNetworks.map((insurance, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              <Shield
                                className={`w-5 h-5 ${insurance.inNetwork ? "text-green-600" : "text-red-600"}`}
                              />
                              <div>
                                <p className="font-semibold">
                                  {insurance.name}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {insurance.tier}
                                </p>
                              </div>
                            </div>
                            <Badge
                              variant={
                                insurance.inNetwork ? "default" : "destructive"
                              }
                            >
                              {insurance.inNetwork
                                ? "In Network"
                                : "Out of Network"}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="quality" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Quality Metrics</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {qualityMetrics.map((metric, index) => (
                            <div key={index}>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium">
                                  {metric.metric}
                                </span>
                                <Badge variant="secondary">
                                  {metric.benchmark}
                                </Badge>
                              </div>
                              <Progress value={metric.score} className="h-2" />
                              <div className="text-xs text-muted-foreground mt-1">
                                Score: {metric.score}%
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Safety & Recognition</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                            <Award className="w-5 h-5 text-green-600" />
                            <div>
                              <p className="font-semibold">
                                Magnet Recognition
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Excellence in nursing
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                            <Shield className="w-5 h-5 text-blue-600" />
                            <div>
                              <p className="font-semibold">
                                Level I Trauma Center
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Highest level of trauma care
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                            <Star className="w-5 h-5 text-purple-600" />
                            <div>
                              <p className="font-semibold">
                                Joint Commission Accredited
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Quality and safety standards
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold">Patient Reviews</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                          <span className="font-semibold">
                            {hospital.overallRating}
                          </span>
                          <span className="text-muted-foreground">
                            ({hospital.totalReviews} reviews)
                          </span>
                        </div>
                      </div>
                      <Button variant="secondary">
                        <FileText className="w-4 h-4 mr-2" />
                        Write Review
                      </Button>
                    </div>

                    <div className="space-y-6">
                      {recentReviews.map((review) => (
                        <Card key={review.id}>
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                  <Users className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold">
                                      {review.author}
                                    </span>
                                    {review.verified && (
                                      <Badge
                                        variant="secondary"
                                        className="text-xs"
                                      >
                                        Verified
                                      </Badge>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-2 mt-1">
                                    <div className="flex text-yellow-400">
                                      {[...Array(review.rating)].map((_, i) => (
                                        <Star
                                          key={i}
                                          className="w-3 h-3 fill-current"
                                        />
                                      ))}
                                    </div>
                                    <span className="text-sm text-muted-foreground">
                                      {review.date}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <h4 className="font-semibold mb-2">
                              {review.title}
                            </h4>
                            <p className="text-muted-foreground mb-4">
                              {review.review}
                            </p>

                            <div className="flex items-center gap-4 text-sm">
                              <button className="flex items-center gap-1 text-muted-foreground hover:text-primary">
                                <Heart className="w-4 h-4" />
                                Helpful ({review.helpful})
                              </button>
                              <button className="text-muted-foreground hover:text-primary">
                                Reply
                              </button>
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
    </div>
  );
}
