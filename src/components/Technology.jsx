import React, { Component } from 'react';
import dataTechnologys from '../services/dataTechnologys';
import '../style/About.css';
import { ThemeContext } from '../context/ThemeContext';

class Technologys extends Component {
  render() {
    const { theme } = this.context;
    return (
      <section className="technologies">
        {
          dataTechnologys.map((e) => (
            <a href={e.url} className="card-technology" key={e.id} target="_blank" rel="noreferrer">
              <img
                src={e.images}
                alt={e.alt}
                width={e.width}
              />
              <p className={(theme === 'dark') ? 'ligth' : 'dark'}>
                { e.content }
              </p>
            </a>
          ))
        }
      </section>
    );
  }
}

Technologys.contextType = ThemeContext;

export default Technologys;
