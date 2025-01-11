import React, { Component } from 'react';
import TechnologysInfo from '../data/TechnologysInfo';
import '../style/About.css';
import { ThemeContext } from '../context/ThemeContext';
import LazyImage from './LazyImage';

class Technologys extends Component {
  render() {
    const { theme } = this.context;
    return (
      <section className="technologies">
        {
          TechnologysInfo.map((e, index) => {
            const src = `/${e.images}.jpg`;
            return (
              <a
                href={ e.url }
                className="card-technology"
                key={ index }
                target="_blank"
                rel="noreferrer"
                data-testid={ `${e.content}-${index}` }
              >
                <LazyImage src={src} alt="Imagem do projeto" width={e.width} height="15px" />
                <p className={ (theme === 'dark') ? 'light' : 'dark' }>
                  { e.content }
                </p>
              </a>
            );
          })
        }
      </section>
    );
  }
}

Technologys.contextType = ThemeContext;

export default Technologys;
