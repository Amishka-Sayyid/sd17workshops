import Link from "next/link";
import "./Header.css";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignUpButton,
} from "@clerk/nextjs";

export default function Header() {
  return (
    <>
      <div className="Header">
        <h1>Full Stack User Authentication with Clerk workshop</h1>

        <div className="flex justify-around">
          <nav>
            <button>
              <Link href={"/"}>Home</Link>
            </button>
            <button>
              <Link href={"/user-profile"}>User Profile</Link>
            </button>
          </nav>

          <SignedOut>
            <SignInButton />

            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </>
  );
}
