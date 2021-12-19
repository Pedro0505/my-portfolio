import React, { Component } from 'react';
import todoList from '../images/todo-list.png';
import '../style/Project.css';

class Projects extends Component {
  render() {
    return (
      <main className="main-project-container">
        <main className="contanier">
          <section className="javascript-container">
            <h1 className="text-typing"> JavaScript Native </h1>
          </section>
          <section className="project-contanier">
            <section className="card-project">
              <img src={todoList} alt="Imagem de referencia de um projeto" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
              </p>
            </section>
          </section>
        </main>
        <main className="contanier">
          <section>
            <h1 className="text-typing"> React </h1>
          </section>
          <section className="project-contanier">
            <section className="card-project">
              <img src={todoList} alt="Imagem de referencia de um projeto" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
              </p>
            </section>
          </section>
        </main>
      </main>
    );
  }
}

export default Projects;
