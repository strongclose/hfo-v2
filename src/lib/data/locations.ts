export interface StateData {
  name: string;
  code: string;
  slug: string;
  cities: CityData[];
  providersCount: number;
  payersCount: number;
  proceduresCount: number;
  medianPrice: string;
  transparencyScore: string;
  priceRanges: {
    mri: { low: string; high: string; median: string; };
    colonoscopy: { low: string; high: string; median: string; };
    carpalTunnel: { low: string; high: string; median: string; };
    ekg: { low: string; high: string; median: string; };
    kneeReplacement: { low: string; high: string; median: string; };
  };
  marketMetrics: {
    avgProviderTransparency: number;
    avgPayerTransparency: number;
    marketConcentration: string;
    priceVariation: string;
    costTrend: string;
  };
  topProviders: Array<{
    name: string;
    transparencyScore: string;
    medianPrice: string;
    specialties: string[];
  }>;
  topPayers: Array<{
    name: string;
    transparencyScore: string;
    memberCount: string;
    planTypes: string[];
  }>;
}

export interface CityData {
  name: string;
  slug: string;
  state: string;
  providersCount: number;
  payersCount: number;
  proceduresCount: number;
  medianPrice: string;
  transparencyScore: string;
  priceRanges: {
    mri: { low: string; high: string; median: string; };
    colonoscopy: { low: string; high: string; median: string; };
    carpalTunnel: { low: string; high: string; median: string; };
    ekg: { low: string; high: string; median: string; };
    kneeReplacement: { low: string; high: string; median: string; };
  };
  marketMetrics: {
    avgProviderTransparency: number;
    avgPayerTransparency: number;
    competitiveIndex: number;
    priceVariation: string;
    qualityRating: number;
  };
  nearbyCompetition: Array<{
    name: string;
    distance: string;
    medianPrice: string;
  }>;
}

