"use client";

import ThemeButton from "@/components/ThemeButton";

import { useTheme } from "@/context/ThemeContext";

export default function HomePage() {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <h1>Home page</h1>
      <ThemeButton />
    </div>
  );
}
