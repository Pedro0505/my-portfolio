/* eslint-disable react/jsx-no-bind */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import '../style/NavBar.css';
import { NavBarContext } from '../context/NavBarContext';
import ButtonNav from './ButtonNav';

function NavBar() {
  const { language, Translation } = useContext(LanguageContext);
  const { toggleNav, handleClick } = useContext(NavBarContext);

  const {
    header:
    {
      navAbout, navHome, navContacts, navProjects,
    },
  } = Translation[language];

  return (
    <>
      <nav className="nav-bar" style={(toggleNav === 'hide') ? { display: 'none' } : { display: 'flex' }}>
        <section className="header-nav">
          <ButtonNav />
          <h2>Pedro Henrique</h2>
        </section>
        <nav className="links-group">
          <Link onClick={handleClick} to="/">{ navHome }</Link>
          <Link onClick={handleClick} to="/about">{ navAbout }</Link>
          <Link onClick={handleClick} to="/contacts">{ navContacts }</Link>
          <Link onClick={handleClick} to="/projects">{ navProjects }</Link>
        </nav>
      </nav>
    </>
  );
}

export default NavBar;
