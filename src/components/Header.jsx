import React, { useContext } from 'react';
import { NavBarContext } from '../context/NavBarContext';
import { ThemeContext } from '../context/ThemeContext';
import logo from '../images/logo.svg';
import logoLight from '../images/logo-light.svg';
import '../style/Header.css';
import ButtonNav from './ButtonNav';
import Language from './Language';
import LinkNavigation from './LinkNavigation';
import Theme from './Theme';

function Header() {
  const { toggleNav, renderLinks, toogleAppears } = useContext(NavBarContext);
  const { theme } = useContext(ThemeContext);
  return (
    <header
      className={ (theme !== 'light') ? 'header-footer-color-light' : (
        'header-footer-color-dark') }
    >
      <section className="no-select-text">
        <ButtonNav />
        {
          theme === 'light' ? <img src={ logo } alt="Logo" className="no-select-img" /> : (
            <img src={ logoLight } alt="Logo" className="no-select-img" />
          )
        }
        <h1>Pedro Henrique</h1>
      </section>
      <section>
        <nav>
          { (toggleNav === 'hide' && renderLinks !== 'unmount') && <LinkNavigation /> }
        </nav>
        <Language />
        <Theme />
      </section>
      { toggleNav !== 'hide' && (
        <button type="button" className="overlay" onClick={ toogleAppears }>
          <span />
        </button>
      ) }
    </header>
  );
}

export default Header;
