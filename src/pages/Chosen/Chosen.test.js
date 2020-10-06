import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Chosen from './Chosen';

const defaultProps = {
  location: {
    state: {
      name: 'Test',
      img: 'test.png'
    }
  },
  push: jest.fn()
};

describe('<Chosen />', () => {
  it('renders Chosen component properly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Chosen history={defaultProps} />
      </MemoryRouter>
    );
    const title = getByText('You have chosen Test!');
    expect(title).toBeInTheDocument();
  });

  it('redirects to Overview route if there is no state passed', () => {
    const push = jest.fn();
    render(
      <MemoryRouter>
        <Chosen history={{ push }} />
      </MemoryRouter>
    );

    expect(push).toHaveBeenCalled();
  });
})
