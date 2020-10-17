import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import ToggleLanguage from 'components/theme/Header/ToggleLanguage';
import { useTranslation } from 'react-i18next';
import { Wrapper } from './styles';

const NavbarLinks = ({ hasScrolled, desktop }) => {
  const { theme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  return (
    <Wrapper hasScrolled={hasScrolled} desktop={desktop} theme={theme}>
      <AnchorLink href="#about">{t('header:About')}</AnchorLink>
      <AnchorLink href="#projects">{t('header:Projects')}</AnchorLink>
      <AnchorLink href="#resume">{t('header:Resume')}</AnchorLink>
      <AnchorLink href="#testimonials">{t('header:Trusted by')}</AnchorLink>
      <AnchorLink href="#contact">{t('header:Contact')}</AnchorLink>
      <ToggleLanguage />
      <ToggleTheme />
    </Wrapper>
  );
};

export default NavbarLinks;
