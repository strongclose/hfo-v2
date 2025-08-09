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
  Shield,
  Eye,
  Lock,
  Users,
  Database,
  Bell,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const [currentPage, setCurrentPage] = useState("privacy");

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
                <span className="text-primary font-medium">Privacy Policy</span>
              </div>

              {/* Header */}
              <div className="text-center mb-12">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-xl text-muted-foreground mb-2">
                  Your privacy and data security are our top priorities
                </p>
                <p className="text-sm text-muted-foreground">
                  Last updated: {lastUpdated}
                </p>
              </div>

              {/* Quick Overview */}
              <Card className="mb-8 bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-blue-600" />
                    Privacy at a Glance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3">
                      <Lock className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Data Security</h4>
                        <p className="text-sm text-muted-foreground">
                          End-to-end encryption and secure data handling
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">No Sharing</h4>
                        <p className="text-sm text-muted-foreground">
                          We never sell your personal information
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Database className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Your Control</h4>
                        <p className="text-sm text-muted-foreground">
                          Access, update, or delete your data anytime
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Policy Content */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Information We Collect</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p className="text-muted-foreground mb-4">
                      [Your specific legal language will go here. This is
                      placeholder content to demonstrate the structure and
                      design.]
                    </p>
                    <h4 className="font-semibold mb-2">
                      Information you provide directly:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                      <li>Search queries and procedure information</li>
                      <li>Location data for pricing searches</li>
                      <li>Account information (if you create an account)</li>
                      <li>Communication preferences</li>
                    </ul>
                    <h4 className="font-semibold mb-2">
                      Information collected automatically:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Usage analytics and interaction data</li>
                      <li>Device and browser information</li>
                      <li>IP address and general location</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>2. How We Use Your Information</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p className="text-muted-foreground mb-4">
                      [Your specific legal language will go here.]
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>
                        Provide healthcare pricing information and comparisons
                      </li>
                      <li>Improve our AI assistant and search functionality</li>
                      <li>Personalize your experience and recommendations</li>
                      <li>Communicate with you about our services</li>
                      <li>Ensure platform security and prevent fraud</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>3. AI and Data Processing</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p className="text-muted-foreground mb-4">
                      [Your specific legal language about AI usage will go
                      here.]
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">
                        Important Note about AI:
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Our AI assistant processes your queries to provide
                        healthcare pricing information. No personal health
                        information is stored or used for AI training without
                        explicit consent.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>4. Information Sharing</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p className="text-muted-foreground mb-4">
                      [Your specific legal language will go here.]
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold mb-2 text-green-800">
                        Our Commitment:
                      </h4>
                      <p className="text-sm text-green-700">
                        We do not sell, rent, or trade your personal information
                        to third parties for marketing purposes.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>5. Third-Party Tools and Analytics</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p className="text-muted-foreground mb-4">
                      [Your specific legal language about third-party tools will
                      go here.]
                    </p>
                    <h4 className="font-semibold mb-2">We may use:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Google Analytics for usage insights</li>
                      <li>Customer support platforms</li>
                      <li>Security monitoring tools</li>
                      <li>Performance optimization services</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>6. Data Security</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p className="text-muted-foreground mb-4">
                      [Your specific legal language about data security will go
                      here.]
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">
                          Technical Safeguards
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Encryption in transit and at rest</li>
                          <li>• Secure data centers</li>
                          <li>• Regular security audits</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">
                          Administrative Controls
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Limited access controls</li>
                          <li>• Employee training</li>
                          <li>• Incident response procedures</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>7. Your Rights and Choices</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p className="text-muted-foreground mb-4">
                      [Your specific legal language about user rights will go
                      here.]
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Eye className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Access</h4>
                          <p className="text-sm text-muted-foreground">
                            Request a copy of your personal data
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Database className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Correction</h4>
                          <p className="text-sm text-muted-foreground">
                            Update or correct your information
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Deletion</h4>
                          <p className="text-sm text-muted-foreground">
                            Request deletion of your personal data
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>8. Contact Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      If you have questions about this Privacy Policy or our
                      data practices, please contact us:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold mb-2">Privacy Officer</p>
                      <p className="text-sm text-muted-foreground">
                        Email: privacy@hospitalfees.org
                        <br />
                        Address: [Your address will go here]
                        <br />
                        Phone: [Your phone number will go here]
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Footer Note */}
              <div className="mt-12 p-6 bg-gray-50 rounded-lg border">
                <div className="flex items-start gap-3">
                  <Bell className="w-5 h-5 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Policy Updates</h4>
                    <p className="text-sm text-muted-foreground">
                      We may update this Privacy Policy from time to time. We
                      will notify you of any material changes by posting the new
                      policy on this page and updating the "Last updated" date.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer onNavigateToDisclosures={handleNavigateToDisclosures} />
    </div>
  );
}
