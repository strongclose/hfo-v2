import React from "react";
import { Navigation } from "./Nav";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  BarChart3,
  Heart,
  Stethoscope,
  DollarSign,
  Leaf,
  MapPin,
  ArrowRight,
  TrendingUp,
  Users,
  Target,
} from "lucide-react";

interface InsightalyticsPageProps {
  onNavigateToConditions: () => void;
  onNavigateToProcedures: () => void;
  onNavigateToCostComparisons: () => void;
  onNavigateToAlternativeCare: () => void;
  onNavigateToLocationInsights: () => void;
  onNavigateToDisclosures: () => void;
}

export function InsightalyticsPage({
  onNavigateToConditions,
  onNavigateToProcedures,
  onNavigateToCostComparisons,
  onNavigateToAlternativeCare,
  onNavigateToLocationInsights,
  onNavigateToDisclosures,
}: InsightalyticsPageProps) {
  const insightTools = [
    {
      icon: Heart,
      title: "Conditions",
      subtitle: "For patients & wellness-seekers",
      description:
        "Explore healthcare costs by medical condition. Understand pricing patterns for chronic conditions, preventive care, and treatment options.",
      features: [
        "Condition-specific cost analysis",
        "Treatment pathway pricing",
        "Prevention vs. treatment costs",
        "Regional condition prevalence",
      ],
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
      action: onNavigateToConditions,
    },
    {
      icon: Stethoscope,
      title: "Procedures",
      subtitle: "For patients, brokers & journalists",
      description:
        "Deep dive into specific medical procedures. Compare costs, understand variations, and track pricing trends across providers.",
      features: [
        "Procedure cost breakdowns",
        "Provider comparison tools",
        "Pricing trend analysis",
        "Complexity-adjusted pricing",
      ],
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      action: onNavigateToProcedures,
    },
    {
      icon: DollarSign,
      title: "Cost Comparisons",
      subtitle: "For payers, employers & watchdogs",
      description:
        "Advanced cost analysis tools for stakeholders who need to understand market dynamics and pricing efficiency.",
      features: [
        "Market basket analysis",
        "Payer performance metrics",
        "Employer cost benchmarking",
        "Regulatory compliance tracking",
      ],
      gradient: "from-green-600 to-green-700",
      bgGradient: "from-green-100 to-green-200",
      borderColor: "border-green-300",
      action: onNavigateToCostComparisons,
    },
    {
      icon: Leaf,
      title: "Alternative Care",
      subtitle: "For holistic & cost-conscious users",
      description:
        "Explore cost-effective and alternative healthcare options. Compare traditional care with innovative approaches.",
      features: [
        "Alternative treatment costs",
        "Wellness program ROI",
        "Preventive care analysis",
        "Holistic health economics",
      ],
      gradient: "from-teal-600 to-teal-700",
      bgGradient: "from-teal-100 to-teal-200",
      borderColor: "border-teal-300",
      action: onNavigateToAlternativeCare,
    },
    {
      icon: MapPin,
      title: "Location Insights",
      subtitle: "For patients, regulators & SEO",
      description:
        "Geographic analysis of healthcare pricing. Understand regional variations and market dynamics by location.",
      features: [
        "Regional price mapping",
        "Market concentration analysis",
        "Accessibility insights",
        "Regulatory impact assessment",
      ],
      gradient: "from-purple-600 to-purple-700",
      bgGradient: "from-purple-100 to-purple-200",
      borderColor: "border-purple-300",
      action: onNavigateToLocationInsights,
    },
    {
      icon: Users,
      title: "Population Health",
      subtitle: "For researchers & health systems",
      description:
        "Analyze healthcare trends and outcomes at the population level. Track health metrics, disease patterns, and care utilization.",
      features: [
        "Population health metrics",
        "Disease burden analysis",
        "Healthcare utilization patterns",
        "Outcome correlation studies",
      ],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      action: () => {}, // Placeholder action for now
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.05),transparent_50%)] pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 mb-8 shadow-xl shadow-blue-500/25">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Insightalytics
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light mb-8">
              Advanced healthcare analytics and insights powered by transparency
              data. Deep dive into pricing patterns, market dynamics, and
              healthcare economics.
            </p>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200">
              <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-800 font-medium">
                5 specialized analytics tools for every healthcare stakeholder
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Analytics Focus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each tool is designed for specific use cases and user types.
              Select the one that matches your needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {insightTools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <Card
                  key={index}
                  className="border-0 shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background:
                      tool.title === "Conditions"
                        ? "linear-gradient(to bottom right, #fdf2f8, #fce7f3)"
                        : tool.title === "Procedures"
                          ? "linear-gradient(to bottom right, #eff6ff, #dbeafe)"
                          : tool.title === "Cost Comparisons"
                            ? "linear-gradient(to bottom right, #dcfce7, #bbf7d0)"
                            : tool.title === "Alternative Care"
                              ? "linear-gradient(to bottom right, #f0fdfa, #ccfbf1)"
                              : tool.title === "Location Insights"
                                ? "linear-gradient(to bottom right, #faf5ff, #f3e8ff)"
                                : "linear-gradient(to bottom right, #fff7ed, #fed7aa)",
                  }}
                >
                  <CardContent className="p-8 h-full">
                    <div className="flex items-start gap-6 h-full">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                        style={{
                          background:
                            tool.title === "Conditions"
                              ? "linear-gradient(to right, #ec4899, #f43f5e)"
                              : tool.title === "Procedures"
                                ? "linear-gradient(to right, #3b82f6, #6366f1)"
                                : tool.title === "Cost Comparisons"
                                  ? "linear-gradient(to right, #059669, #047857)"
                                  : tool.title === "Alternative Care"
                                    ? "linear-gradient(to right, #0d9488, #0f766e)"
                                    : tool.title === "Location Insights"
                                      ? "linear-gradient(to right, #9333ea, #7c3aed)"
                                      : "linear-gradient(to right, #ea580c, #dc2626)",
                        }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex-1 flex flex-col h-full">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {tool.title}
                          </h3>
                          <p className="text-sm font-medium text-gray-600">
                            {tool.subtitle}
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                          {tool.description}
                        </p>

                        <div className="mb-6 flex-1">
                          <h4 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">
                            Key Features
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {tool.features.map((feature, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-gray-700"
                              >
                                <ArrowRight className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button
                          onClick={tool.action}
                          className="font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full mt-auto text-white"
                          style={{
                            background:
                              tool.title === "Conditions"
                                ? "linear-gradient(to right, #ec4899, #f43f5e)"
                                : tool.title === "Procedures"
                                  ? "linear-gradient(to right, #3b82f6, #6366f1)"
                                  : tool.title === "Cost Comparisons"
                                    ? "linear-gradient(to right, #059669, #047857)"
                                    : tool.title === "Alternative Care"
                                      ? "linear-gradient(to right, #0d9488, #0f766e)"
                                      : tool.title === "Location Insights"
                                        ? "linear-gradient(to right, #9333ea, #7c3aed)"
                                        : "linear-gradient(to right, #ea580c, #dc2626)",
                          }}
                        >
                          Explore {tool.title}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Coming Soon - 6th Tool */}
          <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-lg rounded-3xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gray-300 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                More Tools Coming Soon
              </h3>
              <p className="text-gray-600">
                We're continuously developing new analytics tools based on user
                feedback and emerging healthcare data needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Data-Driven Healthcare Intelligence
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Our analytics are built on the most comprehensive healthcare
              pricing dataset available, powered by federally mandated
              transparency data from thousands of providers nationwide.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">1T+</div>
                <div className="text-blue-100">Price Data Points</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">
                  10K+
                </div>
                <div className="text-blue-100">Healthcare Providers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">50+</div>
                <div className="text-blue-100">States Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigateToDisclosures={onNavigateToDisclosures} />
    </div>
  );
}
