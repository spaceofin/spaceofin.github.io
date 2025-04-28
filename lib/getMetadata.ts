import { compileMDX, CompileMDXResult } from "next-mdx-remote/rsc";
import { Frontmatter } from "@/types/mdx-post";
import { getMDXComponents } from "@/mdx-components";
import remarkBreaks from "remark-breaks";

export async function getMetadata({
  source,
}: {
  source: string;
}): Promise<CompileMDXResult<Frontmatter>> {
  return await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkBreaks],
      },
    },
    components: getMDXComponents({}),
  });
}
