import React from 'react';
import { render } from '@testing-library/react';
import { mockFlight } from '../../../helpers/mocks';
import Flight from './Flight';

describe('<Flight />', () => {
  test('renders Flight component properly', () => {
    const { getByText } = render(<Flight {...mockFlight} />);

    expect(getByText('Paris (CDG)')).toBeInTheDocument();
    expect(getByText('12:00 - 11:45')).toBeInTheDocument();
    expect(getByText('€ 64,00')).toBeInTheDocument();
  });
});
