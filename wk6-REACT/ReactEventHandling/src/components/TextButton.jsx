//Passing event handler functions
import { useState } from "react";

export default function TextButton() {
  const [text, setText] = useState("Click me");

  function handleClick() {
    setText("How are you?");
    console.log("Button clicked,new text displayed!");
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>{text}</button>
      </div>
    </>
  );
}
