import Head from "next/head";
import Link from "next/link";
import { GetServerSideProps } from "next";
import {
  BarChart3,
  TrendingUp,
  PieChart,
  LineChart,
  MapPin,
  Calendar,
  ArrowRight,
  Filter,
  Download,
  Share2,
  ChevronRight,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Navigation } from "../../components/Header";
import { FooterExpanded } from "../../components/homepage/FooterExpanded";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

export default function VisualizationsPage() {
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

  const visualizations = [
    {
      id: "1",
      title: "National Healthcare Cost Trends",
      description:
        "Track how medical procedure costs have changed over the past 5 years",
      type: "Line Chart",
      category: "Trends",
      lastUpdated: "2024-01-15",
      featured: true,
      icon: LineChart,
    },
    {
      id: "2",
      title: "Regional Price Variations",
      description:
        "Compare average costs for common procedures across different states",
      type: "Heat Map",
      category: "Geographic",
      lastUpdated: "2024-01-10",
      featured: true,
      icon: MapPin,
    },
    {
      id: "3",
      title: "Insurance Market Share",
      description:
        "Breakdown of major insurance providers by region and member count",
      type: "Pie Chart",
      category: "Insurance",
      lastUpdated: "2024-01-08",
      featured: false,
      icon: PieChart,
    },
    {
      id: "4",
      title: "Hospital Transparency Scores",
      description:
        "Distribution of price transparency compliance across hospitals",
      type: "Bar Chart",
      category: "Compliance",
      lastUpdated: "2024-01-05",
      featured: true,
      icon: BarChart3,
    },
  ];

  const featuredCharts = visualizations.filter((v) => v.featured);
  const categories = [...new Set(visualizations.map((v) => v.category))];

  return (
    <>
      <Head>
        <title>Healthcare Data Visualizations | Hospital Fees</title>
        <meta
          name="description"
          content="Interactive charts and data visualizations showing healthcare cost trends, regional variations, and market insights."
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
                <span className="text-gray-900">Data Visualizations</span>
              </nav>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Data Visualizations
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Interactive charts and graphs revealing healthcare cost
                patterns, trends, and market insights.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Featured Visualizations */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Featured Charts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredCharts.map((chart) => (
                <Card
                  key={chart.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{chart.type}</Badge>
                      <chart.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{chart.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{chart.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        Updated {chart.lastUpdated}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="secondary" size="sm">
                          <Share2 className="w-4 h-4 mr-1" />
                          Share
                        </Button>
                        <Button size="sm">
                          View Chart
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Browse by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <Card
                  key={category}
                  className="hover:shadow-md transition-shadow cursor-pointer"
                >
                  <CardContent className="p-4 text-center">
                    <h3 className="font-medium text-gray-900">{category}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {
                        visualizations.filter((v) => v.category === category)
                          .length
                      }{" "}
                      charts
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Visualizations */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                All Visualizations
              </h2>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="secondary" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visualizations.map((chart) => (
                <Card
                  key={chart.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{chart.category}</Badge>
                      <chart.icon className="w-4 h-4 text-gray-500" />
                    </div>
                    <CardTitle className="text-base">{chart.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      {chart.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {chart.type}
                      </span>
                      <Button variant="ghost" size="sm">
                        View
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Need custom analysis?
              </h3>
              <p className="text-gray-600 mb-6">
                Contact us for specialized data visualizations and custom
                reports.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/provider-feedback">
                  <Button>Request Custom Analysis</Button>
                </Link>
                <Link href="/insights/truths">
                  <Button variant="secondary">Explore Insights</Button>
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
  return {
    props: {},
  };
};
