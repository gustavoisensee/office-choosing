import React from 'react';
import dayjs from 'dayjs';
import styles from '../../organisms/City/City.module.css';
import { getWeatherImg } from '../../../helpers/utils';

const today = dayjs();

const Weather = ({ weather, index }) => {
  const temperature = weather?.main || {};
  const { description, icon } = weather?.weather?.[0] || {};

  return (
    <div className={styles.cityChildContainer}>
      <span>{`${Math.round(temperature.temp)}°C`}</span>
      <span className={styles.smallFont}>
        {today.add(index, 'day').format('ddd')}
      </span>
      <img src={getWeatherImg(icon)} className={styles.icon} alt={description} />
      <span className={styles.smallFont}>{description}</span>
    </div>
  )
};

export default Weather;