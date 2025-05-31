import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';

// Import dynamique des composants pour éviter les problèmes de rendu côté serveur
const Navbar = dynamic(() => import('../components/ui/Navbar'), { ssr: true });
const Footer = dynamic(() => import('../components/ui/Footer'), { ssr: true });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SABARD Bâtiment | Constructeur Immobilier, Gros œuvre",
  description: "Constructeur immobilier, l'entreprise SABARD développe depuis 2018 ses compétences dans les métiers du gros œuvre à haute technicité et d'entreprise générale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
