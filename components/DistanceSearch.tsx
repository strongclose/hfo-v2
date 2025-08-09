"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { cn } from "./ui/utils";

interface DistanceSearchProps {
  value: number;
  onChange: (distance: number) => void;
  onKeyPress?: (e: React.KeyboardEvent) => void;
  placeholder?: string;
}

export function DistanceSearch({
  value,
  onChange,
  onKeyPress,
  placeholder = "25 miles",
}: DistanceSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const distanceOptions = [
    { value: 10, label: "10 miles" },
    { value: 25, label: "25 miles" },
    { value: 50, label: "50 miles" },
    { value: 100, label: "100 miles" },
  ];

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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (distance: number) => {
    onChange(distance);
    setIsOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setIsOpen(!isOpen);
    }
    onKeyPress?.(e);
  };

  const selectedOption = distanceOptions.find(
    (option) => option.value === value,
  );

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
        onKeyPress={handleKeyPress}
        tabIndex={0}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <div className="flex items-center">
          <MapPin className="w-4 h-4 text-muted-foreground mr-3" />
          <span className="text-sm text-foreground">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-muted-foreground transition-transform",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-popover border border-border rounded-md shadow-lg max-h-60 overflow-y-auto">
          {distanceOptions.map((option) => (
            <button
              key={option.value}
              className="w-full px-4 py-3 text-left hover:bg-accent focus:bg-accent focus:outline-none border-b border-border/50 last:border-b-0 transition-colors"
              onClick={() => handleSelect(option.value)}
            >
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-muted-foreground mr-3" />
                <span className="text-sm">{option.label}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
