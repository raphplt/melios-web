/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/api.ts
import { supabase } from "./supabaseClient";

const FALLBACK_POSTS = [
	{
		slug: "bienvenue-sur-melios",
		title: "Bienvenue sur Melios : L'application pour vos bonnes habitudes",
		date: "2024-05-15T10:00:00.000Z",
		coverImage: "/images/Preview.png",
		author: JSON.stringify({
			name: "Équipe Melios",
			picture: "/images/Logo_Melios.png",
		}),
		excerpt:
			"Découvrez comment Melios vous aide à ancrer de bonnes habitudes quotidiennes et à suivre votre progression facilement.",
		ogImage: {
			url: "/images/Preview.png",
		},
		content: `
# Bienvenue sur Melios

Melios a été conçu avec une mission simple : **rendre le développement personnel engageant, gratifiant et accessible à tous**.

## Pourquoi les habitudes ?

Les grandes réalisations sont le résultat de petites actions répétées jour après jour. Qu'il s'agisse de pratiquer du sport, de lire quotidiennement ou de méditer, la régularité est la clé de la réussite.

### Les fonctionnalités clés de Melios :
- **Suivi visuel et intuitif** de vos objectifs quotidiens.
- **Système de récompenses** pour célébrer chaque étape franchie.
- **Statistiques détaillées** pour mesurer votre constance dans le temps.
- **Expérience épurée**, 100% gratuite et sans publicité.

Merci d'avoir fait partie de l'aventure Melios !
		`,
		tags: ["productivité", "habitudes", "développement personnel"],
		pinned: true,
	},
	{
		slug: "5-habitudes-sportives-legeres",
		title: "5 Habitudes sportives simples pour booster votre énergie au quotidien",
		date: "2024-06-02T14:30:00.000Z",
		coverImage: "/images/screenshots/Progression.png",
		author: JSON.stringify({
			name: "Équipe Melios",
			picture: "/images/Logo_Melios.png",
		}),
		excerpt:
			"Pas besoin d'heures de musculation : découvrez 5 exercices légers de 5 minutes pour maintenir une vitalité optimale.",
		ogImage: {
			url: "/images/screenshots/Progression.png",
		},
		content: `
# 5 Habitudes sportives simples

Intégrer du mouvement dans sa journée ne nécessite pas de bousculer tout son emploi du temps.

1. **Les étirements matinaux** : 3 minutes dès le réveil pour réveiller vos muscles.
2. **La marche active** : Privilégier les escaliers et faire 15 minutes de marche après le déjeuner.
3. **Pauses posturales** : Toutes les 2 heures, se lever et s'étirer les épaules.
4. **Hydratation régulière** : Boire un grand verre d'eau avant chaque séance de travail.
5. **Respiration profonde** : 2 minutes de cohérence cardiaque pour réduire le stress.
		`,
		tags: ["santé", "sport", "bien-être"],
		pinned: true,
	},
	{
		slug: "organisation-et-focus",
		title: "Comment rester concentré et atteindre ses objectifs sans s'épuiser",
		date: "2024-06-20T09:15:00.000Z",
		coverImage: "/images/screenshots/Home.png",
		author: JSON.stringify({
			name: "Équipe Melios",
			picture: "/images/Logo_Melios.png",
		}),
		excerpt:
			"Des méthodes concrètes pour éliminer les distractions et canaliser votre énergie sur ce qui compte vraiment.",
		ogImage: {
			url: "/images/screenshots/Home.png",
		},
		content: `
# Réduire les distractions et maximiser le focus

La gestion de l'attention est devenue la compétence numéro un du 21ème siècle.

- **La méthode Pomodoro** : 25 minutes de focus intense suivies de 5 minutes de pause.
- **Rangement du bureau digital** : Fermez les onglets inutiles et coupez les notifications.
- **Clarification des priorités** : Définissez 3 tâches majeures au début de chaque journée.
		`,
		tags: ["focus", "organisation", "productivité"],
		pinned: false,
	},
];

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
		if (error || !data || data.length === 0) {
			return FALLBACK_POSTS;
		}
		return data;
	} catch (e) {
		console.warn("getAllPosts error:", e);
		return FALLBACK_POSTS;
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
			return FALLBACK_POSTS.find((p) => p.slug === slug) || null;
		}
		return data;
	} catch (e) {
		console.warn("getPostBySlug error:", e);
		return FALLBACK_POSTS.find((p) => p.slug === slug) || null;
	}
}

// Récupère les posts liés par des tags en commun (excluant le post courant)
export async function getRelatedPosts(currentPost: any) {
	try {
		const { data: allPosts, error } = await supabase
			.from("posts")
			.select("*")
			.neq("slug", currentPost.slug);

		const postsToSearch = (error || !allPosts || allPosts.length === 0) ? FALLBACK_POSTS.filter(p => p.slug !== currentPost.slug) : allPosts;

		const relatedPosts = postsToSearch
			.filter((post: any) => {
				if (!post.tags || !currentPost.tags) return false;
				return post.tags.some((tag: string) => currentPost.tags.includes(tag));
			})
			.slice(0, 3);
		return relatedPosts;
	} catch (e) {
		console.warn("getRelatedPosts error:", e);
		return FALLBACK_POSTS.filter(p => p.slug !== currentPost.slug).slice(0, 3);
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

		if (error || !data || data.length === 0) {
			return FALLBACK_POSTS.filter((p) => p.pinned);
		}
		return data;
	} catch (e) {
		console.warn("getPinnedPosts error:", e);
		return FALLBACK_POSTS.filter((p) => p.pinned);
	}
}
