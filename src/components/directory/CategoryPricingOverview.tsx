import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { DollarSign, TrendingUp, BarChart3, Users } from 'lucide-react';

interface CategoryPricingOverviewProps {
  title: string;
  categoryType: 'providers' | 'payers' | 'procedures';
  medianPrice: string;
  transparencyScore: string;
  locationName: string;
  comparisonData?: {
    vsState?: string;
    vsNational?: string;
    trend?: string;
  };
}

export function CategoryPricingOverview({ 
  title, 
  categoryType, 
  medianPrice, 
  transparencyScore,
  locationName,
  comparisonData 
}: CategoryPricingOverviewProps) {
  const getIconForCategory = () => {
    switch (categoryType) {
      case 'providers':
        return <BarChart3 className="w-6 h-6 text-blue-600" />;
      case 'payers':
        return <Users className="w-6 h-6 text-green-600" />;
      case 'procedures':
        return <DollarSign className="w-6 h-6 text-purple-600" />;
    }
  };

  const getCategoryDescription = () => {
    switch (categoryType) {
      case 'providers':
        return `Healthcare providers in ${locationName} show varied pricing across procedures with transparency scores ranging from B to A+.`;
      case 'payers':
        return `Insurance payers in ${locationName} offer competitive pricing with comprehensive coverage options and network access.`;
      case 'procedures':
        return `Medical procedures in ${locationName} demonstrate significant price variation based on provider, location, and insurance coverage.`;
    }
  };

  const getTransparencyColor = (score: string) => {
    if (score.startsWith('A')) return 'bg-green-100 text-green-800 border-green-200';
    if (score.startsWith('B')) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (score.startsWith('C')) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                {getIconForCategory()}
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {getCategoryDescription()}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {medianPrice}
                </div>
                <div className="text-sm text-gray-600">Median Price</div>
              </CardContent>
            </Card>

            <Card className="border border-green-200">
              <CardContent className="p-6 text-center">
                <Badge className={getTransparencyColor(transparencyScore)}>
                  {transparencyScore}
                </Badge>
                <div className="text-sm text-gray-600 mt-2">Avg Transparency</div>
              </CardContent>
            </Card>

            {comparisonData?.vsState && (
              <Card className="border border-purple-200">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    {comparisonData.vsState}
                  </div>
                  <div className="text-sm text-gray-600">vs State Average</div>
                </CardContent>
              </Card>
            )}

            {comparisonData?.trend && (
              <Card className="border border-orange-200">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="w-6 h-6 text-orange-600 mr-2" />
                    <span className="text-lg font-semibold text-orange-600">
                      {comparisonData.trend}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">Price Trend</div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              About {locationName} Healthcare Pricing
            </h3>
            <p className="text-gray-700 leading-relaxed">
              All pricing data is derived from federally mandated transparency disclosures and structured by HealthFees.org. 
              Prices shown represent median values across multiple {categoryType} and may vary based on specific circumstances, 
              insurance coverage, and individual provider policies. Contact providers directly for accurate, personalized pricing information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
