import React from "react";
import THEME from "./THEME";
import merge from "../style-functions/mergeObjects";
import AdditionalTheme from "./theme-override";

const ThemeContext = React.createContext(THEME);

const CustomThemeProvider = ({ theme, children }) => {
  const customTheme = merge(THEME, AdditionalTheme);

  return (
    <ThemeContext.Provider value={customTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;
