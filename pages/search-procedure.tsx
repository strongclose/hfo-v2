"use client";

import React, { useState } from "react";
import { SearchByProcedurePage } from "../components/SearchByProcedurePage";

export default function SearchProcedurePage() {
  const [currentPage, setCurrentPage] = useState("searchByProcedure");

  const handleNavigateToHomepage = () => {
    window.location.href = "/";
  };

  const handleNavigateToInternalSearch = () => {
    setCurrentPage("internalSearch");
  };

  const handleNavigateToComparePrices = () => {
    setCurrentPage("comparePrices");
  };

  const handleNavigateToPriceComparison = () => {
    setCurrentPage("priceComparison");
  };

  const handleNavigateToSearchByProcedure = () => {
    setCurrentPage("searchByProcedure");
  };

  const handleNavigateToFAQ = () => {
    window.location.href = "/faq";
  };

  const handleNavigateToBlog = () => {
    setCurrentPage("blog");
  };

  const handleNavigateToExplore = () => {
    setCurrentPage("explore");
  };

  const handleNavigateToExploreByLocation = () => {
    window.location.href = "/locations";
  };

  const handleNavigateToInsights = () => {
    window.location.href = "/insights";
  };

  const handleNavigateToPatientResources = () => {
    window.location.href = "/learn";
  };

  const handleNavigateToTools = () => {
    window.location.href = "/tools";
  };

  const handleNavigateToCommunity = () => {
    window.location.href = "/community";
  };

  const handleNavigateToProfessionals = () => {
    window.location.href = "/professionals";
  };

  const handleNavigateToDisclosures = () => {
    setCurrentPage("disclosures");
  };

  const handleCTAAssistant = () => {
    // Scroll to top where the AI assistant is
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <SearchByProcedurePage
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
      onNavigateToDisclosures={handleNavigateToDisclosures}
      onCTAAssistant={handleCTAAssistant}
      currentPage={currentPage}
    />
  );
}
