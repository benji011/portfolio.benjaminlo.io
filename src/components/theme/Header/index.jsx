import React, { useState } from 'react';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';
import { Wrapper, Overlay } from './styles';

export const Header = () => {
  const [sidebar, toggle] = useState(false);
  const [navBar, setNavBar] = useState(false);

  document.addEventListener('scroll', () => {
    let hasScrolled = window.scrollY >= 80 ? true : false;
    setNavBar(hasScrolled);
  });

  return (
    <Wrapper navBar={navBar}>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  );
};
