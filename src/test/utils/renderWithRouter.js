import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (component, path) => {
  const history = createMemoryHistory();
  history.push(path);
  return ({
    ...render(
      <Router location={ history.location } navigator={ history }>
        {component}
      </Router>,
    ),
    history,
  });
};
export default renderWithRouter;
