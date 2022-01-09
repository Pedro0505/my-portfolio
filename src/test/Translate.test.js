/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../services/renderWithRouter';

window.scrollTo = jest.fn();

beforeEach(() => {
  renderWithRouter(<App />);
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
    const selected = screen.getByTestId('language-selected');
    userEvent.selectOptions(selected, 'English');
    const text = screen.getByRole('heading', {
      level: 1,
      name: /hello!! welcome/i,
    });
    expect(text).toBeInTheDocument();
  });
  test('Testando o paragrafo', () => {
    const selected = screen.getByTestId('language-selected');
    userEvent.selectOptions(selected, 'English');

    const paragraph = screen.getByText(/my name is Pedro, and this is my portfolio./i);
    expect(paragraph).toBeInTheDocument();
  });
  test('Testando a navegação', () => {
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
  test('Testando o footer', () => {
    const selected = screen.getByTestId('language-selected');
    userEvent.selectOptions(selected, 'English');

    const credits = screen.getByRole('heading', { level: 3, name: /developed and styled by Pedro/i });
    expect(credits).toBeInTheDocument();

    const developed = screen.getByRole('heading', { level: 3, name: /made with react and css/i });
    expect(developed).toBeInTheDocument();
  });
  test('Testando a página de contatos', () => {
    const selected = screen.getByTestId('language-selected');
    userEvent.selectOptions(selected, 'English');

    const btnLink = screen.getAllByRole('link', { name: /contacts/i });
    userEvent.click(btnLink[1]);

    const credits = screen.getByRole('heading', { level: 1, name: /contacts/i });
    expect(credits).toBeInTheDocument();
  });
});
