"use client";

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
  Phone,
  Heart,
  TrendingUp,
  TrendingDown,
  Star,
  Clock,
  Shield,
  Award,
  ExternalLink,
  Info,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

interface HospitalCardProps {
  hospital: {
    name: string;
    address: string;
    phone: string;
    website: string;
    priceRange: string;
    price: number;
    rating: number;
    distance: string;
    waitTime: string;
    comparisonText?: string;
    comparisonType?: "below" | "above" | "average";
    featured?: boolean;
  };
  procedure: string;
  featured?: boolean;
}

export function HospitalCard({
  hospital,
  procedure,
  featured = false,
}: HospitalCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  // Generate hospital initials from name
  const getHospitalInitials = (hospitalName: string) => {
    if (!hospitalName) return "H";
    return hospitalName
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  // Extract starting price from price range
  const getStartingPrice = (range: string) => {
    if (!range) return "N/A";
    const match = range.match(/\$[\d,]+/);
    return match ? match[0] : range;
  };

  // Get the selected radius from context (defaulting to 25 miles for now)
  const selectedRadius = 25;

  const getComparisonBadge = () => {
    if (!hospital.comparisonText) return null;

    const getBadgeVariant = () => {
      switch (hospital.comparisonType) {
        case "below":
          return "default";
        case "above":
          return "destructive";
        default:
          return "secondary";
      }
    };

    const getIcon = () => {
      switch (hospital.comparisonType) {
        case "below":
          return <CheckCircle className="w-3 h-3 mr-1 fill-current" />;
        case "above":
          return <TrendingUp className="w-3 h-3 mr-1" />;
        default:
          return null;
      }
    };

    // Format comparison text to be more user-friendly
    const getFormattedComparisonText = () => {
      if (hospital.comparisonType === "below") {
        const percentage = hospital.comparisonText?.match(/\d+/)?.[0] || "0";
        return `${percentage}% below area average`;
      } else if (hospital.comparisonType === "above") {
        const percentage = hospital.comparisonText?.match(/\d+/)?.[0] || "0";
        return `${percentage}% above area average`;
      }
      return hospital.comparisonText;
    };

    const tooltipContent = `Based on CMS data for ${selectedRadius}-mile radius around your location. Prices may vary by insurance coverage and specific circumstances.`;

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge
              variant={getBadgeVariant()}
              className={`text-xs flex items-center w-fit cursor-help transition-all duration-200 ${hospital.comparisonType === "below" ? "bg-green-600 text-white hover:bg-green-700 shadow-sm" : ""}`}
            >
              {getIcon()}
              {getFormattedComparisonText()}
            </Badge>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="max-w-xs">
            <p>{tooltipContent}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  const handleSaveToggle = () => {
    setIsSaved(!isSaved);
  };

  // Use the featured prop from the hospital object or the component prop
  const isFeature = hospital.featured || featured;

  return (
    <div className={`${isFeature ? "pt-4" : ""}`}>
      <Card
        className={`
        relative overflow-visible transition-all duration-300 ease-out cursor-pointer group
        ${
          isFeature
            ? "border-2 border-primary/30 bg-gradient-to-r from-blue-50/50 to-white shadow-md hover:shadow-xl hover:border-primary/50"
            : "bg-gray-50/30 hover:bg-white border border-gray-200/60 hover:border-gray-300 shadow-sm hover:shadow-lg"
        }
        hover:scale-[1.01] hover:-translate-y-1
      `}
      >
        {isFeature && (
          <div className="absolute -top-2 left-4 z-20">
            <Badge className="bg-white border-2 border-primary text-primary shadow-lg hover:shadow-xl transition-all duration-200 font-medium">
              Best Value
            </Badge>
          </div>
        )}

        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column - Hospital Logo/Initials */}
            <div className="lg:col-span-2 flex lg:justify-start justify-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20 flex-shrink-0 transition-all duration-200 group-hover:border-primary/40 group-hover:bg-primary/15">
                <span className="text-primary font-bold text-lg transition-colors duration-200">
                  {getHospitalInitials(hospital.name)}
                </span>
              </div>
            </div>

            {/* Middle Column - Hospital Details */}
            <div className="lg:col-span-6 space-y-4">
              {/* Hospital Name */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                  {hospital.name}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {/* Trust Badges */}
                  <Badge
                    variant="outline"
                    className="text-xs bg-green-50 text-green-700 border-green-200 hover:bg-green-100 transition-colors duration-200"
                  >
                    <Shield className="w-3 h-3 mr-1" />
                    Accredited
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors duration-200"
                  >
                    In-Network
                  </Badge>
                  {/* Best Price indicator for non-featured cards that have below average pricing */}
                  {!isFeature && hospital.comparisonType === "below" && (
                    <Badge className="text-xs bg-green-100 text-green-800 border border-green-300 hover:bg-green-200 transition-colors duration-200">
                      🟢 Great Price
                    </Badge>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-2">
                <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="leading-tight">{hospital.address}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{hospital.phone}</span>
                </div>
              </div>

              {/* Ratings & Distance */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{hospital.rating}</span>
                  <span className="text-muted-foreground">(247 reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>{hospital.distance}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>~{hospital.waitTime} wait</span>
                </div>
              </div>

              {/* About this facility option */}
              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:text-primary/80 h-auto p-0 font-normal hover:bg-transparent transition-colors duration-200"
              >
                <Info className="w-3 h-3 mr-1" />
                About this facility
              </Button>
            </div>

            {/* Right Column - Pricing & Actions - Aligned to top */}
            <div className="lg:col-span-4 space-y-4 lg:self-start">
              {/* Price Display - Enhanced styling */}
              <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 group-hover:border-gray-300">
                <div className="space-y-3">
                  {/* Main starting price - Top aligned */}
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground mb-1">
                      Starting at
                    </p>
                    <p className="text-3xl font-bold text-primary group-hover:text-primary/90 transition-colors duration-200">
                      {getStartingPrice(hospital.priceRange)}
                    </p>
                  </div>

                  {/* Full range as secondary info */}
                  <div className="text-right">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <p className="text-xs text-muted-foreground cursor-help hover:text-foreground transition-colors duration-200">
                            Full range: {hospital.priceRange}
                          </p>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                          <p>
                            Price range reflects different insurance types and
                            payment methods
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>

                  {/* Comparison badge - Right aligned */}
                  <div className="flex justify-end pt-1">
                    {getComparisonBadge()}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button className="w-full bg-primary hover:bg-primary/90 shadow-sm hover:shadow-md transition-all duration-200 group-hover:scale-105">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Detailed Prices
                </Button>

                <div className="flex items-center justify-between gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs flex-1 hover:bg-gray-50 transition-colors duration-200"
                  >
                    Call Hospital
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleSaveToggle}
                    className={`hover:bg-red-50 transition-all duration-200 ${isSaved ? "text-red-600 bg-red-50" : "text-muted-foreground hover:text-red-600"}`}
                  >
                    <Heart
                      className={`w-4 h-4 transition-all duration-200 ${isSaved ? "fill-red-600 scale-110" : "hover:scale-110"}`}
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>

        {/* Subtle animated border on hover */}
        <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/20 transition-all duration-300 pointer-events-none" />
      </Card>
    </div>
  );
}
