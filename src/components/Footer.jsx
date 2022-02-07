import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';
import '../style/Footer.css';

function Footer() {
  const { language, Translation } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const { footer: { developed, credits } } = Translation[language];
  return (
    <footer
      className={ (theme !== 'ligth') ? 'header-footer-color-ligth' : (
        'header-footer-color-dark') }
    >
      <h3>
        { developed }
        <a href="https://github.com/Pedro0505?tab=repositories" target="_blank" rel="noreferrer"> Pedro </a>
      </h3>
      <h3>{ credits }</h3>
    </footer>
  );
}

export default Footer;
