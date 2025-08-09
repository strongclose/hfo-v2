import { GetServerSideProps } from "next";
import { useState } from "react";
import Head from "next/head";
import { Navigation } from "../../components/Header";
import { Footer } from "../../components/Footer";
import ErrorBoundary, {
  PageErrorFallback,
} from "../../components/ErrorBoundary";
import {
  MedicalDisclaimer,
  DataSourceAttribution,
  HIPAANotice,
} from "../../components/LegalCompliance";
import { Insurer } from "../../types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { LegalDisclaimerNotice } from "../../components/LegalDisclaimerNotice";
import {
  Shield,
  Users,
  MapPin,
  Phone,
  Globe,
  Mail,
  Star,
  DollarSign,
  FileText,
  Building2,
  Clock,
  CheckCircle,
  AlertCircle,
  Heart,
  Pill,
  Stethoscope,
  Calculator,
  ExternalLink,
  Download,
} from "lucide-react";

interface PlanType {
  id: string;
  name: string;
  type: "HMO" | "PPO" | "EPO" | "POS";
  monthlyPremium: number;
  deductible: number;
  outOfPocketMax: number;
  copayPrimarycare: number;
  copaySpecialist: number;
  coinsurance: number;
  features: string[];
}

interface NetworkProvider {
  id: string;
  name: string;
  type: "Hospital" | "Primary Care" | "Specialist";
  location: string;
  rating: number;
}

interface CoverageArea {
  state: string;
  counties: string[];
  memberCount: number;
}

interface InsurerPageProps {
  insurer: Insurer;
  plans: PlanType[];
  coverageAreas: CoverageArea[];
  topNetworkProviders: NetworkProvider[];
  memberPortalUrl: string;
  claimsPhone: string;
  nurseHotline: string;
  slug: string;
}

