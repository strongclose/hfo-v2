import { WhoWeHelpPage } from "../components/WhoWeHelpPage";

export default function WhoWeHelp() {
  return (
    <WhoWeHelpPage
      onNavigateToResearchAccess={() =>
        (window.location.href = "/research-access")
      }
      onNavigateToPublicSector={() => (window.location.href = "/public-sector")}
      onNavigateToSearch={() => (window.location.href = "/search-procedure")}
      onNavigateToPartners={() => (window.location.href = "/partners")}
      onNavigateToHospitals={() => (window.location.href = "/hospitals")}
      onNavigateToEmployers={() => (window.location.href = "/employers")}
      onNavigateToDisclosures={() => (window.location.href = "/disclosures")}
    />
  );
}
