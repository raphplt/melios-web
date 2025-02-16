import { Post } from "@/interfaces/post";
import React from "react";
import { PostPreview } from "./PostPreview";

const RelatedPosts = ({ posts }: { posts: Post[] }) => {
	return (
		<div className="container mx-auto px-5 w-11/12 mb-24">
			<h1 className="text-2xl font-semibold text-gray-900">Articles connexes :</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{posts.map((post) => (
					<PostPreview
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						excerpt={post.excerpt}
						author={post.author}
						slug={post.slug}
						key={post.slug}
					/>
				))}
			</div>
		</div>
	);
};

export default RelatedPosts;
