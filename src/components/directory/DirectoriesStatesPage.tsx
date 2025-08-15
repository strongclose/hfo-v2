import React, { useState } from 'react';
import { Navigation } from '../Navigation';
import { FooterExpanded } from '../homepage/FooterExpanded';
import { DirectoryHero } from './DirectoryHero';
import { Breadcrumbs } from './Breadcrumbs';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { MapPin, Users, Building2, Stethoscope } from 'lucide-react';
import { statesData } from '../../lib/data/locations';

export function DirectoriesStatesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredStates = statesData.filter(state =>
    state.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    state.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group states alphabetically
  const groupedStates = filteredStates.reduce((acc, state) => {
    const firstLetter = state.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(state);
    return acc;
  }, {} as Record<string, typeof statesData>);

  const alphabetLetters = Object.keys(groupedStates).sort();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <Breadcrumbs items={[
        { label: 'States' }
      ]} />

      <DirectoryHero
        title="Browse Healthcare by State"
        subtitle="State-level provider and pricing insights across the United States. Compare transparency scores and healthcare costs by state."
        updatedDate={new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        showSearch={false}
      />

      {/* Search and Filter Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Search states..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
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

          {/* States List */}
          <div className="space-y-8">
            {alphabetLetters.map(letter => (
              <div key={letter} id={letter} className="scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  {letter}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupedStates[letter].map(state => (
                    <Card key={state.slug} className="border border-gray-200 hover:shadow-lg transition-all duration-200">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                              <MapPin className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                                <a href={`/${state.slug}`}>{state.name}</a>
                              </h3>
                              <p className="text-sm text-gray-600">{state.code}</p>
                            </div>
                          </div>
                          <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                            {state.transparencyScore}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-3 gap-3 text-xs text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Building2 className="w-3 h-3" />
                            <span>{state.providersCount.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>{state.payersCount.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Stethoscope className="w-3 h-3" />
                            <span>{state.proceduresCount.toLocaleString()}</span>
                          </div>
                        </div>

                        <div className="text-xs text-gray-500">
                          Median Price: <span className="font-medium text-gray-700">{state.medianPrice}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterExpanded />
    </div>
  );
}
