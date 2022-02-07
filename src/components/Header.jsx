import React, { useContext } from 'react';
import { NavBarContext } from '../context/NavBarContext';
import { ThemeContext } from '../context/ThemeContext';
import logo from '../images/logo.svg';
import logoLigth from '../images/logo-ligth.svg';
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
      className={ (theme !== 'ligth') ? 'header-footer-color-ligth' : (
        'header-footer-color-dark') }
    >
      <section>
        <ButtonNav />
        {
          theme === 'ligth' ? <img src={ logo } alt="Logo" /> : (
            <img src={ logoLigth } alt="Logo" />
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
