import type { Metadata } from "next";

//=============== Fonts ===============//
import {
  Caveat,
  Dancing_Script,
  Geist,
  Geist_Mono,
  Montserrat,
} from "next/font/google";

//=============== CSS ===============//
import "./globals.css";

//=============== Components ===============//
import Header from "@/components/organisms/header/Header";
import Footer from "@/components/organisms/footer/Footer";
import LanguageProvider from "@/components/providers/LanguageProvider";

//=============== Fonts Configuration ===============//
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

//=============== Metadata ===============//
export const metadata: Metadata = {
  title: "GP",
  description:
    "Portfolio di Gabriele Prestano, sviluppatore front-end junior autodidatta, con progetti, educazione, competenze e contatti.",
  keywords: [
    "Gabriele Prestano",
    "Front End Developer",
    "Junior Front End Developer",
    "Portfolio",
    "Linkedin",
    "GitHub",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
  ],
  authors: [
    {
      name: "Gabriele Prestano",
      url: "https://www.linkedin.com/in/prestano-gabriele",
    },
  ],
  creator: "Gabriele Prestano",
  openGraph: {
    title: "Gabriele Prestano – Junior Front-End Developer Portfolio",
    description:
      "Esplora il portfolio di Gabriele Prestano, sviluppatore front-end junior autodidatta con progetti creativi e competenze in HTML & CSS, JavaScript & TypeScript, React, Angular (base) e Next.js (base)",
    siteName: "GP",
    locale: "it_IT",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${dancingScript.variable} ${caveat.variable} antialiased`}
      >
        <LanguageProvider>
          <Header />
          <main className="border-b border-dashed border-zinc-600">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
