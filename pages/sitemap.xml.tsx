import { GetServerSideProps } from "next";
import { getAllShockingTruths } from "../lib/data/insights";

// This component is never rendered, it's just used to generate the sitemap
export default function Sitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = "https://hospitalfees.org";

  // Get all dynamic content
  const shockingTruths = await getAllShockingTruths();

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/faq",
    "/methodology",
    "/disclaimer",
    "/privacy-policy",
    "/terms-of-use",
    "/accessibility",
    "/glossary",
    "/provider-feedback",
    "/insights",
    "/insights/truths",
    "/hospitals",
    "/doctors",
    "/insurers",
    "/tools",
    "/search-procedure",
    "/explore/location",
    "/explore/insurance",
    "/explore/condition",
    "/tools/cost-calculator",
    "/tools/price-trends",
    "/tools/benchmark",
    "/tools/data-explorer",
    "/who-we-help/patients",
    "/who-we-help/expecting-parents",
    "/who-we-help/researchers",
    "/who-we-help/caregivers",
    "/who-we-help/elective-shoppers",
    "/who-we-help/insurance-providers",
    "/who-we-help/hospitals",
    "/who-we-help/financial-tools",
    "/who-we-help/policymakers",
    "/who-we-help/journalists",
    "/who-we-help/healthtech",
  ];

  // Mock provider pages (in production, fetch from actual data)
  const providerPages = [
    "/hospital/kaiser-oakland",
    "/hospital/ucsf-san-francisco",
    "/hospital/cedars-sinai",
    "/hospital/houston-methodist",
    "/hospital/mayo-clinic-rochester",
    "/doctor/sarah-johnson-cardiology",
    "/doctor/michael-chen-orthopedics",
    "/doctor/emily-rodriguez-dermatology",
    "/doctor/david-williams-neurology",
    "/doctor/jennifer-martinez-radiology",
    "/insurer/anthem-blue-cross",
    "/insurer/united-healthcare",
    "/insurer/aetna",
    "/insurer/cigna",
    "/insurer/humana",
  ];

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((page) => {
      return `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${page === "" ? "daily" : "weekly"}</changefreq>
      <priority>${page === "" ? "1.0" : "0.8"}</priority>
    </url>`;
    })
    .join("")}
  ${shockingTruths
    .map((truth) => {
      return `
    <url>
      <loc>${baseUrl}/insights/truths/${truth.slug}</loc>
      <lastmod>${truth.publishedDate}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
    </url>`;
    })
    .join("")}
  ${providerPages
    .map((page) => {
      return `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>`;
    })
    .join("")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};
