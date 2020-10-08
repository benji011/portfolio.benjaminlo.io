import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';

import contact_light from 'assets/illustrations/contact_light.svg';
import contact_dark from 'assets/illustrations/contact_dark.svg';

import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container} id="contact">
      <Details theme={theme}>
        <ContactForm />
      </Details>
      <Thumbnail>
        <img src={(theme === 'light' ? contact_light : contact_dark)} alt="I’m Ben and I’m a Backend & Devops engineer!" />
      </Thumbnail>
    </Wrapper>
  );
};
