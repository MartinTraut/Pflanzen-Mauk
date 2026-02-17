import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/mein-konto/", "/kasse/"],
    },
    sitemap: "https://www.pflanzen-mauk.de/sitemap.xml",
  };
}
