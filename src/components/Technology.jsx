import React, { Component } from 'react';
import dataTechnologys from '../services/dataTechnologys';
import '../style/About.css';

class Technologys extends Component {
  render() {
    return (
      <section className="technologies">
        {
        dataTechnologys.map((e) => (
          <div className="card-technology" key={e.id}>
            <img
              src={e.url}
              alt={e.alt}
              width={e.width}
            />
            <p>
              { e.content }
            </p>
          </div>
        ))
      }
      </section>
    );
  }
}

export default Technologys;
