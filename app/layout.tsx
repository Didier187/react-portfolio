import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Social from "../components/Social";
import Avatar from "../components/Avatar";
import Tabs from "../components/Tabs";
import HeaderFrame from "../components/HeaderFrame";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.didier.one'),
  alternates: {
    canonical: 'didier.one',
    languages: {
      'en-US': '/en-US',
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
  ],
  authors: [{ name: "Didier Hategekimana" }],
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
        <main className="container">
          <div className="header-section">
            <HeaderFrame name="Didier H." role="Software developer in Sydney" />
            <div className="gradient-box">
              <Avatar />
            </div>
          </div>
          <Tabs />
          <div className="tab-content">{children}</div>
        </main>
        <footer>
          <Social />
        </footer>
      </body>
    </html>
  );
}
