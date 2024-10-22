import { getPosts } from "@/lib/getPosts";
import { MDXPost } from "@/types/mdx-post";
import { DateFilterNav } from "../components/date-filter-nav";
import PostList from "../components/post-list";

export default async function CommitLogs() {
  const posts: MDXPost[] = await getPosts({ page: "commit-logs" });
  const postDates = posts.map((post) => post.frontmatter.created_at);

  return (
    <div className="flex h-full">
      <DateFilterNav postDates={postDates} />
      <div className="prose flex overflow-y-auto">
        <PostList posts={posts} />
      </div>
    </div>
  );
}
