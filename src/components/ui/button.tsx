/**
 * HealthFees.org Official Button System
 *
 * Implements the official HealthFees.org button hierarchy for consistent UX:
 *
 * 🔵 PRIMARY CTA (variant="primary")
 * - Purpose: Page-defining or high-priority actions (ONE per visual block)
 * - Style: Solid blue (#2563EB) background, white text
 * - Font: Inter, Medium, sentence case
 * - Dimensions: 44px height desktop / 40px mobile, 8px radius
 * - Hover: Slightly darker blue (#1D4ED8) with subtle glow
 * - Examples: "+ Ask AI", "Compare Prices", "Get Started Free"
 *
 * ⚪ SECONDARY CTA (variant="secondary")
 * - Purpose: Supporting actions or alternatives
 * - Style: White background, 1px solid #2563EB border, blue text
 * - Hover: Soft blue background tint (#F0F5FF)
 * - Same padding, font, and height as Primary
 * - Examples: "Learn More", "Browse Hospitals"
 *
 * 🔗 TERTIARY CTA (variant="tertiary")
 * - Purpose: Low-priority actions, inline links
 * - Style: No background, no border, blue text (#2563EB)
 * - Hover: Underline only
 * - Font size: 90% of base
 * - Examples: "Read More", "Compare by Insurance"
 *
 * 🎯 DESIGN TOKENS:
 * - Primary Blue: #2563EB
 * - Hover Blue: #1D4ED8
 * - Light Blue BG: #F0F5FF
 * - Font: Inter (system fallback)
 * - Height: 44px desktop, 40px mobile
 * - Radius: 8px
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        // 🔵 PRIMARY CTA - Page-defining actions
        primary:
          "bg-[#2563EB] hover:bg-[#1D4ED8] hover:shadow-lg text-white font-medium rounded-lg border-0 capitalize",

        // ⚪ SECONDARY CTA - Supporting actions
        secondary:
          "bg-white border border-[#2563EB] text-[#2563EB] hover:bg-[#F0F5FF] hover:text-[#2563EB] font-medium rounded-lg capitalize",

        // 🔗 TERTIARY CTA - Low priority links
        tertiary:
          "bg-transparent border-0 text-[#2563EB] hover:underline font-normal shadow-none hover:shadow-none underline-offset-4",

        // ✨ ASK AI CTA - Special hero button with racing glow
        "ask-ai":
          "bg-[#10b981] hover:bg-[#059669] text-white font-bold rounded-lg border-0 capitalize relative overflow-hidden",

        // Legacy variants for backward compatibility
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 rounded-lg",
        outline:
          "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-lg",
        link: "text-primary underline-offset-4 hover:underline shadow-none p-0",
      },
      size: {
        // Official HealthFees.org sizes
        default: "h-11 px-6 text-base", // 44px height desktop
        mobile: "h-10 px-5 text-base", // 40px height mobile
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-8 text-lg",
        xl: "h-14 px-10 text-xl",
        icon: "h-11 w-11",
        // Special size for tertiary links (90% of base)
        tertiary: "h-auto p-0 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
    }
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  // Auto-adjust size for tertiary buttons
  const adjustedSize = variant === "tertiary" ? "tertiary" : size;

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size: adjustedSize, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };

// Re-export TertiaryCTA for convenience
export { TertiaryCTA, TertiaryCTAButton } from "./TertiaryCTA";
