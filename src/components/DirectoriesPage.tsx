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
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7l-8-5zM12 4.5L20 8.5v8.5c0 4.45-3.55 8-8 8s-8-3.55-8-8v-8.5l8-4z"/>
          <path d="M8 10h8v2H8v-2zm0 4h8v2H8v-2z"/>
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
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V8h16v10zm-5.07-3.93L12 12.15l-2.93 1.92-.67-3.92L5.5 7.5l3.92-.58L12 3l2.58 3.92L18.5 7.5l-2.9 2.65-.67 3.92z"/>
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
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
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
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
          <path d="M8 10h8v2H8v-2zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"/>
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
