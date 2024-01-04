import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Social from "../components/Social";
import Avatar from "../components/Avatar";
import Tabs from "../components/Tabs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
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
            <div className="header-frame">
              <h1>Didier H.</h1>
              <h2>Software Engineer in Sydney</h2>
            </div>
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