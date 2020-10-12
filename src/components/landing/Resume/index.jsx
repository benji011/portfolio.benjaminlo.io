import React, { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import { css } from "@emotion/core";
import { Container, Button } from "components/common";
import resume_light from "assets/illustrations/resume_light.svg";
import { Wrapper, ResumeWrapper, Details, Thumbnail } from "./styles";

export const Resume = () => {
  const { theme } = useContext(ThemeContext);
  const darkBtn = `background-color: #272c3e;
     color: #fff;
    `;
  const lightBtn = `background-color: #fff;
     color: #272c3e;
    `;
  const button = theme === "light" ? darkBtn : lightBtn;
  // const companies = t("resume:companies", { returnObjects: true });
  // const schools = t("resume:schools", { returnObjects: true });
  // const technicalSkills = t("resume:technical skills", { returnObjects: true });
  // const certificates = t("resume:certificates", { returnObjects: true });

  return (
    <Wrapper id="resume">
      <ResumeWrapper as={Container}>
        <Details theme={theme}>
          <h1>resume:resume</h1>
          <Tabs>
            <TabList className={theme === "light" ? "light-tab" : "dark-tab"}>
              <Tab>resume:experience</Tab>
              <Tab>resume:education</Tab>
              <Tab>resume:technologies</Tab>
            </TabList>

            <TabPanel>
              test
            </TabPanel>
          </Tabs>
        </Details>
        <Thumbnail>
          <img
            src={resume_light}
            alt="I’m Ben and I’m a Backend & Devops engineer!"
          />
        </Thumbnail>
      </ResumeWrapper>
    </Wrapper>
  );
};
