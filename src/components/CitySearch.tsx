"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import { Input } from "./ui/input";

interface CityOption {
  name: string;
  state: string;
  display: string;
}

interface CitySearchProps {
  value: string;
  onChange: (value: string) => void;
  onKeyPress?: (e: React.KeyboardEvent) => void;
  placeholder?: string;
}

const cities: CityOption[] = [
  { name: "New York", state: "NY", display: "New York, NY" },
  { name: "Los Angeles", state: "CA", display: "Los Angeles, CA" },
  { name: "Chicago", state: "IL", display: "Chicago, IL" },
  { name: "Houston", state: "TX", display: "Houston, TX" },
  { name: "Phoenix", state: "AZ", display: "Phoenix, AZ" },
  { name: "Philadelphia", state: "PA", display: "Philadelphia, PA" },
  { name: "San Antonio", state: "TX", display: "San Antonio, TX" },
  { name: "San Diego", state: "CA", display: "San Diego, CA" },
  { name: "Dallas", state: "TX", display: "Dallas, TX" },
  { name: "San Jose", state: "CA", display: "San Jose, CA" },
  { name: "Austin", state: "TX", display: "Austin, TX" },
  { name: "Jacksonville", state: "FL", display: "Jacksonville, FL" },
  { name: "Fort Worth", state: "TX", display: "Fort Worth, TX" },
  { name: "Columbus", state: "OH", display: "Columbus, OH" },
  { name: "Charlotte", state: "NC", display: "Charlotte, NC" },
  { name: "San Francisco", state: "CA", display: "San Francisco, CA" },
  { name: "Indianapolis", state: "IN", display: "Indianapolis, IN" },
  { name: "Seattle", state: "WA", display: "Seattle, WA" },
  { name: "Denver", state: "CO", display: "Denver, CO" },
  { name: "Boston", state: "MA", display: "Boston, MA" },
  { name: "El Paso", state: "TX", display: "El Paso, TX" },
  { name: "Detroit", state: "MI", display: "Detroit, MI" },
  { name: "Nashville", state: "TN", display: "Nashville, TN" },
  { name: "Portland", state: "OR", display: "Portland, OR" },
  { name: "Memphis", state: "TN", display: "Memphis, TN" },
  { name: "Oklahoma City", state: "OK", display: "Oklahoma City, OK" },
  { name: "Las Vegas", state: "NV", display: "Las Vegas, NV" },
  { name: "Louisville", state: "KY", display: "Louisville, KY" },
  { name: "Baltimore", state: "MD", display: "Baltimore, MD" },
  { name: "Milwaukee", state: "WI", display: "Milwaukee, WI" },
  { name: "Albuquerque", state: "NM", display: "Albuquerque, NM" },
  { name: "Tucson", state: "AZ", display: "Tucson, AZ" },
  { name: "Fresno", state: "CA", display: "Fresno, CA" },
  { name: "Sacramento", state: "CA", display: "Sacramento, CA" },
  { name: "Mesa", state: "AZ", display: "Mesa, AZ" },
  { name: "Kansas City", state: "MO", display: "Kansas City, MO" },
  { name: "Atlanta", state: "GA", display: "Atlanta, GA" },
  { name: "Long Beach", state: "CA", display: "Long Beach, CA" },
  { name: "Colorado Springs", state: "CO", display: "Colorado Springs, CO" },
  { name: "Raleigh", state: "NC", display: "Raleigh, NC" },
  { name: "Miami", state: "FL", display: "Miami, FL" },
  { name: "Virginia Beach", state: "VA", display: "Virginia Beach, VA" },
  { name: "Omaha", state: "NE", display: "Omaha, NE" },
  { name: "Oakland", state: "CA", display: "Oakland, CA" },
  { name: "Minneapolis", state: "MN", display: "Minneapolis, MN" },
  { name: "Tulsa", state: "OK", display: "Tulsa, OK" },
  { name: "Arlington", state: "TX", display: "Arlington, TX" },
  { name: "Tampa", state: "FL", display: "Tampa, FL" },
  { name: "New Orleans", state: "LA", display: "New Orleans, LA" },
  { name: "Wichita", state: "KS", display: "Wichita, KS" },
  { name: "Cleveland", state: "OH", display: "Cleveland, OH" },
  { name: "Bakersfield", state: "CA", display: "Bakersfield, CA" },
];

export function CitySearch({
  value,
  onChange,
  onKeyPress,
  placeholder = "Enter city, state or ZIP code",
}: CitySearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredCities, setFilteredCities] = useState<CityOption[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value && value.length > 0) {
      const filtered = cities
        .filter(
          (city) =>
            city.display.toLowerCase().includes(value.toLowerCase()) ||
            city.name.toLowerCase().includes(value.toLowerCase()) ||
            city.state.toLowerCase().includes(value.toLowerCase()),
        )
        .slice(0, 8);
      setFilteredCities(filtered);
    } else {
      setFilteredCities(cities.slice(0, 8));
    }
  }, [value]);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setIsOpen(true);
  };

  const handleCitySelect = (city: CityOption) => {
    onChange(city.display);
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.blur();
    } else if (e.key === "ArrowDown" && !isOpen) {
      setIsOpen(true);
    }

    if (onKeyPress) {
      onKeyPress(e);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          placeholder={placeholder}
          className="pl-10 pr-10"
          value={value}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      </div>

      {isOpen && filteredCities.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-popover border border-border rounded-md shadow-lg max-h-64 overflow-y-auto">
          {filteredCities.map((city, index) => (
            <button
              key={`${city.name}-${city.state}-${index}`}
              className="w-full px-4 py-3 text-left hover:bg-accent focus:bg-accent focus:outline-none border-b border-border/50 last:border-b-0 transition-colors"
              onClick={() => handleCitySelect(city)}
            >
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-muted-foreground mr-3 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm">{city.display}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
