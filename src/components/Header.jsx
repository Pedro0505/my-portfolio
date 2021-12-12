import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LanguageContext from '../context/LanguageContext';
import logo from '../images/logo.svg';
import '../style/Header.css';
import Language from './Language';

class Header extends Component {
  render() {
    const { language, Translation } = this.context;
    const { header } = Translation[language];
    return (
      <header>
        <section>
          <img src={logo} alt="Logo" />
          <h1>Pedro Henrique</h1>
        </section>
        <section>
          <nav>
            <Link to="/">{ header.navHome }</Link>
            <Link to="/about">{ header.navAbout }</Link>
            <Link to="/contacts">{ header.navContacts }</Link>
            <Link to="/projects">{ header.navProjects }</Link>
          </nav>
          <Language />
        </section>
      </header>
    );
  }
}

Header.contextType = LanguageContext;

export default Header;
