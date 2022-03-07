/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Translation from '../data/Translation';
import renderWithRouter from './utils/renderWithRouter';

const { Português: { project: projeto } } = Translation;
const { English: { project } } = Translation;

beforeAll(() => {
  Element.prototype.scrollTo = () => {};
});

describe('Teste da página de projetos em português', () => {
  beforeEach(() => {
    renderWithRouter(<App />, '/projects');
  });

  test('Se o título aparece na tela', () => {
    const heading = screen.getByTestId('heading-project');
    expect(heading).toBeInTheDocument();
  });
  test('Se os projetos estão aparecendo', () => {
    projeto.forEach((e, index) => {
      const projectContent = screen.getByTestId(`${e.title}-${index}`);
      expect(projectContent).toBeInTheDocument();
    });
  });
});

describe('Teste da página de projetos em inglês', () => {
  beforeEach(() => {
    renderWithRouter(<App />, '/projects');
    const selected = screen.getByTestId('language-selected');
    userEvent.selectOptions(selected, 'English');
  });

  test('Se o título aparece na tela', () => {
    const heading = screen.getByTestId('heading-project');
    expect(heading).toBeInTheDocument();
  });
  test('Se os projetos estão aparecendo', () => {
    project.forEach((e, index) => {
      const projectContent = screen.getByTestId(`${e.title}-${index}`);
      expect(projectContent).toBeInTheDocument();
    });
  });
});
