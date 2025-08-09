# Global Component Conversion Plan

## Pages Needing Header → Navigation Conversion

Based on the grep results, these pages need to be converted from Header to Navigation:

### High Priority Pages:

1. pages/doctors.tsx
2. pages/hospitals.tsx ✅ DONE
3. pages/insurers.tsx
4. pages/compare-prices.tsx
5. pages/waitlist.tsx

### Tool Pages:

6. pages/tools/benchmark.tsx
7. pages/tools/cost-calculator.tsx
8. pages/tools/price-trends.tsx
9. pages/tools/data-explorer.tsx
10. pages/tools.tsx

### Explore Pages:

11. pages/explore/location.tsx
12. pages/explore/condition.tsx
13. pages/explore/insurance.tsx
14. pages/explore/procedure.tsx

### Who We Help Pages:

15. pages/who-we-help/patients.tsx
16. pages/who-we-help/caregivers.tsx
17. pages/who-we-help/expecting-parents.tsx
18. pages/who-we-help/elective-shoppers.tsx
19. pages/who-we-help/insurance-providers.tsx
20. pages/who-we-help/hospitals.tsx
21. pages/who-we-help/financial-tools.tsx
22. pages/who-we-help/researchers.tsx
23. pages/who-we-help/policymakers.tsx
24. pages/who-we-help/journalists.tsx
25. pages/who-we-help/healthtech.tsx

### Other Important Pages:

26. pages/insights.tsx
27. pages/insights/truths/index.tsx
28. pages/insights/truths/[slug].tsx
29. pages/insights/comparisons.tsx
30. pages/insights/visualizations.tsx
31. pages/faq.tsx
32. pages/about.tsx
33. pages/contact.tsx
34. pages/hospital-detail.tsx
35. pages/price-comparison.tsx

## Conversion Steps for Each Page:

1. Change import: `import { Header } from "...` → `import { Navigation } from "..."`
2. Replace usage: `<Header ... />` → `<Navigation />`
3. Remove all navigation props since Navigation is self-contained

## Button System Audit Needed:

Look for:

- Custom button classes
- `className="button"` or similar
- Inline button styling
- Non-standard button variants

## TertiaryCTA Audit Needed:

Look for:

- Blue text links that should use TertiaryCTA
- `className="text-blue-*"` links
- Underlined text links that aren't using the component
