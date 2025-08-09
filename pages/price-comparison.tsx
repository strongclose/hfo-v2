"use client";

import { useState } from "react";
import { Navigation } from "../components/Header";
import { Footer } from "../components/Footer";
import { StandardizedCTA } from "../components/StandardizedCTA";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import {
  ChevronRight,
  Search,
  MapPin,
  Stethoscope,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Building,
  Shield,
  Star,
  Users,
  Phone,
  Eye,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  ArrowRight,
  Trash2,
} from "lucide-react";

export default function PriceComparisonPage() {
  const [currentPage, setCurrentPage] = useState("priceComparison");
  const [selectedProcedure, setSelectedProcedure] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedHospitals, setSelectedHospitals] = useState<string[]>([]);
  const [comparisonResults, setComparisonResults] = useState<any[]>([]);

  const handleNavigateToHomepage = () => (window.location.href = "/");
  const handleNavigateToInternalSearch = () =>
    (window.location.href = "/search");
  const handleNavigateToComparePrices = () => (window.location.href = "/");
  const handleNavigateToPriceComparison = () =>
    setCurrentPage("priceComparison");
  const handleNavigateToSearchByProcedure = () =>
    (window.location.href = "/search-procedure");
  const handleNavigateToFAQ = () => (window.location.href = "/faq");
  const handleNavigateToBlog = () => setCurrentPage("blog");
  const handleNavigateToExplore = () => setCurrentPage("explore");
  const handleNavigateToExploreByLocation = () =>
    (window.location.href = "/locations");
  const handleNavigateToInsights = () => (window.location.href = "/insights");
  const handleNavigateToPatientResources = () =>
    (window.location.href = "/learn");
  const handleNavigateToTools = () => (window.location.href = "/tools");
  const handleNavigateToCommunity = () => (window.location.href = "/community");
  const handleNavigateToProfessionals = () =>
    (window.location.href = "/professionals");
  const handleNavigateToDisclosures = () => setCurrentPage("disclosures");
  const handleCTAAssistant = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const procedures = [
    "MRI Brain (70551)",
    "CT Scan Chest (71260)",
    "Hip Replacement (27130)",
    "Knee Replacement (27447)",
    "Colonoscopy (45380)",
    "Mammogram (77067)",
    "Appendectomy (44970)",
    "Cataract Surgery (66984)",
    "C-Section (59510)",
    "Blood Panel (80053)",
  ];

  const locations = [
    "Boston, MA",
    "New York, NY",
    "Los Angeles, CA",
    "Chicago, IL",
    "Philadelphia, PA",
    "Houston, TX",
    "Phoenix, AZ",
    "San Antonio, TX",
    "San Diego, CA",
    "Dallas, TX",
  ];

  const sampleHospitals = [
    {
      id: "massachusetts-general",
      name: "Massachusetts General Hospital",
      location: "Boston, MA",
      price: 3200,
      rating: 4.8,
      inNetwork: true,
      distance: "1.2 miles",
      waitTime: "2 weeks",
      transparencyScore: 95,
    },
    {
      id: "brigham-womens",
      name: "Brigham and Women's Hospital",
      location: "Boston, MA",
      price: 3450,
      rating: 4.7,
      inNetwork: true,
      distance: "2.1 miles",
      waitTime: "3 weeks",
      transparencyScore: 92,
    },
    {
      id: "beth-israel",
      name: "Beth Israel Deaconess Medical Center",
      location: "Boston, MA",
      price: 2890,
      rating: 4.5,
      inNetwork: false,
      distance: "3.4 miles",
      waitTime: "1 week",
      transparencyScore: 88,
    },
  ];

  const handleHospitalSelection = (hospitalId: string, checked: boolean) => {
    if (checked && selectedHospitals.length < 3) {
      setSelectedHospitals([...selectedHospitals, hospitalId]);
    } else if (!checked) {
      setSelectedHospitals(selectedHospitals.filter((id) => id !== hospitalId));
    }
  };

  const handleRunComparison = () => {
    const selectedHospitalData = sampleHospitals.filter((h) =>
      selectedHospitals.includes(h.id),
    );
    setComparisonResults(selectedHospitalData);
  };

  const clearComparison = () => {
    setSelectedHospitals([]);
    setComparisonResults([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header
        onNavigateToHomepage={handleNavigateToHomepage}
        onNavigateToInternalSearch={handleNavigateToInternalSearch}
        onNavigateToComparePrices={handleNavigateToComparePrices}
        onNavigateToPriceComparison={handleNavigateToPriceComparison}
        onNavigateToSearchByProcedure={handleNavigateToSearchByProcedure}
        onNavigateToFAQ={handleNavigateToFAQ}

        onNavigateToExplore={handleNavigateToExplore}
        onNavigateToExploreByLocation={handleNavigateToExploreByLocation}
        onNavigateToInsights={handleNavigateToInsights}
        onNavigateToPatientResources={handleNavigateToPatientResources}
        onNavigateToTools={handleNavigateToTools}
        onNavigateToCommunity={handleNavigateToCommunity}
        onNavigateToProfessionals={handleNavigateToProfessionals}
        currentPage={currentPage}
      />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-12">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Breadcrumb */}
              <div className="text-sm text-muted-foreground mb-6">
                <button
                  onClick={handleNavigateToHomepage}
                  className="hover:text-primary transition-colors"
                >
                  Home
                </button>
                <ChevronRight className="w-4 h-4 inline mx-2" />
                <button
                  onClick={handleNavigateToComparePrices}
                  className="hover:text-primary transition-colors"
                >
                  Compare Costs
                </button>
                <ChevronRight className="w-4 h-4 inline mx-2" />
                <span className="text-primary font-medium">
                  Price Comparison Tool
                </span>
              </div>

              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Side-by-Side Hospital Comparison
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Compare up to 3 hospitals side-by-side to find the best
                  pricing, quality, and convenience for your procedure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Selection */}
        <section className="py-12 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="w-5 h-5" />
                    Search Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Procedure
                      </label>
                      <Select
                        value={selectedProcedure}
                        onValueChange={setSelectedProcedure}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a procedure" />
                        </SelectTrigger>
                        <SelectContent>
                          {procedures.map((procedure, index) => (
                            <SelectItem key={index} value={procedure}>
                              {procedure}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Location
                      </label>
                      <Select
                        value={selectedLocation}
                        onValueChange={setSelectedLocation}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((location, index) => (
                            <SelectItem key={index} value={location}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {selectedProcedure && selectedLocation && (
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold">
                          Select Hospitals to Compare (
                          {selectedHospitals.length}/3)
                        </h3>
                        {selectedHospitals.length > 0 && (
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={clearComparison}
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Clear Selection
                          </Button>
                        )}
                      </div>

                      <div className="grid gap-4">
                        {sampleHospitals.map((hospital) => (
                          <Card
                            key={hospital.id}
                            className={`cursor-pointer transition-all ${
                              selectedHospitals.includes(hospital.id)
                                ? "border-blue-500 bg-blue-50"
                                : "hover:shadow-md"
                            }`}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  <Checkbox
                                    checked={selectedHospitals.includes(
                                      hospital.id,
                                    )}
                                    onCheckedChange={(checked) =>
                                      handleHospitalSelection(
                                        hospital.id,
                                        checked as boolean,
                                      )
                                    }
                                    disabled={
                                      !selectedHospitals.includes(
                                        hospital.id,
                                      ) && selectedHospitals.length >= 3
                                    }
                                  />
                                  <div>
                                    <h4 className="font-semibold">
                                      {hospital.name}
                                    </h4>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                      <div className="flex items-center gap-1">
                                        <MapPin className="w-3 h-3" />
                                        {hospital.distance}
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <Star className="w-3 h-3 text-yellow-500" />
                                        {hospital.rating}
                                      </div>
                                      <Badge
                                        variant={
                                          hospital.inNetwork
                                            ? "default"
                                            : "outline"
                                        }
                                      >
                                        {hospital.inNetwork
                                          ? "In-Network"
                                          : "Out-of-Network"}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-xl font-bold text-primary">
                                    ${hospital.price.toLocaleString()}
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    Wait: {hospital.waitTime}
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      {selectedHospitals.length >= 2 && (
                        <div className="mt-6 text-center">
                          <Button onClick={handleRunComparison} size="lg">
                            <BarChart3 className="w-4 h-4 mr-2" />
                            Compare Selected Hospitals
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Comparison Results */}
              {comparisonResults.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      Side-by-Side Comparison
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium">
                              Hospital
                            </th>
                            {comparisonResults.map((hospital) => (
                              <th
                                key={hospital.id}
                                className="text-center py-3 px-4"
                              >
                                <div className="min-w-[200px]">
                                  <div className="font-semibold">
                                    {hospital.name}
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    {hospital.location}
                                  </div>
                                </div>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-3 px-4 font-medium">Price</td>
                            {comparisonResults.map((hospital) => (
                              <td
                                key={hospital.id}
                                className="text-center py-3 px-4"
                              >
                                <div className="text-xl font-bold text-primary">
                                  ${hospital.price.toLocaleString()}
                                </div>
                              </td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-4 font-medium">
                              Quality Rating
                            </td>
                            {comparisonResults.map((hospital) => (
                              <td
                                key={hospital.id}
                                className="text-center py-3 px-4"
                              >
                                <div className="flex items-center justify-center gap-1">
                                  <Star className="w-4 h-4 text-yellow-500" />
                                  <span className="font-semibold">
                                    {hospital.rating}/5
                                  </span>
                                </div>
                              </td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-4 font-medium">
                              Network Status
                            </td>
                            {comparisonResults.map((hospital) => (
                              <td
                                key={hospital.id}
                                className="text-center py-3 px-4"
                              >
                                <Badge
                                  variant={
                                    hospital.inNetwork ? "default" : "outline"
                                  }
                                >
                                  {hospital.inNetwork
                                    ? "In-Network"
                                    : "Out-of-Network"}
                                </Badge>
                              </td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-4 font-medium">Distance</td>
                            {comparisonResults.map((hospital) => (
                              <td
                                key={hospital.id}
                                className="text-center py-3 px-4"
                              >
                                {hospital.distance}
                              </td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-4 font-medium">Wait Time</td>
                            {comparisonResults.map((hospital) => (
                              <td
                                key={hospital.id}
                                className="text-center py-3 px-4"
                              >
                                {hospital.waitTime}
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium">
                              Transparency Score
                            </td>
                            {comparisonResults.map((hospital) => (
                              <td
                                key={hospital.id}
                                className="text-center py-3 px-4"
                              >
                                <div className="flex items-center justify-center gap-1">
                                  <Eye className="w-4 h-4 text-blue-600" />
                                  <span className="font-semibold">
                                    {hospital.transparencyScore}%
                                  </span>
                                </div>
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-6 flex justify-center gap-3">
                      {comparisonResults.map((hospital) => (
                        <Button key={hospital.id} variant="secondary" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View {hospital.name} Details
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        <StandardizedCTA onCTAAssistant={handleCTAAssistant} />
      </div>

      <Footer onNavigateToDisclosures={handleNavigateToDisclosures} />
    </div>
  );
}
