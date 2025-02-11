// loading.jsx
"use client";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function Loading() {
  return (
    <div className="flex h-screen w-full justify-center pt-20">
      <PacmanLoader loading={true} color="#ffffff" />
      <h1 className="text-sky-400">Be patient! Content is coming soon...</h1>
    </div>
  );
}
