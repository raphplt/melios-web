import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import HeadSection from "@/components/HeadSection";
import ObserverProvider from "@/context/ObserverProvider";
import Footer from "@/components/Footer";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "600"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Melios - Application Mobile",
	description:
		"Découvrez Melios, l'application mobile qui révolutionne votre quotidien.",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="fr">
			<ObserverProvider>
				<HeadSection />
				<body className={`${poppins.className} antialiased`}>
					<Header />
					{children}
					<Footer />
				</body>
			</ObserverProvider>
		</html>
	);
}
