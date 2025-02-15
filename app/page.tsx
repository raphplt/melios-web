"use client";
import ContactSection from "@/components/ContactSection";
import DownloadSection from "@/components/DownloadSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";

export default function Home() {
	return (
		<>
			<HeroSection />
			<FeaturesSection />
			<ScreenshotsSection />
			<DownloadSection />
			<ContactSection />
		</>
	);
}
