import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://newlookpaving.com";

  // Static pages
  const staticPages = [
    "",
    "/services",
    "/portfolio",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  // Service pages
  const services = [
    "driveways",
    "patios",
    "retaining-walls",
    "drainage",
    "hardscaping",
    "roofing",
    "siding",
    "gutters",
  ];

  const staticUrls: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : page === "/services" ? 0.9 : 0.8,
  }));

  const serviceUrls: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticUrls, ...serviceUrls];
}

