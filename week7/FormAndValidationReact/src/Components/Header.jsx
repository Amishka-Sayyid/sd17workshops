import { useState } from "react";
import "./Header.css";

//here i wish to use conditional rendering for revison purpose

export default function Header() {
  const [invisible, visible] = useState(false);

  function handleVisibility() {
    visible(!invisible);
  }

  return (
    <>
      <div className="Header">
        <button onClick={handleVisibility}> Menu </button>

        {/* using tenary operator */}
        {invisible ? (
          <div className="Menu">
            <a href="">Home</a>
            <a href="">Form</a>
            <a href="">Form Data</a>
          </div>
        ) : null}
      </div>
    </>
  );
}
