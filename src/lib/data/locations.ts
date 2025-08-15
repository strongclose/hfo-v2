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
    cities: [
      {
        name: "Los Angeles",
        slug: "los-angeles",
        state: "CA",
        providersCount: 524,
        payersCount: 45,
        proceduresCount: 198,
        medianPrice: "$2,890",
        transparencyScore: "A-"
      },
      {
        name: "San Diego",
        slug: "san-diego", 
        state: "CA",
        providersCount: 287,
        payersCount: 34,
        proceduresCount: 156,
        medianPrice: "$2,340",
        transparencyScore: "B+"
      },
      {
        name: "San Francisco",
        slug: "san-francisco",
        state: "CA", 
        providersCount: 189,
        payersCount: 28,
        proceduresCount: 142,
        medianPrice: "$3,120",
        transparencyScore: "A"
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
