"use client";

import React, { useState } from "react";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { StandardizedCTA } from "../../components/StandardizedCTA";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  ChevronRight,
  Search,
  Shield,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  SlidersHorizontal,
  User,
  Send,
  Star,
  Award,
  Target,
  Info,
  MapPin,
  Building,
  Clock,
  Filter,
} from "lucide-react";

// Define chat message type
interface ChatMessage {
  id: string;
  type: "bot" | "user";
  content: string;
  timestamp: Date;
}

export default function ExploreInsurancePage() {
  const [currentPage, setCurrentPage] = useState("exploreInsurance");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlanType, setSelectedPlanType] = useState("all");
  const [selectedDeductible, setSelectedDeductible] = useState("all");
  const [selectedNetwork, setSelectedNetwork] = useState("all");
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [sortBy, setSortBy] = useState("satisfaction");

  // Chat state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: "bot" as const,
      content:
        '👋 Hi! I can help you find the best insurance plan for your needs. Try asking:\n\n• "Which plans include UCSF and have the lowest deductible in California?"\n• "Best value insurance for families with chronic conditions"\n• "Compare Blue Cross vs UnitedHealthcare coverage"\n\nWhat would you like to know about insurance plans?',
      timestamp: new Date(),
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

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
  const handleCTAAssistant = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  // Insurance data
  const insurancePlans = [
    {
      name: "Blue Cross Blue Shield",
      marketShare: "27%",
      avgDeductible: "$2,400",
      avgOOP: "$1,200",
      networkSize: "95%",
      satisfaction: 4.2,
      trend: "stable",
      badges: ["Most Popular", "Large Network"],
      avgProcedureSavings: "$2,850",
      localInNetwork: "94%",
      planTypes: ["HMO", "PPO", "EPO"],
      deductibleRank: "medium",
      monthlyPremium: "$420",
      copay: "$25",
    },
    {
      name: "UnitedHealthcare",
      marketShare: "22%",
      avgDeductible: "$2,800",
      avgOOP: "$1,450",
      networkSize: "92%",
      satisfaction: 4.0,
      trend: "up",
      badges: ["Growing Fast"],
      avgProcedureSavings: "$2,650",
      localInNetwork: "91%",
      planTypes: ["HMO", "PPO", "POS"],
      deductibleRank: "high",
      monthlyPremium: "$385",
      copay: "$30",
    },
    {
      name: "Aetna",
      marketShare: "18%",
      avgDeductible: "$2,200",
      avgOOP: "$1,100",
      networkSize: "88%",
      satisfaction: 4.3,
      trend: "up",
      badges: ["Best Value", "Low Deductible"],
      avgProcedureSavings: "$3,200",
      localInNetwork: "89%",
      planTypes: ["HMO", "PPO"],
      deductibleRank: "low",
      monthlyPremium: "$395",
      copay: "$20",
    },
    {
      name: "Cigna",
      marketShare: "15%",
      avgDeductible: "$2,600",
      avgOOP: "$1,350",
      networkSize: "85%",
      satisfaction: 4.1,
      trend: "stable",
      badges: ["Reliable"],
      avgProcedureSavings: "$2,400",
      localInNetwork: "87%",
      planTypes: ["HMO", "PPO", "EPO"],
      deductibleRank: "medium",
      monthlyPremium: "$405",
      copay: "$25",
    },
    {
      name: "Kaiser Permanente",
      marketShare: "12%",
      avgDeductible: "$1,800",
      avgOOP: "$950",
      networkSize: "78%",
      satisfaction: 4.4,
      trend: "up",
      badges: ["Lowest Costs", "Integrated Care"],
      avgProcedureSavings: "$3,500",
      localInNetwork: "100%",
      planTypes: ["HMO"],
      deductibleRank: "low",
      monthlyPremium: "$360",
      copay: "$15",
    },
    {
      name: "Humana",
      marketShare: "8%",
      avgDeductible: "$2,500",
      avgOOP: "$1,300",
      networkSize: "82%",
      satisfaction: 3.9,
      trend: "down",
      badges: ["Senior Focus"],
      avgProcedureSavings: "$2,100",
      localInNetwork: "85%",
      planTypes: ["HMO", "PPO"],
      deductibleRank: "medium",
      monthlyPremium: "$375",
      copay: "$35",
    },
  ];

  const planTypes = [
    {
      type: "HMO",
      name: "Health Maintenance Organization",
      description: "Lower costs, requires referrals for specialists",
      avgCost: "$350/month",
      popularity: "35%",
      pros: ["Lower premiums", "Coordinated care", "Preventive focus"],
      cons: ["Limited network", "Referrals required", "Less flexibility"],
    },
    {
      type: "PPO",
      name: "Preferred Provider Organization",
      description: "More flexibility, higher costs, no referrals needed",
      avgCost: "$480/month",
      popularity: "40%",
      pros: ["No referrals", "Out-of-network coverage", "More flexibility"],
      cons: ["Higher premiums", "Higher deductibles", "More paperwork"],
    },
    {
      type: "EPO",
      name: "Exclusive Provider Organization",
      description: "No referrals, but must stay in-network",
      avgCost: "$420/month",
      popularity: "15%",
      pros: ["No referrals", "Lower than PPO", "Moderate flexibility"],
      cons: ["No out-of-network", "Limited providers", "Higher than HMO"],
    },
    {
      type: "POS",
      name: "Point of Service",
      description: "Combines HMO and PPO features",
      avgCost: "$390/month",
      popularity: "10%",
      pros: ["Some out-of-network", "Lower than PPO", "Referral flexibility"],
      cons: ["Complex rules", "Referrals for some", "Variable costs"],
    },
  ];

  // Chat handlers
  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content: chatInput.trim(),
      timestamp: new Date(),
    };

    setChatMessages((prev) => [...prev, userMessage]);
    setChatInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateInsuranceBotResponse(userMessage.content);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: botResponse,
        timestamp: new Date(),
      };

      setChatMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateInsuranceBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes("ucsf") || input.includes("california")) {
      return "For California and UCSF coverage, here are your best options:\n\n• **Blue Cross Blue Shield**: Extensive UCSF network, $2,400 deductible\n• **Aetna**: Strong California presence, $2,200 deductible (Best Value)\n• **Kaiser Permanente**: Integrated care model, lowest costs at $1,800 deductible\n\nWould you like specific details about any of these plans?";
    }

    if (input.includes("family") || input.includes("chronic")) {
      return "For families with chronic conditions, consider:\n\n• **Plans with low deductibles** ($0-$2,000): Aetna, Kaiser\n• **Strong prescription coverage**: Blue Cross, Aetna\n• **Specialist access without referrals**: PPO plans\n\nKaiser Permanente offers the best integrated chronic care management at $360/month.";
    }

    if (input.includes("compare") || input.includes("vs")) {
      return "Here's a quick comparison of top insurers:\n\n• **Kaiser**: Lowest costs ($360/mo), integrated care, HMO only\n• **Blue Cross**: Largest network (95%), most plan options\n• **Aetna**: Best value, low deductibles, good satisfaction (4.3/5)\n• **UnitedHealthcare**: Growing network, competitive pricing\n\nWhat specific aspects would you like me to compare?";
    }

    if (
      input.includes("cost") ||
      input.includes("price") ||
      input.includes("premium")
    ) {
      return "Here are average monthly premiums by plan type:\n\n• **HMO**: $350-360/month (Kaiser, Aetna)\n• **PPO**: $420-480/month (Blue Cross, UnitedHealthcare)\n• **EPO**: $395-420/month (Aetna, Cigna)\n\nRemember to factor in deductibles and copays too! Which plan type interests you most?";
    }

    return "I can help you compare insurance plans! Try asking about:\n\n• **Specific providers or hospitals** you need covered\n• **Deductible and cost comparisons** between plans\n• **Network coverage** in your area\n• **Plan types** (HMO, PPO, EPO) and their differences\n\nWhat would you like to know?";
  };

  const handleChatKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Filter plans based on selected criteria
  const filteredPlans = insurancePlans.filter((plan) => {
    const matchesPlanType =
      selectedPlanType === "all" ||
      plan.planTypes.some((type) => type.toLowerCase() === selectedPlanType);
    const matchesDeductible =
      selectedDeductible === "all" ||
      (selectedDeductible === "low" && plan.deductibleRank === "low") ||
      (selectedDeductible === "medium" && plan.deductibleRank === "medium") ||
      (selectedDeductible === "high" && plan.deductibleRank === "high");
    const matchesNetwork =
      selectedNetwork === "all" ||
      (selectedNetwork === "large" && parseInt(plan.networkSize) >= 90) ||
      (selectedNetwork === "medium" &&
        parseInt(plan.networkSize) >= 80 &&
        parseInt(plan.networkSize) < 90) ||
      (selectedNetwork === "small" && parseInt(plan.networkSize) < 80);
    const matchesSearch =
      searchTerm === "" ||
      plan.name.toLowerCase().includes(searchTerm.toLowerCase());

    return (
      matchesPlanType && matchesDeductible && matchesNetwork && matchesSearch
    );
  });

  // Sort plans
  const sortedPlans = [...filteredPlans].sort((a, b) => {
    switch (sortBy) {
      case "satisfaction":
        return b.satisfaction - a.satisfaction;
      case "avgOOP":
        return (
          parseInt(a.avgOOP.replace(/[$,]/g, "")) -
          parseInt(b.avgOOP.replace(/[$,]/g, ""))
        );
      case "avgDeductible":
        return (
          parseInt(a.avgDeductible.replace(/[$,]/g, "")) -
          parseInt(b.avgDeductible.replace(/[$,]/g, ""))
        );
      case "networkSize":
        return parseInt(b.networkSize) - parseInt(a.networkSize);
      case "premium":
        return (
          parseInt(a.monthlyPremium.replace(/[$,]/g, "")) -
          parseInt(b.monthlyPremium.replace(/[$,]/g, ""))
        );
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

      <div className="flex-1">
        {/* Hero Section with AI Chat Interface */}
        <section className="relative bg-gradient-to-b from-blue-50 via-white to-gray-50 py-16 lg:py-24">
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
                <span className="text-muted-foreground">Explore Data</span>
                <ChevronRight className="w-4 h-4 inline mx-2" />
                <span className="text-primary font-medium">By Insurance</span>
              </div>

              {/* Hero Header */}
              <div className="text-center mb-12">
                <div className="max-w-5xl mx-auto">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                    Find Your Perfect Insurance Plan
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                    Ask our AI about coverage, costs, and networks to make the
                    smartest insurance decision for your healthcare needs
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span>6 major insurers analyzed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-green-600" />
                    <span>Real coverage comparisons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span>Up to $3,500 savings identified</span>
                  </div>
                </div>
              </div>

              {/* Main AI Chat Interface */}
              <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden mb-8 relative">
                  {/* Filters Button */}
                  <div className="absolute top-4 right-4 z-10">
                    <Button
                      variant="tertiary"
                      size="sm"
                      onClick={() =>
                        setShowAdvancedFilters(!showAdvancedFilters)
                      }
                      className="w-8 h-8 p-0"
                      title="Filter insurance plans"
                    >
                      <SlidersHorizontal className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Chat Messages Area */}
                  <div className="min-h-[250px] max-h-[350px] overflow-y-auto p-6 bg-white pt-12">
                    <div className="space-y-6">
                      {chatMessages.map((message) => (
                        <div key={message.id}>
                          {message.type === "bot" && (
                            <div className="flex gap-3">
                              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-sm font-bold">
                                  H
                                </span>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-sm font-medium text-gray-900">
                                    HFO Pro
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    now
                                  </span>
                                </div>
                                <div
                                  className="bg-gray-50 rounded-2xl rounded-tl-md p-4 border border-gray-100"
                                  style={{ maxWidth: "475px" }}
                                >
                                  <div className="text-sm leading-relaxed text-foreground whitespace-pre-line">
                                    {message.content}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          {message.type === "user" && (
                            <div className="flex gap-3 justify-end">
                              <div className="flex flex-col items-end">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-xs text-muted-foreground">
                                    now
                                  </span>
                                  <span className="text-sm font-medium text-gray-900">
                                    You
                                  </span>
                                </div>
                                <div className="bg-blue-500 text-white rounded-2xl rounded-tr-md p-3 max-w-md">
                                  <div className="text-sm">
                                    {message.content}
                                  </div>
                                </div>
                              </div>
                              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                                <User className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                      {isTyping && (
                        <div className="flex gap-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm font-bold">
                              H
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm font-medium text-gray-900">
                                HFO Pro
                              </span>
                              <span className="text-xs text-muted-foreground">
                                typing...
                              </span>
                            </div>
                            <div className="bg-gray-50 rounded-2xl rounded-tl-md p-4 border border-gray-100">
                              <div className="flex items-center gap-1">
                                <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce"></div>
                                <div
                                  className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce"
                                  style={{ animationDelay: "0.1s" }}
                                ></div>
                                <div
                                  className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce"
                                  style={{ animationDelay: "0.2s" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Chat Input Area */}
                  <div className="p-4 bg-white border-t border-gray-100">
                    <div className="flex gap-3">
                      <Input
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyPress={handleChatKeyPress}
                        placeholder="Ask about insurance plans, coverage, or costs..."
                        className="flex-1 border-0 bg-gray-50 focus:bg-white transition-colors rounded-2xl"
                        disabled={isTyping}
                      />
                      <button
                        onClick={handleSendMessage}
                        className="ask-ai-button px-4 py-2 rounded-full text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group disabled:opacity-50"
                        disabled={!chatInput.trim() || isTyping}
                      >
                        <Send className="w-4 h-4 group-hover:animate-pulse" />
                        Ask AI
                        <span className="sparkle-icon text-sm">✨</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Advanced Filters Panel */}
                {showAdvancedFilters && (
                  <Card className="max-w-5xl mx-auto bg-white border border-gray-200 shadow-sm mb-8">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Filter className="w-4 h-4" />
                        <span className="font-medium">
                          Advanced Insurance Filters
                        </span>
                      </div>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Plan Type
                          </label>
                          <Select
                            value={selectedPlanType}
                            onValueChange={setSelectedPlanType}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="All Plan Types" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">
                                All Plan Types
                              </SelectItem>
                              <SelectItem value="hmo">HMO</SelectItem>
                              <SelectItem value="ppo">PPO</SelectItem>
                              <SelectItem value="epo">EPO</SelectItem>
                              <SelectItem value="pos">POS</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Deductible Range
                          </label>
                          <Select
                            value={selectedDeductible}
                            onValueChange={setSelectedDeductible}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="All Deductibles" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">
                                All Deductibles
                              </SelectItem>
                              <SelectItem value="low">$0 - $2,000</SelectItem>
                              <SelectItem value="medium">
                                $2,000 - $3,000
                              </SelectItem>
                              <SelectItem value="high">$3,000+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Network Size
                          </label>
                          <Select
                            value={selectedNetwork}
                            onValueChange={setSelectedNetwork}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="All Networks" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Networks</SelectItem>
                              <SelectItem value="large">
                                Large (90%+)
                              </SelectItem>
                              <SelectItem value="medium">
                                Medium (80-90%)
                              </SelectItem>
                              <SelectItem value="small">
                                Small (Under 80%)
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Search Plans
                          </label>
                          <Input
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search by insurer name..."
                            className="w-full"
                          />
                        </div>
                      </div>
                      <div className="flex gap-3 justify-center">
                        <Button
                          onClick={() => {
                            setSelectedPlanType("all");
                            setSelectedDeductible("all");
                            setSelectedNetwork("all");
                            setSearchTerm("");
                          }}
                          variant="secondary"
                        >
                          Clear Filters
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() => setShowAdvancedFilters(false)}
                        >
                          Close
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Plan Types Overview */}
        <section className="py-12 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">
                Understanding Insurance Plan Types
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {planTypes.map((plan, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow cursor-pointer group"
                  >
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                          <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-1">{plan.type}</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {plan.name}
                        </p>
                        <div className="text-lg font-semibold text-primary mb-1">
                          {plan.avgCost}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {plan.popularity} of market
                        </div>
                      </div>
                      <div className="space-y-3 text-xs">
                        <div>
                          <p className="font-medium text-green-600 mb-1">
                            Pros:
                          </p>
                          {plan.pros.map((pro, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-muted-foreground"
                            >
                              <CheckCircle2 className="w-3 h-3 text-green-500" />
                              <span>{pro}</span>
                            </div>
                          ))}
                        </div>
                        <div>
                          <p className="font-medium text-orange-600 mb-1">
                            Cons:
                          </p>
                          {plan.cons.map((con, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-muted-foreground"
                            >
                              <AlertTriangle className="w-3 h-3 text-orange-500" />
                              <span>{con}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Major Insurance Providers */}
        <section className="py-12 bg-gray-50">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold">
                    Insurance Plan Comparison
                  </h2>
                  <p className="text-muted-foreground mt-2">
                    {sortedPlans.length} plan
                    {sortedPlans.length !== 1 ? "s" : ""} found
                    {(selectedPlanType !== "all" ||
                      selectedDeductible !== "all" ||
                      selectedNetwork !== "all" ||
                      searchTerm) &&
                      " (filtered)"}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="satisfaction">
                        ⭐ Satisfaction
                      </SelectItem>
                      <SelectItem value="premium">
                        💰 Monthly Premium
                      </SelectItem>
                      <SelectItem value="avgOOP">💳 Out-of-Pocket</SelectItem>
                      <SelectItem value="avgDeductible">
                        📊 Deductible
                      </SelectItem>
                      <SelectItem value="networkSize">
                        🏥 Network Size
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    variant="secondary"
                    onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                    className="flex items-center gap-2"
                  >
                    <Filter className="w-4 h-4" />
                    Filters
                  </Button>
                </div>
              </div>

              <div className="grid gap-6">
                {sortedPlans.map((plan, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        {/* Plan Header */}
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Shield className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-semibold">
                                {plan.name}
                              </h3>
                              {plan.badges?.map((badge, i) => (
                                <Badge
                                  key={i}
                                  variant={
                                    badge === "Best Value"
                                      ? "default"
                                      : "secondary"
                                  }
                                  className="text-xs"
                                >
                                  {badge}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <span>Market Share: {plan.marketShare}</span>
                              <div className="flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                {plan.networkSize} in-network
                              </div>
                              <div
                                className={`flex items-center gap-1 ${
                                  plan.trend === "up"
                                    ? "text-green-600"
                                    : plan.trend === "down"
                                      ? "text-red-600"
                                      : "text-gray-600"
                                }`}
                              >
                                {plan.trend === "up" && (
                                  <TrendingUp className="w-3 h-3" />
                                )}
                                {plan.trend === "down" && (
                                  <TrendingDown className="w-3 h-3" />
                                )}
                                {plan.trend === "stable" && (
                                  <BarChart3 className="w-3 h-3" />
                                )}
                                <span className="capitalize">{plan.trend}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-500" />
                                {plan.satisfaction}/5 satisfaction
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Plan Metrics */}
                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 text-center">
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Monthly Premium
                            </p>
                            <p className="text-lg font-semibold text-primary">
                              {plan.monthlyPremium}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Deductible
                            </p>
                            <p className="text-lg font-semibold">
                              {plan.avgDeductible}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Out-of-Pocket Max
                            </p>
                            <p className="text-lg font-semibold">
                              {plan.avgOOP}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Copay
                            </p>
                            <p className="text-lg font-semibold">
                              {plan.copay}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Avg Savings
                            </p>
                            <p className="text-lg font-semibold text-green-600">
                              {plan.avgProcedureSavings}
                            </p>
                          </div>
                        </div>

                        {/* Action Button */}
                        <div className="flex flex-col gap-2">
                          <Button
                            variant="secondary"
                            className="whitespace-nowrap"
                          >
                            View Details
                          </Button>
                          <div className="text-xs text-center text-muted-foreground">
                            {plan.planTypes.join(", ")} available
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {sortedPlans.length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Shield className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      No plans match your filters
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search criteria or clearing filters
                    </p>
                    <Button
                      onClick={() => {
                        setSelectedPlanType("all");
                        setSelectedDeductible("all");
                        setSelectedNetwork("all");
                        setSearchTerm("");
                      }}
                      variant="secondary"
                    >
                      Clear All Filters
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Understanding Your Coverage Tips */}
        <section className="py-12 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">
                Smart Insurance Shopping Tips
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                      <h3 className="font-semibold">In-Network Benefits</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Using in-network providers typically results in 60-80%
                      lower out-of-pocket costs. Always verify your doctor and
                      hospital are covered before treatment.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <DollarSign className="w-6 h-6 text-blue-600" />
                      <h3 className="font-semibold">Total Cost Analysis</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Look beyond monthly premiums. Factor in deductibles,
                      copays, and out-of-pocket maximums to understand your true
                      healthcare costs.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-amber-200 bg-amber-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="w-6 h-6 text-amber-600" />
                      <h3 className="font-semibold">Prior Authorization</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Many procedures require pre-approval. Always check with
                      your insurer before scheduling major treatments to avoid
                      unexpected costs.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Building className="w-6 h-6 text-purple-600" />
                      <h3 className="font-semibold">Provider Networks</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Larger networks offer more choices but may cost more.
                      Consider your preferred doctors and hospitals when
                      choosing between plan types.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-indigo-200 bg-indigo-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-6 h-6 text-indigo-600" />
                      <h3 className="font-semibold">Prescription Coverage</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Review the drug formulary if you take regular medications.
                      Some plans may not cover your specific prescriptions or
                      may require generic alternatives.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-teal-200 bg-teal-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-6 h-6 text-teal-600" />
                      <h3 className="font-semibold">Special Needs</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      If you have chronic conditions or need specialty care,
                      prioritize plans with strong networks in those areas and
                      lower specialist copays.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <StandardizedCTA onCTAAssistant={handleCTAAssistant} />
      </div>

      <Footer onNavigateToDisclosures={handleNavigateToDisclosures} />
    </div>
  );
}
