"use client";

import { useState } from "react";
import { Navigation } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  ChevronRight,
  FileText,
  AlertTriangle,
  Shield,
  Scale,
  Users,
  Ban,
} from "lucide-react";

export default function TermsOfUsePage() {
  const [currentPage, setCurrentPage] = useState("terms");

  const handleNavigateToHomepage = () => (window.location.href = "/");
  const handleNavigateToInternalSearch = () =>
    (window.location.href = "/search");
  const handleNavigateToComparePrices = () => (window.location.href = "/");
  const handleNavigateToPriceComparison = () =>
    (window.location.href = "/hospital-procedure");
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

  const lastUpdated = "December 2024";

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
        <section className="bg-white py-12">
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
                <span className="text-primary font-medium">Terms of Use</span>
              </div>

              {/* Header */}
              <div className="text-center mb-12">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
                <p className="text-xl text-muted-foreground mb-2">
                  Legal terms and conditions for using our platform
                </p>
                <p className="text-sm text-muted-foreground">
                  Last updated: {lastUpdated}
                </p>
              </div>

              {/* Important Notice */}
              <Card className="mb-8 bg-amber-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    Important Notice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-800">
                    By accessing and using HospitalFees.org, you acknowledge
                    that you have read, understood, and agree to be bound by
                    these Terms of Use. If you do not agree to these terms,
                    please do not use our services.
                  </p>
                </CardContent>
              </Card>

              {/* Key Points Overview */}
              <Card className="mb-8 bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle>Key Points</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Scale className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Legal Agreement</h4>
                        <p className="text-sm text-muted-foreground">
                          These terms form a binding contract between you and us
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Limited Liability</h4>
                        <p className="text-sm text-muted-foreground">
                          Our liability is limited as outlined in these terms
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">User Rights</h4>
                        <p className="text-sm text-muted-foreground">
                          Your rights and responsibilities when using our
                          platform
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Ban className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Prohibited Uses</h4>
                        <p className="text-sm text-muted-foreground">
                          Activities that are not permitted on our platform
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Terms Content */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Acceptance of Terms</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p className="text-muted-foreground mb-4">
                      [Your specific legal language will go here. This is
                      placeholder content to demonstrate the structure and
                      design.]
                    </p>
                    <p className="text-muted-foreground">
                      These Terms of Use ("Terms") govern your use of the
                      HospitalFees.org website and services. By accessing or
                      using our platform, you agree to comply with and be bound
                      by these Terms.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>2. Description of Service</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p className="text-muted-foreground mb-4">
                      [Your specific legal language will go here.]
                    </p>
                    <h4 className="font-semibold mb-2">
                      Our platform provides:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Healthcare pricing information and comparisons</li>
                      <li>AI-powered search and assistance</li>
                      <li>Hospital and procedure information</li>
                      <li>Educational resources about healthcare costs</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>3. User Accounts and Registration</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p className="text-muted-foreground mb-4">
                      [Your specific legal language about user accounts will go
                      here.]
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">
                        Account Responsibilities:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Provide accurate and complete information</li>
                        <li>
                          Maintain the security of your account credentials
                        </li>
                        <li>
                          Notify us immediately of any unauthorized access
                        </li>
                        <li>
                          Take responsibility for all activities under your
                          account
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>4. Acceptable Use Policy</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p className="text-muted-foreground mb-4">
                      [Your specific legal language about acceptable use will go
                      here.]
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-green-700">
                          Permitted Uses:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>Research healthcare pricing information</li>
                          <li>Compare medical procedure costs</li>
                          <li>Access educational resources</li>
                          <li>Use our AI assistant for healthcare queries</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-red-700">
                          Prohibited Uses:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>Automated data scraping or harvesting</li>
                          <li>Reverse engineering or copying our services</li>
                          <li>Uploading malicious software or content</li>
                          <li>Violating any applicable laws or regulations</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>5. Data Usage and Privacy</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p className="text-muted-foreground mb-4">
                      [Your specific legal language about data usage will go
                      here.]
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-sm text-blue-800">
                        Your use of our services is also governed by our Privacy
                        Policy, which describes how we collect, use, and protect
                        your information. Please review our Privacy Policy
                        carefully.
                      </p>
                      <button
                        onClick={() =>
                          (window.location.href = "/privacy-policy")
                        }
                        className="text-blue-600 hover:text-blue-800 underline text-sm mt-2"
                      >
                        View Privacy Policy →
                      </button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>6. Disclaimers and Limitations</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p className="text-muted-foreground mb-4">
                      [Your specific legal language about disclaimers will go
                      here.]
                    </p>
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <h4 className="font-semibold mb-2 text-amber-800">
                        Important Disclaimers:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-amber-700">
                        <li>
                          Pricing information is for informational purposes only
                        </li>
                        <li>
                          We do not provide medical advice or recommendations
                        </li>
                        <li>
                          Users should always verify pricing with healthcare
                          providers
                        </li>
                        <li>
                          Our service is provided "as is" without warranties
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>7. Limitation of Liability</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p className="text-muted-foreground mb-4">
                      [Your specific legal language about liability limitations
                      will go here.]
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        To the maximum extent permitted by law, we shall not be
                        liable for any indirect, incidental, special,
                        consequential, or punitive damages arising from your use
                        of our services.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>8. Intellectual Property</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p className="text-muted-foreground mb-4">
                      [Your specific legal language about intellectual property
                      will go here.]
                    </p>
                    <h4 className="font-semibold mb-2">Our Rights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                      <li>
                        All content, features, and functionality are owned by us
                      </li>
                      <li>Our trademarks and logos are protected</li>
                      <li>Software and algorithms are proprietary</li>
                    </ul>
                    <h4 className="font-semibold mb-2">Your Rights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>
                        Limited license to use our services for personal use
                      </li>
                      <li>Right to access information you've provided</li>
                      <li>
                        Fair use of publicly available pricing information
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>9. Termination</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p className="text-muted-foreground mb-4">
                      [Your specific legal language about termination will go
                      here.]
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Your Rights:</h4>
                        <p className="text-sm text-muted-foreground">
                          You may terminate your account at any time by
                          contacting us or using account settings if available.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Our Rights:</h4>
                        <p className="text-sm text-muted-foreground">
                          We may suspend or terminate accounts that violate
                          these terms or for other legitimate business reasons.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>10. Governing Law and Disputes</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p className="text-muted-foreground mb-4">
                      [Your specific legal language about governing law will go
                      here.]
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">
                        Dispute Resolution:
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Any disputes arising from these terms or your use of our
                        services will be resolved according to the laws of [Your
                        Jurisdiction] and through the dispute resolution process
                        outlined in these terms.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>11. Changes to Terms</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p className="text-muted-foreground mb-4">
                      [Your specific legal language about term changes will go
                      here.]
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-sm text-blue-800">
                        We reserve the right to modify these terms at any time.
                        We will notify users of material changes and post
                        updated terms on this page with a new "Last updated"
                        date.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>12. Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      If you have questions about these Terms of Use, please
                      contact us:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold mb-2">Legal Department</p>
                      <p className="text-sm text-muted-foreground">
                        Email: legal@hospitalfees.org
                        <br />
                        Address: [Your address will go here]
                        <br />
                        Phone: [Your phone number will go here]
                      </p>
                    </div>
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
