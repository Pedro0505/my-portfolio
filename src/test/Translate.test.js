import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../services/renderWithRouter';

window.scrollTo = jest.fn();

beforeEach(() => {
  renderWithRouter(<App />);
  const selected = screen.getByTestId('language-selected');
  userEvent.selectOptions(selected, 'English');
});

afterEach(() => {
  localStorage.clear();
});

describe('Testando a funcionalidade da seleção de linguas', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
  test('Arrumando o problema do scrollTo', () => {
    window.scrollTo = jest.fn();
  });

  test('Testando o heading', () => {
    const text = screen.getByRole('heading', {
      level: 1,
      name: /hello!! welcome/i,
    });
    expect(text).toBeInTheDocument();
  });
  test('Testando o paragrafo', () => {
    const paragraph = screen.getByText(/my name is Pedro, and this is my portfolio./i);
    expect(paragraph).toBeInTheDocument();
  });
});

describe('Testando a funcionalidade da seleção de linguas', () => {
  test('Testando a navegação', () => {
    const btnHomePage = screen.getByRole('link', { name: /home/i });
    const btnAboutMe = screen.getByRole('link', { name: /about me/i });
    const btnContacts = screen.getByRole('link', { name: /contacts/i });
    const btnProjects = screen.getByRole('link', { name: /projects/i });

    expect(btnHomePage).toBeInTheDocument();
    expect(btnAboutMe).toBeInTheDocument();
    expect(btnContacts).toBeInTheDocument();
    expect(btnProjects).toBeInTheDocument();
  });
  test('Testando o footer', () => {
    const credits = screen.getByRole('heading',
      { level: 3, name: /developed and styled by Pedro/i });
    expect(credits).toBeInTheDocument();

    const developed = screen.getByRole('heading',
      { level: 3, name: /made with react and css/i });
    expect(developed).toBeInTheDocument();
  });
  test('Testando a página de contatos', () => {
    const btnLink = screen.getByRole('link', { name: /contacts/i });
    userEvent.click(btnLink);

    const credits = screen.getByRole('heading', { level: 1, name: /contacts/i });
    expect(credits).toBeInTheDocument();
  });
});
