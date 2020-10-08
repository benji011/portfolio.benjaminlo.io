import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, DarkWrapper, Flex, Links, Details } from './styles';
import social from './social.json';
import social_light from './social_light.json';

export const Footer = () => {
  const { theme } = useContext(ThemeContext);

  if (theme === "light") {
    return (
      <Wrapper>
        <Flex as={Container}>
          <Details theme={theme}>
            <h2>Benjamin Lo</h2>
            <span>
              © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
              <span aria-label="love" role="img">
                💖
              </span>{' '}
              by{' '}
              <a href="https://smakosh.com/?ref=portfolio-dev" rel="noopener noreferrer" target="_blank">
                Smakosh
              </a>
            </span>
          </Details>
          <Links>
            {social_light.map(({ id, name, link, icon }) => (
              <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
                <img width="24" src={icon} alt={name} />
              </a>
            ))}
          </Links>
        </Flex>
      </Wrapper>
    );
  } else {
      return (
        <DarkWrapper>
          <Flex as={Container}>
            <Details theme={theme}>
              <h2>Benjamin Lo</h2>
              <span>
                © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
                <span aria-label="love" role="img">
                  💖
                </span>{' '}
                by{' '}
                <a href="https://smakosh.com/?ref=portfolio-dev" rel="noopener noreferrer" target="_blank">
                  Smakosh
                </a>
              </span>
            </Details>
            <Links>
              {social.map(({ id, name, link, icon }) => (
                <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
                  <img width="24" src={icon} alt={name} />
                </a>
              ))}
            </Links>
          </Flex>
        </DarkWrapper>
      );
  }
};
