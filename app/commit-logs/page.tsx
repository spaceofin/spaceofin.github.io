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
    <div className="flex h-full">
      <DateFilterNav postDates={postDates} />
      <div className="prose flex overflow-y-auto">
        <PostList postSummaries={postSummaries} />
      </div>
    </div>
  );
}
