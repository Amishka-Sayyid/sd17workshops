import Link from "next/link";
import "./Header.css";
export default function Header() {
  return (
    <>
      <div className="Header">
        <h1>Next.js Data Fetching</h1>
        <nav>
          <button>
            <Link href={"/"}>Home</Link>
          </button>
          <button>
            <Link href={"/about"}>About</Link>
          </button>
          <button>
            <Link href={"/contact"}>Contact</Link>
          </button>
          <button>
            <Link href={"/posts"}>Posts</Link>
          </button>
          <button>
            <Link href={"/postlist"}>Post list</Link>
          </button>
        </nav>
      </div>
    </>
  );
}
