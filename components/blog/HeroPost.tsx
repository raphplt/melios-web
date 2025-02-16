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
	author: Author;
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
	return (
		<section className="sm:w-2/3 bg-default-50 p-4 rounded-md">
			<div className="mb-8 md:mb-5">
				<CoverImage title={title} src={coverImage} slug={slug} />
			</div>
			<div className="">
				<div>
					<h3 className="mb-4 text-2xl lg:text-3xl font-bold leading-tight">
						<Link href={`/articles/${slug}`} className="hover:underline">
							{title}
						</Link>
					</h3>
					<p className="text-md text-default-500 w-10/12 leading-relaxed text-sm mb-2">
						{excerpt}
					</p>

					<Avatar name={author.name} picture={author.picture} />
					<div className="mb-4 mt-2 md:mb-0 text-lg">
						<DateFormatter dateString={date} />
					</div>
				</div>
			</div>
		</section>
	);
}
