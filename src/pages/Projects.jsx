import React, { useState } from 'react';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import ProjectsInfo from '../assets/ProjectsInfo';
import ProjectsCards from '../components/ProjectsCards';
import '../style/Project.css';

function Projects() {
  const initialMargin = 40;
  const [moveValue, setMoveValue] = useState(initialMargin);

  function scrollListLeft() {
    let scrollLeft = moveValue + Math.round(window.innerWidth / 2);
    if (scrollLeft > 0) {
      scrollLeft = initialMargin;
    }
    setMoveValue(scrollLeft);
  }

  function scrollListRigth() {
    const scrollRigth = moveValue - Math.round(window.innerWidth / 2);
    setMoveValue(scrollRigth);
  }

  return (
    <main className="main-project-container">
      <section className="title-container">
        <h1 className="text-typing"> Projetos </h1>
      </section>
      <section className="carousel">
        <section className="cards-containers" style={ { marginLeft: moveValue } }>
          <button
            type="button"
            className="arrow-left"
            onClick={ scrollListLeft }
          >
            <ArrowBackIos style={ { color: 'white' } } />
          </button>
          <button
            type="button"
            className="arrow-rigth"
            onClick={ scrollListRigth }
          >
            <ArrowForwardIos style={ { color: 'white' } } />
          </button>
          {
            ProjectsInfo.map(({ id, title, image, content }) => (
              <ProjectsCards
                key={ id }
                title={ title }
                image={ image }
                content={ content }
              />
            ))
          }
        </section>
      </section>
    </main>
  );
}

export default Projects;
