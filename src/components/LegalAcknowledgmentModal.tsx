import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { AlertTriangle, Info, ExternalLink } from "lucide-react";

interface LegalAcknowledgmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
  toolName: string;
  variant?: "ai" | "advanced" | "zip";
}

export function LegalAcknowledgmentModal({
  isOpen,
  onClose,
  onAccept,
  toolName,
  variant = "advanced",
}: LegalAcknowledgmentModalProps) {
  const [hasAgreed, setHasAgreed] = useState(false);
  const [sessionKey, setSessionKey] = useState("");

  useEffect(() => {
    const key = `legal_acknowledged_${variant}_${Date.now()}`;
    setSessionKey(key);
  }, [variant]);

  const getContent = () => {
    switch (variant) {
      case "ai":
        return {
          title: "AI-Powered Analysis Disclaimer",
          description:
            "This tool uses artificial intelligence to provide cost estimates and recommendations.",
          warnings: [
            "AI recommendations are based on available data patterns and may not account for all variables",
            "Results should be used as guidance only, not as definitive medical or financial advice",
            "Always consult with healthcare providers before making medical decisions",
            "Individual circumstances may significantly affect actual costs",
          ],
        };
      case "zip":
        return {
          title: "ZIP-Level Data Usage Notice",
          description:
            "This tool provides location-specific healthcare cost information.",
          warnings: [
            "ZIP-level data may include estimates based on regional averages",
            "Local market conditions can vary significantly within ZIP codes",
            "Provider availability and insurance networks may differ from estimates",
            "This information is for research and comparison purposes only",
          ],
        };
      default:
        return {
          title: "Advanced Tool Usage Agreement",
          description:
            "This advanced analysis tool provides detailed healthcare cost comparisons.",
          warnings: [
            "Results are based on publicly available pricing data and statistical analysis",
            "Actual costs may vary based on individual insurance coverage and medical needs",
            "This tool is for educational and informational purposes only",
            "Consult with healthcare providers and insurance companies for accurate cost estimates",
          ],
        };
    }
  };

  const content = getContent();

  const handleAccept = () => {
    if (hasAgreed) {
      // Store session acknowledgment
      sessionStorage.setItem(sessionKey, "true");
      onAccept();
    }
  };

  const handleClose = () => {
    setHasAgreed(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            {content.title}
          </DialogTitle>
          <DialogDescription className="text-left">
            {content.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Tool Name */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-sm font-medium text-blue-800">
              Using: {toolName}
            </p>
          </div>

          {/* Warnings */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-700">
              Please acknowledge:
            </p>
            {content.warnings.map((warning, index) => (
              <div key={index} className="flex items-start gap-2">
                <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">{warning}</p>
              </div>
            ))}
          </div>

          {/* Disclaimer Link */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
            <p className="text-xs text-gray-600 mb-2">
              For complete terms and limitations, please review our:
            </p>
            <a
              href="/disclaimer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-colors"
            >
              Full Disclaimer & Terms
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Agreement Checkbox */}
          <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg">
            <Checkbox
              id="legal-agreement"
              checked={hasAgreed}
              onCheckedChange={(checked) => setHasAgreed(checked as boolean)}
              className="mt-0.5"
            />
            <label
              htmlFor="legal-agreement"
              className="text-sm text-gray-700 cursor-pointer"
            >
              I understand these limitations and agree to use this tool for
              educational purposes only. I will not rely solely on these results
              for medical or financial decisions.
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <Button variant="outline" onClick={handleClose} className="flex-1">
              Cancel
            </Button>
            <Button
              onClick={handleAccept}
              disabled={!hasAgreed}
              className="flex-1"
            >
              Continue
            </Button>
          </div>

          {/* Session Notice */}
          <p className="text-xs text-gray-500 text-center">
            This agreement applies for your current session only.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Hook to manage legal acknowledgment
export function useLegalAcknowledgment(
  toolName: string,
  variant: "ai" | "advanced" | "zip" = "advanced",
) {
  const [showModal, setShowModal] = useState(false);
  const [isAcknowledged, setIsAcknowledged] = useState(false);

  useEffect(() => {
    const sessionKey = `legal_acknowledged_${variant}`;
    const acknowledged = sessionStorage.getItem(sessionKey) === "true";
    setIsAcknowledged(acknowledged);
  }, [variant]);

  const requestAcknowledgment = () => {
    if (!isAcknowledged) {
      setShowModal(true);
      return false;
    }
    return true;
  };

  const handleAccept = () => {
    const sessionKey = `legal_acknowledged_${variant}`;
    sessionStorage.setItem(sessionKey, "true");
    setIsAcknowledged(true);
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const AcknowledgmentModal = () => (
    <LegalAcknowledgmentModal
      isOpen={showModal}
      onClose={handleClose}
      onAccept={handleAccept}
      toolName={toolName}
      variant={variant}
    />
  );

  return {
    isAcknowledged,
    requestAcknowledgment,
    AcknowledgmentModal,
  };
}
