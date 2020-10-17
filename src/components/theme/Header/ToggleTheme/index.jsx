import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import sunIcon from 'assets/icons/sun.svg';
import moonIcon from 'assets/icons/moon.svg';
import { Wrapper } from './styles';

const ToggleTheme = ({ hasScrolled }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper type="button" onClick={toggleTheme} theme={theme} hasScrolled={hasScrolled}>
      <img src={theme === 'light' ? moonIcon : sunIcon} alt={theme} />
    </Wrapper>
  );
};

export default ToggleTheme;
