import React from "react";
import { useRouter } from "next/router";
import { ProcedureDetailPage } from "../../../components/ProcedureDetailPage";

export default function ProcedurePage() {
  const router = useRouter();
  const { procedure } = router.query;

  const handleNavigateToDisclosures = () => {
    router.push("/disclosures");
  };

  const handleNavigateToInsightalytics = () => {
    router.push("/insightalytics");
  };

  const handleNavigateToProcedures = () => {
    router.push("/insightalytics/procedures");
  };

  return (
    <ProcedureDetailPage
      procedureSlug={procedure as string}
      onNavigateToDisclosures={handleNavigateToDisclosures}
      onNavigateToInsightalytics={handleNavigateToInsightalytics}
      onNavigateToProcedures={handleNavigateToProcedures}
    />
  );
}
