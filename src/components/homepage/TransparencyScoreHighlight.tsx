"use client";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { TrendingUp, Award, DollarSign } from "lucide-react";

export function TransparencyScoreHighlight() {
  const topHospitals = [
    {
      name: "UCSF Medical Center",
      score: 98,
      location: "San Francisco",
    },
    {
      name: "Cedars-Sinai Medical Center",
      score: 95,
      location: "Los Angeles",
    },
    {
      name: "Stanford Health Care",
      score: 93,
      location: "Palo Alto",
    },
  ];

  const cheapestProcedures = [
    {
      procedure: "MRI Brain (without contrast)",
      price: "$850",
      savings: "65% below average",
    },
    {
      procedure: "CT Chest (with contrast)",
      price: "$420",
      savings: "58% below average",
    },
    {
      procedure: "Ultrasound Abdomen",
      price: "$180",
      savings: "72% below average",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Who's Leading the Way in Hospital Transparency?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See which California hospitals provide the clearest pricing and best
            value
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Top Transparent Hospitals */}
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Most Transparent Hospitals
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                {topHospitals.map((hospital, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <div className="font-semibold text-gray-900">
                        {hospital.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {hospital.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">
                        {hospital.score}
                      </div>
                      <div className="text-xs text-gray-500">Score</div>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                onClick={() =>
                  (window.location.href =
                    "/insights/comparisons?sort=transparency")
                }
                variant="secondary"
                className="w-full"
              >
                View Full Transparency Rankings
              </Button>
            </CardContent>
          </Card>

          {/* Cheapest Procedures */}
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Best Value Procedures
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                {cheapestProcedures.map((procedure, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-semibold text-gray-900 flex-1">
                        {procedure.procedure}
                      </div>
                      <div className="text-2xl font-bold text-blue-600 ml-4">
                        {procedure.price}
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800"
                    >
                      {procedure.savings}
                    </Badge>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => (window.location.href = "/explore/procedure")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Compare All Procedures
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
