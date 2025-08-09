import { ShockingTruth, InsightCategory } from "../types/insights";

// Mock data - replace with actual CMS/API integration
export const mockShockingTruths: ShockingTruth[] = [
  {
    id: "1",
    title:
      "The Same MRI Costs $400 at One Hospital, $4,000 at Another - Both in the Same City",
    slug: "mri-price-variation-same-city",
    description:
      "Our analysis of 2,847 hospitals reveals shocking price variations for identical procedures within the same metropolitan areas. This MRI pricing study exposes how patients can save thousands by choosing the right facility.",
    chartVisual: "/images/insights/mri-price-chart.png",
    chartData: {
      hospitals: [
        {
          name: "Community Health Center",
          price: 420,
          city: "Houston",
          state: "TX",
        },
        {
          name: "Methodist Hospital Downtown",
          price: 1850,
          city: "Houston",
          state: "TX",
        },
        { name: "Memorial Hermann", price: 2400, city: "Houston", state: "TX" },
        {
          name: "Houston Methodist",
          price: 4200,
          city: "Houston",
          state: "TX",
        },
      ],
    },
    procedureTags: ["MRI", "Imaging", "Radiology"],
    regionTags: ["Houston", "Texas", "Metro Area"],
    relatedDataLinks: [
      "/search-procedure?q=MRI",
      "/explore/location?city=Houston",
      "/tools/cost-calculator",
    ],
    sourceAttribution: "Analysis of CMS Hospital Price Transparency data, 2024",
    showShareButtons: true,
    publishedDate: "2024-01-15",
    readingTime: 4,
    featured: true,
    metaDescription:
      "Discover why the same MRI scan costs $400 at one Houston hospital but $4,000 at another. Our price transparency analysis reveals shocking healthcare cost variations.",
    socialImage: "/images/insights/mri-social.png",
  },
  {
    id: "2",
    title:
      "Emergency Room Visits: Why You're Charged $2,000 Before You Even See a Doctor",
    slug: "emergency-room-facility-fees",
    description:
      "Facility fees are the healthcare industry's best-kept secret. Before any treatment begins, hospitals charge massive 'facility fees' just for walking through the ER doors. Here's how to avoid surprise bills.",
    chartData: {
      feeBreakdown: [
        {
          category: "Facility Fee",
          amount: 2000,
          description: "Just for using the ER space",
        },
        {
          category: "Triage Assessment",
          amount: 300,
          description: "Initial nurse evaluation",
        },
        {
          category: "Doctor Consultation",
          amount: 500,
          description: "Physician evaluation",
        },
        {
          category: "Basic Tests",
          amount: 800,
          description: "Blood work, X-rays",
        },
      ],
    },
    procedureTags: ["Emergency Room", "Facility Fees", "Urgent Care"],
    regionTags: ["National", "All States"],
    relatedDataLinks: [
      "/insights/truths/urgent-care-vs-er",
      "/explore/condition?category=emergency",
      "/who-we-help/patients",
    ],
    sourceAttribution: "Healthcare Financial Management Association, 2024",
    showShareButtons: true,
    publishedDate: "2024-01-10",
    readingTime: 6,
    featured: true,
    metaDescription:
      "Learn why emergency rooms charge $2,000+ in facility fees before treatment. Understand ER billing and find alternatives to avoid surprise medical bills.",
  },
  {
    id: "3",
    title:
      "Insurance Networks: How 'In-Network' Doctors Can Still Cost You Thousands",
    slug: "in-network-surprise-billing",
    description:
      "Even when you choose an in-network hospital and doctor, you might get surprise bills from out-of-network anesthesiologists, radiologists, or other specialists. Here's how the system works against patients.",
    procedureTags: ["Insurance", "Network", "Surprise Billing"],
    regionTags: ["National"],
    relatedDataLinks: [
      "/insurers",
      "/explore/insurance",
      "/glossary#surprise-billing",
    ],
    sourceAttribution: "Kaiser Family Foundation Analysis, 2024",
    showShareButtons: true,
    publishedDate: "2024-01-05",
    readingTime: 5,
    metaDescription:
      "Why in-network doesn't guarantee affordable care. Learn how surprise billing from out-of-network specialists can cost thousands even at in-network hospitals.",
  },
];

export const insightCategories: InsightCategory[] = [
  {
    id: "price-variations",
    name: "Price Variations",
    slug: "price-variations",
    description: "Shocking differences in medical procedure costs",
    icon: "TrendingUp",
    color: "red",
  },
  {
    id: "billing-practices",
    name: "Billing Practices",
    slug: "billing-practices",
    description: "Hidden fees and surprise charges explained",
    icon: "Receipt",
    color: "orange",
  },
  {
    id: "insurance-gaps",
    name: "Insurance Gaps",
    slug: "insurance-gaps",
    description: "When insurance doesn't protect you",
    icon: "Shield",
    color: "blue",
  },
];

export async function getShockingTruthBySlug(
  slug: string,
): Promise<ShockingTruth | null> {
  // In production, this would be an API call or CMS query
  return mockShockingTruths.find((truth) => truth.slug === slug) || null;
}

export async function getAllShockingTruths(): Promise<ShockingTruth[]> {
  // In production, this would be an API call or CMS query
  return mockShockingTruths;
}

export async function getRelatedTruths(
  currentSlug: string,
  tags: string[],
): Promise<ShockingTruth[]> {
  return mockShockingTruths
    .filter((truth) => truth.slug !== currentSlug)
    .filter(
      (truth) =>
        truth.procedureTags.some((tag) => tags.includes(tag)) ||
        truth.regionTags.some((tag) => tags.includes(tag)),
    )
    .slice(0, 3);
}

export async function getFeaturedTruths(): Promise<ShockingTruth[]> {
  return mockShockingTruths.filter((truth) => truth.featured);
}
