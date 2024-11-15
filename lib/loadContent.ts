import { supabase } from "./supabaseClient";
import { getImageUrls } from "./getImageUrls";
import { getMetadata } from "./getMetadata";
import { replaceImageTexts } from "./replaceImageTexts";

export async function loadContent({
  page,
  slug,
}: {
  page: string;
  slug: string;
}) {
  const fileName = `${slug}.md`;

  const { data, error } = await supabase.storage
    .from("posts")
    .download(`${page}/md/${fileName}`);

  if (error) {
    console.error(`Error downloading file ${fileName}:`, error.message);
    return;
  }

  const text = await data.text();

  const imageUrls = await getImageUrls({
    page: page,
  });

  const result =
    imageUrls.length > 0 ? replaceImageTexts({ text, imageUrls }) : text;

  const parsedResult = await getMetadata({ source: result });

  return parsedResult.content;
}
