import { PostSummary } from "@/types/mdx-post";
import { SearchBar } from "./components/search-bar";
import { getAllPostSummaries } from "@/lib/getPostSummaries";
import PostList from "./components/post-list";

export default async function Home() {
  const allPostSummaries: PostSummary[] = await getAllPostSummaries();

  return (
    <>
      <SearchBar />
      <div className="flex jusitfy-center w-full px-4 md:px-7">
        <PostList postSummaries={allPostSummaries} tagsClassName="bg-sky-600" />
      </div>
    </>
  );
}
