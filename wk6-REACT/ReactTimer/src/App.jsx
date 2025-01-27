import "./App.css";
import { TimerDirty } from "./components/TimerDirty";
import { TimerClean } from "./components/TimerClean";
import { useTimer } from "./components/useTimer";
import { Timer } from "./components/Timer";
export default function App() {
  const count = useTimer();
  return (
    <>
      <h1>useEffect & Timers</h1>

      <h2>Using useEffect on component mount</h2>
      <TimerDirty />
      <h2>Using useEffect to clean up timers</h2>
      <TimerClean />

      <h2>using Custom Timer Hook</h2>
      <h4>Timer saved in app file</h4>
      <div>Count: {count}</div>

      {/* above process but saved in another file timer.jsx */}
      <h3>timer saved in timer file</h3>
      <Timer />
    </>
  );
}
