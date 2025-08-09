import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { TertiaryCTA } from "../components/ui/TertiaryCTA";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Navigation } from "../components/Navigation";
import { FooterExpanded } from "../components/homepage/FooterExpanded";
import {
  Home,
  Search,
  ArrowLeft,
  Hospital,
  Users,
  Shield,
  AlertTriangle,
} from "lucide-react";

export default function Custom404() {
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

  const quickLinks = [
    {
      title: "Search Hospitals",
      description: "Find and compare hospital costs",
      icon: Hospital,
      href: "/hospitals",
    },
    {
      title: "Find Doctors",
      description: "Browse doctor profiles and pricing",
      icon: Users,
      href: "/doctors",
    },
    {
      title: "Insurance Plans",
      description: "Compare insurance providers",
      icon: Shield,
      href: "/insurers",
    },
    {
      title: "Cost Calculator",
      description: "Estimate your healthcare costs",
      icon: Search,
      href: "/tools/cost-calculator",
    },
  ];

  return (
    <>
      <Head>
        <title>Page Not Found - Hospital Fees</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Find healthcare cost information and tools on Hospital Fees."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Navigation />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main 404 Content */}
          <div className="text-center mb-12">
            <div className="mx-auto mb-6 p-4 bg-red-100 rounded-full w-fit">
              <AlertTriangle className="h-12 w-12 text-red-600" />
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Sorry, we couldn't find the page you're looking for. The page may
              have been moved, deleted, or the URL might be incorrect.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild>
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Go Home
                </Link>
              </Button>

              <Button variant="secondary" onClick={() => window.history.back()}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
              Popular Healthcare Tools
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <Link key={index} href={link.href}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-3 p-3 bg-blue-100 rounded-full w-fit">
                        <link.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{link.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center text-sm">
                        {link.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Search Section */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="text-center py-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Still looking for something specific?
              </h3>
              <p className="text-gray-600 mb-6">
                Try searching for hospitals, procedures, or insurance
                information
              </p>

              <div className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Search healthcare providers..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        const query = (e.target as HTMLInputElement).value;
                        window.location.href = `/search?q=${encodeURIComponent(query)}`;
                      }
                    }}
                  />
                  <Button>
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Help Section */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Need Help?
            </h3>
            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <TertiaryCTA href="/faq">Frequently Asked Questions</TertiaryCTA>
              <TertiaryCTA href="/contact">Contact Support</TertiaryCTA>
              <TertiaryCTA href="/sitemap">Site Map</TertiaryCTA>
            </div>
          </div>
        </div>
      </div>

      <FooterExpanded />
    </>
  );
}
