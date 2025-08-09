import { useState, useMemo } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  Search,
  Filter,
  MapPin,
  Star,
  TrendingUp,
  Hospital,
  ChevronRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Navigation } from "../components/Navigation";
import { FooterExpanded } from "../components/homepage/FooterExpanded";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import ErrorBoundary, { PageErrorFallback } from "../components/ErrorBoundary";
import {
  HospitalListLoading,
  SearchLoading,
} from "../components/LoadingStates";
import {
  MedicalDisclaimer,
  DataSourceAttribution,
} from "../components/LegalCompliance";
import { Hospital as HospitalType } from "../types";

interface HospitalsPageProps {
  hospitals: HospitalType[];
  states: string[];
  cities: string[];
  totalCount: number;
}

function HospitalsPage({
  hospitals,
  states,
  cities,
  totalCount,
}: HospitalsPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [isLoading, setIsLoading] = useState(false);

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

  const filteredAndSortedHospitals = useMemo(() => {
    let filtered = hospitals.filter((hospital) => {
      const matchesSearch =
        hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hospital.city.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesState = !selectedState || hospital.state === selectedState;
      const matchesCity = !selectedCity || hospital.city === selectedCity;

      return matchesSearch && matchesState && matchesCity;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "transparency":
          return b.transparencyScore - a.transparencyScore;
        case "cost":
          return a.avgCost - b.avgCost;
        case "procedures":
          return b.totalProcedures - a.totalProcedures;
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [hospitals, searchTerm, selectedState, selectedCity, sortBy]);

  const featuredHospitals = hospitals.filter((h) => h.featured).slice(0, 3);

  return (
    <>
      <Head>
        <title>
          Hospital Directory - Find & Compare Hospitals | Hospital Fees
        </title>
        <meta
          name="description"
          content="Browse our comprehensive directory of hospitals. Compare costs, transparency scores, and find detailed pricing information for medical procedures."
        />
        <meta
          name="keywords"
          content="hospital directory, hospital costs, medical procedures, healthcare prices"
        />
      </Head>

      <Navigation />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Hospital className="w-8 h-8 text-primary" />
                <h1 className="text-4xl font-bold text-gray-900">
                  Hospital Directory
                </h1>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                Find hospitals by name, location, or rating. Compare costs and
                transparency across {totalCount.toLocaleString()} healthcare
                facilities.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search by hospital name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Featured Hospitals */}
          {featuredHospitals.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Featured Hospitals
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredHospitals.map((hospital) => (
                  <Link key={hospital.id} href={`/hospital/${hospital.slug}`}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <Badge className="bg-blue-100 text-blue-800">
                            Featured
                          </Badge>
                          <div className="text-lg font-semibold text-primary">
                            {hospital.transparencyScore}/100
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {hospital.name}
                        </h3>
                        <div className="text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {hospital.city}, {hospital.state}
                          </div>
                        </div>
                        <div className="text-sm text-gray-800">
                          Avg Cost: ${hospital.avgCost.toLocaleString()}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-900">
                Filter Results
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State
                </label>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger>
                    <SelectValue placeholder="All states" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {states.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger>
                    <SelectValue placeholder="All cities" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort by
                </label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="transparency">
                      Transparency Score
                    </SelectItem>
                    <SelectItem value="cost">Average Cost</SelectItem>
                    <SelectItem value="procedures">Total Procedures</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedState("");
                    setSelectedCity("");
                    setSortBy("name");
                  }}
                  variant="secondary"
                  className="w-full"
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="px-6 py-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">
                {filteredAndSortedHospitals.length} Hospitals Found
              </h3>
            </div>

            <div className="divide-y">
              {filteredAndSortedHospitals.map((hospital) => (
                <Link key={hospital.id} href={`/hospital/${hospital.slug}`}>
                  <div className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-primary hover:text-primary/80">
                          {hospital.name}
                        </h4>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {hospital.address.city}, {hospital.address.state}{" "}
                            {hospital.address.zip}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            {hospital.transparencyScore}/100 Transparency
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />$
                            {hospital.avgCost.toLocaleString()} Avg Cost
                          </div>
                        </div>

                        <div className="mt-3">
                          <div className="text-sm text-gray-600 mb-2">
                            Top Procedures:
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {hospital.topProcedures
                              .slice(0, 4)
                              .map((procedure, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {procedure}
                                </Badge>
                              ))}
                            {hospital.topProcedures.length > 4 && (
                              <Badge variant="secondary" className="text-xs">
                                +{hospital.topProcedures.length - 4} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        {hospital.network.length > 0 && (
                          <div className="mt-3">
                            <div className="text-sm text-gray-600 mb-1">
                              In-Network With:
                            </div>
                            <div className="text-sm text-gray-800">
                              {hospital.network.slice(0, 3).join(", ")}
                              {hospital.network.length > 3 &&
                                ` +${hospital.network.length - 3} more`}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Can't find what you're looking for?
              </h3>
              <p className="text-gray-600 mb-6">
                Try our advanced search tools or explore by procedure and
                location.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/search-procedure">
                  <Button variant="secondary">Search by Procedure</Button>
                </Link>
                <Link href="/tools/cost-calculator">
                  <Button variant="secondary">Cost Calculator</Button>
                </Link>
                <Link href="/explore/location">
                  <Button variant="secondary">Browse by Location</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Legal Compliance Section */}
          <div className="mt-12 space-y-6">
            <MedicalDisclaimer variant="banner" />
            <DataSourceAttribution
              sources={[
                "CMS Hospital Price Transparency Data",
                "California Hospital Association Public Filings",
                "Medicare Cost Reports",
                "State Health Department Data",
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
const HospitalsPageWithErrorBoundary = (props: HospitalsPageProps) => (
  <ErrorBoundary fallback={PageErrorFallback}>
    <HospitalsPage {...props} />
  </ErrorBoundary>
);

export default HospitalsPageWithErrorBoundary;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Mock data for demonstration using standardized Hospital type
  const mockHospitals: HospitalType[] = [
    {
      id: "1",
      name: "UCSF Medical Center",
      slug: "ucsf-medical-center",
      type: "hospital",
      address: {
        city: "San Francisco",
        state: "CA",
        zip: "94143",
      },
      website: "https://www.ucsfhealth.org",
      phone: "(415) 476-1000",
      description:
        "Leading academic medical center providing comprehensive specialty care and advanced treatments.",
      transparencyScore: 95,
      avgCost: 8500,
      totalProcedures: 12000,
      topProcedures: [
        "Heart Surgery",
        "Cancer Treatment",
        "Emergency Care",
        "Orthopedics",
      ],
      network: ["Blue Cross", "Aetna", "Kaiser"],
      specialties: ["Cardiology", "Oncology", "Neurosurgery", "Transplant"],
      lastUpdated: "2024-12-15",
      featured: true,
    },
    {
      id: "2",
      name: "Cedars-Sinai Medical Center",
      slug: "cedars-sinai-medical-center",
      type: "hospital",
      address: {
        city: "Los Angeles",
        state: "CA",
        zip: "90048",
      },
      website: "https://www.cedars-sinai.org",
      phone: "(310) 423-3277",
      description:
        "Premier non-profit medical center known for excellence in patient care and medical research.",
      transparencyScore: 92,
      avgCost: 9200,
      totalProcedures: 15000,
      topProcedures: [
        "Cardiology",
        "Neurosurgery",
        "Gastroenterology",
        "Oncology",
      ],
      network: ["Blue Cross", "UnitedHealth", "Cigna"],
      specialties: [
        "Cardiology",
        "Neurosurgery",
        "Gastroenterology",
        "Emergency Medicine",
      ],
      lastUpdated: "2024-12-15",
      featured: true,
    },
    {
      id: "3",
      name: "Stanford Health Care",
      slug: "stanford-health-care",
      type: "hospital",
      address: {
        city: "Palo Alto",
        state: "CA",
        zip: "94304",
      },
      website: "https://stanfordhealthcare.org",
      phone: "(650) 723-4000",
      description:
        "World-renowned medical center affiliated with Stanford University School of Medicine.",
      transparencyScore: 88,
      avgCost: 7800,
      totalProcedures: 10000,
      topProcedures: [
        "Transplant Surgery",
        "Pediatrics",
        "Women's Health",
        "Radiology",
      ],
      network: ["Aetna", "Kaiser", "Humana"],
      specialties: [
        "Transplant Surgery",
        "Pediatrics",
        "Women's Health",
        "Advanced Imaging",
      ],
      lastUpdated: "2024-12-15",
      featured: true,
    },
  ];

  const states = ["CA"];
  const cities = ["San Francisco", "Los Angeles", "Palo Alto"];

  return {
    props: {
      hospitals: mockHospitals,
      states,
      cities,
      totalCount: mockHospitals.length,
    },
  };
};
