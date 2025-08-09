import { ProceduresPage } from "../../components/ProceduresPage";

export default function Procedures() {
  return (
    <ProceduresPage
      onNavigateToDisclosures={() => (window.location.href = "/disclosures")}
      onNavigateToMriBrainScan={() =>
        (window.location.href = "/insightalytics/procedures/mri-brain-scan")
      }
      onNavigateToKneeReplacement={() =>
        (window.location.href =
          "/insightalytics/procedures/total-knee-replacement")
      }
      onNavigateToColonoscopy={() =>
        (window.location.href = "/insightalytics/procedures/colonoscopy")
      }
      onNavigateToErVisit={() =>
        (window.location.href =
          "/insightalytics/procedures/emergency-room-visit")
      }
      onNavigateToConditions={() =>
        (window.location.href = "/insightalytics/conditions")
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
    />
  );
}
