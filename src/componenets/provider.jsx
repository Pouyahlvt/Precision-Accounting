"use client";

import { ThemeProvider } from "../context/themeContext";

const Providers = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
