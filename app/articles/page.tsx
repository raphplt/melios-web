"use client";
import { useState, useEffect } from "react";
import { HeroPost } from "@/components/blog/HeroPost";
import { MorePosts } from "@/components/blog/MorePosts";
import { Post } from "@/interfaces/post";
import { Spinner } from "@heroui/react";

export default function Index() {
	const [page, setPage] = useState(1);
	const [allPosts, setAllPosts] = useState<Post[]>([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await fetch(`/api/posts?page=${page}`);
			const newPosts = await res.json();
			setAllPosts((prevPosts) => [...prevPosts, ...newPosts]);
		};

		fetchPosts();
	}, [page]);

	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);

	const loadMorePosts = () => {
		setPage((prevPage) => prevPage + 1);
	};

	if (!allPosts)
		return (
			<div className="flex justify-center items-center mt-20">
				<Spinner />
			</div>
		);
	if (!heroPost && morePosts.length === 0)
		return <div className="container mx-auto px-5 mt-20">No posts found.</div>;

	return (
		<main>
			<div className="container mx-auto px-5 mt-20">
				{heroPost && (
					<HeroPost
						title={heroPost.title}
						coverImage={heroPost.coverImage}
						date={heroPost.date}
						author={heroPost.author}
						slug={heroPost.slug}
						excerpt={heroPost.excerpt}
					/>
				)}
				{morePosts.length > 0 && <MorePosts posts={morePosts} />}
				<button onClick={loadMorePosts} className="mt-10">
					Voir plus
				</button>
			</div>
		</main>
	);
}
