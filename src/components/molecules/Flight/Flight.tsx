import { FC } from 'react';
import { formatPrice, formatTime } from '../../../helpers/utils';
import { FlightProps } from './types';
import stylesIndex from '../../../App.module.css';
import stylesFlight from './Flight.module.css';

const Flight: FC<FlightProps> = ({ segments, priceBreakdown, flyFrom, flyTo }) => {
  const [seg] = segments;
  const [flyFromFirstPart] = flyFrom.split('.');
  const [flyToFirstPart] = flyTo.split('.');

  return (
    <div className={stylesFlight.link}>
      <div className={stylesIndex.childContainer}>
        <span className={stylesIndex.smallFont}>
          {`${flyFromFirstPart} → ${flyToFirstPart}`}
        </span>
        <span className={stylesIndex.smallFont}>
          {`${formatTime(seg.departureTime)} - ${formatTime(seg.arrivalTime)}`}
        </span>
        <span>{formatPrice(priceBreakdown.total.units)}</span>
      </div>
    </div>
  );
}

export default Flight;