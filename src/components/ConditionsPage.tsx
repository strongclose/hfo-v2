import React, { useState } from "react";
import { Navigation } from "./Nav";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import {
  Heart,
  Search,
  TrendingUp,
  MapPin,
  DollarSign,
  ArrowRight,
  Activity,
  Shield,
  Calendar,
} from "lucide-react";

interface ConditionsPageProps {
  onNavigateToDisclosures: () => void;
}

export function ConditionsPage({
  onNavigateToDisclosures,
}: ConditionsPageProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const featuredConditions = [
    {
      name: "Diabetes Management",
      category: "Chronic Condition",
      avgCost: "$3,200",
      trend: "-5%",
      description:
        "Comprehensive diabetes care including monitoring, medication, and specialist visits.",
      procedures: [
        "Blood glucose monitoring",
        "Endocrinologist visits",
        "Insulin therapy",
      ],
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      name: "Heart Disease",
      category: "Cardiovascular",
      avgCost: "$18,500",
      trend: "+2%",
      description:
        "Cardiac care from prevention to advanced interventions and ongoing management.",
      procedures: [
        "Cardiac catheterization",
        "Stress testing",
        "Medication management",
      ],
      gradient: "from-red-500 to-pink-500",
    },
    {
      name: "Mental Health",
      category: "Behavioral Health",
      avgCost: "$2,800",
      trend: "+8%",
      description:
        "Mental health services including therapy, medication, and crisis intervention.",
      procedures: [
        "Therapy sessions",
        "Psychiatric evaluation",
        "Crisis support",
      ],
      gradient: "from-purple-500 to-violet-500",
    },
    {
      name: "Cancer Care",
      category: "Oncology",
      avgCost: "$45,000",
      trend: "+3%",
      description:
        "Comprehensive cancer treatment from diagnosis through survivorship care.",
      procedures: ["Chemotherapy", "Radiation therapy", "Surgical oncology"],
      gradient: "from-orange-500 to-amber-500",
    },
  ];

  const quickStats = [
    { label: "Medical Conditions Tracked", value: "500+" },
    { label: "Avg Annual Healthcare Cost", value: "$12,530" },
    { label: "Chronic Disease Prevalence", value: "60%" },
    { label: "Preventable Conditions", value: "40%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50/30 to-purple-50/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 mb-8 shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
              Condition-Based
              <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-pink-800 bg-clip-text text-transparent">
                {" "}
                Healthcare Analytics
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light mb-8">
              Understand healthcare costs by medical condition. Compare
              treatment pathways, prevention strategies, and long-term care
              economics.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search conditions (e.g., diabetes, hypertension, depression)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-pink-500 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Conditions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Most Analyzed Conditions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore cost patterns and treatment insights for the most common
              and costly medical conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredConditions.map((condition, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {condition.name}
                      </h3>
                      <Badge className="bg-gray-100 text-gray-700">
                        {condition.category}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">
                        {condition.avgCost}
                      </div>
                      <div
                        className={`text-sm font-medium flex items-center gap-1 ${
                          condition.trend.startsWith("+")
                            ? "text-red-600"
                            : "text-green-600"
                        }`}
                      >
                        <TrendingUp className="w-4 h-4" />
                        {condition.trend}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{condition.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                      Common Procedures
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {condition.procedures.map((procedure, i) => (
                        <Badge
                          key={i}
                          className="bg-gray-50 text-gray-700 text-xs"
                        >
                          {procedure}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    className={`w-full bg-gradient-to-r ${condition.gradient} text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity`}
                  >
                    Analyze {condition.name}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Condition Analysis Tools
            </h2>
            <p className="text-xl text-gray-600">
              Deep dive into specific aspects of condition-based healthcare
              economics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl">
              <CardContent className="p-6 text-center">
                <Activity className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Treatment Pathways
                </h3>
                <p className="text-gray-600 mb-4">
                  Compare costs across different treatment approaches for the
                  same condition.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Explore Pathways
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Prevention vs Treatment
                </h3>
                <p className="text-gray-600 mb-4">
                  Analyze the cost-effectiveness of preventive care versus
                  treatment.
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Compare Costs
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-2xl">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Long-term Economics
                </h3>
                <p className="text-gray-600 mb-4">
                  Understand lifetime costs and economic impact of chronic
                  conditions.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  View Economics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer onNavigateToDisclosures={onNavigateToDisclosures} />
    </div>
  );
}
