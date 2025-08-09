import React from "react";
import { Button } from "./ui/button";
import { Search, Target, Sparkles } from "lucide-react";

interface StandardizedCTAProps {
  onCTAAssistant: () => void;
  onNavigateToComparePrices?: () => void;
  onNavigateToInternalSearch?: () => void;
}

export function StandardizedCTA({ 
  onCTAAssistant, 
  onNavigateToComparePrices,
  onNavigateToInternalSearch 
}: StandardizedCTAProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Find the Best Healthcare Prices?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get instant answers or use our comparison tools to save thousands on medical procedures.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={onCTAAssistant}
            className="ask-ai-button px-8 py-4 rounded-lg text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group"
          >
            <Sparkles className="w-6 h-6 group-hover:animate-spin" />
            Ask AI Assistant
            <span className="sparkle-icon">✨</span>
          </button>
          
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            {onNavigateToComparePrices && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onNavigateToComparePrices} 
                className="text-muted-foreground hover:text-foreground border border-border/50 hover:border-border"
              >
                <Search className="w-4 h-4 mr-2" />
                Compare Prices
              </Button>
            )}
            {onNavigateToComparePrices && onNavigateToInternalSearch && (
              <span className="hidden sm:block text-muted-foreground/50">|</span>
            )}
            {onNavigateToInternalSearch && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onNavigateToInternalSearch} 
                className="text-muted-foreground hover:text-foreground border border-border/50 hover:border-border"
              >
                <Target className="w-4 h-4 mr-2" />
                Find Hospitals
              </Button>
            )}
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground/70 mt-4">
          💬 Try asking: "What hospital charges under $500 for an MRI in Boston?"
        </p>
      </div>
    </section>
  );
}