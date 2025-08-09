import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { TertiaryCTA } from "../ui/TertiaryCTA";
import { Badge } from "../ui/badge";
import {
  ArrowRight,
  Building2,
  UserCheck,
  Shield,
  TrendingUp,
  MapPin,
  Lightbulb,
} from "lucide-react";

interface CrossLinkingProps {
  entityType: "hospital" | "doctor" | "insurer";
  entityName: string;
  city?: string;
  state?: string;
  specialty?: string;
  procedures?: string[];
  insuranceNetworks?: string[];
}

export function CrossLinkingSection({
  entityType,
  entityName,
  city,
  state,
  specialty,
  procedures = [],
  insuranceNetworks = [],
}: CrossLinkingProps) {
  const getRelatedLinks = () => {
    const links = [];

    // Always show directory links
    if (entityType === "hospital") {
      links.push({
        title: "Find More Hospitals",
        description: `Browse other hospitals in ${city || state || "your area"}`,
        href: `/hospitals${state ? `?state=${state}` : ""}`,
        icon: Building2,
        category: "Directory",
      });
    } else if (entityType === "doctor") {
      links.push({
        title: "Find More Doctors",
        description: specialty
          ? `Browse other ${specialty} specialists`
          : "Find doctors in your area",
        href: `/doctors${specialty ? `?specialty=${encodeURIComponent(specialty)}` : ""}`,
        icon: UserCheck,
        category: "Directory",
      });
    } else if (entityType === "insurer") {
      links.push({
        title: "Compare Insurance Plans",
        description: "Browse other insurance providers and plans",
        href: "/insurers",
        icon: Shield,
        category: "Directory",
      });
    }

    // Location-based exploration
    if (city && state) {
      links.push({
        title: "Explore Healthcare in Your Area",
        description: `Compare costs and providers in ${city}, ${state}`,
        href: `/explore/location?city=${encodeURIComponent(city)}&state=${state}`,
        icon: MapPin,
        category: "Exploration",
      });
    }

    // Procedure-specific links
    if (procedures.length > 0) {
      procedures.slice(0, 2).forEach((procedure) => {
        links.push({
          title: `Compare ${procedure} Costs`,
          description: `See pricing for ${procedure} across providers`,
          href: `/search-procedure?q=${encodeURIComponent(procedure)}`,
          icon: TrendingUp,
          category: "Cost Comparison",
        });
      });
    }

    // Insurance network exploration
    if (entityType === "hospital" && insuranceNetworks.length > 0) {
      links.push({
        title: "Check Your Insurance Coverage",
        description: "Find in-network providers for your plan",
        href: "/explore/insurance",
        icon: Shield,
        category: "Insurance",
      });
    }

    // Shocking truths related to this entity
    links.push({
      title: "Healthcare Cost Insights",
      description: "Discover shocking truths about healthcare pricing",
      href: "/insights/truths",
      icon: Lightbulb,
      category: "Insights",
    });

    return links;
  };

  const relatedLinks = getRelatedLinks();
  const categories = [...new Set(relatedLinks.map((link) => link.category))];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Explore Related Information
        </h2>
        <p className="text-gray-600">
          Find more providers, compare costs, and discover insights related to{" "}
          {entityName}.
        </p>
      </div>

      {categories.map((category) => (
        <div key={category}>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Badge variant="outline">{category}</Badge>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedLinks
              .filter((link) => link.category === category)
              .map((link, idx) => (
                <Link key={idx} href={link.href}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <link.icon className="w-5 h-5 text-primary" />
                        {link.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-3">
                        {link.description}
                      </p>
                      <div className="flex items-center text-primary text-sm font-medium">
                        Explore
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      ))}

      {/* Quick Action Bar */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-6">
          <TertiaryCTA href="/tools/cost-calculator" withArrow>
            Calculate costs
          </TertiaryCTA>
          <TertiaryCTA href="/search-procedure" withArrow>
            Search procedures
          </TertiaryCTA>
          {entityType === "hospital" && (
            <TertiaryCTA href="/hospitals" withArrow>
              Browse all hospitals
            </TertiaryCTA>
          )}
          {entityType === "doctor" && (
            <TertiaryCTA href="/doctors" withArrow>
              Find other doctors
            </TertiaryCTA>
          )}
          {entityType === "insurer" && (
            <TertiaryCTA href="/insurers" withArrow>
              Compare plans
            </TertiaryCTA>
          )}
        </div>
      </div>
    </div>
  );
}
