/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/api.ts
import { supabase } from "./supabaseClient";

export async function getAllPosts(
	page: number = 1,
	limit: number = 10,
	noLimit: boolean = false
) {
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
	if (error) {
		throw new Error(error.message);
	}
	return data;
}

// Récupère un post selon son slug
export async function getPostBySlug(slug: string) {
	const { data, error } = await supabase
		.from("posts")
		.select("*")
		.eq("slug", slug)
		.single();

	if (error) {
		throw new Error(error.message);
	}
	return data;
}

// Récupère les posts liés par des tags en commun (excluant le post courant)
export async function getRelatedPosts(currentPost: any) {
	// On récupère tous les posts sauf celui en cours
	const { data: allPosts, error } = await supabase
		.from("posts")
		.select("*")
		.neq("slug", currentPost.slug);

	if (error) {
		throw new Error(error.message);
	}
	// Filtrage en mémoire selon l'intersection des tags
	const relatedPosts = allPosts
		.filter((post: any) => {
			if (!post.tags || !currentPost.tags) return false;
			return post.tags.some((tag: string) => currentPost.tags.includes(tag));
		})
		.slice(0, 3);
	return relatedPosts;
}

// Récupère les posts épinglés
export async function getPinnedPosts() {
	const { data, error } = await supabase
		.from("posts")
		.select("*")
		.eq("pinned", true)
		.order("date", { ascending: false });

	if (error) {
		throw new Error(error.message);
	}
	return data;
}
