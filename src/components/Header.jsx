import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageContext from '../context/LanguageContext';
import logo from '../images/logo.svg';
import '../style/Header.css';
import Language from './Language';
import { saveTheme } from '../services/storage';
import sun from '../images/sun.svg';
import moon from '../images/moon.svg';

function Header() {
  const { language, Translation } = useContext(LanguageContext);
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

  const {
    header:
    {
      navAbout, navHome, navContacts, navProjects,
    },
  } = Translation[language];
  return (
    <header>
      <section>
        <img src={logo} alt="Logo" />
        <h1>Pedro Henrique</h1>
      </section>
      <section>
        <nav>
          <Link to="/">{ navHome }</Link>
          <Link to="/about">{ navAbout }</Link>
          <Link to="/contacts">{ navContacts }</Link>
          <Link to="/projects">{ navProjects }</Link>
        </nav>
        <Language />
        <button type="button" onClick={() => toogleTheme(theme)}>
          <img
            src={theme === 'ligth' ? sun : moon}
            alt="Logo"
            title={language === 'Português' ? 'Mude a cor de tema da paǵina' : 'Change the page theme color'}
          />
        </button>
      </section>
    </header>
  );
}

export default Header;
