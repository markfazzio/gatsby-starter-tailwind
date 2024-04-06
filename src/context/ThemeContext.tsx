import React, { useState, useEffect } from "react";

export type ThemeType = "dark" | "light";

export type ThemeContextType = {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};

export const ThemeContext = React.createContext({});

const ThemeContextProvider: React.FC<{ children: any }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>("dark");

  useEffect(() => {
    const theme = (localStorage.getItem("theme") || "dark") as ThemeType;
    setTheme(theme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
