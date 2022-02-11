import React, { useContext } from 'react';
import '../style/NavBar.css';
import { Link } from 'react-router-dom';
import Call from '@material-ui/icons/Call';
import Home from '@material-ui/icons/Home';
import Person from '@material-ui/icons/Person';
import PostAdd from '@material-ui/icons/PostAdd';
import { LanguageContext } from '../context/LanguageContext';
import { NavBarContext } from '../context/NavBarContext';

function LinkNavigation() {
  const { language, Translation } = useContext(LanguageContext);
  const { handleClick } = useContext(NavBarContext);
  const { header: { navAbout, navHome, navContacts, navProjects },
  } = Translation[language];

  return (
    <>
      <Link onClick={ handleClick } to="/">
        <Home style={ { fontSize: '2em', marginRight: '10px' } } />
        { navHome }
      </Link>
      <Link onClick={ handleClick } to="about">
        <Person style={ { fontSize: '2em', marginRight: '10px' } } />
        { navAbout }
      </Link>
      <Link onClick={ handleClick } to="contacts">
        <Call style={ { fontSize: '2em', marginRight: '10px' } } />
        { navContacts }
      </Link>
      <Link onClick={ handleClick } to="projects">
        <PostAdd style={ { fontSize: '2em', marginRight: '10px' } } />
        { navProjects }
      </Link>
    </>
  );
}

export default LinkNavigation;
