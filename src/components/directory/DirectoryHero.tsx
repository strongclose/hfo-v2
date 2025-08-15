import React from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Search, Calendar } from 'lucide-react';

interface DirectoryHeroProps {
  title: string;
  subtitle: string;
  updatedDate: string;
  showSearch?: boolean;
  searchCategories?: string[];
  searchLocations?: string[];
  onSearch?: (category: string, location: string) => void;
}

export function DirectoryHero({
  title,
  subtitle, 
  updatedDate,
  showSearch = true,
  searchCategories = ["Providers", "Payers", "Procedures"],
  searchLocations = [],
  onSearch
}: DirectoryHeroProps) {
  const [selectedCategory, setSelectedCategory] = React.useState(searchCategories[0]);
  const [selectedLocation, setSelectedLocation] = React.useState(searchLocations[0] || "");

  const handleSearch = () => {
    if (onSearch && selectedCategory && selectedLocation) {
      onSearch(selectedCategory, selectedLocation);
    }
  };

  return (
    <section className="relative pt-20 pb-8 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.05),transparent_50%)] pointer-events-none"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Global Navigation Link */}
        <div className="flex justify-end mb-4">
          <a 
            href="/directories" 
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            All Directories
          </a>
        </div>

        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 tracking-tight">
            {title}
          </h1>
          
          <div className="flex justify-center mb-4">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
              <Calendar className="w-3 h-3 mr-1" />
              Updated {updatedDate}
            </Badge>
          </div>

          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            {subtitle}
          </p>

          {showSearch && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {searchCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  
                  {searchLocations.length > 0 && (
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Location</option>
                      {searchLocations.map((location) => (
                        <option key={location} value={location}>
                          {location}
                        </option>
                      ))}
                    </select>
                  )}
                  
                  <Button 
                    onClick={handleSearch}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Go
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
