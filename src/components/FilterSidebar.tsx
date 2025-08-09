import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { X } from "lucide-react";

export function FilterSidebar() {
  return (
    <div className="w-80 space-y-6">
      {/* Active Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Active Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Badge variant="secondary" className="mr-1">
              Cardiology
              <X className="w-3 h-3 ml-1 cursor-pointer" />
            </Badge>
            <Badge variant="secondary" className="mr-1">
              &lt; $5,000
              <X className="w-3 h-3 ml-1 cursor-pointer" />
            </Badge>
            <Badge variant="secondary" className="mr-1">
              4+ Stars
              <X className="w-3 h-3 ml-1 cursor-pointer" />
            </Badge>
          </div>
          <Button variant="ghost" size="sm" className="mt-3 p-0">
            Clear All Filters
          </Button>
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-sm text-muted-foreground">Cash Pay Price</Label>
            <Slider
              defaultValue={[0, 50000]}
              max={100000}
              step={1000}
              className="mt-2"
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-1">
              <span>$0</span>
              <span>$100,000+</span>
            </div>
          </div>
          <Separator />
          <div>
            <Label className="text-sm text-muted-foreground">Insurance Price</Label>
            <Slider
              defaultValue={[0, 25000]}
              max={50000}
              step={500}
              className="mt-2"
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-1">
              <span>$0</span>
              <span>$50,000+</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Distance */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Distance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="5-miles" />
            <Label htmlFor="5-miles">Within 5 miles</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="10-miles" />
            <Label htmlFor="10-miles">Within 10 miles</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="25-miles" />
            <Label htmlFor="25-miles">Within 25 miles</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="50-miles" />
            <Label htmlFor="50-miles">Within 50 miles</Label>
          </div>
        </CardContent>
      </Card>

      {/* Quality Rating */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quality Rating</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="5-stars" />
            <Label htmlFor="5-stars">5 Stars</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="4-stars" />
            <Label htmlFor="4-stars">4+ Stars</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="3-stars" />
            <Label htmlFor="3-stars">3+ Stars</Label>
          </div>
        </CardContent>
      </Card>

      {/* Specialties */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Medical Specialties</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            'Cardiology',
            'Orthopedics',
            'Emergency Care',
            'Radiology',
            'Surgery',
            'Maternity',
            'Oncology',
            'Neurology'
          ].map((specialty) => (
            <div key={specialty} className="flex items-center space-x-2">
              <Checkbox id={specialty.toLowerCase()} />
              <Label htmlFor={specialty.toLowerCase()}>{specialty}</Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Insurance Types */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Insurance Accepted</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            'Medicare',
            'Medicaid',
            'Blue Cross Blue Shield',
            'Aetna',
            'Cigna',
            'UnitedHealth',
            'Kaiser Permanente',
            'Cash Pay Available'
          ].map((insurance) => (
            <div key={insurance} className="flex items-center space-x-2">
              <Checkbox id={insurance.toLowerCase().replace(/\s+/g, '-')} />
              <Label htmlFor={insurance.toLowerCase().replace(/\s+/g, '-')}>{insurance}</Label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}