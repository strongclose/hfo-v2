import React from 'react';
import { Navigation } from '../Navigation';
import { FooterExpanded } from '../homepage/FooterExpanded';
import { DirectoryHero } from './DirectoryHero';
import { ListingsTable } from './ListingsTable';
import { RelatedLinks } from './RelatedLinks';
import { Breadcrumbs } from './Breadcrumbs';
import { StateData, CityData } from '../../lib/data/locations';

interface CityPayersPageProps {
  stateData: StateData;
  cityData: CityData;
}

export function CityPayersPage({ stateData, cityData }: CityPayersPageProps) {
  const currentMonth = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  // Sample payer data for the city
  const payers = [
    {
      id: '1',
      name: 'Blue Cross Blue Shield',
      href: `/${stateData.slug}/${cityData.slug}/payers/blue-cross-blue-shield`,
      location: cityData.name,
      transparencyScore: cityData.transparencyScore,
      networkSize: 'Large',
      specialties: ['HMO', 'PPO', 'EPO'],
      type: 'payer' as const,
      quickLinks: [
        { label: 'View Plans', href: '#' },
        { label: 'Compare Coverage', href: '#' }
      ]
    }
  ];

  const relatedLinks = [
    {
      label: `Browse providers in ${cityData.name}`,
      href: `/${stateData.slug}/${cityData.slug}/providers`,
      description: 'Local hospital networks'
    },
    {
      label: `Browse procedures in ${cityData.name}`,
      href: `/${stateData.slug}/${cityData.slug}/procedures`,
      description: 'Local procedure pricing'
    },
    {
      label: `All payers in ${stateData.name}`,
      href: `/${stateData.slug}/payers`,
      description: 'Statewide insurance options'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <Breadcrumbs items={[
        { label: stateData.name, href: `/${stateData.slug}` },
        { label: cityData.name, href: `/${stateData.slug}/${cityData.slug}` },
        { label: 'Payers' }
      ]} />

      <DirectoryHero
        title={`Payers in ${cityData.name}, ${stateData.code}`}
        subtitle={`Insurance options available in ${cityData.name} with network details and coverage information.`}
        updatedDate={currentMonth}
        showSearch={false}
      />

      <ListingsTable
        title={`${cityData.payersCount.toLocaleString()} Payers Found`}
        items={payers}
        sortOptions={[
          'Best Transparency Score',
          'A to Z',
          'Largest Network',
          'Most Plans'
        ]}
      />

      <RelatedLinks
        title="Related Directories"
        links={relatedLinks}
        showDirectoryLinks={true}
      />

      <FooterExpanded />
    </div>
  );
}
