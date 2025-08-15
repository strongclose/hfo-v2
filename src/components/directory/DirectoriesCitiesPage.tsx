import React, { useState } from 'react';
import { Navigation } from '../Navigation';
import { FooterExpanded } from '../homepage/FooterExpanded';
import { DirectoryHero } from './DirectoryHero';
import { Breadcrumbs } from './Breadcrumbs';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { MapPin, Users, Building2, Stethoscope } from 'lucide-react';
import { getAllCities, statesData } from '../../lib/data/locations';

export function DirectoriesCitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [stateFilter, setStateFilter] = useState('');
  
  const allCities = getAllCities();
  
  const filteredCities = allCities.filter(city => {
    const matchesSearch = city.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = !stateFilter || city.stateSlug === stateFilter;
    return matchesSearch && matchesState;
  });

  // Group cities alphabetically
  const groupedCities = filteredCities.reduce((acc, city) => {
    const firstLetter = city.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(city);
    return acc;
  }, {} as Record<string, typeof allCities>);

  const alphabetLetters = Object.keys(groupedCities).sort();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <Breadcrumbs items={[
        { label: 'Cities' }
      ]} />

      <DirectoryHero
        title="Browse Healthcare by City"
        subtitle="Local market analysis and provider networks across major cities. Find healthcare providers, insurance options, and procedure pricing in your area."
        updatedDate={new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        showSearch={false}
      />

      {/* Search and Filter Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Search cities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            
            <select
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent md:w-48"
            >
              <option value="">All States</option>
              {statesData.map(state => (
                <option key={state.slug} value={state.slug}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          {/* Alphabet Jump Links */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {alphabetLetters.map(letter => (
              <a
                key={letter}
                href={`#${letter}`}
                className="px-3 py-1 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>

          {/* Cities List */}
          <div className="space-y-8">
            {alphabetLetters.map(letter => (
              <div key={letter} id={letter} className="scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  {letter}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupedCities[letter].map(city => {
                    const state = statesData.find(s => s.slug === city.stateSlug);
                    return (
                      <Card key={`${city.stateSlug}-${city.slug}`} className="border border-gray-200 hover:shadow-lg transition-all duration-200">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                                <MapPin className="w-4 h-4 text-purple-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                                  <a href={`/${city.stateSlug}/${city.slug}`}>{city.name}</a>
                                </h3>
                                <p className="text-sm text-gray-600">{state?.name}, {state?.code}</p>
                              </div>
                            </div>
                            <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                              {city.transparencyScore}
                            </Badge>
                          </div>

                          <div className="grid grid-cols-3 gap-3 text-xs text-gray-600 mb-3">
                            <div className="flex items-center gap-1">
                              <Building2 className="w-3 h-3" />
                              <span>{city.providersCount.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              <span>{city.payersCount.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Stethoscope className="w-3 h-3" />
                              <span>{city.proceduresCount.toLocaleString()}</span>
                            </div>
                          </div>

                          <div className="text-xs text-gray-500">
                            Median Price: <span className="font-medium text-gray-700">{city.medianPrice}</span>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {filteredCities.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No cities found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <FooterExpanded />
    </div>
  );
}
