import { useState, useEffect } from "react";

export function TimerClean() {
  console.log("TimerClean component render");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("TimerClean component useEffect callback");
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);

    return () => {
      console.log("TimerClean component useEffect cleanup");
      clearInterval(interval);
    };
  }, []);

  return <div>Count: {count}</div>;
}

// the counter increments by 1 each second, as expected.
//useEffect created the interval. We remembered the intervalId in a variable called interval. This allows us to clear it out when the component is unmounted, which always happened before re-rendering the component. Understanding this feature is important for understanding how useEffect works, and how components mount and unmount during development, and during other events like page navigation or state updates (which also cause the component to re-render).
