import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="font-mono mx-16">
      <ul className="relative w-screen min-h-32 m-10 ml-14 flex flex-col lg:flex-row lg:space-x-12 space-y-1 justify-start items-center text-2xl lg:text-3xl z-0 tracking-tight text-zinc-900">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/learning-logs">Learning Logs</Link>
        </li>
        <li>
          <Link href="/trouble-shooting">Trouble Shooting</Link>
        </li>
      </ul>
    </nav>
  );
}
