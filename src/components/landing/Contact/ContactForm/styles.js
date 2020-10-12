import styled from "styled-components";

export const Error = styled.span`
  color: #ff4136;
`;

export const Center = styled.div`
  text-align: left;

  h4 {
    font-weight: normal;
  }

  .dark-btn {
    background-color: #272c3e;
    color: #fff;
    @media (max-width: 760px) {
      background-color: #fff;
      color: #272c3e;
    }
  }

  .light-btn {
    background-color: #fff;
    color: #272c3e;

    @media (max-width: 760px) {
      background-color: #272c3e;
      color: #fff;
    }
`;

export const InputField = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;
