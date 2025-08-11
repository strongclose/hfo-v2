import React, { useState, useEffect } from "react";
import { Navigation } from "./Navigation";
import { FooterExpanded } from "./homepage/FooterExpanded";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Hospital,
  Search,
  MapPin,
  Building2,
  Users,
  ChevronRight,
  CheckCircle2,
  Stethoscope,
  Phone,
  Globe,
  Info,
  CreditCard,
  FileText,
  ExternalLink,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface ProvidersIndexPageProps {
  onNavigateToProviderDetails: (providerId: string) => void;
  onNavigateToDisclosures: () => void;
}

interface Provider {
  id: string;
  name: string;
  npi: string;
  ccn?: string;
  systemAffiliation?: string;
  locationCount: number;
  organizationType: string;
  state: string;
  states?: string[]; // For multi-state providers
  city: string;
  zipCode: string;
  phone: string;
  website?: string;
  transparencyScore: number;
  updated: string;
}

export function ProvidersIndexPage({
  onNavigateToProviderDetails,
  onNavigateToDisclosures,
}: ProvidersIndexPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedOrgType, setSelectedOrgType] = useState("");
  const [filteredProviders, setFilteredProviders] = useState<Provider[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Sample provider data
  const sampleProviders: Provider[] = [
    {
      id: "stanford-medical",
      name: "Stanford Medical Center",
      npi: "1234567890",
      ccn: "050441",
      systemAffiliation: "Stanford Health Care",
      locationCount: 12,
      organizationType: "Teaching Hospital",
      state: "CA",
      city: "Palo Alto",
      zipCode: "94305",
      phone: "(650) 723-4000",
      website: "https://stanfordhealthcare.org",
      transparencyScore: 87,
      updated: "January 2025",
    },
    {
      id: "ucsf-medical",
      name: "UCSF Medical Center",
      npi: "1234567891",
      ccn: "050454",
      systemAffiliation: "University of California San Francisco",
      locationCount: 8,
      organizationType: "Teaching Hospital",
      state: "CA",
      city: "San Francisco",
      zipCode: "94143",
      phone: "(415) 476-1000",
      website: "https://ucsfhealth.org",
      transparencyScore: 82,
      updated: "January 2025",
    },
    {
      id: "kaiser-permanente",
      name: "Kaiser Permanente Medical Centers",
      npi: "1234567892",
      systemAffiliation: "Kaiser Permanente",
      locationCount: 156,
      organizationType: "HMO",
      state: "CA",
      states: ["CA", "CO", "GA", "HI", "MD", "OR", "VA", "WA"],
      city: "Oakland",
      zipCode: "94612",
      phone: "(510) 271-5910",
      website: "https://kp.org",
      transparencyScore: 76,
      updated: "January 2025",
    },
    {
      id: "mayo-clinic",
      name: "Mayo Clinic",
      npi: "1234567893",
      ccn: "240119",
      systemAffiliation: "Mayo Clinic Health System",
      locationCount: 45,
      organizationType: "Academic Medical Center",
      state: "MN",
      city: "Rochester",
      zipCode: "55905",
      phone: "(507) 284-2511",
      website: "https://mayoclinic.org",
      transparencyScore: 94,
      updated: "January 2025",
    },
    {
      id: "cleveland-clinic",
      name: "Cleveland Clinic",
      npi: "1234567894",
      ccn: "360180",
      systemAffiliation: "Cleveland Clinic Health System",
      locationCount: 23,
      organizationType: "Academic Medical Center",
      state: "OH",
      city: "Cleveland",
      zipCode: "44195",
      phone: "(216) 444-2200",
      website: "https://clevelandclinic.org",
      transparencyScore: 89,
      updated: "January 2025",
    },
    {
      id: "johns-hopkins",
      name: "Johns Hopkins Hospital",
      npi: "1234567895",
      ccn: "210002",
      systemAffiliation: "Johns Hopkins Health System",
      locationCount: 17,
      organizationType: "Teaching Hospital",
      state: "MD",
      city: "Baltimore",
      zipCode: "21287",
      phone: "(410) 955-5000",
      website: "https://hopkinsmedicine.org",
      transparencyScore: 96,
      updated: "January 2025",
    },
    {
      id: "hca-healthcare",
      name: "HCA Healthcare Network",
      npi: "1234567896",
      systemAffiliation: "HCA Healthcare",
      locationCount: 185,
      organizationType: "General Hospital",
      state: "TN",
      states: ["TN", "TX", "FL", "SC", "NC", "VA", "KY", "IN", "UT", "NV", "CO", "KS", "MO", "LA", "AK", "CA", "ID", "MT", "NH", "WY"],
      city: "Nashville",
      zipCode: "37203",
      phone: "(615) 344-9551",
      website: "https://hcahealthcare.com",
      transparencyScore: 68,
      updated: "January 2025",
    },
    {
      id: "mount-sinai",
      name: "Mount Sinai Health System",
      npi: "1234567897",
      ccn: "330214",
      systemAffiliation: "Mount Sinai Health System",
      locationCount: 28,
      organizationType: "Academic Medical Center",
      state: "NY",
      city: "New York",
      zipCode: "10029",
      phone: "(212) 241-6500",
      website: "https://mountsinai.org",
      transparencyScore: 81,
      updated: "January 2025",
    },
  ];

  // Grade calculation function
  const getGradeFromScore = (score: number): string => {
    if (score >= 90) return 'A+';
    if (score >= 85) return 'A';
    if (score >= 75) return 'B';
    if (score >= 65) return 'C';
    return 'D';
  };

  // Grade chip component with conditional colors
  const GradeChip = ({ score, tooltip }: {
    score: number;
    tooltip: string;
  }) => {
    const grade = getGradeFromScore(score);

    const getChipColor = (grade: string) => {
      switch (grade) {
        case 'A':
        case 'A+':
          return '#00A651'; // Green
        case 'B':
        case 'B+':
          return '#F59E0B'; // Yellow/Amber
        case 'C':
        case 'C+':
          return '#F97316'; // Orange
        case 'D':
        case 'F':
        default:
          return '#EF4444'; // Red
      }
    };

    const getComplianceLevel = (grade: string) => {
      switch (grade) {
        case 'A':
        case 'A+':
          return 'high compliance';
        case 'B':
        case 'B+':
          return 'good compliance';
        case 'C':
        case 'C+':
          return 'fair compliance';
        case 'D':
        case 'F':
        default:
          return 'low compliance';
      }
    };

    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            className="inline-flex items-center px-2 py-1 rounded text-xs font-medium text-white cursor-pointer"
            style={{
              backgroundColor: getChipColor(grade),
              height: '20px'
            }}
            aria-label={`${grade} rating, ${getComplianceLevel(grade)}`}
          >
            {grade}
            <span className="sr-only">{getComplianceLevel(grade)}</span>
          </span>
        </TooltipTrigger>
        <TooltipContent className="bg-gray-900 text-white max-w-xs">
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    );
  };

  // Generate search suggestions
  const generateSuggestions = (query: string) => {
    if (!query || query.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const suggestions: string[] = [];

    // Check if it's a ZIP code pattern
    if (/^\d+$/.test(query) && query.length <= 5) {
      const matchingZips = sampleProviders
        .filter(p => p.zipCode.startsWith(query))
        .map(p => `${p.zipCode} (${p.city}, ${p.state})`)
        .slice(0, 3);
      suggestions.push(...matchingZips);
    }

    // Provider names
    const nameMatches = sampleProviders
      .filter(p => p.name.toLowerCase().includes(lowerQuery))
      .map(p => p.name)
      .slice(0, 5);
    suggestions.push(...nameMatches);

    // Cities
    const cityMatches = sampleProviders
      .filter(p => p.city.toLowerCase().includes(lowerQuery))
      .map(p => `${p.city}, ${p.state}`)
      .slice(0, 3);
    suggestions.push(...cityMatches);

    // System affiliations
    const systemMatches = sampleProviders
      .filter(p => p.systemAffiliation && p.systemAffiliation.toLowerCase().includes(lowerQuery))
      .map(p => p.systemAffiliation!)
      .slice(0, 3);
    suggestions.push(...systemMatches);

    // Remove duplicates and limit
    const uniqueSuggestions = [...new Set(suggestions)].slice(0, 8);
    setSuggestions(uniqueSuggestions);
    setShowSuggestions(uniqueSuggestions.length > 0);
  };

  // Filter providers based on search and filters
  useEffect(() => {
    let filtered = sampleProviders;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(provider =>
        provider.name.toLowerCase().includes(query) ||
        provider.npi.includes(searchQuery) ||
        (provider.ccn && provider.ccn.includes(searchQuery)) ||
        provider.city.toLowerCase().includes(query) ||
        provider.zipCode.includes(searchQuery) ||
        (provider.systemAffiliation && provider.systemAffiliation.toLowerCase().includes(query))
      );
    }

    if (selectedState) {
      filtered = filtered.filter(provider => provider.state === selectedState);
    }

    if (selectedOrgType) {
      filtered = filtered.filter(provider => provider.organizationType === selectedOrgType);
    }

    setFilteredProviders(filtered);
  }, [searchQuery, selectedState, selectedOrgType]);

  // Handle search input changes
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    generateSuggestions(value);
  };

  // Handle suggestion selection
  const handleSuggestionSelect = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const handleSearch = () => {
    setIsLoading(true);
    setShowSuggestions(false);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.05),transparent_50%)] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
              Healthcare{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                Providers
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light mb-6">
              Browse hospitals, clinics, and health systems by NPI, CCN, and transparency scores.
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 sticky top-4 z-40">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="lg:col-span-2 relative">
                  <Input
                    placeholder="Search by name, NPI, CCN, city, or ZIP code..."
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    onFocus={() => generateSuggestions(searchQuery)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    className="w-full"
                  />

                  {/* Search Suggestions Dropdown */}
                  {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleSuggestionSelect(suggestion)}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none border-b border-gray-100 last:border-b-0"
                        >
                          <div className="text-sm text-gray-900">{suggestion}</div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger>
                    <SelectValue placeholder="State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All States</SelectItem>
                    <SelectItem value="CA">California</SelectItem>
                    <SelectItem value="NY">New York</SelectItem>
                    <SelectItem value="TX">Texas</SelectItem>
                    <SelectItem value="FL">Florida</SelectItem>
                    <SelectItem value="MN">Minnesota</SelectItem>
                    <SelectItem value="OH">Ohio</SelectItem>
                    <SelectItem value="MD">Maryland</SelectItem>
                    <SelectItem value="TN">Tennessee</SelectItem>
                  </SelectContent>
                </Select>

                <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>

              {/* Result count moved closer to search controls */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-gray-900">
                      {filteredProviders.length} providers found
                    </span>
                    <div className="inline-flex items-center px-2 py-1 rounded-full bg-green-50 border border-green-200">
                      <CheckCircle2 className="w-3 h-3 text-green-600 mr-1" />
                      <span className="text-green-800 font-medium text-xs">
                        Updated January 2025
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Provider Results
            </h2>
            <p className="text-gray-600">
              Healthcare providers with transparency ratings and system affiliations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProviders.map((provider) => (
              <Card key={provider.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                          <Hospital className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{provider.name}</h3>
                          <div className="flex items-center gap-3 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <span className="font-medium">Identifiers:</span>
                              <div className="flex items-center gap-2">
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <span className="flex items-center gap-1 px-2 py-1 bg-blue-50 rounded text-xs">
                                      <CreditCard className="w-3 h-3" />
                                      {provider.npi}
                                    </span>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>National Provider Identifier (NPI)</p>
                                  </TooltipContent>
                                </Tooltip>
                                {provider.ccn && (
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <span className="flex items-center gap-1 px-2 py-1 bg-purple-50 rounded text-xs">
                                        <FileText className="w-3 h-3" />
                                        {provider.ccn}
                                      </span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>CMS Certification Number (CCN)</p>
                                    </TooltipContent>
                                  </Tooltip>
                                )}
                              </div>
                            </div>
                            <span className="flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              {provider.city}, {provider.state} • {provider.phone}
                            </span>
                          </div>
                        </div>
                      </div>

                      {provider.systemAffiliation && (
                        <div className="mb-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-md bg-purple-50 text-purple-700 border border-purple-200 text-xs">
                            <Building2 className="w-3 h-3 mr-1" />
                            {provider.systemAffiliation}
                          </span>
                        </div>
                      )}

                      <div className="grid grid-cols-3 gap-4 mb-3">
                        <div>
                          <div className="text-sm text-gray-600">Locations</div>
                          <div className="flex items-center gap-2">
                            {provider.states && provider.states.length > 1 ? (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div className="flex items-center gap-1 cursor-pointer">
                                    <MapPin className="w-4 h-4 text-blue-600" />
                                    <span className="font-semibold text-gray-900">{provider.locationCount}</span>
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent className="bg-gray-900 text-white max-w-xs">
                                  <div>
                                    <p className="font-medium mb-2">Locations by state:</p>
                                    <div className="text-xs space-y-1">
                                      {provider.states.map((state, index) => (
                                        <div key={state}>
                                          {state}: {Math.floor(provider.locationCount / provider.states!.length) + (index < provider.locationCount % provider.states!.length ? 1 : 0)} locations
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </TooltipContent>
                              </Tooltip>
                            ) : (
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4 text-blue-600" />
                                <span className="font-semibold text-gray-900">{provider.locationCount}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Transparency Score</div>
                          <div className="flex items-center gap-2">
                            <GradeChip
                              score={provider.transparencyScore}
                              tooltip="Based on this provider's compliance with federal pricing transparency mandates. Updated periodically when new provider TiC data is available."
                            />
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button className="text-gray-400 hover:text-gray-600" aria-label="Provider Transparency Rating info">
                                  <Info className="w-3 h-3" />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent className="bg-gray-900 text-white max-w-xs">
                                <p>Based on this provider's compliance with federal pricing transparency mandates. Updated periodically when new provider TiC data is available.</p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Data Status</div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-medium text-green-700">Current</span>
                          </div>
                        </div>
                      </div>

                    </div>

                    <Button
                      onClick={() => onNavigateToProviderDetails(provider.id)}
                      variant="outline"
                      className="hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
                    >
                      View Details
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredProviders.length === 0 && (
            <div className="text-center py-12">
              <Stethoscope className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No providers found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </div>
      </section>

      <FooterExpanded />
    </div>
  );
}
