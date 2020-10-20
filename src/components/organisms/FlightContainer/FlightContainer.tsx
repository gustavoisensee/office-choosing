/* eslint-disable no-useless-escape */
import React, { FC, Fragment, useState } from 'react';
import Lottie from 'react-lottie';
import dayjs from 'dayjs';
import useSWR from 'swr';
import Flight from '../../molecules/Flight';
import flightLoading from '../../../assets/flight-loading.json';
import {
  defaultOptions, errorMessage, fetcher,
  fetchOptions,
  getFlightUrl, nextWeek
} from '../../../helpers/utils';
import { FlightContainerProps } from './types';
import styles from '../../../index.module.css';
import flightStyles from './FlightContainer.module.css';
import { flightProps } from '../../molecules/Flight/types';

const FlightContainer: FC<FlightContainerProps> = ({ flyFrom, flyTo }) => {
  const [date, setDate] = useState(nextWeek.format('YYYY-MM-DD'));
  const flightUrl = getFlightUrl(flyFrom, flyTo, dayjs(date).format('DD/MM/YYYY'));
  const { data: flights, error: errorFlights } = useSWR(flightUrl, fetcher, fetchOptions);

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
        {flights?.data?.length === 0 && (
          <span>There's no flights for the day selected, please try another day!</span>
        )}
        {!flights ? (
          <div data-testid='flight-loading' className={styles.flex}>
            <Lottie options={defaultOptions(flightLoading)} height={100} width={100} />
          </div>
        ) : (
          flights?.data?.map((f: flightProps, i: number) => (
            <Flight key={`${f.id}-${i}`} {...f} />
          ))
        )}
      </div>
    </Fragment>
  );
};

export default FlightContainer;