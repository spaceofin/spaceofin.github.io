"use client";

import { PostSummary } from "@/types/mdx-post";
import { usePostContext } from "../contexts/PostContext";
import { PostCard } from "./post-card";
import dayjs from "dayjs";

export default function PostList({
  postSummaries,
}: {
  postSummaries: PostSummary[];
}) {
  const { selectedDate } = usePostContext();

  const filteredPosts = selectedDate
    ? postSummaries.filter((postSummary) => {
        const postDate = dayjs(postSummary.frontmatter.created_at).format(
          "YY-MM"
        );
        return postDate === selectedDate;
      })
    : postSummaries;

  return (
    <div className="flex flex-col pr-10 overflow-y-auto gap-5">
      {filteredPosts.map((post) => (
        <PostCard key={post.frontmatter.title} {...post} />
      ))}
    </div>
  );
}
