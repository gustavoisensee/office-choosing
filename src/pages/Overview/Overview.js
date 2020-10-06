import React from 'react';
import City from '../../components/organisms/City';
import styles from './Overview.module.css';

const cities = [
  {
    name: 'Amsterdam', nameForecast: 'Amsterdam,NL',
    flyFrom: 'AMS', flyTo: 'BER,LHR,CDG,FCO,MAD', img: 'assets/amsterdam.jpg'
  },
  {
    name: 'Madrid', nameForecast: 'Madrid,ES',
    flyFrom: 'MAD', flyTo: 'BER,LHR,CDG,FCO,AMS', img: 'assets/madrid.jpg'
  },
  {
    name: 'Budapest', nameForecast: 'Budapest,HU',
    flyFrom: 'BUD', flyTo: 'BER,LHR,CDG,FCO,MAD', img: 'assets/budapest.jpeg'
  }
];

const App = () => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <h1>Choose your next Office!</h1>
      <span>Click at the blocks below to know more about the cities.</span>
    </div>
    {cities.map((city, i) => (
      <City key={`${city.name}-${i}`} {...city} />
    ))}
  </div>
);

export default App;
