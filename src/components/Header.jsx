import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { NavBarContext } from '../context/NavBarContext';
import logo from '../images/logo.svg';
import '../style/Header.css';
import ButtonNav from './ButtonNav';
import Language from './Language';
import Theme from './Theme';

function Header() {
  const { language, Translation } = useContext(LanguageContext);
  const { setToogleNav, handleClick } = useContext(NavBarContext);

  window.addEventListener('resize', () => {
    if (window.innerWidth > 794) {
      setToogleNav('hide');
    }
  });

  const {
    header:
    {
      navAbout, navHome, navContacts, navProjects,
    },
  } = Translation[language];
  return (
    <header>
      <section>
        <ButtonNav />
        <img src={logo} alt="Logo" />
        <h1>Pedro Henrique</h1>
      </section>
      <section>
        <nav>
          <Link onClick={handleClick} to="/">{ navHome }</Link>
          <Link onClick={handleClick} to="/about">{ navAbout }</Link>
          <Link onClick={handleClick} to="/contacts">{ navContacts }</Link>
          <Link onClick={handleClick} to="/projects">{ navProjects }</Link>
        </nav>
        <Language />
        <Theme />
      </section>
    </header>
  );
}

export default Header;
