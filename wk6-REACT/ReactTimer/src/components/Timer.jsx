//Create a new component called Timer.jsx and use the useTimer hook to create a timer:

import { useTimer } from "./useTimer";

export function Timer() {
  const count = useTimer();

  return <div>Count: {count}</div>;
}
