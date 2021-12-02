import React, { Component } from 'react';
import '../style/Typing.css';
import '../style/Home.css';
import LanguageContext from '../context/LanguageContext';

class Home extends Component {
  render() {
    const { language } = this.context;
    return (
      <main>
        <section className="main-contanier">
          <img src="https://avatars.githubusercontent.com/u/87395119?s=400&u=51428f5445241f74503be1eabdbfb128bf8f7392&v=4" alt="Foto de perfil" className="profile-picture" />
          <section className="contanier-typing">
            {
              language === 'Português' ? (
                <>
                  <h1 className="text-typing"> Olá!! Seja Bem Vindo(a), </h1>
                  <p className="text-typing"> Meu nome é Pedro, e esse é meu Portfólio.</p>
                </>
              ) : (
                <>
                  <h1 className="text-typing">Hello!! Welcome</h1>
                  <p className="text-typing">My name is Pedro, and this is my Portfolio.</p>
                </>
              )
            }
          </section>
        </section>
      </main>
    );
  }
}

Home.contextType = LanguageContext;

export default Home;
