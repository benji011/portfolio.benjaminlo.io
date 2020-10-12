import React, { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Container } from "components/common";
import contact from "assets/illustrations/contact_light.svg";

import { Wrapper, Details, Thumbnail } from "./styles";
import ContactForm from "./ContactForm";

export const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container} id="contact">
      <Details theme={theme}>
        <ContactForm theme={theme} />
      </Details>
      <Thumbnail>
        <img src={contact} alt="I’m Ben and I’m a Backend & Devops engineer!" />
      </Thumbnail>
    </Wrapper>
  );
};
