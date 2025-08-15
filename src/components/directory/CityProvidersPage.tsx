import React from 'react';
import { Navigation } from '../Navigation';
import { FooterExpanded } from '../homepage/FooterExpanded';
import { DirectoryHero } from './DirectoryHero';
import { ListingsTable } from './ListingsTable';
import { RelatedLinks } from './RelatedLinks';
import { Breadcrumbs } from './Breadcrumbs';
import { StateData, CityData } from '../../lib/data/locations';

interface CityProvidersPageProps {
  stateData: StateData;
  cityData: CityData;
}

export function CityProvidersPage({ stateData, cityData }: CityProvidersPageProps) {
  const currentMonth = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  // Sample provider data for the city
  const providers = [
    {
      id: '1',
      name: `${cityData.name} General Hospital`,
      href: `/${stateData.slug}/${cityData.slug}/providers/${cityData.name.toLowerCase().replace(/\s+/g, '-')}-general-hospital`,
      location: cityData.name,
      transparencyScore: cityData.transparencyScore,
      medianPrice: cityData.medianPrice,
      networkSize: 'Large',
      specialties: ['Emergency Medicine', 'Surgery', 'Cardiology'],
      type: 'provider' as const,
      quickLinks: [
        { label: 'See accepted payers', href: '#' },
        { label: 'Compare prices', href: '#' }
      ]
    },
    {
      id: '2',
      name: `${cityData.name} Medical Center`,
      href: `/${stateData.slug}/${cityData.slug}/providers/${cityData.name.toLowerCase().replace(/\s+/g, '-')}-medical-center`,
      location: cityData.name,
      transparencyScore: 'B+',
      medianPrice: '$2,450',
      networkSize: 'Medium',
      specialties: ['Internal Medicine', 'Radiology', 'Laboratory'],
      type: 'provider' as const,
      quickLinks: [
        { label: 'See accepted payers', href: '#' },
        { label: 'Compare prices', href: '#' }
      ]
    }
  ];

  const relatedLinks = [
    {
      label: `Browse payers in ${cityData.name}`,
      href: `/${stateData.slug}/${cityData.slug}/payers`,
      description: 'Local insurance options'
    },
    {
      label: `Browse procedures in ${cityData.name}`,
      href: `/${stateData.slug}/${cityData.slug}/procedures`,
      description: 'Local procedure pricing'
    },
    {
      label: `All providers in ${stateData.name}`,
      href: `/${stateData.slug}/providers`,
      description: 'Statewide provider directory'
    },
    {
      label: `Back to ${cityData.name} hub`,
      href: `/${stateData.slug}/${cityData.slug}`,
      description: 'City overview and categories'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <Breadcrumbs items={[
        { label: stateData.name, href: `/${stateData.slug}` },
        { label: cityData.name, href: `/${stateData.slug}/${cityData.slug}` },
        { label: 'Providers' }
      ]} />

      <DirectoryHero
        title={`Providers in ${cityData.name}, ${stateData.code}`}
        subtitle={`Find hospitals and clinics in ${cityData.name}. Compare local transparency scores and pricing data.`}
        updatedDate={currentMonth}
        showSearch={false}
      />

      <ListingsTable
        title={`${cityData.providersCount.toLocaleString()} Providers Found`}
        items={providers}
        sortOptions={[
          'Best Transparency Score',
          'A to Z',
          'Lowest Median Price',
          'Largest Network'
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
