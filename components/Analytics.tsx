"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { GA_TRACKING_ID } from "@/lib/gtag";

export default function Analytics() {
	const pathname = usePathname();

	useEffect(() => {
		if (typeof window !== "undefined" && window.gtag) {
			window.gtag("config", GA_TRACKING_ID, {
				page_path: pathname,
			});
		}
	}, [pathname]);

	return null;
}
