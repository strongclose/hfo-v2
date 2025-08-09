import * as React from "react";
import { cn } from "./utils";
import { ChevronDown } from "lucide-react";

interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

const Select = ({ value, onValueChange, children }: SelectProps) => {
  const [open, setOpen] = React.useState(false);
  
  return (
    <div className="relative">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { 
            open, 
            setOpen, 
            value, 
            onValueChange 
          } as any);
        }
        return child;
      })}
    </div>
  );
};

interface SelectTriggerProps {
  className?: string;
  children: React.ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

const SelectTrigger = ({ className, children, open, setOpen }: SelectTriggerProps) => {
  return (
    <button
      type="button"
      className={cn(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      onClick={() => setOpen?.(!open)}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  );
};

interface SelectValueProps {
  placeholder?: string;
  value?: string;
}

const SelectValue = ({ placeholder, value }: SelectValueProps) => {
  return (
    <span className="block truncate">
      {value || placeholder}
    </span>
  );
};

interface SelectContentProps {
  className?: string;
  children: React.ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

const SelectContent = ({ className, children, open, setOpen }: SelectContentProps) => {
  if (!open) return null;

  return (
    <>
      <div 
        className="fixed inset-0 z-40" 
        onClick={() => setOpen?.(false)} 
      />
      <div
        className={cn(
          "absolute top-full z-50 mt-1 w-full rounded-md border bg-popover text-popover-foreground shadow-md",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
  onValueChange?: (value: string) => void;
  setOpen?: (open: boolean) => void;
}

const SelectItem = ({ value, children, className, onValueChange, setOpen }: SelectItemProps) => {
  return (
    <div
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      onClick={() => {
        onValueChange?.(value);
        setOpen?.(false);
      }}
    >
      {children}
    </div>
  );
};

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
};
