export function replaceImageTexts({
  text,
  imageUrlsObj,
}: {
  text: string;
  imageUrlsObj: { [key: string]: string };
}): string {
  return text.replace(/!\[\[(.*?\.png)(\|\d+)?\]\]/g, (match, p1) => {
    const replacement = imageUrlsObj[p1]
      ? `![](${imageUrlsObj[p1]})`
      : "[not found image]";

    return replacement;
  });
}
