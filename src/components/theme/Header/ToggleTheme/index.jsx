import React, { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import sunIcon from "assets/icons/sun.svg";
import sunIcon-inverted from "assets/icons/sun-inverted.svg";
import moonIcon from "assets/icons/moon.svg";
import { Wrapper } from "./styles";

const ToggleTheme = () => {
  const { theme, scrollPosition, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper type="button" onClick={toggleTheme}>
      <img
        className="inverted-icon"
        src={theme === "light" ? moonIcon : scrollPosition > 300 ? sunIcon-inverted : sunIcon}
        alt={theme}
      />
    </Wrapper>
  );
};

export default ToggleTheme;
