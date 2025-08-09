"use client";

import { useState } from "react";
import { Navigation } from "../components/Navigation";
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
import { Input } from "../components/ui/input";
import {
  BarChart3,
  TrendingUp,
  FileBarChart,
  Download,
  Search,
  MapPin,
  DollarSign,
  Hospital,
  Users,
  Calendar,
  ArrowRight,
  Filter,
  Eye,
  Star,
  Clock,
  Shield,
  AlertTriangle,
  Info,
  Lightbulb,
} from "lucide-react";

type PageView =
  | "insights"
  | "homepage"
  | "comparePrices"
  | "exploreByLocation"
  | "internalSearch"
  | "patientResources"
  | "tools"
  | "community"
  | "professionals"
  | "faq"
  | "disclosures"
  | "blog"
  | "chatbot";

export default function InsightsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMetric, setSelectedMetric] = useState("all");

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

  const keyMetrics = [
    {
      title: "National Median Savings",
      value: "52%",
      change: "+3.2%",
      trend: "up",
      description: "Average discount for cash payments vs negotiated rates",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Hospital Compliance",
      value: "73%",
      change: "+12%",
      trend: "up",
      description: "Facilities reporting price transparency data",
      icon: Hospital,
      color: "text-blue-600",
    },
    {
      title: "Active Users",
      value: "2.4M",
      change: "+18%",
      trend: "up",
      description: "People using transparency tools monthly",
      icon: Users,
      color: "text-purple-600",
    },
  ];

  const reports = [
    {
      title: "Q4 2024 Transparency Report",
      description:
        "Comprehensive analysis of hospital price transparency compliance and market trends.",
      date: "December 2024",
      downloads: "12.3K",
      category: "Market Analysis",
      featured: true,
    },
    {
      title: "Regional Price Variation Study",
      description:
        "Geographic analysis of procedure pricing across major metropolitan areas.",
      date: "November 2024",
      downloads: "8.7K",
      category: "Regional Data",
      featured: false,
    },
    {
      title: "Emergency Department Pricing",
      description:
        "Analysis of ER visit costs and billing practices across 500+ hospitals.",
      date: "October 2024",
      downloads: "15.2K",
      category: "Specialty Focus",
      featured: true,
    },
    {
      title: "Insurance Network Analysis",
      description: "Study of in-network vs out-of-network pricing patterns.",
      date: "September 2024",
      downloads: "6.9K",
      category: "Insurance",
      featured: false,
    },
  ];

  const liveData = [
    {
      title: "Most Searched Procedures",
      items: [
        { name: "MRI Brain", searches: "15.2K", avgPrice: "$2,400" },
        { name: "Emergency Room Visit", searches: "12.8K", avgPrice: "$3,200" },
        { name: "CT Scan", searches: "10.5K", avgPrice: "$980" },
        { name: "Blood Tests", searches: "9.3K", avgPrice: "$340" },
      ],
    },
    {
      title: "Top Performing Markets",
      items: [
        { name: "Boston, MA", score: "94%", improvement: "+8%" },
        { name: "Seattle, WA", score: "91%", improvement: "+12%" },
        { name: "Portland, OR", score: "89%", improvement: "+5%" },
        { name: "Denver, CO", score: "87%", improvement: "+15%" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Healthcare Intelligence Center
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Comprehensive market analysis, pricing trends, and transparency
                insights from the largest healthcare pricing database.
              </p>

              <div className="flex items-center gap-4 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search reports, metrics, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button>
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Insights */}
        <section className="py-12 bg-gray-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Shocking Healthcare Truths
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Uncover hidden fees, billing practices, and price variations
                  that impact your healthcare costs
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() =>
                    (window.location.href =
                      "/insights/truths/mri-price-variation-same-city")
                  }
                >
                  <CardHeader>
                    <Badge variant="destructive" className="w-fit mb-2">
                      Shocking Truth
                    </Badge>
                    <CardTitle className="text-lg line-clamp-2">
                      The Same MRI Costs $400 at One Hospital, $4,000 at Another
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Analysis reveals 10x price variations for identical
                      procedures within the same city.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />4 min read
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() =>
                    (window.location.href =
                      "/insights/truths/emergency-room-facility-fees")
                  }
                >
                  <CardHeader>
                    <Badge variant="destructive" className="w-fit mb-2">
                      Shocking Truth
                    </Badge>
                    <CardTitle className="text-lg line-clamp-2">
                      Why You're Charged $2,000 Before Seeing a Doctor
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Facility fees are healthcare's best-kept secret billing
                      practice.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />6 min read
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() =>
                    (window.location.href =
                      "/insights/truths/in-network-surprise-billing")
                  }
                >
                  <CardHeader>
                    <Badge variant="destructive" className="w-fit mb-2">
                      Shocking Truth
                    </Badge>
                    <CardTitle className="text-lg line-clamp-2">
                      How 'In-Network' Doctors Can Still Cost Thousands
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Why insurance networks don't guarantee affordable care.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />5 min read
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button
                  onClick={() => (window.location.href = "/insights/truths")}
                  size="lg"
                >
                  <Lightbulb className="w-4 h-4 mr-2" />
                  View All Shocking Truths
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics Dashboard */}
        <section className="py-12 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Live Market Metrics</h2>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {keyMetrics.map((metric, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <metric.icon className={`w-8 h-8 ${metric.color}`} />
                        <Badge variant="secondary" className="text-xs">
                          Live Data
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold text-sm text-muted-foreground">
                          {metric.title}
                        </h3>
                        <div className="flex items-baseline gap-2">
                          <span
                            className={`text-3xl font-bold ${metric.color}`}
                          >
                            {metric.value}
                          </span>
                          <span
                            className={`text-sm font-medium ${
                              metric.trend === "up"
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {metric.change}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {metric.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Live Data Streams */}
              <div className="grid md:grid-cols-2 gap-8">
                {liveData.map((section, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-primary" />
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {section.title.includes("Procedures")
                                  ? "searches" in item
                                    ? item.searches
                                    : ""
                                  : "score" in item
                                    ? item.score
                                    : ""}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-primary">
                                {section.title.includes("Procedures")
                                  ? "avgPrice" in item
                                    ? item.avgPrice
                                    : ""
                                  : "improvement" in item
                                    ? item.improvement
                                    : ""}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reports Library */}
        <section className="py-12 bg-gray-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Research Reports</h2>
                <Button variant="secondary">
                  <Download className="w-4 h-4 mr-2" />
                  Download All
                </Button>
              </div>

              <div className="grid gap-6">
                {reports.map((report, index) => (
                  <Card
                    key={index}
                    className={`${report.featured ? "border-primary" : ""}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl font-semibold">
                              {report.title}
                            </h3>
                            {report.featured && (
                              <Badge className="bg-primary text-white">
                                Featured
                              </Badge>
                            )}
                            <Badge variant="secondary">{report.category}</Badge>
                          </div>

                          <p className="text-muted-foreground mb-4">
                            {report.description}
                          </p>

                          <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {report.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Download className="w-4 h-4" />
                              {report.downloads} downloads
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button variant="secondary" size="sm">
                            <Eye className="w-4 h-4 mr-1" />
                            Preview
                          </Button>
                          <Button size="sm">
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
