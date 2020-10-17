import React, { useState } from 'react';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';
import { Wrapper, Overlay } from './styles';

export const Header = () => {
  const [sidebar, toggle] = useState(false);
  const [navBar, setNavBar] = useState(false);

  document.addEventListener('scroll', () => {
    const threshold = 80;
    let scrolledAboveThreshold = window.scrollY >= threshold ? true : false;
    setNavBar(scrolledAboveThreshold);
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
