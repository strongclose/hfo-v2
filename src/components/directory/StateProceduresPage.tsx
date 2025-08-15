import React from 'react';
import { Navigation } from '../Navigation';
import { FooterExpanded } from '../homepage/FooterExpanded';
import { DirectoryHero } from './DirectoryHero';
import { ListingsTable } from './ListingsTable';
import { RelatedLinks } from './RelatedLinks';
import { Breadcrumbs } from './Breadcrumbs';
import { StateData } from '../../lib/data/locations';

interface StateProceduresPageProps {
  stateData: StateData;
}

export function StateProceduresPage({ stateData }: StateProceduresPageProps) {
  const currentMonth = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  // Sample procedure data
  const procedures = [
    {
      id: '1',
      name: 'MRI Scan',
      href: `/${stateData.slug}/procedures/mri-scan`,
      location: 'Statewide',
      medianPrice: '$1,250',
      specialties: ['Radiology', 'Imaging'],
      type: 'procedure' as const,
      quickLinks: [
        { label: 'Compare Providers', href: '#' },
        { label: 'Price Range', href: '#' }
      ]
    },
    {
      id: '2',
      name: 'Colonoscopy',
      href: `/${stateData.slug}/procedures/colonoscopy`,
      location: 'Statewide',
      medianPrice: '$890',
      specialties: ['Gastroenterology', 'Preventive'],
      type: 'procedure' as const,
      quickLinks: [
        { label: 'Compare Providers', href: '#' },
        { label: 'Price Range', href: '#' }
      ]
    },
    {
      id: '3',
      name: 'Knee Replacement',
      href: `/${stateData.slug}/procedures/knee-replacement`,
      location: 'Statewide',
      medianPrice: '$23,500',
      specialties: ['Orthopedics', 'Surgery'],
      type: 'procedure' as const,
      quickLinks: [
        { label: 'Compare Providers', href: '#' },
        { label: 'Price Range', href: '#' }
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
      label: `Browse payers in ${stateData.name}`,
      href: `/${stateData.slug}/payers`,
      description: 'Insurance coverage options'
    },
    {
      label: 'Compare other states',
      href: '/directories?view=states',
      description: 'National procedure pricing'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <Breadcrumbs items={[
        { label: stateData.name, href: `/${stateData.slug}` },
        { label: 'Procedures' }
      ]} />

      <DirectoryHero
        title={`Procedures in ${stateData.name}`}
        subtitle={`See procedure prices and variation across ${stateData.name}. Compare costs and find the best value.`}
        updatedDate={currentMonth}
        showSearch={false}
      />

      <ListingsTable
        title={`${stateData.proceduresCount.toLocaleString()} Procedures Found`}
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
