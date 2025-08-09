import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowUpDown, TrendingUp, TrendingDown } from "lucide-react";

interface ProcedurePrice {
  hospital: string;
  location: string;
  cashPrice: number;
  insurancePrice: number;
  qualityRating: number;
  savings: number;
  trend: 'up' | 'down' | 'stable';
}

interface PricingTableProps {
  procedure: string;
  prices: ProcedurePrice[];
}

export function PricingTable({ procedure, prices }: PricingTableProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Pricing for {procedure}</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <ArrowUpDown className="w-4 h-4 mr-2" />
            Sort by Price
          </Button>
          <Button variant="outline" size="sm">
            Export Data
          </Button>
        </div>
      </div>

      <div className="rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Hospital</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="text-right">Cash Price</TableHead>
              <TableHead className="text-right">Insurance Price</TableHead>
              <TableHead className="text-center">Quality Rating</TableHead>
              <TableHead className="text-right">Potential Savings</TableHead>
              <TableHead className="text-center">Price Trend</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {prices.map((price, index) => (
              <TableRow key={index} className={index === 0 ? 'bg-green-50' : ''}>
                <TableCell className="font-medium">
                  {price.hospital}
                  {index === 0 && (
                    <Badge className="ml-2 bg-green-100 text-green-800">
                      Best Price
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-muted-foreground">{price.location}</TableCell>
                <TableCell className="text-right font-semibold">
                  {formatCurrency(price.cashPrice)}
                </TableCell>
                <TableCell className="text-right">
                  {formatCurrency(price.insurancePrice)}
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center">
                    <span className="mr-1">{price.qualityRating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < price.qualityRating ? 'bg-yellow-400' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <span className="text-green-600 font-semibold">
                    {formatCurrency(price.savings)}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  {price.trend === 'up' && <TrendingUp className="w-4 h-4 text-red-500 mx-auto" />}
                  {price.trend === 'down' && <TrendingDown className="w-4 h-4 text-green-500 mx-auto" />}
                  {price.trend === 'stable' && <div className="w-4 h-1 bg-gray-400 mx-auto rounded" />}
                </TableCell>
                <TableCell>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}