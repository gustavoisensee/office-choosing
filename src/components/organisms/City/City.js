import React, { Fragment, useState } from 'react';
import CityItem from '../CityItem/CityItem';
import arrowImg from '../../../assets/arrow.png';
import styles from './City.module.css';

const City = ({ name, nameForecast, flyFrom, flyTo, img }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      <div className={styles.container} onClick={() => setToggle(!toggle)}>
        <div className={styles.titleContainer}>
          <img src={img} alt='' className={styles.cityIcon} />
          {name}
        </div>
        <img src={arrowImg} alt='' className={toggle ? styles.arrowIconOpen : styles.arrowIcon} />
      </div>
      <div className={toggle ? styles.open : styles.closed}>
        {toggle && (
          <CityItem name={name} flyFrom={flyFrom} flyTo={flyTo} nameForecast={nameForecast} />
        )}
      </div>
    </Fragment>
  );
};

export default City;