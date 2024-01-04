import About from "../../components/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Didier H.",
  description:
    "A software engineer based in Sydney, Australia. I love to build things for the web!",
};

export default function page() {
  return <About />;
}
