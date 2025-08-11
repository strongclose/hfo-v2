import React from "react";
import { Navigation } from "./Navigation";
import { FooterExpanded } from "./homepage/FooterExpanded";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  Hospital,
  CreditCard,
  Stethoscope,
  FileText,
  MapPin,
  Building2,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  TrendingUp,
  Users,
  Database,
} from "lucide-react";

interface DirectoriesPageProps {
  onNavigateToProviders: () => void;
  onNavigateToPayers: () => void;
  onNavigateToProcedures: () => void;
  onNavigateToCPT: () => void;
  onNavigateToStates: () => void;
  onNavigateToCities: () => void;
  onNavigateToDisclosures: () => void;
}

export function DirectoriesPage({
  onNavigateToProviders,
  onNavigateToPayers, 
  onNavigateToProcedures,
  onNavigateToCPT,
  onNavigateToStates,
  onNavigateToCities,
  onNavigateToDisclosures,
}: DirectoriesPageProps) {
  
  const directories = [
    {
      icon: () => (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0v-3.87a3.87 3.87 0 01.94-2.61c.95-1.08 2.49-1.69 4.13-1.69s3.18.61 4.13 1.69A3.87 3.87 0 0115 17.13V21M9 7h1m-1 4h1m4-4h1m-1 4h1" />
        </svg>
      ),
      title: "Providers",
      description: "Hospitals, clinics, and systems by NPI/CCN.",
      metrics: [
        { label: "Providers indexed", value: "25,847" },
        { label: "Average transparency score", value: "B+" },
        { label: "Updated", value: "January 2025" }
      ],
      action: "Browse Providers",
      onClick: onNavigateToProviders,
      gradient: "from-blue-600 to-blue-700",
      bgGradient: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
    },
    {
      icon: () => (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: "Payers",
      description: "Insurers and health plans by NAIC.",
      metrics: [
        { label: "Issuers count", value: "1,247" },
        { label: "Plans count", value: "18,950" },
        { label: "Updated", value: "January 2025" }
      ],
      action: "Browse Payers",
      onClick: onNavigateToPayers,
      gradient: "from-green-600 to-green-700",
      bgGradient: "from-green-50 to-green-100",
      borderColor: "border-green-200",
    },
    {
      icon: () => (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Procedures",
      description: "Common shoppable services with real prices.",
      metrics: [
        { label: "Procedures indexed", value: "2,847" },
        { label: "National median price", value: "$1,250" },
        { label: "Updated", value: "January 2025" }
      ],
      action: "Browse Procedures",
      onClick: onNavigateToProcedures,
      gradient: "from-purple-600 to-purple-700",
      bgGradient: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
    },
    {
      icon: () => (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "CPT Codes",
      description: "Standard billing codes mapped to procedures.",
      metrics: [
        { label: "Codes indexed", value: "8,750" },
        { label: "Updated", value: "January 2025" }
      ],
      action: "Browse CPT Codes",
      onClick: onNavigateToCPT,
      gradient: "from-teal-600 to-teal-700",
      bgGradient: "from-teal-50 to-teal-100",
      borderColor: "border-teal-200",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.05),transparent_50%)] pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
              Explore Healthcare{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Directories
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Browse providers, payers, procedures, and CPT codes. Compare prices, transparency, and trends.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {directories.map((directory, index) => {
              const IconComponent = directory.icon;
              return (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-0">
                    {/* Header Section */}
                    <div className="flex items-center justify-between px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 bg-gradient-to-r ${directory.gradient}`}
                        >
                          <IconComponent />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {directory.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {directory.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content Section with blue-indigo gradient background */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-5 mx-0">
                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-gray-900 mb-3">
                          Key Metrics
                        </h4>
                        <div className="space-y-2">
                          {directory.metrics.map((metric, i) => (
                            <div key={i} className="flex justify-between items-center">
                              <span className="text-sm text-gray-700">{metric.label}:</span>
                              <span className="text-sm font-bold text-gray-900">{metric.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="px-6 pb-4 mt-4">
                      <Button
                        onClick={directory.onClick}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl"
                      >
                        {directory.action}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Directory Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Browse by State</h3>
                    <p className="text-gray-600 text-sm">State-level provider and pricing insights</p>
                  </div>
                  <Button 
                    onClick={onNavigateToStates}
                    variant="outline"
                    size="sm"
                    className="bg-white hover:bg-gray-50"
                  >
                    Explore States
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Browse by City</h3>
                    <p className="text-gray-600 text-sm">Local market analysis and provider networks</p>
                  </div>
                  <Button 
                    onClick={onNavigateToCities}
                    variant="outline"
                    size="sm"
                    className="bg-white hover:bg-gray-50"
                  >
                    Explore Cities
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Comprehensive Healthcare Data
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Our directories are built on the most comprehensive healthcare
              dataset available, powered by federally mandated transparency data.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">37K+</div>
                <div className="text-blue-100">Total Entities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">50</div>
                <div className="text-blue-100">States Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">1T+</div>
                <div className="text-blue-100">Price Data Points</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">Monthly</div>
                <div className="text-blue-100">Data Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterExpanded onNavigateToDisclosures={onNavigateToDisclosures} />
    </div>
  );
}
