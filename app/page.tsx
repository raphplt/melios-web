"use client";
import ContactSection from "@/components/ContactSection";
import DownloadSection from "@/components/DownloadSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Melios - Application Mobile</title>
				<meta
					name="description"
					content="Découvrez Melios, l'application mobile qui révolutionne votre quotidien."
				/>
			</Head>
			<HeroSection />
			<ScreenshotsSection />
			<FeaturesSection />
			<DownloadSection />
			<TestimonialsSection />
			<ContactSection />
			<Footer />
		</>
	);
}
