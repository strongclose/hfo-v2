import React, { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import {
  DollarSign,
  Search,
  ArrowUpDown,
  Info,
  Eye,
  EyeOff,
  TrendingUp,
  TrendingDown,
  HelpCircle,
} from "lucide-react";

export interface ProcedureData {
  id: string;
  code: string;
  type: "CPT" | "DRG";
  description: string;
  grossCharge: number;
  inNetworkAverage?: number;
  selfPayRate?: number;
  cashPrice?: number;
  minNegotiatedRate?: number;
  maxNegotiatedRate?: number;
  payerRates?: Array<{
    payer: string;
    rate: number;
  }>;
  frequency?: "Common" | "Moderate" | "Rare";
}

interface InteractiveCostTableProps {
  procedures: ProcedureData[];
  entityName: string;
  entityType: "hospital" | "doctor" | "insurer";
  defaultShowCount?: number;
}

export function InteractiveCostTable({
  procedures,
  entityName,
  entityType,
  defaultShowCount = 20,
}: InteractiveCostTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] =
    useState<keyof ProcedureData>("description");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [showAllProcedures, setShowAllProcedures] = useState(false);
  const [selectedFrequency, setSelectedFrequency] = useState<string>("all");

  const filteredProcedures = procedures.filter((procedure) => {
    const matchesSearch =
      procedure.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      procedure.code.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFrequency =
      selectedFrequency === "all" || procedure.frequency === selectedFrequency;

    return matchesSearch && matchesFrequency;
  });

  const sortedProcedures = [...filteredProcedures].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    }

    const aString = String(aValue).toLowerCase();
    const bString = String(bValue).toLowerCase();

    if (sortDirection === "asc") {
      return aString.localeCompare(bString);
    } else {
      return bString.localeCompare(aString);
    }
  });

  const displayedProcedures = showAllProcedures
    ? sortedProcedures
    : sortedProcedures.slice(0, defaultShowCount);

  const handleSort = (field: keyof ProcedureData) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const formatCurrency = (amount: number | undefined) => {
    if (amount === undefined) return "N/A";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getSavingsIndicator = (grossCharge: number, compareRate?: number) => {
    if (!compareRate) return null;

    const savings = ((grossCharge - compareRate) / grossCharge) * 100;

    if (savings > 20) {
      return (
        <TrendingDown
          className="w-4 h-4 text-green-600"
          title={`${savings.toFixed(0)}% savings`}
        />
      );
    } else if (savings < -20) {
      return (
        <TrendingUp
          className="w-4 h-4 text-red-600"
          title={`${Math.abs(savings).toFixed(0)}% more expensive`}
        />
      );
    }

    return null;
  };

  const getFrequencyBadge = (frequency?: string) => {
    if (!frequency) return null;

    const colors = {
      Common: "bg-green-100 text-green-800",
      Moderate: "bg-yellow-100 text-yellow-800",
      Rare: "bg-gray-100 text-gray-800",
    };

    return (
      <Badge
        variant="secondary"
        className={`text-xs ${colors[frequency as keyof typeof colors]}`}
      >
        {frequency}
      </Badge>
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-primary" />
                <span>Procedure Pricing at {entityName}</span>
              </CardTitle>
              <p className="text-muted-foreground">
                {entityType === "insurer"
                  ? "Covered procedures and negotiated rates with network providers"
                  : "Transparent pricing for medical procedures and services"}
              </p>
            </CardHeader>

            <CardContent>
              {/* Search and Filter Controls */}
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                  <Input
                    placeholder="Search procedures or codes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select
                  value={selectedFrequency}
                  onValueChange={setSelectedFrequency}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Procedures</SelectItem>
                    <SelectItem value="Common">Common</SelectItem>
                    <SelectItem value="Moderate">Moderate</SelectItem>
                    <SelectItem value="Rare">Rare</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Results Summary */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing {displayedProcedures.length} of{" "}
                  {filteredProcedures.length} procedures
                  {searchTerm && ` matching "${searchTerm}"`}
                </p>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowAllProcedures(!showAllProcedures)}
                    className="flex items-center gap-2"
                  >
                    {showAllProcedures ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                    {showAllProcedures
                      ? "Show Top Results"
                      : "Show All Procedures"}
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => (window.location.href = "/glossary")}
                    className="flex items-center gap-2"
                  >
                    <HelpCircle className="w-4 h-4" />
                    What do these prices mean?
                  </Button>
                </div>
              </div>

              {/* Data Table */}
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead
                        className="cursor-pointer hover:bg-gray-50"
                        onClick={() => handleSort("description")}
                      >
                        <div className="flex items-center gap-2">
                          Procedure
                          <ArrowUpDown className="w-4 h-4" />
                        </div>
                      </TableHead>
                      <TableHead>Code</TableHead>
                      <TableHead>Frequency</TableHead>
                      <TableHead
                        className="cursor-pointer hover:bg-gray-50 text-right"
                        onClick={() => handleSort("grossCharge")}
                      >
                        <div className="flex items-center justify-end gap-2">
                          Gross Charge
                          <ArrowUpDown className="w-4 h-4" />
                        </div>
                      </TableHead>
                      {entityType !== "insurer" && (
                        <>
                          <TableHead className="text-right">
                            In-Network Avg
                          </TableHead>
                          <TableHead className="text-right">
                            Self-Pay Rate
                          </TableHead>
                        </>
                      )}
                      {entityType === "insurer" && (
                        <TableHead className="text-right">
                          Negotiated Rate
                        </TableHead>
                      )}
                      <TableHead className="text-center">
                        <Info className="w-4 h-4 mx-auto" />
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {displayedProcedures.map((procedure) => (
                      <TableRow key={procedure.id} className="hover:bg-gray-50">
                        <TableCell>
                          <div>
                            <p className="font-medium">
                              {procedure.description}
                            </p>
                            {procedure.payerRates &&
                              procedure.payerRates.length > 0 && (
                                <p className="text-xs text-muted-foreground">
                                  {procedure.payerRates.length} payer rate
                                  {procedure.payerRates.length !== 1 ? "s" : ""}{" "}
                                  available
                                </p>
                              )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-xs">
                            {procedure.type} {procedure.code}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {getFrequencyBadge(procedure.frequency)}
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          {formatCurrency(procedure.grossCharge)}
                        </TableCell>
                        {entityType !== "insurer" && (
                          <>
                            <TableCell className="text-right">
                              <div className="flex items-center justify-end gap-2">
                                {formatCurrency(procedure.inNetworkAverage)}
                                {getSavingsIndicator(
                                  procedure.grossCharge,
                                  procedure.inNetworkAverage,
                                )}
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex items-center justify-end gap-2">
                                {formatCurrency(procedure.selfPayRate)}
                                {getSavingsIndicator(
                                  procedure.grossCharge,
                                  procedure.selfPayRate,
                                )}
                              </div>
                            </TableCell>
                          </>
                        )}
                        {entityType === "insurer" && (
                          <TableCell className="text-right">
                            {procedure.inNetworkAverage
                              ? formatCurrency(procedure.inNetworkAverage)
                              : "Varies by provider"}
                          </TableCell>
                        )}
                        <TableCell className="text-center">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                            onClick={() => {
                              // Future: Open procedure detail modal
                              console.log("View details for", procedure.id);
                            }}
                          >
                            <Info className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Show More Button */}
              {!showAllProcedures &&
                filteredProcedures.length > defaultShowCount && (
                  <div className="text-center mt-6">
                    <Button
                      variant="outline"
                      onClick={() => setShowAllProcedures(true)}
                      className="flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      Show All {filteredProcedures.length} Procedures
                    </Button>
                  </div>
                )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
