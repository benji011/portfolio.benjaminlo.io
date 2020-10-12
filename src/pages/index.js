import React from "react";
import { Layout, SEO } from "components/common";
import { Intro, Skills, Resume, Contact, Projects } from "components/landing";

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Resume />
    <Skills />
    <Contact />
  </Layout>
);
