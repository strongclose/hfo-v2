/**
 * HealthFees.org TertiaryCTA Component
 *
 * Standardizes all low-friction, text-based call-to-action links across the site.
 * Replaces one-off blue text links like "See the Data", "Compare Plans", etc.
 *
 * Design Specifications:
 * - Font: Inter (locked globally for CTA components)
 * - Size: 16px desktop / 14px mobile (with small variant at 14px)
 * - Weight: Medium (500)
 * - Color: Brand blue #2563EB
 * - Hover: Underline only (no color change, glow, or shadow)
 * - Transform: Sentence case (never all caps)
 * - Background/Border: None
 *
 * Usage Examples:
 * <TertiaryCTA href="/data">See the Data</TertiaryCTA>
 * <TertiaryCTA href="/compare" withArrow>Compare Plans</TertiaryCTA>
 * <TertiaryCTA href="/search" size="small">Search Procedures</TertiaryCTA>
 */

import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const tertiaryCTAVariants = cva(
  // Base styles - locked to Inter font family
  "inline-flex items-center font-sans text-[#2563EB] font-medium transition-all duration-200 hover:underline underline-offset-4 decoration-1 decoration-[#2563EB] focus:outline-none focus:underline",
  {
    variants: {
      size: {
        // Default: 16px desktop / 14px mobile
        default: "text-base md:text-base text-sm",
        // Small: 14px for footers, tooltips, etc.
        small: "text-sm",
      },
      withArrow: {
        true: "gap-2",
        false: "",
      },
    },
    defaultVariants: {
      size: "default",
      withArrow: false,
    },
  },
);

interface TertiaryCTAProps
  extends Omit<React.ComponentProps<typeof Link>, "className">,
    VariantProps<typeof tertiaryCTAVariants> {
  className?: string;
  children: React.ReactNode;
}

// Arrow icon component for consistency
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 flex-shrink-0"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export function TertiaryCTA({
  className,
  size,
  withArrow,
  children,
  ...props
}: TertiaryCTAProps) {
  return (
    <Link
      className={cn(tertiaryCTAVariants({ size, withArrow }), className)}
      {...props}
    >
      <span className="capitalize-first">{children}</span>
      {withArrow && <ArrowIcon />}
    </Link>
  );
}

// For non-Link usage (buttons, onClick handlers)
interface TertiaryCTAButtonProps
  extends Omit<React.ComponentProps<"button">, "className">,
    VariantProps<typeof tertiaryCTAVariants> {
  className?: string;
  children: React.ReactNode;
}

export function TertiaryCTAButton({
  className,
  size,
  withArrow,
  children,
  ...props
}: TertiaryCTAButtonProps) {
  return (
    <button
      className={cn(
        tertiaryCTAVariants({ size, withArrow }),
        "bg-transparent border-none cursor-pointer",
        className,
      )}
      {...props}
    >
      <span className="capitalize-first">{children}</span>
      {withArrow && <ArrowIcon />}
    </button>
  );
}

export { tertiaryCTAVariants };
