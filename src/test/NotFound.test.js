import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../services/renderWithRouter';
import App from '../App';

describe('Teste da página Not Found', () => {
  test('Testando se o conteúdo do texto está correto', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/wrongplace');

    const text = screen.getByRole('heading', {
      level: 1,
      name: /Você Foi Longe De Mais/i,
    });
    expect(text).toBeInTheDocument();
  });
  test('Testando se a imagem aparece na tela', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/wrongplace2');

    const img = screen.getByRole('img', { name: /not found/i });
    expect(img).toBeInTheDocument();
  });
  test(`Testando se ao ir para uma rota diferente 
  das existentes aparece na tela a mensagem de NotFound`, () => {
    const { history } = renderWithRouter(<App />);

    history.push('/wrongplace3');

    const text = screen.getByRole('heading', {
      level: 1,
      name: /Você Foi Longe De Mais/i,
    });

    const img = screen.getByRole('img', { name: /not found/i });

    expect(img).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
