import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import resume_light from 'assets/illustrations/resume_light.svg';
import resume_dark from 'assets/illustrations/resume_dark.svg';
import { Wrapper, ResumeWrapper, Details, Thumbnail } from './styles';

export const Resume = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="resume">
      <ResumeWrapper as={Container}>
        <Details theme={theme}>
          <h1>Experience</h1>
          <ul>
            <li>
              <h4>beBit inc</h4>
              <p>
                ipsum lorem ipsum lorem ipsum lorem ipsum lorem 
              </p>
            </li>
            <li>
              <h4>ikkai inc</h4>
              <p>
                ipsum lorem ipsum lorem ipsum lorem ipsum lorem 
              </p>
            </li>
            <li>
              <h4>beBit inc</h4>
              <p>
                ipsum lorem ipsum lorem ipsum lorem ipsum lorem 
              </p>
            </li>
            <li>
              <h4>ikkai inc</h4>
              <p>
                ipsum lorem ipsum lorem ipsum lorem ipsum lorem 
              </p>
            </li>
          </ul>
        </Details>
        <Thumbnail>
          <img src={(theme === 'light' ? resume_light : resume_dark)} alt="I’m Ben and I’m a Backend & Devops engineer!" />
        </Thumbnail>
      </ResumeWrapper>
    </Wrapper>
  );
};
