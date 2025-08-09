"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  Search,
  Menu,
  Stethoscope,
  Globe,
  Hospital,
  BarChart3,
  Heart,
  Bot,
  Users2,
  Briefcase,
  ChevronDown,
  Building2,
  MapPin,
  Calculator,
  Receipt,
  PiggyBank,
  FileText,
  MessageCircle,
  TrendingUp,
  Eye,
  BookOpen,
  HelpCircle,
  Phone,
  CreditCard,
  UserCheck,
  GraduationCap,
  Scale,
  Shield,
  Baby,
  HandHeart,
  ShoppingCart,
  Building,
  DollarSign,
  ChartBar,
  Newspaper,
  Cpu,
  Lightbulb,
} from "lucide-react";

interface HeaderProps {
  onNavigateToHomepage: () => void;
  onNavigateToInternalSearch: () => void;
  onNavigateToComparePrices: () => void;
  onNavigateToPriceComparison: () => void;
  onNavigateToSearchByProcedure: () => void;
  onNavigateToFAQ: () => void;
  onNavigateToExplore: () => void;
  onNavigateToExploreByLocation: () => void;
  onNavigateToInsights: () => void;
  onNavigateToPatientResources: () => void;
  onNavigateToTools: () => void;
  onNavigateToCommunity: () => void;
  onNavigateToProfessionals: () => void;
  currentPage: string;
}

