import React, { Component } from 'react';
import ImageNotFound from '../images/ImageNotFound.svg';
import '../style/NotFound.css';

export default class NotFound extends Component {
  render() {
    return (
      <div className="conteiner-not-found">
        <h1>Você Foi Longe De Mais</h1>
        <img src={ImageNotFound} alt="Not Found" />
      </div>
    );
  }
}
