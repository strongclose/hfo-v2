import React from 'react';
import { Navigation } from '../Navigation';
import { FooterExpanded } from '../homepage/FooterExpanded';
import { DirectoryHero } from './DirectoryHero';
import { ListingsTable } from './ListingsTable';
import { RelatedLinks } from './RelatedLinks';
import { Breadcrumbs } from './Breadcrumbs';
import { StateData } from '../../lib/data/locations';

interface StateProvidersPageProps {
  stateData: StateData;
}

export function StateProvidersPage({ stateData }: StateProvidersPageProps) {
  const currentMonth = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  // Sample provider data - in production this would come from API
  const providers = [
    {
      id: '1',
      name: 'Stanford Medical Center',
      href: '/providers/stanford-medical-center',
      location: stateData.cities[0]?.name || stateData.name,
      transparencyScore: 'A-',
      medianPrice: '$2,340',
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
      name: 'UCSF Medical Center',
      href: '/providers/ucsf-medical-center',
      location: stateData.cities[1]?.name || stateData.name,
      transparencyScore: 'B+',
      medianPrice: '$2,890',
      networkSize: 'Large',
      specialties: ['Oncology', 'Neurology', 'Pediatrics'],
      type: 'provider' as const,
      quickLinks: [
        { label: 'See accepted payers', href: '#' },
        { label: 'Compare prices', href: '#' }
      ]
    },
    {
      id: '3',
      name: 'Kaiser Permanente Medical Centers',
      href: '/providers/kaiser-permanente-medical-centers',
      location: stateData.cities[2]?.name || stateData.name,
      transparencyScore: 'B',
      medianPrice: '$1,980',
      networkSize: 'Medium',
      specialties: ['Internal Medicine', 'Surgery', 'Radiology'],
      type: 'provider' as const,
      quickLinks: [
        { label: 'See accepted payers', href: '#' },
        { label: 'Compare prices', href: '#' }
      ]
    }
  ];

  const relatedLinks = [
    {
      label: 'See providers by city',
      href: `/${stateData.slug}`,
      description: 'Browse by specific cities'
    },
    {
      label: `Browse payers in ${stateData.name}`,
      href: `/${stateData.slug}/payers`,
      description: 'Insurance options and networks'
    },
    {
      label: `Browse procedures in ${stateData.name}`,
      href: `/${stateData.slug}/procedures`,
      description: 'Compare procedure costs'
    },
    {
      label: 'Compare other states',
      href: '/directories?view=states',
      description: 'National provider comparison'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <Breadcrumbs items={[
        { label: stateData.name, href: `/${stateData.slug}` },
        { label: 'Providers' }
      ]} />

      <DirectoryHero
        title={`Providers in ${stateData.name}`}
        subtitle={`Find hospitals and clinics across ${stateData.name}. Compare transparency scores and review price ranges for common services.`}
        updatedDate={currentMonth}
        showSearch={false}
      />

      <ListingsTable
        title={`${stateData.providersCount.toLocaleString()} Providers Found`}
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
