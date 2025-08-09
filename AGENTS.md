# AGENTS.md - Guidelines for AI Coding Agents

## Project Overview

This is a healthcare search application built with **Astro**, **Shadcdn/ui**, and **Tailwind CSS**. The application helps users compare healthcare pricing and access transparent pricing data from hospitals and insurance providers.

## Core Technology Stack - DO NOT DEVIATE

### ✅ REQUIRED Technologies
- **Astro** - Primary framework for static site generation and server-side rendering
- **React** - Only for interactive components within Astro
- **Shadcn/ui** - Component library for consistent UI elements
- **Tailwind CSS** - Primary styling framework
- **TypeScript** - Type safety across the application
- **Lucide React** - Icon library

### ❌ FORBIDDEN Technologies
- **DO NOT** use Next.js, Vue, Svelte, or any other frontend framework
- **DO NOT** use CSS-in-JS libraries (styled-components, emotion, etc.)
- **DO NOT** use other CSS frameworks (Bootstrap, Bulma, etc.)
- **DO NOT** use other icon libraries (FontAwesome, etc.)
- **DO NOT** use other component libraries (Material-UI, Ant Design, etc.)

## Project Structure Guidelines

### File Organization
```
src/
├── components/          # React components for Astro
├── layouts/            # Astro layout components
├── pages/              # Astro pages (generate routes)
├── lib/                # Utility functions and data
└── styles/             # Global CSS and Tailwind overrides
```

### Component Guidelines

#### Astro Pages (.astro files)
- Use `.astro` extension for pages that generate static routes
- Import React components using `client:` directives when interactivity is needed
- Keep server-side logic in the frontmatter (between `---`)
- Use Astro's built-in features for SEO, meta tags, and static generation

#### React Components (.tsx files)
- Use `.tsx` extension for interactive components
- Import from `src/components/ui/` for Shadcn components
- All styling must use Tailwind CSS classes
- Use TypeScript for all props and state

### Styling Standards

#### Tailwind CSS Requirements
- **ONLY** use Tailwind utility classes for styling
- Use the custom CSS variables defined in `tailwind.config.js`
- Follow the design system colors and spacing defined in the config
- Use responsive design with Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, etc.)

#### CSS Variables Usage
- Use `var(--primary)` for primary colors
- Use `var(--text-*)` for font sizes
- Use `var(--font-weight-*)` for font weights
- Reference `tailwind.config.js` for all available custom variables

#### Component Styling Patterns
```tsx
// Good - Tailwind utilities only
<div className="bg-white/80 backdrop-blur-md border border-gray-200/20 rounded-lg p-6">

// Bad - Inline styles or CSS modules
<div style={{backgroundColor: 'white'}} className={styles.card}>
```

## Development Guidelines

### React Component Patterns
```tsx
// Preferred component structure
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ComponentProps {
  title: string;
  children: React.ReactNode;
}

export function MyComponent({ title, children }: ComponentProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}
```

### Astro Page Patterns
```astro
---
// Server-side logic here
import Layout from '@/layouts/BaseLayout.astro'
import MyComponent from '@/components/MyComponent.tsx'

const title = "Page Title"
---

<Layout title={title}>
  <main class="container mx-auto px-4 py-8">
    <MyComponent client:load title={title}>
      <p class="text-gray-600">Static content</p>
    </MyComponent>
  </main>
</Layout>
```

### State Management
- Use React's built-in state (useState, useReducer) for component-level state
- Use Astro's built-in features for passing data between components
- Avoid external state management libraries unless absolutely necessary

## Code Quality Standards

### TypeScript Requirements
- Always define interfaces for component props
- Use proper typing for all functions and variables
- Leverage TypeScript's strict mode settings
- Import types using `import type` syntax when appropriate

### Component Architecture
- Keep components small and focused on a single responsibility
- Extract reusable logic into custom hooks
- Use composition over inheritance
- Prefer functional components over class components

### Performance Guidelines
- Use `client:load`, `client:idle`, or `client:visible` directives strategically
- Optimize images using Astro's built-in image optimization
- Lazy load components that aren't immediately visible
- Minimize JavaScript bundle size by only hydrating when necessary

## UI/UX Guidelines

### Design System Adherence
- Use Shadcn/ui components as the foundation for all UI elements
- Maintain consistent spacing using Tailwind's spacing scale
- Follow the established color palette defined in `tailwind.config.js`
- Ensure responsive design across all screen sizes

### Accessibility Requirements
- Include proper ARIA labels and roles
- Ensure keyboard navigation works for all interactive elements
- Use semantic HTML elements
- Maintain proper color contrast ratios
- Include alt text for all images

### User Experience Patterns
- Implement loading states for async operations
- Provide clear error messages and fallback states
- Use progressive enhancement principles
- Ensure fast page load times through proper code splitting

## Healthcare Domain Guidelines

### Data Handling
- Handle healthcare pricing data with appropriate formatting
- Ensure privacy compliance in all data operations
- Use proper validation for healthcare-related inputs
- Implement appropriate error handling for data fetching

### Content Guidelines
- Use clear, patient-friendly language
- Provide context for complex healthcare terms
- Ensure accuracy in all healthcare-related information
- Include appropriate disclaimers where necessary

## Testing and Quality Assurance

### Code Review Checklist
- [ ] Uses only approved technologies (Astro, Shadcn, Tailwind)
- [ ] Follows TypeScript best practices
- [ ] Implements responsive design
- [ ] Includes proper accessibility features
- [ ] Maintains consistent code formatting
- [ ] Uses semantic HTML structure
- [ ] Optimizes for performance

### Before Submitting Code
1. Test across different screen sizes
2. Verify accessibility with screen reader
3. Check TypeScript compilation
4. Ensure no console errors
5. Validate HTML structure
6. Test interactive functionality

## Common Patterns to Follow

### Error Boundaries
```tsx
import { ErrorBoundary } from '@/components/ErrorBoundary'

<ErrorBoundary fallback={<div>Something went wrong</div>}>
  <Component />
</ErrorBoundary>
```

### Loading States
```tsx
const [loading, setLoading] = useState(false)

if (loading) {
  return <div className="animate-pulse">Loading...</div>
}
```

### Responsive Design
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => (
    <Card key={item.id} className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-medium">{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{item.description}</p>
      </CardContent>
    </Card>
  ))}
</div>
```

## Deployment Considerations

### Build Process
- Ensure all TypeScript compiles without errors
- Verify Tailwind CSS is properly purged for production
- Test that all Astro pages build successfully
- Validate that client-side hydration works correctly

### SEO Requirements
- Include proper meta tags in all pages
- Use semantic HTML structure
- Implement proper heading hierarchy (h1, h2, h3)
- Include structured data where appropriate

---

## Summary for AI Agents

When working on this project:
1. **ONLY** use Astro, React, Shadcn/ui, and Tailwind CSS
2. **NEVER** introduce other frontend frameworks or styling solutions
3. Follow the established patterns and conventions
4. Prioritize performance, accessibility, and user experience
5. Maintain consistency with the existing codebase
6. Always use TypeScript with proper typing
7. Test thoroughly across different devices and screen sizes

This is a healthcare application where accuracy, performance, and user trust are paramount. Every change should enhance the user's ability to find and compare healthcare pricing information effectively.
