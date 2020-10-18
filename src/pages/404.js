import React from 'react';
import { Layout, SEO } from 'components/common';
import { I18nextProvider, withTranslation } from 'react-i18next';
import i18n from '~/i18n/index';
import error from 'assets/illustrations/404_page_not_found_.svg';
import { Image } from './styles.js';

function IndexNotFound() {
  if (typeof window !== 'undefined') {
    window.location = '/';
  }

  return (
    <I18nextProvider i18n={i18n}>
      <Layout>
        <SEO title="404: Not found" location="/404" />
        <Image>
          <img src={error} alt="404!" />
        </Image>
      </Layout>
    </I18nextProvider>
  );
}

export default withTranslation()(IndexNotFound);
