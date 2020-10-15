import React from "react";
import { Layout, SEO } from "components/common";
import {
  Intro,
  Skills,
  Testimonials,
  Resume,
  Contact,
  Projects,
} from "components/landing";
import { I18nextProvider, withTranslation } from "react-i18next";
import i18n from "../../i18n/index";

function Index() {
  return (
    <I18nextProvider i18n={i18n}>
      <Layout>
        <SEO />
        <Intro />
        <Projects />
        <Resume />
        <Skills />
        <Testimonials />
        <Contact />
      </Layout>
    </I18nextProvider>
  );
}

export default withTranslation()(Index);
