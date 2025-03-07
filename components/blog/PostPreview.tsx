import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./DateFormatter";
import Avatar from "./Avatar";
import Image from "next/image";

type Props = {
	title: string;
	coverImage: string;
	date: string;
	excerpt: string;
	author: string;
	slug: string;
};

export function PostPreview({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}: Props) {
	const authorParse: Author = JSON.parse(author);

	return (
		<Link href={`/articles/${slug}`}>
			<div className="group max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
				<div className="w-full h-64 overflow-hidden">
					<Image
						width={500}
						height={500}
						src={coverImage}
						alt={`Image de couverture pour ${title}`}
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="p-5">
					<h3 className="text-lg font-semibold text-gray-900 group-hover:underline line-clamp-2">
						{title}
					</h3>

					<div className="mt-2 text-default-600 text-sm">
						<DateFormatter dateString={date} />
					</div>

					<p className="mt-4 text-default-500 leading-relaxed text-xs line-clamp-2">
						{excerpt}
					</p>

					<div className="mt-4 flex items-center justify-between">
						<div className="flex items-center">
							<Avatar name={authorParse.name} picture={authorParse.picture} />
						</div>

						<div className="text-primary hover:text-primaryLight transition-all duration-200 font-medium text-sm">
							Lire l&apos;article →
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}