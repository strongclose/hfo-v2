"use client";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { TertiaryCTA } from "../ui/TertiaryCTA";
import { ArrowRight } from "lucide-react";

export function ExploreCompareSection() {
  // Featured Insights (Shocking Truths)
  const featuredInsights = [
    {
      emoji: "⚡",
      text: "MRI costs vary 5x across California hospitals.",
      cta: "See the Data",
      href: "/insights/truths/mri-price-gap",
    },
    {
      emoji: "📊",
      text: "Only 12% of hospitals meet full transparency standards.",
      cta: "Explore Truths",
      href: "/insights/truths",
    },
    {
      emoji: "💡",
      text: "A C-section can cost between $6,000 and $32,000.",
      cta: "Compare Costs",
      href: "/explore/procedure?query=c-section",
    },
    {
      emoji: "🏥",
      text: "Hospital cash prices are often 60% less than insurance rates.",
      cta: "Learn More",
      href: "/insights/truths/cash-discounts",
    },
    {
      emoji: "💰",
      text: "Same surgery can cost $5K-$50K depending on the hospital.",
      cta: "Find Cheapest",
      href: "/explore/procedure",
    },
  ];

  // Smart Actions
  const smartActions = [
    {
      emoji: "🔍",
      title: "Search by Procedure",
      subtext: "Look up costs by CPT code, common name, or keyword.",
      cta: "Search Procedures",
      href: "/explore/procedure",
    },
    {
      emoji: "📍",
      title: "Browse Hospitals Near You",
      subtext: "Find hospitals in your area and compare their prices.",
      cta: "Browse by Location",
      href: "/hospitals?near=auto",
    },
    {
      emoji: "💳",
      title: "Explore by Insurance",
      subtext:
        "See which plans offer lower out-of-pocket costs and better coverage.",
      cta: "Compare Plans",
      href: "/explore/insurance",
    },
  ];

  return (
    <section className="py-20 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Popular Tools */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Explore & Compare Healthcare Costs
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tile 1: Compare Procedure Prices */}
            <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg bg-blue-50 border-0 rounded-2xl">
              <CardContent className="p-6">
                <div className="text-5xl mb-4">💉</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors">
                  Compare Procedure Prices
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Find estimated costs for common procedures like MRIs,
                  childbirth, and more.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => (window.location.href = "/explore/procedure")}
                >
                  Compare Now
                </Button>
              </CardContent>
            </Card>

            {/* Tile 2: Browse California Hospitals */}
            <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg bg-blue-50 border-0 rounded-2xl">
              <CardContent className="p-6">
                <div className="text-5xl mb-4">🏥</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors">
                  Browse California Hospitals
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Explore hospital pricing, transparency scores, and regional
                  cost variations.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => (window.location.href = "/hospitals")}
                >
                  View Hospitals
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Zone 2: Featured Insights (Shocking Truths) */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-900">
            Healthcare Pricing Insights
          </h3>

          <div className="overflow-x-auto">
            <div className="flex gap-4 pb-4">
              {featuredInsights.map((insight, index) => (
                <Card
                  key={index}
                  className="cursor-pointer transition-all duration-300 hover:shadow-md bg-gray-50 border border-gray-200 rounded-xl min-w-80 flex-shrink-0"
                  onClick={() => (window.location.href = insight.href)}
                >
                  <CardContent className="p-5">
                    <div className="text-3xl mb-3">{insight.emoji}</div>
                    <p className="text-gray-900 font-medium mb-4 leading-snug">
                      {insight.text}
                    </p>
                    <TertiaryCTA
                      href={insight.href}
                      className="w-full justify-center"
                    >
                      {insight.cta}
                    </TertiaryCTA>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Zone 3: Smart Actions */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-900">
            Quick Actions
          </h3>

          <div className="space-y-6">
            {smartActions.map((action, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 group cursor-pointer"
                onClick={() => (window.location.href = action.href)}
              >
                <div className="flex items-start gap-4 flex-1 mb-4 md:mb-0">
                  <div className="text-3xl flex-shrink-0">{action.emoji}</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {action.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {action.subtext}
                    </p>
                  </div>
                </div>
                <TertiaryCTA
                  href={action.href}
                  withArrow
                  className="flex-shrink-0"
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                  }}
                >
                  {action.cta}
                </TertiaryCTA>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
