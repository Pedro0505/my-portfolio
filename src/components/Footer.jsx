import React, { Component } from 'react';
import '../style/Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3>
          Desenvolvido e estilizado por
          <a href="https://github.com/Pedro0505?tab=repositories" target="_blank" rel="noreferrer"> Pedro </a>
        </h3>
        <h3> Feito com React e CSS </h3>
      </footer>
    );
  }
}

export default Footer;
