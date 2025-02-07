import Link from "next/link";
import headerStyles from "../app/header.module.css";
export default function Header() {
  return (
    <>
      <header className={headerStyles.header}>
        <h1> Next.js Forms and Server Actions</h1>
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
          <button>
            <Link href={"/new-bird"} className={headerStyles.navLink}>
              add new Bird
            </Link>
          </button>
        </nav>
      </header>
    </>
  );
}
