import React from 'react';
import { render, fireEvent, waitForDomChange } from '@testing-library/react'

import App from './App';

test('renders input element', () => {
  const { container } = render(<App />);
  const inputElement = container.querySelector('.autocomplete-input');

  expect(inputElement).toBeInTheDocument();
});

test('renders results on write', async () => {
  const { container } = render(<App />);

  const inputElement = container.querySelector('.autocomplete-input');

  fireEvent.change(inputElement, { target: { value: 'Anna' } });

  await waitForDomChange({ container });

  expect(container.getElementsByTagName('li').length).toBe(20)
});

test('highlighsts query', async () => {
  const { container } = render(<App />);
  const query = 'Anna';

  const inputElement = container.querySelector('.autocomplete-input');
  fireEvent.change(inputElement, { target: { value: query } });
  await waitForDomChange({ container });

  expect(container.querySelector('.query').innerHTML.toLowerCase()).toBe(query.toLowerCase());
});
