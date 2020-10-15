import React, { useContext } from "react";
import { Link } from "gatsby";
import { ThemeContext } from "providers/ThemeProvider";
import { Container } from "components/common";
import NavbarLinks from "../NavbarLinks";
import { Wrapper, Brand } from "./styles";

const Navbar = () => {
  const { theme, scrollPosition } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" scrolled={scrollPosition} theme={theme}>
        Benjamin Lo
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
