import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import '../style/NavBar.css';
import { NavBarContext } from '../context/NavBarContext';
import ButtonNav from './ButtonNav';

function NavBar() {
  const { language, Translation } = useContext(LanguageContext);
  const { toggleNav, setToogleNav } = useContext(NavBarContext);

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
        <section className="links-group">
          <Link onClick={() => setToogleNav('hide')} to="/">{ navHome }</Link>
          <Link onClick={() => setToogleNav('hide')} to="/about">{ navAbout }</Link>
          <Link onClick={() => setToogleNav('hide')} to="/contacts">{ navContacts }</Link>
          <Link onClick={() => setToogleNav('hide')} to="/projects">{ navProjects }</Link>
        </section>
      </nav>
    </>
  );
}

export default NavBar;
