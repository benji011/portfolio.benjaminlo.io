import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { useTranslation } from 'react-i18next';
import { Wrapper, TestimonialsWrapper, Details, DetailsHeader, Thumbnail } from './styles';
import testimonialData from './testimonials.json';

export const Testimonials = () => {
  const { theme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  return (
    <Wrapper id="testimonials" as={Container}>
      <h1>{t('testimonials:title')}</h1>
      {testimonialData.map(({ id, image, name, company, role, header, testimonial, linkedin }) => (
        <TestimonialsWrapper key={id} as={Container}>
          <Details theme={theme}>
            <DetailsHeader>
              <Thumbnail>
                <img src={image} />
              </Thumbnail>
              <h3>
                <a href={linkedin} target="_blank">
                  {name}
                </a>
              </h3>
              <h5>
                {company}
                {', '}
                {role}
              </h5>
              <h2>"{header}"</h2>
            </DetailsHeader>
            <p>{testimonial}</p>
          </Details>
        </TestimonialsWrapper>
      ))}
    </Wrapper>
  );
};