// Sample state data - in production this would come from API/database
export const statesData: StateData[] = [
  {
    name: "California",
    code: "CA",
    slug: "california",
    providersCount: 3247,
    payersCount: 89,
    proceduresCount: 284,
    medianPrice: "$2,450",
    transparencyScore: "B+",
    priceRanges: {
      mri: { low: "$1,200", high: "$4,800", median: "$2,400" },
      colonoscopy: { low: "$650", high: "$2,200", median: "$1,150" },
      carpalTunnel: { low: "$3,200", high: "$8,500", median: "$5,200" },
      ekg: { low: "$85", high: "$280", median: "$145" },
      kneeReplacement: { low: "$18,500", high: "$45,000", median: "$28,500" }
    },
    marketMetrics: {
      avgProviderTransparency: 84,
      avgPayerTransparency: 78,
      marketConcentration: "Moderately Concentrated",
      priceVariation: "High",
      costTrend: "Increasing 3.2% annually"
    },
    topProviders: [
      { name: "Stanford Medical Center", transparencyScore: "A+", medianPrice: "$2,280", specialties: ["Cardiology", "Oncology", "Neurology"] },
      { name: "UCSF Medical Center", transparencyScore: "A", medianPrice: "$2,450", specialties: ["Cancer Care", "Heart & Vascular", "Neurosciences"] },
      { name: "Kaiser Permanente", transparencyScore: "B+", medianPrice: "$2,120", specialties: ["Primary Care", "Emergency Medicine", "Surgery"] }
    ],
    topPayers: [
      { name: "Kaiser Permanente", transparencyScore: "A+", memberCount: "12.4M", planTypes: ["HMO", "Medicare Advantage"] },
      { name: "Anthem Blue Cross", transparencyScore: "A", memberCount: "4.2M", planTypes: ["HMO", "PPO", "EPO"] },
      { name: "Aetna Health Plans", transparencyScore: "B+", memberCount: "2.8M", planTypes: ["HMO", "PPO"] }
    ],
    cities: [
      {
        name: "Los Angeles",
        slug: "los-angeles",
        state: "CA",
        providersCount: 524,
        payersCount: 45,
        proceduresCount: 198,
        medianPrice: "$2,890",
        transparencyScore: "A-",
        priceRanges: {
          mri: { low: "$1,400", high: "$5,200", median: "$2,650" },
          colonoscopy: { low: "$750", high: "$2,500", median: "$1,280" },
          carpalTunnel: { low: "$3,800", high: "$9,200", median: "$5,800" },
          ekg: { low: "$95", high: "$320", median: "$165" },
          kneeReplacement: { low: "$22,000", high: "$48,000", median: "$32,000" }
        },
        marketMetrics: {
          avgProviderTransparency: 87,
          avgPayerTransparency: 82,
          competitiveIndex: 94,
          priceVariation: "Very High",
          qualityRating: 4.3
        },
        nearbyCompetition: [
          { name: "Orange County", distance: "45 miles", medianPrice: "$2,680" },
          { name: "Riverside", distance: "65 miles", medianPrice: "$2,340" },
          { name: "Ventura", distance: "55 miles", medianPrice: "$2,450" }
        ]
      },
      {
        name: "San Diego",
        slug: "san-diego",
        state: "CA",
        providersCount: 287,
        payersCount: 34,
        proceduresCount: 156,
        medianPrice: "$2,340",
        transparencyScore: "B+",
        priceRanges: {
          mri: { low: "$1,100", high: "$4,200", median: "$2,200" },
          colonoscopy: { low: "$620", high: "$1,950", median: "$1,080" },
          carpalTunnel: { low: "$2,900", high: "$7,800", median: "$4,800" },
          ekg: { low: "$80", high: "$250", median: "$135" },
          kneeReplacement: { low: "$17,500", high: "$42,000", median: "$26,500" }
        },
        marketMetrics: {
          avgProviderTransparency: 82,
          avgPayerTransparency: 79,
          competitiveIndex: 89,
          priceVariation: "Moderate",
          qualityRating: 4.1
        },
        nearbyCompetition: [
          { name: "Tijuana", distance: "20 miles", medianPrice: "$580" },
          { name: "Imperial County", distance: "95 miles", medianPrice: "$1,890" },
          { name: "Riverside County", distance: "75 miles", medianPrice: "$2,120" }
        ]
      },
      {
        name: "San Francisco",
        slug: "san-francisco",
        state: "CA",
        providersCount: 189,
        payersCount: 28,
        proceduresCount: 142,
        medianPrice: "$3,120",
        transparencyScore: "A",
        priceRanges: {
          mri: { low: "$1,600", high: "$5,800", median: "$2,950" },
          colonoscopy: { low: "$850", high: "$2,800", median: "$1,450" },
          carpalTunnel: { low: "$4,200", high: "$10,500", median: "$6,800" },
          ekg: { low: "$110", high: "$380", median: "$195" },
          kneeReplacement: { low: "$25,000", high: "$52,000", median: "$35,500" }
        },
        marketMetrics: {
          avgProviderTransparency: 91,
          avgPayerTransparency: 85,
          competitiveIndex: 96,
          priceVariation: "Very High",
          qualityRating: 4.6
        },
        nearbyCompetition: [
          { name: "Oakland", distance: "12 miles", medianPrice: "$2,650" },
          { name: "San Jose", distance: "45 miles", medianPrice: "$2,890" },
          { name: "Sacramento", distance: "85 miles", medianPrice: "$2,180" }
        ]
      }
    ]
  },
  {
    name: "Texas",
    code: "TX", 
    slug: "texas",
    providersCount: 2891,
    payersCount: 76,
    proceduresCount: 267,
    medianPrice: "$1,890",
    transparencyScore: "B",
    cities: [
      {
        name: "Houston",
        slug: "houston",
        state: "TX",
        providersCount: 445,
        payersCount: 38,
        proceduresCount: 189,
        medianPrice: "$1,980",
        transparencyScore: "B+"
      },
      {
        name: "Dallas",
        slug: "dallas",
        state: "TX",
        providersCount: 398,
        payersCount: 35,
        proceduresCount: 176,
        medianPrice: "$2,120",
        transparencyScore: "B"
      },
      {
        name: "Austin",
        slug: "austin",
        state: "TX",
        providersCount: 234,
        payersCount: 29,
        proceduresCount: 145,
        medianPrice: "$2,010",
        transparencyScore: "A-"
      }
    ]
  },
  {
    name: "New York", 
    code: "NY",
    slug: "new-york",
    providersCount: 2567,
    payersCount: 67,
    proceduresCount: 245,
    medianPrice: "$2,780",
    transparencyScore: "B+",
    cities: [
      {
        name: "New York City",
        slug: "new-york-city",
        state: "NY",
        providersCount: 678,
        payersCount: 42,
        proceduresCount: 198,
        medianPrice: "$3,450",
        transparencyScore: "A-"
      },
      {
        name: "Buffalo",
        slug: "buffalo", 
        state: "NY",
        providersCount: 156,
        payersCount: 23,
        proceduresCount: 98,
        medianPrice: "$2,120",
        transparencyScore: "B"
      },
      {
        name: "Albany",
        slug: "albany",
        state: "NY",
        providersCount: 89,
        payersCount: 18,
        proceduresCount: 76,
        medianPrice: "$2,340",
        transparencyScore: "B+"
      }
    ]
  }
];

export const getStateBySlug = (slug: string): StateData | undefined => {
  return statesData.find(state => state.slug === slug);
};

export const getCityBySlug = (stateSlug: string, citySlug: string): CityData | undefined => {
  const state = getStateBySlug(stateSlug);
  return state?.cities.find(city => city.slug === citySlug);
};

export const getAllCities = (): (CityData & { stateSlug: string })[] => {
  return statesData.flatMap(state => 
    state.cities.map(city => ({
      ...city,
      stateSlug: state.slug
    }))
  );
};
