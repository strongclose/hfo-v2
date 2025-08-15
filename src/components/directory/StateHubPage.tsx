import React from 'react';
import { Navigation } from '../Navigation';
import { FooterExpanded } from '../homepage/FooterExpanded';
import { DirectoryHero } from './DirectoryHero';
import { CategoryIndex } from './CategoryIndex';
import { GeographicIndex } from './GeographicIndex';
import { RelatedLinks } from './RelatedLinks';
import { Breadcrumbs } from './Breadcrumbs';
import { StateData } from '../../lib/data/locations';

interface StateHubPageProps {
  stateData: StateData;
}

export function StateHubPage({ stateData }: StateHubPageProps) {
  const currentMonth = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  const categories = [
    {
      name: 'Providers',
      description: `Browse hospitals and clinics in ${stateData.name} by city and compare transparency scores and prices.`,
      href: `/${stateData.slug}/providers`,
      count: stateData.providersCount,
      transparencyScore: stateData.transparencyScore,
      medianPrice: stateData.medianPrice
    },
    {
      name: 'Payers',
      description: `View insurers active in ${stateData.name}, their plans, and network strength.`,
      href: `/${stateData.slug}/payers`,
      count: stateData.payersCount,
      transparencyScore: stateData.transparencyScore
    },
    {
      name: 'Procedures',
      description: `See procedure prices and variation across ${stateData.name}.`,
      href: `/${stateData.slug}/procedures`,
      count: stateData.proceduresCount,
      medianPrice: stateData.medianPrice
    }
  ];

  const cities = stateData.cities.map(city => ({
    name: city.name,
    slug: city.slug,
    href: `/${stateData.slug}/${city.slug}`,
    providersCount: city.providersCount,
    payersCount: city.payersCount,
    proceduresCount: city.proceduresCount
  }));

  const relatedLinks = [
    {
      label: `${stateData.name} Provider Networks`,
      href: `/${stateData.slug}/providers`,
      description: 'Hospital and clinic transparency scores'
    },
    {
      label: `${stateData.name} Insurance Plans`,
      href: `/${stateData.slug}/payers`,
      description: 'Health plan options and coverage'
    },
    {
      label: `${stateData.name} Procedure Prices`,
      href: `/${stateData.slug}/procedures`,
      description: 'Compare costs across the state'
    },
    {
      label: 'Compare States',
      href: '/directories?view=states',
      description: 'See how other states compare'
    }
  ];

  const searchLocations = stateData.cities.map(city => city.name);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <Breadcrumbs items={[
        { label: stateData.name }
      ]} />

      <DirectoryHero
        title={`${stateData.name} Healthcare Prices and Networks`}
        subtitle={`Browse providers, payers, and procedures in ${stateData.name}. Updated ${currentMonth}.`}
        updatedDate={currentMonth}
        searchCategories={['Providers', 'Payers', 'Procedures']}
        searchLocations={searchLocations}
        onSearch={(category, location) => {
          const citySlug = stateData.cities.find(c => c.name === location)?.slug;
          if (citySlug && category) {
            const categoryPath = category.toLowerCase();
            window.location.href = `/${stateData.slug}/${citySlug}/${categoryPath}`;
          }
        }}
      />

      <CategoryIndex
        title={`Browse Healthcare in ${stateData.name}`}
        categories={categories}
      />

      <GeographicIndex
        title={`Cities in ${stateData.name}`}
        items={cities}
        type="cities"
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
