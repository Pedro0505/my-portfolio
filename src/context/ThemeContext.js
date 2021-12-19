import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';
import { saveTheme } from '../services/storage';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('');

  function toogleTheme(themeParam) {
    saveTheme(themeParam);
    if (themeParam === 'dark') {
      setTheme('ligth');
      document.querySelector('body').style.color = 'white';
      document.querySelector('body').style.backgroundColor = 'rgb(21, 32, 43)';
    } else {
      setTheme('dark');
      document.querySelector('body').style.backgroundColor = '#FAFAFA';
      document.querySelector('body').style.color = 'black';
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'ligth';
    toogleTheme(localTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      { children }
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
