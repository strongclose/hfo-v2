import React from "react";
import { Loader2, Search, Building, Users } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { Card, CardContent, CardHeader } from "./ui/card";

// Generic loading spinner
export function LoadingSpinner({
  size = "default",
  className = "",
}: {
  size?: "sm" | "default" | "lg";
  className?: string;
}) {
  const sizeClasses = {
    sm: "h-4 w-4",
    default: "h-6 w-6",
    lg: "h-8 w-8",
  };

  return (
    <Loader2 className={`animate-spin ${sizeClasses[size]} ${className}`} />
  );
}

// Page loading component
export function PageLoading({ message = "Loading..." }: { message?: string }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center space-y-4">
        <LoadingSpinner size="lg" className="mx-auto text-blue-600" />
        <p className="text-gray-600 font-medium">{message}</p>
      </div>
    </div>
  );
}

// Section loading component
export function SectionLoading({
  message = "Loading...",
  className = "",
}: {
  message?: string;
  className?: string;
}) {
  return (
    <div className={`py-16 text-center ${className}`}>
      <LoadingSpinner size="lg" className="mx-auto text-blue-600 mb-4" />
      <p className="text-gray-600">{message}</p>
    </div>
  );
}

// Card skeleton for lists
export function CardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
      </CardContent>
    </Card>
  );
}

// Hospital directory loading
export function HospitalListLoading() {
  return (
    <div className="space-y-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="p-6 bg-white rounded-lg border">
          <div className="flex items-start justify-between">
            <div className="flex-1 space-y-3">
              <Skeleton className="h-6 w-2/3" />
              <div className="flex items-center gap-4">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-28" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <Skeleton className="h-12 rounded" />
                <Skeleton className="h-12 rounded" />
                <Skeleton className="h-12 rounded" />
                <Skeleton className="h-12 rounded" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Search loading with context
export function SearchLoading({ searchType }: { searchType: string }) {
  const getIcon = () => {
    switch (searchType) {
      case "hospitals":
        return <Building className="h-6 w-6" />;
      case "doctors":
        return <Users className="h-6 w-6" />;
      default:
        return <Search className="h-6 w-6" />;
    }
  };

  return (
    <div className="py-12 text-center">
      <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
        {getIcon()}
      </div>
      <LoadingSpinner size="lg" className="mx-auto text-blue-600 mb-4" />
      <p className="text-gray-600 font-medium">Searching {searchType}...</p>
      <p className="text-sm text-gray-500 mt-2">This may take a few seconds</p>
    </div>
  );
}

// Chart loading
export function ChartLoading() {
  return (
    <div className="h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 relative">
      <div className="absolute inset-6 flex items-center justify-center">
        <div className="text-center space-y-4">
          <LoadingSpinner size="lg" className="mx-auto text-blue-600" />
          <p className="text-gray-600 font-medium">Loading chart data...</p>
        </div>
      </div>
    </div>
  );
}

// Table loading
export function TableLoading({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center space-x-4 p-4">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 flex-1" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
      ))}
    </div>
  );
}

// Button loading state
export function ButtonLoading({
  children,
  isLoading = false,
  ...props
}: {
  children: React.ReactNode;
  isLoading?: boolean;
  [key: string]: any;
}) {
  return (
    <button {...props} disabled={isLoading || props.disabled}>
      {isLoading && <LoadingSpinner size="sm" className="mr-2" />}
      {children}
    </button>
  );
}

// Form loading overlay
export function FormLoading({
  message = "Processing...",
}: {
  message?: string;
}) {
  return (
    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center rounded-lg">
      <div className="text-center space-y-3">
        <LoadingSpinner size="lg" className="mx-auto text-blue-600" />
        <p className="text-gray-600 font-medium">{message}</p>
      </div>
    </div>
  );
}
