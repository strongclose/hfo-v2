import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [
    { label: 'Home', href: '/' },
    { label: 'Directories', href: '/directories' },
    ...items
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-3">
          <ol className="flex items-center space-x-2 text-sm">
            {allItems.map((item, index) => (
              <li key={index} className="flex items-center">
                {index === 0 && <Home className="w-4 h-4 mr-2 text-gray-500" />}
                
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="text-gray-900 font-medium">{item.label}</span>
                )}
                
                {index < allItems.length - 1 && (
                  <ChevronRight className="w-4 h-4 ml-2 text-gray-400" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </nav>
  );
}
