import Head from "next/head";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Navigation } from "../components/Navigation";
import { FooterExpanded } from "../components/homepage/FooterExpanded";
import {
  Mail,
  MapPin,
  Bell,
  CheckCircle,
  Calendar,
  Users,
  TrendingUp,
  Shield,
  ChevronRight,
} from "lucide-react";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [comments, setComments] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const interestOptions = [
    "Hospital Pricing Data",
    "Doctor/Provider Information",
    "Insurance Plan Comparisons",
    "Procedure Cost Estimates",
    "Quality & Safety Ratings",
    "Prescription Drug Prices",
    "Urgent Care Pricing",
    "Specialty Care Costs",
  ];

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !state) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const currentWaitlistCount = 12847; // Mock data
  const estimatedLaunchDates = {
    Texas: "Q2 2025",
    Florida: "Q3 2025",
    "New York": "Q3 2025",
    Illinois: "Q4 2025",
    Pennsylvania: "Q4 2025",
    Other: "2026",
  };

  if (isSubmitted) {
    return (
      <>
        <Head>
          <title>Welcome to the Waitlist | HospitalFees.org</title>
          <meta
            name="description"
            content="Thank you for joining our waitlist. You'll be among the first to know when we expand to your state."
          />
        </Head>

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
          currentPage="waitlist"
        />

        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                You're on the list! 🎉
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Thank you for joining our waitlist. You'll be among the first to
                know when we bring healthcare price transparency to {state}.
              </p>

              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  What happens next?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-semibold text-sm">
                        1
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        We're building
                      </h3>
                      <p className="text-sm text-gray-600">
                        Our team is working on collecting and validating
                        healthcare pricing data for your state.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-semibold text-sm">
                        2
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        You'll get notified
                      </h3>
                      <p className="text-sm text-gray-600">
                        We'll email you as soon as {state} data is available,
                        with early access to our tools.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-semibold text-sm">
                        3
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Start saving
                      </h3>
                      <p className="text-sm text-gray-600">
                        Use our platform to find transparent pricing and save
                        money on healthcare in your area.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  onClick={() => (window.location.href = "/hospitals")}
                  className="px-8 py-3"
                >
                  Explore California Data
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => (window.location.href = "/")}
                  className="px-8 py-3"
                >
                  Back to Homepage
                </Button>
              </div>
            </div>
          </div>
        </div>

        <FooterExpanded />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Join the Waitlist | HospitalFees.org</title>
        <meta
          name="description"
          content="Join our waitlist to be notified when healthcare price transparency comes to your state. Get early access to hospital pricing data and cost comparison tools."
        />
      </Head>

      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                Currently live in California only
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Healthcare price transparency is coming to your state
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join {currentWaitlistCount.toLocaleString()}+ people waiting for
                transparent healthcare pricing in their area. Be the first to
                know when we launch.
              </p>

              <div className="flex items-center justify-center gap-8 mb-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {currentWaitlistCount.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">People waiting</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">50</div>
                  <div className="text-sm text-gray-600">States requested</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">400+</div>
                  <div className="text-sm text-gray-600">CA hospitals live</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Waitlist Form */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Join the Waitlist</CardTitle>
              <p className="text-gray-600">
                Get notified when we expand to your state
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="state" className="text-sm font-medium">
                      State <span className="text-red-500">*</span>
                    </Label>
                    <select
                      id="state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      required
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select your state</option>
                      {states.map((stateName) => (
                        <option key={stateName} value={stateName}>
                          {stateName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="zipCode" className="text-sm font-medium">
                      ZIP Code (optional)
                    </Label>
                    <Input
                      id="zipCode"
                      type="text"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      placeholder="12345"
                      maxLength={5}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium mb-3 block">
                    What healthcare information interests you most? (optional)
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    {interestOptions.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`text-left p-3 rounded-lg border text-sm transition-colors ${
                          interests.includes(interest)
                            ? "bg-blue-50 border-blue-200 text-blue-700"
                            : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="comments" className="text-sm font-medium">
                    Additional comments (optional)
                  </Label>
                  <Textarea
                    id="comments"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="Tell us about your specific healthcare pricing needs or questions..."
                    rows={3}
                    className="mt-1"
                  />
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  disabled={!email || !state || isSubmitting}
                  className="w-full py-3 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <span className="mr-2">⏳</span>
                      Joining...
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5 mr-2" />
                      Join the Waitlist
                    </>
                  )}
                </Button>

                {state &&
                  estimatedLaunchDates[
                    state as keyof typeof estimatedLaunchDates
                  ] && (
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Calendar className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm text-blue-700">
                        <strong>Estimated launch for {state}:</strong>{" "}
                        {estimatedLaunchDates[
                          state as keyof typeof estimatedLaunchDates
                        ] || estimatedLaunchDates.Other}
                      </p>
                    </div>
                  )}
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why join the waitlist?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Be among the first to access transparent healthcare pricing in
                your state
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Early Access
                </h3>
                <p className="text-gray-600">
                  Get exclusive early access to our platform before it opens to
                  the public in your state.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Save Money
                </h3>
                <p className="text-gray-600">
                  Find the best healthcare prices and potentially save thousands
                  on medical procedures.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Stay Informed
                </h3>
                <p className="text-gray-600">
                  Receive updates on healthcare price transparency legislation
                  and data availability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to explore what's available now?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              While you wait for your state, explore our California hospital
              pricing data
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                onClick={() => (window.location.href = "/hospitals")}
                className="px-8 py-3"
              >
                Browse California Hospitals
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="tertiary"
                onClick={() => (window.location.href = "/insights")}
                className="px-8 py-3"
              >
                Explore Healthcare Insights
              </Button>
            </div>
          </div>
        </div>
      </div>

      <FooterExpanded />
    </>
  );
}
