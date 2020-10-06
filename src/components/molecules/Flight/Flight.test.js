import React from 'react';
import { render } from '@testing-library/react';
import Flight from './Flight';

const mockFlight = {
  cityTo: 'Paris',
  flyTo: 'CDG',
  price: 64,
  dTime: 1602583200,
  aTime: 1602668700,
  deep_link: 'https://www.kiwi.com/deep?from=AMS&to=CDG&departure=13-10-2020&flightsId=10e8125b48740000f6d9e7cf_0%7C125b25c3487500005e5261fc_0&price=64&passengers=1&affilid=picky&lang=en&currency=EUR&booking_token=AMiCgcoszwJyiZ2feCjOoWg77RZWaJvXZSty7K_5lhC5V4Cntv4jteU-RUwuY1E_pBHYw7Wc_9_rvRAsMqWg4ip6y97Urm3F5OMBvnnnitLCjQISUXAHTd1lapigqBnR0Bl1j6L6PHvj0N4aC50GXdziyVXrEUMKIxqd5OiXRcuexnhD7d7V2MMr8doftbSX_Fo0mFqD2wxM5SjRyzjItwDUJcl8fvI62yP2VDnAbBuiv-58gZafMJ78gaFraDCudAdscSWULg_qJlZp2BZzEc0c6fKLFcSl7yahCEaETVHS...',
};

describe('<Flight />', () => {
  test('renders Flight component properly', () => {
    const { getByText } = render(<Flight {...mockFlight} />);

    expect(getByText('Paris (CDG)')).toBeInTheDocument();
    expect(getByText('12:00 - 11:45')).toBeInTheDocument();
    expect(getByText('€ 64,00')).toBeInTheDocument();
  });
});
