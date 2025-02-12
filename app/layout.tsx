import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "@/components/Header";

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
			<Head>
				<title>Melios - Application Mobile</title>
				<meta
					name="description"
					content="Découvrez Melios, l'application mobile qui révolutionne votre quotidien."
				/>
			</Head>
			<body className={`${poppins.className} antialiased`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
