import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ArrowUpDown, MapPin, Star, DollarSign, Users, ExternalLink } from 'lucide-react';

interface ListingItem {
  id: string;
  name: string;
  href: string;
  location: string;
  transparencyScore?: string;
  medianPrice?: string;
  networkSize?: string;
  specialties?: string[];
  type: 'provider' | 'payer' | 'procedure';
  quickLinks?: Array<{
    label: string;
    href: string;
  }>;
}

interface ListingsTableProps {
  title: string;
  items: ListingItem[];
  showFilters?: boolean;
  sortOptions?: string[];
  onSort?: (option: string) => void;
  onFilter?: (filters: Record<string, string>) => void;
}

export function ListingsTable({
  title,
  items,
  showFilters = true,
  sortOptions = ["Best Transparency Score", "A to Z", "Lowest Median Price"],
  onSort,
  onFilter
}: ListingsTableProps) {
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

  const handleSortChange = (option: string) => {
    setSortBy(option);
    if (onSort) {
      onSort(option);
    }
  };

  const getTransparencyColor = (score: string) => {
    if (score.startsWith('A')) return 'bg-green-100 text-green-800 border-green-200';
    if (score.startsWith('B')) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (score.startsWith('C')) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
            {title}
          </h2>
          
          {showFilters && (
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="space-y-4">
          {paginatedItems.map((item) => (
            <Card key={item.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors mb-2">
                          <a href={item.href}>{item.name}</a>
                        </h3>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {item.location}
                          </span>
                          
                          {item.transparencyScore && (
                            <Badge className={getTransparencyColor(item.transparencyScore)}>
                              <Star className="w-3 h-3 mr-1" />
                              {item.transparencyScore} Transparency
                            </Badge>
                          )}
                          
                          {item.medianPrice && (
                            <span className="flex items-center gap-1 font-medium">
                              <DollarSign className="w-4 h-4" />
                              {item.medianPrice} median
                            </span>
                          )}
                          
                          {item.networkSize && (
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {item.networkSize} network
                            </span>
                          )}
                        </div>

                        {item.specialties && item.specialties.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {item.specialties.slice(0, 3).map((specialty, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                            {item.specialties.length > 3 && (
                              <Badge variant="secondary" className="text-xs">
                                +{item.specialties.length - 3} more
                              </Badge>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {item.quickLinks && item.quickLinks.map((link, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-blue-200 text-blue-600 hover:bg-blue-50"
                      >
                        <a href={link.href}>
                          {link.label}
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </Button>
                    ))}
                    
                    <Button
                      asChild
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <a href={item.href}>
                        View Details
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum = currentPage <= 3 ? i + 1 : currentPage - 2 + i;
              if (pageNum > totalPages) return null;
              
              return (
                <Button
                  key={pageNum}
                  variant={pageNum === currentPage ? "default" : "outline"}
                  onClick={() => setCurrentPage(pageNum)}
                  className={pageNum === currentPage ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {pageNum}
                </Button>
              );
            })}
            
            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
