import { HeroPost } from "@/components/blog/HeroPost";
import { MorePosts } from "@/components/blog/MorePosts";
import { getAllPosts } from "@/lib/api";

export default function Index() {
	const allPosts = getAllPosts();

	const heroPost = allPosts[0];

	const morePosts = allPosts.slice(1);

	return (
		<main>
			<div className="container mx-auto px-5 mt-20">
				<HeroPost
					title={heroPost.title}
					coverImage={heroPost.coverImage}
					date={heroPost.date}
					author={heroPost.author}
					slug={heroPost.slug}
					excerpt={heroPost.excerpt}
				/>
				{morePosts.length > 0 && <MorePosts posts={morePosts} />}
			</div>
		</main>
	);
}
