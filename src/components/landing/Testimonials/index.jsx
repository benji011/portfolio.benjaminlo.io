import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Button } from "components/common";
import { useTranslation } from "react-i18next";
import {
  Wrapper,
  SubWrapper,
  TestimonialsWrapper,
  Details,
  Thumbnail,
} from "./styles";
import testimonialData from "./testimonials.json";

export const Testimonials = () => {
  const { theme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  return (
    <Wrapper id="testimonials" as={Container}>
      <h1>{t("testimonials:title")}</h1>
      {testimonialData.map(
        ({ id, image, name, company, role, header, testimonial, linkedin }) => (
          <TestimonialsWrapper key={id} as={Container}>
            <Thumbnail>
              <img src={image} />
            </Thumbnail>
            <Details theme={theme}>
              <h3>
                <a href={linkedin} target="_blank">
                  {name}
                </a>
              </h3>
              <h5>
                {company}
                {", "}
                {role}
              </h5>
              <details>
                <summary>
                  <h2>
                    "{header}"<span>({t("testimonials:read more")})</span>
                  </h2>
                </summary>
                <p>{testimonial}</p>
              </details>
            </Details>
          </TestimonialsWrapper>
        )
      )}
    </Wrapper>
  );
};
