"use client";
import { useState, useEffect } from "react";
import { HeroPost } from "@/components/blog/HeroPost";
import { MorePosts } from "@/components/blog/MorePosts";
import { Post } from "@/interfaces/post";
import { Button, Spinner } from "@heroui/react";
import { PostPreviewCompact } from "@/components/blog/PostPreviewCompact";

export default function Index() {
	const [page, setPage] = useState(1);
	const [allPosts, setAllPosts] = useState<Post[]>([]);
	const [hasMorePosts, setHasMorePosts] = useState(true);
	const [loadedSlugs, setLoadedSlugs] = useState<Set<string>>(new Set());

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await fetch(`/api/posts?page=${page}`);
			const newPosts = await res.json();

			const uniquePosts = newPosts.filter(
				(post: Post) => !loadedSlugs.has(post.slug)
			);
			setAllPosts((prevPosts) => [...prevPosts, ...uniquePosts]);
			setLoadedSlugs((prevSlugs) => {
				const newSlugs = new Set(prevSlugs);
				uniquePosts.forEach((post: Post) => newSlugs.add(post.slug));
				return newSlugs;
			});

			if (newPosts.length === 0 || newPosts.length < 10) {
				setHasMorePosts(false);
			}
		};

		fetchPosts();
	}, [page]);

	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);

	const pinnedPosts = morePosts.filter((post) => post.pinned);

	const loadMorePosts = () => {
		setPage((prevPage) => prevPage + 1);
	};

	if (!allPosts || allPosts.length === 0)
		return (
			<div className="flex justify-center items-center h-screen">
				<Spinner />
			</div>
		);
	if (!heroPost && morePosts.length === 0)
		return <div className="container mx-auto px-5 mt-20">No posts found.</div>;

	return (
		<main>
			<div className="container mx-auto px-5 mt-20">
				<div className="grid grid-cols-3 gap-6 items-start">
					{heroPost && (
						<div className="col-span-2">
							<HeroPost
								title={heroPost.title}
								coverImage={heroPost.coverImage}
								date={heroPost.date}
								author={heroPost.author}
								slug={heroPost.slug}
								excerpt={heroPost.excerpt}
							/>
						</div>
					)}
					<div className="col-span-1 flex flex-col gap-4">
						{pinnedPosts.map((post) => (
							<div key={post.slug} className=" w-full h-1/3">
								<PostPreviewCompact
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
				</div>

				{morePosts.length > 0 && <MorePosts posts={morePosts} />}
				{hasMorePosts && (
					<div className="flex justify-center my-5">
						<Button color="primary" onPress={loadMorePosts}>
							Voir plus
						</Button>
					</div>
				)}
			</div>
		</main>
	);
}