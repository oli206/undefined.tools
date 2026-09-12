import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://undefined.tools",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
