import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="font-mono mx-16">
      <ul className="relative min-h-32 m-14 mb-10 flex flex-col md:flex-row md:space-x-12 space-y-1 justify-center md:justify-start items-center text-2xl md:text-3xl z-0 tracking-tight text-zinc-900">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/learning-logs">Learning Logs</Link>
        </li>
        <li>
          <Link href="/commit-logs">Commit logs</Link>
        </li>
      </ul>
    </nav>
  );
}
