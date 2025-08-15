import React from 'react';
import { Navigation } from '../Navigation';
import { FooterExpanded } from '../homepage/FooterExpanded';
import { DirectoryHero } from './DirectoryHero';
import { CategoryIndex } from './CategoryIndex';
import { GeographicIndex } from './GeographicIndex';
import { RelatedLinks } from './RelatedLinks';
import { Breadcrumbs } from './Breadcrumbs';
import { PricingDataSection } from './PricingDataSection';
import { StateData, CityData } from '../../lib/data/locations';

interface CityHubPageProps {
  stateData: StateData;
  cityData: CityData;
}

export function CityHubPage({ stateData, cityData }: CityHubPageProps) {
  const currentMonth = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  const categories = [
    {
      name: 'Providers',
      description: `Find hospitals and clinics in ${cityData.name}. Compare transparency scores and pricing.`,
      href: `/${stateData.slug}/${cityData.slug}/providers`,
      count: cityData.providersCount,
      transparencyScore: cityData.transparencyScore,
      medianPrice: cityData.medianPrice
    },
    {
      name: 'Payers',
      description: `Insurance options available in ${cityData.name} with network details.`,
      href: `/${stateData.slug}/${cityData.slug}/payers`,
      count: cityData.payersCount,
      transparencyScore: cityData.transparencyScore
    },
    {
      name: 'Procedures',
      description: `Local procedure pricing in ${cityData.name} compared to state averages.`,
      href: `/${stateData.slug}/${cityData.slug}/procedures`,
      count: cityData.proceduresCount,
      medianPrice: cityData.medianPrice
    }
  ];

  // Nearby cities (excluding current city)
  const nearbyCities = stateData.cities
    .filter(city => city.slug !== cityData.slug)
    .slice(0, 6)
    .map(city => ({
      name: city.name,
      slug: city.slug,
      href: `/${stateData.slug}/${city.slug}`,
      providersCount: city.providersCount,
      payersCount: city.payersCount,
      proceduresCount: city.proceduresCount
    }));

  const relatedLinks = [
    {
      label: `${cityData.name} Provider Directory`,
      href: `/${stateData.slug}/${cityData.slug}/providers`,
      description: 'Local hospitals and clinics'
    },
    {
      label: `${cityData.name} Insurance Plans`,
      href: `/${stateData.slug}/${cityData.slug}/payers`,
      description: 'Available health insurance'
    },
    {
      label: `${cityData.name} Procedure Prices`,
      href: `/${stateData.slug}/${cityData.slug}/procedures`,
      description: 'Local healthcare costs'
    },
    {
      label: `All ${stateData.name} Cities`,
      href: `/${stateData.slug}`,
      description: 'Browse other cities in the state'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <Breadcrumbs items={[
        { label: stateData.name, href: `/${stateData.slug}` },
        { label: cityData.name }
      ]} />

      <DirectoryHero
        title={`${cityData.name}, ${stateData.code} Healthcare Directory`}
        subtitle={`Browse providers, payers, and procedures in ${cityData.name}. Local healthcare pricing and transparency data. Updated ${currentMonth}.`}
        updatedDate={currentMonth}
        showSearch={false}
      />

      <CategoryIndex
        title={`Healthcare in ${cityData.name}`}
        categories={categories}
      />

      {nearbyCities.length > 0 && (
        <GeographicIndex
          title={`Nearby Cities in ${stateData.name}`}
          items={nearbyCities}
          type="cities"
        />
      )}

      <RelatedLinks
        title="Related Directories"
        links={relatedLinks}
        showDirectoryLinks={true}
      />

      <FooterExpanded />
    </div>
  );
}
