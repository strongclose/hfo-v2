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
      icon: Hospital,
      title: "Providers",
      description: "Hospitals, clinics, and systems by NPI/CCN.",
      metrics: [
        { label: "Providers indexed", value: "25,847" },
        { label: "Average transparency score", value: "B+" },
        { label: "Updated", value: "January 2025" }
      ],
      action: "Browse Providers",
      onClick: onNavigateToProviders,
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
    },
    {
      icon: CreditCard,
      title: "Payers",
      description: "Insurers and health plans by NAIC.",
      metrics: [
        { label: "Issuers count", value: "1,247" },
        { label: "Plans count", value: "18,950" },
        { label: "Updated", value: "January 2025" }
      ],
      action: "Browse Payers",
      onClick: onNavigateToPayers,
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      borderColor: "border-green-200",
    },
    {
      icon: Stethoscope,
      title: "Procedures",
      description: "Common shoppable services with real prices.",
      metrics: [
        { label: "Procedures indexed", value: "2,847" },
        { label: "National median price", value: "$1,250" },
        { label: "Updated", value: "January 2025" }
      ],
      action: "Browse Procedures",
      onClick: onNavigateToProcedures,
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
    },
    {
      icon: FileText,
      title: "CPT Codes",
      description: "Standard billing codes mapped to procedures.",
      metrics: [
        { label: "Codes indexed", value: "8,750" },
        { label: "Updated", value: "January 2025" }
      ],
      action: "Browse CPT Codes",
      onClick: onNavigateToCPT,
      gradient: "from-teal-500 to-teal-600",
      bgGradient: "from-teal-50 to-teal-100",
      borderColor: "border-teal-200",
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 mb-8 shadow-xl shadow-blue-500/25">
              <Database className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
              Explore Healthcare{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Directories
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light mb-8">
              Browse providers, payers, procedures, and CPT codes. Compare prices, transparency, and trends.
            </p>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-50 border border-green-200">
              <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-800 font-medium">
                Comprehensive healthcare directory system powered by transparency data
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {directories.map((directory, index) => {
              const IconComponent = directory.icon;
              return (
                <Card
                  key={index}
                  className="border-0 shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: `linear-gradient(to bottom right, ${directory.bgGradient.replace('from-', '').replace('-50 to-', ', ').replace('-100', '')})`,
                  }}
                >
                  <CardContent className="p-8 h-full">
                    <div className="flex items-start gap-6 h-full">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 bg-gradient-to-r ${directory.gradient}`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex-1 flex flex-col h-full">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {directory.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-4">
                            {directory.description}
                          </p>
                        </div>

                        <div className="mb-6 flex-1">
                          <h4 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">
                            Key Metrics
                          </h4>
                          <div className="space-y-2">
                            {directory.metrics.map((metric, i) => (
                              <div key={i} className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">{metric.label}:</span>
                                <span className="text-sm font-semibold text-gray-900">{metric.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button
                          onClick={directory.onClick}
                          className={`font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full mt-auto text-white bg-gradient-to-r ${directory.gradient} hover:opacity-90`}
                        >
                          {directory.action}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
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
