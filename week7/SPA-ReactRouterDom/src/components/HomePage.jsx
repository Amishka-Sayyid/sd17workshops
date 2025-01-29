import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h2>welcome to my website!</h2>
      <Link to="/about">About</Link>
    </div>
  );
}
