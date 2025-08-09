import { InsightalyticsPage } from "../components/InsightalyticsPage";

export default function Insightalytics() {
  return (
    <InsightalyticsPage
      onNavigateToConditions={() =>
        (window.location.href = "/insightalytics/conditions")
      }
      onNavigateToProcedures={() =>
        (window.location.href = "/insightalytics/procedures")
      }
      onNavigateToCostComparisons={() =>
        (window.location.href = "/insightalytics/cost-comparisons")
      }
      onNavigateToAlternativeCare={() =>
        (window.location.href = "/insightalytics/alternative-care")
      }
      onNavigateToLocationInsights={() =>
        (window.location.href = "/insightalytics/location-insights")
      }
      onNavigateToDisclosures={() => (window.location.href = "/disclosures")}
    />
  );
}
