import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import {
  Share2,
  Clock,
  Calendar,
  ExternalLink,
  MessageCircle,
  Calculator,
  ChevronRight,
  Copy,
  Check,
  TrendingUp,
  MapPin,
  Tag,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";
import { Navigation } from "../../../components/Header";
import { FooterExpanded } from "../../../components/homepage/FooterExpanded";
import { ShockingTruth } from "../../../lib/types/insights";
import {
  getShockingTruthBySlug,
  getRelatedTruths,
} from "../../../lib/data/insights";

interface ShockingTruthPageProps {
  truth: ShockingTruth;
  relatedTruths: ShockingTruth[];
}

export default function ShockingTruthPage({
  truth,
  relatedTruths,
}: ShockingTruthPageProps) {
  const [copiedLink, setCopiedLink] = useState(false);

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

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (err) {
      console.error("Failed to copy link");
    }
  };

  const handleShareTwitter = () => {
    const text = `${truth.title} - ${truth.metaDescription}`;
    const url = window.location.href;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      "_blank",
    );
  };

  return (
    <>
      <Head>
        <title>{truth.title} | Hospital Fees Insights</title>
        <meta
          name="description"
          content={truth.metaDescription || truth.description}
        />
        <meta
          name="keywords"
          content={[...truth.procedureTags, ...truth.regionTags].join(", ")}
        />

        {/* Open Graph / Social Media */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={truth.title} />
        <meta
          property="og:description"
          content={truth.metaDescription || truth.description}
        />
        <meta
          property="og:image"
          content={
            truth.socialImage ||
            truth.chartVisual ||
            "/images/default-insight.png"
          }
        />
        <meta
          property="og:url"
          content={`https://hospitalfees.org/insights/truths/${truth.slug}`}
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={truth.title} />
        <meta
          name="twitter:description"
          content={truth.metaDescription || truth.description}
        />
        <meta
          name="twitter:image"
          content={
            truth.socialImage ||
            truth.chartVisual ||
            "/images/default-insight.png"
          }
        />

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: truth.title,
            description: truth.metaDescription || truth.description,
            image: truth.socialImage || truth.chartVisual,
            datePublished: truth.publishedDate,
            author: {
              "@type": "Organization",
              name: "Hospital Fees",
            },
            publisher: {
              "@type": "Organization",
              name: "Hospital Fees",
              logo: {
                "@type": "ImageObject",
                url: "https://hospitalfees.org/logo.png",
              },
            },
          })}
        </script>
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-6">
              <nav className="flex items-center space-x-2 text-sm text-gray-600">
                <Link href="/insights" className="hover:text-primary">
                  Insights
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/insights/truths" className="hover:text-primary">
                  Shocking Truths
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-gray-900">{truth.title}</span>
              </nav>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {truth.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(truth.publishedDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC",
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {truth.readingTime} min read
                </div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                {truth.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {truth.procedureTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </Badge>
                ))}
                {truth.regionTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    <MapPin className="w-3 h-3" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Chart/Visual */}
              {truth.chartVisual && (
                <div className="mb-8">
                  <img
                    src={truth.chartVisual}
                    alt={`Chart visualization for ${truth.title}`}
                    className="w-full rounded-lg shadow-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              )}

              {/* Chart Data Display */}
              {truth.chartData && (
                <div className="mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        Data Breakdown
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {truth.chartData.hospitals && (
                        <div className="space-y-4">
                          {truth.chartData.hospitals.map(
                            (hospital: any, idx: number) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                              >
                                <div>
                                  <div className="font-medium">
                                    {hospital.name}
                                  </div>
                                  <div className="text-sm text-gray-600">
                                    {hospital.city}, {hospital.state}
                                  </div>
                                </div>
                                <div className="text-lg font-bold text-primary">
                                  ${hospital.price.toLocaleString()}
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      )}

                      {truth.chartData.feeBreakdown && (
                        <div className="space-y-4">
                          {truth.chartData.feeBreakdown.map(
                            (fee: any, idx: number) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                              >
                                <div>
                                  <div className="font-medium">
                                    {fee.category}
                                  </div>
                                  <div className="text-sm text-gray-600">
                                    {fee.description}
                                  </div>
                                </div>
                                <div className="text-lg font-bold text-red-600">
                                  ${fee.amount.toLocaleString()}
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Source Attribution */}
              <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Source:</strong> {truth.sourceAttribution}
                </p>
              </div>

              {/* Related Data Links */}
              {truth.relatedDataLinks.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">
                    Explore This Data Further
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {truth.relatedDataLinks.map((link, idx) => (
                      <Link key={idx} href={link}>
                        <Card className="hover:shadow-md transition-shadow cursor-pointer">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">
                                {link.includes("search-procedure") &&
                                  "Search Procedures"}
                                {link.includes("explore/location") &&
                                  "Explore by Location"}
                                {link.includes("cost-calculator") &&
                                  "Cost Calculator"}
                                {link.includes("insurers") &&
                                  "Insurance Directory"}
                                {link.includes("explore/insurance") &&
                                  "Insurance Explorer"}
                                {link.includes("glossary") &&
                                  "Healthcare Glossary"}
                                {!link.includes("search-procedure") &&
                                  !link.includes("explore") &&
                                  !link.includes("cost-calculator") &&
                                  !link.includes("insurers") &&
                                  !link.includes("glossary") &&
                                  "Related Data"}
                              </span>
                              <ExternalLink className="w-4 h-4 text-gray-400" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Sticky CTAs */}
              <div className="sticky top-8 space-y-4">
                {/* Action Buttons */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Take Action</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link href="/search-procedure" className="block">
                      <Button
                        className="w-full justify-start"
                        variant="default"
                      >
                        <Calculator className="w-4 h-4 mr-2" />
                        Compare This Procedure
                      </Button>
                    </Link>
                    <Button className="w-full justify-start" variant="secondary">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Ask AI About This
                    </Button>
                  </CardContent>
                </Card>

                {/* Share Buttons */}
                {truth.showShareButtons && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        Share This Insight
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button
                        onClick={handleShareTwitter}
                        className="w-full justify-start"
                        variant="secondary"
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share on X.com
                      </Button>
                      <Button
                        onClick={handleCopyLink}
                        className="w-full justify-start"
                        variant="secondary"
                      >
                        {copiedLink ? (
                          <Check className="w-4 h-4 mr-2 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4 mr-2" />
                        )}
                        {copiedLink ? "Copied!" : "Copy Link"}
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>

          {/* Related Truths */}
          {relatedTruths.length > 0 && (
            <div className="mt-12">
              <Separator className="mb-8" />
              <h2 className="text-2xl font-bold mb-6">
                Related Shocking Truths
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedTruths.map((relatedTruth) => (
                  <Link
                    key={relatedTruth.id}
                    href={`/insights/truths/${relatedTruth.slug}`}
                  >
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <CardHeader>
                        <CardTitle className="text-base line-clamp-2">
                          {relatedTruth.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                          {relatedTruth.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{relatedTruth.readingTime} min read</span>
                          <span>
                            {new Date(
                              relatedTruth.publishedDate,
                            ).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "numeric",
                              day: "numeric",
                              timeZone: "UTC",
                            })}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <FooterExpanded />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params!;

  const truth = await getShockingTruthBySlug(slug as string);

  if (!truth) {
    return {
      notFound: true,
    };
  }

  const relatedTruths = await getRelatedTruths(truth.slug, [
    ...truth.procedureTags,
    ...truth.regionTags,
  ]);

  return {
    props: {
      truth,
      relatedTruths,
    },
  };
};
