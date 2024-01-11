import { readFile, readdir } from "fs/promises";
import matter from "gray-matter";

export const generateStaticParams = async () => {
  const entries = await readdir("./public/posts", { withFileTypes: true });

  return entries.map((post) => ({
    slug: post.name.split(".")[0].toString(),
  }));
};

export default async function page({ params }) {
  const fileContent = await readFile(
    `./public/posts/${params.slug}.md`,
    "utf8"
  );
  const { data, content } = matter(fileContent);

  return (
    <div>
      <h1>This is a blog post</h1>
      {data.title}
      <br />
      {content}
    </div>
  );
}
