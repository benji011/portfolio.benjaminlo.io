import React, { useState, useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import Navbar from "./Navbar";
import Hamburger from "./Hamburger";
import Sidebar from "./Sidebar";
import { Wrapper, Overlay } from "./styles";
import styled from "styled-components";

export const Header = () => {
  const [sidebar, toggle] = useState(false);
  const { scrollPosition } = useContext(ThemeContext);

  return (
    <Wrapper scrolled={scrollPosition}>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  );
};
