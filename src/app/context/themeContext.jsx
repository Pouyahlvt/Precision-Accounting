"use client";

import { useContext, createContext, useEffect} from "react";
import useLocalStorage from "../Hooks/localStorageHook";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// HooksFor this theme context :)
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
