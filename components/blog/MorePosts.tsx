import { Post } from "@/interfaces/post";
import { PostPreview } from "./PostPreview";

type Props = {
	posts: Post[];
};

export function MorePosts({ posts }: Props) {
	return (
		<section>
			<h2 className="mb-6 mt-8 lg:mt-12 text-xl md:text-2xl font-bold tracking-tighter leading-tight">
				Plus de posts
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-10 mb-24">
				{posts.map((post) => (
					<PostPreview
						key={post.slug}
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
						slug={post.slug}
						excerpt={post.excerpt}
					/>
				))}
			</div>
		</section>
	);
}
