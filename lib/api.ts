/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/api.ts
import { supabase } from "./supabaseClient";

export async function getAllPosts(
	page: number = 1,
	limit: number = 10,
	noLimit: boolean = false
) {
	try {
		let query = supabase
			.from("posts")
			.select("*")
			.order("date", { ascending: false });

		if (!noLimit) {
			const from = (page - 1) * limit;
			const to = from + limit - 1;
			query = query.range(from, to);
		}

		const { data, error } = await query;
		if (error || !data) {
			console.warn("Supabase getAllPosts warning:", error?.message);
			return [];
		}
		return data;
	} catch (e) {
		console.warn("getAllPosts error:", e);
		return [];
	}
}

// Récupère un post selon son slug
export async function getPostBySlug(slug: string) {
	try {
		const { data, error } = await supabase
			.from("posts")
			.select("*")
			.eq("slug", slug)
			.single();

		if (error || !data) {
			return null;
		}
		return data;
	} catch (e) {
		console.warn("getPostBySlug error:", e);
		return null;
	}
}

// Récupère les posts liés par des tags en commun (excluant le post courant)
export async function getRelatedPosts(currentPost: any) {
	try {
		const { data: allPosts, error } = await supabase
			.from("posts")
			.select("*")
			.neq("slug", currentPost.slug);

		if (error || !allPosts) {
			return [];
		}
		const relatedPosts = allPosts
			.filter((post: any) => {
				if (!post.tags || !currentPost.tags) return false;
				return post.tags.some((tag: string) => currentPost.tags.includes(tag));
			})
			.slice(0, 3);
		return relatedPosts;
	} catch (e) {
		console.warn("getRelatedPosts error:", e);
		return [];
	}
}

// Récupère les posts épinglés
export async function getPinnedPosts() {
	try {
		const { data, error } = await supabase
			.from("posts")
			.select("*")
			.eq("pinned", true)
			.order("date", { ascending: false });

		if (error || !data) {
			return [];
		}
		return data;
	} catch (e) {
		console.warn("getPinnedPosts error:", e);
		return [];
	}
}
