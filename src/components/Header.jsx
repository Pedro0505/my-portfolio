import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import '../style/Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <section>
          <img src={logo} alt="Logo" />
          <h1>Pedro Henrique</h1>
        </section>
        <nav>
          <Link to="/">Página Inicial</Link>
          <Link to="/about"> Sobre Mim </Link>
          <Link to="/contacts"> Contatos </Link>
          <Link to="/projects"> Projetos </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
