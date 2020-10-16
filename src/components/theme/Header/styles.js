import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ scrolled }) => (scrolled > 80 ? '#212121' : 'transparent')};
  width: 100%;
  position: fixed;
  z-index: 99;
`;

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
			display: block;
			z-index: 4;
	`}
`;
