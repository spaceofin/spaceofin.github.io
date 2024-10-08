import { getPosts } from "@/lib/getPosts";
import { MDXPost } from "@/types/mdx-post";
import { DateFilterNav } from "../components/date-filter-nav";
import PostList from "../components/post-list";

export default async function TroubleShooting() {
  const posts: MDXPost[] = await getPosts();
  const postDates = posts.map((post) => post.frontmatter.date);

  return (
    <div className="flex h-full w-full">
      <DateFilterNav postDates={postDates} />
      <div className="prose max-w-full">
        <PostList posts={posts} />
      </div>
    </div>
  );
}
