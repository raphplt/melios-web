import { type Author } from "@/interfaces/author";
import Link from "next/link";
import CoverImage from "./CoverImage";
import DateFormatter from "./DateFormatter";
import Avatar from "./Avatar";

type Props = {
	title: string;
	coverImage: string;
	date: string;
	excerpt: string;
	author: string;
	slug: string;
};

export function HeroPost({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}: Props) {
	const authorParse: Author = JSON.parse(author);
	return (
		<section className="bg-default-50 rounded-md">
			<div className="mb-8 md:mb-5">
				<CoverImage title={title} src={coverImage} slug={slug} />
			</div>
			<div className="p-4">
				<div>
					<h3 className="mb-4 text-2xl lg:text-3xl font-bold leading-tight">
						<Link href={`/articles/${slug}`} className="hover:underline">
							{title}
						</Link>
					</h3>
					<p className="text-md text-default-500 w-10/12 leading-relaxed text-sm mb-2">
						{excerpt}
					</p>
					<Avatar name={authorParse.name} picture={authorParse.picture} />
					<div className="mb-4 mt-2 md:mb-0 text-lg">
						<DateFormatter dateString={date} />
					</div>
				</div>
			</div>
		</section>
	);
}
