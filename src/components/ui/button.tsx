import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:scale-105",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:from-blue-700 hover:to-blue-800 focus:ring-blue-500",
        primary:
          "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:from-blue-700 hover:to-indigo-700 focus:ring-blue-500",
        secondary:
          "bg-white text-blue-600 border-2 border-blue-600 shadow-sm hover:bg-blue-50 hover:border-blue-700 focus:ring-blue-500",
        outline:
          "border-2 border-gray-300 bg-white text-gray-900 shadow-sm hover:bg-gray-50 hover:border-gray-400 focus:ring-gray-500",
        ghost: "text-gray-900 hover:bg-gray-100 focus:ring-gray-500",
        link: "text-blue-600 underline-offset-4 hover:underline focus:ring-blue-500",
        success:
          "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg hover:from-emerald-700 hover:to-teal-700 focus:ring-emerald-500",
        warning:
          "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg hover:from-amber-600 hover:to-orange-600 focus:ring-amber-500",
        danger:
          "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg hover:from-red-700 hover:to-rose-700 focus:ring-red-500",
        accent:
          "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg hover:from-teal-600 hover:to-cyan-600 focus:ring-teal-500",
        purple:
          "bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg hover:from-purple-700 hover:to-violet-700 focus:ring-purple-500",
        glass:
          "bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white/30 hover:border-white/70 focus:ring-white/50",
      },
      size: {
        sm: "h-8 px-3 py-1 text-xs rounded-lg",
        default: "h-10 px-6 py-2 text-sm",
        lg: "h-12 px-8 py-3 text-base",
        xl: "h-14 px-10 py-4 text-lg",
        icon: "h-10 w-10 p-0",
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
    // Enhanced fallback styles for reliability with consistent design system
    const getInlineStyles = () => {
      const baseStyle = {
        display: 'inline-flex' as const,
        alignItems: 'center' as const,
        justifyContent: 'center' as const,
        gap: '0.5rem',
        whiteSpace: 'nowrap' as const,
        borderRadius: '0.75rem', // rounded-xl
        fontWeight: '600', // font-semibold
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        transform: 'scale(1)',
      };

      // Size-based styles
      const sizeStyles = {
        sm: { height: '2rem', padding: '0.25rem 0.75rem', fontSize: '0.75rem' },
        default: { height: '2.5rem', padding: '0.5rem 1.5rem', fontSize: '0.875rem' },
        lg: { height: '3rem', padding: '0.75rem 2rem', fontSize: '1rem' },
        xl: { height: '3.5rem', padding: '1rem 2.5rem', fontSize: '1.125rem' },
        icon: { height: '2.5rem', width: '2.5rem', padding: '0' },
      };

      const currentSize = sizeStyles[size || 'default'] || sizeStyles.default;

      switch (variant) {
        case 'primary':
          return {
            ...baseStyle,
            ...currentSize,
            background: 'linear-gradient(to right, #2563eb, #4f46e5)',
            color: '#ffffff',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          };
        case 'secondary':
          return {
            ...baseStyle,
            ...currentSize,
            backgroundColor: '#ffffff',
            color: '#2563eb',
            border: '2px solid #2563eb',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          };
        case 'outline':
          return {
            ...baseStyle,
            ...currentSize,
            backgroundColor: '#ffffff',
            color: '#111827',
            border: '2px solid #d1d5db',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          };
        case 'success':
          return {
            ...baseStyle,
            ...currentSize,
            background: 'linear-gradient(to right, #059669, #0d9488)',
            color: '#ffffff',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          };
        case 'accent':
          return {
            ...baseStyle,
            ...currentSize,
            background: 'linear-gradient(to right, #14b8a6, #06b6d4)',
            color: '#ffffff',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          };
        case 'purple':
          return {
            ...baseStyle,
            ...currentSize,
            background: 'linear-gradient(to right, #9333ea, #8b5cf6)',
            color: '#ffffff',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          };
        case 'glass':
          return {
            ...baseStyle,
            ...currentSize,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            color: '#ffffff',
          };
        default:
          return {
            ...baseStyle,
            ...currentSize,
            background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
            color: '#ffffff',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
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
