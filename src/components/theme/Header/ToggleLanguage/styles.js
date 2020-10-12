import styled from "styled-components";

export const Wrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s all;

  &:focus {
    outline: none;
    transition: 0.3s all;
  }

  @media (max-width: 960px) {
    text-align: left;
  }

  img {
    margin-bottom: unset;
  }

  .icon {
    max-width: 35px;

    @media (max-width: 960px) {
      margin-bottom: 10px;
    }
  }
`;
