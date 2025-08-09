import { useState, useMemo } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  Search,
  Filter,
  Shield,
  TrendingUp,
  Users,
  ChevronRight,
  Building2,
  Star,
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

interface Insurer {
  id: string;
  name: string;
  slug: string;
  type: string;
  states: string[];
  memberCount: number;
  networkSize: number;
  avgPremium: number;
  satisfactionScore: number;
  coverageTypes: string[];
  topPartners: string[];
  featured?: boolean;
}

interface InsurersPageProps {
  insurers: Insurer[];
  types: string[];
  states: string[];
  totalCount: number;
}

export default function InsurersPage({
  insurers,
  types,
  states,
  totalCount,
}: InsurersPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [sortBy, setSortBy] = useState("name");

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

  const filteredAndSortedInsurers = useMemo(() => {
    let filtered = insurers.filter((insurer) => {
      const matchesSearch =
        insurer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        insurer.type.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = !selectedType || insurer.type === selectedType;
      const matchesState =
        !selectedState || insurer.states.includes(selectedState);

      return matchesSearch && matchesType && matchesState;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "members":
          return b.memberCount - a.memberCount;
        case "network":
          return b.networkSize - a.networkSize;
        case "satisfaction":
          return b.satisfactionScore - a.satisfactionScore;
        case "premium":
          return a.avgPremium - b.avgPremium;
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [insurers, searchTerm, selectedType, selectedState, sortBy]);

  const featuredInsurers = insurers.filter((i) => i.featured).slice(0, 3);

  return (
    <>
      <Head>
        <title>
          Insurance Directory - Compare Health Insurance Plans | Hospital Fees
        </title>
        <meta
          name="description"
          content="Browse our comprehensive directory of health insurance providers. Compare coverage, networks, and costs to find the right plan for your needs."
        />
        <meta
          name="keywords"
          content="health insurance, insurance providers, coverage comparison, health plans"
        />
      </Head>

      <Navigation />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <h1 className="text-4xl font-bold text-gray-900">
                  Insurance Directory
                </h1>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                Find health insurance providers by name, type, or coverage area.
                Compare plans and networks across {totalCount.toLocaleString()}{" "}
                insurance companies.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search by insurance company or plan type..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Featured Insurers */}
          {featuredInsurers.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Featured Insurance Providers
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredInsurers.map((insurer) => (
                  <Link key={insurer.id} href={`/insurer/${insurer.slug}`}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <Badge className="bg-blue-100 text-blue-800">
                            Featured
                          </Badge>
                          <div className="text-lg font-semibold text-primary">
                            {insurer.satisfactionScore}/5
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {insurer.name}
                        </h3>
                        <div className="text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            {insurer.type}
                          </div>
                        </div>
                        <div className="text-sm text-gray-800">
                          Members: {insurer.memberCount.toLocaleString()}
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
                  Insurance Type
                </label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="All types" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {types.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

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
                  Sort by
                </label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="members">Member Count</SelectItem>
                    <SelectItem value="network">Network Size</SelectItem>
                    <SelectItem value="satisfaction">
                      Satisfaction Score
                    </SelectItem>
                    <SelectItem value="premium">Average Premium</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedType("");
                    setSelectedState("");
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
                {filteredAndSortedInsurers.length} Insurance Providers Found
              </h3>
            </div>

            <div className="divide-y">
              {filteredAndSortedInsurers.map((insurer) => (
                <Link key={insurer.id} href={`/insurer/${insurer.slug}`}>
                  <div className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-primary hover:text-primary/80">
                          {insurer.name}
                        </h4>
                        <div className="mt-1">
                          <div className="text-sm font-medium text-gray-900">
                            {insurer.type}
                          </div>
                          <div className="text-sm text-gray-600">
                            Available in {insurer.states.join(", ")}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                          <div>
                            <div className="text-gray-600">Members</div>
                            <div className="font-medium">
                              {insurer.memberCount.toLocaleString()}
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-600">Network Size</div>
                            <div className="font-medium">
                              {insurer.networkSize.toLocaleString()}
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-600">Avg Premium</div>
                            <div className="font-medium">
                              ${insurer.avgPremium.toLocaleString()}/month
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-600">Satisfaction</div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="font-medium">
                                {insurer.satisfactionScore}/5
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-3">
                          <div className="text-sm text-gray-600 mb-2">
                            Coverage Types:
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {insurer.coverageTypes
                              .slice(0, 4)
                              .map((coverage, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {coverage}
                                </Badge>
                              ))}
                            {insurer.coverageTypes.length > 4 && (
                              <Badge variant="secondary" className="text-xs">
                                +{insurer.coverageTypes.length - 4} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        {insurer.topPartners.length > 0 && (
                          <div className="mt-3">
                            <div className="text-sm text-gray-600 mb-1">
                              Top Hospital Partners:
                            </div>
                            <div className="text-sm text-gray-800">
                              {insurer.topPartners.slice(0, 3).join(", ")}
                              {insurer.topPartners.length > 3 &&
                                ` +${insurer.topPartners.length - 3} more`}
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
                Need help choosing the right insurance plan?
              </h3>
              <p className="text-gray-600 mb-6">
                Compare coverage options and find plans that work with your
                preferred hospitals and doctors.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/search-procedure">
                  <Button variant="secondary">Compare by Procedure</Button>
                </Link>
                <Link href="/tools/insurance-calculator">
                  <Button variant="secondary">Insurance Calculator</Button>
                </Link>
                <Link href="/explore/location">
                  <Button variant="secondary">Browse by Location</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterExpanded />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Mock data for demonstration
  const mockInsurers: Insurer[] = [
    {
      id: "1",
      name: "Blue Cross Blue Shield",
      slug: "blue-cross-blue-shield",
      type: "Health Maintenance Organization (HMO)",
      states: ["CA", "NY", "TX", "FL"],
      memberCount: 36000000,
      networkSize: 85000,
      avgPremium: 425,
      satisfactionScore: 4.2,
      coverageTypes: ["Individual", "Family", "Medicare", "Medicaid"],
      topPartners: ["UCSF Medical Center", "Cedars-Sinai", "Stanford Health"],
      featured: true,
    },
    {
      id: "2",
      name: "Kaiser Permanente",
      slug: "kaiser-permanente",
      type: "Health Maintenance Organization (HMO)",
      states: ["CA", "CO", "OR", "WA"],
      memberCount: 12500000,
      networkSize: 23000,
      avgPremium: 380,
      satisfactionScore: 4.5,
      coverageTypes: ["Individual", "Family", "Medicare"],
      topPartners: [
        "Kaiser Oakland",
        "Kaiser San Francisco",
        "Kaiser Los Angeles",
      ],
      featured: true,
    },
    {
      id: "3",
      name: "Aetna",
      slug: "aetna",
      type: "Preferred Provider Organization (PPO)",
      states: ["CA", "NY", "TX", "FL", "IL"],
      memberCount: 22300000,
      networkSize: 125000,
      avgPremium: 465,
      satisfactionScore: 4.0,
      coverageTypes: ["Individual", "Family", "Medicare", "Dental"],
      topPartners: ["Mayo Clinic", "Cleveland Clinic", "Johns Hopkins"],
      featured: true,
    },
  ];

  const types = [
    "Health Maintenance Organization (HMO)",
    "Preferred Provider Organization (PPO)",
    "Exclusive Provider Organization (EPO)",
    "Point of Service (POS)",
  ];
  const states = ["CA", "NY", "TX", "FL", "IL", "CO", "OR", "WA"];

  return {
    props: {
      insurers: mockInsurers,
      types,
      states,
      totalCount: mockInsurers.length,
    },
  };
};