function InsurerPage({
  insurer,
  plans,
  coverageAreas,
  topNetworkProviders,
  memberPortalUrl,
  claimsPhone,
  nurseHotline,
  slug,
}: InsurerPageProps) {
  const [currentPage, setCurrentPage] = useState("insurer");
  const [activeTab, setActiveTab] = useState("overview");

  // Navigation handlers
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
  const handleNavigateToInsights = () =>
    (window.location.href = "/insights/comparisons");
  const handleNavigateToPatientResources = () =>
    (window.location.href = "/learn");
  const handleNavigateToTools = () =>
    (window.location.href = "/tools/cost-calculator");
  const handleNavigateToCommunity = () => (window.location.href = "/community");
  const handleNavigateToProfessionals = () =>
    (window.location.href = "/professionals");
  const handleNavigateToDisclosures = () => setCurrentPage("disclosures");

  const handleClaimPage = () => {
    console.log("Claim page functionality - future implementation");
  };

  const handleContact = () => {
    if (insurer.email) {
      window.location.href = `mailto:${insurer.email}`;
    } else {
      window.location.href = "/provider-feedback";
    }
  };

  const handleMemberPortal = () => {
    window.open(memberPortalUrl, "_blank");
  };

  const handleFindProvider = () => {
    window.location.href = `/tools/provider-search?insurer=${slug}`;
  };

  return (
    <>
      <Head>
        <title>
          {insurer.name} - Coverage, Plans & Network | Hospital Fees
        </title>
        <meta
          name="description"
          content={`${insurer.name} insurance coverage details, plan options, network providers, and member benefits. Compare costs and find in-network care.`}
        />
        <meta
          name="keywords"
          content={`${insurer.name}, health insurance, coverage, plans, network providers, benefits`}
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
        currentPage={currentPage}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                      {insurer.name}
                    </h1>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary">{insurer.type}</Badge>
                      <Badge variant="secondary">
                        {insurer.financialRating} Rated
                      </Badge>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mb-6">
                  {insurer.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">
                      {(insurer.memberCount / 1000000).toFixed(1)}M
                    </div>
                    <div className="text-sm text-gray-600">Members</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Stethoscope className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">
                      {(insurer.networkSize / 1000).toFixed(0)}K
                    </div>
                    <div className="text-sm text-gray-600">Providers</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">
                      {insurer.satisfactionScore}
                    </div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">
                      {coverageAreas.length}
                    </div>
                    <div className="text-sm text-gray-600">States</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={handleMemberPortal}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Member Portal
                  </Button>
                  <Button variant="secondary" onClick={handleFindProvider}>
                    <Stethoscope className="w-4 h-4 mr-2" />
                    Find Provider
                  </Button>
                  <Button variant="secondary" onClick={handleContact}>
                    <Phone className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </div>

              <div className="w-full lg:w-80">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-gray-600" />
                      <div>
                        <div className="font-medium">Customer Service</div>
                        <div className="text-sm text-gray-600">
                          {insurer.phone}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="w-4 h-4 text-gray-600" />
                      <div>
                        <div className="font-medium">24/7 Nurse Hotline</div>
                        <div className="text-sm text-gray-600">
                          {nurseHotline}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-gray-600" />
                      <div>
                        <div className="font-medium">Claims Support</div>
                        <div className="text-sm text-gray-600">
                          {claimsPhone}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-gray-600" />
                      <div>
                        <div className="font-medium">Website</div>
                        <a
                          href={insurer.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          Visit Site
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="plans">Plans & Pricing</TabsTrigger>
              <TabsTrigger value="network">Network</TabsTrigger>
              <TabsTrigger value="coverage">Coverage Areas</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Company Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium text-gray-600">
                          Founded
                        </div>
                        <div className="font-semibold">{insurer.founded}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-600">
                          Headquarters
                        </div>
                        <div className="font-semibold">
                          {insurer.headquarters}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-600">
                          Plan Type
                        </div>
                        <div className="font-semibold">{insurer.type}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-600">
                          Financial Rating
                        </div>
                        <div className="font-semibold">
                          {insurer.financialRating}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-medium text-gray-600 mb-2">
                        Accreditations
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {insurer.accreditation.map((accred, idx) => (
                          <Badge key={idx} variant="secondary">
                            {accred}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Specialties & Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {insurer.specialties.map((specialty, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="plans" className="mt-6">
              <div className="grid gap-6">
                {insurer.plans.map((plan) => (
                  <Card key={plan.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>{plan.name}</CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            {plan.type}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">
                            ${plan.monthlyPremium}/mo
                          </div>
                          <div className="text-sm text-gray-600">
                            Starting premium
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-4 gap-4 mb-4">
                        <div className="text-center p-3 bg-gray-50 rounded">
                          <div className="font-semibold">
                            ${plan.deductible.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-600">
                            Deductible
                          </div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded">
                          <div className="font-semibold">
                            ${plan.outOfPocketMax.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-600">
                            Out-of-Pocket Max
                          </div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded">
                          <div className="font-semibold">
                            ${plan.copayPrimarycare}
                          </div>
                          <div className="text-xs text-gray-600">
                            Primary Care
                          </div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded">
                          <div className="font-semibold">
                            {plan.coinsurance}%
                          </div>
                          <div className="text-xs text-gray-600">
                            Coinsurance
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-medium mb-2">
                          Plan Features:
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          {plan.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="network" className="mt-6">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Network Providers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {insurer.topNetworkProviders.map((provider) => (
                        <div
                          key={provider.id}
                          className="flex items-center justify-between p-4 border rounded-lg"
                        >
                          <div>
                            <div className="font-semibold">{provider.name}</div>
                            <div className="text-sm text-gray-600 flex items-center gap-2">
                              <Badge variant="secondary" className="text-xs">
                                {provider.type}
                              </Badge>
                              <MapPin className="w-3 h-3" />
                              {provider.location}
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="font-medium">
                              {provider.rating}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="coverage" className="mt-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {insurer.coverageAreas.map((area, idx) => (
                  <Card key={idx}>
                    <CardHeader>
                      <CardTitle>{area.state}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="text-sm font-medium text-gray-600">
                          Members in State
                        </div>
                        <div className="text-xl font-bold">
                          {area.memberCount.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-600 mb-2">
                          Coverage Counties:
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {area.counties
                            .slice(0, 6)
                            .map((county, countyIdx) => (
                              <Badge
                                key={countyIdx}
                                variant="secondary"
                                className="text-xs"
                              >
                                {county}
                              </Badge>
                            ))}
                          {area.counties.length > 6 && (
                            <Badge variant="secondary" className="text-xs">
                              +{area.counties.length - 6} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Legal Compliance Section */}
        <div className="py-8 bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <HIPAANotice />
            <MedicalDisclaimer variant="banner" entityName={insurer.name} />
            <DataSourceAttribution
              sources={[
                "State Insurance Commission Filings",
                "CMS Medicare Advantage Data",
                "NAIC Financial Reports",
                "Provider Network Directories",
              ]}
              lastUpdated="December 15, 2024"
            />
          </div>
        </div>
      </div>

      <Footer onNavigateToDisclosures={handleNavigateToDisclosures} />
    </>
  );
}

// Wrap the main component with error boundary
const InsurerPageWithErrorBoundary = (props: InsurerPageProps) => (
  <ErrorBoundary fallback={PageErrorFallback}>
    <InsurerPage {...props} />
  </ErrorBoundary>
);

export default InsurerPageWithErrorBoundary;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params!;

  // Mock insurer data - in production, fetch from CMS
  const insurer: Insurer = {
    id: "1",
    name:
      slug === "kaiser-permanente"
        ? "Kaiser Permanente"
        : "Blue Cross Blue Shield",
    slug: slug as string,
    type: "insurer",
    address: {
      city: slug === "kaiser-permanente" ? "Oakland" : "Chicago",
      state: slug === "kaiser-permanente" ? "CA" : "IL",
      zip: slug === "kaiser-permanente" ? "94612" : "60601",
    },
    website:
      slug === "kaiser-permanente"
        ? "https://healthy.kaiserpermanente.org"
        : "https://www.bcbs.com",
    phone: slug === "kaiser-permanente" ? "1-800-464-4000" : "1-800-262-2583",
    email: "memberservices@example.com",
    description:
      slug === "kaiser-permanente"
        ? "Kaiser Permanente is a leading health maintenance organization providing integrated healthcare services through our network of hospitals, medical centers, and physicians."
        : "Blue Cross Blue Shield is one of the nation's largest health insurance providers, offering comprehensive coverage options and extensive provider networks.",
    planTypes: slug === "kaiser-permanente" ? ["HMO"] : ["HMO", "PPO", "EPO"],
    memberCount: slug === "kaiser-permanente" ? 12500000 : 36000000,
    networkSize: slug === "kaiser-permanente" ? 23000 : 95000,
    avgPremium: slug === "kaiser-permanente" ? 380 : 425,
    satisfactionScore: slug === "kaiser-permanente" ? 4.2 : 3.8,
    coverageTypes: ["Individual", "Family", "Medicare", "Group"],
    topPartners:
      slug === "kaiser-permanente"
        ? ["Kaiser Oakland", "Kaiser San Francisco", "Kaiser Los Angeles"]
        : ["UCSF Medical Center", "Cedars-Sinai", "Stanford Health"],
    states:
      slug === "kaiser-permanente"
        ? ["CA", "CO", "OR", "WA"]
        : ["CA", "NY", "TX", "FL"],
    financialRating: "A+",
    accreditation: ["NCQA", "URAC", "AAAHC"],
    founded: slug === "kaiser-permanente" ? 1945 : 1929,
    headquarters: slug === "kaiser-permanente" ? "Oakland, CA" : "Chicago, IL",
    lastUpdated: "2024-12-15",
    featured: true,
  };

  // Separate plans data
  const plans: PlanType[] = [
    {
      id: "1",
      name: "Bronze Essential",
      type: "HMO",
      monthlyPremium: 285,
      deductible: 6000,
      outOfPocketMax: 8000,
      copayPrimarycare: 35,
      copaySpecialist: 70,
      coinsurance: 20,
      features: [
        "Primary Care",
        "Emergency Services",
        "Prescription Coverage",
        "Preventive Care",
      ],
    },
    {
      id: "2",
      name: "Silver Plus",
      type: "PPO",
      monthlyPremium: 425,
      deductible: 2500,
      outOfPocketMax: 6000,
      copayPrimarycare: 25,
      copaySpecialist: 50,
      coinsurance: 15,
      features: [
        "Broader Network",
        "Specialist Access",
        "Mental Health",
        "Prescription Coverage",
        "Telehealth",
      ],
    },
    {
      id: "3",
      name: "Gold Premium",
      type: "PPO",
      monthlyPremium: 595,
      deductible: 1000,
      outOfPocketMax: 4000,
      copayPrimarycare: 15,
      copaySpecialist: 30,
      coinsurance: 10,
      features: [
        "Low Deductible",
        "Premium Network",
        "Comprehensive Coverage",
        "Dental & Vision",
        "Wellness Programs",
      ],
    },
  ];

  // Coverage areas data
  const coverageAreas: CoverageArea[] = [
    {
      state: "California",
      counties: [
        "Los Angeles",
        "San Francisco",
        "San Diego",
        "Orange",
        "Riverside",
        "San Bernardino",
        "Alameda",
        "Santa Clara",
      ],
      memberCount: 8500000,
    },
    {
      state: "Colorado",
      counties: ["Denver", "Boulder", "Jefferson", "Adams"],
      memberCount: 650000,
    },
  ];

  // Network providers data
  const topNetworkProviders: NetworkProvider[] = [
    {
      id: "1",
      name: "UCSF Medical Center",
      type: "Hospital",
      location: "San Francisco, CA",
      rating: 4.8,
    },
    {
      id: "2",
      name: "Cedars-Sinai Medical Center",
      type: "Hospital",
      location: "Los Angeles, CA",
      rating: 4.6,
    },
    {
      id: "3",
      name: "Dr. Sarah Johnson",
      type: "Primary Care",
      location: "Oakland, CA",
      rating: 4.9,
    },
    {
      id: "4",
      name: "Stanford Cardiology",
      type: "Specialist",
      location: "Palo Alto, CA",
      rating: 4.7,
    },
  ];

  // Additional insurer-specific data
  const memberPortalUrl =
    slug === "kaiser-permanente"
      ? "https://my.kp.org"
      : "https://member.bcbs.com";
  const claimsPhone = "1-800-555-0123";
  const nurseHotline = "1-800-555-0199";

  return {
    props: {
      insurer,
      plans,
      coverageAreas,
      topNetworkProviders,
      memberPortalUrl,
      claimsPhone,
      nurseHotline,
      slug: slug as string,
    },
  };
};
