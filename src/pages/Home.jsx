import React, { Component } from 'react';
import '../style/Typing.css';
import '../style/Home.css';

class Home extends Component {
  render() {
    return (
      <main>
        <section className="main-contanier">
          <img src="https://avatars.githubusercontent.com/u/87395119?s=400&u=51428f5445241f74503be1eabdbfb128bf8f7392&v=4" alt="Foto de perfil" className="profile-picture" />
          <section className="contanier-typing">
            <h1 className="text-typing"> Olá!! Seja Bem Vindo(a), </h1>
            <p className="text-typing"> Meu nome é Pedro, e esse é meu Portifolio. </p>
          </section>
        </section>
      </main>
    );
  }
}

export default Home;
