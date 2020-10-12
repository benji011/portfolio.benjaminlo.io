import React, { useContext } from 'react';
import { Link } from 'gatsby'
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, DarkWrapper, Item, Flex, Links, Details } from './styles';
import social_dark from './social.json';
import social_light from './social_light.json';
import { css } from "@emotion/core"

import footerIllustrationLight from 'assets/illustrations/footer_light.svg';
import footerIllustrationDark from 'assets/illustrations/footer.svg';

import GatsbyIcon from '~/static/icons/gatsby.svg';

import SmakoshIconDark from '~/static/icons/smakosh.svg';
import SmakoshIcon from '~/static/icons/smakosh_light.svg';

import GithubIconDark from '~/static/icons/github.svg';
import GithubIcon from '~/static/icons/github_light.svg';

import VercelIconDark from '~/static/icons/vercel.svg';
import VercelIcon from '~/static/icons/vercel_light.svg';

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const social = (theme === "light") ? social_light : social_dark
  const overlay = (
    (theme === "light")
    ? `background-image: url(${footerIllustrationLight});`
    : `background-image: url(${footerIllustrationDark});`
  )


const Github = (theme === "light") ? GithubIcon : GithubIconDark;
const Vercel = (theme === "light") ? VercelIcon : VercelIconDark;
const Smakosh = (theme === "light") ? SmakoshIcon : SmakoshIconDark;

  return (
    <Wrapper css={overlay}>
      <Flex as={Container}>
        <Details theme={theme}>
          <h2>Benjamin Lo</h2>
          ©{' '}
          {`${new Date().getFullYear()} `}
          Forked from
          <a
            href="https://github.com/smakosh/gatsby-portfolio-dev"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Item width="24" src={Smakosh} img alt="Gatssby js" />
          </a>
          built with
          <a
            href="https://www.gatsbyjs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Item width="24" src={GatsbyIcon} img alt="Gatssby js" />
          </a>
          open sourced on
          <a
            href="https://github.com/benji011/portfolio_gatsby"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Item width="24" src={Github} img alt="GitHub" />
          </a>
          and deployed on
          <a
            href="https://vercel.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Item width="24" src={Vercel} img alt="Vercel" />
          </a>
        </Details>
        <Links>
          {social.map(({ id, name, link, icon }) => (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
              <img width="24" src={icon} alt={name} />
            </a>
          ))}
        </Links>
      </Flex>
    </Wrapper>
  );
};
