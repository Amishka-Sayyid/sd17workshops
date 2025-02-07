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
            <Link href={"/birds"}>Birds</Link>
          </button>
        </nav>
      </div>
    </>
  );
}
