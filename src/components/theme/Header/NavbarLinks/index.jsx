import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import ToggleTheme from "components/theme/Header/ToggleTheme";
import { Wrapper } from "./styles";

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink
        className={theme === "light" ? "dark-link" : "light-link"}
        href="#about"
      >
        header:about
      </AnchorLink>
      <AnchorLink
        className={theme === "light" ? "dark-link" : "light-link"}
        href="#projects"
      >
        header:projects
      </AnchorLink>
      <AnchorLink
        className={theme === "light" ? "dark-link" : "light-link"}
        href="#resume"
      >
        header:resume
      </AnchorLink>
      <AnchorLink
        className={theme === "light" ? "dark-link" : "light-link"}
        href="#contact"
      >
        header:contact
      </AnchorLink>
      <ToggleTheme />
    </Wrapper>
  );
};

export default NavbarLinks;
