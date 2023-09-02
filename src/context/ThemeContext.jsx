import PropTypes from 'prop-types';
import React, { createContext, useEffect, useMemo, useState } from 'react';
import handleSave from '../services/storage';
import bodySelector from '../services/selector';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  function toggleTheme(themeParam) {
    handleSave(themeParam, 'theme');

    if (themeParam === 'dark') {
      setTheme('light');
      const options = [
        { style: 'color', value: 'white' },
        { style: 'backgroundColor', value: 'rgb(21, 32, 43)' },
      ];
      bodySelector(options);
    } else {
      setTheme('dark');
      const options = [
        { style: 'color', value: 'black' },
        { style: 'backgroundColor', value: '#FAFAFA' },
      ];
      bodySelector(options);
    }
  }

  useEffect(() => {
    const choice = localStorage.getItem('theme') || 'dark';

    toggleTheme(choice);
  }, []);

  const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
