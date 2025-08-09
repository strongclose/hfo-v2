export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
}

export function generateStructuredData(
  type: "article" | "organization" | "local-business" | "physician",
  data: any,
) {
  const baseUrl = "https://hospitalfees.org";

  switch (type) {
    case "article":
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data.title,
        description: data.description,
        image: data.image || `${baseUrl}/images/default-og.png`,
        datePublished: data.publishedDate,
        dateModified: data.modifiedDate || data.publishedDate,
        author: {
          "@type": "Organization",
          name: "Hospital Fees",
          url: baseUrl,
        },
        publisher: {
          "@type": "Organization",
          name: "Hospital Fees",
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/logo.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": data.url,
        },
      };

    case "local-business":
      return {
        "@context": "https://schema.org",
        "@type": "Hospital",
        name: data.name,
        description: data.description,
        url: data.website,
        telephone: data.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: data.address?.street,
          addressLocality: data.address?.city,
          addressRegion: data.address?.state,
          postalCode: data.address?.zipCode,
          addressCountry: "US",
        },
        geo: data.coordinates && {
          "@type": "GeoCoordinates",
          latitude: data.coordinates.lat,
          longitude: data.coordinates.lng,
        },
        aggregateRating: data.rating && {
          "@type": "AggregateRating",
          ratingValue: data.rating.value,
          reviewCount: data.rating.count,
        },
        image: data.logo || data.image,
      };

    case "physician":
      return {
        "@context": "https://schema.org",
        "@type": "Physician",
        name: data.name,
        description: data.description,
        specialty: data.specialty,
        medicalSpecialty: data.specialty,
        worksFor: {
          "@type": "Hospital",
          name: data.hospital,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: data.city,
          addressRegion: data.state,
        },
        aggregateRating: data.rating && {
          "@type": "AggregateRating",
          ratingValue: data.rating.value,
          reviewCount: data.rating.count,
        },
      };

    case "organization":
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: data.name,
        description: data.description,
        url: data.website,
        logo: data.logo,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: data.phone,
          contactType: "customer service",
        },
        address: data.address && {
          "@type": "PostalAddress",
          addressLocality: data.address.city,
          addressRegion: data.address.state,
          addressCountry: "US",
        },
      };

    default:
      return null;
  }
}

export function generateMetaTags(seo: SEOData) {
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonicalUrl,
      images: seo.ogImage ? [{ url: seo.ogImage }] : undefined,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: seo.ogImage ? [seo.ogImage] : undefined,
    },
    alternates: seo.canonicalUrl
      ? {
          canonical: seo.canonicalUrl,
        }
      : undefined,
  };
}

export function truncateDescription(
  text: string,
  maxLength: number = 160,
): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3).trim() + "...";
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}
