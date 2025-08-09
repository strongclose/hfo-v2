import React from "react";
import Head from "next/head";
import { Navigation } from "../components/Header";
import { FooterExpanded } from "../components/homepage/FooterExpanded";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import ErrorBoundary, { PageErrorFallback } from "../components/ErrorBoundary";
import {
  Database,
  FileText,
  Building,
  Shield,
  Users,
  Calendar,
  ExternalLink,
  CheckCircle,
} from "lucide-react";

export default function SourcesPage() {
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

  const dataSources = [
    {
      name: "CMS Hospital Price Transparency",
      type: "Federal Government",
      icon: Building,
      description:
        "Machine-readable files published by hospitals containing standard charges for items and services.",
      frequency: "Annual",
      coverage: "All US hospitals",
      reliability: "High",
      lastUpdated: "January 2024",
      url: "https://www.cms.gov/hospital-price-transparency",
    },
    {
      name: "Medicare Cost Reports",
      type: "Federal Government",
      icon: FileText,
      description:
        "Annual cost reports filed by Medicare-certified hospitals showing financial and statistical data.",
      frequency: "Annual",
      coverage: "Medicare-certified facilities",
      reliability: "High",
      lastUpdated: "2023 Fiscal Year",
      url: "https://www.cms.gov/Research-Statistics-Data-and-Systems/Downloadable-Public-Use-Files/Cost-Reports",
    },
    {
      name: "State Insurance Commission Filings",
      type: "State Government",
      icon: Shield,
      description:
        "Rate filings and network data submitted by insurance companies to state regulators.",
      frequency: "Quarterly",
      coverage: "State-specific",
      reliability: "High",
      lastUpdated: "Q4 2024",
      url: "#",
    },
    {
      name: "Provider Network Directories",
      type: "Insurance Companies",
      icon: Users,
      description:
        "Published provider networks showing which doctors and hospitals are covered by insurance plans.",
      frequency: "Monthly",
      coverage: "Plan-specific",
      reliability: "Medium",
      lastUpdated: "December 2024",
      url: "#",
    },
    {
      name: "Healthcare.gov Plan Data",
      type: "Federal Government",
      icon: Database,
      description:
        "Plan information and pricing for Affordable Care Act marketplace insurance plans.",
      frequency: "Annual",
      coverage: "ACA marketplace plans",
      reliability: "High",
      lastUpdated: "2024 Open Enrollment",
      url: "https://www.healthcare.gov",
    },
    {
      name: "State Health Department Data",
      type: "State Government",
      icon: Building,
      description:
        "Licensed provider information and healthcare facility quality ratings.",
      frequency: "Quarterly",
      coverage: "State-licensed providers",
      reliability: "High",
      lastUpdated: "November 2024",
      url: "#",
    },
  ];

  const dataQuality = [
    {
      title: "Accuracy Verification",
      description:
        "We cross-reference data across multiple sources to identify and correct discrepancies.",
    },
    {
      title: "Freshness Monitoring",
      description:
        "Automated systems track when data sources are updated and refresh our database accordingly.",
    },
    {
      title: "Outlier Detection",
      description:
        "Statistical analysis identifies unusual pricing patterns that may indicate data errors.",
    },
    {
      title: "Provider Feedback",
      description:
        "Healthcare providers can report inaccuracies through our feedback system for correction.",
    },
  ];

  const limitations = [
    "Pricing data reflects standard charges, not negotiated rates for all insurance plans",
    "Some hospitals may not fully comply with price transparency requirements",
    "Data may not reflect the most current pricing due to reporting delays",
    "Complex cases may result in costs different from standard pricing",
    "Geographic coverage varies by data source availability",
  ];

  return (
    <>
      <Head>
        <title>Data Sources - Hospital Fees</title>
        <meta
          name="description"
          content="Detailed information about Hospital Fees data sources, methodology, and quality assurance processes for healthcare pricing transparency."
        />
        <meta
          name="keywords"
          content="data sources, methodology, healthcare data, price transparency, data quality"
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
        currentPage="sources"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="mb-6">
              <div className="mx-auto p-3 bg-blue-100 rounded-full w-fit mb-4">
                <Database className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Data Sources & Methodology
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Transparency about our transparency. Learn about the data
                sources, collection methods, and quality assurance processes
                behind Hospital Fees.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Overview */}
          <div className="mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Our Commitment to Data Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Hospital Fees aggregates and analyzes healthcare pricing data
                  from multiple authoritative sources to provide the most
                  comprehensive and accurate view of healthcare costs. We are
                  committed to transparency in our methodology and continuously
                  work to improve data quality.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">6</div>
                    <div className="text-sm text-gray-600">
                      Primary Data Sources
                    </div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">50+</div>
                    <div className="text-sm text-gray-600">States Covered</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      10M+
                    </div>
                    <div className="text-sm text-gray-600">
                      Data Points Processed
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Data Sources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Primary Data Sources
            </h2>
            <div className="space-y-6">
              {dataSources.map((source, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <source.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">
                              {source.name}
                            </h3>
                            <Badge variant="secondary" className="mt-1">
                              {source.type}
                            </Badge>
                          </div>
                          {source.url !== "#" && (
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>

                        <p className="text-gray-600 mb-4">
                          {source.description}
                        </p>

                        <div className="grid md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <div className="font-medium text-gray-700">
                              Update Frequency
                            </div>
                            <div className="text-gray-600">
                              {source.frequency}
                            </div>
                          </div>
                          <div>
                            <div className="font-medium text-gray-700">
                              Coverage
                            </div>
                            <div className="text-gray-600">
                              {source.coverage}
                            </div>
                          </div>
                          <div>
                            <div className="font-medium text-gray-700">
                              Reliability
                            </div>
                            <div className="text-gray-600">
                              <span
                                className={`inline-flex items-center ${
                                  source.reliability === "High"
                                    ? "text-green-600"
                                    : "text-yellow-600"
                                }`}
                              >
                                <CheckCircle className="h-3 w-3 mr-1" />
                                {source.reliability}
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="font-medium text-gray-700">
                              Last Updated
                            </div>
                            <div className="text-gray-600">
                              <Calendar className="h-3 w-3 inline mr-1" />
                              {source.lastUpdated}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Data Quality Assurance */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Quality Assurance Process
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {dataQuality.map((process, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {process.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {process.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Limitations & Disclaimers */}
          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-yellow-800">
                Important Limitations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-yellow-700 mb-4">
                While we strive for accuracy and completeness, healthcare
                pricing data has inherent limitations:
              </p>
              <ul className="space-y-2">
                {limitations.map((limitation, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-yellow-700"
                  >
                    <span className="text-yellow-600 mt-1">•</span>
                    <span className="text-sm">{limitation}</span>
                  </li>
                ))}
              </ul>
              <p className="text-yellow-700 text-sm mt-4">
                Always verify pricing and coverage directly with healthcare
                providers and insurance companies before making medical
                decisions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <FooterExpanded />
    </>
  );
}

// Wrap the main component with error boundary
const SourcesPageWithErrorBoundary = () => (
  <ErrorBoundary fallback={PageErrorFallback}>
    <SourcesPage />
  </ErrorBoundary>
);

export default SourcesPageWithErrorBoundary;
