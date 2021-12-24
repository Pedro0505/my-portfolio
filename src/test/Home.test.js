/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../services/renderWithRouter';

window.scrollTo = jest.fn();

describe('Teste da página de Home', () => {
  test('Testando se o conteúdo do texto está correto', () => {
    renderWithRouter(<App />);
    const text = screen.getByRole('heading', {
      level: 1,
      name: /olá!! seja bem vindo\(a\),/i,
    });
    expect(text).toBeInTheDocument();

    const paragraph = screen.getByText(/Meu nome é Pedro, e esse é meu Portfólio./i);
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
  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
  it('renders without crashing', () => {
    window.scrollTo = jest.fn();
  });
  test('Testando o link de Página Inicial da paǵina', () => {
    const { history } = renderWithRouter(<App />);
    const btnHomePage = screen.getAllByRole('link', { name: /página inicial/i });
    expect(btnHomePage[1]).toBeInTheDocument();

    userEvent.click(btnHomePage[1]);
    expect(history.location.pathname).toBe('/');
  });
  test('Testando o link de Sobre Mim da paǵina', () => {
    const { history } = renderWithRouter(<App />);
    const btnAboutMe = screen.getAllByRole('link', { name: /sobre mim/i });
    expect(btnAboutMe[1]).toBeInTheDocument();

    userEvent.click(btnAboutMe[1]);
    expect(history.location.pathname).toBe('/about');
  });
  test('Testando o link de Contatos da paǵina', () => {
    const { history } = renderWithRouter(<App />);
    const btnContacts = screen.getAllByRole('link', { name: /contatos/i });
    expect(btnContacts[1]).toBeInTheDocument();

    userEvent.click(btnContacts[1]);
    expect(history.location.pathname).toBe('/contacts');
  });
  test('Testando o link de Projetos da paǵina', () => {
    const { history } = renderWithRouter(<App />);
    const btnProjects = screen.getAllByRole('link', { name: /projetos/i });
    expect(btnProjects[1]).toBeInTheDocument();

    userEvent.click(btnProjects[1]);
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

describe('Testando a funcionalidade da seleção de linguas', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
  it('renders without crashing', () => {
    window.scrollTo = jest.fn();
  });
  test('Testando o heading', () => {
    renderWithRouter(<App />);
    const selected = screen.getByTestId('language-selected');
    userEvent.selectOptions(selected, 'English');
    const text = screen.getByRole('heading', {
      level: 1,
      name: /hello!! welcome/i,
    });
    expect(text).toBeInTheDocument();
  });
  test('Testando o paragrafo', () => {
    renderWithRouter(<App />);
    const selected = screen.getByTestId('language-selected');
    userEvent.selectOptions(selected, 'English');

    const paragraph = screen.getByText(/my name is Pedro, and this is my portfolio./i);
    expect(paragraph).toBeInTheDocument();
  });
  test('Testando a navegação', () => {
    renderWithRouter(<App />);
    const selected = screen.getByTestId('language-selected');
    userEvent.selectOptions(selected, 'English');

    const btnHomePage = screen.getAllByRole('link', { name: /home/i });
    const btnAboutMe = screen.getAllByRole('link', { name: /about me/i });
    const btnContacts = screen.getAllByRole('link', { name: /contacts/i });
    const btnProjects = screen.getAllByRole('link', { name: /projects/i });

    expect(btnHomePage[1]).toBeInTheDocument();
    expect(btnAboutMe[1]).toBeInTheDocument();
    expect(btnContacts[1]).toBeInTheDocument();
    expect(btnProjects[1]).toBeInTheDocument();
  });
});
