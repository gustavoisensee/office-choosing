
import React from 'react';
import useSWR from 'swr';
import { useHistory } from 'react-router-dom';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import CityItem from './CityItem';
import { mockFlight, mockWeatherForecast } from '../../../helpers/mocks';

const mockCityItem = {
  name: 'Amsterdam',
  nameForecast: 'Amsterdam,NL',
  flyFrom: 'AMS',
  flyTo: 'BER,LHR,CDG,FCO,MAD',
  img: 'assets/amsterdam.jpg'
};

jest.mock('react-router-dom', () => ({ useHistory: jest.fn() }));

describe('<CityItem />', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test('renders animations when there\'s no response from server yet', () => {
    useSWR.mockImplementation(() => ({ data: undefined, error: undefined }));

    const { getByTestId, getByText, queryByTestId } = render(<CityItem {...mockCityItem} />);

    expect(getByText('Flights')).toBeInTheDocument();
    expect(getByText('Weather')).toBeInTheDocument();
    expect(getByTestId('date')).toBeInTheDocument();
    expect(queryByTestId('flight-loading')).toBeInTheDocument();
    expect(queryByTestId('weather-loading')).toBeInTheDocument();
  });

  test('renders message "There\'s no flights" when response is empty', () => {
    useSWR.mockImplementationOnce(() => ({ data: { data: [] }, error: undefined }));
    const { getByText, queryByTestId } = render(<CityItem {...mockCityItem} />);

    expect(queryByTestId('flight-loading')).not.toBeInTheDocument();
    expect(getByText(/no flights/)).toBeInTheDocument();
  });

  test('renders the list of flights', () => {
    useSWR.mockImplementationOnce(() => ({ data: { data: [mockFlight] }, error: undefined }));
    const { getByText } = render(<CityItem {...mockCityItem} />);

    expect(getByText('Paris (CDG)')).toBeInTheDocument();
  });

  test('renders the list of weather', () => {
    // This mocks flights
    useSWR.mockImplementationOnce(() => ({ data: { data: [] }, error: undefined }));
    // This mocks weather
    useSWR.mockImplementationOnce(() => ({ data: { list: [mockWeatherForecast.weather] }, error: undefined }));
    const { getByText } = render(<CityItem {...mockCityItem} />);

    expect(getByText(/no flights/)).toBeInTheDocument();
    expect(getByText('12°C')).toBeInTheDocument();
  });

  test('renders error messages when calls failed', () => {
    useSWR.mockImplementation(() => ({ data: undefined, error: true }));
    const { queryAllByText } = render(<CityItem {...mockCityItem} />);

    expect(queryAllByText(/Something went wrong/)).toHaveLength(2);
  });

  test('selects the city when button is pressed', async() => {
    const push = jest.fn();
    useHistory.mockImplementation(() => ({ push }));
    useSWR.mockImplementation(() => ({ data: undefined, error: true }));
    const { getByTestId } = render(<CityItem {...mockCityItem} />);

    fireEvent.click(getByTestId('submit'));

    await wait(() => expect(push).toHaveBeenCalledWith(
      '/chosen', { img: 'assets/amsterdam.jpg', name: 'Amsterdam' }
    ));
  });
});
