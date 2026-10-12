import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Do spuštění webu zakázáno indexovat (placeholdery, neznámá doména).
const LAUNCHED = false;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: LAUNCHED ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
