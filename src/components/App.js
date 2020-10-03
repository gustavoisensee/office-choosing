import React from 'react';
import City from './organisms/City';
import styles from './App.module.css';

const cities = [
  { name: 'Amsterdam,NL' },
  { name: 'London,UK' },
  { name: 'Berlin,GE' }
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
