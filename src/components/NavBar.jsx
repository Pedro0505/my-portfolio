/* eslint-disable react/jsx-no-bind */
import React, { useContext } from 'react';
import '../style/NavBar.css';
import { NavBarContext } from '../context/NavBarContext';
import ButtonNav from './ButtonNav';
import LinkNavigation from './LinkNavigation';

function NavBar() {
  const { toggleNav } = useContext(NavBarContext);

  return (
    <>
      <nav className={((toggleNav !== 'hide') ? 'show nav-bar' : 'hide nav-bar')}>
        <section className="header-nav">
          <ButtonNav />
          <h2>Pedro Henrique</h2>
        </section>
        <nav className="links-group">
          <LinkNavigation />
        </nav>
      </nav>
    </>
  );
}

export default NavBar;
