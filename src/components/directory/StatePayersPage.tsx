import React from 'react';
import { Navigation } from '../Navigation';
import { FooterExpanded } from '../homepage/FooterExpanded';
import { DirectoryHero } from './DirectoryHero';
import { ListingsTable } from './ListingsTable';
import { RelatedLinks } from './RelatedLinks';
import { Breadcrumbs } from './Breadcrumbs';
import { StateData } from '../../lib/data/locations';

interface StatePayersPageProps {
  stateData: StateData;
}

export function StatePayersPage({ stateData }: StatePayersPageProps) {
  const currentMonth = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  // Sample payer data
  const payers = [
    {
      id: '1',
      name: 'Blue Cross Blue Shield',
      href: `/${stateData.slug}/payers/blue-cross-blue-shield`,
      location: 'Statewide',
      transparencyScore: 'B+',
      networkSize: 'Large',
      specialties: ['HMO', 'PPO', 'EPO'],
      type: 'payer' as const,
      quickLinks: [
        { label: 'View Plans', href: `/${stateData.slug}/payers/blue-cross-blue-shield/plans` },
        { label: 'Compare Coverage', href: '#' }
      ]
    },
    {
      id: '2',
      name: 'Aetna',
      href: `/${stateData.slug}/payers/aetna`,
      location: 'Major Cities',
      transparencyScore: 'B',
      networkSize: 'Large',
      specialties: ['HMO', 'PPO'],
      type: 'payer' as const,
      quickLinks: [
        { label: 'View Plans', href: `/${stateData.slug}/payers/aetna/plans` },
        { label: 'Compare Coverage', href: '#' }
      ]
    }
  ];

  const relatedLinks = [
    {
      label: `Browse providers in ${stateData.name}`,
      href: `/${stateData.slug}/providers`,
      description: 'Hospital and clinic networks'
    },
    {
      label: `Browse procedures in ${stateData.name}`,
      href: `/${stateData.slug}/procedures`,
      description: 'Compare procedure costs'
    },
    {
      label: 'Compare other states',
      href: '/directories?view=states',
      description: 'National payer comparison'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <Breadcrumbs items={[
        { label: stateData.name, href: `/${stateData.slug}` },
        { label: 'Payers' }
      ]} />

      <DirectoryHero
        title={`Payers in ${stateData.name}`}
        subtitle={`View insurers active in ${stateData.name}, their plans, and network strength.`}
        updatedDate={currentMonth}
        showSearch={false}
      />

      <ListingsTable
        title={`${stateData.payersCount.toLocaleString()} Payers Found`}
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
