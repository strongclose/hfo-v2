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
  onNavigateToProviders?: () => void;
  onNavigateToPayers?: () => void;
  onNavigateToProcedures?: () => void;
  onNavigateToCPT?: () => void;
  onNavigateToStates?: () => void;
  onNavigateToCities?: () => void;
  onNavigateToDisclosures?: () => void;
}

export function DirectoriesPage({
  onNavigateToProviders,
  onNavigateToPayers,
  onNavigateToProcedures,
  onNavigateToCPT,
  onNavigateToStates,
  onNavigateToCities,
  onNavigateToDisclosures,
}: DirectoriesPageProps = {}) {

  // Internal navigation handlers with fallbacks
  const handleNavigateToProviders = () => {
    if (onNavigateToProviders) {
      onNavigateToProviders();
    } else {
      window.location.href = '/providers';
    }
  };

  const handleNavigateToPayers = () => {
    if (onNavigateToPayers) {
      onNavigateToPayers();
    } else {
      window.location.href = '/payers';
    }
  };

  const handleNavigateToProcedures = () => {
    if (onNavigateToProcedures) {
      onNavigateToProcedures();
    } else {
      window.location.href = '/procedures';
    }
  };

  const handleNavigateToCPT = () => {
    if (onNavigateToCPT) {
      onNavigateToCPT();
    } else {
      window.location.href = '/cpt';
    }
  };

  const handleNavigateToStates = () => {
    if (onNavigateToStates) {
      onNavigateToStates();
    } else {
      window.location.href = '/directories/states';
    }
  };

  const handleNavigateToCities = () => {
    if (onNavigateToCities) {
      onNavigateToCities();
    } else {
      window.location.href = '/directories/cities';
    }
  };

  const handleNavigateToDisclosures = () => {
    if (onNavigateToDisclosures) {
      onNavigateToDisclosures();
    } else {
      window.location.href = '/disclosures';
    }
  };
  
  const directories = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
        </svg>
      ),
      title: "Providers",
      description: "Hospitals, clinics, and systems by NPI/CCN.",
      metrics: [
        {
          label: "Providers",
          value: "25,847",
          icon: (
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 2v10h8V6H6z" clipRule="evenodd" />
            </svg>
          )
        },
        {
          label: "Average transparency score",
          value: "B+",
          icon: (
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          )
        },
        {
          label: "Most common service",
          value: "Laboratory tests",
          icon: (
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          )
        }
      ],
      action: "Browse Providers",
      onClick: handleNavigateToProviders,
      gradient: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4z" />
          <path fillRule="evenodd" d="M6 6a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V6zm4 2a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-3 4a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      ),
      title: "Payers",
      description: "Insurers and health plans by NAIC.",
      metrics: [
        {
          label: "Issuers",
          value: "1,247",
          icon: (
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0v2a2 2 0 11-4 0v-2zm6 0a2 2 0 114 0v2a2 2 0 11-4 0v-2z" clipRule="evenodd" />
            </svg>
          )
        },
        {
          label: "Plans",
          value: "18,950",
          icon: (
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
          )
        },
        {
          label: "Average transparency score",
          value: "C+",
          icon: (
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          )
        }
      ],
      action: "Browse Payers",
      onClick: handleNavigateToPayers,
      gradient: "from-green-600 to-green-700",
      bgColor: "bg-green-600",
      bgGradient: "from-green-50 to-green-100",
      borderColor: "border-green-200",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
        </svg>
      ),
      title: "Procedures",
      description: "Common shoppable services with real prices.",
      metrics: [
        {
          label: "Procedures",
          value: "2,847",
          icon: (
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h4v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100-2H7a1 1 0 000 2h.01zM13 13a1 1 0 100-2h-3a1 1 0 100 2h3z" clipRule="evenodd" />
            </svg>
          )
        },
        {
          label: "National median price",
          value: "$1,250",
          icon: (
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
            </svg>
          )
        },
        {
          label: "Lowest-median state",
          value: "Idaho",
          icon: (
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          )
        }
      ],
      action: "Browse Procedures",
      onClick: handleNavigateToProcedures,
      gradient: "from-purple-600 to-purple-700",
      bgColor: "bg-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      ),
      title: "CPT Codes",
      description: "Standard billing codes mapped to procedures.",
      metrics: [
        {
          label: "Codes",
          value: "8,750",
          icon: (
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          )
        },
        {
          label: "Avg linked procedures per code",
          value: "3.2",
          icon: (
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
            </svg>
          )
        },
        {
          label: "Top CPT category",
          value: "Pathology & Lab",
          icon: (
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          )
        }
      ],
      action: "Browse CPT Codes",
      onClick: handleNavigateToCPT,
      gradient: "from-teal-600 to-teal-700",
      bgColor: "bg-teal-600",
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
              return (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-2xl overflow-hidden h-full flex flex-col"
                >
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Header Section */}
                    <div className="flex items-center justify-between px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 ${directory.bgColor}`}
                          style={{
                            backgroundColor: directory.bgColor === 'bg-blue-600' ? '#2563eb' :
                                           directory.bgColor === 'bg-green-600' ? '#16a34a' :
                                           directory.bgColor === 'bg-purple-600' ? '#9333ea' :
                                           directory.bgColor === 'bg-teal-600' ? '#0d9488' : undefined
                          }}
                        >
                          {directory.icon}
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
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-5 mx-0 flex-1 flex flex-col">
                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-gray-900 mb-3">
                          Key Metrics
                        </h4>
                        <div className="space-y-2">
                          {directory.metrics.map((metric, i) => (
                            <div key={i} className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                {metric.icon}
                                <span className="text-sm text-gray-700">{metric.label}:</span>
                              </div>
                              <span className="text-sm font-bold text-gray-900">{metric.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="px-6 pb-6 pt-6 mt-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
                    onClick={handleNavigateToStates}
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
                    onClick={handleNavigateToCities}
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

          {/* Helper Text and Quick Jump Links */}
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-6">You can also jump straight to any state or city below.</p>

            {/* States A-Z Jump Links */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">States A-Z</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W'].map(letter => (
                  <a
                    key={letter}
                    href={`/directories/states#${letter}`}
                    className="px-3 py-1 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors border border-blue-200 hover:border-blue-300"
                  >
                    {letter}
                  </a>
                ))}
              </div>
            </div>

            {/* Cities A-Z Jump Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Cities A-Z</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'L', 'N', 'S'].map(letter => (
                  <a
                    key={letter}
                    href={`/directories/cities#${letter}`}
                    className="px-3 py-1 text-sm font-medium text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-md transition-colors border border-purple-200 hover:border-purple-300"
                  >
                    {letter}
                  </a>
                ))}
              </div>
            </div>
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

      <FooterExpanded onNavigateToDisclosures={handleNavigateToDisclosures} />
    </div>
  );
}
