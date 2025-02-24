"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  function handleClick() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <>
      <h1 className={theme}>Test the theme!</h1>
      <button
        onClick={handleClick}
        className="border-sky-400 border-4 hover:bg-amber-300 cursor-pointer"
      >
        Change the theme
      </button>
    </>
  );
}
