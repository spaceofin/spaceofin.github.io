import { getPosts } from "@/lib/getPosts";
import { MDXPost } from "@/types/mdx-post";
import { DateFilterNav } from "../components/date-filter-nav";

export default async function TroubleShooting() {
  const posts: MDXPost[] = await getPosts();
  const postDates = posts.map((post) => post.frontmatter.date);

  return (
    <div className="flex h-full">
      <DateFilterNav postDates={postDates} />
      <div className="flex-col overflow-y-auto">
        {posts.map((post, index) => (
          <div key={index} className="flex-grow">
            <div>{post.frontmatter.title}</div>
            <div>{post.frontmatter.date}</div>
            <div>{post.frontmatter.description}</div>
            <br />
            <div>{post.content}</div>
            <br />
            <br />
            <hr />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
