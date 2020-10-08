import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev_light from 'assets/illustrations/dev_light.svg';
import dev_dark from 'assets/illustrations/dev_dark.svg';
import { Wrapper, DarkWrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  if (theme === "light") {
    return (
      <DarkWrapper>
        <Header />
        <IntroWrapper as={Container}>
          <Details theme={theme}>
            <h1>Hi There!</h1>
            <h4>I’m Ben and I’m a full stack software engineer!</h4>
            <Button as={AnchorLink} href="#contact">
              Hire me
            </Button>
          </Details>
          <Thumbnail>
            <img src={(theme === 'light' ? dev_light : dev_dark)} alt="I’m Ben and I’m a full stack software engineer!" />
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
            <h1>Hi There!</h1>
            <h4>I’m Ben and I’m a full stack software engineer!</h4>
            <Button as={AnchorLink} href="#contact">
              Hire me
            </Button>
          </Details>
          <Thumbnail>
            <img src={(theme === 'light' ? dev_light : dev_dark)} alt="I’m Ben and I’m a full stack software engineer!" />
          </Thumbnail>
        </IntroWrapper>
      </Wrapper>
    );
  }
};
