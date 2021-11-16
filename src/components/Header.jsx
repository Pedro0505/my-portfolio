import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to="/"> Página Inicial </Link>
          <Link to="/about"> Sobre Mim </Link>
          <Link to="/contacts"> Contatos </Link>
          <Link to="/projects"> Projetos </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
