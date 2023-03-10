import React, { useContext } from "react";
import { themeContext } from "../context/ThemeContext";

const useTheme = () => {
  const theme = useContext(themeContext);

  return theme;
};

export default useTheme;
