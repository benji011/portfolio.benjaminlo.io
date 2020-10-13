import React, { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { useTranslation } from "react-i18next";
import { Wrapper } from "./styles";

const ToggleLanguage = () => {
  const { theme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  // Change language function
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  let i18nCheck = "en";

  if (i18n.hasOwnProperty("language")) {
    // Check the single string
    i18nCheck =
      i18n.language.toLowerCase() === "en" ||
      i18n.language.toLowerCase() === "en-";
  }

  return (
      <a
        className={theme === "light" ? "dark-link" : "light-link"}
        onClick={() => changeLanguage(i18nCheck ? "ja" : "en")}
      >
        {(i18nCheck) ? "日本語" : "ENG"}
      </a>
  );
};

export default ToggleLanguage;
