import { readFile } from "fs/promises";
import matter from "gray-matter";
import Link from "next/link";
import { formatDate } from "../app/utils";

export async function PostPreview({ slug }) {
  const fileContent = await readFile(`./public/posts/${slug}.mdx`, "utf8");
  const { data, content } = matter(fileContent);
  const wordCount = content.split(" ").filter(Boolean).length;
  const { title, date, description, tags } = data;
  return (
    <div className="blog-card">
      <h2>
        <Link href={"blog/" + slug}>{title}</Link>
      </h2>
      <p>{description}</p>
      <div className="blog-card-footer">
        <i className="date">{formatDate(date)}</i>
        <i>{wordCount} words</i>
      </div>
      <div className="tags">
        {tags.map((tag) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
