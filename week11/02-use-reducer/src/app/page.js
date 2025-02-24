"use client";
import { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="bg-orange-200 hover:bg-orange-300 p-2 rounded-lg"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        className="bg-lime-200 hover:bg-lime-300 p-2 rounded-lg"
      >
        Decrement
      </button>
    </div>
  );
}
