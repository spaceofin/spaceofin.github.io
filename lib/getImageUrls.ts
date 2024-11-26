import { supabase } from "./supabaseClient";

export async function getImageUrls({
  page,
}: {
  page?: string;
}): Promise<{ [key: string]: string }> {
  const { data: imageFileList, error } = await supabase.storage
    .from("posts")
    .list(`${page}/images`);

  if (error) {
    console.error("Error occurred while loading the file list:", error.message);
    return {};
  }

  const imageFileUrls: { [key: string]: string } = {};

  for (const imageFile of imageFileList) {
    // console.log(imageFile);
    const { data } = supabase.storage
      .from("posts")
      .getPublicUrl(`${page}/images/${imageFile.name}`);
    if (error) {
      console.error(error);
      return {};
    }
    imageFileUrls[imageFile.name] = data.publicUrl;
  }

  return imageFileUrls;
}
