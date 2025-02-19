"use client";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
	const pathname = usePathname();
	const router = useRouter();

	const handleLinkClick = (href: string) => {
		if (pathname !== "/") {
			router.push("/");
			setTimeout(() => {
				router.push(href);
			}, 100);
		} else {
			router.push(href);
		}
	};

	return (
		<footer className="bg-default-900 text-white">
			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<Image
							src="/images/Logo_Melios.png"
							alt="Melios"
							width={40}
							height={40}
						/>

						<h3 className="text-xl font-bold my-4">Melios</h3>
						<p className="text-sm text-gray-300 w-2/3">
							Soyez récompensés pour vos bonnes habitudes.
						</p>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-4">Liens rapides</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="#features"
									onPress={() => handleLinkClick("#features")}
									className="text-default-100 text-sm"
								>
									Fonctionnalités
								</Link>
							</li>
							<li>
								<Link
									href="#screenshots"
									onPress={() => handleLinkClick("#screenshots")}
									className="text-default-100 text-sm cursor-pointer"
								>
									Aperçu
								</Link>
							</li>
							<li>
								<Link
									href="#download"
									onPress={() => handleLinkClick("#download")}
									className="text-default-100 text-sm cursor-pointer"
								>
									Téléchargement
								</Link>
							</li>
							<li>
								<Link
									href="#contact"
									onPress={() => handleLinkClick("#contact")}
									className="text-default-100 text-sm cursor-pointer"
								>
									Contact
								</Link>
							</li>
							<li>
								<Link
									href="/articles"
									onPress={() => handleLinkClick("/articles")}
									className="text-default-100 text-sm cursor-pointer"
								>
									Articles
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-4">Légal</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/privacy" className="text-default-100 text-sm">
									Confidentialité
								</Link>
							</li>
							<li>
								<Link href="/cookies" className="text-default-100 text-sm">
									Cookies
								</Link>
							</li>
							<li>
								<Link href="/terms" className="text-default-100 text-sm">
									Mentions légales
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
						<ul className="flex space-x-4">
							<li>
								<Link
									href="https://www.linkedin.com/in/melios-the-app/"
									target="_blank"
									className="hover:text-gray-300 text-default-100"
									aria-label="LinkedIn"
								>
									<Icon icon="akar-icons:linkedin-fill" className="w-6 h-6" />
								</Link>
							</li>
							<li>
								<Link
									href="https://www.tiktok.com/@melios_app"
									target="_blank"
									className="hover:text-gray-300 text-default-100"
									aria-label="Tiktok"
								>
									<Icon icon="akar-icons:tiktok-fill" className="w-6 h-6" />
								</Link>
							</li>
							<li>
								<Link
									href="https://instagram.com/melios_app"
									className="hover:text-gray-300 text-default-100"
									aria-label="Instagram"
									target="_blank"
								>
									<Icon icon="akar-icons:instagram-fill" className="w-6 h-6" />
								</Link>
							</li>
							<li>
								<Link
									href="https://github.com/raphplt/melios"
									className="hover:text-gray-300 text-default-100"
									aria-label="Github"
									target="_blank"
								>
									<Icon icon="akar-icons:github-fill" className="w-6 h-6" />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className=" py-4">
				<div className="container mx-auto px-4 text-center text-sm">
					<p>&copy; {new Date().getFullYear()} Melios. Tous droits réservés.</p>
				</div>
			</div>
		</footer>
	);
}