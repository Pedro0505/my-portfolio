import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';
import dataContacts from '../services/dataContacts';
import '../style/Contacts.css';

function Contacts() {
  const { language, Translation } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const { contacts: { headingH1 } } = Translation[language];

  return (
    <main className="contanier-contacts">
      <section>
        <h1>{ headingH1 }</h1>
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
                <p className={(theme === 'dark') ? 'ligth' : 'dark'}>
                  { e.content }
                </p>
              </a>
            ))
          }
      </section>
    </main>
  );
}

export default Contacts;
