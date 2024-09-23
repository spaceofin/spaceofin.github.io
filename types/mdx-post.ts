import { ReactElement } from "react";

export type MDXPost = {
  frontmatter: {
    title: string;
    date: string;
    description: string;
    tags: string[];
    category: string;
  };
  content: ReactElement;
};
