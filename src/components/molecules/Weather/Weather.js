import React from 'react';
import dayjs from 'dayjs';
import { getWeatherImg } from '../../../helpers/utils';
import stylesIndex from '../../../index.module.css';
import stylesWeather from './Weather.module.css';

const today = dayjs();

const Weather = ({ weather, index }) => {
  const temperature = weather?.main || {};
  const { description, icon } = weather?.weather?.[0] || {};

  return (
    <div className={stylesIndex.childContainer}>
      <span>{`${Math.round(temperature.temp)}°C`}</span>
      <span className={stylesIndex.smallFont}>
        {today.add(index, 'day').format('ddd')}
      </span>
      <img src={getWeatherImg(icon)} className={stylesWeather.icon} alt={description} />
      <span className={stylesIndex.smallFont}>{description}</span>
    </div>
  )
};

export default Weather;