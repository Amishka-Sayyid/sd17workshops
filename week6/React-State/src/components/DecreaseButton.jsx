//Try adding a button that decreases the number on click
import { useState } from "react";

export default function DecreaseButton() {
  const [counter, setCounter] = useState(100);

  function HandleDecrease() {
    setCounter(counter - 1);
  }
  return (
    <>
      <p>count is {counter}</p>
      <button onClick={HandleDecrease}>Click Here! to Reduce count</button>
    </>
  );
}
