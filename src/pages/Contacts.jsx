import React, { Component } from 'react';
import dataContacts from '../services/dataContacts';
import '../style/Contacts.css';

class Contacts extends Component {
  render() {
    return (
      <main className="contanier-contacts">
        <section>
          <h1>Contatos</h1>
        </section>
        <section className="link-contanier">
          {
            dataContacts.map((e) => (
              <a href={e.url} key={e.id} target="_blank" rel="noreferrer">
                <img
                  src={e.image}
                  alt={e.alt}
                  width={e.width}
                />
                <p>
                  { e.content }
                </p>
              </a>
            ))
          }
        </section>
      </main>
    );
  }
}

export default Contacts;
