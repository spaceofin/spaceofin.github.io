import { loadContent } from "@/lib/loadContent";
import { getPostTitles } from "@/lib/getPosts";

export async function generateStaticParams() {
  const titles = await getPostTitles({ page: "commit-logs" });

  return (titles ?? []).map((title) => ({ slug: title }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await loadContent({ page: "commit-logs", slug: params.slug });

  return (
    <div className="flex flex-col prose dark:prose-invert w-full h-full max-h-none overflow-visible px-4">
      {post}
    </div>
  );
}
