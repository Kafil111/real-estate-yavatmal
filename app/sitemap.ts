import type { MetadataRoute } from "next";
import { properties } from "@/data/properties";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://realestateyavatmal.com";

    const propertyRoutes: MetadataRoute.Sitemap = properties.map(
        (property) => ({
            url: `${baseUrl}/property/${property.id}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        })
    );

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        ...propertyRoutes,
    ];
}