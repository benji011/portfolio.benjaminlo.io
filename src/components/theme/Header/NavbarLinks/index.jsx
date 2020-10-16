import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import ToggleLanguage from 'components/theme/Header/ToggleLanguage';
import { useTranslation } from 'react-i18next';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
  const { theme, scrollPosition } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink
        className={scrollPosition > 300 ? 'dark-link' : theme === 'light' ? 'dark-link' : 'light-link'}
        href="#about"
      >
        {t('header:About')}
      </AnchorLink>
      <AnchorLink
        className={scrollPosition > 300 ? 'dark-link' : theme === 'light' ? 'dark-link' : 'light-link'}
        href="#projects"
      >
        {t('header:Projects')}
      </AnchorLink>
      <AnchorLink
        className={scrollPosition > 300 ? 'dark-link' : theme === 'light' ? 'dark-link' : 'light-link'}
        href="#resume"
      >
        {t('header:Resume')}
      </AnchorLink>
      <AnchorLink
        className={scrollPosition > 300 ? 'dark-link' : theme === 'light' ? 'dark-link' : 'light-link'}
        href="#testimonials"
      >
        {t('header:Trusted by')}
      </AnchorLink>
      <AnchorLink
        className={scrollPosition > 300 ? 'dark-link' : theme === 'light' ? 'dark-link' : 'light-link'}
        href="#contact"
      >
        {t('header:Contact')}
      </AnchorLink>
      <ToggleLanguage />
      <ToggleTheme />
    </Wrapper>
  );
};

export default NavbarLinks;
