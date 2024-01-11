import { readdir } from "fs/promises";
import { PostPreview } from "./PostPreview";

export async function PostList() {
  const entries = await readdir("./public/posts", { withFileTypes: true });
 
  return (
    <div>
      {entries.map((dir) => (
        <PostPreview key={dir.name} slug={dir.name.split(".")[0]} />
      ))}
    </div>
  );
}
