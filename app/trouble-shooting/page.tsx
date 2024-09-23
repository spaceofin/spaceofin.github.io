import { getPosts } from "@/lib/getPosts";
import { MDXPost } from "@/types/mdx-post";

export default async function TroubleShooting() {
  const posts: MDXPost[] = await getPosts();

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
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
  );
}
