"use client";

import { useState } from "react";
import { Navigation } from "../components/Header";
import { Footer } from "../components/Footer";
import { StandardizedCTA } from "../components/StandardizedCTA";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
  Search,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  MessageCircle,
  DollarSign,
  FileText,
  Shield,
  Phone,
  Mail,
} from "lucide-react";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const handleNavigateToHomepage = () => (window.location.href = "/");
  const handleNavigateToInternalSearch = () =>
    (window.location.href = "/internal-search");
  const handleNavigateToComparePrices = () =>
    (window.location.href = "/compare-prices");
  const handleNavigateToPriceComparison = () =>
    (window.location.href = "/price-comparison");
  const handleNavigateToSearchByProcedure = () =>
    (window.location.href = "/search-procedure");
  const handleNavigateToFAQ = () => (window.location.href = "/faq");
  const handleNavigateToBlog = () => (window.location.href = "/blog");
  const handleNavigateToExplore = () => (window.location.href = "/explore");
  const handleNavigateToExploreByLocation = () =>
    (window.location.href = "/locations");
  const handleNavigateToInsights = () => (window.location.href = "/insights");
  const handleNavigateToPatientResources = () =>
    (window.location.href = "/learn");
  const handleNavigateToTools = () => (window.location.href = "/tools");
  const handleNavigateToCommunity = () => (window.location.href = "/community");
  const handleNavigateToProfessionals = () =>
    (window.location.href = "/professionals");
  const handleNavigateToDisclosures = () =>
    (window.location.href = "/disclosures");
  const handleCTAAssistant = () => (window.location.href = "/tools");

  const faqCategories = [
    {
      title: "Using HospitalFees.org",
      icon: Search,
      faqs: [
        {
          question: "How do I search for procedure prices?",
          answer:
            "Use our search bar to enter a procedure name or CPT code, then add your location. We'll show you pricing from hospitals in your area with transparency scores and quality ratings.",
        },
        {
          question: "What does the transparency score mean?",
          answer:
            "Our transparency score (0-100%) measures how well a hospital complies with price transparency regulations and provides clear, accessible pricing information to patients.",
        },
        {
          question: "How often is pricing data updated?",
          answer:
            "We update our pricing data daily from hospital-reported information and quarterly from comprehensive data audits to ensure accuracy.",
        },
      ],
    },
    {
      title: "Understanding Medical Bills",
      icon: FileText,
      faqs: [
        {
          question: "Why are medical bills so confusing?",
          answer:
            "Medical bills include multiple components: facility fees, professional fees, supplies, and medications. Each may be billed separately and use different coding systems, making them complex to understand.",
        },
        {
          question: "What are CPT codes?",
          answer:
            "Current Procedural Terminology (CPT) codes are standardized numeric codes used to describe medical procedures and services. They're used for billing and help ensure consistency across providers.",
        },
        {
          question: "How can I check if my bill is accurate?",
          answer:
            "Compare your bill to your medical records, check for duplicate charges, verify dates of service, and ensure you received all listed services. Our bill review checklist can help guide you through this process.",
        },
      ],
    },
    {
      title: "Costs & Pricing",
      icon: DollarSign,
      faqs: [
        {
          question: "Why do prices vary so much between hospitals?",
          answer:
            "Hospital pricing varies due to factors like location, facility overhead, negotiated insurance rates, market competition, and the complexity of services offered.",
        },
        {
          question:
            "What's the difference between list prices and actual costs?",
          answer:
            "List prices (chargemaster rates) are hospital's standard charges, but most patients pay negotiated insurance rates or discounted cash prices. Your actual cost depends on your insurance and deductible status.",
        },
        {
          question: "How can I get the best price for my procedure?",
          answer:
            "Compare prices across providers, ask about cash discounts, consider outpatient vs. inpatient settings, and check if the procedure can be done at an ambulatory surgery center instead of a hospital.",
        },
      ],
    },
    {
      title: "Insurance & Coverage",
      icon: Shield,
      faqs: [
        {
          question: "How do I know if a provider is in my network?",
          answer:
            "Check your insurance company's provider directory, call the provider's office to verify, and confirm both the facility and all treating physicians are in-network before your procedure.",
        },
        {
          question: "What should I do if my claim is denied?",
          answer:
            "Review the denial reason, gather supporting documentation, and file an appeal within the timeframe specified. Our insurance appeals guide provides templates and strategies for common denial reasons.",
        },
        {
          question: "Can I negotiate with my insurance company?",
          answer:
            "Yes, you can appeal claim decisions, request prior authorizations for necessary care, and sometimes negotiate payment plans for large deductibles or out-of-pocket costs.",
        },
      ],
    },
  ];

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index],
    );
  };

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          searchQuery === "" ||
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-background flex flex-col">
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
        currentPage="faq"
      />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Get answers to common questions about healthcare pricing,
                medical bills, and using our transparency tools.
              </p>

              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search FAQ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-3 text-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {filteredFAQs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <category.icon className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>

                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex; // Create unique index
                      const isExpanded = expandedItems.includes(globalIndex);

                      return (
                        <Card key={faqIndex} className="overflow-hidden">
                          <CardContent className="p-0">
                            <button
                              onClick={() => toggleExpanded(globalIndex)}
                              className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold pr-4">
                                  {faq.question}
                                </h3>
                                {isExpanded ? (
                                  <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                )}
                              </div>
                            </button>

                            {isExpanded && (
                              <div className="px-6 pb-6">
                                <p className="text-muted-foreground leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}

              {filteredFAQs.length === 0 && searchQuery && (
                <div className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    No results found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We couldn't find any FAQs matching "{searchQuery}". Try a
                    different search term or contact us directly.
                  </p>
                  <Button variant="secondary">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-gray-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our support team is here to help you navigate healthcare pricing
                and billing.
              </p>

              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Email Support</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get detailed answers to your questions
                    </p>
                    <Button variant="secondary" className="w-full">
                      Send Email
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Phone Support</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Speak with our healthcare advocates
                    </p>
                    <Button variant="secondary" className="w-full">
                      Call Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <StandardizedCTA
          onCTAAssistant={handleCTAAssistant}
          onNavigateToComparePrices={handleNavigateToComparePrices}
          onNavigateToInternalSearch={handleNavigateToInternalSearch}
        />
      </div>

      <Footer onNavigateToDisclosures={handleNavigateToDisclosures} />
    </div>
  );
}
