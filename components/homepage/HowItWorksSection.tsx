"use client";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Hospital, BarChart3, Lightbulb } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: Hospital,
      title: "We Collect Prices",
      description:
        "Hospital pricing data is sourced from federally required CMS files.",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: BarChart3,
      title: "We Organize & Compare",
      description: "We structure costs by procedure, insurer, and location.",
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Lightbulb,
      title: "You Take Control",
      description:
        "Ask questions or explore to find smarter healthcare options.",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            How We Help You Find Better Prices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We transform complex hospital pricing data into actionable insights
            you can use
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-6 bg-blue-50 rounded-xl flex items-center justify-center">
                  <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => (window.location.href = "/methodology")}
            variant="outline"
            className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold"
          >
            See Our Methodology
          </Button>
        </div>
      </div>
    </section>
  );
}
