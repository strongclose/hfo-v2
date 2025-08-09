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
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  MapPin,
  Search,
  TrendingUp,
  TrendingDown,
  Star,
  Building,
  Users,
  DollarSign,
  BarChart3,
  Filter,
  ArrowRight,
  Eye,
  Shield,
  Clock,
  Phone,
  Globe,
  Navigation,
} from "lucide-react";

export default function LocationsPage() {
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedMetric, setSelectedMetric] = useState("transparency");

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

  const topMarkets = [
    {
      city: "Boston, MA",
      state: "Massachusetts",
      hospitals: 42,
      transparencyScore: 94,
      avgSavings: "$3,200",
      trend: "up",
      change: "+8%",
      population: "4.9M",
      featured: true,
    },
    {
      city: "Seattle, WA",
      state: "Washington",
      hospitals: 38,
      transparencyScore: 91,
      avgSavings: "$2,850",
      trend: "up",
      change: "+12%",
      population: "4.0M",
      featured: true,
    },
    {
      city: "San Francisco, CA",
      state: "California",
      hospitals: 45,
      transparencyScore: 89,
      avgSavings: "$4,100",
      trend: "up",
      change: "+5%",
      population: "4.7M",
      featured: false,
    },
    {
      city: "Denver, CO",
      state: "Colorado",
      hospitals: 32,
      transparencyScore: 87,
      avgSavings: "$2,900",
      trend: "up",
      change: "+15%",
      population: "2.9M",
      featured: false,
    },
    {
      city: "Austin, TX",
      state: "Texas",
      hospitals: 28,
      transparencyScore: 85,
      avgSavings: "$2,650",
      trend: "up",
      change: "+7%",
      population: "2.3M",
      featured: false,
    },
    {
      city: "Atlanta, GA",
      state: "Georgia",
      hospitals: 51,
      transparencyScore: 82,
      avgSavings: "$2,450",
      trend: "down",
      change: "-2%",
      population: "6.1M",
      featured: false,
    },
  ];

  const stateLeaderboard = [
    { state: "Massachusetts", score: 94, rank: 1, hospitals: 84 },
    { state: "Washington", score: 91, rank: 2, hospitals: 72 },
    { state: "Colorado", score: 89, rank: 3, hospitals: 65 },
    { state: "Oregon", score: 87, rank: 4, hospitals: 58 },
    { state: "California", score: 85, rank: 5, hospitals: 156 },
  ];

  const procedureComparisons = [
    {
      procedure: "MRI Brain",
      locations: [
        { city: "Boston, MA", price: "$1,800", rank: "Best Value" },
        { city: "Seattle, WA", price: "$2,100", rank: "Good Value" },
        { city: "San Francisco, CA", price: "$3,200", rank: "Above Average" },
        { city: "New York, NY", price: "$4,100", rank: "Expensive" },
      ],
    },
    {
      procedure: "Emergency Room Visit",
      locations: [
        { city: "Denver, CO", price: "$2,400", rank: "Best Value" },
        { city: "Austin, TX", price: "$2,800", rank: "Good Value" },
        { city: "Atlanta, GA", price: "$3,500", rank: "Above Average" },
        { city: "Miami, FL", price: "$4,200", rank: "Expensive" },
      ],
    },
  ];

  const hospitalSpotlight = [
    {
      name: "Boston Medical Center",
      city: "Boston, MA",
      rating: 4.8,
      transparencyScore: 96,
      specialties: ["Cardiology", "Neurology", "Emergency Care"],
      priceRange: "Below Average",
      verified: true,
    },
    {
      name: "Seattle Children's Hospital",
      city: "Seattle, WA",
      rating: 4.9,
      transparencyScore: 94,
      specialties: ["Pediatrics", "Oncology", "Surgery"],
      priceRange: "Average",
      verified: true,
    },
    {
      name: "Denver Health Medical Center",
      city: "Denver, CO",
      rating: 4.6,
      transparencyScore: 91,
      specialties: ["Emergency", "Trauma", "Surgery"],
      priceRange: "Below Average",
      verified: true,
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
        currentPage="exploreByLocation"
      />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Healthcare by Location
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Explore healthcare pricing, transparency scores, and hospital
                quality across cities, states, and regions nationwide.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto">
                <div className="relative flex-1 w-full">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Enter city, state, or ZIP code..."
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ma">Massachusetts</SelectItem>
                    <SelectItem value="wa">Washington</SelectItem>
                    <SelectItem value="ca">California</SelectItem>
                    <SelectItem value="co">Colorado</SelectItem>
                    <SelectItem value="tx">Texas</SelectItem>
                  </SelectContent>
                </Select>
                <Button>
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Top Markets */}
        <section className="py-12 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Top Performing Markets</h2>
                <Select
                  value={selectedMetric}
                  onValueChange={setSelectedMetric}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="transparency">
                      Transparency Score
                    </SelectItem>
                    <SelectItem value="savings">Average Savings</SelectItem>
                    <SelectItem value="hospitals">Hospital Count</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-6">
                {topMarkets.map((market, index) => (
                  <Card
                    key={index}
                    className={`${market.featured ? "border-primary" : ""} hover:shadow-lg transition-shadow`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Building className="w-6 h-6 text-primary" />
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-semibold">
                                {market.city}
                              </h3>
                              {market.featured && (
                                <Badge className="bg-primary text-white">
                                  Top Rated
                                </Badge>
                              )}
                              <div
                                className={`flex items-center gap-1 ${
                                  market.trend === "up"
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {market.trend === "up" ? (
                                  <TrendingUp className="w-4 h-4" />
                                ) : (
                                  <TrendingDown className="w-4 h-4" />
                                )}
                                <span className="text-sm font-medium">
                                  {market.change}
                                </span>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div>
                                <p className="text-muted-foreground">
                                  Transparency Score
                                </p>
                                <p className="font-semibold text-primary">
                                  {market.transparencyScore}%
                                </p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">
                                  Hospitals
                                </p>
                                <p className="font-semibold">
                                  {market.hospitals}
                                </p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">
                                  Avg. Savings
                                </p>
                                <p className="font-semibold text-green-600">
                                  {market.avgSavings}
                                </p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">
                                  Metro Population
                                </p>
                                <p className="font-semibold">
                                  {market.population}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Button variant="secondary">
                          <Eye className="w-4 h-4 mr-2" />
                          Explore
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* State Leaderboard & Procedure Comparisons */}
        <section className="py-12 bg-gray-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* State Leaderboard */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-primary" />
                      State Transparency Leaderboard
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {stateLeaderboard.map((state, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-white rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                index === 0
                                  ? "bg-yellow-100 text-yellow-800"
                                  : index === 1
                                    ? "bg-gray-100 text-gray-800"
                                    : index === 2
                                      ? "bg-orange-100 text-orange-800"
                                      : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {state.rank}
                            </div>
                            <div>
                              <p className="font-medium">{state.state}</p>
                              <p className="text-xs text-muted-foreground">
                                {state.hospitals} hospitals
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-primary">
                              {state.score}%
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Procedure Comparisons */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-primary" />
                      Procedure Price Comparisons
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {procedureComparisons.map((comparison, index) => (
                        <div key={index}>
                          <h4 className="font-semibold mb-3">
                            {comparison.procedure}
                          </h4>
                          <div className="space-y-2">
                            {comparison.locations.map((location, locIndex) => (
                              <div
                                key={locIndex}
                                className="flex items-center justify-between p-2 bg-white rounded"
                              >
                                <span className="text-sm">{location.city}</span>
                                <div className="flex items-center gap-2">
                                  <span className="font-semibold">
                                    {location.price}
                                  </span>
                                  <Badge
                                    variant={
                                      location.rank === "Best Value"
                                        ? "default"
                                        : location.rank === "Good Value"
                                          ? "secondary"
                                          : location.rank === "Above Average"
                                            ? "outline"
                                            : "destructive"
                                    }
                                    className="text-xs"
                                  >
                                    {location.rank}
                                  </Badge>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Hospital Spotlight */}
        <section className="py-12 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Hospital Spotlight</h2>

              <div className="grid md:grid-cols-3 gap-6">
                {hospitalSpotlight.map((hospital, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold mb-1">
                            {hospital.name}
                          </h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {hospital.city}
                          </p>
                        </div>
                        {hospital.verified && (
                          <Badge className="bg-green-100 text-green-800">
                            <Shield className="w-3 h-3 mr-1" />
                            Verified
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
                              {hospital.rating}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            Transparency
                          </span>
                          <span className="font-semibold text-primary">
                            {hospital.transparencyScore}%
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            Price Range
                          </span>
                          <Badge variant="secondary">{hospital.priceRange}</Badge>
                        </div>

                        <div>
                          <p className="text-sm text-muted-foreground mb-2">
                            Specialties
                          </p>
                          <div className="flex flex-wrap gap-1">
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
                      </div>

                      <Button className="w-full mt-4" variant="secondary">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
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
