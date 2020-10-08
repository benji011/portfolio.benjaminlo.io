import React, { useContext } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
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
          <h1>Resume</h1>
          <Tabs>
            <TabList>
              <Tab>Experience</Tab>
              <Tab>Education</Tab>
              <Tab>Technologies</Tab>
            </TabList>

            <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>
          </Tabs>
        </Details>
        <Thumbnail>
          <img src={(theme === 'light' ? resume_light : resume_dark)} alt="I’m Ben and I’m a Backend & Devops engineer!" />
        </Thumbnail>
      </ResumeWrapper>
    </Wrapper>
  );
};
