import React from 'react';
import { Navigation } from '../Navigation';
import { FooterExpanded } from '../homepage/FooterExpanded';
import { DirectoryHero } from './DirectoryHero';
import { ListingsTable } from './ListingsTable';
import { RelatedLinks } from './RelatedLinks';
import { Breadcrumbs } from './Breadcrumbs';
import { StateData, CityData } from '../../lib/data/locations';

interface CityProceduresPageProps {
  stateData: StateData;
  cityData: CityData;
}

export function CityProceduresPage({ stateData, cityData }: CityProceduresPageProps) {
  const currentMonth = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  // Sample procedure data for the city
  const procedures = [
    {
      id: '1',
      name: 'MRI Scan',
      href: `/${stateData.slug}/${cityData.slug}/procedures/mri-scan`,
      location: cityData.name,
      medianPrice: cityData.medianPrice,
      specialties: ['Radiology', 'Imaging'],
      type: 'procedure' as const,
      quickLinks: [
        { label: 'Compare Providers', href: '#' },
        { label: 'Price Range', href: '#' }
      ]
    }
  ];

  const relatedLinks = [
    {
      label: `Browse providers in ${cityData.name}`,
      href: `/${stateData.slug}/${cityData.slug}/providers`,
      description: 'Local hospitals and clinics'
    },
    {
      label: `Browse payers in ${cityData.name}`,
      href: `/${stateData.slug}/${cityData.slug}/payers`,
      description: 'Local insurance options'
    },
    {
      label: `All procedures in ${stateData.name}`,
      href: `/${stateData.slug}/procedures`,
      description: 'Statewide procedure pricing'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <Breadcrumbs items={[
        { label: stateData.name, href: `/${stateData.slug}` },
        { label: cityData.name, href: `/${stateData.slug}/${cityData.slug}` },
        { label: 'Procedures' }
      ]} />

      <DirectoryHero
        title={`Procedures in ${cityData.name}, ${stateData.code}`}
        subtitle={`Local procedure pricing in ${cityData.name} compared to state averages. Find the best healthcare value.`}
        updatedDate={currentMonth}
        showSearch={false}
      />

      <ListingsTable
        title={`${cityData.proceduresCount.toLocaleString()} Procedures Found`}
        items={procedures}
        sortOptions={[
          'Lowest Median Price',
          'A to Z',
          'Most Popular',
          'Highest Savings Potential'
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
