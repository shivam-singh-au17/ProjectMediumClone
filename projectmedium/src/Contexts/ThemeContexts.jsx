import React, { createContext, useState } from "react";

export const ThemeContexts = createContext({
  theme: "",
  handleChangeTheme: () => {},
});


export default function Theme({ children }) {
  const [theme, setTheme] = useState("#c4e2ff");

  const handleChangeTheme = (e) => {
    let theme = "#c4e2ff";
    if (e === 1) {
      theme = "#c4e2ff";
    } else if (e === 2 || e === 5 || e === 6) {
      theme = "#FFFFFF";
    } else if (e === 3) {
      theme = "#4479FF";
    } else if (e === 4) {
      theme = "#F24D2E";
    } 
    setTheme(theme);
  };
  return (
    <ThemeContexts.Provider value={{ theme: theme, handleChangeTheme }}>
      {children}
    </ThemeContexts.Provider>
  );
}
