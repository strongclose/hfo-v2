/**
 * Design Token System - Standardized Gradients
 * 
 * This system provides a consistent set of gradient patterns to reduce visual noise
 * and create a cohesive design hierarchy across the application.
 */

// Base color palette for gradients
export const GRADIENT_COLORS = {
  // Primary blues (main brand colors)
  blue: {
    light: '#60a5fa',   // blue-400
    medium: '#3b82f6',  // blue-500
    dark: '#1e40af',    // blue-700
    darker: '#1e3a8a'   // blue-800
  },
  
  // Accent teals (supporting brand colors)
  teal: {
    light: '#2dd4bf',   // teal-400
    medium: '#14b8a6',  // teal-500
    dark: '#0d9488'     // teal-600
  },
  
  // Neutral grays (backgrounds and subtle accents)
  gray: {
    lightest: '#f9fafb', // gray-50
    light: '#f3f4f6',    // gray-100
    medium: '#6b7280',   // gray-500
    dark: '#374151'      // gray-700
  }
} as const;

// Standardized gradient patterns (only 3 main patterns)
export const DESIGN_GRADIENTS = {
  // Primary gradient: Main brand gradient for heroes and primary CTAs
  primary: {
    css: `linear-gradient(135deg, ${GRADIENT_COLORS.blue.dark} 0%, ${GRADIENT_COLORS.blue.medium} 50%, ${GRADIENT_COLORS.blue.light} 100%)`,
    tailwind: 'bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400',
    description: 'Main brand gradient for primary elements'
  },
  
  // Accent gradient: Supporting gradient for secondary elements and icons
  accent: {
    css: `linear-gradient(135deg, ${GRADIENT_COLORS.teal.medium} 0%, ${GRADIENT_COLORS.blue.medium} 100%)`,
    tailwind: 'bg-gradient-to-br from-teal-500 to-blue-500',
    description: 'Accent gradient for icons and secondary elements'
  },
  
  // Subtle gradient: Very light gradient for section backgrounds
  subtle: {
    css: `linear-gradient(135deg, ${GRADIENT_COLORS.gray.lightest} 0%, ${GRADIENT_COLORS.blue.light}10 50%, ${GRADIENT_COLORS.teal.light}08 100%)`,
    tailwind: 'bg-gradient-to-br from-gray-50 via-blue-50/40 to-teal-50/30',
    description: 'Subtle background gradient for sections'
  }
} as const;

// Overlay patterns (simplified to 2 patterns max)
export const GRADIENT_OVERLAYS = {
  // Primary overlay: For hero sections and dark backgrounds
  primary: {
    css: `radial-gradient(circle at 30% 40%, ${GRADIENT_COLORS.teal.medium}20, transparent 60%)`,
    description: 'Primary radial overlay for hero sections'
  },
  
  // Secondary overlay: For light sections
  secondary: {
    css: `radial-gradient(circle at 70% 60%, ${GRADIENT_COLORS.blue.medium}15, transparent 60%)`,
    description: 'Secondary radial overlay for content sections'
  }
} as const;

// Text gradients (2 patterns only)
export const TEXT_GRADIENTS = {
  primary: {
    css: `linear-gradient(135deg, ${GRADIENT_COLORS.blue.dark} 0%, ${GRADIENT_COLORS.blue.medium} 100%)`,
    tailwind: 'bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent',
    description: 'Primary text gradient for headings'
  },
  
  accent: {
    css: `linear-gradient(135deg, ${GRADIENT_COLORS.teal.medium} 0%, ${GRADIENT_COLORS.blue.medium} 100%)`,
    tailwind: 'bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent',
    description: 'Accent text gradient for special elements'
  }
} as const;

// Helper functions for consistent usage
export const getGradientStyle = (gradient: keyof typeof DESIGN_GRADIENTS) => ({
  background: DESIGN_GRADIENTS[gradient].css
});

export const getOverlayStyle = (overlay: keyof typeof GRADIENT_OVERLAYS) => ({
  background: GRADIENT_OVERLAYS[overlay].css
});

export const getTextGradientStyle = (gradient: keyof typeof TEXT_GRADIENTS) => ({
  background: TEXT_GRADIENTS[gradient].css,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
});

// Export for CSS custom properties
export const GRADIENT_CSS_VARS = {
  '--gradient-primary': DESIGN_GRADIENTS.primary.css,
  '--gradient-accent': DESIGN_GRADIENTS.accent.css,
  '--gradient-subtle': DESIGN_GRADIENTS.subtle.css,
  '--overlay-primary': GRADIENT_OVERLAYS.primary.css,
  '--overlay-secondary': GRADIENT_OVERLAYS.secondary.css,
  '--text-gradient-primary': TEXT_GRADIENTS.primary.css,
  '--text-gradient-accent': TEXT_GRADIENTS.accent.css
} as const;
