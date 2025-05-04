"use client";
import { useState } from "react";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	const toggleMenu = () => setIsOpen(!isOpen);
	const closeMenu = () => setIsOpen(false);

	const textStyle =
		"text-gray-800 hover:text-primary transition-colors duration-300 text-sm font-semibold";

	const goTopHome = () => {
		router.push("/");
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="fixed top-2 w-full z-50">
			<div className="flex items-center justify-between container mx-auto h-16 px-4 md:px-8 backdrop-blur-md bg-white/50 border-b border-white/20 shadow-lg rounded-full">
				<button
					className="flex items-center gap-x-4"
					onClick={goTopHome}
					aria-label="Accueil"
				>
					<Image
						src="/images/Logo_Melios.png"
						alt="Melios"
						width={40}
						height={40}
						className="w-8 h-8 rounded-lg"
					/>
					<p className="font-bold text-primary text-lg">Melios</p>
				</button>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex gap-x-6 items-center">
					<Link href="#features" className={textStyle}>
						Fonctionnalités
					</Link>
					<Link href="#screenshots" className={textStyle}>
						Aperçu
					</Link>
					<Link href="#download" className={textStyle}>
						Téléchargement
					</Link>
					<Link href="#contact" className={textStyle}>
						Contact
					</Link>
					<Link href="/articles" className={textStyle}>
						Articles
					</Link>
					<div className="flex items-center gap-x-4">
						<Button
							as={Link}
							href="https://play.google.com/store/apps/details?id=com.raphplt.melios&pcampaignid=web_share"
							color="primary"
							variant="bordered"
							target="_blank"
							size="sm"
							className="backdrop-blur-sm bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-all duration-300 font-semibold"
							endContent={<Icon icon="mdi:android" className="text-lg" />}
						>
							Android
						</Button>
						<Button
							as={Link}
							href="https://apps.apple.com/fr/app/melios/id6664069292?platform=iphone"
							color="primary"
							variant="bordered"
							target="_blank"
							size="sm"
							className="backdrop-blur-sm bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-all duration-300 font-semibold"
							endContent={<Icon icon="mdi:apple" className="text-lg" />}
						>
							iOS
						</Button>
					</div>
				</nav>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden p-2 rounded-full hover:bg-white/20 transition-colors"
					onClick={toggleMenu}
					aria-label="Ouvrir le menu"
				>
					<Icon icon="mdi:menu" className="text-2xl text-gray-800" />
				</button>
			</div>

			{/* Mobile Menu Overlay */}
			{isOpen && (
				<div className="fixed inset-0 backdrop-blur-lg bg-white/70 flex flex-col items-center justify-center space-y-8 z-50 animate-fadeIn">
					<button
						className="absolute top-6 right-6 text-gray-800 p-2 rounded-full hover:bg-white/20 transition-colors"
						onClick={closeMenu}
						aria-label="Fermer le menu"
					>
						<Icon icon="mdi:close" className="text-2xl" />
					</button>
					<Link
						href="#features"
						onPress={closeMenu}
						className="text-gray-800 hover:text-primary transition-colors text-xl font-medium"
					>
						Fonctionnalités
					</Link>
					<Link
						href="#screenshots"
						onPress={closeMenu}
						className="text-gray-800 hover:text-primary transition-colors text-xl font-medium"
					>
						Aperçu
					</Link>
					<Link
						href="#download"
						onPress={closeMenu}
						className="text-gray-800 hover:text-primary transition-colors text-xl font-medium"
					>
						Téléchargement
					</Link>
					<Link
						href="#contact"
						onPress={closeMenu}
						className="text-gray-800 hover:text-primary transition-colors text-xl font-medium"
					>
						Contact
					</Link>
					<Link
						href="/articles"
						onPress={closeMenu}
						className="text-gray-800 hover:text-primary transition-colors text-xl font-medium"
					>
						Articles
					</Link>
					<div className="flex gap-4">
						<Button
							as={Link}
							href="https://play.google.com/store/apps/details?id=com.raphplt.melios&pcampaignid=web_share"
							color="primary"
							variant="bordered"
							target="_blank"
							onPress={closeMenu}
							endContent={<Icon icon="mdi:android" className="text-lg" />}
						>
							Android
						</Button>
						<Button
							as={Link}
							href="https://apps.apple.com/fr/app/melios/id6664069292?platform=iphone"
							color="primary"
							variant="bordered"
							target="_blank"
							onPress={closeMenu}
							endContent={<Icon icon="mdi:apple" className="text-lg" />}
						>
							iOS
						</Button>
					</div>
				</div>
			)}
		</div>
	);
}