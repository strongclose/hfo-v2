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

interface HospitalPageProps {
  hospital: ProviderData;
  procedures: ProcedureData[];
  comparisonData: ComparisonData;
  slug: string;
}

export default function HospitalPage({
  hospital,
  procedures,
  comparisonData,
  slug,
}: HospitalPageProps) {
  const [currentPage, setCurrentPage] = useState("hospital");

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
    if (hospital.email) {
      window.location.href = `mailto:${hospital.email}`;
    } else {
      window.location.href = "/provider-feedback";
    }
  };

  const handleAskAI = () => {
    window.location.href = `/?ai-query=Tell me about pricing at ${hospital.name}`;
  };

  const handleViewComparison = () => {
    window.location.href = `/tools/benchmark?hospital=${slug}`;
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
        <ProviderHero
          provider={hospital}
          onClaimPage={handleClaimPage}
          onContact={handleContact}
        />

        <InteractiveCostTable
          procedures={procedures}
          entityName={hospital.name}
          entityType="hospital"
        />

        <div className="py-4 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <LegalDisclaimerNotice variant="default" />
            </div>
          </div>
        </div>

        <ComparativeInsights
          data={comparisonData}
          onViewComparison={handleViewComparison}
        />

        <PatientTipsAndFootnote
          entityType="hospital"
          entityName={hospital.name}
          specialFocus="facility fees and room charges"
          tips={[
            "Ask for itemized bills to understand all facility fees",
            "Compare room rates if you need an overnight stay",
            "Check if procedures can be done at outpatient centers for lower costs",
            "Verify all doctors treating you are in-network",
          ]}
        />

        <div className="mt-12">
          <CrossLinkingSection
            entityType="hospital"
            entityName={hospital.name}
            city={hospital.address?.city || ""}
            state={hospital.address?.state || ""}
            procedures={procedures.slice(0, 5).map((p) => p.name)}
            insuranceNetworks={[]}
          />
        </div>

        <div className="mt-8">
          <LegalDisclaimerNotice variant="chart" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params!;

  // Mock hospital data
  const hospital: ProviderData = {
    id: "1",
    name:
      slug === "kaiser-oakland-94609"
        ? "Kaiser Permanente Oakland Medical Center"
        : "General Hospital",
    type: "hospital",
    address: {
      street: "3600 Broadway",
      city: "Oakland",
      state: "CA",
      zip: "94611",
    },
    website: "https://healthy.kaiserpermanente.org",
    phone: "(510) 752-1000",
    description:
      "Comprehensive medical center providing advanced healthcare services to the Oakland community and surrounding areas.",
    transparencyScore: 89,
    lastUpdated: "March 15, 2024",
    procedureCount: 1247,
    payerCount: 15,
  };

  // Mock procedures data
  const procedures: ProcedureData[] = [
    {
      id: "1",
      code: "99213",
      type: "CPT",
      description: "Office Visit - Established Patient, Level 3",
      grossCharge: 350,
      inNetworkAverage: 220,
      selfPayRate: 280,
      frequency: "Common",
    },
    {
      id: "2",
      code: "45378",
      type: "CPT",
      description: "Colonoscopy with Biopsy",
      grossCharge: 2800,
      inNetworkAverage: 1850,
      selfPayRate: 2200,
      frequency: "Common",
    },
    {
      id: "3",
      code: "70553",
      type: "CPT",
      description: "MRI Brain with Contrast",
      grossCharge: 4200,
      inNetworkAverage: 2800,
      selfPayRate: 3400,
      frequency: "Moderate",
    },
  ];

  // Mock comparison data
  const comparisonData: ComparisonData = {
    entityName: hospital.name,
    entityType: "hospital",
    averageCost: 2850,
    regionalRanking: 12,
    totalInRegion: 45,
    costVsAverage: -15.2,
    qualityRating: 4,
    nearbyCompetitors: [
      {
        name: "UCSF Medical Center",
        distance: "8.5 miles",
        averageCost: 3200,
        qualityRating: 5,
        type: "Academic Medical Center",
      },
      {
        name: "Alta Bates Summit Medical Center",
        distance: "2.1 miles",
        averageCost: 2900,
        qualityRating: 4,
        type: "Community Hospital",
      },
    ],
    regionalStats: {
      averageCost: 3350,
      medianCost: 3100,
      highestCost: 5200,
      lowestCost: 2100,
      totalProviders: 45,
    },
  };

  return {
    props: {
      hospital,
      procedures,
      comparisonData,
      slug: slug as string,
    },
  };
};
