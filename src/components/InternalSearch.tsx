"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import {
  Search,
  ChevronDown,
  ChevronUp,
  Building2,
  Shield,
  MapPin,
  Phone,
  Globe,
  Star,
  Users,
  Calendar,
  Navigation,
} from "lucide-react";

interface Hospital {
  id: string;
  name: string;
  type: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  website: string;
  rating: number;
  totalBeds: number;
  specialties: string[];
  emergencyServices: boolean;
  acceptedInsurance: string[];
  averageCost: string;
  qualityScore: string;
  established: string;
  coordinates: { lat: number; lng: number };
  distanceFromSearch?: number; // Distance in miles from search location
}

interface Payer {
  id: string;
  name: string;
  type: string;
  marketShare: string;
  membersServed: string;
  statesOperating: string[];
  website: string;
  customerService: string;
  rating: number;
  planTypes: string[];
  networkSize: string;
  averagePremium: string;
  founded: string;
  headquarters: string;
}

// Mock zip code coordinates (in a real app, this would be from a geocoding service)
const zipCodeCoordinates: {
  [key: string]: { lat: number; lng: number; city: string; state: string };
} = {
  "02114": { lat: 42.3601, lng: -71.0589, city: "Boston", state: "MA" }, // MGH area
  "02115": { lat: 42.3398, lng: -71.1056, city: "Boston", state: "MA" }, // Longwood Medical Area
  "02118": { lat: 42.337, lng: -71.0743, city: "Boston", state: "MA" }, // South End
  "02138": { lat: 42.3736, lng: -71.1097, city: "Cambridge", state: "MA" },
  "02462": { lat: 42.337, lng: -71.2092, city: "Newton", state: "MA" },
  "02111": { lat: 42.3505, lng: -71.0621, city: "Boston", state: "MA" }, // Downtown Boston
  "02215": { lat: 42.3467, lng: -71.0972, city: "Boston", state: "MA" }, // Fenway area
  "10001": { lat: 40.7505, lng: -73.9934, city: "New York", state: "NY" },
  "90210": { lat: 34.0901, lng: -118.4065, city: "Beverly Hills", state: "CA" },
  "60601": { lat: 41.8781, lng: -87.6298, city: "Chicago", state: "IL" },
};

