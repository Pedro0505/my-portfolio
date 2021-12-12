import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';
import '../style/Footer.css';

class Footer extends Component {
  render() {
    const { language, Translation } = this.context;
    const { footer } = Translation[language];
    return (
      <footer>
        <h3>
          { footer.developed }
          <a href="https://github.com/Pedro0505?tab=repositories" target="_blank" rel="noreferrer"> Pedro </a>
        </h3>
        <h3>{ footer.credits }</h3>
      </footer>
    );
  }
}

Footer.contextType = LanguageContext;

export default Footer;
