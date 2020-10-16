import React, { createContext, useState } from 'react';
import useDarkMode from 'hooks/useDarkMode';

export const ThemeContext = createContext('light');

export default ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const [scrollPosition, setScrollPosition] = useState(0);

  let scrolling = false;

  document.addEventListener(
    'scroll',
    () => {
      scrolling = true;
    },
    { passive: true }
  );

  setInterval(() => {
    if (scrolling) {
      scrolling = false;
      setScrollPosition(window.scrollY);
    }
  }, 500);

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
