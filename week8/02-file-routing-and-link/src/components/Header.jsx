import Link from "next/link";
import "./Header.css";
export default function Header() {
  return (
    <>
      <div className="Header">
        <h1>File System Routing and Link</h1>
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
            <Link href={"/courses"}>Software Development Course</Link>
          </button>
          <button>
            <Link href={"/users/:id"}>users</Link>
          </button>
          <button>
            <Link href={"/users/:id/:commentId"}>comment</Link>
          </button>
        </nav>
      </div>
    </>
  );
}
