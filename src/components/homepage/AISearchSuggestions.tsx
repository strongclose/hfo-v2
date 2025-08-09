"use client";

import { Button } from "../ui/button";
import { MessageCircle } from "lucide-react";

interface AISearchSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void;
}

export function AISearchSuggestions({
  onSuggestionClick,
}: AISearchSuggestionsProps) {
  const suggestions = [
    "How much does a C-section cost in San Francisco?",
    "Which hospital is cheapest for an MRI?",
    "What's the transparency score for Kaiser in LA?",
    "Compare colonoscopy prices in Orange County",
    "Find the best value for knee replacement surgery",
    "What's the average cost of emergency room visit?",
  ];

  return (
    <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-200">
      <div className="flex items-center gap-2 mb-4">
        <MessageCircle className="w-5 h-5 text-blue-600" />
        <h4 className="text-lg font-semibold text-blue-900">
          Not sure what to ask? Try one of these:
        </h4>
      </div>

      <div className="overflow-x-auto">
        <div className="flex gap-3 pb-2">
          {suggestions.map((suggestion, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => onSuggestionClick(suggestion)}
              className="whitespace-nowrap bg-white border-blue-300 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-full text-sm font-medium flex-shrink-0"
            >
              "{suggestion}"
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
