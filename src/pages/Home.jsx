import React, { useContext } from 'react';
import '../style/Typing.css';
import '../style/Home.css';
import { LanguageContext } from '../context/LanguageContext';

function Home() {
  const { language, Translation } = useContext(LanguageContext);
  const { home: { headingH1, paragraph } } = Translation[language];

  return (
    <main>
      <section className="main-contanier">
        <img src="https://avatars.githubusercontent.com/u/87395119?s=400&u=51428f5445241f74503be1eabdbfb128bf8f7392&v=4" alt="Foto de perfil" className="profile-picture" />
        <section className="contanier-typing">
          <h1 className="text-typing">{ headingH1 }</h1>
          <p className="text-typing">{ paragraph }</p>
        </section>
      </section>
    </main>
  );
}

export default Home;
