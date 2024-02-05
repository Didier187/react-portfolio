import { readFile, readdir } from "fs/promises";
import matter from "gray-matter";
// testing rehype ecosystem
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import Image from 'next/image'

export const generateStaticParams = async () => {
  const entries = await readdir("./public/posts", { withFileTypes: true });

  return entries.map((post) => ({
    slug: post.name.split(".")[0].toString(),
  }));
};

export default async function page({ params }) {
  const fileContent = await readFile(
    `./public/posts/${params.slug}.mdx`,
    "utf8"
  );
  const { data, content } = matter(fileContent);
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // See Options section below.
    })
    .use(rehypeStringify)
    .process(content);
  return (
    <div className="blog">
      <h1>This is a blog post</h1>
     <Image src={`/assets/${params.slug}.png`} alt="Vercel Logo" width={640} height={200} />
      <br />
      <div className="blog-content">
        <div
          dangerouslySetInnerHTML={{
            __html: String(file),
          }}
        />
      </div>
    </div>
  );
}
