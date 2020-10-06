/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';
import useSWR from 'swr';
import Flight from '../../molecules/Flight';
import Weather from '../../molecules/Weather/Weather';
import flightLoading from '../../../assets/flight-loading.json';
import weatherLoading from '../../../assets/weather-loading.json';
import loading from '../../../assets/loading.png';
import {
  defaultOptions, errorMessage, fetcher,
  getFlightUrl, getWeatherUrl, nextWeek, sleep
} from '../../../helpers/utils';
import styles from '../City/City.module.css';
import stylesItem from './CityItem.module.css';

const CityItem = ({ name, nameForecast, flyFrom, flyTo, img }) => {
  const history = useHistory();
  const [submitting, setSubmitting] = useState(false);
  const [date, setDate] = useState(nextWeek.format('YYYY-MM-DD'));

  const flightUrl = getFlightUrl(flyFrom, flyTo, dayjs(date).format('DD/MM/YYYY'));
  const { data: flights, errorFlights } = useSWR(flightUrl, fetcher);

  const weatherUrl = getWeatherUrl(nameForecast);
  const { data: weatherForecast, errorWeather } = useSWR(weatherUrl, fetcher);

  const handleSubmit = async() => {
    // For tests purpose I'm adding a timeout
    try {
      setSubmitting(true);
      await sleep(3000);
      history.push('/chosen', { name, img })

    } catch (err) {
      // I'd add a error tracker like Sentry
      setSubmitting(false);
    }
  }

  return (
    <div className={styles.flex}>
      <h2>Flights</h2>
      <input
        type='date'
        placeholder='DD/MM/YYYY'
        className={styles.input}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <div className={styles.cityContainer}>
        {errorFlights && <span>{errorMessage}</span>}
        {flights?.data?.length === 0 && (
          <span>There's no flights for the day selected, please try another day!</span>
        )}
        {!flights ? (
          <Lottie options={defaultOptions(flightLoading)} height={100} width={100} />
        ) : (
          flights.data.map((f, i) => (
            <Flight key={`${f.id}-${i}`} {...f} />
          ))
        )}
      </div>

      <h2>Weather</h2>
      <div className={styles.cityContainer}>
      {errorWeather && <span>{errorMessage}</span>}
        {!weatherForecast ? (
          <Lottie options={defaultOptions(weatherLoading)} height={80} width={80}
          />
        ) : (
          weatherForecast.list.map((w, i) => (
            <Weather key={`${name}-${i}`} weather={w} index={i} />
          ))
        )}
      </div>

      <div>
        <button
          type='button'
          disabled={submitting}
          className={stylesItem.button}
          onClick={handleSubmit}
        >
          <span>Choose this office!</span>
          {submitting && (
            <img alt='' src={loading} className={stylesItem.loading} />
          )}
        </button>
      </div>
    </div>
  );
};

export default CityItem;