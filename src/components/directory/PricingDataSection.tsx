import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { TrendingUp, TrendingDown, DollarSign, BarChart3, Activity } from 'lucide-react';

interface PricingDataSectionProps {
  title: string;
  priceRanges: {
    mri: { low: string; high: string; median: string; };
    colonoscopy: { low: string; high: string; median: string; };
    carpalTunnel: { low: string; high: string; median: string; };
    ekg: { low: string; high: string; median: string; };
    kneeReplacement: { low: string; high: string; median: string; };
  };
  marketMetrics: {
    avgProviderTransparency: number;
    avgPayerTransparency: number;
    priceVariation: string;
    [key: string]: any;
  };
  topProviders?: Array<{
    name: string;
    transparencyScore: string;
    medianPrice: string;
    specialties: string[];
  }>;
  topPayers?: Array<{
    name: string;
    transparencyScore: string;
    memberCount: string;
    planTypes: string[];
  }>;
}

export function PricingDataSection({ 
  title, 
  priceRanges, 
  marketMetrics, 
  topProviders,
  topPayers 
}: PricingDataSectionProps) {
  const procedures = [
    { name: 'MRI Scan', key: 'mri' as const, icon: <Activity className="w-5 h-5" />, category: 'Imaging' },
    { name: 'Colonoscopy', key: 'colonoscopy' as const, icon: <Activity className="w-5 h-5" />, category: 'Procedure' },
    { name: 'Carpal Tunnel Surgery', key: 'carpalTunnel' as const, icon: <Activity className="w-5 h-5" />, category: 'Surgery' },
    { name: 'EKG', key: 'ekg' as const, icon: <Activity className="w-5 h-5" />, category: 'Diagnostic' },
    { name: 'Knee Replacement', key: 'kneeReplacement' as const, icon: <Activity className="w-5 h-5" />, category: 'Surgery' }
  ];

  const getVariationColor = (variation: string) => {
    switch (variation.toLowerCase()) {
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      case 'moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'very high': return 'bg-red-100 text-red-800 border-red-200';
      case 'extremely high': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTransparencyColor = (score: number) => {
    if (score >= 85) return 'bg-green-100 text-green-800 border-green-200';
    if (score >= 75) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (score >= 65) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-red-100 text-red-800 border-red-200';
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive pricing intelligence from federally mandated transparency data
          </p>
        </div>

        {/* Market Overview Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="border border-emerald-200 bg-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="text-2xl font-bold text-emerald-600 mb-2">
                {marketMetrics.avgProviderTransparency}%
              </div>
              <div className="text-sm text-gray-600">Avg Provider Transparency</div>
            </CardContent>
          </Card>

          <Card className="border border-blue-200 bg-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {marketMetrics.avgPayerTransparency}%
              </div>
              <div className="text-sm text-gray-600">Avg Payer Transparency</div>
            </CardContent>
          </Card>

          <Card className="border border-purple-200 bg-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <Badge className={getVariationColor(marketMetrics.priceVariation)}>
                {marketMetrics.priceVariation}
              </Badge>
              <div className="text-sm text-gray-600 mt-2">Price Variation</div>
            </CardContent>
          </Card>

          <Card className="border border-orange-200 bg-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                {marketMetrics.costTrend?.includes('Increasing') ? (
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                ) : (
                  <TrendingDown className="w-6 h-6 text-orange-600" />
                )}
              </div>
              <div className="text-xs font-semibold text-orange-600">
                {marketMetrics.costTrend || 'Market Trend'}
              </div>
              <div className="text-sm text-gray-600 mt-1">Cost Trend</div>
            </CardContent>
          </Card>
        </div>

        {/* Procedure Price Ranges */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Procedure Price Ranges</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {procedures.map((procedure) => {
              const priceData = priceRanges[procedure.key];
              return (
                <Card key={procedure.key} className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        {procedure.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{procedure.name}</h4>
                        <Badge variant="secondary" className="text-xs">{procedure.category}</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Median Price:</span>
                        <span className="font-bold text-lg text-blue-600">{priceData.median}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Price Range:</span>
                        <span className="font-medium text-gray-900">{priceData.low} - {priceData.high}</span>
                      </div>
                      <div className="bg-gray-100 rounded-full h-2 mt-3">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{priceData.low}</span>
                        <span>{priceData.high}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Top Providers and Payers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {topProviders && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Providers by Transparency</h3>
              <div className="space-y-4">
                {topProviders.map((provider, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{provider.name}</h4>
                      <Badge className={getTransparencyColor(85)}>
                        {provider.transparencyScore}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Median Price: <span className="font-semibold text-gray-900">{provider.medianPrice}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {provider.specialties.slice(0, 3).map((specialty, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {topPayers && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Payers by Market Share</h3>
              <div className="space-y-4">
                {topPayers.map((payer, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{payer.name}</h4>
                      <Badge className={getTransparencyColor(80)}>
                        {payer.transparencyScore}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Members: <span className="font-semibold text-gray-900">{payer.memberCount}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {payer.planTypes.slice(0, 3).map((planType, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {planType}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
