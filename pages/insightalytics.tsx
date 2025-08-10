import { InsightalyticsPage } from "../components/InsightalyticsPage";

export default function Insightalytics() {
  return (
    <InsightalyticsPage
      onNavigateToConditions={() =>
        (window.location.href = "/insights/conditions")
      }
      onNavigateToProcedures={() =>
        (window.location.href = "/insights/procedures")
      }
      onNavigateToCostComparisons={() =>
        (window.location.href = "/insights/cost-comparisons")
      }
      onNavigateToAlternativeCare={() =>
        (window.location.href = "/insights/alternative-care")
      }
      onNavigateToLocationInsights={() =>
        (window.location.href = "/insights/location-insights")
      }
      onNavigateToDisclosures={() => (window.location.href = "/disclosures")}
    />
  );
}
