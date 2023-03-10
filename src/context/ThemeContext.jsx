import { createContext, useContext, useEffect, useState } from "react";

const themes = {
  light: {
    background: "#f6f6f8",
    border: "border-slate-300",
    notes: "bg-white",
    textColor: "text-slate-600",
    theme: "light",
    image: "bg-[url('../public/images/bg-desktop-light.jpg')]",
  },
  dark: {
    background: "#161622",
    border: "border-[#36384d]",
    notes: "bg-[#25273d]",
    textColor: "text-[#c8cae1]",
    theme: "dark",
    image: "bg-[url('../public/images/bg-desktop-dark.jpg')]",
  },
};

export const themeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <themeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
