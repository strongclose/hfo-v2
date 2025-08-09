import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  MapPin,
  Globe,
  Phone,
  Mail,
  ExternalLink,
  Building,
  User,
  Shield,
  Star,
  Clock,
} from "lucide-react";

export interface ProviderData {
  id?: string;
  name: string;
  type: "hospital" | "doctor" | "insurer";
  address?: {
    street?: string;
    city: string;
    state: string;
    zip: string;
  };
  website?: string;
  phone?: string;
  email?: string;
  logo?: string;
  description?: string;
  transparencyScore?: number;
  lastUpdated?: string;
  procedureCount?: number;
  payerCount?: number;
  specialty?: string; // For doctors
  network?: string; // For insurers
}

interface ProviderHeroProps {
  provider: ProviderData;
  onClaimPage?: () => void;
  onContact?: () => void;
}

export function ProviderHero({
  provider,
  onClaimPage,
  onContact,
}: ProviderHeroProps) {
  const getEntityIcon = () => {
    switch (provider.type) {
      case "hospital":
        return <Building className="w-8 h-8 text-blue-600" />;
      case "doctor":
        return <User className="w-8 h-8 text-green-600" />;
      case "insurer":
        return <Shield className="w-8 h-8 text-purple-600" />;
    }
  };

  const getEntityTypeLabel = () => {
    switch (provider.type) {
      case "hospital":
        return "Healthcare Facility";
      case "doctor":
        return "Healthcare Provider";
      case "insurer":
        return "Insurance Provider";
    }
  };

  const getBackgroundGradient = () => {
    switch (provider.type) {
      case "hospital":
        return "from-blue-50 via-white to-gray-50";
      case "doctor":
        return "from-green-50 via-white to-gray-50";
      case "insurer":
        return "from-purple-50 via-white to-gray-50";
    }
  };

  return (
    <section
      className={`relative bg-gradient-to-b ${getBackgroundGradient()} py-16 lg:py-24`}
    >
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Main Provider Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start gap-4 mb-6">
                {/* Logo or Icon */}
                <div className="flex-shrink-0">
                  {provider.logo ? (
                    <img
                      src={provider.logo}
                      alt={`${provider.name} logo`}
                      className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      {getEntityIcon()}
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="secondary" className="text-sm">
                      {getEntityTypeLabel()}
                    </Badge>
                    {provider.specialty && (
                      <Badge variant="outline" className="text-sm">
                        {provider.specialty}
                      </Badge>
                    )}
                    {provider.network && (
                      <Badge variant="outline" className="text-sm">
                        {provider.network}
                      </Badge>
                    )}
                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                    {provider.name}
                  </h1>

                  {provider.description && (
                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                      {provider.description}
                    </p>
                  )}

                  {/* Contact Information */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    {provider.address && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>
                          {provider.address.street &&
                            `${provider.address.street}, `}
                          {provider.address.city}, {provider.address.state}{" "}
                          {provider.address.zip}
                        </span>
                      </div>
                    )}

                    {provider.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>{provider.phone}</span>
                      </div>
                    )}

                    {provider.website && (
                      <a
                        href={provider.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <Globe className="w-4 h-4" />
                        <span>Visit Website</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  View Pricing Data
                </Button>

                {onContact && (
                  <Button
                    variant="outline"
                    onClick={onContact}
                    className="flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Contact Provider
                  </Button>
                )}

                {onClaimPage && (
                  <Button
                    variant="outline"
                    onClick={onClaimPage}
                    className="flex items-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    Claim This Page
                  </Button>
                )}
              </div>
            </div>

            {/* Transparency Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Transparency Summary
                </h3>

                {/* Transparency Score */}
                {provider.transparencyScore && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">
                        Transparency Score
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        {provider.transparencyScore}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          provider.transparencyScore >= 85
                            ? "bg-green-500"
                            : provider.transparencyScore >= 70
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }`}
                        style={{ width: `${provider.transparencyScore}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Data Summary */}
                <div className="space-y-3 text-sm">
                  {provider.procedureCount && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Procedures Listed:
                      </span>
                      <span className="font-medium">
                        {provider.procedureCount.toLocaleString()}
                      </span>
                    </div>
                  )}

                  {provider.payerCount && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Insurance Plans:
                      </span>
                      <span className="font-medium">{provider.payerCount}</span>
                    </div>
                  )}

                  {provider.lastUpdated && (
                    <div className="flex justify-between items-center pt-3 border-t">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Last Updated:
                      </span>
                      <span className="font-medium">
                        {provider.lastUpdated}
                      </span>
                    </div>
                  )}
                </div>

                {/* Data Source Note */}
                <div className="mt-4 pt-4 border-t text-xs text-muted-foreground">
                  <p>
                    Data based on{" "}
                    {provider.type === "insurer"
                      ? "network"
                      : "machine-readable"}{" "}
                    files as required by CMS transparency rules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
