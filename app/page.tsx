import { PostSummary } from "@/types/mdx-post";
import { SearchBar } from "./components/search-bar";
import { getAllPostSummaries } from "@/lib/getPostSummaries";
import FilteredPostList from "./components/filtered-post-list";
import { Suspense } from "react";

export default async function Home() {
  const allPostSummaries: PostSummary[] = await getAllPostSummaries();

  return (
    <>
      <SearchBar />
      <Suspense
        fallback={
          <div className="flex justify-center text-xl">Loading ...</div>
        }>
        <FilteredPostList initialPostSummaries={allPostSummaries} />
      </Suspense>
    </>
  );
}
