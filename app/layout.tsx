import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ArchiveBanner from "@/components/ArchiveBanner";
import HeadSection from "@/components/HeadSection";
import ObserverProvider from "@/context/ObserverProvider";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import Scripte from "@/components/Script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Melios - Application Mobile (Archive)",
  description:
    "Découvrez Melios, l'application mobile. Projet archivé et désormais terminé.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <ObserverProvider>
        <HeadSection />
        <body className={`${poppins.className} antialiased pt-6`}>
          <ArchiveBanner />
          <Scripte />
          <Header />
          {children}
          <Analytics />
          <Footer />
        </body>
      </ObserverProvider>
    </html>
  );
}
