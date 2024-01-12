import Link from "next/link";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="blog-layout-header">
        <span>
          <Link href="/blog">A Blog</Link>
        </span>
        <span>
          by <Link href="/">Didier H.</Link>
        </span>
      </div>
    
      {children}
    </div>
  );
}
