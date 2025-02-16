import Link from "next/link";

type BreadcrumbProps = {
	items: { label: string; href: string }[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
	return (
		<nav aria-label="breadcrumb">
			<ol className="flex space-x-2 text-xs text-default-500 py-2">
				{items.map((item, index) => (
					<li key={index} className="flex items-center">
						{index > 0 && <span className="mx-1">•</span>}
						<Link href={item.href} className="hover:underline">
							{item.label}
						</Link>
					</li>
				))}
			</ol>
		</nav>
	);
}
