import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev_light from 'assets/illustrations/dev_light.svg';
import { Wrapper, DarkWrapper, IntroWrapper, Details, Thumbnail } from './styles';
import { useTranslation } from 'react-i18next';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  // Actual page contents.
  const contents = (
    <IntroWrapper as={Container}>
      <Details theme={theme}>
        <h1>{t('hi')}</h1>
        <h4>{t('introduction')}</h4>
        <Button className={(theme === "light") ? "dark-btn" : "light-btn"} as={AnchorLink} href="#contact">
          {t('contact me')}
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev_light} alt={t('introduction')} />
      </Thumbnail>
    </IntroWrapper>
  )

  // Return page layout depending on theme set
  if (theme === "light") {
    return (
      <DarkWrapper>
        <Header />
        {contents}
      </DarkWrapper>
    );
  } else {
    return (
      <Wrapper>
        <Header />
        {contents}
      </Wrapper>
    );
  }
};
