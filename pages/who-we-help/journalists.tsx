"use client";

import React, { useState } from "react";
import { Navigation } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { ChevronRight, Newspaper, FileText, BarChart3 } from "lucide-react";

export default function JournalistsPage() {
  const [currentPage, setCurrentPage] = useState("whoWeHelpJournalists");

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
        <section className="relative bg-gradient-to-b from-cyan-50 via-white to-gray-50 py-16 lg:py-24">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Newspaper className="w-8 h-8 text-cyan-600" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                  Healthcare Reporting Resources
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Access reliable healthcare cost data and market insights for
                  accurate reporting.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={() =>
                      (window.location.href = "/insights/comparisons")
                    }
                  >
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Market Data
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => (window.location.href = "/methodology")}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Sources & Methods
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer onNavigateToDisclosures={handleNavigateToDisclosures} />
    </div>
  );
}
