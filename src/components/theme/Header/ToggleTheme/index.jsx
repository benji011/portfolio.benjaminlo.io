import React, { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import sunIcon from "assets/icons/sun.svg";
import moonIcon from "assets/icons/moon.svg";
import { Wrapper } from "./styles";

const ToggleTheme = () => {
  const { theme, scrollPosition, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper type="button" onClick={toggleTheme} scrolled={scrollPosition}>
      <img className="inverted-icon" src={theme === "light" ? moonIcon : sunIcon} alt={theme} />
    </Wrapper>
  );
};

export default ToggleTheme;
