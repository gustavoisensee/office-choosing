import React from 'react';
import City from '../../components/organisms/City';
import { cities } from '../../helpers/mocks';
import styles from './Overview.module.css';

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
