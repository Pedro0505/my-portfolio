/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../services/renderWithRouter';

describe('Teste da página de Home', () => {
  test('Testando se o conteúdo do texto está correto', () => {
    renderWithRouter(<App />);
    const text = screen.getByRole('heading', {
      level: 1,
      name: /olá!! seja bem vindo\(a\),/i,
    });
    expect(text).toBeInTheDocument();

    const paragraph = screen.getByText(/Meu nome é Pedro, e esse é meu Portifolio./i);
    expect(paragraph).toBeInTheDocument();
  });
  test('Testando se a imagem aparece na tela', () => {
    renderWithRouter(<App />);
    const img = screen.getByRole('img', { name: /foto de perfil/i });
    expect(img).toBeInTheDocument();
    expect(img.src).toBe('https://avatars.githubusercontent.com/u/87395119?s=400&u=51428f5445241f74503be1eabdbfb128bf8f7392&v=4');
  });
});

describe('Testando a navegação da paǵina', () => {
  test('Testando o link de Página Inicial da paǵina', () => {
    const { history } = renderWithRouter(<App />);
    const btnHomePage = screen.getByRole('link', { name: /página inicial/i });
    expect(btnHomePage).toBeInTheDocument();

    userEvent.click(btnHomePage);
    expect(history.location.pathname).toBe('/');
  });
  test('Testando o link de Sobre Mim da paǵina', () => {
    const { history } = renderWithRouter(<App />);
    const btnAboutMe = screen.getByRole('link', { name: /sobre mim/i });
    expect(btnAboutMe).toBeInTheDocument();

    userEvent.click(btnAboutMe);
    expect(history.location.pathname).toBe('/about');
  });
  test('Testando o link de Contatos da paǵina', () => {
    const { history } = renderWithRouter(<App />);
    const btnContacts = screen.getByRole('link', { name: /contatos/i });
    expect(btnContacts).toBeInTheDocument();

    userEvent.click(btnContacts);
    expect(history.location.pathname).toBe('/contacts');
  });
  test('Testando o link de Projetos da paǵina', () => {
    const { history } = renderWithRouter(<App />);
    const btnProjects = screen.getByRole('link', { name: /projetos/i });
    expect(btnProjects).toBeInTheDocument();

    userEvent.click(btnProjects);
    expect(history.location.pathname).toBe('/projects');
  });
});

describe('Testando o footer', () => {
  test('Se o texto aparece na tela e corresponde ao esperado', () => {
    renderWithRouter(<App />);
    const credits = screen.getByRole('heading', { level: 3, name: /desenvolvido e estilizado por pedro/i });
    expect(credits).toBeInTheDocument();

    const developed = screen.getByRole('heading', { level: 3, name: /feito com react e css/i });
    expect(developed).toBeInTheDocument();
  });
});
