import { FC, Fragment } from 'react';
import Lottie from 'react-lottie';
import { useQuery } from '@tanstack/react-query';
import Weather from '../../molecules/Weather/Weather';
import weatherLoading from '../../../assets/weather-loading.json';
import {
  defaultOptions, errorMessage,
  fetcher,
  getWeatherCityUrl, getWeatherUrl
} from '../../../helpers/utils';
import { weatherContainerProps } from './types';
import { weatherType } from '../../molecules/Weather/types';
import weatherStyles from './WeatherContainer.module.css';
import styles from '../../../App.module.css';

const CityItem: FC<weatherContainerProps> = ({ name, nameForecast, cityIdForecast }) => {
  const weatherUrl = getWeatherUrl(nameForecast);

  const { error: errorWeather, data: weatherForecast } = useQuery({
    queryKey: ['weather', nameForecast],
    queryFn: () => fetcher(weatherUrl),
    staleTime: 60 * 1000 * 10, // 10min
    retryDelay: 3 * 1000, // 3s
    retry: 3
  })

  return (
    <Fragment>
      <h2>Weather</h2>
      <div className={styles.subContainer}>
        {errorWeather && <span>{errorMessage}</span>}
        {!weatherForecast ? (
          <div data-testid='weather-loading' className={styles.flex}>
            <Lottie options={defaultOptions(weatherLoading)} height={80} width={80} />
          </div>
        ) : (
          <a
            className={weatherStyles.weatherLink} href={getWeatherCityUrl(cityIdForecast)}
            rel='noopener noreferrer' target='_blank'
          >
            {weatherForecast?.list?.map((w: weatherType, i: number) => (
              <Weather key={`${name}-${i}`} weather={w} index={i} />
            ))}
          </a>
        )}
      </div>
    </Fragment>
  );
};

export default CityItem;