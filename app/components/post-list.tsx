"use client";

import { MDXPost } from "@/types/mdx-post";
import { useState } from "react";
import { usePostContext } from "../contexts/PostContext";
import dayjs from "dayjs";

export default function PostList({ posts }: { posts: MDXPost[] }) {
  const { selectedDate } = usePostContext();

  const filteredPosts = selectedDate
    ? posts.filter((post) => {
        const postDate = dayjs(post.frontmatter.date).format("YY-MM");
        return postDate === selectedDate;
      })
    : posts;

  return (
    <div className="flex h-full">
      <div className="flex-col overflow-y-auto">
        {filteredPosts.map((post, index) => (
          <div key={index} className="flex-grow mr-4">
            <div>{post.frontmatter.title}</div>
            <div>{post.frontmatter.date}</div>
            <div>{post.frontmatter.description}</div>
            <br />
            <div>{post.content}</div>
            <br />
            <br />
            <hr className=" border-blue-800" />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
