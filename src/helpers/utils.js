import dayjs from 'dayjs';
import axios from 'axios';

export const formatPrice = (value) =>
  new Intl.NumberFormat(
    'nl-NL', {
      style: 'currency', currency: 'EUR'
    }
  ).format(value);

export const getWeatherImg = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

export const formatTime = (time) => dayjs.unix(time).format('HH:mm');

export const errorMessage = 'Something went wrong, please try again!';

export const nextWeek = dayjs().add(7, 'day');

export const fetcher = url => axios.get(url).then(res => res.data);

export const defaultOptions = (animationData) => ({
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
});

// Used proxy cors-anywhere because open weather do not accept cors
// In a real world, I would use the company own proxy which can be trusted
// For more info: https://github.com/Rob--W/cors-anywhere
const proxy = 'https://cors-anywhere.herokuapp.com/';

// Only for test purpose the API_TOKEN is being passed by Url
// In a real world I'd send it by cookies gotten from Backend previously
// Cookies are safer, just adding Headers credentials include should do the magic
export const getWeatherUrl = (place) =>
  `${proxy}http://api.openweathermap.org/data/2.5/forecast?q=${place}&cnt=7&units=metric&appid=${process.env.REACT_APP_WEATHER_API_TOKEN}`;

// I believe the same logic would be applied here for partner parameter
export const getFlightUrl = (flyFrom, flyTo, date) =>
  `https://api.skypicker.com/flights?flyFrom=${flyFrom}&to=${flyTo}&dateFrom=${date}&dateTo=${date}&partner=picky&v=3&one_for_city=1`;