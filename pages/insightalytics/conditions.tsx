import { ConditionsPage } from "../../components/ConditionsPage";

export default function Conditions() {
  return (
    <ConditionsPage
      onNavigateToDisclosures={() => (window.location.href = "/disclosures")}
    />
  );
}
