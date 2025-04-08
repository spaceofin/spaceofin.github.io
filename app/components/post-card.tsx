import { PostSummary } from "@/types/mdx-post";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function PostCard({
  frontmatter,
  preview,
  fileNameWithoutExtension,
  tagsClassName = "",
  page = "",
}: PostSummary & { tagsClassName?: string; page?: string }) {
  const pathname = usePathname();

  // console.log(pathname);

  const url =
    pathname === "/"
      ? `/${page}/${fileNameWithoutExtension}`
      : `${pathname}/${fileNameWithoutExtension}`;

  return (
    <Link
      href={url}
      className="flex flex-col w-full px-6 sm:px-10 py-5 rounded-lg bg-white bg-opacity-50 no-underline">
      <h3 className="text-lg font-normal my-2 mb-0">{frontmatter.title}</h3>
      <p className="flex justify-end">{frontmatter.created_at}</p>
      <div className="line-clamp-2">{preview}</div>
      <div className="flex flex-wrap my-2">
        {frontmatter.tags.map((tag, index) => (
          <span
            key={index}
            className={`bg-blue-500 bg-opacity-80 text-white rounded-xl pb-1 px-3 mr-2 my-1 whitespace-nowrap ${tagsClassName}`}>
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
