import { getPostSummaries } from "@/lib/getPostSummaries";
import { PostSummary } from "@/types/mdx-post";
import { DateFilterNav } from "../components/date-filter-nav";
import PostList from "../components/post-list";

export default async function CommitLogs() {
  const postSummaries: PostSummary[] = await getPostSummaries({
    page: "commit-logs",
  });
  const postDates = postSummaries.map(
    (postSummary) => postSummary.frontmatter.created_at
  );

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center h-full px-6 sm:px-0 sm:mr-5">
      <div className="flex w-full sm:max-w-[140px] flex-row sm:flex-col overflow-x-auto sm:overflow-x-visible mb-6 sm:mb-0 pb-2 sm:pb-0 pl-2 sm:pl-0">
        <DateFilterNav
          postDates={postDates}
          className="bg-sky-700 border-cyan-950"
        />
      </div>
      <div className="flex overflow-y-auto w-full">
        <PostList postSummaries={postSummaries} />
      </div>
    </div>
  );
}
