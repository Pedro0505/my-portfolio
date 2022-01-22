import React, { useContext } from 'react';
import ProjectsCards from '../components/ProjectsCards';
import '../style/Project.css';
import { LanguageContext } from '../context/LanguageContext';
import Carousel from '../components/Carousel';

function Projects() {
  const { language, Translation } = useContext(LanguageContext);
  const { project } = Translation[language];

  return (
    <main className="main-project-container">
      <section className="title-container">
        <h1 className="text-typing"> Projetos </h1>
      </section>
      <Carousel>
        {
          project.map(({ id, title, image, content, repository, deploy }) => (
            <ProjectsCards
              key={ id }
              title={ title }
              image={ image }
              content={ content }
              repository={ repository }
              deploy={ deploy }
            />
          ))
        }
      </Carousel>
    </main>
  );
}

export default Projects;
