import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LanguageContext from '../context/LanguageContext';
import logo from '../images/logo.svg';
import '../style/Header.css';
import Language from './Language';

class Header extends Component {
  render() {
    const { language } = this.context;
    return (
      <header>
        <section>
          <img src={logo} alt="Logo" />
          <h1>Pedro Henrique</h1>
        </section>
        <section>
          <nav>
            {
              language === 'Português' ? (
                <>
                  <Link to="/">Página Inicial</Link>
                  <Link to="/about"> Sobre Mim </Link>
                  <Link to="/contacts"> Contatos </Link>
                  <Link to="/projects"> Projetos </Link>
                </>
              ) : (
                <>
                  <Link to="/">Home</Link>
                  <Link to="/about"> About Me </Link>
                  <Link to="/contacts"> Contacts </Link>
                  <Link to="/projects"> Projects </Link>
                </>
              )
            }
          </nav>
          <Language />
        </section>
      </header>
    );
  }
}

Header.contextType = LanguageContext;

export default Header;
