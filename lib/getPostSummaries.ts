import { supabase } from "./supabaseClient";
import { getMetadata } from "./getMetadata";
import { Frontmatter } from "@/types/mdx-post";

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
      .trim()
      .slice(0, 300);

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
