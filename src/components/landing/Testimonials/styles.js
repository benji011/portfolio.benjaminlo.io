import styled from 'styled-components';

export const Wrapper = styled.div`
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;

  h1 {
    text-align: center;
  }
`;

export const SubWrapper = styled.div`
  padding: 4rem 0;
`;

export const TestimonialsWrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};

    @media (max-width: 960px) {
      color: #fff;
      mix-blend-mode: difference;
    }
  }

  summary {
    outline: none !important;
    box-shadow: none !important;
  }

  summary > h2 {
    &:hover {
      cursor: pointer;
      text-decoration: none;
      mix-blend-mode: difference;
    }
  }

  details summary::-webkit-details-marker {
    display: none;
  }

  h3 {
    margin-bottom: 3px;
  }

  h3 > a {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
    &:hover {
      mix-blend-mode: difference;
    }
  }

  p,
  span {
    margin-bottom: 2.5rem;
    font-size: 15pt;
    font-weight: normal;
    line-height: 1.3;
    color: ${({ theme }) => (theme === 'dark' ? '#c7c7c7' : '#2d2d2d')};
    white-space: pre-line;

    @media (max-width: 960px) {
      color: #fff;
      mix-blend-mode: difference;
    }
  }

  details {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: ${({ theme }) => (theme === 'dark' ? '#c7c7c7' : '#2d2d2d')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }
`;

export const Thumbnail = styled.div`
  max-width: 80px;

  img {
    border-radius: 50%;
    border: 3px solid rgb(216, 216, 216);
  }
`;
