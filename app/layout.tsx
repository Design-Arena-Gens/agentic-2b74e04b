import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Baba Vanga Chronicles",
    template: "%s | Baba Vanga Chronicles",
  },
  description:
    "A visionary blog inspired by Baba Vanga's prophecies, weaving folklore, futurecasting, and reflection into immersive storytelling.",
  openGraph: {
    title: "Baba Vanga Chronicles",
    description:
      "Dive into curated narratives inspired by Baba Vanga's visions, blending myth, history, and speculative futures.",
    url: "https://agentic-2b74e04b.vercel.app",
    siteName: "Baba Vanga Chronicles",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baba Vanga Chronicles",
    description:
      "Curated prophecies and storytelling steeped in the legacy of Baba Vanga.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
