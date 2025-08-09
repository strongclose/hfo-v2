import React, { useState } from "react";
import {
  Shield,
  AlertTriangle,
  Info,
  Eye,
  FileText,
  Lock,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

// Medical Disclaimer Component
export function MedicalDisclaimer({
  variant = "banner",
  entityName,
  className = "",
}: {
  variant?: "banner" | "inline" | "modal";
  entityName?: string;
  className?: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const disclaimerText = `This information is for educational purposes only and should not be considered as medical advice. Healthcare costs and quality can vary significantly. Always consult with qualified healthcare professionals before making medical decisions${entityName ? ` regarding treatment at ${entityName}` : ""}. Individual results and costs may vary based on insurance coverage, medical complexity, and other factors.`;

  if (variant === "banner") {
    return (
      <div
        className={`bg-yellow-50 border border-yellow-200 rounded-lg p-4 ${className}`}
      >
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h4 className="font-medium text-yellow-800 mb-1">
              Medical Disclaimer
            </h4>
            <p className="text-sm text-yellow-700">{disclaimerText}</p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className={`text-xs text-gray-500 border-t pt-3 mt-4 ${className}`}>
        <div className="flex items-start gap-2">
          <Info className="h-3 w-3 mt-0.5 flex-shrink-0" />
          <p>{disclaimerText}</p>
        </div>
      </div>
    );
  }

  return null;
}

// HIPAA Compliance Notice
export function HIPAANotice({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-blue-50 border border-blue-200 rounded-lg p-4 ${className}`}
    >
      <div className="flex items-start gap-3">
        <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <h4 className="font-medium text-blue-800 mb-1">
            HIPAA Privacy Protection
          </h4>
          <p className="text-sm text-blue-700 mb-3">
            We are committed to protecting your health information privacy. All
            pricing data is aggregated and anonymized in compliance with HIPAA
            regulations. No personal health information is stored or transmitted
            through this platform.
          </p>
          <Button
            variant="outline"
            size="sm"
            className="text-blue-700 border-blue-300"
          >
            <FileText className="h-3 w-3 mr-1" />
            View Privacy Policy
          </Button>
        </div>
      </div>
    </div>
  );
}

// Data Source Attribution
export function DataSourceAttribution({
  sources = [],
  lastUpdated,
  className = "",
}: {
  sources?: string[];
  lastUpdated?: string;
  className?: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const defaultSources = [
    "CMS Hospital Price Transparency Data",
    "State Insurance Commission Filings",
    "Healthcare Provider Public Disclosures",
    "Medicare & Medicaid Cost Reports",
  ];

  const displaySources = sources.length > 0 ? sources : defaultSources;

  return (
    <Card className={`border-gray-200 ${className}`}>
      <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-gray-600" />
                <CardTitle className="text-sm font-medium">
                  Data Sources & Methodology
                </CardTitle>
              </div>
              {isExpanded ? (
                <ChevronUp className="h-4 w-4 text-gray-400" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-400" />
              )}
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="pt-0">
            <div className="space-y-3">
              <div>
                <h5 className="text-sm font-medium text-gray-700 mb-2">
                  Primary Data Sources:
                </h5>
                <ul className="space-y-1">
                  {displaySources.map((source, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-600 flex items-center gap-2"
                    >
                      <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                      {source}
                    </li>
                  ))}
                </ul>
              </div>

              {lastUpdated && (
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    Last updated: {lastUpdated}
                  </p>
                </div>
              )}

              <div className="pt-2 border-t border-gray-100">
                <Button
                  variant="link"
                  size="sm"
                  className="h-auto p-0 text-blue-600"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View detailed methodology
                </Button>
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}

// Cost Accuracy Disclaimer
export function CostAccuracyDisclaimer({
  entityType = "provider",
  className = "",
}: {
  entityType?: "provider" | "procedure" | "comparison";
  className?: string;
}) {
  const getDisclaimerText = () => {
    switch (entityType) {
      case "procedure":
        return "Procedure costs shown are estimates based on historical data and may not reflect current pricing. Actual costs depend on individual medical circumstances, insurance coverage, complications, and facility-specific factors.";
      case "comparison":
        return "Cost comparisons are based on available public data and should be used as general guidance only. Insurance negotiated rates, patient complexity, and treatment variations can significantly impact final costs.";
      default:
        return "Healthcare pricing is complex and variable. Displayed costs are estimates based on publicly available data and historical trends. Always verify costs directly with providers and insurance companies before making healthcare decisions.";
    }
  };

  return (
    <div
      className={`bg-amber-50 border border-amber-200 rounded-lg p-3 ${className}`}
    >
      <div className="flex items-start gap-2">
        <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
        <div>
          <h5 className="text-sm font-medium text-amber-800 mb-1">
            Cost Estimate Disclaimer
          </h5>
          <p className="text-xs text-amber-700">{getDisclaimerText()}</p>
        </div>
      </div>
    </div>
  );
}

// Legal Footer
export function LegalFooter({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-gray-100 border-t py-6 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">
              Important Legal Information
            </h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <strong>Not Medical Advice:</strong> This platform provides
                general healthcare cost information only.
              </p>
              <p>
                <strong>Data Accuracy:</strong> While we strive for accuracy,
                healthcare costs change frequently.
              </p>
              <p>
                <strong>Insurance Verification:</strong> Always confirm coverage
                and costs with your insurance provider.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">
              Quick Legal Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a
                href="/privacy-policy"
                className="text-blue-600 hover:underline flex items-center gap-1"
              >
                <Lock className="h-3 w-3" />
                Privacy Policy
              </a>
              <a
                href="/terms-of-use"
                className="text-blue-600 hover:underline flex items-center gap-1"
              >
                <FileText className="h-3 w-3" />
                Terms of Use
              </a>
              <a
                href="/disclaimer"
                className="text-blue-600 hover:underline flex items-center gap-1"
              >
                <AlertTriangle className="h-3 w-3" />
                Medical Disclaimer
              </a>
              <a
                href="/methodology"
                className="text-blue-600 hover:underline flex items-center gap-1"
              >
                <Eye className="h-3 w-3" />
                Data Methodology
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <Badge variant="outline">HIPAA Compliant</Badge>
            <Badge variant="outline">SOC 2 Certified</Badge>
            <Badge variant="outline">Data Anonymized</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

// Comprehensive compliance wrapper for provider pages
export function ProviderComplianceWrapper({
  children,
  entityName,
  entityType,
}: {
  children: React.ReactNode;
  entityName: string;
  entityType: "hospital" | "doctor" | "insurer";
}) {
  return (
    <div className="space-y-6">
      {children}

      <div className="space-y-4">
        <MedicalDisclaimer entityName={entityName} />
        <CostAccuracyDisclaimer entityType="provider" />
        <DataSourceAttribution lastUpdated={new Date().toLocaleDateString()} />
      </div>
    </div>
  );
}
