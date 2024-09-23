import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { MDXPost } from "@/types/mdx-post";

function loadPosts(filename: string) {
  const post = fs.readFileSync(
    path.join(process.cwd(), "content/trouble-shooting", filename)
  );
  // console.log(filename);
  return post;
}

export async function getPosts(): Promise<MDXPost[]> {
  const files = fs.readdirSync(
    path.join(process.cwd(), "content/trouble-shooting")
  );

  // const source = loadPosts("test1.mdx");
  // const post: MDXPost = await compileMDX({
  //   source,
  //   options: {
  //     parseFrontmatter: true,
  //   },
  // });

  const sources = files.map((file: string) => loadPosts(file));
  const posts: MDXPost[] = await Promise.all(
    sources.map(
      async (source) =>
        await compileMDX({
          source,
          options: {
            parseFrontmatter: true,
          },
        })
    )
  );

  return posts;
}
