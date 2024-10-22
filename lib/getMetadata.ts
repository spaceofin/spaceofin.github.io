import { compileMDX, CompileMDXResult } from "next-mdx-remote/rsc";
import { Frontmatter } from "@/types/mdx-post";

export async function getMetadata({
  source,
}: {
  source: string;
}): Promise<CompileMDXResult<Frontmatter>> {
  return await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
    },
  });
}
