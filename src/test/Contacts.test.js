/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

window.scrollTo = jest.fn();

beforeEach(() => {
  renderWithRouter(<App />, '/contacts');
});

describe('Teste da página de Contatos', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
  test('Arrumando o problema do scrollTo', () => {
    window.scrollTo = jest.fn();
  });
  test('Testando se o conteúdo do texto está correto', () => {
    const text = screen.getByRole('heading', {
      level: 1,
      name: /contatos/i,
    });
    expect(text).toBeInTheDocument();
  });
  test('Testando se as imagens aparecem na tela', () => {
    const imgGitHub = screen.getByRole('img', { name: /logo github/i });
    expect(imgGitHub).toBeInTheDocument();

    const imgLinkedin = screen.getByRole('img', { name: /logo do linkedin/i });
    expect(imgLinkedin).toBeInTheDocument();

    const imgGmail = screen.getByRole('img', { name: /logo do gmail/i });
    expect(imgGmail).toBeInTheDocument();
  });
  test('Testando se os subtitulos das imgagens aparecem na tela', () => {
    const paragraphGitHub = screen.getByText(/github/i);
    expect(paragraphGitHub).toBeInTheDocument();

    const paragraphLinkedin = screen.getByText(/linkedin/i);
    expect(paragraphLinkedin).toBeInTheDocument();

    const paragraphGmail = screen.getByText(/gmail/i);
    expect(paragraphGmail).toBeInTheDocument();
  });
  test('Testando a tradução da página de contatos', () => {
    const selected = screen.getByTestId('language-selected');
    userEvent.selectOptions(selected, 'English');

    const credits = screen.getByRole('heading', { level: 1, name: /contacts/i });
    expect(credits).toBeInTheDocument();
  });
});
