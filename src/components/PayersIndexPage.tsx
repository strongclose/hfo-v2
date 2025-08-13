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
  Shield,
  Search,
  MapPin,
  Building2,
  Users,
  ChevronRight,
  CheckCircle2,
  Heart,
  Phone,
  Globe,
  Info,
  CreditCard,
  FileText,
  ExternalLink,
  Filter,
  SortAsc,
  X,
  DollarSign,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface PayersIndexPageProps {
  onNavigateToPayerDetails?: (payerId: string) => void;
  onNavigateToDisclosures?: () => void;
}

interface Payer {
  id: string;
  name: string;
  type: string; // "Health Insurance", "Medicare Advantage", "Medicaid", etc.
  ein: string;
  hiosId?: string;
  memberCount: number;
  coverageStates: string[];
  marketType: string; // "Individual", "Group", "Government", "Mixed"
  state: string; // Primary state
  city: string;
  zipCode: string;
  phone: string;
  website?: string;
  transparencyScore: number;
  updated: string;
  description: string;
  planTypes: string[];
  networkSize: string; // "Large", "Medium", "Small"
  specialPrograms: string[];
}

export function PayersIndexPage({
  onNavigateToPayerDetails,
  onNavigateToDisclosures,
}: PayersIndexPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedPayerType, setSelectedPayerType] = useState("");
  const [selectedScores, setSelectedScores] = useState<string[]>([]);
  const [selectedMarketTypes, setSelectedMarketTypes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("score");
  const [filteredPayers, setFilteredPayers] = useState<Payer[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Sample payer data
  const samplePayers: Payer[] = [
    {
      id: "anthem-blue-cross",
      name: "Anthem Blue Cross Blue Shield",
      type: "Health Insurance",
      ein: "54-1234567",
      hiosId: "53882",
      memberCount: 4200000,
      coverageStates: ["CA", "NY", "TX", "FL", "OH", "IN", "KY", "MO", "NV", "WI"],
      marketType: "Mixed",
      state: "IN",
      city: "Indianapolis",
      zipCode: "46204",
      phone: "(800) 331-1476",
      website: "https://anthem.com",
      transparencyScore: 85,
      updated: "January 2025",
      description: "One of the largest health benefits companies in the US, serving millions of members across multiple states with comprehensive health insurance coverage.",
      planTypes: ["HMO", "PPO", "EPO", "Medicare Advantage", "Medicaid"],
      networkSize: "Large",
      specialPrograms: ["Medicare Advantage", "Medicaid", "ACA Marketplace", "Employer Groups"]
    },
    {
      id: "aetna-health-plans",
      name: "Aetna Health Plans",
      type: "Health Insurance",
      ein: "06-1234568",
      hiosId: "47037",
      memberCount: 2800000,
      coverageStates: ["CT", "FL", "GA", "IL", "KY", "LA", "MD", "NJ", "NY", "OH", "PA", "TX", "VA"],
      marketType: "Mixed",
      state: "CT",
      city: "Hartford",
      zipCode: "06156",
      phone: "(800) 872-3862",
      website: "https://aetna.com",
      transparencyScore: 78,
      updated: "January 2025",
      description: "A CVS Health company providing innovative health insurance products and services to millions of members nationwide.",
      planTypes: ["HMO", "PPO", "Medicare Advantage", "Employer Plans"],
      networkSize: "Large",
      specialPrograms: ["Medicare Advantage", "ACA Marketplace", "Employer Groups", "International"]
    },
    {
      id: "kaiser-permanente",
      name: "Kaiser Permanente",
      type: "HMO",
      ein: "94-1234569",
      hiosId: "92895",
      memberCount: 1240000,
      coverageStates: ["CA", "CO", "GA", "HI", "MD", "OR", "VA", "WA"],
      marketType: "Mixed",
      state: "CA",
      city: "Oakland",
      zipCode: "94612",
      phone: "(510) 271-5910",
      website: "https://kp.org",
      transparencyScore: 92,
      updated: "January 2025",
      description: "An integrated managed care consortium that combines health insurance and healthcare delivery through owned hospitals and medical groups.",
      planTypes: ["HMO", "Medicare Advantage", "Medicaid"],
      networkSize: "Medium",
      specialPrograms: ["Medicare Advantage", "Medicaid", "ACA Marketplace", "Integrated Care"]
    },
    {
      id: "unitedhealth-group",
      name: "UnitedHealthcare",
      type: "Health Insurance",
      ein: "41-1234570",
      hiosId: "51146",
      memberCount: 5600000,
      coverageStates: ["All 50 States"],
      marketType: "Mixed",
      state: "MN",
      city: "Minnetonka",
      zipCode: "55343",
      phone: "(800) 328-5979",
      website: "https://uhc.com",
      transparencyScore: 74,
      updated: "January 2025",
      description: "The largest health insurance company in the United States, providing comprehensive healthcare coverage and services nationwide.",
      planTypes: ["HMO", "PPO", "EPO", "Medicare Advantage", "Medicaid", "Employer Plans"],
      networkSize: "Large",
      specialPrograms: ["Medicare Advantage", "Medicaid", "ACA Marketplace", "Employer Groups", "International"]
    },
    {
      id: "humana-health",
      name: "Humana Health Plans",
      type: "Health Insurance",
      ein: "61-1234571",
      hiosId: "18076",
      memberCount: 1800000,
      coverageStates: ["AL", "AZ", "FL", "GA", "IL", "IN", "KY", "LA", "MO", "NC", "OH", "SC", "TN", "TX", "WI"],
      marketType: "Mixed",
      state: "KY",
      city: "Louisville",
      zipCode: "40202",
      phone: "(800) 448-6262",
      website: "https://humana.com",
      transparencyScore: 81,
      updated: "January 2025",
      description: "A leading health and well-being company with a strong focus on Medicare Advantage plans and integrated healthcare services.",
      planTypes: ["Medicare Advantage", "Medicaid", "Employer Plans", "Individual Plans"],
      networkSize: "Large",
      specialPrograms: ["Medicare Advantage", "Medicaid", "Wellness Programs", "Chronic Care Management"]
    },
    {
      id: "cigna-healthcare",
      name: "Cigna Healthcare",
      type: "Health Insurance",
      ein: "06-1234572",
      hiosId: "86893",
      memberCount: 1950000,
      coverageStates: ["AZ", "CO", "FL", "GA", "IL", "KS", "MO", "NC", "TN", "TX", "UT", "VA"],
      marketType: "Mixed",
      state: "CT",
      city: "Bloomfield",
      zipCode: "06002",
      phone: "(800) 997-1654",
      website: "https://cigna.com",
      transparencyScore: 76,
      updated: "January 2025",
      description: "A global health services company dedicated to improving the health, well-being and peace of mind of those we serve.",
      planTypes: ["HMO", "PPO", "EPO", "Medicare Advantage", "Employer Plans"],
      networkSize: "Large",
      specialPrograms: ["Medicare Advantage", "ACA Marketplace", "Employer Groups", "International", "Behavioral Health"]
    },
    {
      id: "molina-healthcare",
      name: "Molina Healthcare",
      type: "Medicaid",
      ein: "33-1234573",
      hiosId: "25076",
      memberCount: 520000,
      coverageStates: ["CA", "FL", "ID", "IL", "MI", "MS", "NM", "NY", "OH", "SC", "TX", "UT", "WA", "WI"],
      marketType: "Government",
      state: "CA",
      city: "Long Beach",
      zipCode: "90802",
      phone: "(800) 526-8196",
      website: "https://molinahealthcare.com",
      transparencyScore: 87,
      updated: "January 2025",
      description: "A multi-state healthcare organization that provides managed healthcare services under Medicaid and Medicare programs.",
      planTypes: ["Medicaid", "Medicare Advantage", "ACA Marketplace"],
      networkSize: "Medium",
      specialPrograms: ["Medicaid", "Medicare Advantage", "ACA Marketplace", "Dual Eligible Special Needs"]
    },
    {
      id: "blue-cross-florida",
      name: "Florida Blue",
      type: "Blue Cross Blue Shield",
      ein: "59-1234574",
      hiosId: "11512",
      memberCount: 890000,
      coverageStates: ["FL"],
      marketType: "Mixed",
      state: "FL",
      city: "Jacksonville",
      zipCode: "32202",
      phone: "(800) 352-2583",
      website: "https://floridablue.com",
      transparencyScore: 83,
      updated: "January 2025",
      description: "Florida's Blue Cross and Blue Shield plan, providing comprehensive health insurance coverage throughout the state of Florida.",
      planTypes: ["HMO", "PPO", "EPO", "Medicare Advantage", "ACA Marketplace"],
      networkSize: "Large",
      specialPrograms: ["Medicare Advantage", "ACA Marketplace", "Employer Groups", "Individual Plans"]
    }
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

  // Function to convert payer name to URL-friendly slug
  const slugifyPayerName = (name: string): string => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .trim(); // Remove leading/trailing whitespace
  };
  
  // Default navigation handlers for when props are not provided (Astro hydration issue)
  const handleNavigateToPayerDetails = (payerId: string) => {
    // Find the payer to get its name
    const payer = samplePayers.find(p => p.id === payerId);
    const payerSlug = payer ? slugifyPayerName(payer.name) : payerId;
    
    if (onNavigateToPayerDetails && typeof onNavigateToPayerDetails === 'function') {
      onNavigateToPayerDetails(payerSlug);
    } else {
      // Fallback navigation using payer name slug
      if (typeof window !== 'undefined') {
        window.location.href = `/payers/${payerSlug}`;
      }
    }
  };

  const handleNavigateToDisclosures = () => {
    if (onNavigateToDisclosures && typeof onNavigateToDisclosures === 'function') {
      onNavigateToDisclosures();
    } else {
      // Fallback navigation
      if (typeof window !== 'undefined') {
        window.location.href = "/disclosures";
      }
    }
  };

  // Get unique values for filters
  const uniqueStates = [...new Set(samplePayers.flatMap(p => p.coverageStates))].sort();
  const uniquePayerTypes = [...new Set(samplePayers.map(p => p.type))].sort();
  const uniqueMarketTypes = [...new Set(samplePayers.map(p => p.marketType))].sort();
  const scoreGrades = ['A+', 'A', 'B', 'C', 'D'];

  // Enhanced filtering and sorting
  useEffect(() => {
    let filtered = [...samplePayers];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(payer =>
        payer.name.toLowerCase().includes(query) ||
        payer.ein.includes(searchQuery) ||
        (payer.hiosId && payer.hiosId.includes(searchQuery)) ||
        payer.city.toLowerCase().includes(query) ||
        payer.zipCode.includes(searchQuery) ||
        payer.type.toLowerCase().includes(query) ||
        payer.coverageStates.some(state => state.toLowerCase().includes(query))
      );
    }

    // State filter
    if (selectedState) {
      filtered = filtered.filter(payer => payer.coverageStates.includes(selectedState));
    }

    // Score filter
    if (selectedScores.length > 0) {
      filtered = filtered.filter(payer => 
        selectedScores.includes(getGradeFromScore(payer.transparencyScore))
      );
    }

    // Market type filter
    if (selectedMarketTypes.length > 0) {
      filtered = filtered.filter(payer => 
        selectedMarketTypes.includes(payer.marketType)
      );
    }

    // Payer type filter
    if (selectedPayerType) {
      filtered = filtered.filter(payer => payer.type === selectedPayerType);
    }

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'score':
          return b.transparencyScore - a.transparencyScore;
        case 'members':
          return b.memberCount - a.memberCount;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'coverage':
          return b.coverageStates.length - a.coverageStates.length;
        default:
          return 0;
      }
    });

    setFilteredPayers(filtered);
  }, [searchQuery, selectedState, selectedPayerType, selectedScores, selectedMarketTypes, sortBy]);

  // Filter chip management
  const addScoreFilter = (score: string) => {
    if (!selectedScores.includes(score)) {
      setSelectedScores([...selectedScores, score]);
    }
  };

  const removeScoreFilter = (score: string) => {
    setSelectedScores(selectedScores.filter(s => s !== score));
  };

  const addMarketTypeFilter = (marketType: string) => {
    if (!selectedMarketTypes.includes(marketType)) {
      setSelectedMarketTypes([...selectedMarketTypes, marketType]);
    }
  };

  const removeMarketTypeFilter = (marketType: string) => {
    setSelectedMarketTypes(selectedMarketTypes.filter(m => m !== marketType));
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedState("");
    setSelectedPayerType("");
    setSelectedScores([]);
    setSelectedMarketTypes([]);
    setSortBy("score");
  };

  const handleSearch = () => {
    setIsLoading(true);
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
                Payers
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light mb-6">
              Browse insurance companies, health plans, and payers by transparency scores, coverage areas, and member counts.
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
                  placeholder="Search by name, EIN, HIOS ID, city, or state..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>

              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger>
                  <SelectValue placeholder="Coverage State" />
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
                  <SelectItem value="members">Most Members</SelectItem>
                  <SelectItem value="name">Alphabetical (A-Z)</SelectItem>
                  <SelectItem value="coverage">Widest Coverage</SelectItem>
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

            {/* Market Type Filter */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Market Type:
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {uniqueMarketTypes.map(marketType => (
                  <button
                    key={marketType}
                    onClick={() => selectedMarketTypes.includes(marketType) ? removeMarketTypeFilter(marketType) : addMarketTypeFilter(marketType)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all text-left truncate ${
                      selectedMarketTypes.includes(marketType)
                        ? 'bg-purple-100 text-purple-800 ring-2 ring-purple-300'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    title={marketType}
                  >
                    {marketType}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Summary */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold text-gray-900">
                  {filteredPayers.length} payers found
                </span>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 border border-green-200">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-green-800 font-medium text-sm">
                    Updated January 2025
                  </span>
                </div>
              </div>
              
              {(searchQuery || selectedState || selectedScores.length > 0 || selectedMarketTypes.length > 0) && (
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
            {filteredPayers.map((payer) => (
              <Card key={payer.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  
                  {/* Top Row: Name + Location | Transparency Score */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight">
                        {payer.name}
                      </h3>
                      <div className="flex items-center text-gray-600 text-sm mb-2">
                        <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                        <span>{payer.city}, {payer.state}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Shield className="w-4 h-4 mr-1 flex-shrink-0" />
                        <span>{payer.type}</span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <GradeBadge score={payer.transparencyScore} />
                    </div>
                  </div>

                  {/* Coverage States */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Coverage Area:</div>
                    <div className="flex flex-wrap gap-1">
                      {payer.coverageStates.slice(0, 4).map(state => (
                        <span key={state} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                          {state}
                        </span>
                      ))}
                      {payer.coverageStates.length > 4 && (
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-700">
                          +{payer.coverageStates.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Middle Section: Member Count + Plan Types */}
                  <div className="grid grid-cols-2 gap-4 mb-6 py-4 bg-gray-50 rounded-lg px-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="w-4 h-4 text-blue-600 mr-1" />
                        <span className="font-semibold text-gray-900 text-lg">
                          {(payer.memberCount / 1000000).toFixed(1)}M
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        Members
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <DollarSign className="w-4 h-4 text-green-600 mr-1" />
                        <span className="font-semibold text-gray-900 text-sm">
                          {payer.planTypes.length} Types
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        Plan Options
                      </div>
                    </div>
                  </div>

                  {/* Lower Section: EIN, HIOS ID, Phone */}
                  <div className="space-y-2 mb-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <CreditCard className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="font-medium mr-2">EIN:</span>
                      <span className="font-mono">{payer.ein}</span>
                    </div>
                    {payer.hiosId && (
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="font-medium mr-2">HIOS ID:</span>
                        <span className="font-mono">{payer.hiosId}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="font-medium mr-2">Phone:</span>
                      <span>{payer.phone}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-end">
                    <Button
                      onClick={() => handleNavigateToPayerDetails(payer.id)}
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
          {filteredPayers.length === 0 && (
            <div className="text-center py-16">
              <Shield className="w-16 h-16 text-gray-300 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No payers found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or filters to find payers.
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
