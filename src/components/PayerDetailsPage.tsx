import React, { useState } from "react";
import { Navigation } from "./Navigation";
import { FooterExpanded } from "./homepage/FooterExpanded";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  CreditCard,
  MapPin,
  Building2,
  Users,
  TrendingUp,
  BarChart3,
  FileText,
  Download,
  Calendar,
  Shield,
  CheckCircle2,
  Activity,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

interface PayerDetailsPageProps {
  payerId: string;
  onNavigateToPlans: (payerId: string) => void;
  onNavigateToDisclosures: () => void;
}

interface PayerDetails {
  id: string;
  name: string;
  naic: string;
  states: string[];
  transparencyScore: string;
  updated: string;
  plansCount: number;
  networksCount: number;
  statesCovered: number;
  logo?: string;
  website?: string;
  description?: string;
  marketTypes: string[];
  kpis: {
    totalMembers: string;
    revenue: string;
    marketShare: string;
    compliance: string;
  };
  trends: {
    period: string;
    priceChange: string;
    direction: 'up' | 'down' | 'stable';
  }[];
  files: {
    month: string;
    size: string;
    checksum: string;
    downloadUrl: string;
  }[];
}

export function PayerDetailsPage({
  payerId,
  onNavigateToPlans,
  onNavigateToDisclosures,
}: PayerDetailsPageProps) {
  const [activeTab, setActiveTab] = useState("overview");

  // Sample payer details - in real app this would come from API
  const payerDetails: PayerDetails = {
    id: payerId,
    name: payerId === 'aetna' ? 'Aetna Inc.' : 
          payerId === 'anthem' ? 'Anthem Inc.' :
          payerId === 'united' ? 'UnitedHealthcare Insurance Company' :
          'Health Insurer',
    naic: payerId === 'aetna' ? '60054' : 
          payerId === 'anthem' ? '61136' :
          payerId === 'united' ? '79413' :
          '12345',
    states: ['CA', 'NY', 'TX', 'FL', 'IL', 'PA', 'OH', 'GA', 'NC', 'MI'],
    transparencyScore: 'B+',
    updated: 'January 2025',
    plansCount: 847,
    networksCount: 156,
    statesCovered: 10,
    website: 'https://www.aetna.com',
    description: 'A leading diversified health care benefits company that serves an estimated 39 million people with information and resources to help them make better informed decisions about their health care.',
    marketTypes: ['Individual', 'Small Group', 'Large Group', 'Medicare'],
    kpis: {
      totalMembers: '39.2M',
      revenue: '$84.3B',
      marketShare: '12.4%',
      compliance: '94%',
    },
    trends: [
      { period: 'Q4 2024', priceChange: '+2.3%', direction: 'up' },
      { period: 'Q3 2024', priceChange: '+1.8%', direction: 'up' },
      { period: 'Q2 2024', priceChange: '-0.5%', direction: 'down' },
      { period: 'Q1 2024', priceChange: '+3.1%', direction: 'up' },
    ],
    files: [
      { month: 'January 2025', size: '2.4 GB', checksum: 'sha256:abc123...', downloadUrl: '#' },
      { month: 'December 2024', size: '2.3 GB', checksum: 'sha256:def456...', downloadUrl: '#' },
      { month: 'November 2024', size: '2.2 GB', checksum: 'sha256:ghi789...', downloadUrl: '#' },
    ],
  };

  const getScoreColor = (score: string) => {
    if (score.startsWith('A')) return 'bg-green-100 text-green-800 border-green-200';
    if (score.startsWith('B')) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (score.startsWith('C')) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-red-100 text-red-800 border-red-200';
  };

  const getTrendIcon = (direction: 'up' | 'down' | 'stable') => {
    if (direction === 'up') return <TrendingUp className="w-4 h-4 text-red-500" />;
    if (direction === 'down') return <TrendingUp className="w-4 h-4 text-green-500 transform rotate-180" />;
    return <Activity className="w-4 h-4 text-gray-500" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{payerDetails.name}</h1>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>NAIC: {payerDetails.naic}</span>
                    <span>•</span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {payerDetails.statesCovered} states
                    </span>
                    <span>•</span>
                    <span>Updated {payerDetails.updated}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge className={`${getScoreColor(payerDetails.transparencyScore)} border px-3 py-1`}>
                  Transparency: {payerDetails.transparencyScore}
                </Badge>
                {payerDetails.website && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={payerDetails.website} target="_blank" rel="noopener noreferrer">
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {payerDetails.description && (
              <p className="text-gray-700 leading-relaxed mb-6">{payerDetails.description}</p>
            )}

            {/* KPIs Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{payerDetails.plansCount}</div>
                <div className="text-sm text-gray-600">Plans</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{payerDetails.networksCount}</div>
                <div className="text-sm text-gray-600">Networks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{payerDetails.statesCovered}</div>
                <div className="text-sm text-gray-600">States Covered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{payerDetails.kpis.totalMembers}</div>
                <div className="text-sm text-gray-600">Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
              <TabsTrigger value="evidence">Evidence</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Key Performance Indicators
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Members</span>
                      <span className="font-semibold">{payerDetails.kpis.totalMembers}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Annual Revenue</span>
                      <span className="font-semibold">{payerDetails.kpis.revenue}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Market Share</span>
                      <span className="font-semibold">{payerDetails.kpis.marketShare}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Compliance Rate</span>
                      <span className="font-semibold text-green-600">{payerDetails.kpis.compliance}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Coverage Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {payerDetails.states.map((state) => (
                        <Badge key={state} variant="outline" className="text-xs">
                          {state}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-900 mb-2">Market Types</h4>
                      <div className="flex flex-wrap gap-2">
                        {payerDetails.marketTypes.map((type) => (
                          <Badge key={type} className="bg-green-100 text-green-800 border border-green-200">
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Plans and Networks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 mb-2">
                        This payer offers {payerDetails.plansCount} health plans across {payerDetails.networksCount} provider networks.
                      </p>
                      <Button onClick={() => onNavigateToPlans(payerDetails.id)} className="bg-green-600 hover:bg-green-700">
                        View All Plans
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Comparative Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Analytics charts comparing to state averages and peer payers</p>
                      <p className="text-sm text-gray-500">Chart visualization would be implemented here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trends" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Price Trends Over Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {payerDetails.trends.map((trend, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          {getTrendIcon(trend.direction)}
                          <span className="font-medium">{trend.period}</span>
                        </div>
                        <span className={`font-semibold ${
                          trend.direction === 'up' ? 'text-red-600' : 
                          trend.direction === 'down' ? 'text-green-600' : 
                          'text-gray-600'
                        }`}>
                          {trend.priceChange}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="evidence" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Machine-Readable Files
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {payerDetails.files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-gray-400" />
                          <div>
                            <div className="font-medium">{file.month}</div>
                            <div className="text-sm text-gray-600">{file.size} • {file.checksum.substring(0, 20)}...</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <a href={file.downloadUrl}>
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </a>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <FooterExpanded onNavigateToDisclosures={onNavigateToDisclosures} />
    </div>
  );
}
