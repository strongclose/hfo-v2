import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  HelpCircle,
  MessageSquare,
  Shield,
  DollarSign,
  FileText,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Bot,
  ExternalLink,
  Info,
} from "lucide-react";

interface PatientTip {
  id: string;
  question: string;
  answer: string;
  category: "insurance" | "costs" | "procedures" | "billing";
  entitySpecific?: boolean;
}

interface PatientTipsProps {
  entityName: string;
  entityType: "hospital" | "doctor" | "insurer";
  tips?: PatientTip[];
  onAskAI?: () => void;
}

export function PatientTipsAndFootnote({
  entityName,
  entityType,
  tips = [],
  onAskAI,
}: PatientTipsProps) {
  const [expandedTip, setExpandedTip] = useState<string | null>(null);

  const defaultTips: PatientTip[] = [
    {
      id: "insurance-coverage",
      question: `Does ${entityName} accept my insurance?`,
      answer:
        entityType === "insurer"
          ? "Use our provider directory to verify in-network status and coverage details for specific procedures."
          : "Contact your insurance provider to verify in-network status. This provider may accept your plan but with different coverage levels.",
      category: "insurance",
      entitySpecific: true,
    },
    {
      id: "fees-included",
      question: "Are anesthesia or physician fees included in these prices?",
      answer:
        entityType === "hospital"
          ? "Hospital facility fees are shown, but may not include physician fees, anesthesia, or pathology services. Always request an itemized estimate."
          : "These prices typically include the provider's professional fees. Additional facility fees may apply if performed at a hospital or surgery center.",
      category: "costs",
    },
    {
      id: "estimate-accuracy",
      question: "How accurate are these cost estimates?",
      answer:
        "These are list prices and negotiated rates from published transparency files. Your actual cost depends on your insurance coverage, deductible status, and specific medical needs.",
      category: "costs",
    },
    {
      id: "billing-questions",
      question: "What if I receive a surprise bill?",
      answer:
        "Under the No Surprises Act, you're protected from most surprise billing. Contact the provider's billing department and consider using our AI assistant for guidance on next steps.",
      category: "billing",
    },
  ];

  const allTips = tips.length > 0 ? tips : defaultTips;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "insurance":
        return <Shield className="w-4 h-4 text-blue-600" />;
      case "costs":
        return <DollarSign className="w-4 h-4 text-green-600" />;
      case "procedures":
        return <FileText className="w-4 h-4 text-purple-600" />;
      case "billing":
        return <AlertTriangle className="w-4 h-4 text-orange-600" />;
      default:
        return <HelpCircle className="w-4 h-4 text-gray-600" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "insurance":
        return "bg-blue-100 text-blue-800";
      case "costs":
        return "bg-green-100 text-green-800";
      case "procedures":
        return "bg-purple-100 text-purple-800";
      case "billing":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      {/* Patient Tips Section */}
      <section className="py-16 bg-white">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Patient Tips & Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about pricing and coverage at {entityName}
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {allTips.map((tip) => (
                <Card key={tip.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getCategoryIcon(tip.category)}
                        <CardTitle className="text-lg">
                          {tip.question}
                        </CardTitle>
                        <Badge
                          variant="secondary"
                          className={`text-xs ${getCategoryColor(tip.category)}`}
                        >
                          {tip.category}
                        </Badge>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          setExpandedTip(expandedTip === tip.id ? null : tip.id)
                        }
                        className="flex items-center gap-1"
                      >
                        {expandedTip === tip.id ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </CardHeader>

                  {expandedTip === tip.id && (
                    <CardContent className="pt-0">
                      <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-l-blue-500">
                        <p className="text-muted-foreground leading-relaxed">
                          {tip.answer}
                        </p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            {/* AI Assistant CTA */}
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">
                        Have more questions about {entityName}?
                      </h3>
                      <p className="text-blue-700">
                        Ask our AI assistant about pricing policies, coverage,
                        and cost estimates
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      onClick={onAskAI}
                      className="flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Ask AI Assistant
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => (window.location.href = "/glossary")}
                      className="flex items-center gap-2"
                    >
                      <FileText className="w-4 h-4" />
                      Healthcare Glossary
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal/Data Footnote */}
      <section className="py-8 bg-gray-100 border-t">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Card className="border-amber-200 bg-amber-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">
                      Important Pricing Information
                    </h3>
                    <p className="text-amber-800 leading-relaxed mb-4">
                      All pricing data shown is derived from{" "}
                      {entityType === "insurer"
                        ? "network"
                        : "machine-readable"}{" "}
                      files published by{" "}
                      {entityType === "insurer"
                        ? "insurance providers"
                        : "the provider"}{" "}
                      and required by CMS transparency rules. These are
                      estimates only and may not reflect your final cost. Your
                      actual out-of-pocket expense will depend on your specific
                      insurance coverage, deductible status, and individual
                      medical circumstances.
                    </p>
                    <p className="text-amber-800 font-medium">
                      Always confirm your out-of-pocket cost directly with the
                      provider and your insurance company before receiving care.
                    </p>

                    <div className="flex gap-4 mt-4">
                      <a
                        href="/disclaimer"
                        className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors text-sm"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Full Disclaimer
                      </a>
                      <a
                        href="/methodology"
                        className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors text-sm"
                      >
                        <FileText className="w-3 h-3" />
                        Data Methodology
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