export function InternalSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState<"hospitals" | "payers">(
    "hospitals",
  );
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isZipCodeSearch, setIsZipCodeSearch] = useState(false);
  const [searchLocationInfo, setSearchLocationInfo] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Predefined hospital list
  const hospitalList = [
    "Massachusetts General Hospital",
    "Brigham and Women's Hospital",
    "Boston Medical Center",
    "Beth Israel Deaconess Medical Center",
    "Tufts Medical Center",
    "Boston Children's Hospital",
    "Dana-Farber Cancer Institute",
    "McLean Hospital",
    "Mount Auburn Hospital",
    "Newton-Wellesley Hospital",
    "Johns Hopkins Hospital",
    "Mayo Clinic",
    "Cleveland Clinic",
    "UCLA Medical Center",
    "NewYork-Presbyterian Hospital",
    "Mount Sinai Hospital",
    "Cedars-Sinai Medical Center",
    "Houston Methodist Hospital",
    "Northwestern Memorial Hospital",
    "UCSF Medical Center",
    "Stanford Health Care",
    "Emory University Hospital",
    "Vanderbilt University Medical Center",
    "Duke University Hospital",
    "University of Michigan Hospital",
    "Barnes-Jewish Hospital",
    "Children's Hospital of Philadelphia",
    "Texas Children's Hospital",
    "Cincinnati Children's Hospital",
    "Children's Hospital Los Angeles",
    "Seattle Children's Hospital",
    "Memorial Sloan Kettering Cancer Center",
    "MD Anderson Cancer Center",
    "Fox Chase Cancer Center",
    "City of Hope",
    "Kaiser Permanente Los Angeles Medical Center",
    "Kaiser Permanente San Francisco Medical Center",
    "Kaiser Permanente Oakland Medical Center",
    "HCA Healthcare",
    "Tenet Healthcare",
    "Community Health Systems",
    "Universal Health Services",
    "LifePoint Health",
  ];

  // Predefined payer list
  const payerList = [
    "Blue Cross Blue Shield of Massachusetts",
    "Harvard Pilgrim Health Care",
    "Tufts Health Plan",
    "UnitedHealthcare",
    "Anthem Blue Cross Blue Shield",
    "Aetna",
    "Cigna Healthcare",
    "Humana",
    "Kaiser Permanente",
    "Molina Healthcare",
    "Centene Corporation",
    "WellCare Health Plans",
    "Independence Blue Cross",
    "Highmark Blue Cross Blue Shield",
    "Florida Blue",
    "Blue Cross Blue Shield of North Carolina",
    "Blue Cross Blue Shield of Texas",
    "Blue Cross Blue Shield of Michigan",
    "Blue Cross Blue Shield of Illinois",
    "Blue Cross Blue Shield of California",
    "Premera Blue Cross",
    "Regence Blue Cross Blue Shield",
    "Health Care Service Corporation",
    "CareFirst BlueCross BlueShield",
    "MVP Health Care",
    "Capital BlueCross",
    "Excellus BlueCross BlueShield",
    "Blue Cross Blue Shield of Minnesota",
    "Blue Cross Blue Shield of Tennessee",
    "Blue Cross Blue Shield of Alabama",
    "Medicaid",
    "Medicare",
    "TRICARE",
    "Veterans Affairs",
    "Oscar Health",
    "Bright Health",
    "Clover Health",
    "Friday Health Plans",
    "Ambetter",
  ];

  // Expanded hospital data with coordinates
  const hospitals: Hospital[] = [
    {
      id: "1",
      name: "Massachusetts General Hospital",
      type: "Academic Medical Center",
      address: "55 Fruit St",
      city: "Boston",
      state: "MA",
      zip: "02114",
      phone: "(617) 726-2000",
      website: "massgeneral.org",
      rating: 4.8,
      totalBeds: 999,
      specialties: [
        "Cardiology",
        "Neurology",
        "Oncology",
        "Orthopedics",
        "Emergency Medicine",
      ],
      emergencyServices: true,
      acceptedInsurance: [
        "Blue Cross Blue Shield",
        "Aetna",
        "Cigna",
        "UnitedHealthcare",
        "Harvard Pilgrim",
      ],
      averageCost: "$18,500",
      qualityScore: "5-Star",
      established: "1811",
      coordinates: { lat: 42.3601, lng: -71.0589 },
    },
    {
      id: "2",
      name: "Brigham and Women's Hospital",
      type: "Teaching Hospital",
      address: "75 Francis St",
      city: "Boston",
      state: "MA",
      zip: "02115",
      phone: "(617) 732-5500",
      website: "brighamandwomens.org",
      rating: 4.7,
      totalBeds: 793,
      specialties: [
        "Women's Health",
        "Cardiovascular",
        "Cancer Care",
        "Neurosurgery",
      ],
      emergencyServices: true,
      acceptedInsurance: [
        "Blue Cross Blue Shield",
        "Tufts Health Plan",
        "Cigna",
        "Aetna",
      ],
      averageCost: "$16,200",
      qualityScore: "4-Star",
      established: "1980",
      coordinates: { lat: 42.3398, lng: -71.1056 },
    },
    {
      id: "3",
      name: "Boston Medical Center",
      type: "Safety Net Hospital",
      address: "1 Boston Medical Center Pl",
      city: "Boston",
      state: "MA",
      zip: "02118",
      phone: "(617) 638-8000",
      website: "bmc.org",
      rating: 4.2,
      totalBeds: 547,
      specialties: [
        "Emergency Medicine",
        "Trauma Care",
        "Pediatrics",
        "Internal Medicine",
      ],
      emergencyServices: true,
      acceptedInsurance: [
        "Medicaid",
        "Blue Cross Blue Shield",
        "Tufts Health Plan",
        "UnitedHealthcare",
      ],
      averageCost: "$12,800",
      qualityScore: "3-Star",
      established: "1996",
      coordinates: { lat: 42.337, lng: -71.0743 },
    },
    {
      id: "4",
      name: "Beth Israel Deaconess Medical Center",
      type: "Teaching Hospital",
      address: "330 Brookline Ave",
      city: "Boston",
      state: "MA",
      zip: "02215",
      phone: "(617) 667-7000",
      website: "bidmc.org",
      rating: 4.4,
      totalBeds: 673,
      specialties: [
        "Cardiology",
        "Gastroenterology",
        "Neurology",
        "Oncology",
        "Emergency Medicine",
      ],
      emergencyServices: true,
      acceptedInsurance: [
        "Blue Cross Blue Shield",
        "Harvard Pilgrim",
        "Aetna",
        "Cigna",
        "UnitedHealthcare",
      ],
      averageCost: "$15,700",
      qualityScore: "4-Star",
      established: "1916",
      coordinates: { lat: 42.3467, lng: -71.0972 },
    },
    {
      id: "5",
      name: "Tufts Medical Center",
      type: "Academic Medical Center",
      address: "800 Washington St",
      city: "Boston",
      state: "MA",
      zip: "02111",
      phone: "(617) 636-5000",
      website: "tuftsmedicalcenter.org",
      rating: 4.1,
      totalBeds: 415,
      specialties: [
        "Cardiovascular",
        "Orthopedics",
        "Neuroscience",
        "Women's Health",
      ],
      emergencyServices: true,
      acceptedInsurance: [
        "Tufts Health Plan",
        "Blue Cross Blue Shield",
        "Aetna",
        "UnitedHealthcare",
      ],
      averageCost: "$14,200",
      qualityScore: "3-Star",
      established: "1796",
      coordinates: { lat: 42.3505, lng: -71.0621 },
    },
    {
      id: "6",
      name: "Boston Children's Hospital",
      type: "Pediatric Hospital",
      address: "300 Longwood Ave",
      city: "Boston",
      state: "MA",
      zip: "02115",
      phone: "(617) 355-6000",
      website: "childrenshospital.org",
      rating: 4.6,
      totalBeds: 404,
      specialties: [
        "Pediatrics",
        "Pediatric Surgery",
        "Cardiology",
        "Neurology",
        "Oncology",
      ],
      emergencyServices: true,
      acceptedInsurance: [
        "Blue Cross Blue Shield",
        "Harvard Pilgrim",
        "Tufts Health Plan",
        "Aetna",
      ],
      averageCost: "$14,300",
      qualityScore: "5-Star",
      established: "1869",
      coordinates: { lat: 42.3398, lng: -71.1056 },
    },
    {
      id: "7",
      name: "Dana-Farber Cancer Institute",
      type: "Cancer Center",
      address: "450 Brookline Ave",
      city: "Boston",
      state: "MA",
      zip: "02215",
      phone: "(617) 632-3000",
      website: "dana-farber.org",
      rating: 4.9,
      totalBeds: 30,
      specialties: [
        "Oncology",
        "Hematology",
        "Cancer Research",
        "Immunotherapy",
      ],
      emergencyServices: false,
      acceptedInsurance: [
        "Blue Cross Blue Shield",
        "Harvard Pilgrim",
        "Aetna",
        "Cigna",
        "UnitedHealthcare",
      ],
      averageCost: "$25,600",
      qualityScore: "5-Star",
      established: "1947",
      coordinates: { lat: 42.3467, lng: -71.0972 },
    },
    {
      id: "8",
      name: "Mount Auburn Hospital",
      type: "Community Hospital",
      address: "330 Mount Auburn St",
      city: "Cambridge",
      state: "MA",
      zip: "02138",
      phone: "(617) 492-3500",
      website: "mountauburnhospital.org",
      rating: 4.3,
      totalBeds: 217,
      specialties: [
        "Emergency Medicine",
        "Maternity Care",
        "Orthopedics",
        "Internal Medicine",
      ],
      emergencyServices: true,
      acceptedInsurance: [
        "Blue Cross Blue Shield",
        "Harvard Pilgrim",
        "Tufts Health Plan",
      ],
      averageCost: "$11,900",
      qualityScore: "4-Star",
      established: "1886",
      coordinates: { lat: 42.3736, lng: -71.1097 },
    },
    {
      id: "9",
      name: "Newton-Wellesley Hospital",
      type: "Community Hospital",
      address: "2014 Washington St",
      city: "Newton",
      state: "MA",
      zip: "02462",
      phone: "(617) 243-6000",
      website: "nwh.org",
      rating: 4.2,
      totalBeds: 273,
      specialties: [
        "Maternity Care",
        "Emergency Medicine",
        "Cardiology",
        "Orthopedics",
      ],
      emergencyServices: true,
      acceptedInsurance: [
        "Blue Cross Blue Shield",
        "Harvard Pilgrim",
        "Tufts Health Plan",
        "Aetna",
      ],
      averageCost: "$13,100",
      qualityScore: "4-Star",
      established: "1881",
      coordinates: { lat: 42.337, lng: -71.2092 },
    },
    {
      id: "10",
      name: "Johns Hopkins Hospital",
      type: "Academic Medical Center",
      address: "1800 Orleans St",
      city: "Baltimore",
      state: "MD",
      zip: "21287",
      phone: "(410) 955-5000",
      website: "hopkinsmedicine.org",
      rating: 4.9,
      totalBeds: 1154,
      specialties: [
        "Research",
        "Neurology",
        "Cardiology",
        "Oncology",
        "Pediatrics",
      ],
      emergencyServices: true,
      acceptedInsurance: [
        "Blue Cross Blue Shield",
        "Aetna",
        "Cigna",
        "UnitedHealthcare",
        "Medicare",
      ],
      averageCost: "$22,100",
      qualityScore: "5-Star",
      established: "1889",
      coordinates: { lat: 39.297, lng: -76.5936 },
    },
    {
      id: "11",
      name: "Mayo Clinic",
      type: "Non-profit Medical Center",
      address: "200 First St SW",
      city: "Rochester",
      state: "MN",
      zip: "55905",
      phone: "(507) 284-2511",
      website: "mayoclinic.org",
      rating: 4.9,
      totalBeds: 1265,
      specialties: [
        "Integrated Care",
        "Research",
        "Cardiology",
        "Neurology",
        "Oncology",
      ],
      emergencyServices: true,
      acceptedInsurance: [
        "Blue Cross Blue Shield",
        "Aetna",
        "Cigna",
        "UnitedHealthcare",
        "Medicare",
        "Medicaid",
      ],
      averageCost: "$19,800",
      qualityScore: "5-Star",
      established: "1889",
      coordinates: { lat: 44.0225, lng: -92.4699 },
    },
  ];

  // Mock payer data (unchanged)
  const payers: Payer[] = [
    {
      id: "1",
      name: "Blue Cross Blue Shield of Massachusetts",
      type: "Non-profit Health Plan",
      marketShare: "32%",
      membersServed: "2.8 million",
      statesOperating: ["Massachusetts"],
      website: "bluecrossma.org",
      customerService: "(800) 262-2583",
      rating: 4.3,
      planTypes: ["HMO", "PPO", "EPO", "Medicare Advantage", "Medicaid"],
      networkSize: "15,000+ providers",
      averagePremium: "$485/month",
      founded: "1937",
      headquarters: "Boston, MA",
    },
    {
      id: "2",
      name: "Harvard Pilgrim Health Care",
      type: "Non-profit Health Plan",
      marketShare: "18%",
      membersServed: "1.2 million",
      statesOperating: ["Massachusetts", "New Hampshire", "Maine"],
      website: "harvardpilgrim.org",
      customerService: "(888) 333-4742",
      rating: 4.5,
      planTypes: ["HMO", "PPO", "Medicare Advantage"],
      networkSize: "12,000+ providers",
      averagePremium: "$420/month",
      founded: "1969",
      headquarters: "Wellesley, MA",
    },
    {
      id: "3",
      name: "Tufts Health Plan",
      type: "Non-profit Health Plan",
      marketShare: "15%",
      membersServed: "1.1 million",
      statesOperating: ["Massachusetts", "New Hampshire", "Rhode Island"],
      website: "tuftshealthplan.com",
      customerService: "(800) 462-0224",
      rating: 4.1,
      planTypes: ["HMO", "PPO", "Medicare Advantage", "Medicaid"],
      networkSize: "25,000+ providers",
      averagePremium: "$395/month",
      founded: "1979",
      headquarters: "Watertown, MA",
    },
    {
      id: "4",
      name: "UnitedHealthcare",
      type: "For-profit Health Plan",
      marketShare: "12%",
      membersServed: "900,000",
      statesOperating: ["All 50 states"],
      website: "uhc.com",
      customerService: "(877) 842-3210",
      rating: 3.8,
      planTypes: ["HMO", "PPO", "EPO", "Medicare Advantage", "Medicaid"],
      networkSize: "1.3 million providers",
      averagePremium: "$445/month",
      founded: "1977",
      headquarters: "Minnetonka, MN",
    },
    {
      id: "5",
      name: "Aetna",
      type: "For-profit Health Plan",
      marketShare: "8%",
      membersServed: "650,000",
      statesOperating: ["All 50 states"],
      website: "aetna.com",
      customerService: "(800) 872-3862",
      rating: 3.9,
      planTypes: ["HMO", "PPO", "EPO", "Medicare Advantage"],
      networkSize: "1.2 million providers",
      averagePremium: "$475/month",
      founded: "1853",
      headquarters: "Hartford, CT",
    },
    {
      id: "6",
      name: "Cigna Healthcare",
      type: "For-profit Health Plan",
      marketShare: "6%",
      membersServed: "425,000",
      statesOperating: ["All 50 states"],
      website: "cigna.com",
      customerService: "(800) 244-6224",
      rating: 3.7,
      planTypes: ["HMO", "PPO", "EPO", "Medicare Advantage"],
      networkSize: "950,000+ providers",
      averagePremium: "$465/month",
      founded: "1982",
      headquarters: "Bloomfield, CT",
    },
  ];

  // Helper function to check if input is a zip code
  const isZipCode = (input: string): boolean => {
    return /^\d{5}$/.test(input.trim());
  };

  // Calculate distance between two coordinates (Haversine formula)
  const calculateDistance = (
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number,
  ): number => {
    const R = 3959; // Earth's radius in miles
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const getCurrentList = () => {
    // For zip code searches, don't show suggestions from predefined lists
    if (isZipCode(searchQuery)) {
      return [];
    }
    return searchType === "hospitals" ? hospitalList : payerList;
  };

  const getSuggestions = () => {
    if (!searchQuery.trim()) return [];

    // No suggestions for zip codes
    if (isZipCode(searchQuery)) {
      return [];
    }

    const currentList = getCurrentList();
    const filtered = currentList.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return filtered.slice(0, 8); // Max 8 suggestions
  };

  const handleInputChange = (value: string) => {
    setSearchQuery(value);
    const isZip = isZipCode(value);
    setIsZipCodeSearch(isZip);
    setShowSuggestions(value.length > 0 && !isZip);
    setSelectedIndex(-1);
    setHasSearched(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    setSelectedIndex(-1);
    handleSearch();
  };

  const handleSearch = () => {
    setHasSearched(true);
    setShowSuggestions(false);

    // Set location info for zip code searches
    if (isZipCodeSearch && zipCodeCoordinates[searchQuery]) {
      const location = zipCodeCoordinates[searchQuery];
      setSearchLocationInfo(
        `${location.city}, ${location.state} ${searchQuery}`,
      );
    } else {
      setSearchLocationInfo("");
    }

    // Find the primary result and set it as expanded by default
    const results = getFilteredResults();
    if (results.length > 0) {
      // For zip code searches, primary is closest hospital
      // For name searches, primary is exact match or first result
      const primaryResult = results[0]; // Results are already sorted appropriately
      setExpandedCard(primaryResult.id);
    } else {
      setExpandedCard(null);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    const suggestions = getSuggestions();

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev,
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && suggestions[selectedIndex]) {
        handleSuggestionClick(suggestions[selectedIndex]);
      } else {
        handleSearch();
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
      setSelectedIndex(-1);
    }
  };

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const getFilteredResults = () => {
    if (!searchQuery.trim()) return [];

    if (searchType === "hospitals") {
      if (isZipCodeSearch) {
        // Zip code search - return all hospitals sorted by distance
        const zipCoords = zipCodeCoordinates[searchQuery];
        if (!zipCoords) return [];

        const hospitalsWithDistance = hospitals.map((hospital) => ({
          ...hospital,
          distanceFromSearch: calculateDistance(
            zipCoords.lat,
            zipCoords.lng,
            hospital.coordinates.lat,
            hospital.coordinates.lng,
          ),
        }));

        // Sort by distance
        return hospitalsWithDistance.sort(
          (a, b) => (a.distanceFromSearch || 0) - (b.distanceFromSearch || 0),
        );
      } else {
        // Name search - filter by name, city, or specialties
        return hospitals.filter(
          (hospital) =>
            hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            hospital.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
            hospital.specialties.some((specialty) =>
              specialty.toLowerCase().includes(searchQuery.toLowerCase()),
            ),
        );
      }
    } else {
      // Payer search (unchanged)
      return payers.filter(
        (payer) =>
          payer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          payer.type.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
  };

  const getResultsWithPriority = () => {
    const allResults = getFilteredResults();
    if (allResults.length === 0) return { primary: null, others: [] };

    if (isZipCodeSearch) {
      // For zip code searches, first result is closest, others are sorted by distance
      const [primary, ...others] = allResults;
      return { primary, others };
    } else {
      // For name searches, find exact match or use first result
      const exactMatch = allResults.find(
        (result) => result.name.toLowerCase() === searchQuery.toLowerCase(),
      );

      if (exactMatch) {
        // For hospitals, find others in the same metropolitan area
        if (searchType === "hospitals") {
          const primaryHospital = exactMatch as Hospital;
          const nearbyHospitals = hospitals.filter(
            (hospital) =>
              hospital.id !== exactMatch.id &&
              (hospital.city === primaryHospital.city ||
                (hospital.state === primaryHospital.state &&
                  (hospital.city === "Cambridge" ||
                    hospital.city === "Newton" ||
                    hospital.city === "Boston"))),
          );
          return { primary: exactMatch, others: nearbyHospitals };
        } else {
          // For payers, find others that operate in the same state
          const primaryPayer = exactMatch as Payer;
          const nearbyPayers = payers.filter(
            (payer) =>
              payer.id !== exactMatch.id &&
              payer.statesOperating.some((state) =>
                primaryPayer.statesOperating.includes(state),
              ),
          );
          return { primary: exactMatch, others: nearbyPayers };
        }
      } else {
        // Use first result as primary and find location-based nearby results
        const [primary, ...matchingResults] = allResults;

        if (searchType === "hospitals") {
          const primaryHospital = primary as Hospital;
          const nearbyHospitals = hospitals.filter(
            (hospital) =>
              !allResults.some((result) => result.id === hospital.id) && // Not already in search results
              (hospital.city === primaryHospital.city ||
                (hospital.state === primaryHospital.state &&
                  (hospital.city === "Cambridge" ||
                    hospital.city === "Newton" ||
                    hospital.city === "Boston"))),
          );
          return { primary, others: [...matchingResults, ...nearbyHospitals] };
        } else {
          const primaryPayer = primary as Payer;
          const nearbyPayers = payers.filter(
            (payer) =>
              !allResults.some((result) => result.id === payer.id) && // Not already in search results
              payer.statesOperating.some((state) =>
                primaryPayer.statesOperating.includes(state),
              ),
          );
          return { primary, others: [...matchingResults, ...nearbyPayers] };
        }
      }
    }
  };

  const results = getFilteredResults();
  const { primary: primaryResult, others: otherResults } =
    getResultsWithPriority();
  const suggestions = getSuggestions();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderHospitalCard = (
    hospital: Hospital,
    isPrimary: boolean = false,
  ) => (
    <Card key={hospital.id} className="overflow-hidden">
      <CardHeader
        className={`cursor-pointer hover:bg-accent/50 transition-colors ${isPrimary ? "bg-primary/5" : ""}`}
        onClick={() => toggleCard(hospital.id)}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <CardTitle className="text-lg">{hospital.name}</CardTitle>
              {isPrimary && isZipCodeSearch && (
                <Badge className="bg-green-600 text-white">Closest</Badge>
              )}
              {isPrimary && !isZipCodeSearch && (
                <Badge className="bg-primary text-primary-foreground">
                  Primary Match
                </Badge>
              )}
              <Badge variant="secondary">{hospital.type}</Badge>
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="text-sm font-medium">{hospital.rating}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {hospital.city}, {hospital.state}
              </div>
              {hospital.distanceFromSearch && (
                <div className="flex items-center">
                  <Navigation className="w-4 h-4 mr-1" />
                  {hospital.distanceFromSearch.toFixed(1)} miles away
                </div>
              )}
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {hospital.totalBeds} beds
              </div>
              <Badge variant="outline" className="text-green-600">
                {hospital.qualityScore}
              </Badge>
            </div>
          </div>
          {expandedCard === hospital.id ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
      </CardHeader>

      {expandedCard === hospital.id && (
        <CardContent className="pt-0">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Contact Information</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {hospital.address}, {hospital.city}, {hospital.state}{" "}
                    {hospital.zip}
                  </div>
                  {hospital.distanceFromSearch && (
                    <div className="flex items-center">
                      <Navigation className="w-4 h-4 mr-2" />
                      {hospital.distanceFromSearch.toFixed(1)} miles from{" "}
                      {searchLocationInfo}
                    </div>
                  )}
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    {hospital.phone}
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    <a
                      href={`https://${hospital.website}`}
                      className="text-primary hover:underline"
                    >
                      {hospital.website}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Specialties</h4>
                <div className="flex flex-wrap gap-1">
                  {hospital.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Hospital Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Established:</span>
                    <span>{hospital.established}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Average Cost:</span>
                    <span className="font-medium">{hospital.averageCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Emergency Services:
                    </span>
                    <span>{hospital.emergencyServices ? "Yes" : "No"}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Accepted Insurance</h4>
                <div className="flex flex-wrap gap-1">
                  {hospital.acceptedInsurance.map((insurance, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {insurance}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );

  const renderPayerCard = (payer: Payer, isPrimary: boolean = false) => (
    <Card key={payer.id} className="overflow-hidden">
      <CardHeader
        className={`cursor-pointer hover:bg-accent/50 transition-colors ${isPrimary ? "bg-primary/5" : ""}`}
        onClick={() => toggleCard(payer.id)}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <CardTitle className="text-lg">{payer.name}</CardTitle>
              {isPrimary && (
                <Badge className="bg-primary text-primary-foreground">
                  Primary Match
                </Badge>
              )}
              <Badge variant="secondary">{payer.type}</Badge>
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="text-sm font-medium">{payer.rating}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {payer.membersServed} members
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {payer.marketShare} market share
              </div>
            </div>
          </div>
          {expandedCard === payer.id ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
      </CardHeader>

      {expandedCard === payer.id && (
        <CardContent className="pt-0">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Contact Information</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    {payer.customerService}
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    <a
                      href={`https://${payer.website}`}
                      className="text-primary hover:underline"
                    >
                      {payer.website}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Building2 className="w-4 h-4 mr-2" />
                    {payer.headquarters}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Plan Types</h4>
                <div className="flex flex-wrap gap-1">
                  {payer.planTypes.map((plan, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {plan}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Company Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Founded:</span>
                    <span>{payer.founded}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Network Size:</span>
                    <span className="font-medium">{payer.networkSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Avg. Premium:</span>
                    <span className="font-medium">{payer.averagePremium}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">States Operating</h4>
                <div className="flex flex-wrap gap-1">
                  {payer.statesOperating.slice(0, 5).map((state, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {state}
                    </Badge>
                  ))}
                  {payer.statesOperating.length > 5 && (
                    <Badge variant="secondary" className="text-xs">
                      +{payer.statesOperating.length - 5} more
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );

  const getSearchTitle = () => {
    if (isZipCodeSearch && searchLocationInfo) {
      return `Hospitals near ${searchLocationInfo}`;
    } else if (primaryResult) {
      return primaryResult.name;
    }
    return "Search Results";
  };

  const getSearchSubtitle = () => {
    if (isZipCodeSearch) {
      return `Sorted by distance from ${searchQuery}`;
    } else {
      return `${results.length} ${searchType} found${searchQuery ? ` for "${searchQuery}"` : ""}`;
    }
  };

  return (
    <div className="w-full px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">
            Search Hospitals &amp; Payers
          </h1>
          <p className="text-xl text-muted-foreground">
            Find detailed information about healthcare providers and insurance
            companies
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="space-y-6">
            {/* Search Type Selection with Border */}
            <div>
              <Label className="text-base font-medium mb-3 block">
                Search For:
              </Label>
              <div className="border border-border rounded-lg p-4">
                <RadioGroup
                  value={searchType}
                  onValueChange={(value: "hospitals" | "payers") => {
                    setSearchType(value);
                    setSearchQuery("");
                    setHasSearched(false);
                    setShowSuggestions(false);
                    setIsZipCodeSearch(false);
                  }}
                  className="flex space-x-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hospitals" id="hospitals" />
                    <Label
                      htmlFor="hospitals"
                      className="flex items-center cursor-pointer"
                    >
                      <Building2 className="w-4 h-4 mr-2 text-primary" />
                      Hospitals
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="payers" id="payers" />
                    <Label
                      htmlFor="payers"
                      className="flex items-center cursor-pointer"
                    >
                      <Shield className="w-4 h-4 mr-2 text-primary" />
                      Insurance Payers
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Search Input with Autocomplete */}
            <div className="space-y-2 relative" ref={suggestionsRef}>
              <Label htmlFor="searchInput" className="text-base font-medium">
                Enter{" "}
                {searchType === "hospitals"
                  ? "Hospital Name or Zip Code"
                  : "Payer Name"}
              </Label>
              <div className="flex space-x-2">
                <div className="flex-1 relative">
                  <Input
                    ref={inputRef}
                    id="searchInput"
                    value={searchQuery}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onKeyDown={handleKeyPress}
                    onFocus={() =>
                      searchQuery.length > 0 &&
                      !isZipCodeSearch &&
                      setShowSuggestions(true)
                    }
                    placeholder={
                      searchType === "hospitals"
                        ? "Search hospitals by name or enter zip code..."
                        : "Search insurance companies..."
                    }
                    className="w-full"
                    autoComplete="off"
                  />

                  {/* Autocomplete Suggestions */}
                  {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute z-50 w-full mt-1 bg-white border border-border rounded-md shadow-lg max-h-60 overflow-y-auto">
                      {suggestions.map((suggestion, index) => (
                        <button
                          key={suggestion}
                          className={`w-full px-4 py-3 text-left hover:bg-accent focus:bg-accent focus:outline-none border-b border-border/50 last:border-b-0 transition-colors ${
                            index === selectedIndex ? "bg-accent" : ""
                          }`}
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          <div className="flex items-center">
                            {searchType === "hospitals" ? (
                              <Building2 className="w-4 h-4 text-muted-foreground mr-3" />
                            ) : (
                              <Shield className="w-4 h-4 text-muted-foreground mr-3" />
                            )}
                            <span className="text-sm">{suggestion}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Zip Code Indicator */}
                  {isZipCodeSearch && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <Badge variant="outline" className="text-xs">
                        <Navigation className="w-3 h-3 mr-1" />
                        Zip Code
                      </Badge>
                    </div>
                  )}
                </div>
                <Button onClick={handleSearch}>
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        {hasSearched && (
          <div className="space-y-6">
            {results.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <p className="text-muted-foreground">
                    No {searchType} found matching your search criteria.
                    {isZipCodeSearch
                      ? " Try a different zip code."
                      : " Try adjusting your search terms or select from the suggestions above."}
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-8">
                {/* Primary Result */}
                {primaryResult && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-semibold">
                          {getSearchTitle()}
                        </h2>
                        <p className="text-muted-foreground mt-1">
                          {getSearchSubtitle()}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {searchType === "hospitals"
                        ? renderHospitalCard(primaryResult as Hospital, true)
                        : renderPayerCard(primaryResult as Payer, true)}
                    </div>
                  </div>
                )}

                {/* Other Results */}
                {otherResults.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">
                        {isZipCodeSearch
                          ? `Other hospitals in the area (${otherResults.length})`
                          : `Other ${searchType} nearby (${otherResults.length})`}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {searchType === "hospitals"
                        ? (otherResults as Hospital[]).map((hospital) =>
                            renderHospitalCard(hospital, false),
                          )
                        : (otherResults as Payer[]).map((payer) =>
                            renderPayerCard(payer, false),
                          )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
