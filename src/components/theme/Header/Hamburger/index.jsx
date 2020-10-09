import React, {useContext} from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, Bar } from './styles';

const Hamburger = ({ sidebar, toggle }) => {

  const { theme } = useContext(ThemeContext);
  
  return (
    <Wrapper sidebar={sidebar} onClick={() => toggle(!sidebar)}>
      <Bar className={(theme === "light") ? "light" : "dark"} top sidebar={sidebar} theme={theme}/>
      <Bar className={(theme === "light") ? "light" : "dark"} mid sidebar={sidebar} theme={theme} />
      <Bar className={(theme === "light") ? "light" : "dark"} bottom sidebar={sidebar} theme={theme} />
    </Wrapper>
  )
};

export default Hamburger;
