"use client";
import ContactSection from "@/components/ContactSection";
import DownloadSection from "@/components/DownloadSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";

export default function Home() {
	return (
		<>
			<HeroSection />
			<ScreenshotsSection />
			<FeaturesSection />
			<DownloadSection />
			<ContactSection />
			<Footer />
		</>
	);
}
