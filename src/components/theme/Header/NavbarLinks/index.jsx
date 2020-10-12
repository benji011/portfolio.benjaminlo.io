import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import { useTranslation } from "react-i18next";
import ToggleTheme from "components/theme/Header/ToggleTheme";
import ToggleLanguage from "components/theme/Header/ToggleLanguage";
import { Wrapper } from "./styles";

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink
        className={theme === "light" ? "dark-link" : "light-link"}
        href="#about"
      >
        {t("header:about")}
      </AnchorLink>
      <AnchorLink
        className={theme === "light" ? "dark-link" : "light-link"}
        href="#projects"
      >
        {t("header:projects")}
      </AnchorLink>
      <AnchorLink
        className={theme === "light" ? "dark-link" : "light-link"}
        href="#resume"
      >
        {t("header:resume")}
      </AnchorLink>
      <AnchorLink
        className={theme === "light" ? "dark-link" : "light-link"}
        href="#contact"
      >
        {t("header:contact")}
      </AnchorLink>
      <ToggleLanguage />
      <ToggleTheme />
    </Wrapper>
  );
};

export default NavbarLinks;
