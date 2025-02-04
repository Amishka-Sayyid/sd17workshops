// Create a react app that has a state variable that increases on the click of a button

import { useState } from "react";

export default function Button() {
  const [counter, setCounter] = useState(0);

  function HandleClick() {
    setCounter(counter + 1);
  }

  //Add an event listener that resets the number to 0 when you click the number itself
  function HandleReset() {
    setCounter(counter * 0);
  }

  return (
    <>
      <p>count is {counter}</p>
      <button onClick={HandleClick}>Click Here to increase</button>
      <button onClick={HandleReset}>click here to reset</button>
    </>
  );
}
