import { supabase } from "./supabaseClient";
import { getMetadata } from "./getMetadata";
import { Frontmatter } from "@/types/mdx-post";

export async function getAllPostSummaries() {
  const [learningLogSummaries, commitLogSummaries] = await Promise.all([
    getPostSummaries({ page: "learning-logs" }),
    getPostSummaries({ page: "commit-logs" }),
  ]);

  const allPostSummaries = [
    ...learningLogSummaries.map((summary) => ({
      ...summary,
      page: "learning-logs",
    })),
    ...commitLogSummaries.map((summary) => ({
      ...summary,
      page: "commit-logs",
    })),
  ];

  const sortedAllPostSummaries = allPostSummaries.sort(
    (a, b) =>
      new Date(b.frontmatter.created_at).getTime() -
      new Date(a.frontmatter.created_at).getTime()
  );

  return sortedAllPostSummaries;
}

export async function getPostSummaries({ page }: { page: string }) {
  const { data: fileList, error } = await supabase.storage
    .from("posts")
    .list(`${page}/md`);

  if (error) {
    console.error("Error occurred while loading the file list:", error.message);
    return [];
  }

  const postSummaries = [];

  for (const file of fileList) {
    const { data, error } = await supabase.storage
      .from("posts")
      .download(`${page}/md/${file.name}`);

    if (error) {
      console.error(`Error downloading file ${file.name}:`, error.message);
      continue;
    }

    const text = await data.text();
    const preview = text
      .replace(/---[\s\S]*?---/, "")
      .replace(/^#\s+.*$/gm, "")
      .replace(/`/g, "")
      .replace(/!\[\[.*?\.png(\|\d+)?\]\]/g, "")
      .replace(/#+/g, "")
      .trim()
      .slice(0, 700);

    const fileNameWithoutExtension = file.name.replace(/\.(md|mdx)$/, "");

    const { frontmatter }: { frontmatter: Frontmatter } = await getMetadata({
      source: text,
    });

    postSummaries.push({
      frontmatter,
      preview: preview,
      fileNameWithoutExtension: fileNameWithoutExtension,
    });
  }

  return postSummaries;
}
