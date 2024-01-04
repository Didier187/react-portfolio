"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Tabs() {
  const pathname = usePathname();
  return (
    <section className="tabs-section">
      <div className="tabs">
        <Link
          href="/"
          className={`tab ${pathname === "/" ? "active-tab" : ""}`}
        >
          Short
        </Link>
        <Link href="/about" className={`tab ${pathname === "/about" ? "active-tab" : ""}`}>
          About
        </Link>
        <Link href="/contact" className={`tab ${pathname === "/contact" ? "active-tab" : ""}`}>
          Contact
        </Link>
      </div>
    </section>
  );
}
