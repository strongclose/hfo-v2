import { GetServerSideProps } from "next";
import { useState } from "react";
import { Navigation } from "../../components/Header";
import { Footer } from "../../components/Footer";
import {
  ProviderHero,
  ProviderData,
} from "../../components/provider/ProviderHero";
import {
  InteractiveCostTable,
  ProcedureData,
} from "../../components/provider/InteractiveCostTable";
import {
  ComparativeInsights,
  ComparisonData,
} from "../../components/provider/ComparativeInsights";
import { PatientTipsAndFootnote } from "../../components/provider/PatientTipsAndFootnote";
import { CrossLinkingSection } from "../../components/provider/CrossLinkingSection";
import { LegalDisclaimerNotice } from "../../components/LegalDisclaimerNotice";

interface DoctorPageProps {
  doctor: ProviderData;
  procedures: ProcedureData[];
  comparisonData: ComparisonData;
  slug: string;
}

export default function DoctorPage({
  doctor,
  procedures,
  comparisonData,
  slug,
}: DoctorPageProps) {
  const [currentPage, setCurrentPage] = useState("doctor");

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
    // Future: Open claim page modal or redirect to auth
    console.log("Claim page functionality - future implementation");
  };

  const handleContact = () => {
    if (doctor.email) {
      window.location.href = `mailto:${doctor.email}`;
    } else {
      window.location.href = "/provider-feedback";
    }
  };

  const handleAskAI = () => {
    // Future: Open AI chat with doctor-specific context
    window.location.href = `/?ai-query=Tell me about Dr. ${doctor.name}'s practice and pricing`;
  };

  const handleViewComparison = () => {
    window.location.href = `/tools/benchmark?doctor=${slug}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
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

      <div className="flex-1">
        {/* Hero Section */}
        <ProviderHero
          provider={doctor}
          onClaimPage={handleClaimPage}
          onContact={handleContact}
        />

        {/* Interactive Cost Table */}
        <InteractiveCostTable
          procedures={procedures}
          entityName={doctor.name}
          entityType="doctor"
        />

        {/* Legal Disclaimer */}
        <div className="py-4 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <LegalDisclaimerNotice variant="default" />
            </div>
          </div>
        </div>

        {/* Comparative Insights */}
        <ComparativeInsights
          data={comparisonData}
          onViewComparison={handleViewComparison}
        />

        {/* Patient Tips & Legal Footnote */}
        <PatientTipsAndFootnote
          entityName={doctor.name}
          entityType="doctor"
          onAskAI={handleAskAI}
        />
      </div>

      <Footer onNavigateToDisclosures={handleNavigateToDisclosures} />
    </div>
  );
}

// This function gets called at request time
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params!;

  // In a real application, this would fetch data from your CMS/database
  // For now, we'll return mock data based on the slug

  // Mock doctor data - in production, fetch from CMS
  const doctor: ProviderData = {
    name:
      slug === "dr-smith-cardiology-94610"
        ? "Dr. Sarah Smith, MD"
        : "Dr. John Doe, MD",
    type: "doctor",
    specialty: "Cardiology",
    address: {
      street: "2500 Milvia Street",
      city: "Berkeley",
      state: "CA",
      zip: "94704",
    },
    website: "https://www.drsmith-cardiology.com",
    phone: "(510) 555-0123",
    description:
      "Board-certified cardiologist specializing in interventional cardiology and preventive heart care with over 15 years of experience.",
    transparencyScore: 92,
    lastUpdated: "March 20, 2024",
    procedureCount: 89,
    payerCount: 12,
  };

  // Mock procedures data for doctor
  const procedures: ProcedureData[] = [
    {
      id: "1",
      code: "99213",
      type: "CPT",
      description: "Cardiology Consultation - Established Patient",
      grossCharge: 450,
      inNetworkAverage: 320,
      selfPayRate: 380,
      frequency: "Common",
    },
    {
      id: "2",
      code: "93306",
      type: "CPT",
      description: "Echocardiogram with Doppler",
      grossCharge: 1200,
      inNetworkAverage: 850,
      selfPayRate: 950,
      frequency: "Common",
    },
    {
      id: "3",
      code: "93000",
      type: "CPT",
      description: "Electrocardiogram (ECG/EKG)",
      grossCharge: 180,
      inNetworkAverage: 120,
      selfPayRate: 150,
      frequency: "Common",
    },
    {
      id: "4",
      code: "92928",
      type: "CPT",
      description: "Percutaneous Coronary Angioplasty",
      grossCharge: 15000,
      inNetworkAverage: 12000,
      selfPayRate: 13500,
      frequency: "Moderate",
    },
    // Add more mock procedures...
  ];

  // Mock comparison data
  const comparisonData: ComparisonData = {
    entityName: doctor.name,
    entityType: "doctor",
    averageCost: 485,
    regionalRanking: 8,
    totalInRegion: 23,
    costVsAverage: -12.8,
    qualityRating: 5,
    specialtyRanking: 3,
    nearbyCompetitors: [
      {
        name: "Dr. Michael Chen, MD",
        distance: "1.2 miles",
        averageCost: 520,
        qualityRating: 4,
        type: "Interventional Cardiology",
      },
      {
        name: "Dr. Lisa Rodriguez, MD",
        distance: "2.8 miles",
        averageCost: 490,
        qualityRating: 5,
        type: "General Cardiology",
      },
    ],
    regionalStats: {
      averageCost: 555,
      medianCost: 520,
      highestCost: 750,
      lowestCost: 380,
      totalProviders: 23,
    },
  };

  return {
    props: {
      doctor,
      procedures,
      comparisonData,
      slug: slug as string,
    },
  };
};
