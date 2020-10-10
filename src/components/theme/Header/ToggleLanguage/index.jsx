import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import translateDark from 'assets/icons/translate_dark.svg';
import translateLight from 'assets/icons/translate_light.svg';
import { Wrapper } from './styles';
import { useTranslation } from 'react-i18next';

const ToggleLanguage = () => {
  const { theme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  // Change language function
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  let i18nCheck =
    i18n.language.toLowerCase().includes('en') || i18n.language.toLowerCase().includes('en-');

  return (
    <Wrapper type="button">
      <img
        className="icon inverted-icon"
        src={theme === 'light' ? translateLight : translateDark}
        alt={theme}
        onClick={() => changeLanguage(i18nCheck ? 'ja' : 'en')}
      />
    </Wrapper>
  );
};

export default ToggleLanguage;
