import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mon Parrain Boursobank - Programme de Parrainage",
  description: "Ouvrez votre compte Boursobank (Boursorama Banque) et obtenez jusqu'à 200€ avec mon parrainage. Code de parrainage illimité et sans conditions.",
  keywords: "parrainage, Boursobank, Boursorama, gagne argent, code promo, banque en ligne, 200 euros",
  icons: {
    icon: "/logo_site.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/logo_site.png" />
        <meta name="google-adsense-account" content="ca-pub-5487089817655494" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5487089817655494"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
