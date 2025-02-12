import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function DownloadSection() {
	return (
		<section className="flex flex-col items-center justify-center bg-gradient-to-r from-primary to-secondary text-white min-h-screen py-16">
			<h2 className="text-4xl font-bold mb-6">Téléchargez Melios</h2>
			<p className="text-xl mb-8">Disponible sur iOS et Android</p>
			<div className="flex gap-4">
				<Button
					as={Link}
					href="https://apps.apple.com/fr/app/melios/id6664069292?platform=iphone"
					variant="solid"
					startContent={<Icon icon="ic:baseline-apple" width={20} />}
				>
					App Store
				</Button>
				<Button
					href="https://play.google.com/store/apps/details?id=com.raphplt.melios&pcampaignid=web_share"
					variant="solid"
					startContent={<Icon icon="mage:playstore" width={20} />}
				>
					Google Play
				</Button>
			</div>
		</section>
	);
}
