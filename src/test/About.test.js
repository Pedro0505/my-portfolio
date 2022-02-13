/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import Technologys from '../data/TechnologysInfo';
import renderWithRouter from './utils/renderWithRouter';

beforeAll(() => {
  Element.prototype.scrollTo = () => {};
});

describe('Testando a página about me', () => {
  beforeEach(() => {
    renderWithRouter(<App />, '/about');
  });

  test('Se as tecnologia aparecem na tela', () => {
    Technologys.forEach((e) => {
      const projectContent = screen.getByTestId(`${e.content}-${e.id}`);
      expect(projectContent).toBeInTheDocument();
    });
  });

  test('Se os titulos aparecem na pagina', () => {
    const heading1 = screen.getByRole('heading', {
      name: /um Pouco Sobre Mim.../i,
      level: 1,
    });
    expect(heading1).toBeInTheDocument();

    const heading2 = screen.getByRole('heading', {
      name: /minhas habilidades/i,
      level: 1,
    });
    expect(heading2).toBeInTheDocument();
  });
});
