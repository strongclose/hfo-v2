import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  minHeight?: string;
}

export function LazySection({
  children,
  fallback,
  className = '',
  threshold = 0.1,
  rootMargin = '150px 0px',
  minHeight = '400px'
}: LazySectionProps) {
  const { elementRef, shouldRender } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true
  });

  // Default loading skeleton
  const defaultFallback = (
    <div className={`${className} animate-pulse`} style={{ minHeight }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-8"></div>
          <div className="h-8 bg-gray-200 rounded w-96 mx-auto mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }, (_, idx) => (
            <div key={idx} className="space-y-4">
              <div className="h-48 bg-gray-200 rounded-xl"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={elementRef} className={className}>
      {shouldRender ? children : (fallback || defaultFallback)}
    </div>
  );
}
