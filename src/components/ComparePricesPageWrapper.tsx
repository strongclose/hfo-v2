import React, { useState } from "react";
import { Navigation } from "./Nav";
import { FooterExpanded } from "./homepage/FooterExpanded";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import ErrorBoundary, { PageErrorFallback } from "./ErrorBoundary";
import {
  MedicalDisclaimer,
  DataSourceAttribution,
} from "./LegalCompliance";
import {
  Search,
  DollarSign,
  TrendingUp,
  MapPin,
  Calculator,
  ArrowRight,
  Hospital,
  Users,
  Shield,
  BarChart3,
} from "lucide-react";

function ComparePricesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  // Navigation handlers for Header component
  const handleNavigateToHomepage = () => (window.location.href = "/");
  const handleNavigateToInternalSearch = () =>
    (window.location.href = "/hospitals");
  const handleNavigateToComparePrices = () =>
    (window.location.href = "/compare-prices");
  const handleNavigateToPriceComparison = () =>
    (window.location.href = "/price-comparison");
  const handleNavigateToSearchByProcedure = () =>
    (window.location.href = "/search-procedure");
  const handleNavigateToFAQ = () => (window.location.href = "/faq");
  const handleNavigateToBlog = () => (window.location.href = "/faq");
  const handleNavigateToExplore = () => (window.location.href = "/explore");
  const handleNavigateToExploreByLocation = () =>
    (window.location.href = "/explore/location");
  const handleNavigateToInsights = () => (window.location.href = "/insights");
  const handleNavigateToPatientResources = () =>
    (window.location.href = "/learn");
  const handleNavigateToTools = () => (window.location.href = "/tools");
  const handleNavigateToCommunity = () => (window.location.href = "/community");
  const handleNavigateToProfessionals = () =>
    (window.location.href = "/professionals");

  const comparisonTools = [
    {
      title: "Compare Hospitals",
      description: "Compare costs and quality across hospitals",
      icon: Hospital,
      href: "/hospitals",
      color: "blue",
    },
    {
      title: "Compare Doctors",
      description: "Find and compare doctors by specialty",
      icon: Users,
      href: "/doctors",
      color: "green",
    },
    {
      title: "Compare Insurance",
      description: "Compare insurance plans and coverage",
      icon: Shield,
      href: "/insurers",
      color: "purple",
    },
    {
      title: "Price Trends",
      description: "View pricing trends over time",
      icon: TrendingUp,
      href: "/tools/price-trends",
      color: "orange",
    },
  ];

  const popularComparisons = [
    {
      procedure: "Knee Replacement",
      lowPrice: "$15,000",
      highPrice: "$50,000",
      savings: "Up to 70%",
    },
    {
      procedure: "MRI Scan",
      lowPrice: "$400",
      highPrice: "$3,000",
      savings: "Up to 87%",
    },
    {
      procedure: "Colonoscopy",
      lowPrice: "$600",
      highPrice: "$2,800",
      savings: "Up to 79%",
    },
    {
      procedure: "CT Scan",
      lowPrice: "$300",
      highPrice: "$2,500",
      savings: "Up to 88%",
    },
  ];

  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-6">
                <div className="mx-auto p-3 bg-blue-100 rounded-full w-fit mb-4">
                  <DollarSign className="h-8 w-8 text-blue-600" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Compare Healthcare Prices
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Find the best healthcare prices and save thousands on medical
                  procedures. Compare costs across hospitals, doctors, and
                  insurance plans to make informed decisions.
                </p>
              </div>

              {/* Quick Search */}
              <div className="max-w-2xl mx-auto">
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Search procedures, hospitals, or doctors..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-3 text-lg"
                    />
                  </div>
                  <Button variant="primary" size="lg" className="px-8">
                    <Search className="h-5 w-5 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Comparison Tools */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Choose What to Compare
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {comparisonTools.map((tool, index) => (
                <a key={index} href={tool.href}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`mx-auto p-3 bg-${tool.color}-100 rounded-full w-fit mb-4`}
                      >
                        <tool.icon
                          className={`h-8 w-8 text-${tool.color}-600`}
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {tool.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {tool.description}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* Popular Comparisons */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Popular Price Comparisons
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {popularComparisons.map((comparison, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {comparison.procedure}
                      </h3>
                      <Badge className="bg-green-100 text-green-800">
                        Save {comparison.savings}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-red-50 rounded-lg">
                        <div className="text-sm text-gray-600">
                          Highest Price
                        </div>
                        <div className="text-xl font-bold text-red-600">
                          {comparison.highPrice}
                        </div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-sm text-gray-600">
                          Lowest Price
                        </div>
                        <div className="text-xl font-bold text-green-600">
                          {comparison.lowPrice}
                        </div>
                      </div>
                    </div>

                    <Button variant="secondary" className="w-full">
                      Compare {comparison.procedure} Prices
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tools Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Price Comparison Tools
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Cost Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Estimate your out-of-pocket costs based on your insurance
                    plan and deductible.
                  </p>
                  <Button variant="secondary" className="w-full">
                    <Calculator className="h-4 w-4 mr-2" />
                    Calculate Costs
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Price Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    View how healthcare prices have changed over time in your
                    area.
                  </p>
                  <Button variant="secondary" className="w-full">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Trends
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Location Compare
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Compare prices across different cities and regions.
                  </p>
                  <Button variant="secondary" className="w-full">
                    <MapPin className="h-4 w-4 mr-2" />
                    Compare Locations
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Legal Compliance Section */}
          <div className="space-y-6">
            <MedicalDisclaimer variant="banner" />
            <DataSourceAttribution
              sources={[
                "CMS Hospital Price Transparency Data",
                "State Insurance Commission Filings",
                "Medicare Cost Reports",
                "Provider Public Disclosures",
              ]}
              lastUpdated="December 15, 2024"
            />
          </div>
        </div>
      </div>

      <FooterExpanded />
    </>
  );
}

// Wrap the main component with error boundary
const ComparePricesPageWithErrorBoundary = () => (
  <ErrorBoundary fallback={PageErrorFallback}>
    <ComparePricesPage />
  </ErrorBoundary>
);

export default ComparePricesPageWithErrorBoundary;
