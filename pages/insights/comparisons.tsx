"use client";

import { useState } from "react";
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  ChevronRight,
  TrendingUp,
  TrendingDown,
  BarChart3,
  MapPin,
  Building,
  DollarSign,
  Users,
  Shield,
  Activity,
  Eye,
} from "lucide-react";

export default function InsightsComparisonsPage() {
  const [currentPage, setCurrentPage] = useState("insights");

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
  const handleNavigateToInsights = () => setCurrentPage("insights");
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

  const marketTrends = [
    {
      title: "Healthcare Costs Rise 6.2% Nationally",
      trend: "up",
      change: "+6.2%",
      timeframe: "YoY",
      description:
        "Average procedure costs increased across most markets, with the highest increases in emergency care.",
    },
    {
      title: "Price Transparency Compliance Improves",
      trend: "up",
      change: "+18%",
      timeframe: "YoY",
      description:
        "More hospitals are publishing compliant price transparency data, improving patient access to pricing.",
    },
    {
      title: "Outpatient Procedures Grow",
      trend: "up",
      change: "+12%",
      timeframe: "YoY",
      description:
        "Shift toward outpatient care continues, offering patients more affordable treatment options.",
    },
    {
      title: "Geographic Price Variations Persist",
      trend: "stable",
      change: "±3%",
      timeframe: "YoY",
      description:
        "Price differences between regions remain significant, with up to 300% variation for identical procedures.",
    },
  ];

  const topInsights = [
    {
      title: "MRI Pricing Analysis",
      type: "Procedure Deep Dive",
      summary:
        "MRI costs vary by 280% nationally, with significant savings available at independent imaging centers.",
      savings: "$1,200",
      locations: "150+ cities analyzed",
    },
    {
      title: "Emergency Care Costs",
      type: "Market Analysis",
      summary:
        "Emergency room visits average $1,400 but can reach $8,000+ for complex cases.",
      savings: "$800",
      locations: "National data",
    },
    {
      title: "Surgical Center vs Hospital",
      type: "Facility Comparison",
      summary:
        "Outpatient surgical centers average 40-60% lower costs than hospital-based procedures.",
      savings: "$4,500",
      locations: "25 major markets",
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
                <span className="text-primary font-medium">
                  Insights & Comparisons
                </span>
              </div>

              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Healthcare Market Insights
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Data-driven analysis of healthcare pricing trends, market
                  comparisons, and cost-saving opportunities across the United
                  States.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Trends */}
        <section className="py-12 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Latest Market Trends</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {marketTrends.map((trend, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="font-semibold text-lg">{trend.title}</h3>
                        <div
                          className={`flex items-center gap-1 ${
                            trend.trend === "up"
                              ? "text-green-600"
                              : trend.trend === "down"
                                ? "text-red-600"
                                : "text-gray-600"
                          }`}
                        >
                          {trend.trend === "up" && (
                            <TrendingUp className="w-4 h-4" />
                          )}
                          {trend.trend === "down" && (
                            <TrendingDown className="w-4 h-4" />
                          )}
                          {trend.trend === "stable" && (
                            <BarChart3 className="w-4 h-4" />
                          )}
                          <span className="font-medium">{trend.change}</span>
                          <span className="text-xs text-muted-foreground ml-1">
                            {trend.timeframe}
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {trend.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Insights */}
        <section className="py-12 bg-gray-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Featured Analysis</h2>
              <div className="grid gap-6">
                {topInsights.map((insight, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl font-semibold">
                              {insight.title}
                            </h3>
                            <Badge variant="secondary">{insight.type}</Badge>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            {insight.summary}
                          </p>
                          <div className="flex items-center gap-6 text-sm">
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4 text-green-600" />
                              <span className="font-medium">
                                Up to {insight.savings} savings
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4 text-blue-600" />
                              <span>{insight.locations}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="secondary">Read Analysis</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Dashboard */}
        <section className="py-12 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Market Dashboard</h2>

              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="procedures">Procedures</TabsTrigger>
                  <TabsTrigger value="locations">Locations</TabsTrigger>
                  <TabsTrigger value="payers">Insurance</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div className="grid md:grid-cols-4 gap-6">
                    <Card>
                      <CardContent className="p-6 text-center">
                        <Building className="w-8 h-8 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold">8,245</div>
                        <div className="text-sm text-muted-foreground">
                          Hospitals Tracked
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 text-center">
                        <Activity className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold">12,450</div>
                        <div className="text-sm text-muted-foreground">
                          Procedures Analyzed
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 text-center">
                        <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold">2.4M</div>
                        <div className="text-sm text-muted-foreground">
                          Price Points
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 text-center">
                        <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold">89%</div>
                        <div className="text-sm text-muted-foreground">
                          Data Accuracy
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="procedures" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Most Searched Procedures</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          "MRI Brain",
                          "CT Scan",
                          "Hip Replacement",
                          "Colonoscopy",
                          "Mammogram",
                        ].map((procedure, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <span className="font-medium">{procedure}</span>
                            <Button variant="secondary" size="sm">
                              View Data
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="locations" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Top Markets by Transparency</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          "Boston, MA",
                          "Seattle, WA",
                          "Denver, CO",
                          "Austin, TX",
                          "San Francisco, CA",
                        ].map((location, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <span className="font-medium">{location}</span>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary">
                                {95 - index}% transparent
                              </Badge>
                              <Button variant="secondary" size="sm">
                                Explore
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="payers" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Insurance Plan Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          "Blue Cross Blue Shield",
                          "UnitedHealthcare",
                          "Aetna",
                          "Cigna",
                          "Kaiser Permanente",
                        ].map((payer, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <span className="font-medium">{payer}</span>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary">
                                {27 - index * 2}% market share
                              </Badge>
                              <Button variant="secondary" size="sm">
                                View Coverage
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
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
