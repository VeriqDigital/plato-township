import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { announcements } from "@/data/announcements";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/announcements",
    "/archive",
    "/board-meetings",
    "/board-minutes",
    "/community-resources",
    "/contact",
    "/departments",
    "/departments/supervisor",
    "/departments/highway",
    "/departments/clerk",
    "/departments/assessor",
    "/departments/assessor/property-search",
    "/departments/cemetery",
    "/departments/board-of-trustees",
    "/elections",
  ];

  return [
    ...routes.map((route): MetadataRoute.Sitemap[number] => ({
      url: new URL(route, siteConfig.url).href,
      changeFrequency:
        route === "/" || route === "/announcements" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : 0.7,
    })),
    ...announcements.map(({ slug }): MetadataRoute.Sitemap[number] => ({
      url: new URL(`/announcements/${slug}`, siteConfig.url).href,
      changeFrequency: "monthly",
      priority: 0.5,
    })),
  ];
}
