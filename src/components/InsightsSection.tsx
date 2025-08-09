import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { TrendingDown, TrendingUp, DollarSign, Users, MapPin, Heart } from "lucide-react";

export function InsightsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Healthcare Price Insights</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understanding healthcare pricing trends to help you make informed decisions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Savings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">$3,247</div>
              <p className="text-xs text-muted-foreground">
                per procedure comparison
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Price Variations</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">340%</div>
              <p className="text-xs text-muted-foreground">
                average price difference
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Users Helped</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4M+</div>
              <p className="text-xs text-muted-foreground">
                patients and families
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Coverage Areas</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">All 50</div>
              <p className="text-xs text-muted-foreground">
                states covered
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingDown className="w-5 h-5 mr-2 text-green-600" />
                Procedures with Biggest Savings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { procedure: 'MRI Brain', savings: '$2,840', range: '$1,200 - $8,500' },
                  { procedure: 'Knee Replacement', savings: '$15,600', range: '$28,000 - $65,000' },
                  { procedure: 'Colonoscopy', savings: '$1,850', range: '$600 - $3,200' },
                  { procedure: 'CT Scan Chest', savings: '$980', range: '$400 - $2,100' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-medium">{item.procedure}</p>
                      <p className="text-sm text-muted-foreground">Range: {item.range}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      Save {item.savings}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="w-5 h-5 mr-2 text-red-500" />
                Most Compared Procedures
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { procedure: 'Emergency Room Visit', comparisons: '45,231' },
                  { procedure: 'MRI Scan', comparisons: '32,847' },
                  { procedure: 'Blood Tests', comparisons: '28,692' },
                  { procedure: 'X-Ray', comparisons: '24,156' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium">{item.procedure}</p>
                      <p className="text-sm text-muted-foreground">This month</p>
                    </div>
                    <Badge variant="secondary">
                      {item.comparisons} searches
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}