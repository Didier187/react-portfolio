"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Section from "./Section";

export default function Tabs() {
  const pathname = usePathname();
  return (
    <Section className="tab-content">
      <div className="tabs">
        <Link
          href="/"
          className={`tab ${pathname === "/" ? "active-tab" : ""}`}
        >
          Short
        </Link>
        <Link
          href="/about"
          className={`tab ${pathname === "/about" ? "active-tab" : ""}`}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`tab ${pathname === "/contact" ? "active-tab" : ""}`}
        >
          Contact
        </Link>
      </div>
    </Section>
  );
}
