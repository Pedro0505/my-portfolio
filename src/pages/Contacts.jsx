import React, { Component } from 'react';
import '../style/Contacts.css';

class Contacts extends Component {
  render() {
    return (
      <main className="contanier-contacts">
        <section>
          <h1>
            Contatos
          </h1>
        </section>
        <section className="link-contanier">
          <a href="https://github.com/Pedro0505?tab=repositories">
            <img
              src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/github-512.png"
              alt="Logo GitHub"
              width="150"
            />
            <p>
              GitHub
            </p>
          </a>
          <a href="https://www.linkedin.com/in/pedrohenriquer/" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="Logo do Linkedin"
              width="150"
            />
            <p>
              Linkedin
            </p>
          </a>
          <a href="mailto:pedrohrds05@hotmail.com" target="_blank" rel="noreferrer">
            <img
              src="https://s2rio.com.br/wp-content/uploads/2016/11/gmail-logo-704x704.png"
              alt="Logo do Gmail"
              width="150"
            />
            <p>
              pedrohrds05@hotmail.com
            </p>
          </a>
        </section>
      </main>
    );
  }
}

export default Contacts;
