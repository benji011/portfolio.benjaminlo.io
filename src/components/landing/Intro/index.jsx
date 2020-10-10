import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev_light from 'assets/illustrations/dev_light.svg';
import dev_dark from 'assets/illustrations/dev_dark.svg';
import { Wrapper, DarkWrapper, IntroWrapper, Details, Thumbnail } from './styles';
import { useTranslation } from 'react-i18next';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  if (theme === "light") {
    return (
      <DarkWrapper>
        <Header />
        <IntroWrapper as={Container}>
          <Details theme={theme}>
            {console.log(t('hi'))}
            <h1>{t('hi')}</h1>
            <h4>{t('introduction')}</h4>
            <Button className="dark-btn" as={AnchorLink} href="#contact">
              {t('contact me')}
            </Button>
          </Details>
          <Thumbnail>
            <img src={dev_light} alt="I’m Ben and I’m a full stack engineer!" />
          </Thumbnail>
        </IntroWrapper>
      </DarkWrapper>
    );
  } else {
    return (
      <Wrapper>
        <Header />
        <IntroWrapper as={Container}>
          <Details theme={theme}>
            <h1>{t('hi')}</h1>
            <h4>{t('introduction')}</h4>
            <Button className="light-btn" as={AnchorLink} href="#contact">
              {t('contact me')}
            </Button>
          </Details>
          <Thumbnail>
            <img src={dev_dark} alt="I’m Ben and I’m a full stack engineer!" />
          </Thumbnail>
        </IntroWrapper>
      </Wrapper>
    );
  }
};
