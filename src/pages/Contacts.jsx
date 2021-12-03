import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';
import dataContacts from '../services/dataContacts';
import '../style/Contacts.css';

class Contacts extends Component {
  render() {
    const { language } = this.context;
    return (
      <main className="contanier-contacts">
        <section>
          {
            language === 'Português' ? <h1>Contatos</h1> : <h1>Contacts</h1>
          }
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

Contacts.contextType = LanguageContext;

export default Contacts;
