import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';
import ImageNotFound from '../images/ImageNotFound.svg';
import '../style/NotFound.css';

export default class NotFound extends Component {
  render() {
    const { language, Translation } = this.context;
    const { notfound: { headingH1 } } = Translation[language];
    return (
      <div className="conteiner-not-found">
        <h1>{ headingH1 }</h1>
        <img src={ImageNotFound} alt="Not Found" />
      </div>
    );
  }
}

NotFound.contextType = LanguageContext;
