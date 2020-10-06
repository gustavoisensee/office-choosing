import React from 'react';
import { render } from '@testing-library/react';
import { mockWeatherForecast } from '../../../helpers/mocks';
import Weather from './Weather';

describe('<Weather />', () => {
  test('renders Weather component properly', () => {
    const { getByText } = render(<Weather {...mockWeatherForecast} />);

    expect(getByText('12°C')).toBeInTheDocument();
    expect(getByText('Wed')).toBeInTheDocument();
    expect(getByText('light rain')).toBeInTheDocument();
  });
});
