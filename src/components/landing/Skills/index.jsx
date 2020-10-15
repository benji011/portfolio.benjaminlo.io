import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import { useTranslation } from 'react-i18next';
import dev_light from 'assets/illustrations/skills_light.svg';
import dev_dark from 'assets/illustrations/skills_dark.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import { css } from '@emotion/core';

import detailsIllustrationDark from 'assets/illustrations/details.svg';
import detailsIllustrationLight from 'assets/illustrations/details_light.svg';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
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
  const overlay =
    theme === 'light'
      ? `background-image: url(${detailsIllustrationLight});`
      : `background-image: url(${detailsIllustrationDark});`;

  /**
   * Get no. of years experience as a developer then load to i18n
   */
  function getYearsOfExperience() {
    const today = new Date();
    const yearStartedAsDeveloper = 2013;
    const yearsOfExperience = String(today.getFullYear() - yearStartedAsDeveloper);
    return yearsOfExperience;
  }

  return (
    <Wrapper id="about" css={overlay}>
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev_light} alt="I’m Ben and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>{t('skills:title')}</h1>
          <p>{t('skills:about me', { count: getYearsOfExperience() })}</p>
          <Button css={button} as={AnchorLink} href="#contact">
            {t('intro:contact me')}
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
