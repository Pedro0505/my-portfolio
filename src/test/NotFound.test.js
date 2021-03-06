import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

describe('Teste da página Not Found', () => {
  test('Testando se o conteúdo do texto está correto', () => {
    renderWithRouter(<App />, '/wrongplace');

    const text = screen.getByRole('heading', {
      level: 1,
      name: /Você Foi Longe De Mais/i,
    });
    expect(text).toBeInTheDocument();
  });
  test('Testando se a imagem aparece na tela', () => {
    renderWithRouter(<App />, '/wrongplace2');

    const img = screen.getByRole('img', { name: /not found/i });
    expect(img).toBeInTheDocument();
  });
  test(`Testando se ao ir para uma rota diferente 
  das existentes aparece na tela a mensagem de NotFound`, () => {
    renderWithRouter(<App />, '/wrongplace3');

    const text = screen.getByRole('heading', {
      level: 1,
      name: /Você Foi Longe De Mais/i,
    });

    const img = screen.getByRole('img', { name: /not found/i });

    expect(img).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
