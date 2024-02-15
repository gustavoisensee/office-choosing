import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sleep } from '../../../helpers/utils';
import FlightContainer from '../FlightContainer';
import WeatherContainer from '../WeatherContainer';
import loading from '../../../assets/loading.png';
import { cityItemProps } from './types';
import cityStyles from './CityItem.module.css';
import styles from '../../../App.module.css';

const CityItem: FC<cityItemProps> = ({ name, nameForecast, cityIdForecast, flyFrom, flyTo, img }) => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async() => {
    // For tests purpose I'm adding a timeout
    try {
      setSubmitting(true);
      await sleep(2000);
      navigate('/chosen', { state: { name, img } });

    } catch (err) {
      // I'd add a error tracker like Sentry
      setSubmitting(false);
    }
  }

  return (
    <div className={styles.flex}>
      <FlightContainer flyFrom={flyFrom} flyTo={flyTo} />
      <WeatherContainer name={name} nameForecast={nameForecast} cityIdForecast={cityIdForecast} />

      <div>
        <button
          data-testid='submit'
          type='button'
          disabled={submitting}
          className={cityStyles.button}
          onClick={handleSubmit}
        >
          <span>Choose this office!</span>
          {submitting && (
            <img alt='' src={loading} className={cityStyles.loading} />
          )}
        </button>
      </div>
    </div>
  );
};

export default CityItem;