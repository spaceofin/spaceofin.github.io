import { PostSummary } from "@/types/mdx-post";
import { SearchBar } from "./components/search-bar";
import { getAllPostSummaries } from "@/lib/getPostSummaries";
import FilteredPostList from "./components/filtered-post-list";

export default async function Home() {
  const allPostSummaries: PostSummary[] = await getAllPostSummaries();

  return (
    <>
      <SearchBar />
      <FilteredPostList initialPostSummaries={allPostSummaries} />
    </>
  );
}
