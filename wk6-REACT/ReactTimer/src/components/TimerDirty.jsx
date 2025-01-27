import { useState, useEffect } from "react";

export function TimerDirty() {
  console.log("TimerDirty component render");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("TimerDirty component useEffect callback");
    setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);
  }, []);

  return <div>Count: {count}</div>;
}

//counter increments by 2 each second, instead of 1.

// This is because the setInterval function is not aware of the React component lifecycle. When the component is re-rendered (which by default will happen twice in development), the setInterval function is called again, creating a new interval timer. The old interval timer is still running, so we end up with two timers running at the same time.
