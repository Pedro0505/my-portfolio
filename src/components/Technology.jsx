import React, { Component } from 'react';
import '../style/About.css';

class Technologys extends Component {
  render() {
    return (
      <>
        <section className="technologies">
          <div className="card-technology">
            <img width="22px" src="https://logodownload.org/wp-content/uploads/2016/10/html5-logo-10.png" alt="Logo do Html" />
            <p>Html5</p>
          </div>
          <div className="card-technology">
            <img width="25px" src="https://logospng.org/download/css-3/logo-css-3-2048.png" alt="Logo do CSS" />
            <p>CSS</p>
          </div>
          <div className="card-technology">
            <img width="40px" src="https://marcas-logos.net/wp-content/uploads/2020/11/JavaScript-logo.png" alt="Logo do JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="card-technology">
            <img width="26px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="Logo do React" />
            <p>React</p>
          </div>
        </section>
        <section className="technologies bottom">
          <div className="card-technology">
            <img width="22px" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Logo do GitHub" />
            <p> GitHub </p>
          </div>
          <div className="card-technology">
            <img width="22px" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Logo do Git" />
            <p> Git </p>
          </div>
        </section>

      </>
    );
  }
}

export default Technologys;
