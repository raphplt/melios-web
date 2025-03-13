import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

export default function DownloadSection() {
	return (
		<section
			className="flex flex-col items-center justify-center bg-gradient-to-r from-primary to-secondary text-white min-h-screen py-16 px-6 text-center"
			id="download"
		>
			<h2
				className="text-5xl font-extrabold mb-6
			opacity-0 transition-opacity intersect-full intersect:opacity-100 intersect-once duration-400
			intersect:motion-preset-shrink motion-delay-100
			"
				aria-label="Téléchargez Melios"
			>
				Téléchargez Melios
			</h2>
			<p
				className="text-xl max-w-2xl mb-8 text-default-200
			opacity-0 transition-opacity intersect-full intersect:opacity-100 intersect-once duration-400
			intersect:motion-preset-shrink
			"
				aria-label="Transformez votre quotidien avec Melios ! Disponible sur iOS et Android."
			>
				Transformez votre quotidien avec Melios ! Disponible sur iOS et Android.
			</p>
			<div className="flex flex-col md:flex-row gap-6">
				<Button
					as={Link}
					target="_blank"
					href="https://apps.apple.com/fr/app/melios/id6664069292?platform=iphone"
					variant="solid"
					color="primary"
					aria-label="Télécharger sur l'App Store"
					className="
					opacity-0 transition-opacity intersect-full intersect:opacity-100 intersect-once duration-400
					intersect:motion-scale-in-[0.5] intersect:motion-translate-x-in-[-28%] 
					intersect:motion-translate-y-in-[26%] intersect:motion-opacity-in-[0%] intersect:motion-rotate-in-[-10deg] 
					intersect:motion-blur-in-[5px] intersect:motion-duration-[0.35s] intersect:motion-duration-[0.53s]/scale 
					intersect:motion-duration-[0.53s]/translate intersect:motion-duration-[0.63s]/rotate intersect:motion-delay-300"
				>
					<Icon icon="ic:baseline-apple" width={24} />
					<span>Télécharger sur l&apos;App Store</span>
				</Button>
				<Button
					as={Link}
					target="_blank"
					href="https://play.google.com/store/apps/details?id=com.raphplt.melios&pcampaignid=web_share"
					variant="faded"
					color="primary"
					aria-label="Disponible sur Google Play"
					className="
					opacity-0 transition-opacity intersect-full intersect:opacity-100 intersect-once duration-400
					intersect:motion-scale-in-[0.5] intersect:motion-translate-x-in-[-28%] 
					intersect:motion-translate-y-in-[26%] intersect:motion-opacity-in-[0%] intersect:motion-rotate-in-[-10deg] 
					intersect:motion-blur-in-[5px] intersect:motion-duration-[0.35s] intersect:motion-duration-[0.53s]/scale 
					intersect:motion-duration-[0.53s]/translate intersect:motion-duration-[0.63s]/rotate intersect:motion-delay-400"
				>
					<Icon icon="mage:playstore" width={24} />
					<span>Disponible sur Google Play</span>
				</Button>
			</div>
			<div className="mt-12 flex flex-col lg:flex-row justify-center items-center gap-8 w-full max-w-7xl mx-auto">
				<Image
					src="/images/Preview.png"
					alt="Aperçu de l'application Melios"
					width={800}
					height={500}
					className="object-cover bg-default-50 rounded-2xl shadow-xl lg:w-7/12
                    opacity-0 transition-opacity intersect-half 
                    intersect:motion-preset-shrink intersect:opacity-100 intersect-once duration-400"
					aria-label="Aperçu de l'application Melios"
				/>

				<div className="lg:w-5/12 space-y-8">
					<div className="grid grid-cols-2 gap-6">
						<div className="text-center opacity-0 intersect-half intersect:opacity-100 intersect-once duration-400 intersect:motion-delay-200">
							<div className="text-4xl font-bold">+100</div>
							<div className="text-default-200">Utilisateurs actifs</div>
						</div>
						<div className="text-center opacity-0 intersect-half intersect:opacity-100 intersect-once duration-400 intersect:motion-delay-300">
							<div className="text-4xl font-bold">4.9</div>
							<div className="text-default-200">Note moyenne</div>
						</div>
					</div>

					<div className="space-y-4 opacity-0 intersect-half intersect:opacity-100 intersect-once duration-400 intersect:motion-delay-400">
						<h3 className="text-2xl font-bold">Pourquoi rejoindre Melios ?</h3>
						<ul className="space-y-3 ml-20">
							<li className="flex items-center gap-2">
								<Icon
									icon="heroicons:check-circle"
									className="text-success"
									width={24}
								/>
								<span>Application 100% gratuite</span>
							</li>
							<li className="flex items-center gap-2">
								<Icon
									icon="heroicons:check-circle"
									className="text-success"
									width={24}
								/>
								<span>Sans publicité</span>
							</li>
							<li className="flex items-center gap-2">
								<Icon
									icon="heroicons:check-circle"
									className="text-success"
									width={24}
								/>
								<span>Mise à jour régulière</span>
							</li>
							<li className="flex items-center gap-2">
								<Icon
									icon="heroicons:check-circle"
									className="text-success"
									width={24}
								/>
								<span>Support réactif</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
