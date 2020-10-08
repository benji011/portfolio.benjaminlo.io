import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev_light from 'assets/illustrations/skills_light.svg';
import dev_dark from 'assets/illustrations/skills_dark.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={(theme === 'light' ? dev_light : dev_dark)} alt="I’m Ben and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            I am an AWS certified full stack software engineer with 7+ years of demonstratable experience & ability in the industry creating web apps, design and deploy them to be highly available, highly scalable (on demand) and effectively reduce cost with maximum efficiency into your business.
          </p>

          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
