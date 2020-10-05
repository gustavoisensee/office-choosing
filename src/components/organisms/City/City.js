import React, { Fragment, useState } from 'react';
import CityItem from '../CityItem/CityItem';
import styles from './City.module.css';

const City = ({ name, nameForecast, flyFrom, flyTo, img }) => {
  const [inProp, setInProp] = useState(false);

  return (
    <Fragment>
      <div className={styles.container} onClick={() => setInProp(!inProp)}>
        <img src={img} alt='' className={styles.cityIcon} />
        {name}
      </div>
      <div className={inProp ? styles.open : styles.closed}>
        {inProp && (
          <CityItem name={name} flyFrom={flyFrom} flyTo={flyTo} nameForecast={nameForecast} />
        )}
      </div>
    </Fragment>
  );
};

export default City;