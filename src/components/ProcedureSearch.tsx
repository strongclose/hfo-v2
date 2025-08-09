"use client";

import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

interface Procedure {
  name: string;
  cptCode: string;
  category: string;
}

interface ProcedureSearchProps {
  value: string;
  onChange: (value: string) => void;
  onKeyPress?: (e: React.KeyboardEvent) => void;
  placeholder?: string;
  className?: string;
}

const procedures: Procedure[] = [
  // Imaging
  { name: "MRI Brain (with contrast)", cptCode: "70553", category: "Imaging" },
  {
    name: "MRI Brain (without contrast)",
    cptCode: "70551",
    category: "Imaging",
  },
  { name: "CT Scan Head", cptCode: "70460", category: "Imaging" },
  { name: "CT Scan Chest", cptCode: "71250", category: "Imaging" },
  { name: "CT Scan Abdomen", cptCode: "74150", category: "Imaging" },
  { name: "X-Ray Chest", cptCode: "71020", category: "Imaging" },
  { name: "X-Ray Hand", cptCode: "73120", category: "Imaging" },
  { name: "Ultrasound Abdomen", cptCode: "76700", category: "Imaging" },
  { name: "Mammogram", cptCode: "77067", category: "Imaging" },
  { name: "DEXA Bone Density", cptCode: "77080", category: "Imaging" },

  // Laboratory
  {
    name: "Complete Blood Count (CBC)",
    cptCode: "85025",
    category: "Laboratory",
  },
  { name: "Basic Metabolic Panel", cptCode: "80048", category: "Laboratory" },
  {
    name: "Comprehensive Metabolic Panel",
    cptCode: "80053",
    category: "Laboratory",
  },
  { name: "Lipid Panel", cptCode: "80061", category: "Laboratory" },
  { name: "Thyroid Function Tests", cptCode: "84443", category: "Laboratory" },
  { name: "Hemoglobin A1c", cptCode: "83036", category: "Laboratory" },
  { name: "PSA Test", cptCode: "84153", category: "Laboratory" },
  { name: "Vitamin D Test", cptCode: "82306", category: "Laboratory" },

  // Procedures
  { name: "Colonoscopy (screening)", cptCode: "45378", category: "Procedures" },
  { name: "Upper Endoscopy", cptCode: "43235", category: "Procedures" },
  { name: "Cardiac Catheterization", cptCode: "93458", category: "Procedures" },
  { name: "Arthroscopy Knee", cptCode: "29881", category: "Procedures" },
  { name: "Cataract Surgery", cptCode: "66984", category: "Procedures" },
  { name: "Gallbladder Removal", cptCode: "47562", category: "Procedures" },

  // Emergency & Urgent Care
  {
    name: "Emergency Room Visit (Level 4)",
    cptCode: "99284",
    category: "Emergency",
  },
  {
    name: "Emergency Room Visit (Level 5)",
    cptCode: "99285",
    category: "Emergency",
  },
  { name: "Urgent Care Visit", cptCode: "99213", category: "Emergency" },

  // Cardiology
  { name: "Echocardiogram", cptCode: "93306", category: "Cardiology" },
  { name: "Stress Test", cptCode: "93017", category: "Cardiology" },
  { name: "EKG", cptCode: "93000", category: "Cardiology" },

  // Orthopedics
  { name: "Hip Replacement", cptCode: "27130", category: "Orthopedics" },
  { name: "Knee Replacement", cptCode: "27447", category: "Orthopedics" },
  { name: "MRI Knee", cptCode: "73721", category: "Orthopedics" },
];

export function ProcedureSearch({
  value,
  onChange,
  onKeyPress,
  placeholder = "Enter procedure or CPT code",
  className = "",
}: ProcedureSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredProcedures, setFilteredProcedures] = useState<Procedure[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value.length > 0) {
      const filtered = procedures.filter(
        (procedure) =>
          procedure.name.toLowerCase().includes(value.toLowerCase()) ||
          procedure.cptCode.includes(value) ||
          procedure.category.toLowerCase().includes(value.toLowerCase()),
      );
      setFilteredProcedures(filtered.slice(0, 8)); // Limit to 8 results
      setIsOpen(filtered.length > 0);
    } else {
      setFilteredProcedures([]);
      setIsOpen(false);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectProcedure = (procedure: Procedure) => {
    onChange(`${procedure.name} (${procedure.cptCode})`);
    setIsOpen(false);
  };

  const handleInputFocus = () => {
    if (value.length > 0 && filteredProcedures.length > 0) {
      setIsOpen(true);
    }
  };

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
      <Input
        ref={inputRef}
        placeholder={placeholder}
        className={`pl-10 ${className}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={onKeyPress}
        onFocus={handleInputFocus}
        autoComplete="off"
      />

      {isOpen && filteredProcedures.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 z-50 mt-1 bg-popover border border-border rounded-md shadow-lg max-h-80 overflow-y-auto"
        >
          {filteredProcedures.map((procedure, index) => (
            <div
              key={`${procedure.cptCode}-${index}`}
              className="px-4 py-3 hover:bg-accent cursor-pointer border-b border-border/50 last:border-b-0 transition-colors"
              onClick={() => handleSelectProcedure(procedure)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="font-medium text-sm">{procedure.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    CPT: {procedure.cptCode} • {procedure.category}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {value.length > 2 && filteredProcedures.length === 0 && (
            <div className="px-4 py-3 text-sm text-muted-foreground">
              No procedures found. Try searching by procedure name or CPT code.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
