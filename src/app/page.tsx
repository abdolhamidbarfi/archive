import Link from "next/link";

export default function Home() {
  return (
    <>
      <ul>
        <li>1. <Link className="hover:text-blue-800" href="/design-patterns">Design Patterns</Link></li>
        <li>2. <Link className="hover:text-blue-800" href="/hooks">Hooks</Link></li>
        <li>2. <Link className="hover:text-blue-800" href="/components">Components</Link></li>
      </ul>
    </>
  );
}
0
