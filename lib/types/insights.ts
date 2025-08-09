export interface ShockingTruth {
  id: string;
  title: string;
  slug: string;
  description: string;
  chartVisual?: string;
  chartData?: any;
  procedureTags: string[];
  regionTags: string[];
  relatedDataLinks: string[];
  sourceAttribution: string;
  showShareButtons: boolean;
  publishedDate: string;
  readingTime: number;
  featured?: boolean;
  metaDescription?: string;
  socialImage?: string;
}

export interface InsightCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
}

export interface RelatedInsight {
  id: string;
  title: string;
  slug: string;
  category: string;
  readingTime: number;
  publishedDate: string;
}
