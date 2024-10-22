export function replaceImageTexts({
  text,
  imageUrls,
}: {
  text: string;
  imageUrls: string[];
}): string {
  let imageIndex = 0;

  return text.replace(/!\[\[.*?\.png\]\]/g, () => {
    const replacement = `![](${imageUrls[imageIndex]})` || "";
    imageIndex += 1;
    return replacement;
  });
}
