// Standardized data models for the healthcare application

export interface Address {
  street?: string;
  city: string;
  state: string;
  zip: string;
}

export interface Contact {
  website?: string;
  phone?: string;
  email?: string;
}

// Base provider interface
export interface BaseProvider extends Contact {
  id: string;
  name: string;
  slug: string;
  address: Address;
  description?: string;
  logo?: string;
  lastUpdated?: string;
}

// Hospital specific interface
export interface Hospital extends BaseProvider {
  type: "hospital";
  transparencyScore: number;
  avgCost: number;
  totalProcedures: number;
  topProcedures: string[];
  network: string[];
  specialties?: string[];
  featured?: boolean;
}

// Doctor specific interface
export interface Doctor extends BaseProvider {
  type: "doctor";
  specialty: string;
  rating: number;
  yearsExperience: number;
  education: string[];
  certifications: string[];
  hospitalAffiliations: string[];
  acceptedInsurance: string[];
  featured?: boolean;
}

// Insurer specific interface
export interface Insurer extends BaseProvider {
  type: "insurer";
  planTypes: string[];
  memberCount: number;
  networkSize: number;
  avgPremium: number;
  satisfactionScore: number;
  coverageTypes: string[];
  topPartners: string[];
  states: string[];
  financialRating: string;
  accreditation: string[];
  founded: number;
  headquarters: string;
  featured?: boolean;
}

// Unified provider type
export type Provider = Hospital | Doctor | Insurer;

// Procedure data interface
export interface ProcedureData {
  id: string;
  code: string;
  type: "CPT" | "ICD-10" | "HCPCS";
  description: string;
  grossCharge: number;
  inNetworkAverage: number;
  selfPayRate?: number;
  frequency: "Common" | "Moderate" | "Rare";
  payerRates?: Array<{
    payer: string;
    rate: number;
  }>;
}

// Comparison data interface
export interface ComparisonData {
  entityName: string;
  entityType: "hospital" | "doctor" | "insurer";
  averageCost: number;
  regionalRanking: number;
  totalInRegion: number;
  costVsAverage: number;
  qualityRating: number;
  nearbyCompetitors: Array<{
    name: string;
    distance: string;
    averageCost: number;
    qualityRating: number;
    type: string;
  }>;
  regionalStats: {
    averageCost: number;
    medianCost: number;
    highestCost: number;
    lowestCost: number;
    totalProviders: number;
  };
}

// Patient tip interface
export interface PatientTip {
  id: string;
  question: string;
  answer: string;
  category: "insurance" | "costs" | "procedures" | "billing";
  entitySpecific?: boolean;
}

// API Response interfaces
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Error boundary props
export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

// Loading states
export type LoadingState = "idle" | "loading" | "success" | "error";

// Navigation types
export interface NavigationItem {
  name: string;
  href: string;
  action?: () => void;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
  isActive?: boolean;
}

export interface DropdownItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
}

// Legal compliance types
export interface LegalDisclaimer {
  type: "medical" | "data" | "pricing" | "hipaa";
  text: string;
  lastUpdated: string;
  required: boolean;
}

// Form validation types
export interface ValidationError {
  field: string;
  message: string;
}

export interface FormState<T> {
  data: T;
  errors: ValidationError[];
  isSubmitting: boolean;
  isValid: boolean;
}
