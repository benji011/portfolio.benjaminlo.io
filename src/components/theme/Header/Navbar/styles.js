import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.a`
  // Basically just change colour depending on whether its light mode or not & whether navbar is true
  color: ${({ theme, hasScrolled }) => (theme === 'light' ? (hasScrolled ? '#fff' : '#000') : '#fff')};

  &:hover {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
    mix-blend-mode: difference;
  }

  @media (max-width: 960px) {
    mix-blend-mode: difference;
    color: #fff;
  }
`;
