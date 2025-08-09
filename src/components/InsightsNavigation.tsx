// Removed Next.js Link - using regular anchor tags instead
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Lightbulb,
  TrendingUp,
  BarChart3,
  FileText,
  ArrowRight,
  Clock,
  Calendar,
} from "lucide-react";

interface InsightsNavigationProps {
  showFeatured?: boolean;
  featuredTruths?: any[];
}

export function InsightsNavigation({
  showFeatured = false,
  featuredTruths = [],
}: InsightsNavigationProps) {
  return (
    <div className="space-y-6">
      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="/insights/truths">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                Shocking Truths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Uncover hidden fees and billing practices
              </p>
            </CardContent>
          </Card>
        </a>

        <a href="/insights/visualizations">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-500" />
                Data Visualizations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Interactive charts and trends
              </p>
            </CardContent>
          </Card>
        </a>

        <a href="/insights/comparisons">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                Market Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Regional and national comparisons
              </p>
            </CardContent>
          </Card>
        </a>
      </div>

      {/* Featured Truths */}
      {showFeatured && featuredTruths.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Featured Insights</h3>
            <a href="/insights/truths">
              <Button variant="ghost" size="sm" className="gap-2">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredTruths.slice(0, 2).map((truth) => (
              <a key={truth.id} href={`/insights/truths/${truth.slug}`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="destructive" className="text-xs">
                        Shocking Truth
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-3 h-3" />
                        {truth.readingTime} min
                      </div>
                    </div>
                    <CardTitle className="text-sm line-clamp-2">
                      {truth.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                      {truth.description}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {new Date(truth.publishedDate).toLocaleDateString()}
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
