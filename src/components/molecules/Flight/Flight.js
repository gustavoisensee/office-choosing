import React from 'react';
import { formatPrice, formatTime } from '../../../helpers/utils';
import styles from '../../organisms/City/City.module.css';

const Flight = ({ cityTo, flyTo, price, dTime, aTime, deep_link: link }) => (
  <a href={link} rel='noopener noreferrer' target='_blank'>
    <div className={styles.cityChildContainer}>
      <span className={styles.smallFont}>
        {`${cityTo} (${flyTo})`}
      </span>
      <span className={styles.smallFont}>
        {`${formatTime(dTime)} - ${formatTime(aTime)}`}
      </span>
      <span>{formatPrice(price)}</span>
    </div>
  </a>
);

export default Flight;