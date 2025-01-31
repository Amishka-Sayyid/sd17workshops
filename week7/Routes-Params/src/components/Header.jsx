import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav>
        <div className="Header">
          <button>
            <Link to={"/"}>Home</Link>
          </button>
        </div>
        <h3>Workshop</h3>
        <div>
          <button>register</button>
          <button>log In</button>
        </div>
      </nav>
    </>
  );
}
