import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { chosenProps } from './types';
import styles from './Chosen.module.css';

const Chosen: FC<chosenProps> = ({ history }) => {
  const { name, img } = history?.location?.state || {};

  useEffect(() => {
    if (!name) history.push('/');
  }, [history, name]);

  return (
    <div className={styles.container}>
      <h1>You have chosen {name}!</h1>
      <img src={img} alt={name} className={styles.image} />
      <span className={styles.span}>
        We hope you'll enjoy working from {name}, it is a lovely office!
      </span>
      <Link to='/' className={styles.link}>
        Feel free to choose another city!
      </Link>
    </div>
  );
};

export default Chosen;