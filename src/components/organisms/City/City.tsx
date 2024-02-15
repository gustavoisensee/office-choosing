import { FC, Fragment, useState } from 'react';
import CityItem from '../CityItem/CityItem';
import arrowImg from '../../../assets/arrow.png';
import styles from './City.module.css';
import { cityProps } from './types';

const City: FC<cityProps> = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      <div data-testid='city' className={styles.container} onClick={() => setToggle(!toggle)}>
        <div className={styles.titleContainer}>
          <img src={props.img} alt='' className={styles.cityIcon} />
          {props.name}
        </div>
        <img src={arrowImg} alt='' className={toggle ? styles.arrowIconOpen : styles.arrowIcon} />
      </div>
      <div className={toggle ? styles.open : styles.closed}>
        {toggle && <CityItem {...props} />}
      </div>
    </Fragment>
  );
};

export default City;