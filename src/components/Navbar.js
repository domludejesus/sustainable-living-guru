import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-6 bg-green-700 text-white flex justify-around">
      <Link href="/">
        <div className="cursor-pointer hover:underline">Home</div>
      </Link>
      <Link href="/products">
        <div className="cursor-pointer hover:underline">Products</div>
      </Link>
      <Link href="/tips">
        <div className="cursor-pointer hover:underline">Tips</div>
      </Link>
      <Link href="/community">
        <div className="cursor-pointer hover:underline">Community</div>
      </Link>
    </nav>
  );
}
