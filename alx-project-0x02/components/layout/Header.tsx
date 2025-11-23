import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex gap-6">
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Posts</Link>
    </nav>
  );
}
