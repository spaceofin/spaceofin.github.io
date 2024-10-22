"use client";

import { MDXPost } from "@/types/mdx-post";
import { useState } from "react";
import { usePostContext } from "../contexts/PostContext";
import dayjs from "dayjs";

export default function PostList({ posts }: { posts: MDXPost[] }) {
  const { selectedDate } = usePostContext();

  const filteredPosts = selectedDate
    ? posts.filter((post) => {
        const postDate = dayjs(post.frontmatter.created_at).format("YY-MM");
        return postDate === selectedDate;
      })
    : posts;

  return (
    <div className="flex-col overflow-y-auto">
      {filteredPosts.map((post, index) => (
        <div key={index} className="flex-grow mr-4">
          <div>{post.content}</div>
          <hr className=" border-blue-800" />
        </div>
      ))}
    </div>
  );
}
