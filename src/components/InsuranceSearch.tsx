"use client";

import { useState, useRef, useEffect } from "react";
import { Shield, ChevronDown } from "lucide-react";
import { cn } from "./ui/utils";

interface InsuranceOption {
  value: string;
  display: string;
  description?: string;
}

interface InsuranceSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const insuranceTypes: InsuranceOption[] = [
  {
    value: "all",
    display: "All Insurance Types",
    description: "Show prices for all payment methods",
  },
  {
    value: "medicare",
    display: "Medicare",
    description: "Federal health insurance program",
  },
  {
    value: "medicaid",
    display: "Medicaid",
    description: "State-based health insurance program",
  },
  {
    value: "private",
    display: "Private Insurance",
    description: "Employer or individual health plans",
  },
  {
    value: "cash",
    display: "Cash Pay / Uninsured",
    description: "Self-pay pricing without insurance",
  },
];

export function InsuranceSearch({
  value,
  onChange,
  placeholder = "Payer",
}: InsuranceSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selectedOption =
    insuranceTypes.find((option) => option.value === value) ||
    insuranceTypes[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionSelect = (option: InsuranceOption) => {
    onChange(option.value);
    setIsOpen(false);
    buttonRef.current?.blur();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      buttonRef.current?.blur();
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={buttonRef}
        type="button"
        className={cn(
          "flex h-9 w-full items-center justify-between rounded-md border border-input bg-input-background px-3 py-1 text-base transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "text-left",
        )}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
      >
        <div className="flex items-center">
          <Shield className="w-4 h-4 text-muted-foreground mr-3" />
          <span
            className={cn(
              "text-sm",
              value ? "text-foreground" : "text-muted-foreground",
            )}
          >
            {value ? selectedOption.display : placeholder}
          </span>
        </div>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-popover border border-border rounded-md shadow-lg">
          {insuranceTypes.map((option, index) => (
            <button
              key={option.value}
              className="w-full px-4 py-3 text-left hover:bg-accent focus:bg-accent focus:outline-none border-b border-border/50 last:border-b-0 transition-colors"
              onClick={() => handleOptionSelect(option)}
            >
              <div className="flex items-start">
                <Shield className="w-4 h-4 text-muted-foreground mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-sm">{option.display}</div>
                  {option.description && (
                    <div className="text-xs text-muted-foreground mt-1">
                      {option.description}
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
