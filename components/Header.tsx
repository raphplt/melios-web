"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import Android from "./icons/Android";
import Apple from "./icons/Apple";
import Download from "./icons/Download";

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const pathname = usePathname();
	const router = useRouter();

	const toggleMenu = () => setMenuOpen(!menuOpen);

	const handleLinkClick = (href: string) => {
		if (pathname !== "/") {
			router.push("/");
			setTimeout(() => {
				router.push(href);
			}, 100);
		} else {
			router.push(href);
		}
		setMenuOpen(false);
	};

	return (
		<header className="bg-white/30 backdrop-blur-lg border border-white/20 text-default-900 shadow fixed top-0 left-0 right-0 z-50">
			<div className="container mx-auto px-4 flex items-center justify-between h-14">
				<Link
					href="/"
					className="flex items-center space-x-4 cursor-pointer"
					aria-label="Accueil"
				>
					<Image
						src="/images/Logo_Melios.png"
						alt="Melios"
						width={40}
						height={40}
						className="rounded-lg"
					/>
					<div className="text-2xl font-bold text-primary">Melios</div>
				</Link>

				<nav className="hidden md:block" aria-label="Navigation principale">
					<ul className="flex space-x-8 text-sm items-center">
						<li>
							<Link
								href="#features"
								onClick={() => handleLinkClick("#features")}
								className="hover:text-blue-600 cursor-pointer"
								aria-label="Fonctionnalités"
							>
								Fonctionnalités
							</Link>
						</li>
						<li>
							<Link
								href="#screenshots"
								onClick={() => handleLinkClick("#screenshots")}
								className="hover:text-blue-600 cursor-pointer"
								aria-label="Aperçu"
							>
								Aperçu
							</Link>
						</li>
						<li>
							<Link
								href="#download"
								onClick={() => handleLinkClick("#download")}
								className="hover:text-blue-600 cursor-pointer"
								aria-label="Téléchargement"
							>
								Téléchargement
							</Link>
						</li>
						<li>
							<Link
								href="#contact"
								onClick={() => handleLinkClick("#contact")}
								className="hover:text-blue-600 cursor-pointer"
								aria-label="Contact"
							>
								Contact
							</Link>
						</li>
						<li>
							<Link
								href="/articles"
								onClick={() => handleLinkClick("/articles")}
								className="hover:text-blue-600 cursor-pointer"
								aria-label="Articles"
							>
								Articles
							</Link>
						</li>
						<li>
							<Popover>
								<PopoverTrigger>
									<Button
										color="primary"
										endContent={<Download />}
										aria-label="Télécharger"
									>
										Télécharger
									</Button>
								</PopoverTrigger>
								<PopoverContent>
									<div className="p-4">
										<p
											className="text-lg text-primary font-bold mb-2"
											aria-label="Téléchargez l'application"
										>
											Téléchargez l&apos;application
										</p>
										<p
											className="text-sm text-gray-600"
											aria-label="Disponible sur Android et iOS"
										>
											Disponible sur Android et iOS
										</p>
										<div className="flex justify-center mt-4 gap-4">
											<Button
												variant="solid"
												color="primary"
												endContent={<Android />}
												href="https://play.google.com/store/apps/details?id=com.raphplt.melios&pcampaignid=web_share"
												as={Link}
												target="_blank"
												arial-label="Télécharger sur Android"
											>
												Android
											</Button>
											<Button
												variant="ghost"
												endContent={<Apple />}
												color="primary"
												href="https://apps.apple.com/fr/app/melios/id6664069292?platform=iphone"
												as={Link}
												target="_blank"
												arial-label="Télécharger sur iOS"
											>
												iOS
											</Button>
										</div>
									</div>
								</PopoverContent>
							</Popover>
						</li>
					</ul>
				</nav>

				{/* Bouton burger en mobile */}
				<div className="md:hidden">
					<button
						onClick={toggleMenu}
						className="focus:outline-none"
						aria-label="Menu"
						aria-expanded={menuOpen}
					>
						{menuOpen ? (
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						)}
					</button>
				</div>
			</div>

			{/* Menu mobile */}
			{menuOpen && (
				<nav className="md:hidden bg-white shadow" aria-label="Navigation mobile">
					<ul className="flex flex-col space-y-2 px-4 py-2">
						<li>
							<Link
								href="#features"
								onClick={() => handleLinkClick("#features")}
								className="block py-2 hover:text-blue-600 cursor-pointer"
								aria-label="Fonctionnalités"
							>
								Fonctionnalités
							</Link>
						</li>
						<li>
							<Link
								href="#screenshots"
								onClick={() => handleLinkClick("#screenshots")}
								className="block py-2 hover:text-blue-600 cursor-pointer"
								aria-label="Aperçu"
							>
								Aperçu
							</Link>
						</li>
						<li>
							<Link
								href="#download"
								onClick={() => handleLinkClick("#download")}
								className="block py-2 hover:text-blue-600 cursor-pointer"
								aria-label="Téléchargement"
							>
								Téléchargement
							</Link>
						</li>
						<li>
							<Link
								href="#contact"
								onClick={() => handleLinkClick("#contact")}
								className="block py-2 hover:text-blue-600 cursor-pointer"
								aria-label="Contact"
							>
								Contact
							</Link>
						</li>
						<li>
							<Link
								href="/articles"
								onClick={() => handleLinkClick("/articles")}
								className="block py-2 hover:text-blue-600 cursor-pointer"
								aria-label="Articles"
							>
								Articles
							</Link>
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
}