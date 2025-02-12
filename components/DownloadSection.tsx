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
			<h2 className="text-5xl font-extrabold mb-6">Téléchargez Melios</h2>
			<p className="text-xl max-w-2xl mb-8">
				Transformez votre quotidien avec Melios ! Disponible sur iOS et Android.
			</p>
			<div className="flex flex-col md:flex-row gap-6">
				<Button
					as={Link}
					target="_blank"
					href="https://apps.apple.com/fr/app/melios/id6664069292?platform=iphone"
					variant="solid"
					className="flex items-center gap-2 px-6 py-3 text-lg rounded-lg bg-white text-primary hover:bg-gray-100 transition-all"
				>
					<Icon icon="ic:baseline-apple" width={24} />
					<span>Télécharger sur l&apos;App Store</span>
				</Button>
				<Button
					as={Link}
					target="_blank"
					href="https://play.google.com/store/apps/details?id=com.raphplt.melios&pcampaignid=web_share"
					variant="solid"
					className="flex items-center gap-2 px-6 py-3 text-lg rounded-lg bg-white text-primary hover:bg-gray-100 transition-all"
				>
					<Icon icon="mage:playstore" width={24} />
					<span>Disponible sur Google Play</span>
				</Button>
			</div>
			<div className="mt-12 flex justify-center">
				<Image
					src="/images/Preview.png"
					alt="Aperçu de l'application Melios"
					width={800}
					height={500}
					className="object-cover w-full bg-default-50 rounded-2xl shadow-xl"
				/>
			</div>
		</section>
	);
}
