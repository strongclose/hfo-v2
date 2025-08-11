import React, { useState } from "react";
import { Navigation } from "./Nav";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Stethoscope,
  DollarSign,
  TrendingUp,
  MapPin,
  Clock,
  AlertCircle,
  Download,
  BarChart3,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  XCircle,
  Info,
  Leaf,
  Heart,
  Brain,
  Zap,
  Hand,
  Eye,
} from "lucide-react";

interface ProcedureDetailPageProps {
  procedureSlug: string;
  onNavigateToDisclosures: () => void;
  onNavigateToInsightalytics: () => void;
  onNavigateToProcedures: () => void;
}

export function ProcedureDetailPage({
  procedureSlug,
  onNavigateToDisclosures,
  onNavigateToInsightalytics,
  onNavigateToProcedures,
}: ProcedureDetailPageProps) {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  // Mock data based on procedure slug - in real app this would come from API
  const procedureData = {
    "mri-brain-scan": {
      name: "MRI Brain Scan",
      cptCode: "70553",
      description:
        "Magnetic Resonance Imaging of the brain with and without contrast",
      avgPrice: "$2,800",
      priceRange: "$1,200 - $4,500",
    },
    "total-knee-replacement": {
      name: "Total Knee Replacement",
      cptCode: "27447",
      description:
        "Arthroplasty, knee condyle and plateau; medial AND lateral compartments",
      avgPrice: "$35,000",
      priceRange: "$28,000 - $55,000",
    },
  };

  const currentProcedure = procedureData[
    procedureSlug as keyof typeof procedureData
  ] || {
    name: "Medical Procedure",
    cptCode: "00000",
    description: "Standard medical procedure",
    avgPrice: "$0",
    priceRange: "$0 - $0",
  };

  const costBenchmarks = [
    { payer: "Medicare", cost: "$2,100", coverage: "80%", copay: "$420" },
    { payer: "Cash Pay", cost: "$1,800", coverage: "0%", copay: "$1,800" },
    { payer: "Aetna", cost: "$2,400", coverage: "85%", copay: "$360" },
    { payer: "Blue Cross", cost: "$2,600", coverage: "90%", copay: "$260" },
    { payer: "UnitedHealth", cost: "$2,500", coverage: "85%", copay: "$375" },
  ];

  const alternatives = [
    {
      name: "CT Scan",
      cost: "$800 - $1,200",
      description: "Less detailed but faster imaging",
    },
    {
      name: "Ultrasound",
      cost: "$200 - $500",
      description: "Non-invasive but limited view",
    },
    {
      name: "X-Ray",
      cost: "$100 - $300",
      description: "Basic imaging for bone issues",
    },
  ];

  const topHospitals = [
    {
      name: "Mayo Clinic",
      location: "Rochester, MN",
      rating: 4.9,
      cost: "$2,200",
    },
    {
      name: "Cleveland Clinic",
      location: "Cleveland, OH",
      rating: 4.8,
      cost: "$2,400",
    },
    {
      name: "Johns Hopkins",
      location: "Baltimore, MD",
      rating: 4.9,
      cost: "$2,600",
    },
    {
      name: "Mass General",
      location: "Boston, MA",
      rating: 4.7,
      cost: "$2,800",
    },
  ];

  const relatedConditions = [
    "Headaches",
    "Memory Loss",
    "Seizures",
    "Brain Tumors",
    "Stroke",
    "Concussion",
  ];

  const alternativeRemedies = [
    {
      name: "Acupuncture",
      icon: Zap,
      cost: "$75 - $200",
      description:
        "Traditional Chinese medicine using fine needles to stimulate healing",
      benefits: ["Pain relief", "Stress reduction", "Improved circulation"],
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
    },
    {
      name: "Meditation",
      icon: Brain,
      cost: "$0 - $50",
      description:
        "Mindfulness practice for mental clarity and stress reduction",
      benefits: ["Stress management", "Mental clarity", "Emotional balance"],
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
    },
    {
      name: "Massage Therapy",
      icon: Hand,
      cost: "$60 - $150",
      description:
        "Therapeutic manipulation of soft tissues to promote healing",
      benefits: ["Muscle tension relief", "Improved blood flow", "Relaxation"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-600 mb-8">
            <button
              onClick={onNavigateToInsightalytics}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Insightalytics
            </button>
            <ArrowRight className="w-4 h-4 mx-2" />
            <button
              onClick={onNavigateToProcedures}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Procedures
            </button>
            <ArrowRight className="w-4 h-4 mx-2" />
            <span className="text-blue-600 font-medium">
              {currentProcedure.name}
            </span>
          </div>

          <div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {currentProcedure.name}
                  </h1>
                  <p className="text-lg text-gray-600">
                    CPT Code: {currentProcedure.cptCode}
                  </p>
                </div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                {currentProcedure.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-12">
            {/* What Is It Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                What Is {currentProcedure.name}?
              </h2>
              <p className="text-sm text-gray-600 mb-6 italic">
                Also known as:{" "}
                {currentProcedure.name === "MRI Brain Scan"
                  ? "Brain MRI, Head MRI, Cranial MRI"
                  : currentProcedure.name === "Total Knee Replacement"
                    ? "Knee Arthroplasty, TKR, Total Knee Arthroplasty"
                    : "Medical Procedure Aliases"}
              </p>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  {currentProcedure.name} is a medical imaging procedure that
                  uses powerful magnets and radio waves to create detailed
                  pictures of your brain and surrounding tissues. This
                  non-invasive test helps doctors diagnose various neurological
                  conditions and monitor treatment progress.
                </p>
                <p className="mb-4">
                  The procedure typically takes 30-60 minutes and may require
                  contrast dye to enhance image clarity. You'll lie on a table
                  that slides into the MRI machine, which makes loud knocking
                  sounds during scanning.
                </p>
                <p>
                  This test is considered one of the most detailed imaging
                  methods available for brain evaluation, providing superior
                  soft tissue contrast compared to CT scans or X-rays.
                </p>
              </div>
            </section>

            {/* When Is It Done Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                When Is It Done?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-3">
                      Common Indications
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li
                        className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition-colors"
                        title="Click to view more conditions this applies to"
                      >
                        <span className="text-green-500">🧠</span> Persistent
                        headaches
                      </li>
                      <li
                        className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition-colors"
                        title="Click to view more conditions this applies to"
                      >
                        <span className="text-green-500">⚡</span> Suspected
                        stroke or TIA
                      </li>
                      <li
                        className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition-colors"
                        title="Click to view more conditions this applies to"
                      >
                        <span className="text-green-500">💭</span> Memory or
                        cognitive issues
                      </li>
                      <li
                        className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition-colors"
                        title="Click to view more conditions this applies to"
                      >
                        <span className="text-green-500">⚡</span> Seizure
                        evaluation
                      </li>
                      <li
                        className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition-colors"
                        title="Click to view more conditions this applies to"
                      >
                        <span className="text-green-500">🔍</span> Brain tumor
                        screening
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <XCircle className="w-8 h-8 text-red-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-3">
                      Contraindications
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li
                        className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition-colors"
                        title="Click to view more conditions this applies to"
                      >
                        <span className="text-red-500">🔧</span> Metal implants
                        or devices
                      </li>
                      <li
                        className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition-colors"
                        title="Click to view more conditions this applies to"
                      >
                        <span className="text-red-500">😰</span> Claustrophobia
                        (severe)
                      </li>
                      <li
                        className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition-colors"
                        title="Click to view more conditions this applies to"
                      >
                        <span className="text-red-500">🤱</span> Pregnancy
                        (first trimester)
                      </li>
                      <li
                        className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition-colors"
                        title="Click to view more conditions this applies to"
                      >
                        <span className="text-red-500">����</span> Kidney
                        disease (with contrast)
                      </li>
                      <li
                        className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition-colors"
                        title="Click to view more conditions this applies to"
                      >
                        <span className="text-red-500">💓</span> Pacemakers or
                        defibrillators
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Case Charges & Staff Involved */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Understanding Case Charges & Staff Involved
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    What Makes Up the Total Cost?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Facility Fee (Hospital/Imaging Center)
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Use of equipment, room, and basic supplies - typically
                          60-70% of total cost
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Professional Fee (Radiologist)
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Interpretation and report writing - usually 25-35% of
                          total cost
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Contrast Material (if used)
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Gadolinium-based agent for enhanced imaging - adds
                          $200-500
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Additional Services
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Sedation, IV placement, or specialized sequences if
                          needed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Healthcare Team Involved
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        Radiologic Technologist
                      </h4>
                      <p className="text-blue-800 text-sm">
                        Operates MRI equipment, positions patient, ensures
                        safety protocols, monitors during scan
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-2">
                        Radiologist (MD)
                      </h4>
                      <p className="text-green-800 text-sm">
                        Interprets images, writes detailed report, may recommend
                        follow-up studies
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <h4 className="font-semibold text-purple-900 mb-2">
                        Nursing Staff
                      </h4>
                      <p className="text-purple-800 text-sm">
                        Patient preparation, IV access for contrast,
                        post-procedure monitoring if needed
                      </p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                      <h4 className="font-semibold text-orange-900 mb-2">
                        Support Staff
                      </h4>
                      <p className="text-orange-800 text-sm">
                        Registration, scheduling, transport assistance,
                        equipment maintenance
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Why Costs Vary Between Facilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">
                      Equipment & Technology
                    </h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>�� MRI field strength (1.5T vs 3T)</li>
                      <li>• Age and model of equipment</li>
                      <li>• Advanced imaging sequences available</li>
                      <li>• Equipment lease vs ownership costs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">
                      Facility Factors
                    </h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>�� Hospital vs outpatient imaging center</li>
                      <li>• Geographic location and market rates</li>
                      <li>• Staffing levels and expertise</li>
                      <li>• Overhead and operational costs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Price Benchmarks Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Price Benchmarks
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                2024 national average prices based on 3,800 hospital
                disclosures.
              </p>
              <div className="space-y-4">
                {costBenchmarks.map((benchmark, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                            <DollarSign className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold">
                              {benchmark.payer}
                            </h3>
                            <p className="text-xs text-gray-600">
                              Coverage: {benchmark.coverage}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900">
                            {benchmark.cost}
                          </div>
                          <div className="text-xs text-gray-600">
                            Your cost: {benchmark.copay}
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{
                              width:
                                benchmark.payer === "Medicare"
                                  ? "75%"
                                  : benchmark.payer === "Cash Pay"
                                    ? "65%"
                                    : benchmark.payer === "Aetna"
                                      ? "85%"
                                      : benchmark.payer === "Blue Cross"
                                        ? "95%"
                                        : "90%",
                            }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Relative to market range
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* What to Ask Your Doctor */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What to Ask Your Doctor
              </h2>
              <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">
                        Do I need this with contrast or without?
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">
                        Will this be billed globally or separately?
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">
                        Is there a self-pay discount available?
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">
                        What alternatives should we consider first?
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">
                        How urgent is this procedure for my condition?
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Alternatives Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Alternatives to Consider
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {alternatives.map((alt, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{alt.name}</h3>
                      <div className="text-blue-600 font-medium mb-3">
                        {alt.cost}
                      </div>
                      <p className="text-gray-600 text-sm">{alt.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Hospitals Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Top Hospitals That Offer This
              </h2>
              <div className="space-y-4">
                {topHospitals.map((hospital, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold">
                              {hospital.name}
                            </h3>
                            <p className="text-xs text-gray-600">
                              {hospital.location}
                            </p>
                            <div className="flex items-center gap-1 mt-1">
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              <span className="text-xs font-medium">
                                {hospital.rating}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-base font-bold text-gray-900">
                            {hospital.cost}
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-1 text-xs px-2 py-1"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Alternative Remedies */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Alternative Remedies & Complementary Care
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Consider these alternative and complementary approaches that may
                help address similar concerns or support your overall wellness
                journey.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {alternativeRemedies.map((remedy, index) => {
                  const IconComponent = remedy.icon;
                  return (
                    <Card
                      key={index}
                      className={`bg-gradient-to-br ${remedy.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-4">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md flex-shrink-0"
                            style={{
                              background:
                                remedy.name === "Acupuncture"
                                  ? "linear-gradient(to right, #eab308, #f97316)"
                                  : remedy.name === "Massage Therapy"
                                    ? "linear-gradient(to right, #22c55e, #10b981)"
                                    : remedy.name === "Meditation"
                                      ? "linear-gradient(to right, #a855f7, #8b5cf6)"
                                      : remedy.name === "Homeopathy"
                                        ? "linear-gradient(to right, #16a34a, #0d9488)"
                                        : remedy.name === "Osteopathy"
                                          ? "linear-gradient(to right, #3b82f6, #6366f1)"
                                          : "linear-gradient(to right, #ec4899, #f43f5e)",
                            }}
                          >
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="mb-2">
                              <h3 className="text-lg font-bold text-gray-900">
                                {remedy.name}
                              </h3>
                            </div>
                            <div className="text-sm font-medium text-gray-600 mb-3">
                              {remedy.cost}
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                          {remedy.description}
                        </p>

                        <div>
                          <h4 className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                            Potential Benefits
                          </h4>
                          <ul className="space-y-1">
                            {remedy.benefits.map((benefit, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2 text-xs text-gray-600"
                              >
                                <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>

            {/* Related Conditions */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Related Conditions
              </h2>
              <div className="flex flex-wrap gap-3">
                {relatedConditions.map((condition, index) => (
                  <a
                    key={index}
                    href={`/insightalytics/conditions/${condition.toLowerCase().replace(/\s+/g, "-")}`}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer"
                    title={`Cost range: ${
                      condition === "Headaches"
                        ? "$400–$2,200"
                        : condition === "Memory Loss"
                          ? "$800–$3,500"
                          : condition === "Seizures"
                            ? "$1,200–$4,800"
                            : condition === "Brain Tumors"
                              ? "$15,000–$85,000"
                              : condition === "Stroke"
                                ? "$8,000–$35,000"
                                : "$600–$2,800"
                    }`}
                  >
                    {condition}
                  </a>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 w-full space-y-3">
              {/* Average Cost */}
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
                <CardContent className="p-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {currentProcedure.avgPrice}
                    </div>
                    <div className="text-xs text-gray-600 mb-2">
                      Average Price
                    </div>
                    <div className="text-sm text-gray-700">
                      Range: {currentProcedure.priceRange}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardContent className="p-3">
                  <h3 className="text-base font-semibold mb-3">Quick Stats</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">
                        Avg. Duration
                      </span>
                      <span className="font-medium text-sm">45 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Anesthesia</span>
                      <span className="font-medium text-sm">None required</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Recovery</span>
                      <span className="font-medium text-sm">Immediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Follow-up</span>
                      <span className="font-medium text-sm">1-2 weeks</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Upgrade CTA with Pro Features */}
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200">
                <CardContent className="p-3">
                  <div className="text-center">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                      style={{
                        background:
                          "linear-gradient(to right, #a855f7, #3b82f6)",
                      }}
                    >
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Want Full Access?
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Unlock detailed provider data, price trends, and export
                      capabilities with Insightalytics Pro.
                    </p>

                    {/* Pro Features List */}
                    <div className="mb-4">
                      <div className="space-y-2 text-xs text-gray-700">
                        <div className="flex items-center gap-2 justify-center">
                          <Download className="w-3 h-3" />
                          Export data to CSV/Excel
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <BarChart3 className="w-3 h-3" />
                          Interactive visualizations
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <TrendingUp className="w-3 h-3" />
                          Historical price trends
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <Users className="w-3 h-3" />
                          Provider-level details
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={() => setShowUpgradeModal(true)}
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-sm py-2"
                    >
                      Upgrade to Pro
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-lg w-full">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Upgrade to Insightalytics Pro
                </h2>
                <p className="text-gray-600 mb-6">
                  Get access to advanced analytics, data exports, and detailed
                  provider insights.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="text-4xl font-bold text-purple-600">
                    $49/month
                  </div>
                  <ul className="text-left space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Unlimited data exports
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Advanced visualization suite
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Provider-level price data
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Historical trend analysis
                    </li>
                  </ul>
                </div>
                <div className="flex gap-4">
                  <Button
                    onClick={() => setShowUpgradeModal(false)}
                    variant="outline"
                    className="flex-1"
                  >
                    Maybe Later
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                    Upgrade Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Footer onNavigateToDisclosures={onNavigateToDisclosures} />
    </div>
  );
}
