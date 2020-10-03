import React, { Fragment, useState } from 'react';
import styles from './City.module.css';

const Test = () => (
  <div>
    <h2>Test title</h2>
    <span>Test span</span>
    <p>Test Test Test Test Test Test Test Test Test Test Test </p>
  </div>
)

const City = ({ name }) => {
  const [inProp, setInProp] = useState(false);

  return (
    <Fragment>
      <div className={styles.container} onClick={() => setInProp(!inProp)}>
        {name}
      </div>
      <div className={inProp ? styles.open : styles.closed}>
        {inProp && <Test />}
      </div>
    </Fragment>
  );
};

export default City;