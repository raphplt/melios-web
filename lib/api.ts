import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
	return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
	const realSlug = slug.replace(/\.md$/, "");
	const fullPath = join(postsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(page: number = 1, limit: number = 10): Post[] {
	const slugs = getPostSlugs();
	const posts = slugs
		.map((slug) => getPostBySlug(slug))
		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;

	return posts.slice(startIndex, endIndex);
}

export function getRelatedPosts(currentPost: Post) {
	const allPosts = getAllPosts();
	const relatedPosts = allPosts
		.filter(
			(post) =>
				post.slug !== currentPost.slug &&
				post.tags.some((tag) => currentPost.tags.includes(tag))
		)
		.slice(0, 3);
	return relatedPosts;
}