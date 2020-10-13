import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import translateDark from 'assets/icons/translation_dark.svg';
import translateLight from 'assets/icons/translation_light.svg';
import { useTranslation } from 'react-i18next';
import { Wrapper } from './styles';

const ToggleLanguage = () => {
  const { theme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  // Change language function
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log('CLICK', lng);
  };

  let i18nCheck = 'en';

  if (i18n.hasOwnProperty('language')) {
    i18nCheck = i18n.language.toLowerCase() === 'en' || i18n.language.toLowerCase() === 'en-';
  }

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
