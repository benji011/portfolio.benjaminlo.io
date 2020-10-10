import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev_light from 'assets/illustrations/skills_light.svg';
import dev_dark from 'assets/illustrations/skills_dark.svg';
import { Wrapper, DarkWrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import { css } from "@emotion/core"

import detailsIllustrationDark from 'assets/illustrations/details.svg';
import detailsIllustrationLight from 'assets/illustrations/details_light.svg';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);
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
    ? `background-image: url(${detailsIllustrationLight});`
    : `background-image: url(${detailsIllustrationDark});`
  )

  return (
    <Wrapper id="about" css={overlay}>
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev_light} alt="I’m Ben and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            I am an AWS certified full stack software engineer with 7+ years of demonstratable experience & ability in the industry creating web apps, design and deploy them to be highly available, highly scalable (on demand) and effectively reduce cost with maximum efficiency into your business.
          </p>

          <Button css={button} as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
