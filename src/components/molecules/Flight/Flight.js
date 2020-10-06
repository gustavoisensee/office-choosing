import React from 'react';
import { formatPrice, formatTime } from '../../../helpers/utils';
import stylesIndex from '../../../index.module.css';
import stylesFlight from './Flight.module.css';

const Flight = ({ cityTo, flyTo, price, dTime, aTime, deep_link: link }) => (
  <a href={link} rel='noopener noreferrer' target='_blank' className={stylesFlight.link}>
    <div className={stylesIndex.childContainer}>
      <span className={stylesIndex.smallFont}>
        {`${cityTo} (${flyTo})`}
      </span>
      <span className={stylesIndex.smallFont}>
        {`${formatTime(dTime)} - ${formatTime(aTime)}`}
      </span>
      <span>{formatPrice(price)}</span>
    </div>
  </a>
);

export default Flight;