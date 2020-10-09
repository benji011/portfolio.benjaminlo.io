import React, {useContext} from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, Bar } from './styles';

const Hamburger = ({ sidebar, toggle }) => {

  const { theme } = useContext(ThemeContext);
  
  return (
    <Wrapper sidebar={sidebar} onClick={() => toggle(!sidebar)}>
      <Bar className="burger-menu" top sidebar={sidebar} theme={theme}/>
      <Bar className="burger-menu" mid sidebar={sidebar} theme={theme} />
      <Bar className="burger-menu" bottom sidebar={sidebar} theme={theme} />
    </Wrapper>
  )
};

export default Hamburger;
