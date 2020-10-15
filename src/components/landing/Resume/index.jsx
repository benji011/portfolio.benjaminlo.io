import React, { useContext } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { css } from '@emotion/core';
import { Container, Button } from 'components/common';
import { useTranslation } from 'react-i18next';
import resume_light from 'assets/illustrations/resume_light.svg';
import { Wrapper, ResumeWrapper, Details, Thumbnail } from './styles';

export const Resume = () => {
  const { theme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  const darkBtn = `background-color: #272c3e;
     color: #fff;
    `;
  const lightBtn = `background-color: #fff;
     color: #272c3e;
    `;
  const button = theme === 'light' ? darkBtn : lightBtn;
  let companies = t('resume:companies', { returnObjects: true });
  let schools = t('resume:schools', { returnObjects: true });
  let technicalSkills = t('resume:technical skills', { returnObjects: true });
  let certificates = t('resume:certificates', { returnObjects: true });

  /**
   * Load content if the array of object translations exist and is properly loaded.
   */
  function loadContent() {
    if (
      Array.isArray(companies) &&
      companies.length &&
      Array.isArray(schools) &&
      schools.length &&
      Array.isArray(technicalSkills) &&
      technicalSkills.length &&
      Array.isArray(certificates) &&
      certificates.length
    ) {
      return (
        <ResumeWrapper as={Container}>
          <Details theme={theme}>
            <h1>{t('resume:resume')}</h1>
            <Tabs>
              <TabList className={theme === 'light' ? 'light-tab' : 'dark-tab'}>
                <Tab>{t('resume:experience')}</Tab>
                <Tab>{t('resume:education')}</Tab>
                <Tab>{t('resume:technologies')}</Tab>
              </TabList>

              <TabPanel>
                {companies.map((company) => (
                  <div key={company.title.toString()} className="company">
                    <h4>
                      {company.title} - {company.duration}
                    </h4>
                    <ul>
                      {company.experience.map((exp) => (
                        <li key={exp.toString()}>{exp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Button css={button} as={AnchorLink} href="#contact">
                  {t('resume:request full resume')}
                </Button>
              </TabPanel>
              <TabPanel>
                {schools.map((school) => (
                  <div key={school.toString()} className="company">
                    <h4>
                      {school.name} - {school.duration}
                    </h4>
                    <ul>
                      {school.description.map((description) => (
                        <li key={description.toString()}>{description}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Button css={button} as={AnchorLink} href="#contact">
                  {t('resume:request full resume')}
                </Button>
              </TabPanel>
              <TabPanel>
                <table>
                  {technicalSkills.map((skill) => (
                    <tr key={skill.key.toString()}>
                      <th>{skill.key}</th>
                      <td>{skill.items}</td>
                    </tr>
                  ))}
                  {certificates.map((cert) => (
                    <tr key={cert.name.toString()}>
                      <th>{cert.key}</th>
                      <td>
                        <h5 className="cert-header">{cert.name}</h5>
                        <p className="cert-text">{cert.issuer}</p>
                        <p className="cert-text">{cert.issuedDate}</p>
                        <a className="certificates" href={cert.link} target="_blank">
                          {cert.ref}
                        </a>
                      </td>
                    </tr>
                  ))}
                </table>
              </TabPanel>
            </Tabs>
          </Details>
          <Thumbnail>
            <img src={resume_light} alt="I’m Ben and I’m a Backend & Devops engineer!" />
          </Thumbnail>
        </ResumeWrapper>
      );
    }
  }

  return <Wrapper id="resume">{loadContent()}</Wrapper>;
};
