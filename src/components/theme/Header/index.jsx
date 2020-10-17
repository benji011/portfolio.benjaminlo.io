import React, { useState } from 'react';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';
import { Wrapper, Overlay } from './styles';

export const Header = () => {
  const [sidebar, toggle] = useState(false);
  const [hasScrolled, setNavBar] = useState(false);

  if (typeof document !== `undefined`) {
    document.addEventListener('scroll', () => {
      const threshold = 80;
      let scrolledAboveThreshold = window.scrollY >= threshold ? true : false;
      setNavBar(scrolledAboveThreshold);
    });
  }

  return (
    <Wrapper hasScrolled={hasScrolled}>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar hasScrolled={hasScrolled} />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  );
};
