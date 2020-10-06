import React from 'react';
import { render } from '@testing-library/react';
import Overview from './Overview';

test('renders Overview component', () => {
  const { getByText } = render(<Overview />);
  const linkElement = getByText(/Choose your next Office!/i);
  expect(linkElement).toBeInTheDocument();
});
