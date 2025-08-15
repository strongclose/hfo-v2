import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowRight, Hospital, CreditCard, Stethoscope } from 'lucide-react';

interface CategoryItem {
  name: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  count: number;
  medianPrice?: string;
  transparencyScore?: string;
}

interface CategoryIndexProps {
  title: string;
  categories: CategoryItem[];
}

export function CategoryIndex({ title, categories }: CategoryIndexProps) {
  const getIcon = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'providers':
        return <Hospital className="w-6 h-6 text-white" />;
      case 'payers':
        return <CreditCard className="w-6 h-6 text-white" />;
      case 'procedures':
        return <Stethoscope className="w-6 h-6 text-white" />;
      default:
        return <Hospital className="w-6 h-6 text-white" />;
    }
  };

  const getColor = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'providers':
        return 'bg-blue-600';
      case 'payers': 
        return 'bg-green-600';
      case 'procedures':
        return 'bg-purple-600';
      default:
        return 'bg-blue-600';
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-xl overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getColor(category.name)}`}>
                    {getIcon(category.name)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">
                      {category.count.toLocaleString()} available
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {category.description}
                </p>

                {(category.medianPrice || category.transparencyScore) && (
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    {category.medianPrice && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Median Price:</span>
                        <span className="font-semibold text-gray-900">{category.medianPrice}</span>
                      </div>
                    )}
                    {category.transparencyScore && (
                      <div className="flex justify-between items-center text-sm mt-1">
                        <span className="text-gray-600">Avg. Transparency:</span>
                        <span className="font-semibold text-gray-900">{category.transparencyScore}</span>
                      </div>
                    )}
                  </div>
                )}

                <Button
                  asChild
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <a href={category.href}>
                    Browse {category.name}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
