import { useState } from "react";
import "./Header.css";
export default function Header() {
  const [invisible, visible] = useState(false);

  function handleVisibility() {
    visible(!invisible);
  }

  return (
    <>
      <div className="Header">
        <button onClick={handleVisibility}>=</button>

        {invisible ? (
          <div className="Menu">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </div>
        ) : null}
      </div>
    </>
  );
}
