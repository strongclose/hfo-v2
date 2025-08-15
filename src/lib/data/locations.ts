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
    priceRanges: {
      mri: { low: "$950", high: "$3,800", median: "$1,850" },
      colonoscopy: { low: "$520", high: "$1,750", median: "$980" },
      carpalTunnel: { low: "$2,400", high: "$6,800", median: "$4,200" },
      ekg: { low: "$65", high: "$210", median: "$115" },
      kneeReplacement: { low: "$15,500", high: "$38,000", median: "$23,500" }
    },
    marketMetrics: {
      avgProviderTransparency: 76,
      avgPayerTransparency: 73,
      marketConcentration: "Highly Concentrated",
      priceVariation: "Moderate",
      costTrend: "Increasing 2.8% annually"
    },
    topProviders: [
      { name: "Houston Methodist", transparencyScore: "A-", medianPrice: "$1,950", specialties: ["Heart & Vascular", "Cancer", "Neurology"] },
      { name: "Baylor Scott & White", transparencyScore: "B+", medianPrice: "$1,780", specialties: ["Surgery", "Emergency Medicine", "Pediatrics"] },
      { name: "Texas Children's Hospital", transparencyScore: "A", medianPrice: "$2,150", specialties: ["Pediatrics", "Neonatal", "Surgery"] }
    ],
    topPayers: [
      { name: "UnitedHealthcare", transparencyScore: "B", memberCount: "3.2M", planTypes: ["HMO", "PPO", "EPO"] },
      { name: "Anthem Blue Cross", transparencyScore: "B+", memberCount: "2.1M", planTypes: ["HMO", "PPO"] },
      { name: "Aetna Health Plans", transparencyScore: "B", memberCount: "1.8M", planTypes: ["HMO", "PPO"] }
    ],
    cities: [
      {
        name: "Houston",
        slug: "houston",
        state: "TX",
        providersCount: 445,
        payersCount: 38,
        proceduresCount: 189,
        medianPrice: "$1,980",
        transparencyScore: "B+",
        priceRanges: {
          mri: { low: "$1,050", high: "$4,200", median: "$2,050" },
          colonoscopy: { low: "$580", high: "$1,950", median: "$1,120" },
          carpalTunnel: { low: "$2,800", high: "$7,500", median: "$4,800" },
          ekg: { low: "$75", high: "$240", median: "$135" },
          kneeReplacement: { low: "$17,000", high: "$42,000", median: "$26,500" }
        },
        marketMetrics: {
          avgProviderTransparency: 79,
          avgPayerTransparency: 76,
          competitiveIndex: 91,
          priceVariation: "High",
          qualityRating: 4.2
        },
        nearbyCompetition: [
          { name: "Galveston", distance: "50 miles", medianPrice: "$1,650" },
          { name: "The Woodlands", distance: "30 miles", medianPrice: "$2,280" },
          { name: "Sugar Land", distance: "25 miles", medianPrice: "$2,150" }
        ]
      },
      {
        name: "Dallas",
        slug: "dallas",
        state: "TX",
        providersCount: 398,
        payersCount: 35,
        proceduresCount: 176,
        medianPrice: "$2,120",
        transparencyScore: "B",
        priceRanges: {
          mri: { low: "$1,100", high: "$4,400", median: "$2,250" },
          colonoscopy: { low: "$620", high: "$2,100", median: "$1,180" },
          carpalTunnel: { low: "$3,000", high: "$7,800", median: "$5,200" },
          ekg: { low: "$80", high: "$260", median: "$145" },
          kneeReplacement: { low: "$18,500", high: "$44,000", median: "$28,000" }
        },
        marketMetrics: {
          avgProviderTransparency: 75,
          avgPayerTransparency: 72,
          competitiveIndex: 87,
          priceVariation: "High",
          qualityRating: 4.0
        },
        nearbyCompetition: [
          { name: "Fort Worth", distance: "35 miles", medianPrice: "$1,890" },
          { name: "Plano", distance: "25 miles", medianPrice: "$2,450" },
          { name: "Irving", distance: "15 miles", medianPrice: "$2,050" }
        ]
      },
      {
        name: "Austin",
        slug: "austin",
        state: "TX",
        providersCount: 234,
        payersCount: 29,
        proceduresCount: 145,
        medianPrice: "$2,010",
        transparencyScore: "A-",
        priceRanges: {
          mri: { low: "$1,000", high: "$4,000", median: "$2,100" },
          colonoscopy: { low: "$550", high: "$1,850", median: "$1,050" },
          carpalTunnel: { low: "$2,600", high: "$7,200", median: "$4,600" },
          ekg: { low: "$70", high: "$230", median: "$125" },
          kneeReplacement: { low: "$16,500", high: "$40,000", median: "$25,000" }
        },
        marketMetrics: {
          avgProviderTransparency: 85,
          avgPayerTransparency: 81,
          competitiveIndex: 93,
          priceVariation: "Moderate",
          qualityRating: 4.4
        },
        nearbyCompetition: [
          { name: "San Antonio", distance: "80 miles", medianPrice: "$1,750" },
          { name: "Round Rock", distance: "20 miles", medianPrice: "$2,180" },
          { name: "Cedar Park", distance: "25 miles", medianPrice: "$2,320" }
        ]
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
    priceRanges: {
      mri: { low: "$1,350", high: "$5,200", median: "$2,650" },
      colonoscopy: { low: "$680", high: "$2,400", median: "$1,280" },
      carpalTunnel: { low: "$3,500", high: "$9,200", median: "$5,800" },
      ekg: { low: "$90", high: "$310", median: "$165" },
      kneeReplacement: { low: "$20,000", high: "$48,000", median: "$32,000" }
    },
    marketMetrics: {
      avgProviderTransparency: 82,
      avgPayerTransparency: 79,
      marketConcentration: "Highly Concentrated",
      priceVariation: "Very High",
      costTrend: "Increasing 4.1% annually"
    },
    topProviders: [
      { name: "NewYork-Presbyterian", transparencyScore: "A", medianPrice: "$2,950", specialties: ["Heart Surgery", "Cancer", "Neurology"] },
      { name: "Mount Sinai Health System", transparencyScore: "A-", medianPrice: "$2,680", specialties: ["Oncology", "Cardiology", "Emergency"] },
      { name: "NYU Langone Health", transparencyScore: "A", medianPrice: "$2,850", specialties: ["Surgery", "Transplant", "Pediatrics"] }
    ],
    topPayers: [
      { name: "Empire BlueCross BlueShield", transparencyScore: "A-", memberCount: "3.1M", planTypes: ["HMO", "PPO", "EPO"] },
      { name: "UnitedHealthcare", transparencyScore: "B+", memberCount: "2.8M", planTypes: ["HMO", "PPO"] },
      { name: "Aetna Health Plans", transparencyScore: "B+", memberCount: "1.9M", planTypes: ["HMO", "PPO"] }
    ],
    cities: [
      {
        name: "New York City",
        slug: "new-york-city",
        state: "NY",
        providersCount: 678,
        payersCount: 42,
        proceduresCount: 198,
        medianPrice: "$3,450",
        transparencyScore: "A-",
        priceRanges: {
          mri: { low: "$1,600", high: "$6,200", median: "$3,200" },
          colonoscopy: { low: "$850", high: "$2,950", median: "$1,580" },
          carpalTunnel: { low: "$4,200", high: "$11,500", median: "$7,200" },
          ekg: { low: "$110", high: "$380", median: "$205" },
          kneeReplacement: { low: "$25,000", high: "$58,000", median: "$38,500" }
        },
        marketMetrics: {
          avgProviderTransparency: 89,
          avgPayerTransparency: 84,
          competitiveIndex: 97,
          priceVariation: "Extremely High",
          qualityRating: 4.5
        },
        nearbyCompetition: [
          { name: "Nassau County", distance: "25 miles", medianPrice: "$2,950" },
          { name: "Westchester County", distance: "30 miles", medianPrice: "$3,180" },
          { name: "New Jersey", distance: "15 miles", medianPrice: "$2,680" }
        ]
      },
      {
        name: "Buffalo",
        slug: "buffalo",
        state: "NY",
        providersCount: 156,
        payersCount: 23,
        proceduresCount: 98,
        medianPrice: "$2,120",
        transparencyScore: "B",
        priceRanges: {
          mri: { low: "$980", high: "$3,800", median: "$1,950" },
          colonoscopy: { low: "$520", high: "$1,850", median: "$950" },
          carpalTunnel: { low: "$2,800", high: "$7,200", median: "$4,500" },
          ekg: { low: "$75", high: "$220", median: "$125" },
          kneeReplacement: { low: "$16,500", high: "$38,000", median: "$24,500" }
        },
        marketMetrics: {
          avgProviderTransparency: 74,
          avgPayerTransparency: 71,
          competitiveIndex: 82,
          priceVariation: "Moderate",
          qualityRating: 3.8
        },
        nearbyCompetition: [
          { name: "Rochester", distance: "75 miles", medianPrice: "$2,050" },
          { name: "Niagara Falls", distance: "25 miles", medianPrice: "$1,890" },
          { name: "Erie County", distance: "15 miles", medianPrice: "$2,180" }
        ]
      },
      {
        name: "Albany",
        slug: "albany",
        state: "NY",
        providersCount: 89,
        payersCount: 18,
        proceduresCount: 76,
        medianPrice: "$2,340",
        transparencyScore: "B+",
        priceRanges: {
          mri: { low: "$1,100", high: "$4,200", median: "$2,250" },
          colonoscopy: { low: "$580", high: "$2,050", median: "$1,120" },
          carpalTunnel: { low: "$3,000", high: "$7,800", median: "$5,100" },
          ekg: { low: "$80", high: "$250", median: "$140" },
          kneeReplacement: { low: "$18,000", high: "$42,000", median: "$27,500" }
        },
        marketMetrics: {
          avgProviderTransparency: 78,
          avgPayerTransparency: 75,
          competitiveIndex: 85,
          priceVariation: "Moderate",
          qualityRating: 4.0
        },
        nearbyCompetition: [
          { name: "Schenectady", distance: "20 miles", medianPrice: "$2,180" },
          { name: "Troy", distance: "15 miles", medianPrice: "$2,280" },
          { name: "Saratoga Springs", distance: "35 miles", medianPrice: "$2,450" }
        ]
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
