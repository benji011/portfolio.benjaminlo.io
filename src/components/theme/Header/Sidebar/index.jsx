import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Sidebar = ({ sidebar, toggle }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper active={sidebar} onClick={toggle} theme={theme}>
      <NavbarLinks active={sidebar} />
    </Wrapper>
  );
};

export default Sidebar;
