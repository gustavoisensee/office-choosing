
import React from 'react';
import { render } from '@testing-library/react';
import { mockCity } from '../../../helpers/mocks';
import City from './City';

describe('<City />', () => {
  test('renders City component properly', () => {
    const { getByText, queryAllByRole } = render(<City {...mockCity} />);
    expect(getByText('Amsterdam')).toBeInTheDocument();

    const [cityImg, arrowIcon] = queryAllByRole('img');
    expect(cityImg.src).toEqual(expect.stringContaining('amsterdam.jpg'));
    expect(arrowIcon.src).toEqual(expect.stringContaining('arrow.png'));
  });
});
