import { FC, Fragment, useState } from 'react';
import Lottie from 'react-lottie';
import { useQuery } from '@tanstack/react-query';

import Flight from '../../molecules/Flight';
import flightLoading from '../../../assets/flight-loading.json';
import {
  defaultOptions, errorMessage,
  flightOptions,
  flightUrl,
  getFlightData,
  nextWeek,
  post
} from '../../../helpers/utils';
import { FlightContainerProps } from './types';
import styles from '../../../App.module.css';
import flightStyles from './FlightContainer.module.css';
import { Carriers, FlightPrices } from '../../molecules/Flight/types';

const FlightContainer: FC<FlightContainerProps> = ({ flyFrom, flyTo }) => {
  const [date, setDate] = useState(nextWeek.format('YYYY-MM-DD'));
  const data = getFlightData(flyFrom, flyTo, date);

  const { error: errorFlights, data: flights, isFetching } = useQuery({
    queryKey: ['flights', date, flyTo],
    queryFn: () => post(flightUrl, data, flightOptions),
    staleTime: 60 * 1000 * 10, // 10min
    retryDelay: 3 * 1000, // 3s
    retry: 3
  })

  const finalFlights: FlightPrices[] = Object.values(flights?.data?.content?.results?.quotes || {});
  const carries: Carriers = flights?.data?.content?.results?.carriers || {};

  return (
    <Fragment>
      <h2>Flights</h2>
      <input
        data-testid='date'
        type='date'
        placeholder='DD/MM/YYYY'
        className={flightStyles.input}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <div className={styles.subContainer}>
        {errorFlights && <span>{errorMessage}</span>}
        {!isFetching && finalFlights?.length === 0 && (
          <span>There's no flights for the day selected, please try another day!</span>
        )}
        {isFetching ? (
          <div data-testid='flight-loading' className={styles.flex}>
            <Lottie options={defaultOptions(flightLoading)} height={100} width={100} />
          </div>
        ) : (
          finalFlights?.map((f: FlightPrices, i: number) => (
            <Flight key={`${flyTo}-${i}`} {...f} flyFrom={flyFrom} flyTo={flyTo} carriers={carries} />
          ))
        )}
      </div>
    </Fragment>
  );
};

export default FlightContainer;