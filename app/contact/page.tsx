import ContactMe from "../../components/ContactMe";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Didier H.",
  description:
    "Contact Didier | Interested in my skills or just want to say hi? Feel free to contact me!",
};

export default function page() {
  return <ContactMe />;
}
