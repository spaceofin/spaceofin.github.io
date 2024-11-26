import { supabase } from "./supabaseClient";
import { getImageUrls } from "./getImageUrls";
import { getMetadata } from "./getMetadata";
import { replaceImageTexts } from "./replaceImageTexts";

export async function getPostTitles({ page }: { page: string }) {
  const { data, error } = await supabase.storage
    .from("posts")
    .list(`${page}/md`);

  if (error) {
    throw new Error(`Error fetching post titles: ${error.message}`);
  }

  const fileList = data?.map((file) => file.name.replace(/\.(md|mdx)$/, ""));

  return fileList;
}

export async function getPosts({ page }: { page: string }) {
  const { data: fileList, error } = await supabase.storage
    .from("posts")
    .list(`${page}/md`);

  if (error) {
    console.error("Error occurred while loading the file list:", error.message);
    return [];
  }

  const posts = [];

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
      .trim()
      .slice(0, 300);

    const fileNameWithoutExtension = file.name.replace(/\.(md|mdx)$/, "");

    const imageUrlsObj = await getImageUrls({
      page: page,
    });

    const result =
      Object.keys(imageUrlsObj).length > 0
        ? replaceImageTexts({ text, imageUrlsObj })
        : text;

    const parsedResult = await getMetadata({ source: result });

    posts.push({
      ...parsedResult,
      preview: preview,
      fileNameWithoutExtension: fileNameWithoutExtension,
    });
  }

  return posts;
}
