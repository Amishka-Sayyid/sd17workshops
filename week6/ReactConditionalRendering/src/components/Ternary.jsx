import { useState } from "react";

//Another operator we can use to conditionally render the message is a ternary operator.
export default function Ternary() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible ? <p>Hello World</p> : null}
    </div>
  );
}
