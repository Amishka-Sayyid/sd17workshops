import Link from "next/link";
import headerStyles from "../app/header.module.css";
export default function Header() {
  return (
    <>
      <header className={headerStyles.header}>
        <h1> Styling in Next.js</h1>
        <nav>
          <button>
            <Link href={"/"} className={headerStyles.navLink}>
              Home
            </Link>
          </button>
          <button>
            <Link href={"/birds"} className={headerStyles.navLink}>
              Birds
            </Link>
          </button>
        </nav>
      </header>
    </>
  );
}
