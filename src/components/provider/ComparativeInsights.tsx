import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  MapPin,
  Users,
  Shield,
  Star,
  ArrowRight,
  Target,
  Award,
} from "lucide-react";

export interface ComparisonData {
  entityName: string;
  entityType: "hospital" | "doctor" | "insurer";
  averageCost?: number;
  regionalRanking?: number;
  totalInRegion?: number;
  costVsAverage?: number; // Percentage difference
  qualityRating?: number;
  specialtyRanking?: number; // For doctors
  networkSize?: number; // For insurers
  coverageArea?: string[]; // For insurers
  nearbyCompetitors?: Array<{
    name: string;
    distance?: string;
    averageCost?: number;
    qualityRating?: number;
    type: string;
  }>;
  regionalStats?: {
    averageCost: number;
    medianCost: number;
    highestCost: number;
    lowestCost: number;
    totalProviders: number;
  };
}

interface ComparativeInsightsProps {
  data: ComparisonData;
  onViewComparison?: () => void;
}

export function ComparativeInsights({
  data,
  onViewComparison,
}: ComparativeInsightsProps) {
  const getPerformanceIndicator = (percentage: number) => {
    if (percentage > 10) {
      return {
        icon: <TrendingUp className="w-4 h-4 text-red-600" />,
        text: `${percentage.toFixed(0)}% above average`,
        color: "text-red-600",
      };
    } else if (percentage < -10) {
      return {
        icon: <TrendingDown className="w-4 h-4 text-green-600" />,
        text: `${Math.abs(percentage).toFixed(0)}% below average`,
        color: "text-green-600",
      };
    } else {
      return {
        icon: <Target className="w-4 h-4 text-blue-600" />,
        text: "Near average",
        color: "text-blue-600",
      };
    }
  };

  const getRankingBadge = (rank: number, total: number) => {
    const percentage = (rank / total) * 100;

    if (percentage <= 20) {
      return <Badge className="bg-green-100 text-green-800">Top 20%</Badge>;
    } else if (percentage <= 50) {
      return <Badge className="bg-blue-100 text-blue-800">Top 50%</Badge>;
    } else {
      return <Badge variant="secondary">Ranked #{rank}</Badge>;
    }
  };

  const getEntitySpecificTitle = () => {
    switch (data.entityType) {
      case "hospital":
        return "Comparison to Nearby Facilities";
      case "doctor":
        return "Comparison to Local Peers";
      case "insurer":
        return "Coverage & Network Comparison";
    }
  };

  const getEntitySpecificDescription = () => {
    switch (data.entityType) {
      case "hospital":
        return `How ${data.entityName} compares to other hospitals in the region`;
      case "doctor":
        return `How this provider compares to other specialists in the area`;
      case "insurer":
        return `Coverage areas and network size compared to other insurers`;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {getEntitySpecificTitle()}
            </h2>
            <p className="text-xl text-muted-foreground">
              {getEntitySpecificDescription()}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Performance Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  Performance Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Cost Comparison */}
                  {data.averageCost && data.costVsAverage !== undefined && (
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Average Cost</p>
                        <p className="text-2xl font-bold text-primary">
                          ${data.averageCost.toLocaleString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-1">
                          {getPerformanceIndicator(data.costVsAverage).icon}
                          <span
                            className={`text-sm font-medium ${getPerformanceIndicator(data.costVsAverage).color}`}
                          >
                            {getPerformanceIndicator(data.costVsAverage).text}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          vs. regional average
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Regional Ranking */}
                  {data.regionalRanking && data.totalInRegion && (
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Regional Ranking:
                      </span>
                      <div className="flex items-center gap-2">
                        {getRankingBadge(
                          data.regionalRanking,
                          data.totalInRegion,
                        )}
                        <span className="text-sm text-muted-foreground">
                          #{data.regionalRanking} of {data.totalInRegion}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Quality Rating */}
                  {data.qualityRating && (
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Quality Rating:
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < data.qualityRating!
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-medium">
                          {data.qualityRating}/5
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Entity-specific metrics */}
                  {data.entityType === "doctor" && data.specialtyRanking && (
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Specialty Ranking:
                      </span>
                      <Badge variant="outline">
                        <Award className="w-3 h-3 mr-1" />#
                        {data.specialtyRanking} in specialty
                      </Badge>
                    </div>
                  )}

                  {data.entityType === "insurer" && data.networkSize && (
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Network Size:
                      </span>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span className="font-medium">
                          {data.networkSize.toLocaleString()} providers
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Regional Context or Competitors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  {data.entityType === "insurer"
                    ? "Coverage Areas"
                    : "Nearby Alternatives"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {data.entityType === "insurer" && data.coverageArea ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">
                        Coverage Areas:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {data.coverageArea.map((area, index) => (
                          <Badge key={index} variant="outline">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {data.regionalStats && (
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Regional Average
                          </p>
                          <p className="text-lg font-semibold">
                            ${data.regionalStats.averageCost.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Total Providers
                          </p>
                          <p className="text-lg font-semibold">
                            {data.regionalStats.totalProviders}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {data.nearbyCompetitors &&
                    data.nearbyCompetitors.length > 0 ? (
                      data.nearbyCompetitors
                        .slice(0, 3)
                        .map((competitor, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <div>
                              <p className="font-medium">{competitor.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {competitor.distance &&
                                  `${competitor.distance} • `}
                                {competitor.type}
                              </p>
                            </div>
                            <div className="text-right">
                              {competitor.averageCost && (
                                <p className="font-medium">
                                  ${competitor.averageCost.toLocaleString()}
                                </p>
                              )}
                              {competitor.qualityRating && (
                                <div className="flex items-center gap-1">
                                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                  <span className="text-xs">
                                    {competitor.qualityRating}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        ))
                    ) : (
                      <p className="text-muted-foreground text-center py-4">
                        No nearby alternatives data available
                      </p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Regional Statistics */}
          {data.regionalStats && data.entityType !== "insurer" && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Regional Healthcare Cost Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">
                      ${data.regionalStats.averageCost.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Average Cost
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">
                      ${data.regionalStats.lowestCost.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">Lowest Cost</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-600">
                      ${data.regionalStats.highestCost.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Highest Cost
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">
                      {data.regionalStats.totalProviders}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Total Providers
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Call to Action */}
          <div className="text-center mt-8">
            <Button
              onClick={onViewComparison}
              className="flex items-center gap-2 mx-auto"
            >
              View Detailed Comparison
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
