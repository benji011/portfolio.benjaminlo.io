import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .light-link {
    color: #000;

    &:hover {
      color: #212121;
      mix-blend-mode: difference;
    }
  }

  .dark-link {
    color: #fff;

    &:hover {
      mix-blend-mode: difference;
    }
  }
`;

export const Brand = styled.a`
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};

  &:hover {
    color: ${({ theme }) => (theme === "light" ? "#212121" : "#fff")};
    mix-blend-mode: difference;
  }

  @media (max-width: 960px) {
    mix-blend-mode: difference;
    color: #fff;
  }
`;
