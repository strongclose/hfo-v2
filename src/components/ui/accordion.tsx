import * as React from "react";
import { cn } from "./utils";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  type?: "single" | "multiple";
  children: React.ReactNode;
  className?: string;
}

const Accordion = ({ type = "single", children, className }: AccordionProps) => {
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  const toggleItem = (value: string) => {
    if (type === "single") {
      setOpenItems(openItems.includes(value) ? [] : [value]);
    } else {
      setOpenItems(prev => 
        prev.includes(value) 
          ? prev.filter(item => item !== value)
          : [...prev, value]
      );
    }
  };

  return (
    <div className={cn("w-full", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { 
            openItems, 
            toggleItem 
          } as any);
        }
        return child;
      })}
    </div>
  );
};

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
  openItems?: string[];
  toggleItem?: (value: string) => void;
}

const AccordionItem = ({ value, children, className, openItems, toggleItem }: AccordionItemProps) => {
  const isOpen = openItems?.includes(value);

  return (
    <div className={cn("border-b", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { 
            value,
            isOpen,
            toggleItem 
          } as any);
        }
        return child;
      })}
    </div>
  );
};

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  value?: string;
  isOpen?: boolean;
  toggleItem?: (value: string) => void;
}

const AccordionTrigger = ({ children, className, value, isOpen, toggleItem }: AccordionTriggerProps) => {
  return (
    <button
      type="button"
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      onClick={() => value && toggleItem?.(value)}
    >
      {children}
      <ChevronDown 
        className={cn(
          "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
          isOpen && "rotate-180"
        )} 
      />
    </button>
  );
};

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
}

const AccordionContent = ({ children, className, isOpen }: AccordionContentProps) => {
  return (
    <div
      className={cn(
        "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        isOpen ? "animate-accordion-down" : "animate-accordion-up hidden"
      )}
    >
      <div className={cn("pb-4 pt-0", className)}>
        {children}
      </div>
    </div>
  );
};

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
};
