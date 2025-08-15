import React from 'react';
import { Card, CardContent } from '../ui/card';
import { ArrowRight, MapPin, Building2 } from 'lucide-react';

interface RelatedLink {
  label: string;
  href: string;
  description?: string;
}

interface RelatedLinksProps {
  title: string;
  links: RelatedLink[];
  showDirectoryLinks?: boolean;
}

export function RelatedLinks({ 
  title, 
  links, 
  showDirectoryLinks = true 
}: RelatedLinksProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <Card 
              key={index}
              className="border border-gray-200 hover:shadow-lg transition-all duration-200 hover:scale-[1.01] bg-white"
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                      <a href={link.href}>{link.label}</a>
                    </h3>
                    {link.description && (
                      <p className="text-sm text-gray-600 mt-1">{link.description}</p>
                    )}
                  </div>
                  <a 
                    href={link.href}
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {showDirectoryLinks && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Browse All Directories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border border-gray-200 hover:shadow-lg transition-all duration-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Browse by State</h4>
                      <p className="text-gray-600 text-sm">State-level provider and pricing insights</p>
                    </div>
                    <a 
                      href="/directories?view=states"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-lg transition-all duration-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Browse by City</h4>
                      <p className="text-gray-600 text-sm">Local market analysis and provider networks</p>
                    </div>
                    <a 
                      href="/directories?view=cities"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
