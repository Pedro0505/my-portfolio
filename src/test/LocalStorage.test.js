/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../services/renderWithRouter';

beforeEach(() => {
  renderWithRouter(<App />);
});

describe('Testando o localStorage', () => {
  test('Se ao iniciar a pagina existe um item no localStorage', () => {
    const storage = localStorage.length;
    expect(storage).toBe(1);
  });
  test('Se ao iniciar a pagina o item é o tema', () => {
    const storage = localStorage.getItem('theme');
    expect(storage).toBe('ligth');
    expect(storage).not.toBe(null);
  });
  test('Se ao iniciar a pagina não foi salvo a língua', () => {
    const storage = localStorage.getItem('language');
    expect(storage).toBe(null);
  });
  test('Se ao mudar a lingua ela é salva no localStorage', () => {
    const selected = screen.getByTestId('language-selected');
    userEvent.selectOptions(selected, 'English');
    const storage = localStorage.getItem('language');
    expect(storage).not.toBe(null);
    expect(storage).toBe('English');
  });
  test('Se ao mudar o tema ele é salva no localStorage', () => {
    const btnTheme = screen.getByTestId('btn-theme');
    userEvent.click(btnTheme);
    const storage = localStorage.getItem('theme');
    expect(storage).not.toBe(null);
    expect(storage).toBe('dark');
  });
});
