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
      <nav>
        <div className="Header">
          <button onClick={handleVisibility}>
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* using tenary operator */}
          {invisible ? (
            <div className="Menu">
              <a href="">Home</a>
              <a href="">Form</a>
              <a href="">Form Data</a>
            </div>
          ) : null}
        </div>

        <h1>MySpecialPractice</h1>
        <div className="headerpart3">
          <button>register</button>
          <button>log In</button>
        </div>
      </nav>
    </>
  );
}
