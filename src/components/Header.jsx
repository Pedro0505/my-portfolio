import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import logo from '../images/logo.svg';
import '../style/Header.css';
import Language from './Language';
import Theme from './Theme';

function Header() {
  const { language, Translation } = useContext(LanguageContext);

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
        <Theme />
      </section>
    </header>
  );
}

export default Header;
