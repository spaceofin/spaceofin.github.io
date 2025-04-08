import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="font-mono mx-16">
      <ul className="relative min-h-32 mb-10 mt-20 md:my-14 mx-2 sm:mx-12 lg:m-14 flex flex-col md:flex-row md:space-x-12 lg:space-x-16 space-y-1 md:space-y-0 justify-center md:justify-start items-start sm:items-center md:items-center text-3xl lg:text-4xl z-0 tracking-tight text-zinc-900 pl-4 sm:pl-0">
        <li className="w-">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/learning-logs">Learning Logs</Link>
        </li>
        <li>
          <Link href="/commit-logs">Commit Logs</Link>
        </li>
      </ul>
    </nav>
  );
}
