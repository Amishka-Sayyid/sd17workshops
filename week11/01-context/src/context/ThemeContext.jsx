//Objective: to set up a light and dark theme for our app

"use client";

import { createContext, useContext } from "react";
import { useState } from "react";

const ThemeContext = createContext("light");

export function ThemeProvider({ children }) {
  //we are going to declare the theme state
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
