import React, { createContext, useState } from "react";
import useDarkMode from "hooks/useDarkMode";

export const ThemeContext = createContext('light');

export default ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const [scrollPosition, setScrollPosition] = useState(0)

  document.addEventListener('scroll', () => {
    setScrollPosition(window.scrollY)
  })

  return (
    <ThemeContext.Provider
      value={{
        theme,
        scrollPosition,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
