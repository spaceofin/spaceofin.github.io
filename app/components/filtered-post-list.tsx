"use client";

import { PostSummary } from "@/types/mdx-post";
import PostList from "./post-list";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function FilteredPostList({
  initialPostSummaries,
}: {
  initialPostSummaries: PostSummary[];
}) {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm")?.toLocaleLowerCase() || "";

  const filteredPostList = useMemo(() => {
    if (searchTerm === "") return initialPostSummaries;

    return initialPostSummaries.filter((postSummary) => {
      const splitTags = postSummary.frontmatter.tags.reduce<string[]>(
        (acc, tag) => acc.concat(tag.split("_").map((t) => t.toLowerCase())),
        []
      );
      return (
        postSummary.frontmatter.title.toLowerCase().includes(searchTerm) ||
        splitTags.some((tag) => searchTerm.includes(tag))
      );
    });
  }, [initialPostSummaries, searchTerm]);

  return (
    <div className="flex jusitfy-center w-full px-4 md:px-7">
      <PostList
        postSummaries={searchTerm ? filteredPostList : initialPostSummaries}
        tagsClassName="bg-sky-600"
      />
    </div>
  );
}
