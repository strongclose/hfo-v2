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
import { Textarea } from "../components/ui/textarea";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  FileText,
  BarChart3,
  Database,
  Key,
  Download,
  Users,
  Newspaper,
  GraduationCap,
  Building2,
  Shield,
  Globe,
  Mail,
  Phone,
  Calendar,
  ArrowRight,
  CheckCircle,
  Star,
  Code,
  TrendingUp,
  Eye,
  Search,
  Filter,
} from "lucide-react";

export default function ProfessionalsPage() {
  const [apiKey, setApiKey] = useState("");
  const [requestDetails, setRequestDetails] = useState("");

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

  const professionalTypes = [
    {
      title: "Journalists & Media",
      description:
        "Access healthcare pricing data for investigative reporting and public interest stories.",
      icon: Newspaper,
      features: [
        "Real-time pricing data",
        "Market analysis reports",
        "Source protection",
        "Story support",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Academic Researchers",
      description:
        "Comprehensive healthcare pricing datasets for research and academic studies.",
      icon: GraduationCap,
      features: [
        "Research datasets",
        "Academic licensing",
        "IRB support",
        "Publication assistance",
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Policy Makers",
      description:
        "Evidence-based insights to inform healthcare policy and transparency initiatives.",
      icon: Building2,
      features: [
        "Policy briefs",
        "Impact analysis",
        "Market trends",
        "Regulatory insights",
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Healthcare Organizations",
      description:
        "Benchmarking and competitive analysis tools for healthcare providers and insurers.",
      icon: Shield,
      features: [
        "Benchmarking tools",
        "Market intelligence",
        "Compliance tracking",
        "Custom reports",
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const apiFeatures = [
    {
      endpoint: "/api/procedures",
      description:
        "Get pricing data for specific medical procedures across hospitals",
      methods: ["GET", "POST"],
      rateLimit: "1000/hour",
    },
    {
      endpoint: "/api/hospitals",
      description:
        "Access hospital profiles, transparency scores, and pricing information",
      methods: ["GET"],
      rateLimit: "500/hour",
    },
    {
      endpoint: "/api/markets",
      description: "Regional pricing analysis and market comparison data",
      methods: ["GET"],
      rateLimit: "200/hour",
    },
    {
      endpoint: "/api/analytics",
      description:
        "Advanced analytics and trend analysis across healthcare markets",
      methods: ["GET", "POST"],
      rateLimit: "100/hour",
    },
  ];

  const datasets = [
    {
      title: "Hospital Price Transparency Dataset",
      description:
        "Complete pricing information from 3,000+ hospitals nationwide",
      size: "2.4 TB",
      updated: "Daily",
      format: "CSV, JSON, API",
      access: "API, Bulk Download",
      featured: true,
    },
    {
      title: "Procedure Pricing Trends",
      description:
        "Historical pricing data for 10,000+ medical procedures (2019-2024)",
      size: "850 GB",
      updated: "Weekly",
      format: "CSV, Parquet",
      access: "Bulk Download",
      featured: false,
    },
    {
      title: "Market Analysis Reports",
      description:
        "Quarterly market analysis reports covering pricing trends and transparency",
      size: "125 MB",
      updated: "Quarterly",
      format: "PDF, Excel",
      access: "Download",
      featured: true,
    },
    {
      title: "Insurance Network Data",
      description: "In-network pricing relationships and coverage analysis",
      size: "1.2 TB",
      updated: "Monthly",
      format: "CSV, JSON",
      access: "API",
      featured: false,
    },
  ];

  const testimonials = [
    {
      quote:
        "HospitalFees.org data was instrumental in our Pulitzer Prize-winning investigation into hospital pricing practices.",
      author: "Sarah Johnson",
      role: "Investigative Reporter",
      organization: "Washington Post",
      avatar: "SJ",
    },
    {
      quote:
        "The comprehensive dataset enabled groundbreaking research on healthcare pricing disparities across demographics.",
      author: "Dr. Michael Chen",
      role: "Health Economics Professor",
      organization: "Harvard School of Public Health",
      avatar: "MC",
    },
    {
      quote:
        "Our policy recommendations were strengthened by the robust market analysis and transparency insights.",
      author: "Jennifer Rodriguez",
      role: "Policy Director",
      organization: "Commonwealth Fund",
      avatar: "JR",
    },
  ];

  const caseStudies = [
    {
      title: "Investigating Emergency Room Pricing Disparities",
      organization: "Associated Press",
      description:
        "Used our API to analyze ER pricing across 500 hospitals, revealing significant disparities in emergency care costs.",
      impact: "Led to congressional hearings on ER billing practices",
      dataUsed: "2.1M procedure records",
      category: "Journalism",
    },
    {
      title: "Academic Study on Rural Healthcare Access",
      organization: "Stanford Medicine",
      description:
        "Comprehensive analysis of pricing differences between rural and urban hospitals using our complete dataset.",
      impact: "Published in NEJM, influenced rural health policy",
      dataUsed: "Complete transparency dataset",
      category: "Research",
    },
    {
      title: "State Transparency Compliance Monitoring",
      organization: "California Health Department",
      description:
        "Ongoing monitoring of hospital compliance with state transparency laws using our API.",
      impact: "Improved compliance from 67% to 89%",
      dataUsed: "Real-time compliance data",
      category: "Policy",
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
        currentPage="professionals"
      />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Data Access
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Comprehensive healthcare pricing data and APIs for journalists,
                researchers, policy makers, and healthcare organizations driving
                transparency.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3K+</div>
                  <div className="text-sm text-muted-foreground">Hospitals</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2.4TB</div>
                  <div className="text-sm text-muted-foreground">Data</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">
                    Organizations
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <Button size="lg">
                  <Key className="w-5 h-5 mr-2" />
                  Request API Access
                </Button>
                <Button variant="secondary" size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download Sample Data
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Types */}
        <section className="py-12 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Built for Professionals
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {professionalTypes.map((type, index) => (
                  <Card key={index} className={`${type.bgColor} border-0`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-lg bg-white flex items-center justify-center`}
                        >
                          <type.icon className={`w-6 h-6 ${type.color}`} />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-3">
                            {type.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {type.description}
                          </p>

                          <div className="space-y-2">
                            {type.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center gap-2"
                              >
                                <CheckCircle
                                  className={`w-4 h-4 ${type.color}`}
                                />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="py-12 bg-gray-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <Tabs defaultValue="api" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="api">API Access</TabsTrigger>
                  <TabsTrigger value="datasets">Datasets</TabsTrigger>
                  <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
                  <TabsTrigger value="request">Request Access</TabsTrigger>
                </TabsList>

                <TabsContent value="api" className="mt-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Code className="w-5 h-5 text-primary" />
                          API Endpoints
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {apiFeatures.map((endpoint, index) => (
                            <div key={index} className="border rounded-lg p-4">
                              <div className="flex items-center justify-between mb-2">
                                <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                                  {endpoint.endpoint}
                                </code>
                                <div className="flex gap-1">
                                  {endpoint.methods.map((method) => (
                                    <Badge
                                      key={method}
                                      variant="secondary"
                                      className="text-xs"
                                    >
                                      {method}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">
                                {endpoint.description}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Rate limit: {endpoint.rateLimit}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>API Documentation</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                          <div>curl -X GET \</div>
                          <div className="ml-4">
                            https://api.hospitalfees.org/v1/procedures \
                          </div>
                          <div className="ml-4">
                            -H "Authorization: Bearer YOUR_API_KEY" \
                          </div>
                          <div className="ml-4">
                            -H "Content-Type: application/json"
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Button className="w-full" variant="secondary">
                            <FileText className="w-4 h-4 mr-2" />
                            View Full Documentation
                          </Button>
                          <Button className="w-full" variant="secondary">
                            <Download className="w-4 h-4 mr-2" />
                            Download SDK
                          </Button>
                          <Button className="w-full" variant="secondary">
                            <Eye className="w-4 h-4 mr-2" />
                            Try Interactive Demo
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="datasets" className="mt-8">
                  <div className="grid gap-6">
                    {datasets.map((dataset, index) => (
                      <Card
                        key={index}
                        className={`${dataset.featured ? "border-primary" : ""}`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <h3 className="text-xl font-semibold">
                                  {dataset.title}
                                </h3>
                                {dataset.featured && (
                                  <Badge className="bg-primary text-white">
                                    Popular
                                  </Badge>
                                )}
                              </div>

                              <p className="text-muted-foreground mb-4">
                                {dataset.description}
                              </p>

                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div>
                                  <p className="text-muted-foreground">Size</p>
                                  <p className="font-semibold">
                                    {dataset.size}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">
                                    Updated
                                  </p>
                                  <p className="font-semibold">
                                    {dataset.updated}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">
                                    Format
                                  </p>
                                  <p className="font-semibold">
                                    {dataset.format}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">
                                    Access
                                  </p>
                                  <p className="font-semibold">
                                    {dataset.access}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col gap-2">
                              <Button variant="secondary" size="sm">
                                <Eye className="w-4 h-4 mr-1" />
                                Preview
                              </Button>
                              <Button size="sm">
                                <Download className="w-4 h-4 mr-1" />
                                Request
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="case-studies" className="mt-8">
                  <div className="grid gap-8">
                    {caseStudies.map((study, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-6">
                            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                              {study.category === "Journalism" && (
                                <Newspaper className="w-8 h-8 text-primary" />
                              )}
                              {study.category === "Research" && (
                                <GraduationCap className="w-8 h-8 text-primary" />
                              )}
                              {study.category === "Policy" && (
                                <Building2 className="w-8 h-8 text-primary" />
                              )}
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <h3 className="text-xl font-semibold">
                                  {study.title}
                                </h3>
                                <Badge variant="secondary">
                                  {study.category}
                                </Badge>
                              </div>

                              <p className="text-muted-foreground mb-3">
                                {study.organization}
                              </p>
                              <p className="mb-4">{study.description}</p>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
                                <div>
                                  <p className="text-muted-foreground">
                                    Impact
                                  </p>
                                  <p className="font-semibold">
                                    {study.impact}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">
                                    Data Used
                                  </p>
                                  <p className="font-semibold">
                                    {study.dataUsed}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Testimonials */}
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold text-center mb-8">
                      What Professionals Say
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {testimonials.map((testimonial, index) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                                {testimonial.avatar}
                              </div>
                              <div>
                                <p className="font-semibold">
                                  {testimonial.author}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {testimonial.role}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {testimonial.organization}
                                </p>
                              </div>
                            </div>
                            <p className="italic text-muted-foreground">
                              "{testimonial.quote}"
                            </p>
                            <div className="flex text-yellow-400 mt-3">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 fill-current"
                                />
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="request" className="mt-8">
                  <Card className="max-w-2xl mx-auto">
                    <CardHeader>
                      <CardTitle>Request Professional Access</CardTitle>
                      <p className="text-muted-foreground">
                        Tell us about your project and we'll set up the right
                        access level for your needs.
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Full Name
                          </label>
                          <Input placeholder="Your name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Email
                          </label>
                          <Input type="email" placeholder="your@email.com" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Organization
                          </label>
                          <Input placeholder="Your organization" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Role
                          </label>
                          <select className="w-full p-2 border rounded-md">
                            <option>Select your role</option>
                            <option>Journalist</option>
                            <option>Researcher</option>
                            <option>Policy Maker</option>
                            <option>Healthcare Professional</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Project Description
                        </label>
                        <Textarea
                          placeholder="Tell us about your project, what data you need, and how you plan to use it..."
                          value={requestDetails}
                          onChange={(e) => setRequestDetails(e.target.value)}
                          rows={5}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Access Type Needed
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" />
                            <span>API Access</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" />
                            <span>Bulk Downloads</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" />
                            <span>Custom Reports</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" />
                            <span>Research Support</span>
                          </label>
                        </div>
                      </div>

                      <Button className="w-full" size="lg">
                        <Mail className="w-5 h-5 mr-2" />
                        Submit Request
                      </Button>

                      <div className="text-center text-sm text-muted-foreground">
                        Questions? Contact us at{" "}
                        <a
                          href="mailto:professionals@hospitalfees.org"
                          className="text-primary hover:underline"
                        >
                          professionals@hospitalfees.org
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
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
