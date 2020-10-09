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
            <TabList className={(theme === "light" ? "light-tab" : "dark-tab")}>
              <Tab>Experience</Tab>
              <Tab>Education</Tab>
              <Tab>Technologies</Tab>
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
                  <th>Contact</th>
                  <th>Country</th>
                </tr>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                </tr>
                <tr>
                  <td>Ernst Handel</td>
                  <td>Roland Mendel</td>
                  <td>Austria</td>
                </tr>
                <tr>
                  <td>Island Trading</td>
                  <td>Helen Bennett</td>
                  <td>UK</td>
                </tr>
                <tr>
                  <td>Laughing Bacchus Winecellars</td>
                  <td>Yoshi Tannamuri</td>
                  <td>Canada</td>
                </tr>
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>Italy</td>
                </tr>
              </table>
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
