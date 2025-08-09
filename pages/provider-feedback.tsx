"use client";

import React, { useState } from "react";
import { Navigation } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  ChevronRight,
  Building2,
  Shield,
  FileText,
  Mail,
  Upload,
  CheckCircle2,
  AlertTriangle,
  Info,
  Send,
  Phone,
  Globe,
  Users,
} from "lucide-react";

export default function ProviderFeedbackPage() {
  const [currentPage, setCurrentPage] = useState("providerFeedback");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<"feedback" | "bulk-update">(
    "feedback",
  );
  const [jsonData, setJsonData] = useState("");
  const [jsonError, setJsonError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hospitalName: "",
    city: "",
    state: "",
    website: "",
    concernType: "",
    message: "",
    file: null as File | null,
  });

  // Navigation handlers
  const handleNavigateToHomepage = () => (window.location.href = "/");
  const handleNavigateToInternalSearch = () =>
    (window.location.href = "/search");
  const handleNavigateToComparePrices = () => (window.location.href = "/");
  const handleNavigateToPriceComparison = () =>
    (window.location.href = "/price-comparison");
  const handleNavigateToSearchByProcedure = () =>
    (window.location.href = "/search-procedure");
  const handleNavigateToFAQ = () => (window.location.href = "/faq");
  const handleNavigateToBlog = () => setCurrentPage("blog");
  const handleNavigateToExplore = () => setCurrentPage("explore");
  const handleNavigateToExploreByLocation = () =>
    (window.location.href = "/explore/location");
  const handleNavigateToInsights = () =>
    (window.location.href = "/insights/comparisons");
  const handleNavigateToPatientResources = () =>
    (window.location.href = "/learn");
  const handleNavigateToTools = () =>
    (window.location.href = "/tools/cost-calculator");
  const handleNavigateToCommunity = () => (window.location.href = "/community");
  const handleNavigateToProfessionals = () =>
    (window.location.href = "/professionals");
  const handleNavigateToDisclosures = () => setCurrentPage("disclosures");

  const concernTypes = [
    { value: "data-error", label: "Data Error or Inaccuracy" },
    { value: "missing-info", label: "Missing Information" },
    { value: "outdated-data", label: "Outdated Data" },
    { value: "legal-concern", label: "Legal Concern" },
    { value: "representation", label: "Facility Representation" },
    { value: "technical-issue", label: "Technical Issue" },
    { value: "other", label: "Other" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, file }));
  };

  const validateJson = (jsonString: string) => {
    try {
      const parsed = JSON.parse(jsonString);

      // Basic validation for required fields
      if (!parsed.provider || !parsed.pricing_data) {
        throw new Error(
          "JSON must include 'provider' and 'pricing_data' fields",
        );
      }

      if (!Array.isArray(parsed.pricing_data)) {
        throw new Error("'pricing_data' must be an array");
      }

      // Check each pricing entry
      parsed.pricing_data.forEach((item: any, index: number) => {
        if (!item.cpt_code && !item.drg_code) {
          throw new Error(
            `Item ${index + 1}: Must include either 'cpt_code' or 'drg_code'`,
          );
        }
        if (!item.description || !item.standard_charge) {
          throw new Error(
            `Item ${index + 1}: Must include 'description' and 'standard_charge'`,
          );
        }
      });

      setJsonError("");
      return true;
    } catch (error) {
      setJsonError(
        error instanceof Error ? error.message : "Invalid JSON format",
      );
      return false;
    }
  };

  const handleJsonChange = (value: string) => {
    setJsonData(value);
    if (value.trim()) {
      validateJson(value);
    } else {
      setJsonError("");
    }
  };

  const loadSampleJson = () => {
    const sampleData = {
      provider: {
        name: "General Hospital",
        npi: "1234567890",
        address: {
          city: "New York",
          state: "NY",
          zip: "10001",
        },
        contact: {
          name: "John Smith",
          email: "john.smith@hospital.com",
          phone: "555-123-4567",
        },
      },
      effective_date: "2024-01-01",
      last_updated: "2024-01-15",
      pricing_data: [
        {
          cpt_code: "99213",
          description: "Office Visit - Established Patient",
          standard_charge: 250.0,
          minimum_negotiated_rate: 180.0,
          maximum_negotiated_rate: 300.0,
          cash_price: 200.0,
          payer_specific_rates: [
            {
              payer_name: "Blue Cross Blue Shield",
              plan_name: "PPO Standard",
              negotiated_rate: 220.0,
            },
            {
              payer_name: "UnitedHealthcare",
              plan_name: "Choice Plus",
              negotiated_rate: 195.0,
            },
          ],
        },
        {
          drg_code: "470",
          description: "Major Joint Replacement",
          standard_charge: 45000.0,
          minimum_negotiated_rate: 32000.0,
          maximum_negotiated_rate: 55000.0,
          cash_price: 38000.0,
          payer_specific_rates: [
            {
              payer_name: "Medicare",
              plan_name: "Traditional",
              negotiated_rate: 35000.0,
            },
          ],
        },
      ],
    };

    setJsonData(JSON.stringify(sampleData, null, 2));
    validateJson(JSON.stringify(sampleData));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // For bulk JSON updates, validate JSON first
    if (activeTab === "bulk-update") {
      if (!jsonData.trim()) {
        setJsonError("JSON data is required for bulk updates");
        setIsSubmitting(false);
        return;
      }

      if (!validateJson(jsonData)) {
        setIsSubmitting(false);
        return;
      }
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const isFormValid = () => {
    if (activeTab === "bulk-update") {
      return (
        formData.name &&
        formData.email &&
        formData.hospitalName &&
        jsonData.trim() &&
        !jsonError
      );
    }

    return (
      formData.name &&
      formData.email &&
      formData.hospitalName &&
      formData.city &&
      formData.state &&
      formData.concernType &&
      formData.message
    );
  };

  if (isSubmitted) {
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

        <div className="flex-1 flex items-center justify-center py-16">
          <Card className="max-w-md w-full mx-4">
            <CardContent className="p-8 text-center">
              <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">
                {activeTab === "bulk-update"
                  ? "Bulk Update Received!"
                  : "Thank You!"}
              </h2>
              <p className="text-muted-foreground mb-6">
                {activeTab === "bulk-update"
                  ? "Your bulk pricing data has been received and will be processed within 24-48 hours. You will receive an email confirmation once the data has been validated and integrated into our system."
                  : "Your feedback has been received and will be reviewed within 2-3 business days. We appreciate your collaboration in maintaining accurate healthcare pricing data."}
              </p>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Reference ID:{" "}
                  <span className="font-mono">
                    PF-{Date.now().toString().slice(-6)}
                  </span>
                </p>
                <Button onClick={handleNavigateToHomepage} className="w-full">
                  Return to Homepage
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Footer onNavigateToDisclosures={handleNavigateToDisclosures} />
      </div>
    );
  }

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
        <section className="relative bg-gradient-to-b from-blue-50 via-white to-gray-50 py-16 lg:py-24">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="text-sm text-muted-foreground mb-6">
                <button
                  onClick={handleNavigateToHomepage}
                  className="hover:text-primary transition-colors"
                >
                  Home
                </button>
                <ChevronRight className="w-4 h-4 inline mx-2" />
                <span className="text-primary font-medium">
                  Provider Feedback
                </span>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    Healthcare Providers
                  </Badge>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Provider Feedback & Data Corrections
                </h1>

                <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-muted-foreground mb-6">
                    HospitalFees.org compiles publicly available hospital
                    pricing data under the CMS Hospital Price Transparency Rule.
                    If you represent a healthcare provider and believe any
                    information about your facility is incomplete, outdated, or
                    inaccurate, please use this form to submit a correction or
                    concern.
                  </p>
                  <p className="text-lg text-blue-700 font-medium">
                    We are committed to transparency, accuracy, and fair
                    representation—and we appreciate your collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Framework */}
        <section className="py-12 bg-white border-b">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Good Faith Process</h3>
                    <p className="text-sm text-muted-foreground">
                      We provide an open, accessible correction path for all
                      healthcare providers
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-6 text-center">
                    <FileText className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Public Data Source</h3>
                    <p className="text-sm text-muted-foreground">
                      All information is derived from CMS-required transparency
                      files
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">
                      Collaborative Approach
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Working together to ensure accurate healthcare cost
                      information
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Form */}
        <section className="py-16 bg-gray-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Tab Navigation */}
              <div className="flex justify-center mb-8">
                <div className="bg-white rounded-lg p-1 shadow-sm border">
                  <button
                    onClick={() => setActiveTab("feedback")}
                    className={`px-6 py-3 rounded-md font-medium transition-colors ${
                      activeTab === "feedback"
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    Individual Feedback
                  </button>
                  <button
                    onClick={() => setActiveTab("bulk-update")}
                    className={`px-6 py-3 rounded-md font-medium transition-colors ${
                      activeTab === "bulk-update"
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    Bulk Price Update
                  </button>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {activeTab === "feedback" ? (
                      <>
                        <Mail className="w-6 h-6 text-blue-600" />
                        Submit Your Feedback
                      </>
                    ) : (
                      <>
                        <FileText className="w-6 h-6 text-green-600" />
                        Bulk Price Data Update
                      </>
                    )}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {activeTab === "feedback"
                      ? "Please provide detailed information about your concern or correction request."
                      : "Submit comprehensive pricing data for your facility in JSON format."}
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {activeTab === "bulk-update" ? (
                      <>
                        {/* Contact Information for Bulk Update */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold border-b pb-2">
                            Provider Contact Information
                          </h3>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium mb-2">
                                Contact Name *
                              </label>
                              <Input
                                value={formData.name}
                                onChange={(e) =>
                                  handleInputChange("name", e.target.value)
                                }
                                placeholder="John Smith"
                                required
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium mb-2">
                                Email Address *
                              </label>
                              <Input
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                  handleInputChange("email", e.target.value)
                                }
                                placeholder="john.smith@hospital.com"
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Hospital/System Name *
                            </label>
                            <Input
                              value={formData.hospitalName}
                              onChange={(e) =>
                                handleInputChange(
                                  "hospitalName",
                                  e.target.value,
                                )
                              }
                              placeholder="General Hospital"
                              required
                            />
                          </div>
                        </div>

                        {/* JSON Schema Documentation */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold border-b pb-2">
                            JSON Format Requirements
                          </h3>

                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h4 className="font-medium text-blue-800 mb-2">
                              Required JSON Structure:
                            </h4>
                            <ul className="text-sm text-blue-700 space-y-1">
                              <li>
                                •{" "}
                                <code className="bg-blue-100 px-1 rounded">
                                  provider
                                </code>
                                : Hospital identification and contact
                                information
                              </li>
                              <li>
                                •{" "}
                                <code className="bg-blue-100 px-1 rounded">
                                  pricing_data
                                </code>
                                : Array of procedures with pricing information
                              </li>
                              <li>
                                • Each procedure must include either{" "}
                                <code className="bg-blue-100 px-1 rounded">
                                  cpt_code
                                </code>{" "}
                                or{" "}
                                <code className="bg-blue-100 px-1 rounded">
                                  drg_code
                                </code>
                              </li>
                              <li>
                                • Required fields:{" "}
                                <code className="bg-blue-100 px-1 rounded">
                                  description
                                </code>
                                ,{" "}
                                <code className="bg-blue-100 px-1 rounded">
                                  standard_charge
                                </code>
                              </li>
                              <li>
                                • Optional:{" "}
                                <code className="bg-blue-100 px-1 rounded">
                                  payer_specific_rates
                                </code>
                                ,{" "}
                                <code className="bg-blue-100 px-1 rounded">
                                  cash_price
                                </code>
                              </li>
                            </ul>
                          </div>

                          <div className="flex gap-3">
                            <Button
                              type="button"
                              variant="secondary"
                              onClick={loadSampleJson}
                              className="flex items-center gap-2"
                            >
                              <FileText className="w-4 h-4" />
                              Load Sample JSON
                            </Button>
                            <a
                              href="https://www.cms.gov/files/document/machine-readable-file-schema-specification.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                            >
                              <Globe className="w-4 h-4" />
                              CMS Schema Reference
                            </a>
                          </div>
                        </div>

                        {/* JSON Editor */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold border-b pb-2">
                            Pricing Data (JSON)
                          </h3>

                          <div>
                            <label className="block text-sm font-medium mb-2">
                              JSON Data *
                            </label>
                            <div className="relative">
                              <Textarea
                                value={jsonData}
                                onChange={(e) =>
                                  handleJsonChange(e.target.value)
                                }
                                placeholder="Paste your JSON data here or click 'Load Sample JSON' to see the format..."
                                rows={20}
                                className={`font-mono text-sm ${jsonError ? "border-red-500" : ""}`}
                                required
                              />
                              <div className="absolute top-2 right-2 text-xs text-gray-500 bg-white/90 px-2 py-1 rounded">
                                {jsonData.length} characters (
                                {Math.round(jsonData.length / 1024)}KB)
                              </div>
                            </div>

                            {jsonError && (
                              <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                                <div className="flex items-start gap-2">
                                  <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="text-sm font-medium text-red-800">
                                      JSON Validation Error
                                    </p>
                                    <p className="text-sm text-red-700">
                                      {jsonError}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}

                            {jsonData && !jsonError && (
                              <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                                <div className="flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                                  <p className="text-sm text-green-700">
                                    JSON is valid and ready for submission
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Processing Information */}
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <div className="text-sm">
                              <p className="font-medium text-green-800 mb-1">
                                Processing Timeline
                              </p>
                              <ul className="text-green-700 space-y-1">
                                <li>• Initial validation: Within 2 hours</li>
                                <li>• Data integration: 24-48 hours</li>
                                <li>• Live on platform: 1-3 business days</li>
                                <li>• Email confirmation sent at each stage</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Bulk Update Legal Notice */}
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                            <div className="text-sm">
                              <p className="font-medium text-amber-800 mb-1">
                                Bulk Update Agreement
                              </p>
                              <p className="text-amber-700">
                                By submitting bulk pricing data, you certify
                                that you are authorized to provide this
                                information on behalf of your healthcare
                                facility and that the data is accurate and
                                current as of the effective date specified in
                                the JSON. Maximum file size: 10MB.
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Original Individual Feedback Form */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold border-b pb-2">
                            Contact Information
                          </h3>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium mb-2">
                                Your Name *
                              </label>
                              <Input
                                value={formData.name}
                                onChange={(e) =>
                                  handleInputChange("name", e.target.value)
                                }
                                placeholder="John Smith"
                                required
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium mb-2">
                                Email Address *
                              </label>
                              <Input
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                  handleInputChange("email", e.target.value)
                                }
                                placeholder="john.smith@hospital.com"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        {/* Facility Information */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold border-b pb-2">
                            Facility Information
                          </h3>

                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Hospital/System Name *
                            </label>
                            <Input
                              value={formData.hospitalName}
                              onChange={(e) =>
                                handleInputChange(
                                  "hospitalName",
                                  e.target.value,
                                )
                              }
                              placeholder="General Hospital"
                              required
                            />
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium mb-2">
                                City *
                              </label>
                              <Input
                                value={formData.city}
                                onChange={(e) =>
                                  handleInputChange("city", e.target.value)
                                }
                                placeholder="New York"
                                required
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium mb-2">
                                State *
                              </label>
                              <Input
                                value={formData.state}
                                onChange={(e) =>
                                  handleInputChange("state", e.target.value)
                                }
                                placeholder="NY"
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Facility Website{" "}
                              <span className="text-muted-foreground">
                                (optional)
                              </span>
                            </label>
                            <Input
                              type="url"
                              value={formData.website}
                              onChange={(e) =>
                                handleInputChange("website", e.target.value)
                              }
                              placeholder="https://www.hospital.com"
                            />
                          </div>
                        </div>

                        {/* Concern Details */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold border-b pb-2">
                            Concern Details
                          </h3>

                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Type of Concern *
                            </label>
                            <Select
                              value={formData.concernType}
                              onValueChange={(value) =>
                                handleInputChange("concernType", value)
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select the type of concern" />
                              </SelectTrigger>
                              <SelectContent>
                                {concernTypes.map((type) => (
                                  <SelectItem
                                    key={type.value}
                                    value={type.value}
                                  >
                                    {type.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Detailed Message *
                            </label>
                            <Textarea
                              value={formData.message}
                              onChange={(e) =>
                                handleInputChange("message", e.target.value)
                              }
                              placeholder="Please provide specific details about the data error, concern, or correction needed. Include specific procedures, dates, or pricing information if applicable."
                              rows={6}
                              maxLength={1000}
                              required
                            />
                            <p className="text-xs text-muted-foreground mt-1">
                              {formData.message.length}/1000 characters
                            </p>
                          </div>

                          {/* File Upload */}
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Supporting Documentation{" "}
                              <span className="text-muted-foreground">
                                (optional)
                              </span>
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                              <input
                                type="file"
                                onChange={handleFileChange}
                                accept=".pdf,.doc,.docx,.txt,.csv,.xlsx"
                                className="hidden"
                                id="file-upload"
                              />
                              <label
                                htmlFor="file-upload"
                                className="cursor-pointer"
                              >
                                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                <p className="text-sm text-gray-600">
                                  {formData.file ? (
                                    <span className="text-blue-600 font-medium">
                                      {formData.file.name}
                                    </span>
                                  ) : (
                                    "Click to upload PDF, Word doc, or CSV file"
                                  )}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  Max file size: 10MB
                                </p>
                              </label>
                            </div>
                          </div>
                        </div>

                        {/* Legal Notice */}
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <Info className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                            <div className="text-sm">
                              <p className="font-medium text-yellow-800 mb-1">
                                Important Notice
                              </p>
                              <p className="text-yellow-700">
                                By submitting this form, you acknowledge that
                                HospitalFees.org uses publicly available data as
                                required by federal transparency rules. We will
                                review your submission in good faith and respond
                                within 2-3 business days.
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={!isFormValid() || isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          {activeTab === "bulk-update"
                            ? "Processing..."
                            : "Submitting..."}
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          {activeTab === "bulk-update"
                            ? "Submit Bulk Update"
                            : "Submit Feedback"}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">
                Alternative Contact Methods
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Mail className="w-6 h-6 text-blue-600" />
                      <h3 className="text-lg font-semibold">Email Support</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      For urgent matters or complex technical issues, contact
                      our provider relations team directly.
                    </p>
                    <a
                      href="mailto:providers@hospitalfees.org"
                      className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                    >
                      providers@hospitalfees.org
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Phone className="w-6 h-6 text-green-600" />
                      <h3 className="text-lg font-semibold">Phone Support</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Speak directly with our data team about corrections or
                      technical issues.
                    </p>
                    <p className="font-medium">
                      1-800-HOSPITAL (1-800-467-7482)
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Monday - Friday, 9 AM - 5 PM EST
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer onNavigateToDisclosures={handleNavigateToDisclosures} />
    </div>
  );
}
