/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../services/renderWithRouter';
import NotFound from '../pages/NotFound';

beforeEach(() => {
  renderWithRouter(<NotFound />);
});

describe('Teste da página de Home', () => {
  test('Testando se o conteúdo do texto está correto', () => {
    const text = screen.getByRole('heading', {
      level: 1,
      name: /Você Foi Longe De Mais/i,
    });
    expect(text).toBeInTheDocument();
  });
  test('Testando se a imagem aparece na tela', () => {
    const img = screen.getByRole('img', { name: /not found/i });
    expect(img).toBeInTheDocument();
  });
});
