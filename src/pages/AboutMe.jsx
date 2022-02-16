import React, { useContext } from 'react';
import Technologys from '../components/Technology';
import { LanguageContext } from '../context/LanguageContext';

function AboutMe() {
  const { language, Translation } = useContext(LanguageContext);
  const { aboutme: { about, headingSkills } } = Translation[language];
  return (
    <main className="contanier-about">
      <section className="about-infos container-typing-about">
        <h1 className="typing-about">{ about.headingAbout }</h1>
        <div className="conteiner-content-about">
          <p className="content-about">{ about.content }</p>
        </div>
      </section>
      <section className="container-skills container-typing-about">
        <h1 className="typing-about">{ headingSkills }</h1>
        <Technologys />
      </section>
    </main>
  );
}

export default AboutMe;
