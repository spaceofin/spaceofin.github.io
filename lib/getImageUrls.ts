import { supabase } from "./supabaseClient";

export async function getImageUrls({
  post: postTitle,
  page,
}: {
  post: string;
  page?: string;
}): Promise<string[]> {
  const { data: imageFileList, error } = await supabase.storage
    .from("posts")
    .list(`${page}/images/${postTitle}`);

  if (error) {
    console.error("Error occurred while loading the file list:", error.message);
    return [];
  }

  const imageFileUrls = [];

  for (const imageFile of imageFileList) {
    // console.log(imageFile);
    const { data } = supabase.storage
      .from("posts")
      .getPublicUrl(`${page}/images/${postTitle}/${imageFile.name}`);
    if (error) {
      console.error(error);
      return [];
    }
    imageFileUrls.push(data.publicUrl);
  }

  // console.log(imageFileUrls);
  return imageFileUrls;
}
