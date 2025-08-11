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
  CreditCard,
  Search,
  Filter,
  MapPin,
  Building2,
  Users,
  TrendingUp,
  ChevronRight,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

interface PayersIndexPageProps {
  onNavigateToPayerDetails: (payerId: string) => void;
  onNavigateToDisclosures: () => void;
}

interface Payer {
  id: string;
  name: string;
  naic: string;
  state: string;
  planCount: number;
  marketTypes: string[];
  transparencyScore: string;
  updated: string;
  logo?: string;
}

export function PayersIndexPage({
  onNavigateToPayerDetails,
  onNavigateToDisclosures,
}: PayersIndexPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedMarketType, setSelectedMarketType] = useState("");
  const [selectedNAIC, setSelectedNAIC] = useState("");
  const [selectedPlanBrand, setSelectedPlanBrand] = useState("");
  const [filteredPayers, setFilteredPayers] = useState<Payer[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Sample payer data
  const samplePayers: Payer[] = [
    {
      id: "aetna",
      name: "Aetna Inc.",
      naic: "60054",
      state: "CT",
      planCount: 847,
      marketTypes: ["Individual", "Small Group", "Large Group"],
      transparencyScore: "B+",
      updated: "January 2025",
    },
    {
      id: "anthem",
      name: "Anthem Inc.",
      naic: "61136",
      state: "IN",
      planCount: 1205,
      marketTypes: ["Individual", "Small Group", "Large Group", "Medicare"],
      transparencyScore: "A-",
      updated: "January 2025",
    },
    {
      id: "bcbs-ca",
      name: "Blue Cross Blue Shield of California",
      naic: "95290",
      state: "CA",
      planCount: 623,
      marketTypes: ["Individual", "Small Group", "Large Group"],
      transparencyScore: "B",
      updated: "January 2025",
    },
    {
      id: "cigna",
      name: "Cigna Health and Life Insurance Company",
      naic: "67369",
      state: "CT",
      planCount: 734,
      marketTypes: ["Individual", "Small Group", "Large Group", "Medicare"],
      transparencyScore: "B+",
      updated: "January 2025",
    },
    {
      id: "united",
      name: "UnitedHealthcare Insurance Company",
      naic: "79413",
      state: "CT",
      planCount: 1456,
      marketTypes: ["Individual", "Small Group", "Large Group", "Medicare", "Medicaid"],
      transparencyScore: "A",
      updated: "January 2025",
    },
    {
      id: "humana",
      name: "Humana Inc.",
      naic: "61935",
      state: "KY",
      planCount: 912,
      marketTypes: ["Individual", "Medicare", "Medicaid"],
      transparencyScore: "B+",
      updated: "January 2025",
    },
    {
      id: "kaiser-ca",
      name: "Kaiser Foundation Health Plan Inc.",
      naic: "95797",
      state: "CA",
      planCount: 289,
      marketTypes: ["Individual", "Small Group", "Large Group"],
      transparencyScore: "C+",
      updated: "January 2025",
    },
    {
      id: "molina",
      name: "Molina Healthcare Inc.",
      naic: "95491",
      state: "CA",
      planCount: 445,
      marketTypes: ["Individual", "Medicaid"],
      transparencyScore: "B",
      updated: "January 2025",
    },
  ];

  // Filter payers based on search and filters
  useEffect(() => {
    let filtered = samplePayers;

    if (searchQuery) {
      filtered = filtered.filter(payer =>
        payer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        payer.naic.includes(searchQuery)
      );
    }

    if (selectedState) {
      filtered = filtered.filter(payer => payer.state === selectedState);
    }

    if (selectedMarketType) {
      filtered = filtered.filter(payer => payer.marketTypes.includes(selectedMarketType));
    }

    if (selectedNAIC) {
      filtered = filtered.filter(payer => payer.naic.includes(selectedNAIC));
    }

    setFilteredPayers(filtered);
  }, [searchQuery, selectedState, selectedMarketType, selectedNAIC, selectedPlanBrand]);

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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 mb-6 shadow-xl shadow-green-500/25">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
              Healthcare{" "}
              <span className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent">
                Payers
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light mb-6">
              Browse insurers and health plans by NAIC, state coverage, and transparency scores.
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200">
              <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-green-800 font-medium text-sm">
                {filteredPayers.length} payers found • Updated January 2025
              </span>
            </div>
          </div>

          {/* Search Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="lg:col-span-2">
                  <Input
                    placeholder="Search payers by name or NAIC..."
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
                    <SelectItem value="CT">Connecticut</SelectItem>
                    <SelectItem value="IN">Indiana</SelectItem>
                    <SelectItem value="KY">Kentucky</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedMarketType} onValueChange={setSelectedMarketType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Market Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Markets</SelectItem>
                    <SelectItem value="Individual">Individual</SelectItem>
                    <SelectItem value="Small Group">Small Group</SelectItem>
                    <SelectItem value="Large Group">Large Group</SelectItem>
                    <SelectItem value="Medicare">Medicare</SelectItem>
                    <SelectItem value="Medicaid">Medicaid</SelectItem>
                  </SelectContent>
                </Select>
                <Button onClick={handleSearch} className="bg-green-600 hover:bg-green-700">
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
              Payer Results ({filteredPayers.length})
            </h2>
            <p className="text-gray-600">
              Healthcare insurers and plans with transparency ratings and coverage details
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {filteredPayers.map((payer) => (
              <Card key={payer.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{payer.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>NAIC: {payer.naic}</span>
                            <span>•</span>
                            <span className="flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              {payer.state}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-gray-600">Plans</div>
                          <div className="font-semibold text-gray-900">{payer.planCount.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Market Types</div>
                          <div className="font-semibold text-gray-900">{payer.marketTypes.length}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Transparency</div>
                          <Badge className={`${getScoreColor(payer.transparencyScore)} border`}>
                            {payer.transparencyScore}
                          </Badge>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Updated</div>
                          <div className="font-medium text-gray-900">{payer.updated}</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {payer.marketTypes.map((type) => (
                          <Badge key={type} variant="outline" className="text-xs">
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={() => onNavigateToPayerDetails(payer.id)}
                      variant="outline"
                      className="hover:bg-green-50 hover:border-green-300 hover:text-green-700"
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
                Load More Payers
              </Button>
            </div>
          )}

          {/* No Results */}
          {filteredPayers.length === 0 && (
            <div className="text-center py-12">
              <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No payers found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </div>
      </section>

      <FooterExpanded onNavigateToDisclosures={onNavigateToDisclosures} />
    </div>
  );
}
