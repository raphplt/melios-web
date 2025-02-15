import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/components/blog/PostBody";
import { PostHeader } from "@/components/blog/PostHeader";

export default async function Post(props: Params) {
	const params = await props.params;
	const post = getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	const content = await markdownToHtml(post.content || "");

	return (
		<main>
			<div className="container mx-auto px-5">
				<article className="mb-32 mt-20">
					<PostHeader
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
						imageCredit={post.imageCredit}
					/>
					<PostBody content={content} />
				</article>
			</div>
		</main>
	);
}

type Params = {
	params: Promise<{
		slug: string;
	}>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
	const params = await props.params;
	const post = getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	const title = `${post.title} | Melios Blog `;

	return {
		title,
		openGraph: {
			title,
			images: [post.ogImage.url],
		},
	};
}

export async function generateStaticParams() {
	const posts = getAllPosts();

	return posts.map((post) => ({
		slug: post.slug,
	}));
}
