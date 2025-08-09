import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white shadow hover:bg-blue-700",
        primary:
          "bg-blue-600 text-white shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        destructive:
          "bg-red-600 text-white shadow-sm hover:bg-red-700",
        outline:
          "border border-gray-300 bg-white text-gray-900 shadow-sm hover:bg-gray-50",
        secondary:
          "bg-white text-blue-600 border border-blue-600 shadow-sm hover:bg-blue-50",
        ghost: "text-gray-900 hover:bg-gray-100",
        link: "text-blue-600 underline-offset-4 hover:underline",
        tertiary: "text-blue-600 hover:underline underline-offset-4",
        "ask-ai": "bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold shadow-lg hover:from-teal-500 hover:to-blue-600 hover:shadow-xl transition-all duration-300",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size, asChild = false, style, ...props }, ref) => {
    // Fallback styles for reliability
    const getInlineStyles = () => {
      const baseStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        whiteSpace: 'nowrap' as const,
        borderRadius: '0.5rem',
        fontSize: '0.875rem',
        fontWeight: '500',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        padding: '0.5rem 1rem',
        height: '2.25rem',
      };

      switch (variant) {
        case 'primary':
          return {
            ...baseStyle,
            backgroundColor: '#2563eb',
            color: '#ffffff',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          };
        case 'secondary':
          return {
            ...baseStyle,
            backgroundColor: '#ffffff',
            color: '#2563eb',
            border: '1px solid #2563eb',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          };
        case 'outline':
          return {
            ...baseStyle,
            backgroundColor: '#ffffff',
            color: '#111827',
            border: '1px solid #d1d5db',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          };
        case 'ask-ai':
          return {
            ...baseStyle,
            background: 'linear-gradient(to right, #2dd4bf, #3b82f6)',
            color: '#ffffff',
            fontWeight: '600',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          };
        default:
          return {
            ...baseStyle,
            backgroundColor: '#2563eb',
            color: '#ffffff',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          };
      }
    };

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        style={{
          ...getInlineStyles(),
          ...style,
        }}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
