import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';
import '../style/Footer.css';

class Footer extends Component {
  render() {
    const { language } = this.context;
    return (
      <footer>
        {
          language === 'Português' ? (
            <>
              <h3>
                Desenvolvido e estilizado por
                <a href="https://github.com/Pedro0505?tab=repositories" target="_blank" rel="noreferrer"> Pedro </a>
              </h3>
              <h3> Feito com React e CSS </h3>
            </>
          ) : (
            <>
              <h3>
                Developed and styled by Pedro
                <a href="https://github.com/Pedro0505?tab=repositories" target="_blank" rel="noreferrer"> Pedro </a>
              </h3>
              <h3> Made with React and CSS </h3>
            </>
          )
        }
      </footer>
    );
  }
}

Footer.contextType = LanguageContext;

export default Footer;
