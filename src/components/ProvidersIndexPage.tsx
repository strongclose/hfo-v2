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
  Filter,
  SortAsc,
  X,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface ProvidersIndexPageProps {
  onNavigateToProviderDetails?: (providerId: string) => void;
  onNavigateToDisclosures?: () => void;
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
  const [selectedScores, setSelectedScores] = useState<string[]>([]);
  const [selectedSystems, setSelectedSystems] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("score");
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

  // Enhanced Grade Badge component
  const GradeBadge = ({ score }: { score: number }) => {
    const grade = getGradeFromScore(score);

    const getBadgeStyles = (grade: string) => {
      switch (grade) {
        case 'A+':
        case 'A':
          return {
            bg: 'bg-emerald-500',
            text: 'text-white',
            ring: 'ring-emerald-200'
          };
        case 'B':
          return {
            bg: 'bg-blue-500',
            text: 'text-white',
            ring: 'ring-blue-200'
          };
        case 'C':
          return {
            bg: 'bg-amber-500',
            text: 'text-white',
            ring: 'ring-amber-200'
          };
        case 'D':
        default:
          return {
            bg: 'bg-red-500',
            text: 'text-white',
            ring: 'ring-red-200'
          };
      }
    };

    const styles = getBadgeStyles(grade);

    return (
      <div className={`inline-flex items-center px-3 py-2 rounded-full font-semibold text-sm ring-2 ${styles.bg} ${styles.text} ${styles.ring}`}>
        {grade}
      </div>
    );
  };

  // Get unique values for filters
  const uniqueStates = [...new Set(sampleProviders.map(p => p.state))].sort();
  const uniqueSystems = [...new Set(sampleProviders.map(p => p.systemAffiliation).filter(Boolean))].sort();
  const scoreGrades = ['A+', 'A', 'B', 'C', 'D'];

  // Enhanced filtering and sorting
  useEffect(() => {
    let filtered = [...sampleProviders];

    // Search filter
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

    // State filter
    if (selectedState) {
      filtered = filtered.filter(provider => provider.state === selectedState);
    }

    // Score filter
    if (selectedScores.length > 0) {
      filtered = filtered.filter(provider => 
        selectedScores.includes(getGradeFromScore(provider.transparencyScore))
      );
    }

    // System filter
    if (selectedSystems.length > 0) {
      filtered = filtered.filter(provider => 
        provider.systemAffiliation && selectedSystems.includes(provider.systemAffiliation)
      );
    }

    // Organization type filter
    if (selectedOrgType) {
      filtered = filtered.filter(provider => provider.organizationType === selectedOrgType);
    }

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'score':
          return b.transparencyScore - a.transparencyScore;
        case 'locations':
          return b.locationCount - a.locationCount;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'state':
          return a.state.localeCompare(b.state);
        default:
          return 0;
      }
    });

    setFilteredProviders(filtered);
  }, [searchQuery, selectedState, selectedOrgType, selectedScores, selectedSystems, sortBy]);

  // Filter chip management
  const addScoreFilter = (score: string) => {
    if (!selectedScores.includes(score)) {
      setSelectedScores([...selectedScores, score]);
    }
  };

  const removeScoreFilter = (score: string) => {
    setSelectedScores(selectedScores.filter(s => s !== score));
  };

  const addSystemFilter = (system: string) => {
    if (!selectedSystems.includes(system)) {
      setSelectedSystems([...selectedSystems, system]);
    }
  };

  const removeSystemFilter = (system: string) => {
    setSelectedSystems(selectedSystems.filter(s => s !== system));
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedState("");
    setSelectedOrgType("");
    setSelectedScores([]);
    setSelectedSystems([]);
    setSortBy("score");
  };

  const handleSearch = () => {
    setIsLoading(true);
    setShowSuggestions(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
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
              Browse hospitals, clinics, and health systems by transparency scores and compliance ratings.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Filtering Section */}
      <section className="relative -mt-8 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sticky top-4 z-40">
            
            {/* Search and Primary Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              <div className="lg:col-span-2">
                <Input
                  placeholder="Search by name, NPI, CCN, city, or ZIP..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>

              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger>
                  <SelectValue placeholder="All States" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All States</SelectItem>
                  {uniqueStates.map(state => (
                    <SelectItem key={state} value={state}>{state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="score">Best Transparency Score</SelectItem>
                  <SelectItem value="locations">Most Locations</SelectItem>
                  <SelectItem value="name">Alphabetical (A-Z)</SelectItem>
                  <SelectItem value="state">By State</SelectItem>
                </SelectContent>
              </Select>

              <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>

            {/* Score Filter Chips */}
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Transparency Score:
              </label>
              <div className="flex flex-wrap gap-2">
                {scoreGrades.map(grade => (
                  <button
                    key={grade}
                    onClick={() => selectedScores.includes(grade) ? removeScoreFilter(grade) : addScoreFilter(grade)}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedScores.includes(grade)
                        ? 'bg-blue-100 text-blue-800 ring-2 ring-blue-300'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {grade}
                    {selectedScores.includes(grade) && (
                      <X className="w-3 h-3 ml-1 inline" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* System Affiliation Filter */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Health System:
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {uniqueSystems.slice(0, 8).map(system => (
                  <button
                    key={system}
                    onClick={() => selectedSystems.includes(system) ? removeSystemFilter(system) : addSystemFilter(system)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all text-left truncate ${
                      selectedSystems.includes(system)
                        ? 'bg-purple-100 text-purple-800 ring-2 ring-purple-300'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    title={system}
                  >
                    {system}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Summary */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold text-gray-900">
                  {filteredProviders.length} providers found
                </span>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 border border-green-200">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-green-800 font-medium text-sm">
                    Updated January 2025
                  </span>
                </div>
              </div>
              
              {(searchQuery || selectedState || selectedScores.length > 0 || selectedSystems.length > 0) && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearAllFilters}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <X className="w-4 h-4 mr-1" />
                  Clear Filters
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProviders.map((provider) => (
              <Card key={provider.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  
                  {/* Top Row: Name + City/State | Transparency Score */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight">
                        {provider.name}
                      </h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                        <span>{provider.city}, {provider.state}</span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <GradeBadge score={provider.transparencyScore} />
                    </div>
                  </div>

                  {/* System Affiliation */}
                  {provider.systemAffiliation && (
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium border">
                        <Building2 className="w-3 h-3 mr-1" />
                        {provider.systemAffiliation}
                      </span>
                    </div>
                  )}

                  {/* Middle Section: Location Count + Data Status */}
                  <div className="grid grid-cols-2 gap-4 mb-6 py-4 bg-gray-50 rounded-lg px-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <MapPin className="w-4 h-4 text-blue-600 mr-1" />
                        <span className="font-semibold text-gray-900 text-lg">
                          {provider.locationCount}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        Location{provider.locationCount !== 1 ? 's' : ''}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-1" />
                        <span className="font-semibold text-gray-900 text-sm">
                          Current
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        Data Status
                      </div>
                    </div>
                  </div>

                  {/* Lower Section: NPI, CCN, Phone */}
                  <div className="space-y-2 mb-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <CreditCard className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="font-medium mr-2">NPI:</span>
                      <span className="font-mono">{provider.npi}</span>
                    </div>
                    {provider.ccn && (
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="font-medium mr-2">CCN:</span>
                        <span className="font-mono">{provider.ccn}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="font-medium mr-2">Phone:</span>
                      <span>{provider.phone}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-end">
                    <Button
                      onClick={() => onNavigateToProviderDetails(provider.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6"
                    >
                      View Details
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredProviders.length === 0 && (
            <div className="text-center py-16">
              <Stethoscope className="w-16 h-16 text-gray-300 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No providers found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or filters to find providers.
              </p>
              <Button
                variant="outline"
                onClick={clearAllFilters}
                className="mx-auto"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <FooterExpanded />
    </div>
  );
}
