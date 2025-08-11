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

  // Filter providers based on search and filters
  useEffect(() => {
    let filtered = sampleProviders;

    if (searchQuery) {
      filtered = filtered.filter(provider =>
        provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.npi.includes(searchQuery) ||
        (provider.ccn && provider.ccn.includes(searchQuery)) ||
        (provider.systemAffiliation && provider.systemAffiliation.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (selectedState) {
      filtered = filtered.filter(provider => provider.state === selectedState);
    }

    if (selectedOwnership) {
      filtered = filtered.filter(provider => provider.ownership === selectedOwnership);
    }

    if (selectedOrgType) {
      filtered = filtered.filter(provider => provider.organizationType === selectedOrgType);
    }

    setFilteredProviders(filtered);
  }, [searchQuery, selectedState, selectedOwnership, selectedOrgType, selectedSystem]);

  const handleSearch = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
    // Simulate loading more results
    setTimeout(() => {
      if (currentPage >= 3) {
        setHasMore(false);
      }
    }, 500);
  };

  const getScoreColor = (score: string) => {
    if (score.startsWith('A')) return 'bg-green-100 text-green-800 border-green-200';
    if (score.startsWith('B')) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (score.startsWith('C')) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-red-100 text-red-800 border-red-200';
  };

  const getOwnershipColor = (ownership: string) => {
    if (ownership === 'Non-profit') return 'bg-green-50 text-green-700 border-green-200';
    if (ownership === 'For-profit') return 'bg-blue-50 text-blue-700 border-blue-200';
    return 'bg-gray-50 text-gray-700 border-gray-200';
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 mb-6 shadow-xl shadow-blue-500/25">
              <Hospital className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
              Healthcare{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                Providers
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light mb-6">
              Browse hospitals, clinics, and health systems by NPI, CCN, and transparency scores.
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200">
              <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-green-800 font-medium text-sm">
                {filteredProviders.length} providers found • Updated January 2025
              </span>
            </div>
          </div>

          {/* Search Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="lg:col-span-2">
                  <Input
                    placeholder="Search providers by name, NPI, or CCN..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
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
                <Select value={selectedOwnership} onValueChange={setSelectedOwnership}>
                  <SelectTrigger>
                    <SelectValue placeholder="Ownership" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Types</SelectItem>
                    <SelectItem value="Non-profit">Non-profit</SelectItem>
                    <SelectItem value="For-profit">For-profit</SelectItem>
                    <SelectItem value="Government">Government</SelectItem>
                  </SelectContent>
                </Select>
                <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
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
              Provider Results ({filteredProviders.length})
            </h2>
            <p className="text-gray-600">
              Healthcare providers with transparency ratings and system affiliations
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {filteredProviders.map((provider) => (
              <Card key={provider.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                          <Hospital className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{provider.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>NPI: {provider.npi}</span>
                            {provider.ccn && (
                              <>
                                <span>•</span>
                                <span>CCN: {provider.ccn}</span>
                              </>
                            )}
                            <span>•</span>
                            <span className="flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              {provider.city}, {provider.state}
                            </span>
                          </div>
                        </div>
                      </div>

                      {provider.systemAffiliation && (
                        <div className="mb-3">
                          <span className="inline-flex items-center px-2 py-1 rounded-md bg-purple-50 text-purple-700 border border-purple-200 text-xs">
                            <Building2 className="w-3 h-3 mr-1" />
                            {provider.systemAffiliation}
                          </span>
                        </div>
                      )}

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-gray-600">Locations</div>
                          <div className="font-semibold text-gray-900">{provider.locationCount}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Type</div>
                          <div className="font-semibold text-gray-900">{provider.organizationType}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Transparency</div>
                          <Badge className={`${getScoreColor(provider.transparencyScore)} border`}>
                            {provider.transparencyScore}
                          </Badge>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Updated</div>
                          <div className="font-medium text-gray-900">{provider.updated}</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className={`${getOwnershipColor(provider.ownership)} border text-xs`}>
                          {provider.ownership}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {provider.organizationType}
                        </Badge>
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

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-12">
              <Button 
                onClick={handleLoadMore}
                variant="outline"
                size="lg"
                className="bg-white hover:bg-gray-50"
              >
                Load More Providers
              </Button>
            </div>
          )}

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

      <FooterExpanded onNavigateToDisclosures={onNavigateToDisclosures} />
    </div>
  );
}
