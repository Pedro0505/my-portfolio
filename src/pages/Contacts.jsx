import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';
import LazyImage from '../components/LazyImage';
import ContactsInfo from '../data/ContactsInfo';
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
          ContactsInfo.map((e) => (
            <a href={ e.url } key={ e.id } target="_blank" rel="noreferrer">
              <LazyImage src={e.image} alt={e.alt} width="150px" height="150px" />
              <p className={ (theme === 'dark') ? 'light' : 'dark' }>
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
