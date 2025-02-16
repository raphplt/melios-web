declare global {
	interface Window {
		gtag: (command: string, trackingId: string, config: object) => void;
	}
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

console.log("GA_TRACKING_ID", GA_TRACKING_ID);

export const pageview = (url: string) => {
	window.gtag("config", GA_TRACKING_ID, {
		page_path: url,
	});
};
