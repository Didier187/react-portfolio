import { readFile, readdir } from "fs/promises";
import matter from "gray-matter";
import { GetStaticPaths } from "next";

type Post = {
  data: {
    title: string;
  };
  content: string;
};

const getStaticPaths = (async () => {
  const entries = await readdir("./public/posts", { withFileTypes: true });

  return {
    paths: entries.map((dir) => ({
      params: { slug: dir.name.split(".")[0].toString() },
    })),
    fallback: true,
  };
}) satisfies GetStaticPaths;


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
