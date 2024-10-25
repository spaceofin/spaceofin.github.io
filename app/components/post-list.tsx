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
    <div className="flex-col overflow-y-auto">
      {filteredPosts.map((post, index) => (
        // <div key={index} className="flex-grow mr-4">
        //   <div>{post.content}</div>
        //   <hr className=" border-blue-800" />
        // </div>
        <PostCard key={post.frontmatter.title} {...post} />
      ))}
    </div>
  );
}
