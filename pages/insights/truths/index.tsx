import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import {
  Search,
  Filter,
  Clock,
  Calendar,
  TrendingUp,
  Tag,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { Navigation } from "../../../components/Header";
import { FooterExpanded } from "../../../components/homepage/FooterExpanded";
import { ShockingTruth, InsightCategory } from "../../../lib/types/insights";
import {
  getAllShockingTruths,
  insightCategories,
} from "../../../lib/data/insights";

interface ShockingTruthsIndexProps {
  truths: ShockingTruth[];
  categories: InsightCategory[];
}

export default function ShockingTruthsIndex({
  truths,
  categories,
}: ShockingTruthsIndexProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

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
  const handleNavigateToBlog = () => (window.location.href = "/blog");
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

  const filteredTruths = truths.filter((truth) => {
    const matchesSearch =
      truth.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      truth.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory ||
      truth.procedureTags.some((tag) =>
        tag.toLowerCase().includes(selectedCategory.toLowerCase()),
      );
    const matchesRegion =
      !selectedRegion || truth.regionTags.includes(selectedRegion);

    return matchesSearch && matchesCategory && matchesRegion;
  });

  const featuredTruths = truths.filter((truth) => truth.featured);
  const allRegions = [...new Set(truths.flatMap((t) => t.regionTags))].sort();

  return (
    <>
      <Head>
        <title>
          Shocking Healthcare Truths - Price Transparency Insights | Hospital
          Fees
        </title>
        <meta
          name="description"
          content="Discover shocking truths about healthcare pricing. Uncover hidden fees, price variations, and billing practices that impact your medical costs."
        />
        <meta
          name="keywords"
          content="healthcare costs, medical billing, price transparency, hospital fees, shocking truths"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Shocking Healthcare Truths | Hospital Fees"
        />
        <meta
          property="og:description"
          content="Discover shocking truths about healthcare pricing and billing practices."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://hospitalfees.org/insights/truths"
        />
      </Head>

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
        currentPage="insights"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center max-w-3xl mx-auto">
              <nav className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-6">
                <Link href="/insights" className="hover:text-primary">
                  Insights
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-gray-900">Shocking Truths</span>
              </nav>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Shocking Healthcare Truths
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Uncovering hidden fees, price variations, and billing practices
                that impact your healthcare costs.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search shocking truths..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Featured Truths */}
          {featuredTruths.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Featured Insights
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {featuredTruths.slice(0, 2).map((truth) => (
                  <Card
                    key={truth.id}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <Badge variant="destructive" className="mb-2">
                          Featured
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {truth.readingTime} min
                        </div>
                      </div>
                      <CardTitle className="text-xl line-clamp-2">
                        <Link
                          href={`/insights/truths/${truth.slug}`}
                          className="hover:text-primary"
                        >
                          {truth.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 line-clamp-3 mb-4">
                        {truth.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {truth.procedureTags.slice(0, 2).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {truth.regionTags.slice(0, 2).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          {new Date(truth.publishedDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "numeric",
                              day: "numeric",
                              timeZone: "UTC",
                            },
                          )}
                        </div>
                        <Link href={`/insights/truths/${truth.slug}`}>
                          <Button variant="secondary" size="sm">
                            Read More
                            <ChevronRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <span className="font-medium text-gray-700">Filters:</span>
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="">All Categories</option>
                <option value="price">Price Variations</option>
                <option value="billing">Billing & Fees</option>
                <option value="insurance">Insurance Issues</option>
                <option value="emergency">Emergency Care</option>
              </select>

              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="">All Regions</option>
                {allRegions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>

              <div className="ml-auto text-sm text-gray-600">
                {filteredTruths.length} insights found
              </div>
            </div>
          </div>

          {/* Truths Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTruths.map((truth) => (
              <Card
                key={truth.id}
                className="hover:shadow-lg transition-shadow h-full"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      {truth.readingTime} min read
                    </div>
                    {truth.featured && (
                      <Badge variant="destructive" className="text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg line-clamp-2">
                    <Link
                      href={`/insights/truths/${truth.slug}`}
                      className="hover:text-primary"
                    >
                      {truth.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {truth.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {truth.procedureTags.slice(0, 2).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs flex items-center gap-1"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </Badge>
                      ))}
                      {truth.regionTags.slice(0, 1).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs flex items-center gap-1"
                        >
                          <MapPin className="w-3 h-3" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {new Date(truth.publishedDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                          timeZone: "UTC",
                        },
                      )}
                    </div>
                    <Link href={`/insights/truths/${truth.slug}`}>
                      <Button variant="secondary" size="sm">
                        Read
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-primary/10 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Want to explore your own healthcare costs?
              </h3>
              <p className="text-gray-600 mb-6">
                Use our tools to find transparent pricing and compare costs in
                your area.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/search-procedure">
                  <Button>Search Procedures</Button>
                </Link>
                <Link href="/tools/cost-calculator">
                  <Button variant="secondary">Cost Calculator</Button>
                </Link>
                <Link href="/hospitals">
                  <Button variant="secondary">Browse Hospitals</Button>
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

export const getServerSideProps: GetServerSideProps = async () => {
  const truths = await getAllShockingTruths();

  return {
    props: {
      truths,
      categories: insightCategories,
    },
  };
};
