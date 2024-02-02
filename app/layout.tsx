import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Social from "../components/Social";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.didier.one"),
  alternates: {
    canonical: "didier.one",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: "Didier H.",
  description:
    "Didier H. | Personal website, Web developer based in Sydney, Australia 💻🌐",
  applicationName: "Didier H. | Personal Website",
  keywords: [
    "software engineer",
    "web developer",
    "portfolio",
    "sydney",
    "australia",
    "react",
    "nextjs",
    "typescript",
    "javascript",
    "nodejs",
    "graphql",
    "apollo",
    "frontend",
    "backend",
    "didier",
    "hategekimana",
    "didierh",
    "didier.one",
    "didier hategekimana",
  ],
  authors: [
    {
      name: "Didier Hategekimana",
      url: "https://www.linkedin.com/in/didier-h-66953a211/",
    },
  ],
  robots: "index,follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <main className="container">{children}</main>
        <footer>
          <Social />
        </footer>
      </body>
    </html>
  );
}
