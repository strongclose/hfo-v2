import { useState, useMemo } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  Search,
  Filter,
  MapPin,
  Star,
  GraduationCap,
  UserCheck,
  Stethoscope,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Navigation } from "../components/Navigation";
import { FooterExpanded } from "../components/homepage/FooterExpanded";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import ErrorBoundary, { PageErrorFallback } from "../components/ErrorBoundary";
import {
  MedicalDisclaimer,
  DataSourceAttribution,
} from "../components/LegalCompliance";
import { Doctor } from "../types";

interface DoctorsPageProps {
  doctors: Doctor[];
  specialties: string[];
  states: string[];
  cities: string[];
  totalCount: number;
}

function DoctorsPage({
  doctors,
  specialties,
  states,
  cities,
  totalCount,
}: DoctorsPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // Navigation handlers for Header component
  const handleNavigateToHomepage = () => (window.location.href = "/");
  const handleNavigateToInternalSearch = () =>
    (window.location.href = "/hospitals");
  const handleNavigateToComparePrices = () =>
    (window.location.href = "/compare-prices");
  const handleNavigateToPriceComparison = () =>
    (window.location.href = "/price-comparison");
  const handleNavigateToSearchByProcedure = () =>
    (window.location.href = "/search-procedure");
  const handleNavigateToFAQ = () => (window.location.href = "/faq");
  const handleNavigateToBlog = () => (window.location.href = "/faq");
  const handleNavigateToExplore = () => (window.location.href = "/explore");
  const handleNavigateToExploreByLocation = () =>
    (window.location.href = "/explore/location");
  const handleNavigateToInsights = () => (window.location.href = "/insights");
  const handleNavigateToPatientResources = () =>
    (window.location.href = "/learn");
  const handleNavigateToTools = () => (window.location.href = "/tools");
  const handleNavigateToCommunity = () => (window.location.href = "/community");
  const handleNavigateToProfessionals = () =>
    (window.location.href = "/professionals");

  const filteredAndSortedDoctors = useMemo(() => {
    let filtered = doctors.filter((doctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty =
        !selectedSpecialty || doctor.specialty === selectedSpecialty;
      const matchesState =
        !selectedState || doctor.address.state === selectedState;
      const matchesCity = !selectedCity || doctor.address.city === selectedCity;

      return matchesSearch && matchesSpecialty && matchesState && matchesCity;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "experience":
          return b.yearsExperience - a.yearsExperience;
        case "rating":
          return b.rating - a.rating;
        case "specialty":
          return a.specialty.localeCompare(b.specialty);
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [
    doctors,
    searchTerm,
    selectedSpecialty,
    selectedState,
    selectedCity,
    sortBy,
  ]);

  const featuredDoctors = doctors.filter((d) => d.featured).slice(0, 3);

  return (
    <>
      <Head>
        <title>Doctor Directory - Find & Compare Doctors | Hospital Fees</title>
        <meta
          name="description"
          content="Browse our comprehensive directory of doctors. Compare specialties, experience, and find detailed information about medical professionals."
        />
        <meta
          name="keywords"
          content="doctor directory, physician search, medical specialists, healthcare providers"
        />
      </Head>

      <Navigation />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Stethoscope className="w-8 h-8 text-primary" />
                <h1 className="text-4xl font-bold text-gray-900">
                  Doctor Directory
                </h1>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                Find doctors by specialty, location, or experience. Compare
                qualifications and reviews from {totalCount.toLocaleString()}{" "}
                medical professionals.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search by doctor name or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Featured Doctors */}
          {featuredDoctors.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Featured Doctors
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredDoctors.map((doctor) => (
                  <Link key={doctor.id} href={`/doctor/${doctor.slug}`}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <Badge className="bg-blue-100 text-blue-800">
                            Featured
                          </Badge>
                          <div className="text-lg font-semibold text-primary">
                            {doctor.rating}/5
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Dr. {doctor.name}
                        </h3>
                        <div className="text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <UserCheck className="w-4 h-4" />
                            {doctor.specialty}
                          </div>
                        </div>
                        <div className="text-sm text-gray-800">
                          Experience: {doctor.yearsExperience} years
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-900">
                Filter Results
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specialty
                </label>
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All specialties</option>
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All states</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort by
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="name">Name</option>
                  <option value="specialty">Specialty</option>
                  <option value="experience">Experience</option>
                  <option value="rating">Rating</option>
                </select>
              </div>

              <div className="flex items-end">
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedSpecialty("");
                    setSelectedState("");
                    setSelectedCity("");
                    setSortBy("name");
                  }}
                  variant="secondary"
                  className="w-full"
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="px-6 py-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">
                {filteredAndSortedDoctors.length} Doctors Found
              </h3>
            </div>

            <div className="divide-y">
              {filteredAndSortedDoctors.map((doctor) => (
                <Link key={doctor.id} href={`/doctor/${doctor.slug}`}>
                  <div className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-primary hover:text-primary/80">
                          Dr. {doctor.name}
                        </h4>
                        <div className="mt-1">
                          <div className="text-sm font-medium text-gray-900">
                            {doctor.specialty}
                          </div>
                          <div className="text-sm text-gray-600">
                            {doctor.address.city}, {doctor.address.state}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                          <div>
                            <div className="text-gray-600">Experience</div>
                            <div className="font-medium">
                              {doctor.yearsExperience} years
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-600">Rating</div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="font-medium">
                                {doctor.rating}/5
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-600">Board Certified</div>
                            <div className="font-medium">
                              {doctor.certifications.length > 0 ? "Yes" : "No"}
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-600">Affiliations</div>
                            <div className="font-medium">
                              {doctor.hospitalAffiliations.length} hospitals
                            </div>
                          </div>
                        </div>

                        <div className="mt-3">
                          <div className="text-sm text-gray-600 mb-2">
                            Accepted Insurance:
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {doctor.acceptedInsurance
                              .slice(0, 4)
                              .map((insurance, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {insurance}
                                </Badge>
                              ))}
                            {doctor.acceptedInsurance.length > 4 && (
                              <Badge variant="secondary" className="text-xs">
                                +{doctor.acceptedInsurance.length - 4} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Need help finding the right doctor?
              </h3>
              <p className="text-gray-600 mb-6">
                Use our advanced search tools or browse by specialty and
                location.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/search-procedure">
                  <Button variant="secondary">Search by Procedure</Button>
                </Link>
                <Link href="/tools/cost-calculator">
                  <Button variant="secondary">Cost Calculator</Button>
                </Link>
                <Link href="/explore/location">
                  <Button variant="secondary">Browse by Location</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Legal Compliance Section */}
          <div className="mt-12 space-y-6">
            <MedicalDisclaimer variant="banner" />
            <DataSourceAttribution
              sources={[
                "State Medical Board Directories",
                "Hospital Medical Staff Listings",
                "Insurance Provider Networks",
                "Medical Credential Verification",
              ]}
              lastUpdated="December 15, 2024"
            />
          </div>
        </div>
      </div>

      <FooterExpanded />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Mock data for demonstration using standardized Doctor type
  const mockDoctors: Doctor[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      slug: "sarah-johnson-md",
      type: "doctor",
      address: {
        city: "San Francisco",
        state: "CA",
        zip: "94102",
      },
      website: "https://www.example-health.com/dr-johnson",
      phone: "(415) 555-0123",
      description:
        "Board-certified cardiologist specializing in interventional procedures and heart disease prevention.",
      specialty: "Cardiology",
      rating: 4.8,
      yearsExperience: 15,
      education: ["Harvard Medical School", "Stanford Residency"],
      certifications: [
        "Board Certified - Cardiology",
        "Advanced Cardiac Life Support",
      ],
      hospitalAffiliations: [
        "UCSF Medical Center",
        "California Pacific Medical Center",
      ],
      acceptedInsurance: ["Blue Cross", "Aetna", "Kaiser", "UnitedHealth"],
      lastUpdated: "2024-12-15",
      featured: true,
    },
    {
      id: "2",
      name: "Michael Chen",
      slug: "michael-chen-md",
      type: "doctor",
      address: {
        city: "Los Angeles",
        state: "CA",
        zip: "90210",
      },
      website: "https://www.cedars-orthopedics.com/dr-chen",
      phone: "(310) 555-0456",
      description:
        "Orthopedic surgeon with expertise in joint replacement and sports medicine.",
      specialty: "Orthopedic Surgery",
      rating: 4.9,
      yearsExperience: 12,
      education: ["UCLA Medical School", "Mayo Clinic Fellowship"],
      certifications: [
        "Board Certified - Orthopedic Surgery",
        "Sports Medicine Certification",
      ],
      hospitalAffiliations: [
        "Cedars-Sinai Medical Center",
        "UCLA Medical Center",
      ],
      acceptedInsurance: ["Blue Cross", "Cigna", "Anthem", "UnitedHealth"],
      lastUpdated: "2024-12-15",
      featured: true,
    },
    {
      id: "3",
      name: "Jennifer Rodriguez",
      slug: "jennifer-rodriguez-md",
      type: "doctor",
      address: {
        city: "Palo Alto",
        state: "CA",
        zip: "94301",
      },
      website: "https://stanfordhealth.org/dr-rodriguez",
      phone: "(650) 555-0789",
      description:
        "Pediatrician focused on preventive care and childhood development.",
      specialty: "Pediatrics",
      rating: 4.7,
      yearsExperience: 10,
      education: [
        "Stanford Medical School",
        "Children's Hospital Boston Residency",
      ],
      certifications: [
        "Board Certified - Pediatrics",
        "Pediatric Advanced Life Support",
      ],
      hospitalAffiliations: [
        "Stanford Children's Health",
        "Lucile Packard Children's Hospital",
      ],
      acceptedInsurance: ["Aetna", "Kaiser", "Blue Cross", "Humana"],
      lastUpdated: "2024-12-15",
      featured: true,
    },
  ];

  const specialties = [
    "Cardiology",
    "Orthopedic Surgery",
    "Pediatrics",
    "Internal Medicine",
    "Dermatology",
  ];
  const states = ["CA"];
  const cities = ["San Francisco", "Los Angeles", "Palo Alto"];

  return {
    props: {
      doctors: mockDoctors,
      specialties,
      states,
      cities,
      totalCount: mockDoctors.length,
    },
  };
};

// Wrap the main component with error boundary
const DoctorsPageWithErrorBoundary = (props: DoctorsPageProps) => (
  <ErrorBoundary fallback={PageErrorFallback}>
    <DoctorsPage {...props} />
  </ErrorBoundary>
);

export default DoctorsPageWithErrorBoundary;
