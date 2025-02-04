import { useState } from "react";

// Render a button on the page to toggle the visibility of a message. First, we will use the AND operator (&&) to conditionally render the message.

export default function Button() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && <p>Hello World</p>}
    </div>
  );
}
