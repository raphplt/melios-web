import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/components/blog/PostBody";
import { PostHeader } from "@/components/blog/PostHeader";
import RelatedPosts from "@/components/blog/RelatedPosts";
import ShareArticle from "@/components/blog/ShareArticle";
import Breadcrumb from "@/components/blog/Breadcrumb";

export default async function Post(props: Params) {
	const params = await props.params;
	const post = getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	const content = await markdownToHtml(post.content || "");

	const relatedPosts = getRelatedPosts(post);

	const breadcrumbItems = [
		{ label: "Accueil", href: "/" },
		{ label: "Articles", href: "/articles" },
		{ label: post.title, href: `/articles/${post.slug}` },
	];

	return (
		<main>
			<div className="container mx-auto lg:px-5">
				<article className="lg:mb-20 mb-10 mt-10 lg:mt-20 lg:bg-slate-50 lg:w-2/3 w-full mx-auto p-8 rounded-md">
					<Breadcrumb items={breadcrumbItems} />
					<PostHeader
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
						imageCredit={post.imageCredit}
					/>
					<PostBody content={content} />
					<ShareArticle
						title={post.title}
						url={`https://melios.me/articles/${post.slug}`}
					/>
				</article>
			</div>
			<RelatedPosts posts={relatedPosts} />
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