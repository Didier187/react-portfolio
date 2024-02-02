import ContactMe from "../../components/ContactMe";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Didier H.",
  description:
    "Contact Didier | Interested in my skills or just want to say hi? Feel free to contact me!",
  authors: [{ name: "Didier Hategekimana", url:"https://www.linkedin.com/in/didier-h-66953a211/"}]
};

export default function page() {
  return <ContactMe />;
}
