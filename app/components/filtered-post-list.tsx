"use client";

import { PostSummary } from "@/types/mdx-post";
import PostList from "./post-list";

export default function FilteredPostList({
  initialPostSummaries,
}: {
  initialPostSummaries: PostSummary[];
}) {
  return (
    <div className="flex jusitfy-center w-full px-4 md:px-7">
      <PostList
        postSummaries={initialPostSummaries}
        tagsClassName="bg-sky-600"
      />
    </div>
  );
}
