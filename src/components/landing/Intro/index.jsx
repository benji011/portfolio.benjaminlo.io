import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev_light.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import { useTranslation } from 'react-i18next';
import { css } from "@emotion/core"

import overlayIllustrationDark from 'assets/illustrations/overlay.svg';
import overlayIllustrationLight from 'assets/illustrations/overlay_light.svg';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const darkBtn = (
    `background-color: #272c3e;
     color: #fff;
     @media (max-width: 760px) {
      background-color: #fff;
      color: #272c3e;
    }
    `
  )
  const lightBtn = (
    `background-color: #fff;
    color: #272c3e;

    @media (max-width: 760px) {
      background-color: #272c3e;
      color: #fff;
    }
    `
  )
  const button = (theme === "light") ? darkBtn : lightBtn
  const overlay = (
    (theme === "light")
    ? `background-image: url(${overlayIllustrationLight});`
    : `background-image: url(${overlayIllustrationDark});`
  )

  return (
    <Wrapper css={overlay}>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>{t('hi')}</h1>
          <h4>{t('introduction')}</h4>
          <Button css={button} as={AnchorLink} href="#contact">
            {t('contact me')}
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt={t('introduction')} />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
