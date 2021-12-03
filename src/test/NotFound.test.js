/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../services/renderWithRouter';
import NotFound from '../pages/NotFound';
import App from '../App';

describe('Teste da página Not Found', () => {
  test('Testando se o conteúdo do texto está correto', () => {
    renderWithRouter(<NotFound />);
    const text = screen.getByRole('heading', {
      level: 1,
      name: /Você Foi Longe De Mais/i,
    });
    expect(text).toBeInTheDocument();
  });
  test('Testando se a imagem aparece na tela', () => {
    renderWithRouter(<NotFound />);
    const img = screen.getByRole('img', { name: /not found/i });
    expect(img).toBeInTheDocument();
  });
  test('Testando se ao ir para uma rota diferente das existentes aparece na tela a mensagem de NotFound', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/wrongplace');

    const text = screen.getByRole('heading', {
      level: 1,
      name: /Você Foi Longe De Mais/i,
    });

    const img = screen.getByRole('img', { name: /not found/i });

    expect(img).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
