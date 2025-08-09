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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  BookOpen,
  FileText,
  DollarSign,
  Heart,
  Shield,
  MessageCircle,
  Download,
  Search,
  Star,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Info,
  PiggyBank,
  Calculator,
  Phone,
  Mail,
} from "lucide-react";

export default function LearnPage() {
  const [searchQuery, setSearchQuery] = useState("");

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

  const guides = [
    {
      title: "Understanding Your Medical Bill",
      description:
        "Complete guide to reading and understanding medical bills, insurance explanations, and common charges.",
      category: "Billing Basics",
      readTime: "8 min read",
      featured: true,
      icon: FileText,
      topics: [
        "CPT Codes",
        "Facility Fees",
        "Insurance Coverage",
        "Deductibles",
      ],
    },
    {
      title: "Financial Aid & Assistance Programs",
      description:
        "Comprehensive directory of financial assistance programs, charity care, and payment plan options.",
      category: "Financial Aid",
      readTime: "12 min read",
      featured: true,
      icon: PiggyBank,
      topics: [
        "Charity Care",
        "Payment Plans",
        "Government Programs",
        "Non-Profit Aid",
      ],
    },
    {
      title: "Medical Bill Negotiation Guide",
      description:
        "Step-by-step strategies to negotiate medical bills, including scripts and templates.",
      category: "Negotiation",
      readTime: "15 min read",
      featured: false,
      icon: MessageCircle,
      topics: [
        "Negotiation Scripts",
        "Documentation",
        "Settlement Options",
        "Success Stories",
      ],
    },
    {
      title: "Insurance Navigation 101",
      description:
        "Understanding your insurance benefits, networks, and how to maximize your coverage.",
      category: "Insurance",
      readTime: "10 min read",
      featured: false,
      icon: Shield,
      topics: [
        "In-Network vs Out-Network",
        "Prior Authorization",
        "Appeals Process",
        "Coverage Limits",
      ],
    },
  ];

  const tools = [
    {
      title: "Bill Review Checklist",
      description:
        "Step-by-step checklist to review your medical bills for errors and overcharges.",
      type: "Interactive Tool",
      downloads: "25K+",
      icon: CheckCircle,
    },
    {
      title: "Negotiation Letter Templates",
      description:
        "Professional templates for requesting bill reductions and payment plans.",
      type: "Templates",
      downloads: "18K+",
      icon: FileText,
    },
    {
      title: "Financial Aid Application Kit",
      description:
        "Complete kit with forms and guidance for applying to assistance programs.",
      type: "Application Kit",
      downloads: "12K+",
      icon: PiggyBank,
    },
    {
      title: "Insurance Appeals Guide",
      description:
        "Templates and strategies for appealing insurance claim denials.",
      type: "Guide",
      downloads: "8K+",
      icon: Shield,
    },
  ];

  const faqs = [
    {
      question: "How can I tell if my medical bill has errors?",
      answer:
        "Common errors include duplicate charges, incorrect dates of service, services you didn't receive, and wrong insurance information. Always compare your bill to your medical records and insurance explanation of benefits.",
    },
    {
      question: "What's the best way to negotiate a medical bill?",
      answer:
        "Start by asking for an itemized bill, research fair prices for your procedures, and contact the billing department to discuss payment options. Many hospitals offer financial hardship programs or payment plans.",
    },
    {
      question: "Can I get financial assistance even if I have insurance?",
      answer:
        "Yes! Many hospitals offer charity care or financial assistance programs based on your income, regardless of insurance status. Even with insurance, you may qualify for help with deductibles and copays.",
    },
    {
      question: "How long do I have to pay a medical bill?",
      answer:
        "There's no standard timeframe, but most providers expect payment within 30-90 days. However, you can often negotiate extended payment plans. The key is to communicate with the provider before the bill goes to collections.",
    },
  ];

  const successStories = [
    {
      title: "Reduced $15,000 ER Bill by 70%",
      description:
        "Using our negotiation guide, Sarah successfully reduced her emergency room bill from $15,000 to $4,500.",
      savings: "$10,500",
      category: "Emergency Care",
    },
    {
      title: "Found $8,000 in Billing Errors",
      description:
        "Mark used our bill review checklist and found multiple errors that saved him over $8,000.",
      savings: "$8,000",
      category: "Bill Review",
    },
    {
      title: "Qualified for Hospital Charity Care",
      description:
        "Lisa applied for financial assistance and had her entire $12,000 surgery bill forgiven.",
      savings: "$12,000",
      category: "Financial Aid",
    },
  ];

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
        currentPage="patientResources"
      />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Patient Resource Center
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Everything you need to understand healthcare billing, reduce
                costs, and navigate the healthcare system with confidence.
              </p>

              <div className="flex items-center gap-4 max-w-md mx-auto mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search guides, tools, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button>Search</Button>
              </div>

              <div className="flex items-center justify-center gap-4">
                <Badge variant="secondary" className="px-3 py-1">
                  <BookOpen className="w-4 h-4 mr-1" />
                  50+ Guides
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <Users className="w-4 h-4 mr-1" />
                  500K+ Helped
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <DollarSign className="w-4 h-4 mr-1" />
                  $50M+ Saved
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="py-12 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <Tabs defaultValue="guides" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="guides">Learning Guides</TabsTrigger>
                  <TabsTrigger value="tools">Tools & Templates</TabsTrigger>
                  <TabsTrigger value="stories">Success Stories</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>

                <TabsContent value="guides" className="mt-8">
                  <div className="grid gap-6">
                    {guides.map((guide, index) => (
                      <Card
                        key={index}
                        className={`${guide.featured ? "border-primary" : ""}`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                              <guide.icon className="w-6 h-6 text-primary" />
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge variant="secondary">
                                  {guide.category}
                                </Badge>
                                {guide.featured && (
                                  <Badge className="bg-primary text-white">
                                    Popular
                                  </Badge>
                                )}
                                <span className="text-sm text-muted-foreground">
                                  {guide.readTime}
                                </span>
                              </div>

                              <h3 className="text-xl font-semibold mb-3">
                                {guide.title}
                              </h3>
                              <p className="text-muted-foreground mb-4">
                                {guide.description}
                              </p>

                              <div className="flex items-center justify-between">
                                <div className="flex flex-wrap gap-2">
                                  {guide.topics.map((topic, topicIndex) => (
                                    <Badge
                                      key={topicIndex}
                                      variant="secondary"
                                      className="text-xs"
                                    >
                                      {topic}
                                    </Badge>
                                  ))}
                                </div>

                                <Button>
                                  Read Guide
                                  <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="tools" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {tools.map((tool, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                              <tool.icon className="w-6 h-6 text-green-600" />
                            </div>
                            <Badge variant="secondary">{tool.type}</Badge>
                          </div>

                          <h3 className="text-xl font-semibold mb-3">
                            {tool.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {tool.description}
                          </p>

                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                              <Download className="w-4 h-4 inline mr-1" />
                              {tool.downloads} downloads
                            </span>
                            <Button variant="secondary">
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="stories" className="mt-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    {successStories.map((story, index) => (
                      <Card
                        key={index}
                        className="bg-green-50 border-green-200"
                      >
                        <CardContent className="p-6">
                          <Badge className="bg-green-100 text-green-800 mb-3">
                            {story.category}
                          </Badge>

                          <h3 className="text-lg font-semibold mb-3">
                            {story.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {story.description}
                          </p>

                          <div className="bg-green-100 rounded-lg p-3">
                            <div className="flex items-center gap-2">
                              <DollarSign className="w-5 h-5 text-green-600" />
                              <span className="font-semibold text-green-800">
                                Savings: {story.savings}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="faq" className="mt-8">
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold mb-3 flex items-start gap-2">
                            <Info className="w-5 h-5 text-primary mt-0.5" />
                            {faq.question}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed ml-7">
                            {faq.answer}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section className="py-12 bg-red-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl font-bold text-red-800">
                  Need Immediate Help?
                </h2>
              </div>

              <p className="text-red-700 mb-6">
                If you're facing medical debt collection or need urgent
                assistance with medical bills
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Help Line: 1-800-HELP-NOW
                </Button>
                <Button variant="secondary" size="lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Emergency Email Support
                </Button>
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
