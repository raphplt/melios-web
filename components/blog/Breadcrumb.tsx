import Link from "next/link";

type BreadcrumbProps = {
	items: { label: string; href: string }[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
	return (
		<nav aria-label="breadcrumb">
			<ol className="flex space-x-2 items-start text-xs text-default-500 py-2">
				{items.map((item, index) => (
					<li key={index} className="flex items-center">
						{index > 0 && <span className="mx-1">•</span>}
						<Link href={item.href} className="hover:underline">
							<span className="block sm:hidden">
								{item.label.length > 25 ? `${item.label.slice(0, 25)}...` : item.label}
							</span>
							<span className="hidden sm:block">{item.label}</span>
						</Link>
					</li>
				))}
			</ol>
		</nav>
	);
}