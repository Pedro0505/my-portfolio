import React, { useContext } from 'react';
import sun from '../images/sun.svg';
import moon from '../images/moon.svg';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';

function Theme() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  return (
    <button
      data-testid="btn-theme"
      type="button"
      onClick={ () => toggleTheme(theme) }
      className="style-button spin"
    >
      <img
        src={ theme === 'light' ? sun : moon }
        alt="Logo"
        title={ language === 'Português' ? 'Mude a cor de tema da paǵina' : (
          'Change the page theme color'
        ) }
      />
    </button>
  );
}

export default Theme;
