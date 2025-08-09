import React from "react";
import { Button } from "./ui/button";
import { Info, ExternalLink } from "lucide-react";

interface LegalDisclaimerNoticeProps {
  variant?: "default" | "compact" | "chart";
  className?: string;
  showIcon?: boolean;
  customText?: string;
}

export function LegalDisclaimerNotice({
  variant = "default",
  className = "",
  showIcon = true,
  customText,
}: LegalDisclaimerNoticeProps) {
  const defaultText =
    "HospitalFees.org provides information based on publicly available hospital pricing files. Prices shown are estimates only and may not reflect your final cost. Always confirm fees with your provider.";

  const chartText =
    "Source: CMS-mandated MRFs, aggregated by HospitalFees.org.";

  const getDisplayText = () => {
    if (customText) return customText;
    if (variant === "chart") return chartText;
    return defaultText;
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "compact":
        return "text-xs p-2 bg-gray-50 border-l-2 border-l-blue-500";
      case "chart":
        return "text-xs text-gray-500 italic border-t border-gray-200 pt-2 mt-2";
      default:
        return "text-sm p-4 bg-blue-50 border border-blue-200 rounded-lg";
    }
  };

  const baseStyles = `flex items-start gap-2 ${getVariantStyles()} ${className}`;

  return (
    <div className={baseStyles}>
      {showIcon && variant !== "chart" && (
        <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
      )}
      <div className="flex-1">
        <p
          className={`${variant === "chart" ? "text-gray-500" : "text-gray-700"} mb-0`}
        >
          {getDisplayText()}
        </p>
        {variant !== "chart" && (
          <Button
            variant="link"
            className="p-0 h-auto text-blue-600 hover:text-blue-800 text-sm"
            onClick={() => (window.location.href = "/disclaimer")}
          >
            What's this?
            <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
        )}
      </div>
    </div>
  );
}
