import { PostSummary } from "@/types/mdx-post";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function PostCard({
  frontmatter,
  preview,
  fileNameWithoutExtension,
}: PostSummary) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Link
      href={`${pathname}/${fileNameWithoutExtension}`}
      className="flex flex-col w-full min-w-96 px-10 py-5  rounded-lg bg-white bg-opacity-50 no-underline">
      <h3 className="text-lg font-normal my-2 mb-0">{frontmatter.title}</h3>
      <p className="flex justify-end">{frontmatter.created_at}</p>
      <div className="line-clamp-2">{preview}</div>
      <div className="flex flex-wrap my-2">
        {frontmatter.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-600 bg-opacity-80 text-white rounded-xl pb-1 px-3 mr-2 my-1 whitespace-nowrap">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
