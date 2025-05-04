import React, { useState, useEffect } from "react";
import { Post } from "@/interfaces/post";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { PostPreviewHomePage } from "./blog/PostPreviewHomePage";
import { PostPreviewHomePageLoader } from "./blog/ArticlePreviewLoader";

const ArticlesPreview = () => {
	const [recentPosts, setRecentPosts] = useState<Post[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const isMobile = useMediaQuery("(max-width: 768px)");

	useEffect(() => {
		const fetchRecentPosts = async () => {
			try {
				const res = await fetch("/api/posts?page=1");
				const posts = await res.json();
				setRecentPosts(posts.slice(0, 3));
			} catch (error) {
				console.error("Error fetching recent posts:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchRecentPosts();
	}, []);

	if (isLoading) {
		return (
			<div className="grid md:grid-cols-3 gap-6 mb-4 mt-4 w-10/12 mx-auto">
				{Array.from({ length: 3 }, (_, index) => (
					<div key={index}>
						<PostPreviewHomePageLoader />
					</div>
				))}
			</div>
		);
	}

	const displayPosts = isMobile ? recentPosts.slice(0, 1) : recentPosts;

	return (
		<section className="lg:py-12 py-4 w-full">
			<div className="mx-auto px-4 w-10/12">
				<div className="grid md:grid-cols-3 gap-6 mb-4 mt-4">
					{displayPosts.map((post) => (
						<div key={post.slug}>
							<PostPreviewHomePage
								title={post.title}
								coverImage={post.coverImage}
								date={post.date}
								author={post.author}
								slug={post.slug}
								excerpt={post.excerpt}
							/>
						</div>
					))}
				</div>
				<div className="text-center">
					<Link
						href="/articles"
						passHref
						className="font-semibold hover:text-primary transition-all duration-200"
					>
						Voir tous les articles
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ArticlesPreview;