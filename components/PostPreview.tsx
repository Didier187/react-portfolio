import { readFile } from "fs/promises";
import matter from "gray-matter";
import Link from "next/link";
 
export async function PostPreview({ slug }) {
  const fileContent = await readFile(`./public/posts/${slug}.md`, "utf8");
  const { data, content } = matter(fileContent);
  const wordCount = content.split(" ").filter(Boolean).length;

  return (
    <section className="rounded-md bg-black/5 p-2">
      <h5 className="font-bold">
        <Link href={"blog/" + slug} >
          {data.title}
        </Link>
      </h5>
      <i>{wordCount} words</i>
    </section>
  );
}