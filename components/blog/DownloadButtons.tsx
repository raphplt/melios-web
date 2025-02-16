import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const DownloadButtons = () => {
	return (
		<div className="flex items-center justify-center gap-4 mt-8">
			<a
				target="_blank"
				href="https://apps.apple.com/fr/app/melios/id6664069292?platform=iphone"
				aria-label="Télécharger sur l'App Store"
				className=" bg-primary text-white rounded-full p-2 px-6 flex items-center gap-2 text-sm
                hover:bg-primaryLight transition-colors duration-300 ease-in-out border border-primary
                "
			>
				<Icon icon="ic:baseline-apple" width={24} />
				<span>Télécharger sur l&apos;App Store</span>
			</a>
			<a
				target="_blank"
				href="https://play.google.com/store/apps/details?id=com.raphplt.melios&pcampaignid=web_share"
				color="primary"
				aria-label="Disponible sur Google Play"
				className=" border border-primary text-primary rounded-full p-2 px-6 flex items-center gap-2 text-sm
                hover:bg-default-200 transition-colors duration-300 ease-in-out
                "
			>
				<Icon icon="mage:playstore" width={20} />
				<span>Disponible sur Google Play</span>
			</a>
		</div>
	);
};

export default DownloadButtons;
