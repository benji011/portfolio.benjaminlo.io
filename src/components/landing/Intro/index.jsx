import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import { useTranslation } from 'react-i18next';
import dev from 'assets/illustrations/code_development_.svg';

import overlayIllustrationDark from 'assets/illustrations/overlay.svg';
import overlayIllustrationLight from 'assets/illustrations/overlay_light.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const overlay =
    theme === 'light'
      ? `background-image: url(${overlayIllustrationLight});`
      : `background-image: url(${overlayIllustrationDark});`;
  const darkBtn = `background-color: #272c3e;
     color: #fff;
     @media (max-width: 760px) {
      background-color: #fff;
      color: #272c3e;
    }
    `;
  const lightBtn = `background-color: #fff;
    color: #272c3e;

    @media (max-width: 760px) {
      background-color: #272c3e;
      color: #fff;
    }
    `;
  const button = theme === 'light' ? darkBtn : lightBtn;

  return (
    <Wrapper css={overlay}>
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>{t("intro:Hi, I'm Ben!")}</h1>
          <h4>{t('intro:A Senior Software Engineer who is passionate for excellence')}</h4>
          <Button css={button} as={AnchorLink} href="#contact">
            {t('intro:Contact me')}
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="intro:I’m Ben and I’m a full stack engineer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
