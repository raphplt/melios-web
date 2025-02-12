import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

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
			<body className={`${poppins.className} antialiased`}>{children}</body>
		</html>
	);
}
