import { CompileMDXResult } from "next-mdx-remote/rsc";

export type Frontmatter = {
  title: string;
  created_at: string;
  updated_at: string;
  tags: string[];
};

export type MDXPost = CompileMDXResult<Frontmatter>;

export type Post = MDXPost & {
  preview: string;
  fileNameWithoutExtension: string;
};
