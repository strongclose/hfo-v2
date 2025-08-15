import React from 'react';
import { Card, CardContent } from '../ui/card';
import { MapPin, ArrowRight } from 'lucide-react';

interface GeographicItem {
  name: string;
  slug: string;
  href: string;
  providersCount: number;
  payersCount: number;
  proceduresCount: number;
}

interface GeographicIndexProps {
  title: string;
  items: GeographicItem[];
  type: 'cities' | 'states';
  showCounts?: boolean;
}

export function GeographicIndex({ 
  title, 
  items, 
  type, 
  showCounts = true 
}: GeographicIndexProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <Card 
              key={index}
              className="border border-gray-200 hover:shadow-lg transition-all duration-200 hover:scale-[1.01] rounded-lg bg-white"
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                        <a href={item.href}>{item.name}</a>
                      </h3>
                      {showCounts && (
                        <div className="text-xs text-gray-500 mt-1">
                          {item.providersCount} providers • {item.payersCount} payers • {item.proceduresCount} procedures
                        </div>
                      )}
                    </div>
                  </div>
                  <a 
                    href={item.href}
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {items.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No {type} available at this time.</p>
          </div>
        )}
      </div>
    </section>
  );
}
