import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  MapPin,
  Clock,
  CheckCircle,
  Eye,
  Info,
  Target,
  Star,
  Phone,
  DollarSign,
  Loader2,
} from "lucide-react";

interface Hospital {
  name: string;
  address: string;
  phone: string;
  website: string;
  priceRange: string;
  price: number;
  rating: number;
  distance: string;
  waitTime: string;
  inNetwork: boolean;
  transparencyScore: number;
  pricingAccuracy: string;
  comparisonText: string;
  comparisonType: "below" | "above" | "average";
  featured?: boolean;
}

type PriceState = "average" | "updated";

interface PriceData {
  price: number;
  lastUpdated?: string;
}

interface EnhancedHospitalCardProps {
  hospital: Hospital;
  procedure: string;
  featured?: boolean;
  bestMatch?: boolean;
  onViewDetails?: () => void;
}

export function EnhancedHospitalCard({
  hospital,
  procedure,
  featured = false,
  bestMatch = false,
  onViewDetails,
}: EnhancedHospitalCardProps) {
  const [priceState, setPriceState] = useState<PriceState>("average");
  const [currentPriceData, setCurrentPriceData] = useState<PriceData>({
    price: hospital.price,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const simulateCloudflareValidation = (): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1500);
    });
  };

  const fetchCurrentPrice = async (): Promise<PriceData> => {
    const recentPrice = hospital.price + Math.floor(Math.random() * 1000) - 500;
    const lastUpdated = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          price: Math.max(recentPrice, 1000),
          lastUpdated,
        });
      }, 1000);
    });
  };

  const handleGetCurrentPrice = async () => {
    if (priceState === "updated" || isLoading) return;

    setIsLoading(true);
    try {
      const isValidated = await simulateCloudflareValidation();
      if (isValidated) {
        const newPriceData = await fetchCurrentPrice();
        setCurrentPriceData(newPriceData);
        setPriceState("updated");

        // Temporarily show confetti every time for debugging
        setShowConfetti(true);
        console.log("Confetti triggered!");

        // Remove confetti after 5 seconds
        setTimeout(() => {
          setShowConfetti(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Failed to get current price:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {/* Full-screen confetti overlay */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              {["🎉", "🎊", "✨", "🌟", "🎈"][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      <Card
        className={`hover:shadow-lg transition-shadow ${featured ? "ring-2 ring-primary/20 bg-primary/5" : ""} ${bestMatch ? "ring-2 ring-green/30 bg-green/5" : ""}`}
      >
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-lg">{hospital.name}</h3>
                {featured && (
                  <Badge className="bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/30">
                    Best Value
                  </Badge>
                )}
                {bestMatch && (
                  <Badge className="bg-green text-white px-3 py-1.5 rounded-full border-0">
                    🎯 Best Match
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                {hospital.address}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {hospital.distance}
                </span>
                <span>{hospital.phone}</span>
                <span>{hospital.website}</span>
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center gap-2 justify-end mb-1">
                {priceState === "average" && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Badge className="bg-gray-100 text-gray-600 text-xs cursor-help font-medium px-3 py-1.5 rounded-full border-0">
                          6-Month Average
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          This reflects the average billed price over the last 6
                          months.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
                {priceState === "updated" && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Badge
                          className="
                          bg-[#14b8a6]
                          text-white font-medium text-xs cursor-help
                          px-3 py-1.5 rounded-full border-0
                          shadow-md hover:shadow-lg transition-all duration-200
                        "
                          style={{ zIndex: 10 }}
                        >
                          ✨ Recent Price
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>This is the latest verified price available.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
                <div className="text-2xl font-bold text-primary">
                  ${currentPriceData.price.toLocaleString()}
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                {hospital.priceRange}
              </div>
              {priceState === "updated" && currentPriceData.lastUpdated && (
                <div className="text-xs text-gray-500 mt-1 font-medium">
                  Latest price as of{" "}
                  {new Date(
                    new Date().getFullYear(),
                    new Date().getMonth() - 1,
                  ).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge
              className={
                hospital.inNetwork
                  ? "bg-green text-white px-3 py-1.5 rounded-full border-0"
                  : "bg-gray-200 text-gray-600 px-3 py-1.5 rounded-full border-0"
              }
            >
              <CheckCircle className="w-3 h-3 mr-1" />
              {hospital.inNetwork ? "In-Network" : "Out-of-Network"}
            </Badge>
          </div>

          <div className="flex items-center justify-end mb-4">
            <div
              className={`text-sm font-medium ${
                hospital.comparisonType === "below"
                  ? "text-green"
                  : hospital.comparisonType === "above"
                    ? "text-red-500"
                    : "text-muted-foreground"
              }`}
            >
              {hospital.comparisonText}
            </div>
          </div>

          <div className="flex items-center justify-end pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              {onViewDetails && (
                <Button variant="outline" size="sm" onClick={onViewDetails}>
                  <Eye className="w-3 h-3 mr-1" />
                  View Details
                </Button>
              )}
              <Button
                size="sm"
                onClick={handleGetCurrentPrice}
                disabled={isLoading || priceState === "updated"}
                className={
                  priceState === "updated"
                    ? "bg-green-600 hover:bg-green-700"
                    : ""
                }
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                    Validating...
                  </>
                ) : priceState === "updated" ? (
                  <>
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Price Updated
                  </>
                ) : (
                  <>
                    <DollarSign className="w-3 h-3 mr-1" />
                    Get Current Price
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
