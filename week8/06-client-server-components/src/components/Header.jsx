import Link from "next/link";
import "./Header.css";
export default function Header() {
  return (
    <>
      <div className="Header">
        <h1>Client vs Server Components</h1>
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
            <Link href={"/main"}>main page</Link>
          </button>
        </nav>
      </div>
    </>
  );
}
