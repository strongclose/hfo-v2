import * as React from "react";
import { cn } from "./utils";
import { ChevronDown } from "lucide-react";

interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const Select = ({ value, onValueChange, children, disabled }: SelectProps) => {
  const [open, setOpen] = React.useState(false);

  const handleSetOpen = React.useCallback((newOpen: boolean) => {
    console.log('Select setOpen called:', newOpen);
    setOpen(newOpen);
  }, []);

  return (
    <div className="relative">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            open,
            setOpen: handleSetOpen,
            value,
            onValueChange,
            disabled
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
  disabled?: boolean;
}

const SelectTrigger = ({ className, children, open, setOpen, disabled }: SelectTriggerProps) => {
  const handleClick = () => {
    console.log('SelectTrigger clicked, disabled:', disabled, 'open:', open);
    if (!disabled && setOpen) {
      setOpen(!open);
    }
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      onClick={handleClick}
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
  console.log('SelectValue render, value:', value, 'placeholder:', placeholder);
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

const SelectContent = ({ className, children, open, setOpen, onValueChange }: SelectContentProps & { onValueChange?: (value: string) => void }) => {
  console.log('SelectContent render, open:', open);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={() => setOpen?.(false)}
      />
      <div
        className={cn(
          "absolute top-full left-0 right-0 z-50 mt-1 rounded-md border border-gray-200 bg-white shadow-lg max-h-60 overflow-y-auto",
          className
        )}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              onValueChange,
              setOpen
            } as any);
          }
          return child;
        })}
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
  const handleClick = () => {
    console.log('SelectItem clicked:', value, 'onValueChange:', !!onValueChange, 'setOpen:', !!setOpen);
    onValueChange?.(value);
    setOpen?.(false);
  };

  return (
    <div
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center px-3 py-2 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100",
        className
      )}
      onClick={handleClick}
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
