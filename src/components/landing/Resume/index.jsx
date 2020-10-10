import React, { useContext } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import resume_light from 'assets/illustrations/resume_light.svg';
import { Wrapper, ResumeWrapper, Details, Thumbnail } from './styles';

export const Resume = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="resume">
      <ResumeWrapper as={Container}>
        <Details theme={theme}>
          <h1>Resume</h1>
          <Tabs>
            <TabList className={(theme === "light" ? "light-tab" : "dark-tab")}>
              <Tab>Experience</Tab>
              <Tab>Education</Tab>
              <Tab>Skills & technologies</Tab>
            </TabList>

            <TabPanel>
              <h4>Any content 1</h4>
              <ul>
                <li>etc.</li>
                <li>etc.</li>
              </ul>
              <h4>Any content 1</h4>
              <ul>
                <li>etc.</li>
                <li>etc.</li>
              </ul>
              <h4>Any content 1</h4>
              <ul>
                <li>etc.</li>
                <li>etc.</li>
              </ul>
              <h4>Any content 1</h4>
              <ul>
                <li>etc.</li>
                <li>etc.</li>
              </ul>
            </TabPanel>
            <TabPanel>
              <h4>Any content 1</h4>
              <ul>
                <li>etc.</li>
                <li>etc.</li>
              </ul>
              <h4>Any content 1</h4>
              <ul>
                <li>etc.</li>
                <li>etc.</li>
              </ul>
              <h4>Any content 1</h4>
              <ul>
                <li>etc.</li>
                <li>etc.</li>
              </ul>
            </TabPanel>
            <TabPanel>
              <table>
                <tr>
                  <th>Company</th>
                  <td>Alfreds Futterkiste</td>
                </tr>
                <tr>
                  <th>Contact</th>
                  <td>Alfreds Futterkiste</td>
                </tr>
                <tr>
                  <th>Contact</th>
                  <td>Francisco Chang</td>
                </tr>
                <tr>
                  <th>Contact</th>
                  <td>Francisco Chang</td>
                </tr>
                <tr>
                  <th>Contact</th>
                  <td>Francisco Chang</td>
                </tr>
              </table>
            </TabPanel>
          </Tabs>
        </Details>
        <Thumbnail>
          <img src={resume_light} alt="I’m Ben and I’m a Backend & Devops engineer!" />
        </Thumbnail>
      </ResumeWrapper>
    </Wrapper>
  );
};
