import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import '../style/NavBar.css';
import { NavBarContext } from '../context/NavBarContext';

function LinkNavigation() {
  const { language, Translation } = useContext(LanguageContext);
  const { handleClick } = useContext(NavBarContext);
  const { header: { navAbout, navHome, navContacts, navProjects } } = Translation[language];

  return (
    <>
      <Link onClick={handleClick} to="/">{ navHome }</Link>
      <Link onClick={handleClick} to="/about">{ navAbout }</Link>
      <Link onClick={handleClick} to="/contacts">{ navContacts }</Link>
      <Link onClick={handleClick} to="/projects">{ navProjects }</Link>
    </>
  );
}

export default LinkNavigation;