export function Header({
  onNavigateToHomepage,
  onNavigateToInternalSearch,
  onNavigateToComparePrices,
  onNavigateToPriceComparison,
  onNavigateToSearchByProcedure,
  onNavigateToFAQ,
  onNavigateToExplore,
  onNavigateToExploreByLocation,
  onNavigateToInsights,
  onNavigateToPatientResources,
  onNavigateToTools,
  onNavigateToCommunity,
  onNavigateToProfessionals,
  currentPage,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const closeMenu = () => setIsOpen(false);

  // Updated navigation structure following new design
  const exploreDataItems = [
    {
      title: "By Procedure",
      description: "Find procedures by name or CPT code",
      icon: Stethoscope,
      action: () => (window.location.href = "/search-procedure"),
    },
    {
      title: "By Location",
      description: "Explore pricing by city or ZIP code",
      icon: Globe,
      action: () => (window.location.href = "/explore/location"),
    },
    {
      title: "By Insurance",
      description: "Compare plans and coverage options",
      icon: Shield,
      action: () => (window.location.href = "/explore/insurance"),
    },
    {
      title: "By Condition",
      description: "Browse treatments by medical specialty",
      icon: Heart,
      action: () => (window.location.href = "/explore/condition"),
    },
    {
      title: "Hospital Directory",
      description: "Browse all hospitals and facilities",
      icon: Hospital,
      action: () => (window.location.href = "/hospitals"),
    },
    {
      title: "Doctor Directory",
      description: "Find doctors by specialty and location",
      icon: UserCheck,
      action: () => (window.location.href = "/doctors"),
    },
    {
      title: "Insurance Directory",
      description: "Compare insurance providers and plans",
      icon: Building2,
      action: () => (window.location.href = "/insurers"),
    },
  ];

  const toolsItems = [
    {
      title: "Cost Calculator",
      description: "Calculate your expected costs",
      icon: Calculator,
      action: () => (window.location.href = "/tools/cost-calculator"),
    },
    {
      title: "Price Trends",
      description: "Analyze pricing trends over time",
      icon: TrendingUp,
      action: () => (window.location.href = "/tools/price-trends"),
    },
    {
      title: "Provider Benchmarking",
      description: "Compare hospital performance",
      icon: BarChart3,
      action: () => (window.location.href = "/tools/benchmark"),
    },
    {
      title: "Data Explorer",
      description: "Advanced data analysis tools",
      icon: Search,
      action: () => (window.location.href = "/tools/data-explorer"),
    },
  ];

  const insightsItems = [
    {
      title: "Shocking Healthcare Truths",
      description: "Hidden fees and pricing secrets revealed",
      icon: Lightbulb,
      action: () => (window.location.href = "/insights/truths"),
    },
    {
      title: "Data Visualizations",
      description: "Interactive charts and graphs",
      icon: ChartBar,
      action: () => (window.location.href = "/insights/visualizations"),
    },
    {
      title: "State & National Comparisons",
      description: "Regional healthcare cost analysis",
      icon: MapPin,
      action: () => (window.location.href = "/insights/comparisons"),
    },
  ];

  const whoWeHelpItems = [
    // Patients & Families section
    {
      section: "Patients & Families",
      items: [
        {
          title: "For Patients",
          description: "Individual healthcare cost guidance",
          icon: Users2,
          action: () => (window.location.href = "/who-we-help/patients"),
        },
        {
          title: "For Expecting Parents",
          description: "Pregnancy and childbirth cost planning",
          icon: Baby,
          action: () =>
            (window.location.href = "/who-we-help/expecting-parents"),
        },
        {
          title: "For Caregivers",
          description: "Support for family caregivers",
          icon: HandHeart,
          action: () => (window.location.href = "/who-we-help/caregivers"),
        },
        {
          title: "For Elective Procedure Shoppers",
          description: "Compare costs for planned procedures",
          icon: ShoppingCart,
          action: () =>
            (window.location.href = "/who-we-help/elective-shoppers"),
        },
      ],
    },
    // Industry & Data Buyers section
    {
      section: "Industry & Data Buyers",
      items: [
        {
          title: "For Insurance Providers",
          description: "Network cost analysis and insights",
          icon: Shield,
          action: () =>
            (window.location.href = "/who-we-help/insurance-providers"),
        },
        {
          title: "For Hospitals",
          description: "Market position and competitive analysis",
          icon: Hospital,
          action: () => (window.location.href = "/who-we-help/hospitals"),
        },
        {
          title: "For Financial Tools",
          description: "API access and data integration",
          icon: DollarSign,
          action: () => (window.location.href = "/who-we-help/financial-tools"),
        },
        {
          title: "For Researchers",
          description: "Academic and policy research data",
          icon: GraduationCap,
          action: () => (window.location.href = "/who-we-help/researchers"),
        },
        {
          title: "For Policymakers",
          description: "Healthcare policy insights",
          icon: Scale,
          action: () => (window.location.href = "/who-we-help/policymakers"),
        },
        {
          title: "For Journalists",
          description: "Healthcare reporting resources",
          icon: Newspaper,
          action: () => (window.location.href = "/who-we-help/journalists"),
        },
        {
          title: "For Healthtech & Data Buyers",
          description: "Healthcare technology integration",
          icon: Cpu,
          action: () => (window.location.href = "/who-we-help/healthtech"),
        },
      ],
    },
  ];

  const navigation = [
    {
      name: "Explore Data",
      href: "#",
      action: () => (window.location.href = "/search-procedure"),
      hasDropdown: true,
      dropdownItems: exploreDataItems,
      isActive:
        currentPage === "exploreProcedure" ||
        currentPage === "exploreLocation" ||
        currentPage === "exploreInsurance" ||
        currentPage === "exploreCondition",
    },
    {
      name: "Tools",
      href: "#",
      action: () => (window.location.href = "/tools/cost-calculator"),
      hasDropdown: true,
      dropdownItems: toolsItems,
      isActive:
        currentPage === "tools" ||
        (currentPage && currentPage.startsWith("tools")),
    },
    {
      name: "Insights & Comparisons",
      href: "#",
      action: () => (window.location.href = "/insights"),
      hasDropdown: true,
      dropdownItems: insightsItems,
      isActive: currentPage === "insights" || currentPage === "comparisons",
    },
    {
      name: "Who We Help",
      href: "#",
      action: () => (window.location.href = "/who-we-help/patients"),
      hasDropdown: true,
      dropdownItems: whoWeHelpItems,
      isActive: currentPage && currentPage.startsWith("whoWeHelp"),
    },
  ];

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleNavClick = (item: any) => {
    if (item.hasDropdown) {
      handleDropdownToggle(item.name);
    } else {
      item.action();
      setActiveDropdown(null);
    }
  };

  const renderWhoWeHelpDropdown = () => (
    <div
      className="absolute top-full left-0 mt-1 w-96 bg-white dark:bg-gray-900 border border-border rounded-lg shadow-lg z-50"
      style={{
        backgroundColor: "white",
        backdropFilter: "none",
        opacity: 1,
      }}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="p-4">
        {whoWeHelpItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className={sectionIndex > 0 ? "mt-6" : ""}>
            <h4 className="text-sm font-semibold text-primary mb-3 border-b border-border pb-2">
              {section.section}
            </h4>
            <div className="space-y-1">
              {section.items.map((subItem, index) => (
                <button
                  key={index}
                  onClick={() => {
                    subItem.action();
                    setActiveDropdown(null);
                  }}
                  className="w-full flex items-start gap-3 p-2.5 rounded-md hover:bg-muted/80 transition-colors text-left"
                >
                  <subItem.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {subItem.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {subItem.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStandardDropdown = (items: any[]) => (
    <div
      className="absolute top-full left-0 mt-1 w-72 bg-white dark:bg-gray-900 border border-border rounded-lg shadow-lg z-50"
      style={{
        backgroundColor: "white",
        backdropFilter: "none",
        opacity: 1,
      }}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="p-3">
        <div className="space-y-1">
          {items.map((subItem, index) => (
            <button
              key={index}
              onClick={() => {
                subItem.action();
                setActiveDropdown(null);
              }}
              className="w-full flex items-start gap-3 p-2.5 rounded-md hover:bg-muted/80 transition-colors text-left"
            >
              <subItem.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  {subItem.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {subItem.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={onNavigateToHomepage}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F26f85d2832514cc28ac49695bce853f0%2Ffca03c44f2de46159212f8e2be0bf844?format=webp&width=800"
                alt="Hospital Fees Logo"
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">
                <span className="text-primary">Health</span>
                <span className="text-green">Fees</span>
                <span className="text-gray-400">.org</span>
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Button
                  variant="ghost"
                  className={`flex items-center gap-1 px-3 py-2 font-medium transition-colors text-sm ${
                    item.isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  onClick={() => handleNavClick(item)}
                  onMouseEnter={() =>
                    item.hasDropdown && setActiveDropdown(item.name)
                  }
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-3 h-3 transition-transform ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Button>

                {/* Mega Menu Dropdown */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <>
                    {item.name === "Who We Help"
                      ? renderWhoWeHelpDropdown()
                      : renderStandardDropdown(item.dropdownItems)}
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-6">
                  {/* Mobile Search */}
                  <Button
                    variant="outline"
                    onClick={() => {
                      onNavigateToInternalSearch();
                      closeMenu();
                    }}
                    className="w-full justify-start"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>

                  {/* Mobile Navigation */}
                  {navigation.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <Button
                        variant="ghost"
                        className="w-full justify-between text-left"
                        onClick={() => {
                          if (item.hasDropdown) {
                            handleDropdownToggle(item.name);
                          } else {
                            item.action();
                            closeMenu();
                          }
                        }}
                      >
                        {item.name}
                        {item.hasDropdown && (
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </Button>

                      {/* Mobile Dropdown Content */}
                      {item.hasDropdown && activeDropdown === item.name && (
                        <div className="pl-4 space-y-2">
                          {item.name === "Who We Help"
                            ? // Special handling for Who We Help in mobile
                              whoWeHelpItems.map((section, sectionIndex) => (
                                <div key={sectionIndex} className="space-y-2">
                                  <h4 className="text-sm font-semibold text-primary">
                                    {section.section}
                                  </h4>
                                  {section.items.map((subItem, index) => (
                                    <Button
                                      key={index}
                                      variant="ghost"
                                      size="sm"
                                      className="w-full justify-start text-left pl-4"
                                      onClick={() => {
                                        subItem.action();
                                        closeMenu();
                                      }}
                                    >
                                      <subItem.icon className="w-4 h-4 mr-2" />
                                      {subItem.title}
                                    </Button>
                                  ))}
                                </div>
                              ))
                            : // Standard dropdown items
                              item.dropdownItems?.map((subItem, index) => (
                                <Button
                                  key={index}
                                  variant="ghost"
                                  size="sm"
                                  className="w-full justify-start text-left"
                                  onClick={() => {
                                    subItem.action();
                                    closeMenu();
                                  }}
                                >
                                  <subItem.icon className="w-4 h-4 mr-2" />
                                  {subItem.title}
                                </Button>
                              ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
