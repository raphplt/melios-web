"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-slate-900 text-white">
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
							Simplifiez votre quotidien avec l’application mobile Melios. Découvrez
							une expérience unique alliant performance et innovation.
						</p>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-4">Liens rapides</h3>
						<ul className="space-y-2">
							<li>
								<a href="#features" className="hover:underline">
									Fonctionnalités
								</a>
							</li>
							<li>
								<a href="#screenshots" className="hover:underline">
									Aperçu
								</a>
							</li>
							<li>
								<a href="#download" className="hover:underline">
									Téléchargement
								</a>
							</li>
							<li>
								<a href="#contact" className="hover:underline">
									Contact
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
						<ul className="flex space-x-4">
							<li>
								<a href="#" className="hover:text-gray-300" aria-label="Facebook">
									<Icon icon="akar-icons:facebook-fill" className="w-6 h-6" />
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-gray-300" aria-label="Twitter">
									<Icon icon="akar-icons:twitter-fill" className="w-6 h-6" />
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-gray-300" aria-label="Instagram">
									<Icon icon="akar-icons:instagram-fill" className="w-6 h-6" />
								</a>
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
