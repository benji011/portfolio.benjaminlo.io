import styled from 'styled-components';

export const Wrapper = styled.header`
  background: ${({ hasScrolled }) => (hasScrolled ? '#222' : 'transparent')};
  box-shadow: ${({ hasScrolled }) =>
    hasScrolled ? '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46);' : 'none'};
  transition: all 0.5s ease !important;
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
