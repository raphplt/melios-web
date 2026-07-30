/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Author } from "@/interfaces/author";

export function parseAuthor(author: any): Author {
	const defaultAuthor: Author = {
		name: "Équipe Melios",
		picture: "/images/Logo_Melios.png",
	};

	if (!author) return defaultAuthor;

	if (typeof author === "object") {
		return {
			name: author.name || "Équipe Melios",
			picture: author.picture || "/images/Logo_Melios.png",
		};
	}

	if (typeof author === "string") {
		try {
			const parsed = JSON.parse(author);
			if (parsed && typeof parsed === "object") {
				return {
					name: parsed.name || "Équipe Melios",
					picture: parsed.picture || "/images/Logo_Melios.png",
				};
			}
		} catch {
			return {
				name: author,
				picture: "/images/Logo_Melios.png",
			};
		}
	}

	return defaultAuthor;
}
