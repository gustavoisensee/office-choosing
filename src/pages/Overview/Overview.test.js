import React from 'react';
import { render } from '@testing-library/react';
import Overview from './Overview';

describe('<Overview />', () => {
  it('renders Overview component', () => {
    const { getByText, queryAllByTestId } = render(<Overview />);
    const linkElement = getByText(/Choose your next Office!/i);

    expect(queryAllByTestId('city')).toHaveLength(3);
    expect(linkElement).toBeInTheDocument();
  });
})
