import { getPostSummaries } from "@/lib/getPostSummaries";
import { PostSummary } from "@/types/mdx-post";
import { DateFilterNav } from "../components/date-filter-nav";
import PostList from "../components/post-list";

export default async function LearningLogs() {
  const postSummaries: PostSummary[] = await getPostSummaries({
    page: "learning-logs",
  });
  const postDates = postSummaries.map(
    (postSummary) => postSummary.frontmatter.created_at
  );

  return (
    <div className="flex h-full mr-5">
      <DateFilterNav
        postDates={postDates}
        className="bg-teal-700 border-teal-950"
      />
      <div className="flex overflow-y-auto">
        <PostList
          postSummaries={postSummaries}
          tagsClassName="bg-emerald-500"
        />
      </div>
    </div>
  );
}
