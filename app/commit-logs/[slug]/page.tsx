import { loadContent } from "@/lib/loadContent";
import { getPostTitles } from "@/lib/getPosts";

export async function generateStaticParams() {
  const slugs = await getPostTitles({ page: "commit-logs" });

  return slugs?.map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await loadContent({ page: "commit-logs", slug: params.slug });

  return (
    <div className="flex flex-col prose dark:prose-invert w-full h-full overflow-y-auto">
      {post}
    </div>
  );
}