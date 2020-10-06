import React from 'react';
import { render } from '@testing-library/react';
import Weather from './Weather';

const mockWeatherForecast = {
  weather: {
    dt: 1602018000,
    main: {
      temp: 12.15,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10n'
      }
    ],
  },
  'index': 1
};

describe('<Weather />', () => {
  test('renders Weather component properly', () => {
    const { getByText } = render(<Weather {...mockWeatherForecast} />);

    expect(getByText('12°C')).toBeInTheDocument();
    expect(getByText('Wed')).toBeInTheDocument();
    expect(getByText('light rain')).toBeInTheDocument();
  });
});
