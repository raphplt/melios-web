"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<header className="bg-white/30 backdrop-blur-lg border border-white/20 text-default-900 shadow fixed top-0 left-0 right-0 z-50">
			<div className="container mx-auto px-4 flex items-center justify-between h-14">
				<Link href="/" className="flex items-center space-x-4 cursor-pointer">
					<Image src="/images/Logo_Melios.png" alt="Melios" width={40} height={40} />
					<div className="text-xl font-bold">Melios</div>
				</Link>

				<nav className="hidden md:block">
					<ul className="flex space-x-8 text-sm">
						<li>
							<Link href="#features" className="hover:text-blue-600">
								Fonctionnalités
							</Link>
						</li>
						<li>
							<Link href="#screenshots" className="hover:text-blue-600">
								Aperçu
							</Link>
						</li>
						<li>
							<Link href="#download" className="hover:text-blue-600">
								Téléchargement
							</Link>
						</li>
						<li>
							<Link href="#contact" className="hover:text-blue-600">
								Contact
							</Link>
						</li>
					</ul>
				</nav>

				{/* Bouton burger en mobile */}
				<div className="md:hidden">
					<button
						onClick={toggleMenu}
						className="focus:outline-none"
						aria-label="Menu"
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
				<nav className="md:hidden bg-white shadow">
					<ul className="flex flex-col space-y-2 px-4 py-2">
						<li>
							<Link
								href="#features"
								onClick={() => setMenuOpen(false)}
								className="block py-2 hover:text-blue-600"
							>
								Fonctionnalités
							</Link>
						</li>
						<li>
							<Link
								href="#screenshots"
								onClick={() => setMenuOpen(false)}
								className="block py-2 hover:text-blue-600"
							>
								Aperçu
							</Link>
						</li>
						<li>
							<Link
								href="#download"
								onClick={() => setMenuOpen(false)}
								className="block py-2 hover:text-blue-600"
							>
								Téléchargement
							</Link>
						</li>
						<li>
							<Link
								href="#contact"
								onClick={() => setMenuOpen(false)}
								className="block py-2 hover:text-blue-600"
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
}