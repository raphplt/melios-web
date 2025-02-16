import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://www.melios.me",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: "https://www.melios.me/privacy",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.2,
		},
		{
			url: "https://www.melios.me/cookies",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.2,
		},
		{
			url: "https://www.melios.me/terms",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.2,
		},
		{
			url: "https://www.melios.me/articles",
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 0.8,
		},
	];
}
