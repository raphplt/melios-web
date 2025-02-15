import { type Author } from "@/interfaces/author";
import Link from "next/link";
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

export function PostPreview({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}: Props) {
	return (
		<div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
			{/* Image en haut */}
			<div className="w-full h-64 overflow-hidden">
				<img
					src={coverImage}
					alt={`Image de couverture pour ${title}`}
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Contenu texte */}
			<div className="p-6">
				<h3 className="text-xl font-semibold text-gray-900 hover:underline">
					<Link href={`/articles/${slug}`}>{title}</Link>
				</h3>

				<div className="mt-2 text-default-600 text-sm">
					<DateFormatter dateString={date} />
				</div>

				<p className="mt-4 text-default-500 leading-relaxed text-sm">{excerpt}</p>

				{/* Auteur + bouton de lecture */}
				<div className="mt-6 flex items-center justify-between">
					<div className="flex items-center">
						<Avatar name={author.name} picture={author.picture} />
					</div>

					<Link
						href={`/articles/${slug}`}
						className="text-primary hover:text-primaryLight transition-all duration-200 font-medium text-sm"
					>
						Lire l&apos;article →
					</Link>
				</div>
			</div>
		</div>
	);
}
