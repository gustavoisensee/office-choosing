import { FC } from 'react';
import { formatPrice } from '../../../helpers/utils';
import { FlightProps } from './types';
import stylesIndex from '../../../App.module.css';
import stylesFlight from './Flight.module.css';

const Flight: FC<FlightProps> = ({ outboundLeg, minPrice, flyFrom, flyTo, carriers }) => {
  const carrier = carriers?.[outboundLeg?.marketingCarrierId] || null;
  return (
    <div className={stylesFlight.link}>
      <div className={stylesIndex.childContainer}>

        {carrier && <>
          <img src={carrier.imageUrl} width={100} className={stylesFlight.carrierImage} />
          <span className={stylesIndex.smallFont}>
            {carrier.name}
          </span>
        </>}
        <span className={stylesIndex.smallFont}>
          {`${flyFrom} → ${flyTo}`}
        </span>
        <span>{formatPrice(minPrice.amount)}</span>
      </div>
    </div>
  );
}

export default Flight;