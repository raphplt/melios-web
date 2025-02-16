import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const ShareArticle = ({ title, url }: { title: string; url: string }) => {
	const encodedTitle = encodeURIComponent(title);
	const encodedUrl = encodeURIComponent(url);

	return (
		<div className="flex flex-col items-center mt-16">
			<h2 className="text-base text-default-700 mb-4">Partager cet article :</h2>
			<div className="flex space-x-8">
				<a
					href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Icon
						icon="akar-icons:facebook-fill"
						className="text-primary"
						width={20}
					/>
				</a>
				<a
					href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Icon icon="akar-icons:x-fill" className="text-primary" width={20} />
				</a>
				<a
					href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Icon
						icon="akar-icons:linkedin-fill"
						className="text-primary"
						width={20}
					/>
				</a>
				<a
					href={`https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Icon icon="akar-icons:reddit-fill" className="text-primary" width={20} />
				</a>
			</div>
		</div>
	);
};

export default ShareArticle;
