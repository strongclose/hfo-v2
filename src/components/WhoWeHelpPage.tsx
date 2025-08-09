import React from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  GraduationCap,
  Users,
  Heart,
  BarChart3,
  Building2,
  Shield,
  Briefcase,
  ArrowRight,
  Search,
  Mail,
  FileText,
} from "lucide-react";

interface WhoWeHelpPageProps {
  onNavigateToResearchAccess: () => void;
  onNavigateToPublicSector: () => void;
  onNavigateToSearch: () => void;
  onNavigateToPartners: () => void;
  onNavigateToHospitals: () => void;
  onNavigateToEmployers: () => void;
  onNavigateToDisclosures: () => void;
}

export function WhoWeHelpPage({
  onNavigateToResearchAccess,
  onNavigateToPublicSector,
  onNavigateToSearch,
  onNavigateToPartners,
  onNavigateToHospitals,
  onNavigateToEmployers,
  onNavigateToDisclosures,
}: WhoWeHelpPageProps) {
  const userGroups = [
    {
      icon: GraduationCap,
      title: "University Researchers",
      priority: "Top Priority",
      headline: "Publish Better Research with Better Data",
      description:
        "Our dataset is built from trillions of price records released under federal law. We structure it, clean it, and make it usable—so academic researchers can turn data into insight.",
      useCases: [
        "Study pricing equity and access across geographies",
        "Track transparency compliance at the hospital level",
        "Analyze market behavior in response to regulation",
      ],
      ctaText: "Apply for research access",
      ctaAction: onNavigateToResearchAccess,
      bgColor: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600",
      accentColor: "border-blue-200",
    },
    {
      icon: Users,
      title: "Public Health & Policy Professionals",
      headline: "Use Transparency Data to Inform the Public Good",
      description:
        "Whether you're tracking hospital compliance or writing the next chapter in transparency policy, HealthFees.org gives you a readable, shareable lens into the pricing practices of American healthcare.",
      useCases: [
        "Spot pricing outliers across hospitals or states",
        "Support regional equity analyses",
        "Generate insights for public reports and legislation",
      ],
      ctaText: "Contact us for collaboration",
      ctaAction: onNavigateToPublicSector,
      bgColor: "from-green-50 to-emerald-50",
      iconColor: "text-green-600",
      accentColor: "border-green-200",
    },
    {
      icon: Heart,
      title: "Patients & Healthcare Shoppers",
      headline: "Plan Your Care with Confidence",
      description:
        "The same procedure can cost thousands more depending on where you go. HealthFees.org helps everyday people compare prices, choose wisely, and avoid surprise bills.",
      useCases: [
        "Compare cash vs. in-network prices",
        "Find affordable care in your area",
        "Understand how prices vary across facilities",
      ],
      ctaText: "Start searching",
      ctaAction: onNavigateToSearch,
      bgColor: "from-pink-50 to-rose-50",
      iconColor: "text-pink-600",
      accentColor: "border-pink-200",
    },
    {
      icon: BarChart3,
      title: "Healthcare Analysts & Consultants",
      headline: "Benchmark, Analyze, Advise",
      description:
        "Use our structured transparency data to analyze provider pricing, audit market behavior, or support smarter client recommendations.",
      useCases: [
        "Compare pricing across health systems",
        "Track trends across payers and procedures",
        "Support claims audits or pricing strategy",
      ],
      ctaText: "Request commercial access",
      ctaAction: onNavigateToPartners,
      bgColor: "from-purple-50 to-violet-50",
      iconColor: "text-purple-600",
      accentColor: "border-purple-200",
    },
    {
      icon: Building2,
      title: "Providers & Health Systems",
      headline: "See How You're Represented—and How You Compare",
      description:
        "Patients are already shopping with tools like ours. See your pricing data through their eyes, benchmark yourself, and prepare for value-driven care expectations.",
      useCases: [
        "Review public-facing price data",
        "Monitor regional competition",
        "Track compliance benchmarks",
      ],
      ctaText: "Find your facility",
      ctaAction: onNavigateToHospitals,
      bgColor: "from-orange-50 to-amber-50",
      iconColor: "text-orange-600",
      accentColor: "border-orange-200",
    },
    {
      icon: Shield,
      title: "Payers & Insurers",
      headline: "See Where You Stand in the Market",
      description:
        "Your negotiated rates are now public. So are your competitors'. HealthFees.org helps you stay informed and data-driven.",
      useCases: [
        "Evaluate market positioning",
        "Support network strategy",
        "Benchmark provider contracts",
      ],
      ctaText: "Inquire about enterprise tools",
      ctaAction: onNavigateToPartners,
      bgColor: "from-cyan-50 to-sky-50",
      iconColor: "text-cyan-600",
      accentColor: "border-cyan-200",
    },
    {
      icon: Briefcase,
      title: "Employers & Benefits Advisors",
      headline: "Help Employees Make Smarter Healthcare Decisions",
      description:
        "When employees understand prices, they make better choices. Use HealthFees.org to support plan design, open enrollment, or wellness initiatives.",
      useCases: [
        "Reference pricing support",
        "Open enrollment education",
        "Share with plan members",
      ],
      ctaText: "Refer to your HR team",
      ctaAction: onNavigateToEmployers,
      bgColor: "from-teal-50 to-emerald-50",
      iconColor: "text-teal-600",
      accentColor: "border-teal-200",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.05),transparent_50%)] pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
              Who We Help —{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                and How
              </span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light mb-8">
                HealthFees.org was created to make healthcare prices
                understandable and accessible to the public.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                But our platform also serves universities, policymakers, payers,
                and providers—anyone who wants to improve how healthcare works
                by understanding how it's priced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Groups Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {userGroups.map((group, index) => {
              const IconComponent = group.icon;
              return (
                <Card
                  key={index}
                  className={`bg-gradient-to-r ${group.bgColor} border-0 shadow-xl rounded-3xl overflow-hidden`}
                >
                  <CardContent className="p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Content */}
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className={`w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm border ${group.accentColor} flex items-center justify-center shadow-lg`}
                          >
                            <IconComponent
                              className={`w-8 h-8 ${group.iconColor}`}
                            />
                          </div>
                          <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                              {group.title}
                            </h2>
                            {group.priority && (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mt-2">
                                {group.priority}
                              </span>
                            )}
                          </div>
                        </div>

                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                          {group.headline}
                        </h3>

                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                          {group.description}
                        </p>

                        <div className="mb-8">
                          <h4 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">
                            Use Cases
                          </h4>
                          <ul className="space-y-2">
                            {group.useCases.map((useCase, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-gray-700"
                              >
                                <ArrowRight className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                                {useCase}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button
                          onClick={group.ctaAction}
                          className={`bg-white ${group.iconColor} hover:bg-gray-50 border ${group.accentColor} font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                          {group.ctaText}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>

                      {/* Visual Element */}
                      <div className="hidden lg:block">
                        <div className="relative">
                          <div
                            className={`w-64 h-64 mx-auto rounded-full bg-white/50 backdrop-blur-sm border ${group.accentColor} flex items-center justify-center shadow-2xl`}
                          >
                            <IconComponent
                              className={`w-32 h-32 ${group.iconColor} opacity-20`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Let's Work Together to Make Healthcare Pricing Useful
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Whether you're a researcher, policymaker, or company trying to
              serve patients better, we want to help you leverage transparency
              for good.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={onNavigateToResearchAccess}
                className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FileText className="w-5 h-5 mr-2" />
                Apply for Access
              </Button>
              <Button
                onClick={onNavigateToPartners}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
              <Button
                onClick={onNavigateToSearch}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Search className="w-5 h-5 mr-2" />
                Explore the Tool
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigateToDisclosures={onNavigateToDisclosures} />
    </div>
  );
}
