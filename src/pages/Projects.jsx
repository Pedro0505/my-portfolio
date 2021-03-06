import React, { useContext } from 'react';
import '../style/Project.css';
import { LanguageContext } from '../context/LanguageContext';
import Carousel from '../components/Carousel';
import ProjectsCards from '../components/ProjectsCards';

function Projects() {
  const { language, Translation } = useContext(LanguageContext);
  const { project, projectHeading } = Translation[language];

  return (
    <main className="main-project-container">
      <section className="title-container">
        <h1
          className="text-typing"
          data-testid="heading-project"
        >
          { projectHeading }
        </h1>
      </section>
      <Carousel>
        {
          project.map(({
            title, image, dislable,
            content, repository, deploy, textDeploy, textRepository,
          }, index) => (
            <ProjectsCards
              key={ `${title}-${index}` }
              title={ title }
              image={ image }
              testId={ `${title}-${index}` }
              content={ content }
              repository={ repository }
              deploy={ deploy }
              textRepository={ textRepository }
              textDeploy={ textDeploy }
              dislable={ dislable }
            />
          ))
        }
      </Carousel>
    </main>
  );
}

export default Projects;
