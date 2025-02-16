import { type Author } from "@/interfaces/author";
import Avatar from "./Avatar";
import CoverImage from "./CoverImage";
import DateFormatter from "./DateFormatter";

type Props = {
	title: string;
	coverImage: string;
	date: string;
	author: Author;
	imageCredit?: string;
};

export function PostHeader({
	title,
	coverImage,
	date,
	author,
	imageCredit,
}: Props) {
	return (
		<>
			<h1
				className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter leading-tight 
			md:leading-none mb-4 mt-2 text-left"
				aria-label={title}
			>
				{title}
			</h1>
			<div className="hidden md:block md:mb-6">
				<Avatar name={author.name} picture={author.picture} />
			</div>
			<div className="mb-5 md:mb-8 sm:mx-0">
				<CoverImage title={title} src={coverImage} />
				{imageCredit && <p className="text-sm text-gray-500 mt-2">{imageCredit}</p>}
			</div>
			<div className="max-w-2xl mx-auto">
				<div className="block md:hidden mb-6">
					<Avatar name={author.name} picture={author.picture} />
				</div>
				<div className="mb-6 text-lg">
					<DateFormatter dateString={date} />
				</div>
			</div>
		</>
	);
}
