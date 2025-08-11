import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Slider } from "./ui/slider";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Copy, Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import {
  Search,
  CheckCircle2,
  ChevronRight,
  BarChart3,
  Info,
  DollarSign,
  AlertTriangle,
  TrendingUp,
  MapPin,
  Eye,
  Star,
  Clock,
  Loader2,
  Shield,
  Tag,
  Send,
  Sparkles,
  RotateCcw,
  X,
  Activity,
} from "lucide-react";

interface SearchByProcedurePageProps {
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
  onNavigateToDisclosures: () => void;
  onCTAAssistant: () => void;
  currentPage: string;
}

export function SearchByProcedurePage({
  onCTAAssistant,
  onNavigateToDisclosures,
}: SearchByProcedurePageProps) {
  // Enhanced filter state
  const [filterProcedure, setFilterProcedure] = useState("");
  const [selectedProcedure, setSelectedProcedure] = useState<{code: string, description: string} | null>(null);
  const [filterZipCode, setFilterZipCode] = useState("");
  const [zipError, setZipError] = useState("");
  const [filterRadius, setFilterRadius] = useState("50 miles");
  const [filterPayer, setFilterPayer] = useState("All Payers");
  const [filterPlan, setFilterPlan] = useState("");
  const [showPlanField, setShowPlanField] = useState(false);
  const [coverageType, setCoverageType] = useState("in-network");
  const [isScrolled, setIsScrolled] = useState(false);
  const [loadingProviders, setLoadingProviders] = useState<Set<number>>(
    new Set(),
  );
  const [recentPriceProviders, setRecentPriceProviders] = useState<Set<number>>(
    new Set(),
  );
  const [updatedPrices, setUpdatedPrices] = useState<
    Record<
      number,
      { avgPrice: number; priceRange: string; coverageAmount: number }
    >
  >({});
  const [showPayerSuggestions, setShowPayerSuggestions] = useState(false);
  const [showPlanSuggestions, setShowPlanSuggestions] = useState(false);
  const [selectedComplianceProvider, setSelectedComplianceProvider] = useState<number | null>(null);
  const [badgeStyle, setBadgeStyle] = useState<'light' | 'dark'>('light');
  const [copiedCode, setCopiedCode] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchResults, setSearchResults] = useState<typeof sampleProviders>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Handle filter clicks
  const handlePayerFilter = (payer: string) => {
    setFilterPayer(payer);
    console.log('Filtering by payer:', payer);
  };

  // Enhanced sample data with more variety
  const allSampleProviders = [
    {
      id: 1,
      name: "Stanford Medical Center",
      location: "Palo Alto, CA – 7.2 miles away",
      procedureName: "MRI Brain without Contrast",
      cptCode: "70553",
      avgPrice: 8340,
      priceRange: "$6,700 – $10,200",
      coverageType: "In-Network",
      payer: "Blue Cross Blue Shield",
      coverageAmount: 6672,
      contextTag: "Best Price",
      comparison: "12% below state average",
      complianceLevel: "High",
      complianceScore: 92,
      isCompliant: true,
      payerComplianceScore: 88,
      payerIsCompliant: true,
    },
    {
      id: 2,
      name: "UCSF Medical Center",
      location: "San Francisco, CA – 12.4 miles away",
      procedureName: "MRI Brain without Contrast",
      cptCode: "70553",
      avgPrice: 9650,
      priceRange: "$7,800 – $12,100",
      coverageType: "In-Network",
      payer: "Aetna",
      coverageAmount: 8685,
      contextTag: "Best Match",
      comparison: "8% above state average",
      complianceLevel: "High",
      complianceScore: 88,
      isCompliant: true,
      payerComplianceScore: 91,
      payerIsCompliant: true,
    },
    {
      id: 3,
      name: "Kaiser Permanente",
      location: "San Jose, CA – 15.1 miles away",
      procedureName: "MRI Brain without Contrast",
      cptCode: "70553",
      avgPrice: 7520,
      priceRange: "$6,200 – $9,400",
      coverageType: "In-Network",
      payer: "Kaiser Permanente",
      coverageAmount: 7144,
      contextTag: "Best Match",
      comparison: "18% below state average",
      complianceLevel: "Medium",
      complianceScore: 54,
      isCompliant: false,
      payerComplianceScore: 76,
      payerIsCompliant: true,
    },
    {
      id: 4,
      name: "Sutter Health",
      location: "Sacramento, CA – 22.8 miles away",
      procedureName: "MRI Brain without Contrast",
      cptCode: "70553",
      avgPrice: 8950,
      priceRange: "$7,200 – $11,500",
      coverageType: "Out-of-Network",
      payer: "UnitedHealthcare",
      coverageAmount: 5370,
      contextTag: "Closest",
      comparison: "5% above state average",
      complianceLevel: "High",
      complianceScore: 95,
      isCompliant: true,
      payerComplianceScore: 82,
      payerIsCompliant: true,
    },
    {
      id: 5,
      name: "Alta Bates Summit Medical Center",
      location: "Berkeley, CA – 18.6 miles away",
      procedureName: "CT Chest without Contrast",
      cptCode: "71250",
      avgPrice: 1250,
      priceRange: "$950 – $1,650",
      coverageType: "In-Network",
      payer: "Cigna",
      coverageAmount: 1000,
      contextTag: "Best Price",
      comparison: "25% below state average",
      complianceLevel: "Medium",
      complianceScore: 67,
      isCompliant: false,
      payerComplianceScore: 73,
      payerIsCompliant: true,
    },
    {
      id: 6,
      name: "California Pacific Medical Center",
      location: "San Francisco, CA – 14.8 miles away",
      procedureName: "MRI Brain without Contrast",
      cptCode: "70553",
      avgPrice: 9120,
      priceRange: "$7,400 – $11,800",
      coverageType: "In-Network",
      payer: "Aetna",
      coverageAmount: 8208,
      contextTag: "Good Value",
      comparison: "3% above state average",
      complianceLevel: "High",
      complianceScore: 85,
      isCompliant: true,
      payerComplianceScore: 89,
      payerIsCompliant: true,
    },
    {
      id: 7,
      name: "Mills-Peninsula Medical Center",
      location: "Burlingame, CA – 16.3 miles away",
      procedureName: "MRI Brain without Contrast",
      cptCode: "70553",
      avgPrice: 8890,
      priceRange: "$7,100 – $11,200",
      coverageType: "In-Network",
      payer: "Aetna",
      coverageAmount: 8001,
      contextTag: "Competitive",
      comparison: "1% above state average",
      complianceLevel: "High",
      complianceScore: 90,
      isCompliant: true,
      payerComplianceScore: 87,
      payerIsCompliant: true,
    },
    {
      id: 8,
      name: "John Muir Medical Center",
      location: "Walnut Creek, CA – 19.7 miles away",
      procedureName: "MRI Brain without Contrast",
      cptCode: "70553",
      avgPrice: 9340,
      priceRange: "$7,600 – $11,900",
      coverageType: "In-Network",
      payer: "Aetna",
      coverageAmount: 8406,
      contextTag: "Good Option",
      comparison: "6% above state average",
      complianceLevel: "Medium",
      complianceScore: 78,
      isCompliant: true,
      payerComplianceScore: 85,
      payerIsCompliant: true,
    },
  ];

  // Filter results based on current criteria
  const filterResults = (providers: typeof allSampleProviders) => {
    return providers.filter(provider => {
      // Filter by procedure if selected
      if (filterProcedure) {
        const procedureMatch = provider.procedureName.toLowerCase().includes(filterProcedure.toLowerCase()) ||
                              provider.cptCode.includes(filterProcedure) ||
                              filterProcedure.toLowerCase().includes(provider.procedureName.toLowerCase()) ||
                              filterProcedure.includes(provider.cptCode);
        if (!procedureMatch) {
          return false;
        }
      }

      // Filter by payer if selected (skip if "All Payers" is selected)
      if (filterPayer && filterPayer !== "All Payers" && provider.payer !== filterPayer) {
        return false;
      }

      // Filter by coverage type
      if (coverageType !== 'cash' && provider.coverageType.toLowerCase().replace('-', '') !== coverageType.replace('-', '')) {
        return false;
      }

      return true;
    });
  };

  // Handle main search submission
  const handleMainSearch = () => {
    setIsSearching(true);

    // Simulate API call delay
    setTimeout(() => {
      const results = filterResults(allSampleProviders);
      setSearchResults(results);
      setHasSearched(true);
      setIsSearching(false);

      // Scroll to price summary section after search completes
      setTimeout(() => {
        priceSummaryRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }, 200);
    }, 1000);
  };

  // Handle sidebar filter submission
  const handleSidebarFilter = () => {
    if (!hasSearched) return;

    setIsSearching(true);

    // Simulate filter update delay
    setTimeout(() => {
      const results = filterResults(allSampleProviders);
      setSearchResults(results);
      setIsSearching(false);
    }, 500);
  };

  // Grade calculation function
  const getGradeFromScore = (score: number): string => {
    if (score >= 90) return 'A+';
    if (score >= 85) return 'A';
    if (score >= 75) return 'B';
    if (score >= 65) return 'C';
    return 'D';
  };

  // Grade chip styling function
  const getGradeChipStyles = (grade: string) => {
    switch (grade) {
      case 'A':
      case 'A+':
        return 'bg-green-600 text-white';
      case 'B':
        return 'bg-amber-500 text-white';
      case 'C':
      case 'D':
      default:
        return 'bg-red-600 text-white';
    }
  };

  // Grade chip component with conditional colors
  const GradeChip = ({ score, ariaLabel, tooltip, isProvider }: {
    score: number;
    ariaLabel: string;
    tooltip: string;
    isProvider: boolean;
  }) => {
    const grade = getGradeFromScore(score);

    const getChipColor = (grade: string) => {
      switch (grade) {
        case 'A':
        case 'A+':
          return '#00A651'; // Green
        case 'B':
        case 'B+':
          return '#F59E0B'; // Yellow/Amber
        case 'C':
        case 'C+':
          return '#F97316'; // Orange
        case 'D':
        case 'F':
        default:
          return '#EF4444'; // Red
      }
    };

    const getComplianceLevel = (grade: string) => {
      switch (grade) {
        case 'A':
        case 'A+':
          return 'high compliance';
        case 'B':
        case 'B+':
          return 'good compliance';
        case 'C':
        case 'C+':
          return 'fair compliance';
        case 'D':
        case 'F':
        default:
          return 'low compliance';
      }
    };

    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            className="inline-flex items-center px-2 py-1 rounded text-xs font-medium text-white cursor-pointer"
            style={{
              backgroundColor: getChipColor(grade),
              height: '20px'
            }}
            aria-label={`${grade} rating, ${getComplianceLevel(grade)}`}
          >
            {grade}
            <span className="sr-only">{getComplianceLevel(grade)}</span>
          </span>
        </TooltipTrigger>
        <TooltipContent className="bg-gray-900 text-white max-w-xs">
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    );
  };

  const handleCoverageFilter = (coverage: string) => {
    setCoverageType(coverage.toLowerCase());
    console.log('Filtering by coverage:', coverage);
  };

  // ZIP code validation
  const validateZipCode = (zip: string) => {
    const zipRegex = /^\d{5}$/;
    if (!zip) {
      setZipError("");
      return true;
    }
    if (!zipRegex.test(zip)) {
      setZipError("Enter a valid 5-digit ZIP code");
      return false;
    }
    setZipError("");
    return true;
  };

  // Coverage type change handler
  const handleCoverageTypeChange = (type: string) => {
    setCoverageType(type);
    if (type === 'cash') {
      setFilterPayer("");
      setFilterPlan("");
      setShowPlanField(false);
    } else if (type === 'in-network' && filterPayer) {
      // Show plan field if payer is selected
      setShowPlanField(true);
    } else if (type === 'out-of-network') {
      setFilterPlan("");
      setShowPlanField(false);
    }
  };

  // Payer selection handler
  const handlePayerSelection = (payer: string) => {
    setFilterPayer(payer);
    if (coverageType === 'cash') {
      setCoverageType('in-network');
    }
    if (['Medicare', 'Medicaid'].includes(payer)) {
      setCoverageType('in-network');
    }
    setShowPlanField(coverageType !== 'out-of-network');
  };

  // Clear all filters
  const clearAllFilters = () => {
    setFilterProcedure("");
    setMainProcedureInput("");
    setSidebarProcedureInput("");
    setSelectedProcedure(null);
    setFilterZipCode("");
    setZipError("");
    setFilterRadius("");
    setFilterPayer("");
    setFilterPlan("");
    setShowPlanField(false);
    setCoverageType("cash");
  };

  // Active filters for chips
  const getActiveFilters = () => {
    const filters = [];
    if (selectedProcedure) {
      filters.push({type: 'procedure', label: `${selectedProcedure.code} ${selectedProcedure.description}`, value: selectedProcedure});
    }
    if (filterZipCode && !zipError) {
      filters.push({type: 'location', label: filterZipCode, value: filterZipCode});
    }
    if (filterRadius) {
      filters.push({type: 'radius', label: filterRadius, value: filterRadius});
    }
    if (filterPayer) {
      filters.push({type: 'payer', label: filterPayer, value: filterPayer});
    }
    if (filterPlan) {
      filters.push({type: 'plan', label: filterPlan, value: filterPlan});
    }
    if (coverageType !== 'cash') {
      const typeLabel = coverageType === 'in-network' ? 'In-Network' : 'Out-of-Network';
      filters.push({type: 'coverage', label: typeLabel, value: coverageType});
    }
    return filters;
  };

  // Remove active filter
  const removeFilter = (type: string) => {
    switch (type) {
      case 'procedure':
        setFilterProcedure("");
        setMainProcedureInput("");
        setSidebarProcedureInput("");
        setSelectedProcedure(null);
        break;
      case 'location':
        setFilterZipCode("");
        break;
      case 'radius':
        setFilterRadius("");
        break;
      case 'payer':
        setFilterPayer("");
        setShowPlanField(false);
        break;
      case 'plan':
        setFilterPlan("");
        break;
      case 'coverage':
        setCoverageType("cash");
        break;
    }
  };

  // Generate embed code for a provider
  const generateEmbedCode = (provider: any, style: 'light' | 'dark') => {
    const entityId = `HFO-${provider.id.toString().padStart(5, '0')}`;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';

    return {
      script: `<!-- HealthFees.org Compliance Rating Badge -->
<div id="hfo-badge"></div>
<script
  src="https://cdn.healthfees.org/badge/v1.js"
  async
  data-entity-type="provider"
  data-entity-id="${entityId}"
  data-style="${style}"
  data-token="${token}">
</script>`,
      iframe: `<iframe
  title="HealthFees.org Compliance Rating"
  src="https://badge.healthfees.org/embed?entity=provider&id=${entityId}&style=${style}&token=${token}"
  width="280"
  height="180"
  loading="lazy"
  referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin">
</iframe>`
    };
  };

  const handleCopyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  // Predefined payers list
  const predefinedPayers = [
    // Commercial
    { name: "Aetna", type: "commercial" },
    { name: "Anthem", type: "commercial" },
    { name: "Blue Cross Blue Shield", type: "commercial" },
    { name: "Cigna", type: "commercial" },
    { name: "Humana", type: "commercial" },
    { name: "Kaiser Permanente", type: "commercial" },
    { name: "UnitedHealthcare", type: "commercial" },
    { name: "Molina Healthcare", type: "commercial" },
    { name: "Centene", type: "commercial" },
    { name: "WellCare", type: "commercial" },
    // Public
    { name: "Medicare", type: "public" },
    { name: "Medicaid", type: "public" },
    // Other
    { name: "Self-Pay", type: "other" },
  ];

  // Predefined plans (conditional on payer)
  const predefinedPlans = {
    "Aetna": ["Aetna PPO", "Aetna HMO", "Aetna Open Access"],
    "Blue Cross Blue Shield": ["Blue Shield Silver 70", "Blue Shield Gold", "Blue Shield Bronze"],
    "Cigna": ["Cigna PPO", "Cigna HMO", "Cigna Open Access Plus"],
    "UnitedHealthcare": ["United Choice Plus", "United Navigate", "United Select Plus"],
  };

  // Predefined procedures list
  const predefinedProcedures = [
    { name: "MRI Brain without Contrast", code: "70553" },
    { name: "MRI Brain with Contrast", code: "70554" },
    { name: "MRI Lumbar Spine without Contrast", code: "72148" },
    { name: "CT Chest without Contrast", code: "71250" },
    { name: "CT Abdomen and Pelvis with Contrast", code: "74177" },
    { name: "Colonoscopy with Biopsy", code: "45380" },
    { name: "Colonoscopy Screening", code: "45378" },
    { name: "Echocardiogram Complete", code: "93306" },
    { name: "Upper Endoscopy Diagnostic", code: "43235" },
    { name: "Mammography Screening", code: "77057" },
    { name: "X-ray Chest Single View", code: "71045" },
    { name: "Ultrasound Abdomen Complete", code: "76700" },
    { name: "Knee Arthroscopy with Meniscectomy", code: "29881" },
    { name: "Cataract Surgery", code: "66984" },
    { name: "Hip Replacement Total", code: "27130" },
    { name: "Appendectomy Laparoscopic", code: "44970" },
    { name: "Gallbladder Removal Laparoscopic", code: "47562" },
    { name: "Stress Test Cardiovascular", code: "93015" },
    { name: "Sleep Study", code: "95810" },
    { name: "Blood Test Complete Metabolic Panel", code: "80053" },
  ];

  // State for procedure input suggestions
  const [showMainProcedureSuggestions, setShowMainProcedureSuggestions] = useState(false);
  const [showSidebarProcedureSuggestions, setShowSidebarProcedureSuggestions] = useState(false);
  const [mainProcedureInput, setMainProcedureInput] = useState("");
  const [sidebarProcedureInput, setSidebarProcedureInput] = useState("");

  // AI Chat state
  const [chatMessages, setChatMessages] = useState<Array<{id: string, type: 'user' | 'bot', content: string, timestamp: Date}>>([{
    id: 'greeting',
    type: 'bot',
    content: 'Hi there 👋 — I can help you find the best prices for your care. You can ask me something like:\n\n• Find knee replacement prices near me\n• Show providers for Aetna in Chicago\n• List cash prices for MRI in 90001',
    timestamp: new Date()
  }]);
  const [chatInput, setChatInput] = useState("");
  const [isAITyping, setIsAITyping] = useState(false);
  const [userLockedFields, setUserLockedFields] = useState<Set<string>>(new Set());
  const [aiSuggestions, setAiSuggestions] = useState<Record<string, {value: string, show: boolean}>>({});
  const [pulseFields, setPulseFields] = useState<Set<string>>(new Set());
  const [initialState, setInitialState] = useState<any>(null);

  // Refs for scrolling
  const chatbotRef = React.useRef<HTMLDivElement>(null);
  const priceSummaryRef = React.useRef<HTMLElement>(null);
  const chatMessagesRef = React.useRef<HTMLDivElement>(null);

  // Example prompts for the carousel
  const examplePrompts = [
    "Find knee replacement prices near me",
    "Show providers for Aetna in Chicago",
    "List cash prices for MRI in 90001"
  ];

  // Filter procedures based on input
  const getFilteredProcedures = (input: string) => {
    if (!input.trim()) return predefinedProcedures;
    const searchTerm = input.toLowerCase();
    return predefinedProcedures.filter(proc =>
      proc.name.toLowerCase().includes(searchTerm) ||
      proc.code.includes(searchTerm)
    );
  };

  // Save initial state on mount
  React.useEffect(() => {
    if (!initialState) {
      setInitialState({
        filterProcedure: "",
        filterZipCode: "",
        filterRadius: "",
        filterPayer: "",
        filterPlan: "",
        coverageType: "",
        showPlanField: false
      });
    }
  }, []);

  // Auto-scroll chat to bottom when new messages arrive
  const scrollToBottom = () => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  };

  // Scroll to bottom when messages change or AI is typing
  React.useEffect(() => {
    scrollToBottom();
  }, [chatMessages, isAITyping]);

  // Pulse effect for AI-updated fields
  const triggerPulse = (fieldName: string) => {
    setPulseFields(prev => new Set(prev).add(fieldName));
    setTimeout(() => {
      setPulseFields(prev => {
        const newSet = new Set(prev);
        newSet.delete(fieldName);
        return newSet;
      });
    }, 1200);
  };

  // AI Chat handlers
  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      type: 'user' as const,
      content: chatInput.trim(),
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setChatInput("");
    setIsAITyping(true);

    // Scroll to chatbot after user submits query
    setTimeout(() => {
      chatbotRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }, 100);

    // Process AI message immediately without delay
    const aiResponse = processAIMessage(userMessage.content);
    const botMessage = {
      id: (Date.now() + 1).toString(),
      type: 'bot' as const,
      content: aiResponse.message,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, botMessage]);
    setIsAITyping(false);

    // Apply AI suggestions to filters immediately
    applyAISuggestions(aiResponse.filters);
  };

  // Process AI message and extract filters (enhanced recognition)
  const processAIMessage = (message: string) => {
    const lowerMessage = message.toLowerCase();
    const filters: Record<string, string> = {};
    let responseMessage = "I found some search criteria in your message.";
    const updates: string[] = [];

    // Extract ZIP code (5 digits)
    const zipMatch = message.match(/\b\d{5}\b/);
    if (zipMatch) {
      filters.zipCode = zipMatch[0];
      updates.push(`Set location to ZIP ${zipMatch[0]}`);
    }

    // Extract city/state patterns
    const cityStatePatterns = [
      /in\s+([a-z\s]+),?\s*([a-z]{2})/i,
      /near\s+([a-z\s]+)/i,
      /(chicago|los angeles|new york|boston|miami|seattle|denver|atlanta)/i
    ];

    cityStatePatterns.forEach(pattern => {
      const match = message.match(pattern);
      if (match && !filters.zipCode) {
        updates.push(`Looking for providers near ${match[1] || match[0]}`);
      }
    });

    // Extract procedures with better matching
    predefinedProcedures.forEach(proc => {
      const procNameWords = proc.name.toLowerCase().split(' ');
      const hasAllWords = procNameWords.every(word =>
        lowerMessage.includes(word) && word.length > 2
      );

      if (hasAllWords ||
          lowerMessage.includes(proc.name.toLowerCase()) ||
          lowerMessage.includes(proc.code) ||
          message.includes(proc.code)) {
        filters.procedure = `${proc.name} (${proc.code})`;
        updates.push(`Looking for ${proc.name}`);
      }
    });

    // Extract common procedure keywords
    const procedureKeywords = {
      'knee replacement': 'Hip Replacement Total (27130)',
      'mri': 'MRI Brain without Contrast (70553)',
      'ct scan': 'CT Chest without Contrast (71250)',
      'colonoscopy': 'Colonoscopy Screening (45378)',
      'mammogram': 'Mammography Screening (77057)',
      'x-ray': 'X-ray Chest Single View (71045)',
      'ultrasound': 'Ultrasound Abdomen Complete (76700)',
      'cataract': 'Cataract Surgery (66984)',
      'appendectomy': 'Appendectomy Laparoscopic (44970)',
      'gallbladder': 'Gallbladder Removal Laparoscopic (47562)'
    };

    Object.entries(procedureKeywords).forEach(([keyword, procedureValue]) => {
      if (lowerMessage.includes(keyword) && !filters.procedure) {
        filters.procedure = procedureValue;
        updates.push(`Looking for ${procedureValue.split(' (')[0]}`);
      }
    });

    // Extract payers with better matching
    predefinedPayers.forEach(payer => {
      const payerWords = payer.name.toLowerCase().split(' ');
      if (payerWords.some(word => lowerMessage.includes(word) && word.length > 3) ||
          lowerMessage.includes(payer.name.toLowerCase())) {
        filters.payer = payer.name;
        updates.push(`Using ${payer.name} insurance`);
      }
    });

    // Extract coverage type with better patterns
    if (lowerMessage.includes('cash') || lowerMessage.includes('self pay') || lowerMessage.includes('no insurance')) {
      filters.coverageType = 'cash';
      updates.push("Looking at cash prices");
    } else if (lowerMessage.includes('out of network') || lowerMessage.includes('out-of-network')) {
      filters.coverageType = 'out-of-network';
      updates.push("Searching out-of-network providers");
    } else if (lowerMessage.includes('in network') || lowerMessage.includes('in-network') ||
               (lowerMessage.includes('insurance') && !lowerMessage.includes('no insurance'))) {
      filters.coverageType = 'in-network';
      updates.push("Searching in-network providers");
    }

    // Build response message
    if (updates.length > 0) {
      responseMessage = updates.join('. ') + '.';
    } else {
      responseMessage = "I understand you're looking for healthcare pricing information. Try being more specific about the procedure, location, or insurance details you'd like to search for.";
    }

    return { message: responseMessage, filters };
  };

  // Apply AI suggestions to filters
  const applyAISuggestions = (suggestions: Record<string, string>) => {
    let updatedFilters = false;

    Object.entries(suggestions).forEach(([field, value]) => {
      if (!userLockedFields.has(field)) {
        switch (field) {
          case 'zipCode':
            setFilterZipCode(value);
            updatedFilters = true;
            break;
          case 'procedure':
            setFilterProcedure(value);
            setMainProcedureInput(value);
            setSidebarProcedureInput(value);
            updatedFilters = true;
            break;
          case 'payer':
            setFilterPayer(value);
            updatedFilters = true;
            break;
          case 'coverageType':
            setCoverageType(value);
            if (value === 'cash') {
              setFilterPayer("");
              setFilterPlan("");
              setShowPlanField(false);
            }
            updatedFilters = true;
            break;
        }

        // Announce change for accessibility
        const announcement = `${field} set to ${value} by AI suggestion`;
        console.log('Screen reader announcement:', announcement);
      } else {
        // Show suggestion chip for locked fields
        setAiSuggestions(prev => ({
          ...prev,
          [field]: { value, show: true }
        }));
      }
    });

    // Auto-trigger search immediately if we have minimum criteria
    const hasMinimumCriteria = suggestions.procedure &&
      (suggestions.zipCode || suggestions.coverageType || filterZipCode || coverageType);

    if (hasMinimumCriteria && updatedFilters) {
      // Trigger search immediately
      setIsSearching(true);

      // Simulate API call delay
      setTimeout(() => {
        const results = filterResults(allSampleProviders);
        setSearchResults(results);
        setHasSearched(true);
        setIsSearching(false);

        // Scroll directly to price summary section (same as Search Prices button)
        setTimeout(() => {
          priceSummaryRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }, 200);
      }, 1000);
    }
  };

  // Handle example prompt click
  const handleExamplePrompt = (prompt: string) => {
    setChatInput(prompt);
    // Focus the chat input
    setTimeout(() => {
      const chatInputEl = document.querySelector('[data-chat-input]') as HTMLInputElement;
      if (chatInputEl) {
        chatInputEl.focus();
      }
    }, 100);
  };

  // Lock field when user manually edits
  const lockField = (fieldName: string) => {
    setUserLockedFields(prev => new Set(prev).add(fieldName));
  };

  // Revert to initial state
  const handleRevert = () => {
    if (initialState) {
      setFilterProcedure(initialState.filterProcedure);
      setFilterZipCode(initialState.filterZipCode);
      setFilterRadius(initialState.filterRadius);
      setFilterPayer(initialState.filterPayer);
      setFilterPlan(initialState.filterPlan);
      setCoverageType(initialState.coverageType);
      setShowPlanField(initialState.showPlanField);
      setMainProcedureInput("");
      setSidebarProcedureInput("");
      setUserLockedFields(new Set());
      setAiSuggestions({});
    }
  };

  // Handle procedure selection
  const handleMainProcedureSelect = (proc: { name: string; code: string }) => {
    const formattedValue = `${proc.name} (${proc.code})`;
    setMainProcedureInput(formattedValue);
    setSidebarProcedureInput(formattedValue);
    setFilterProcedure(formattedValue);
    setShowMainProcedureSuggestions(false);
  };

  const handleSidebarProcedureSelect = (proc: { name: string; code: string }) => {
    const formattedValue = `${proc.name} (${proc.code})`;
    setFilterProcedure(formattedValue);
    setMainProcedureInput(formattedValue);
    setSidebarProcedureInput(formattedValue);
    setShowSidebarProcedureSuggestions(false);
  };

  // Filter procedures based on search input
  const filteredProcedures = predefinedProcedures.filter(
    (proc) =>
      proc.name.toLowerCase().includes(filterProcedure.toLowerCase()) ||
      proc.code.includes(filterProcedure),
  );

  // Handle getting current price with Cloudflare turnstile validation
  const handleGetCurrentPrice = async (providerId: number) => {
    try {
      // Add to loading set
      setLoadingProviders((prev) => new Set(prev).add(providerId));

      // Simulate Cloudflare Turnstile validation
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate fetching most recent price
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Generate updated pricing (simulate new pricing data)
      const provider = sampleProviders.find((p) => p.id === providerId);
      if (provider) {
        const updatedAvgPrice = Math.floor(
          provider.avgPrice * (0.95 + Math.random() * 0.1),
        ); // +/-5% variation
        const updatedCoverageAmount = Math.floor(updatedAvgPrice * 0.85); // Recalculate coverage
        const lowerRange = Math.floor(updatedAvgPrice * 0.8);
        const upperRange = Math.floor(updatedAvgPrice * 1.2);

        setUpdatedPrices((prev) => ({
          ...prev,
          [providerId]: {
            avgPrice: updatedAvgPrice,
            priceRange: `$${lowerRange.toLocaleString()} – $${upperRange.toLocaleString()}`,
            coverageAmount: updatedCoverageAmount,
          },
        }));
      }

      // Remove from loading and add to recent price providers
      setLoadingProviders((prev) => {
        const newSet = new Set(prev);
        newSet.delete(providerId);
        return newSet;
      });
      setRecentPriceProviders((prev) => new Set(prev).add(providerId));
    } catch (error) {
      // Handle error - remove from loading
      setLoadingProviders((prev) => {
        const newSet = new Set(prev);
        newSet.delete(providerId);
        return newSet;
      });
    }
  };

  // Calculate price range from search results
  const displayProviders = hasSearched ? searchResults : [];
  const allPrices = displayProviders.map((p) => p.avgPrice);
  const minPrice = allPrices.length > 0 ? Math.min(...allPrices) : 0;
  const maxPrice = allPrices.length > 0 ? Math.max(...allPrices) : 0;
  const priceRange = allPrices.length > 0 ? `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}` : "$0 - $0";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* 1. Hero with AI Chat + Filter Controls Above the Fold */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.05),transparent_50%)] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          {/* Optimized Hero Content */}
          <div className="text-center mb-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-gray-900 tracking-tight">
              Find Real-World Healthcare Prices{" "}
              <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Instantly
              </span>
            </h1>
            <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed font-light mb-2">
              Ask our AI to search billions of federally mandated hospital and insurer prices. Compare cash, in-network, and out-of-network rates side by side—updated monthly.
            </p>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-50 border border-green-200 mt-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-600 mr-2" />
              <span className="text-green-800 font-medium text-xs">
                Powered by government-mandated data. Updated monthly.
              </span>
            </div>
          </div>

          {/* AI Chat (Primary) + Filter Controls (Secondary) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Column: AI Chat Panel (60% - 3 columns) */}
            <div className="lg:col-span-3 space-y-4">
              {/* Chat Container - Enhanced for Primary Focus */}
              <div
                ref={chatbotRef}
                className="bg-gradient-to-br from-teal-50 via-blue-50/50 to-indigo-50/30 backdrop-blur-xl border-2 border-teal-200/50 rounded-3xl shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 p-4 h-[580px] flex flex-col relative overflow-hidden"
              >
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-blue-500/5 rounded-3xl"></div>
                {/* Enhanced Header with Divider */}
                <div className="relative z-10 pb-3 border-b border-teal-100/50">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Activity className="w-6 h-6 text-teal-600" />
                      <div className="absolute inset-0 animate-pulse">
                        <Activity className="w-6 h-6 text-teal-400 opacity-40" />
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">AI Price Assistant</h2>
                  </div>
                </div>

                {/* Chat Messages */}
                <div
                  ref={chatMessagesRef}
                  className="relative z-10 flex-1 overflow-y-auto my-4 space-y-3"
                >

                  {chatMessages.map((message) => (
                    <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-md px-4 py-3 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-white text-gray-900 border border-gray-300 shadow-lg'
                          : 'bg-white/95 text-gray-900 border border-gray-200 shadow-md'
                      }`}>
                        <p className={`text-sm whitespace-pre-line ${
                          message.type === 'user' ? 'font-medium' : ''
                        }`}>{message.content}</p>
                      </div>
                    </div>
                  ))}

                  {isAITyping && (
                    <div className="flex justify-start">
                      <div className="bg-white/95 text-gray-900 border border-gray-200 px-4 py-3 rounded-2xl shadow-md">
                        <div className="flex items-center space-x-2">
                          <Activity className="w-3 h-3 text-teal-500 animate-pulse" />
                          <div className="flex space-x-1">
                            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce"></div>
                            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Enhanced Chat Input with Gradient Heartbeat Icon */}
                <div className="relative z-10 flex items-center gap-0">
                  <Input
                    data-chat-input
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type a question to find the best healthcare prices…"
                    className="flex-1 h-12 bg-white/95 border-2 border-teal-200 rounded-l-xl rounded-r-none focus:border-teal-500 placeholder:text-gray-500 text-base shadow-lg pr-0"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!chatInput.trim() || isAITyping}
                    className={`h-12 text-white rounded-r-xl px-4 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-l-0 border-teal-200 hover:border-teal-500 group relative overflow-hidden ${
                      chatInput.trim() || isAITyping
                        ? 'bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 hover:from-teal-700 hover:via-blue-700 hover:to-indigo-700'
                        : 'bg-gradient-to-r from-teal-400 via-teal-500 to-blue-500 hover:from-teal-500 hover:via-blue-500 hover:to-indigo-500 animate-pulse'
                    }`}
                  >
                    <Activity className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column: Filter Panel (40% - 2 columns) */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-base font-semibold text-gray-700 mb-4">Manual Search Filters</h3>

              {/* Procedure Filter */}
              <div className="space-y-2">
                <div className="relative">
                  <Input
                    placeholder="Search by procedure or code"
                    value={mainProcedureInput}
                    onChange={(e) => {
                      setMainProcedureInput(e.target.value);
                      setSidebarProcedureInput(e.target.value);
                      setShowMainProcedureSuggestions(e.target.value.length > 0);
                      lockField('procedure');
                    }}
                    onFocus={() => setShowMainProcedureSuggestions(mainProcedureInput.length > 0)}
                    onBlur={() => setTimeout(() => setShowMainProcedureSuggestions(false), 200)}
                    className={`h-10 rounded-lg border-2 transition-all duration-300 ${
                      pulseFields.has('procedure')
                        ? 'border-blue-500 bg-blue-50 animate-pulse'
                        : 'border-gray-200 focus:border-blue-500'
                    } placeholder:text-gray-400`}
                  />

                  {/* AI Suggestion Chip */}
                  {aiSuggestions.procedure?.show && (
                    <div className="absolute -top-8 left-0 flex items-center space-x-2 bg-yellow-100 border border-yellow-300 rounded-lg px-3 py-1 text-sm">
                      <span>AI suggested: {aiSuggestions.procedure.value}</span>
                      <button className="text-green-600 hover:text-green-800">✓</button>
                      <button
                        onClick={() => setAiSuggestions(prev => ({...prev, procedure: {...prev.procedure!, show: false}}))}
                        className="text-red-600 hover:text-red-800"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  )}

                  {/* Procedure Suggestions */}
                  {showMainProcedureSuggestions && (
                    <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {getFilteredProcedures(mainProcedureInput).map((proc) => (
                        <button
                          key={proc.code}
                          type="button"
                          onClick={() => handleMainProcedureSelect(proc)}
                          className="w-full px-3 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none border-b border-gray-100 last:border-b-0"
                        >
                          <div className="font-medium text-gray-900 text-sm">{proc.name}</div>
                          <div className="text-xs text-gray-500 font-mono">CPT: {proc.code}</div>
                        </button>
                      ))}
                      {getFilteredProcedures(mainProcedureInput).length === 0 && (
                        <div className="px-3 py-2 text-gray-500 text-center text-sm">No procedures found</div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* ZIP Code and Radius Filter Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Input
                    placeholder="Enter ZIP"
                    value={filterZipCode}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').slice(0, 5);
                      setFilterZipCode(value);
                      lockField('zipCode');
                    }}
                    onBlur={() => validateZipCode(filterZipCode)}
                    className={`h-10 rounded-lg border-2 transition-all duration-300 ${
                      pulseFields.has('zipCode')
                        ? 'border-blue-500 bg-blue-50 animate-pulse'
                        : zipError ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
                    } placeholder:text-gray-400`}
                    maxLength={5}
                  />
                  {zipError && <p className="text-xs text-red-600">{zipError}</p>}
                </div>

                <div className="space-y-1">
                  <Select
                    value={filterRadius}
                    onValueChange={(value) => {
                      setFilterRadius(value);
                      lockField('radius');
                    }}
                  >
                    <SelectTrigger className="h-10 rounded-lg border-2 border-gray-200">
                      <SelectValue placeholder="Select radius" className="placeholder:text-gray-400" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10 miles">10 miles</SelectItem>
                      <SelectItem value="25 miles">25 miles</SelectItem>
                      <SelectItem value="50 miles">50 miles</SelectItem>
                      <SelectItem value="100 miles">100 miles</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Payer and Plan Filter Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <div className="relative">
                    <Select
                      value={filterPayer}
                      onValueChange={(value) => {
                        handlePayerSelection(value);
                        lockField('payer');
                      }}
                      disabled={coverageType === 'cash'}
                    >
                      <SelectTrigger className={`h-10 rounded-lg border-2 transition-all duration-300 ${
                        pulseFields.has('payer')
                          ? 'border-blue-500 bg-blue-50 animate-pulse'
                          : 'border-gray-200'
                      } ${coverageType === 'cash' ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <SelectValue
                          placeholder={coverageType === 'cash' ? 'Not needed for cash pay' : 'All Payers'}
                          className="placeholder:text-gray-400"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All Payers">All Payers</SelectItem>
                        <div className="px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">Commercial</div>
                        {predefinedPayers.filter(p => p.type === 'commercial').map(payer => (
                          <SelectItem key={payer.name} value={payer.name}>{payer.name}</SelectItem>
                        ))}
                        <div className="px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">Public</div>
                        {predefinedPayers.filter(p => p.type === 'public').map(payer => (
                          <SelectItem key={payer.name} value={payer.name}>{payer.name}</SelectItem>
                        ))}
                        <div className="px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">Other</div>
                        {predefinedPayers.filter(p => p.type === 'other').map(payer => (
                          <SelectItem key={payer.name} value={payer.name}>{payer.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {/* AI Suggestion Chip */}
                    {aiSuggestions.payer?.show && (
                      <div className="absolute -top-8 left-0 flex items-center space-x-2 bg-yellow-100 border border-yellow-300 rounded-lg px-3 py-1 text-sm">
                        <span>AI suggested: {aiSuggestions.payer.value}</span>
                        <button className="text-green-600 hover:text-green-800">��</button>
                        <button
                          onClick={() => setAiSuggestions(prev => ({...prev, payer: {...prev.payer!, show: false}}))}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  {showPlanField ? (
                    <Select
                      value={filterPlan}
                      onValueChange={setFilterPlan}
                    >
                      <SelectTrigger className="h-10 rounded-lg border-2 border-gray-200">
                        <SelectValue placeholder="Select plan" className="placeholder:text-gray-400" />
                      </SelectTrigger>
                      <SelectContent>
                        {filterPayer && predefinedPlans[filterPayer as keyof typeof predefinedPlans]?.map(plan => (
                          <SelectItem key={plan} value={plan}>{plan}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <div className="h-10 rounded-lg border-2 border-gray-200 bg-gray-50 flex items-center px-3 text-gray-400 text-sm">
                      Plan not applicable
                    </div>
                  )}
                </div>
              </div>

              {/* Coverage Type Filter */}
              <div className="space-y-2">
                <div className={`transition-all duration-300 ${
                  pulseFields.has('coverageType') ? 'p-2 bg-blue-50 rounded-lg animate-pulse' : ''
                }`}>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        value="in-network"
                        checked={coverageType === "in-network"}
                        onChange={(e) => {
                          setCoverageType(e.target.value);
                          lockField('coverageType');
                        }}
                        className="w-3 h-3 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="ml-2 text-gray-700 font-medium text-sm">In-Network</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        value="out-of-network"
                        checked={coverageType === "out-of-network"}
                        onChange={(e) => {
                          setCoverageType(e.target.value);
                          lockField('coverageType');
                        }}
                        className="w-3 h-3 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="ml-2 text-gray-700 font-medium text-sm">Out-of-Network</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        value="cash"
                        checked={coverageType === "cash"}
                        onChange={(e) => {
                          setCoverageType(e.target.value);
                          lockField('coverageType');
                        }}
                        className="w-3 h-3 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="ml-2 text-gray-700 font-medium text-sm">Cash Price</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  onClick={handleMainSearch}
                  disabled={isSearching || !filterProcedure}
                  size="lg"
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50"
                >
                  {isSearching ? (
                    <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Searching...</>
                  ) : (
                    <><Search className="w-5 h-5 mr-2" /> Search Prices</>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Price Summary Section */}
      {hasSearched && searchResults.length > 0 && (
        <section
          ref={priceSummaryRef}
          className="py-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-6">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-1">
                    Price Range for {filterProcedure || 'Selected Procedure'} in {filterZipCode ? `ZIP ${filterZipCode}` : 'Your Area'}
                  </CardTitle>
                  <p className="text-sm text-gray-600 text-center">
                    Based on {searchResults.length} provider{searchResults.length !== 1 ? 's' : ''} in your search results
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <p className="text-xs font-semibold text-gray-600 mb-1">
                        Lowest Price
                      </p>
                      <p className="text-2xl font-bold text-green-600">${minPrice.toLocaleString()}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-semibold text-gray-600 mb-1">
                        Average Price
                      </p>
                      <p className="text-2xl font-bold text-blue-600">${Math.round((minPrice + maxPrice) / 2).toLocaleString()}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-semibold text-gray-600 mb-1">
                        Highest Price
                      </p>
                      <p className="text-2xl font-bold text-red-600">${maxPrice.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="w-full h-3 bg-gradient-to-r from-green-400 via-blue-400 to-red-400 rounded-full mb-3"></div>
                  <p className="text-xs text-gray-500 text-center">
                    Price range is calculated from your search results. Actual prices may vary based on specific procedure details and payer agreements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* 3. Provider Results and 4. Insights Sidebar */}
      {filterProcedure && (
        <section className="bg-white">
        <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Provider Results */}
            <div className="lg:col-span-2">
              <div className="sticky top-0 z-40 bg-white py-4 border-b border-gray-200 -mx-4 px-4 mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                  Provider Results
                </h1>
              </div>
              <div className="space-y-6">
                {searchResults.map((provider) => (
                  <Card
                    key={provider.id}
                    className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-2xl overflow-hidden"
                  >
                    <CardContent className="p-0">
                      {/* Row A - Header */}
                      <div className="flex items-center justify-between px-5 py-3">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">
                            {provider.name}
                          </h4>
                          <p className="text-xs text-gray-500 flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {provider.location}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div
                            className="px-3 py-1.5 rounded-full font-semibold text-sm"
                            style={{
                              background:
                                provider.contextTag === "Best Price"
                                  ? "linear-gradient(to right, #10b981, #059669)"
                                  : "#f3e8ff",
                              color:
                                provider.contextTag === "Best Price"
                                  ? "#ffffff"
                                  : "#7c3aed",
                              boxShadow:
                                provider.contextTag === "Best Price"
                                  ? "0 8px 12px -3px rgba(16, 185, 129, 0.2)"
                                  : "none",
                            }}
                          >
                            {provider.contextTag}
                          </div>
                        </div>
                      </div>

                      {/* Row B - Refined Two-Column Layout */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-4 mx-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Provider Price Column */}
                          <div className="flex flex-col space-y-3">
                            <h4 className="text-sm font-bold text-gray-900">
                              Provider Price
                            </h4>
                            <p className="text-2xl font-bold text-gray-900">
                              ${provider.avgPrice.toLocaleString()}
                            </p>

                            {/* Score Chip Only */}
                            <div className="flex items-center gap-2">
                              <GradeChip
                                score={provider.complianceScore}
                                ariaLabel={`${getGradeFromScore(provider.complianceScore)} rating, ${provider.complianceScore} out of 100`}
                                tooltip="Based on this provider's compliance with federal pricing transparency mandates. Updated periodically when new provider TiC data is available. See how we measure compliance."
                                isProvider={true}
                              />
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <button className="text-gray-400 hover:text-gray-600" aria-label="Provider Transparency Rating info">
                                    <Info className="w-3 h-3" />
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent className="bg-gray-900 text-white max-w-xs">
                                  <p>Based on this provider's compliance with federal pricing transparency mandates. Updated periodically when new provider TiC data is available. <a href="/methodology" className="underline text-blue-300">See how we measure compliance</a>.</p>
                                </TooltipContent>
                              </Tooltip>
                            </div>

                            {/* % vs State Average */}
                            <div className="flex items-center gap-2">
                              <span
                                className={`flex items-center gap-1 text-sm font-medium ${
                                  provider.comparison.includes("below")
                                    ? "text-green-700"
                                    : "text-red-700"
                                }`}
                              >
                                <span className="text-base">
                                  {provider.comparison.includes("below") ? "↓" : "↑"}
                                </span>
                                <span>
                                  {provider.comparison.match(/\d+/)?.[0]}% vs state average
                                </span>
                              </span>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <button className="text-gray-400 hover:text-gray-600" aria-label="Price vs State Average info">
                                    <Info className="w-3 h-3" />
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent className="bg-gray-900 text-white max-w-xs">
                                  <p>Compares the provider's price for this procedure to the average price across all providers in the state for the same procedure code.</p>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                          </div>

                          {/* Payer Column */}
                          <div className="flex flex-col space-y-3">
                            <div className="flex items-center gap-1">
                              <h4 className="text-sm font-bold text-gray-900">
                                {provider.payer}
                              </h4>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <button className="text-gray-400 hover:text-gray-600" aria-label="Payer Coverage info">
                                    <Info className="w-3 h-3" />
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent className="bg-gray-900 text-white max-w-xs">
                                  <p>6-month average coverage amount for this procedure with the selected payer.</p>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                            <p className="text-2xl font-bold text-gray-900">
                              $
                              {(
                                updatedPrices[provider.id]?.coverageAmount ||
                                provider.coverageAmount
                              ).toLocaleString()}
                            </p>

                            {/* Score Chip Only */}
                            <div className="flex items-center gap-2">
                              <GradeChip
                                score={provider.payerComplianceScore}
                                ariaLabel={`${getGradeFromScore(provider.payerComplianceScore)} rating, ${provider.payerComplianceScore} out of 100`}
                                tooltip="Based on this payer's compliance with federal pricing transparency mandates. Updated monthly when new payer TiC files are published. See how we measure compliance."
                                isProvider={false}
                              />
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <button className="text-gray-400 hover:text-gray-600" aria-label="Payer Transparency Rating info">
                                    <Info className="w-3 h-3" />
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent className="bg-gray-900 text-white max-w-xs">
                                  <p>Based on this payer's compliance with federal pricing transparency mandates. Updated monthly when new payer TiC files are published. <a href="/methodology" className="underline text-blue-300">See how we measure compliance</a>.</p>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                          </div>
                        </div>
                      </div>


                      {/* CTA Button */}
                      <div className="px-5 pb-4 mt-4">
                        <Button
                          onClick={() => handleGetCurrentPrice(provider.id)}
                          disabled={
                            loadingProviders.has(provider.id) ||
                            recentPriceProviders.has(provider.id)
                          }
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {loadingProviders.has(provider.id) ? (
                            <div className="flex items-center gap-2">
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Fetching Latest Price...</span>
                            </div>
                          ) : recentPriceProviders.has(provider.id) ? (
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4" />
                              <span>Showing Latest Price</span>
                            </div>
                          ) : (
                            "Get Current Price"
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Insights Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-0 z-30 bg-white py-4 -mx-4 px-4 space-y-6 max-h-screen overflow-y-auto">
                {/* Compact Filter Tool */}
                <Card className="bg-white border border-gray-200 rounded-xl">
                  <CardContent className="p-3">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Filter Results
                    </h4>

                    <div className="space-y-2">
                      {/* Procedure Search */}
                      <div className="relative">
                        <Input
                          placeholder="Type procedure or CPT"
                          value={sidebarProcedureInput}
                          onChange={(e) => {
                            setSidebarProcedureInput(e.target.value);
                            setShowSidebarProcedureSuggestions(e.target.value.length > 0);
                          }}
                          onFocus={() => setShowSidebarProcedureSuggestions(sidebarProcedureInput.length > 0)}
                          onBlur={() => {
                            // Delay hiding to allow click on suggestions
                            setTimeout(() => setShowSidebarProcedureSuggestions(false), 200);
                          }}
                          className="h-8 text-xs rounded-md border border-gray-300 focus:border-blue-500 placeholder:text-gray-400"
                        />

                        {/* Sidebar Procedure Suggestions */}
                        {showSidebarProcedureSuggestions && (
                          <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
                            {getFilteredProcedures(sidebarProcedureInput).map((proc) => (
                              <button
                                key={proc.code}
                                type="button"
                                onClick={() => handleSidebarProcedureSelect(proc)}
                                className="w-full px-3 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none border-b border-gray-100 last:border-b-0"
                              >
                                <div className="font-medium text-gray-900 text-xs">
                                  {proc.name}
                                </div>
                                <div className="text-xs text-gray-500 font-mono">
                                  CPT: {proc.code}
                                </div>
                              </button>
                            ))}
                            {getFilteredProcedures(sidebarProcedureInput).length === 0 && (
                              <div className="px-3 py-2 text-gray-500 text-center text-xs">
                                No procedures found
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* ZIP Code & Radius in one row */}
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          placeholder="ZIP code"
                          value={filterZipCode}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '').slice(0, 5);
                            setFilterZipCode(value);
                          }}
                          className="h-8 text-xs rounded-md border border-gray-300 focus:border-blue-500 placeholder:text-gray-400"
                          maxLength={5}
                        />
                        <Select
                          value={filterRadius}
                          onValueChange={setFilterRadius}
                        >
                          <SelectTrigger className="h-8 text-xs rounded-md border border-gray-300">
                            <SelectValue placeholder="Radius" className="placeholder:text-gray-400" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10 mi">10 mi</SelectItem>
                            <SelectItem value="25 mi">25 mi</SelectItem>
                            <SelectItem value="50 mi">50 mi</SelectItem>
                            <SelectItem value="100 mi">100 mi</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Payer */}
                      <Select
                        value={filterPayer}
                        onValueChange={handlePayerSelection}
                      >
                        <SelectTrigger className="h-8 text-xs rounded-md border border-gray-300">
                          <SelectValue placeholder="All Payers" className="placeholder:text-gray-400" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="All Payers">All Payers</SelectItem>
                          <div className="px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">Commercial</div>
                          {predefinedPayers.filter(p => p.type === 'commercial').map(payer => (
                            <SelectItem key={payer.name} value={payer.name}>{payer.name}</SelectItem>
                          ))}
                          <div className="px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">Public</div>
                          {predefinedPayers.filter(p => p.type === 'public').map(payer => (
                            <SelectItem key={payer.name} value={payer.name}>{payer.name}</SelectItem>
                          ))}
                          <div className="px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">Other</div>
                          {predefinedPayers.filter(p => p.type === 'other').map(payer => (
                            <SelectItem key={payer.name} value={payer.name}>{payer.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {/* Coverage Type */}
                      <div>
                        <div className="flex flex-wrap gap-3">
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              value="cash"
                              checked={coverageType === "cash"}
                              onChange={(e) => setCoverageType(e.target.value)}
                              className="w-3 h-3 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-1"
                            />
                            <span className="ml-1 text-xs text-gray-700">
                              Cash
                            </span>
                          </label>
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              value="in-network"
                              checked={coverageType === "in-network"}
                              onChange={(e) => setCoverageType(e.target.value)}
                              className="w-3 h-3 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-1"
                            />
                            <span className="ml-1 text-xs text-gray-700">
                              In-Net
                            </span>
                          </label>
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              value="out-of-network"
                              checked={coverageType === "out-of-network"}
                              onChange={(e) => setCoverageType(e.target.value)}
                              className="w-3 h-3 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-1"
                            />
                            <span className="ml-1 text-xs text-gray-700">
                              Out-Net
                            </span>
                          </label>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <Button
                        onClick={handleSidebarFilter}
                        disabled={!hasSearched || isSearching}
                        className="w-full mt-3 h-8 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-md disabled:opacity-50"
                      >
                        {isSearching ? (
                          <><Loader2 className="w-3 h-3 mr-2 animate-spin" /> Updating...</>
                        ) : (
                          "Update Results"
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <h3 className="text-xl font-semibold text-gray-700 mb-8">
                  Insights
                </h3>

                <div className="space-y-6">
                  {/* 1. Compliance Insight */}
                  <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <CheckCircle2 className="w-6 h-6 text-blue-600 mr-2" />
                        <h3 className="font-bold text-blue-900">
                          Compliance Insight
                        </h3>
                      </div>
                      <p className="text-blue-800 mb-3">
                        3 of 5 hospitals in this area are compliant with federal pricing transparency rules.
                      </p>
                      <a href="/methodology" className="text-teal-600 hover:text-teal-800 underline text-sm font-medium">
                        See how we measure compliance
                      </a>
                    </CardContent>
                  </Card>

                  {/* 2. Regional Comparison */}
                  <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
                        <h3 className="font-bold text-green-900">
                          Regional Comparison
                        </h3>
                      </div>
                      <p className="text-green-800">
                        Average price in this area is 14% lower than the California state average for this procedure.
                      </p>
                    </CardContent>
                  </Card>

                  {/* 3. Glossary Section */}
                  <Card className="bg-white border border-gray-200 rounded-2xl">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-gray-900 mb-4">Glossary</h3>
                      <div className="space-y-3">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="cursor-help">
                              <span className="font-semibold text-gray-800 underline decoration-dotted hover:text-blue-600">
                                Negotiated Rate
                              </span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-900 text-white max-w-xs">
                            <p>Contracted price between a provider and insurer.</p>
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="cursor-help">
                              <span className="font-semibold text-gray-800 underline decoration-dotted hover:text-blue-600">
                                Allowed Amount
                              </span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-900 text-white max-w-xs">
                            <p>The maximum your plan will pay for a covered service.</p>
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="cursor-help">
                              <span className="font-semibold text-gray-800 underline decoration-dotted hover:text-blue-600">
                                Gross Charge
                              </span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-900 text-white max-w-xs">
                            <p>Provider's full, undiscounted rate before any insurance or discounts.</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      )}

      {/* Trust & Transparency Footer Strip */}
      <section className="py-6 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
            <p className="text-sm text-gray-600">
              Data sources: CMS, hospital Transparency in Coverage files, insurer disclosures.
            </p>
            <div className="flex space-x-6">
              <a href="/methodology" className="text-sm text-blue-600 hover:text-blue-800 underline font-medium">
                See Methodology
              </a>
              <button
                onClick={() => {
                  // Open modal form for error reporting
                  alert('Report Error form would open here');
                }}
                className="text-sm text-blue-600 hover:text-blue-800 underline font-medium"
              >
                Report an Error
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigateToDisclosures={onNavigateToDisclosures} />
    </div>
  );
}
