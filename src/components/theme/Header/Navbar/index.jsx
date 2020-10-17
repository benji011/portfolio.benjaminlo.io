import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand } from './styles';

const Navbar = ({ hasScrolled, desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Brand hasScrolled={hasScrolled} as={Link} to="/" theme={theme}>
        Benjamin Lo
      </Brand>
      <NavbarLinks hasScrolled={hasScrolled} desktop />
    </Wrapper>
  );
};

export default Navbar;
