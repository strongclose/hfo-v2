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
  Shield,
  Building,
  Users,
  TrendingUp,
  TrendingDown,
  MapPin,
  DollarSign,
  BarChart3,
  Star,
  Clock,
  Phone,
  Globe,
  Mail,
  Calendar,
  FileText,
  Award,
  AlertTriangle,
  Info,
  Eye,
  Filter,
  Zap,
  Target,
  Heart,
  CheckCircle,
  XCircle,
  ArrowRight,
} from "lucide-react";

export default function PayerPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("Q4-2024");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedMetric, setSelectedMetric] = useState("coverage");

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

  // Sample payer data
  const payer = {
    name: "Blue Cross Blue Shield of Massachusetts",
    shortName: "BCBS MA",
    type: "Nonprofit Health Plan",
    founded: 1937,
    headquarters: "Boston, MA",
    members: "2.8M",
    website: "bluecrossma.org",
    phone: "(800) 262-2583",
    marketShare: "42%",
    rating: 4.2,
    financialRating: "A+",
    logo: "🛡️",
  };

  const keyMetrics = [
    {
      title: "Network Hospitals",
      value: "147",
      change: "+3",
      trend: "up",
      description: "In-network facilities in MA",
      icon: Building,
      color: "text-blue-600",
    },
    {
      title: "Members Covered",
      value: "2.8M",
      change: "+180K",
      trend: "up",
      description: "Active plan members",
      icon: Users,
      color: "text-green-600",
    },
    {
      title: "Avg. Premium",
      value: "$485",
      change: "+$28",
      trend: "up",
      description: "Monthly individual premium",
      icon: DollarSign,
      color: "text-purple-600",
    },
    {
      title: "Claims Processing",
      value: "3.2 days",
      change: "-0.8 days",
      trend: "up",
      description: "Average processing time",
      icon: Clock,
      color: "text-orange-600",
    },
  ];

  const quarterlyData = [
    {
      quarter: "Q4 2024",
      revenue: "$3.2B",
      claims: "$2.8B",
      members: "2.8M",
      satisfaction: 87,
      networkGrowth: "+3%",
    },
    {
      quarter: "Q3 2024",
      revenue: "$3.1B",
      claims: "$2.7B",
      members: "2.75M",
      satisfaction: 85,
      networkGrowth: "+2%",
    },
    {
      quarter: "Q2 2024",
      revenue: "$3.0B",
      claims: "$2.6B",
      members: "2.7M",
      satisfaction: 84,
      networkGrowth: "+1%",
    },
    {
      quarter: "Q1 2024",
      revenue: "$2.9B",
      claims: "$2.5B",
      members: "2.65M",
      satisfaction: 82,
      networkGrowth: "+2%",
    },
  ];

  const monthlyTrends = [
    { month: "Dec 2024", premium: 485, claims: 412, satisfaction: 87 },
    { month: "Nov 2024", premium: 483, claims: 398, satisfaction: 86 },
    { month: "Oct 2024", premium: 481, claims: 405, satisfaction: 87 },
    { month: "Sep 2024", premium: 479, claims: 392, satisfaction: 85 },
    { month: "Aug 2024", premium: 477, claims: 388, satisfaction: 84 },
    { month: "Jul 2024", premium: 475, claims: 395, satisfaction: 85 },
  ];

  const networkHospitals = [
    {
      name: "Massachusetts General Hospital",
      city: "Boston",
      type: "Academic Medical Center",
      tier: "Tier 1",
      rating: 4.9,
      specialties: ["Cardiology", "Neurology", "Oncology"],
      contractDate: "2023-01-01",
      status: "Active",
    },
    {
      name: "Boston Medical Center",
      city: "Boston",
      type: "Safety Net Hospital",
      tier: "Tier 1",
      rating: 4.8,
      specialties: ["Emergency", "Trauma", "Pediatrics"],
      contractDate: "2022-06-15",
      status: "Active",
    },
    {
      name: "Brigham and Women's Hospital",
      city: "Boston",
      type: "Teaching Hospital",
      tier: "Tier 1",
      rating: 4.7,
      specialties: ["Surgery", "Cardiology", "Oncology"],
      contractDate: "2023-03-01",
      status: "Active",
    },
    {
      name: "Boston Children's Hospital",
      city: "Boston",
      type: "Pediatric Hospital",
      tier: "Tier 1",
      rating: 4.9,
      specialties: ["Pediatrics", "Neonatology", "Surgery"],
      contractDate: "2022-11-01",
      status: "Active",
    },
    {
      name: "Cambridge Health Alliance",
      city: "Cambridge",
      type: "Community Hospital",
      tier: "Tier 2",
      rating: 4.4,
      specialties: ["Primary Care", "Emergency", "Surgery"],
      contractDate: "2023-08-01",
      status: "Active",
    },
    {
      name: "Lahey Hospital & Medical Center",
      city: "Burlington",
      type: "Regional Medical Center",
      tier: "Tier 2",
      rating: 4.3,
      specialties: ["Surgery", "Cardiology", "Orthopedics"],
      contractDate: "2022-04-01",
      status: "Expiring Soon",
    },
  ];

  const competitorComparison = [
    {
      name: "Aetna Better Health",
      marketShare: "18%",
      avgPremium: "$512",
      satisfaction: 82,
      networkSize: 125,
    },
    {
      name: "Harvard Pilgrim",
      marketShare: "15%",
      avgPremium: "$498",
      satisfaction: 85,
      networkSize: 134,
    },
    {
      name: "Tufts Health Plan",
      marketShare: "12%",
      avgPremium: "$506",
      satisfaction: 83,
      networkSize: 118,
    },
    {
      name: "UnitedHealthcare",
      marketShare: "8%",
      avgPremium: "$545",
      satisfaction: 79,
      networkSize: 98,
    },
  ];

  const performanceMetrics = [
    {
      metric: "Member Satisfaction",
      score: 87,
      benchmark: "Above Average",
      trend: "up",
    },
    {
      metric: "Claims Processing Speed",
      score: 92,
      benchmark: "Excellent",
      trend: "up",
    },
    {
      metric: "Network Adequacy",
      score: 89,
      benchmark: "Above Average",
      trend: "stable",
    },
    {
      metric: "Cost Management",
      score: 78,
      benchmark: "Average",
      trend: "down",
    },
    {
      metric: "Digital Experience",
      score: 85,
      benchmark: "Above Average",
      trend: "up",
    },
  ];

  const planTypes = [
    {
      name: "HMO Plans",
      members: "1.2M",
      avgPremium: "$425",
      deductible: "$1,500",
      copay: "$25",
      popularity: 43,
    },
    {
      name: "PPO Plans",
      members: "980K",
      avgPremium: "$565",
      deductible: "$2,000",
      copay: "$35",
      popularity: 35,
    },
    {
      name: "HSA Plans",
      members: "420K",
      avgPremium: "$385",
      deductible: "$3,500",
      copay: "$0",
      popularity: 15,
    },
    {
      name: "Medicare Advantage",
      members: "200K",
      avgPremium: "$0",
      deductible: "$500",
      copay: "$15",
      popularity: 7,
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
        currentPage="internalSearch"
      />

      <div className="flex-1">
        {/* Payer Header */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-12">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Payer Info */}
                <div className="flex-1">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center text-4xl">
                      {payer.logo}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-3xl md:text-4xl font-bold">
                          {payer.name}
                        </h1>
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      </div>

                      <p className="text-lg text-muted-foreground mb-3">
                        {payer.type}
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                        <div>
                          <span className="block">Founded</span>
                          <span className="font-semibold text-foreground">
                            {payer.founded}
                          </span>
                        </div>
                        <div>
                          <span className="block">Headquarters</span>
                          <span className="font-semibold text-foreground">
                            {payer.headquarters}
                          </span>
                        </div>
                        <div>
                          <span className="block">Members</span>
                          <span className="font-semibold text-foreground">
                            {payer.members}
                          </span>
                        </div>
                        <div>
                          <span className="block">Market Share</span>
                          <span className="font-semibold text-foreground">
                            {payer.marketShare}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      <span>{payer.phone}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      <span>{payer.website}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      <span>Financial Rating: {payer.financialRating}</span>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex flex-wrap gap-3">
                    <Button>
                      <Building className="w-4 h-4 mr-2" />
                      View Network
                    </Button>
                    <Button variant="secondary">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Compare Plans
                    </Button>
                    <Button variant="secondary">
                      <Phone className="w-4 h-4 mr-2" />
                      Contact Payer
                    </Button>
                    <Button variant="secondary">
                      <FileText className="w-4 h-4 mr-2" />
                      View Reports
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
                  <TabsTrigger value="network">Network</TabsTrigger>
                  <TabsTrigger value="performance">Performance</TabsTrigger>
                  <TabsTrigger value="trends">Trends</TabsTrigger>
                  <TabsTrigger value="plans">Plans</TabsTrigger>
                  <TabsTrigger value="analysis">Analysis</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                      {/* Company Overview */}
                      <Card>
                        <CardHeader>
                          <CardTitle>Company Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-muted-foreground leading-relaxed">
                            Blue Cross Blue Shield of Massachusetts is a leading
                            nonprofit health plan serving over 2.8 million
                            members across Massachusetts. Founded in 1937, BCBS
                            MA has been committed to providing affordable,
                            quality healthcare coverage and innovative
                            healthcare solutions.
                          </p>

                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="p-3 bg-blue-50 rounded-lg">
                              <div className="flex items-center gap-2 mb-1">
                                <Shield className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-medium">
                                  Coverage
                                </span>
                              </div>
                              <p className="text-lg font-bold">Statewide</p>
                            </div>
                            <div className="p-3 bg-green-50 rounded-lg">
                              <div className="flex items-center gap-2 mb-1">
                                <Star className="w-4 h-4 text-green-600" />
                                <span className="text-sm font-medium">
                                  Rating
                                </span>
                              </div>
                              <p className="text-lg font-bold">
                                {payer.rating}/5.0
                              </p>
                            </div>
                            <div className="p-3 bg-purple-50 rounded-lg">
                              <div className="flex items-center gap-2 mb-1">
                                <Target className="w-4 h-4 text-purple-600" />
                                <span className="text-sm font-medium">
                                  Market Position
                                </span>
                              </div>
                              <p className="text-lg font-bold">#1</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Recent Performance */}
                      <Card>
                        <CardHeader>
                          <CardTitle>Quarterly Performance</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {quarterlyData.slice(0, 3).map((quarter, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                              >
                                <div>
                                  <h4 className="font-semibold">
                                    {quarter.quarter}
                                  </h4>
                                  <p className="text-sm text-muted-foreground">
                                    {quarter.members} members
                                  </p>
                                </div>
                                <div className="grid grid-cols-3 gap-6 text-sm">
                                  <div className="text-center">
                                    <p className="text-muted-foreground">
                                      Revenue
                                    </p>
                                    <p className="font-semibold">
                                      {quarter.revenue}
                                    </p>
                                  </div>
                                  <div className="text-center">
                                    <p className="text-muted-foreground">
                                      Claims
                                    </p>
                                    <p className="font-semibold">
                                      {quarter.claims}
                                    </p>
                                  </div>
                                  <div className="text-center">
                                    <p className="text-muted-foreground">
                                      Satisfaction
                                    </p>
                                    <p className="font-semibold">
                                      {quarter.satisfaction}%
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="space-y-6">
                      {/* Competitor Comparison */}
                      <Card>
                        <CardHeader>
                          <CardTitle>Market Position</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                              <div>
                                <p className="font-semibold">
                                  {payer.shortName}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Current
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="font-bold text-primary">
                                  {payer.marketShare}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Market Share
                                </p>
                              </div>
                            </div>

                            {competitorComparison
                              .slice(0, 3)
                              .map((competitor, index) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                >
                                  <div>
                                    <p className="font-medium">
                                      {competitor.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {competitor.networkSize} hospitals
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <p className="font-semibold">
                                      {competitor.marketShare}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      Market Share
                                    </p>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Quick Stats */}
                      <Card>
                        <CardHeader>
                          <CardTitle>Key Statistics</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                              Average Premium
                            </span>
                            <span className="font-semibold">$485/month</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                              Claims Ratio
                            </span>
                            <span className="font-semibold">87.5%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                              Network Hospitals
                            </span>
                            <span className="font-semibold">147</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                              States Covered
                            </span>
                            <span className="font-semibold">1 (MA)</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="network" className="mt-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold">Network Hospitals</h3>
                      <div className="flex gap-2">
                        <select
                          value={selectedRegion}
                          onChange={(e) => setSelectedRegion(e.target.value)}
                          className="px-3 py-2 border rounded-md"
                        >
                          <option value="all">All Regions</option>
                          <option value="boston">Boston Metro</option>
                          <option value="western">Western MA</option>
                          <option value="cape">Cape Cod</option>
                        </select>
                        <Button variant="secondary">
                          <Filter className="w-4 h-4 mr-2" />
                          Filter
                        </Button>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {networkHospitals.map((hospital, index) => (
                        <Card
                          key={index}
                          className={`${hospital.status === "Expiring Soon" ? "border-yellow-200 bg-yellow-50" : ""}`}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h4 className="text-lg font-semibold">
                                    {hospital.name}
                                  </h4>
                                  <Badge
                                    variant={
                                      hospital.tier === "Tier 1"
                                        ? "default"
                                        : "secondary"
                                    }
                                  >
                                    {hospital.tier}
                                  </Badge>
                                  <Badge
                                    variant={
                                      hospital.status === "Active"
                                        ? "outline"
                                        : "destructive"
                                    }
                                  >
                                    {hospital.status}
                                  </Badge>
                                  {hospital.status === "Expiring Soon" && (
                                    <Badge className="bg-yellow-100 text-yellow-800">
                                      <AlertTriangle className="w-3 h-3 mr-1" />
                                      Expires Soon
                                    </Badge>
                                  )}
                                </div>

                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                  <div className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    <span>{hospital.city}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Building className="w-3 h-3" />
                                    <span>{hospital.type}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    <span>{hospital.rating}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    <span>
                                      Since{" "}
                                      {new Date(
                                        hospital.contractDate,
                                      ).getFullYear()}
                                    </span>
                                  </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                  {hospital.specialties.map(
                                    (specialty, specIndex) => (
                                      <Badge
                                        key={specIndex}
                                        variant="secondary"
                                        className="text-xs"
                                      >
                                        {specialty}
                                      </Badge>
                                    ),
                                  )}
                                </div>
                              </div>

                              <div className="flex flex-col gap-2">
                                <Button
                                  variant="secondary"
                                  size="sm"
                                  onClick={handleNavigateToHospital}
                                >
                                  <Eye className="w-3 h-3 mr-1" />
                                  View Details
                                </Button>
                                <Button variant="secondary" size="sm">
                                  <FileText className="w-3 h-3 mr-1" />
                                  Contract
                                </Button>
                              </div>
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
                            Network Updates
                          </h4>
                          <p className="text-sm text-blue-700">
                            3 new hospitals joined the network in Q4 2024. 1
                            contract is expiring soon and under renegotiation.
                            Network adequacy score: 89% (Above Average).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="performance" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Performance Metrics</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {performanceMetrics.map((metric, index) => (
                            <div key={index}>
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium">
                                  {metric.metric}
                                </span>
                                <div className="flex items-center gap-2">
                                  <Badge variant="secondary">
                                    {metric.benchmark}
                                  </Badge>
                                  {metric.trend === "up" ? (
                                    <TrendingUp className="w-4 h-4 text-green-600" />
                                  ) : metric.trend === "down" ? (
                                    <TrendingDown className="w-4 h-4 text-red-600" />
                                  ) : (
                                    <div className="w-4 h-4" />
                                  )}
                                </div>
                              </div>
                              <Progress
                                value={metric.score}
                                className="h-2 mb-1"
                              />
                              <div className="text-xs text-muted-foreground">
                                Score: {metric.score}%
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Member Satisfaction Breakdown</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                              <span className="font-semibold text-green-800">
                                Claims Experience
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-green-700">
                                  Processing Speed
                                </p>
                                <p className="font-bold">3.2 days avg</p>
                              </div>
                              <div>
                                <p className="text-green-700">Approval Rate</p>
                                <p className="font-bold">94.2%</p>
                              </div>
                            </div>
                          </div>

                          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Heart className="w-5 h-5 text-blue-600" />
                              <span className="font-semibold text-blue-800">
                                Customer Service
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-blue-700">Response Time</p>
                                <p className="font-bold">2.1 min avg</p>
                              </div>
                              <div>
                                <p className="text-blue-700">Resolution Rate</p>
                                <p className="font-bold">89.5%</p>
                              </div>
                            </div>
                          </div>

                          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Zap className="w-5 h-5 text-purple-600" />
                              <span className="font-semibold text-purple-800">
                                Digital Experience
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-purple-700">App Rating</p>
                                <p className="font-bold">4.3/5.0</p>
                              </div>
                              <div>
                                <p className="text-purple-700">Portal Usage</p>
                                <p className="font-bold">78% adoption</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="trends" className="mt-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold">
                        Financial & Operational Trends
                      </h3>
                      <select
                        value={selectedPeriod}
                        onChange={(e) => setSelectedPeriod(e.target.value)}
                        className="px-3 py-2 border rounded-md"
                      >
                        <option value="Q4-2024">Q4 2024</option>
                        <option value="Q3-2024">Q3 2024</option>
                        <option value="Q2-2024">Q2 2024</option>
                        <option value="Q1-2024">Q1 2024</option>
                      </select>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Monthly Premium Trends</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {monthlyTrends.map((month, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                              >
                                <span className="font-medium">
                                  {month.month}
                                </span>
                                <div className="flex items-center gap-4">
                                  <div className="text-right">
                                    <p className="font-semibold">
                                      ${month.premium}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      Premium
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <p className="font-semibold">
                                      ${month.claims}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      Claims
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <p className="font-semibold">
                                      {month.satisfaction}%
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      Satisfaction
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Quarterly Analysis</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {quarterlyData.map((quarter, index) => (
                              <div
                                key={index}
                                className="p-4 border rounded-lg"
                              >
                                <div className="flex items-center justify-between mb-3">
                                  <h4 className="font-semibold">
                                    {quarter.quarter}
                                  </h4>
                                  <Badge variant="secondary">
                                    {quarter.networkGrowth} growth
                                  </Badge>
                                </div>

                                <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <p className="text-muted-foreground">
                                      Revenue
                                    </p>
                                    <p className="font-bold text-green-600">
                                      {quarter.revenue}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">
                                      Claims Paid
                                    </p>
                                    <p className="font-bold text-blue-600">
                                      {quarter.claims}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">
                                      Members
                                    </p>
                                    <p className="font-bold">
                                      {quarter.members}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">
                                      Satisfaction
                                    </p>
                                    <p className="font-bold">
                                      {quarter.satisfaction}%
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="plans" className="mt-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Plan Portfolio</h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      {planTypes.map((plan, index) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h4 className="text-lg font-semibold mb-2">
                                  {plan.name}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {plan.members} enrolled
                                </p>
                              </div>
                              <Badge variant="secondary">
                                {plan.popularity}% of portfolio
                              </Badge>
                            </div>

                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">
                                  Avg. Premium
                                </span>
                                <span className="font-semibold">
                                  {plan.avgPremium}/month
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">
                                  Deductible
                                </span>
                                <span className="font-semibold">
                                  {plan.deductible}
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">
                                  Copay
                                </span>
                                <span className="font-semibold">
                                  {plan.copay}
                                </span>
                              </div>
                            </div>

                            <div className="mt-4">
                              <Progress
                                value={plan.popularity}
                                className="h-2"
                              />
                              <p className="text-xs text-muted-foreground mt-1">
                                Portfolio share: {plan.popularity}%
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="analysis" className="mt-8">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Competitive Analysis</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="p-4 bg-primary/10 rounded-lg">
                            <h4 className="font-semibold text-primary mb-2">
                              Market Leader Position
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              BCBS MA maintains the largest market share in
                              Massachusetts with strong network coverage and
                              competitive pricing across all plan types.
                            </p>
                          </div>

                          {competitorComparison.map((competitor, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 border rounded-lg"
                            >
                              <div>
                                <p className="font-medium">{competitor.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {competitor.networkSize} hospitals •{" "}
                                  {competitor.satisfaction}% satisfaction
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold">
                                  {competitor.marketShare}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {competitor.avgPremium}/mo
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Strategic Insights</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="w-5 h-5 text-green-600" />
                            <span className="font-semibold text-green-800">
                              Strengths
                            </span>
                          </div>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Largest provider network in Massachusetts</li>
                            <li>• Strong member satisfaction scores</li>
                            <li>• Competitive pricing across plan tiers</li>
                            <li>• Excellent claims processing efficiency</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="w-5 h-5 text-yellow-600" />
                            <span className="font-semibold text-yellow-800">
                              Areas for Improvement
                            </span>
                          </div>
                          <ul className="text-sm text-yellow-700 space-y-1">
                            <li>• Cost management and premium growth</li>
                            <li>• Digital platform modernization</li>
                            <li>• Contract renewals with key hospitals</li>
                            <li>• Expanding into value-based care models</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Target className="w-5 h-5 text-blue-600" />
                            <span className="font-semibold text-blue-800">
                              Opportunities
                            </span>
                          </div>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Medicare Advantage expansion</li>
                            <li>• Telehealth service integration</li>
                            <li>• Small business market growth</li>
                            <li>• Population health initiatives</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
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
