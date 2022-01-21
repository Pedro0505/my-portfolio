import React from 'react';
import ProjectsInfo from '../data/ProjectsInfo';
import ArrowMove from '../components/ArrowMove';
import ProjectsCards from '../components/ProjectsCards';
import '../style/Project.css';

function Projects() {
  return (
    <main className="main-project-container">
      <section className="title-container">
        <h1 className="text-typing"> Projetos </h1>
      </section>
      <section className="carousel">
        <section className="cards-containers">
          <ArrowMove />
          {
            ProjectsInfo.map(({ id, title, image, content, repository, deploy }) => (
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
        </section>
      </section>
    </main>
  );
}

export default Projects;
