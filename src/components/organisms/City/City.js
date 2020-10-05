import React, { Fragment, useState } from 'react';
import dayjs from 'dayjs';
import styles from './City.module.css';

const weatherForecast = {"cod":"200","message":0,"cnt":7,"list":[{"dt":1601888400,"main":{"temp":10.85,"feels_like":5.89,"temp_min":10.8,"temp_max":10.85,"pressure":994,"sea_level":994,"grnd_level":993,"humidity":85,"temp_kf":0.05},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":87},"wind":{"speed":6.57,"deg":175},"visibility":10000,"pop":0.94,"rain":{"3h":0.65},"sys":{"pod":"d"},"dt_txt":"2020-10-05 09:00:00"},{"dt":1601899200,"main":{"temp":11.92,"feels_like":7.14,"temp_min":11.92,"temp_max":12.2,"pressure":995,"sea_level":995,"grnd_level":995,"humidity":85,"temp_kf":-0.28},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":95},"wind":{"speed":6.69,"deg":198},"visibility":10000,"pop":1,"rain":{"3h":2.97},"sys":{"pod":"d"},"dt_txt":"2020-10-05 12:00:00"},{"dt":1601910000,"main":{"temp":13.76,"feels_like":10.03,"temp_min":13.76,"temp_max":13.96,"pressure":996,"sea_level":996,"grnd_level":995,"humidity":76,"temp_kf":-0.2},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":84},"wind":{"speed":5.24,"deg":213},"visibility":10000,"pop":0.96,"rain":{"3h":1.36},"sys":{"pod":"d"},"dt_txt":"2020-10-05 15:00:00"},{"dt":1601920800,"main":{"temp":11.69,"feels_like":8.96,"temp_min":11.69,"temp_max":11.7,"pressure":997,"sea_level":997,"grnd_level":996,"humidity":83,"temp_kf":-0.01},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":53},"wind":{"speed":3.55,"deg":197},"visibility":10000,"pop":0.88,"rain":{"3h":0.2},"sys":{"pod":"n"},"dt_txt":"2020-10-05 18:00:00"},{"dt":1601931600,"main":{"temp":12.65,"feels_like":9.24,"temp_min":12.65,"temp_max":12.65,"pressure":997,"sea_level":997,"grnd_level":996,"humidity":85,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":82},"wind":{"speed":5.01,"deg":200},"visibility":10000,"pop":0.8,"rain":{"3h":0.75},"sys":{"pod":"n"},"dt_txt":"2020-10-05 21:00:00"},{"dt":1601942400,"main":{"temp":12.44,"feels_like":9.01,"temp_min":12.44,"temp_max":12.44,"pressure":997,"sea_level":997,"grnd_level":996,"humidity":92,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":91},"wind":{"speed":5.44,"deg":211},"visibility":5191,"pop":0.89,"rain":{"3h":1.79},"sys":{"pod":"n"},"dt_txt":"2020-10-06 00:00:00"},{"dt":1601953200,"main":{"temp":13.08,"feels_like":9.07,"temp_min":13.08,"temp_max":13.08,"pressure":997,"sea_level":997,"grnd_level":996,"humidity":82,"temp_kf":0},"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10n"}],"clouds":{"all":100},"wind":{"speed":5.83,"deg":248},"visibility":10000,"pop":1,"rain":{"3h":3.18},"sys":{"pod":"n"},"dt_txt":"2020-10-06 03:00:00"}],"city":{"id":2759794,"name":"Amsterdam","coord":{"lat":52.374,"lon":4.8897},"country":"NL","population":2122311,"timezone":7200,"sunrise":1601876922,"sunset":1601917714}};

const today = dayjs();

const Test = () => (
  <div>
    <h2>Test title</h2>
    <span>Test span</span>
    <p>Test Test Test Test Test Test Test Test Test Test Test </p>
    <h2>Weather</h2>
    <div className={styles.cityContainer}>
      {weatherForecast.list.map((f, i) => {
        const temperature = f.main;
        const [weather] = f.weather;
        const { id, description, icon } = weather;

        return (
          <div key={id} className={styles.cityWeatherContainer}>
            <span>{`${Math.round(temperature.temp)}°C`}</span>
            <span className={styles.smallFont}>{today.add(i, 'day').format('ddd')}</span>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} className={styles.icon} alt={description} />
            <span className={styles.smallFont}>{description}</span>
          </div>
        )
      })}
    </div>
  </div>
);



const City = ({ name, img }) => {
  const [inProp, setInProp] = useState(false);

  return (
    <Fragment>
      <div className={styles.container} onClick={() => setInProp(!inProp)}>
        <img src={img} alt='' className={styles.cityIcon} />
        {name}
      </div>
      <div className={inProp ? styles.open : styles.closed}>
        {inProp && <Test />}
      </div>
    </Fragment>
  );
};

export default City;