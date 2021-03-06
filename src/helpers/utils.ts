import dayjs, {  } from 'dayjs';
import axios from 'axios';

export const formatPrice = (value: number): string =>
  new Intl.NumberFormat(
    'nl-NL', {
      style: 'currency',
      currency: 'EUR',
      currencyDisplay: 'symbol',
    }
  ).format(value);

export const getWeatherImg = (icon: string): string =>
  `https://openweathermap.org/img/wn/${icon}@2x.png`;

export const formatTime = (time: number): string => dayjs.unix(time).format('HH:mm');

export const errorMessage: string = 'Something went wrong, please try again!';

export const nextWeek: dayjs.Dayjs = dayjs().add(7, 'day');

export const fetcher = (url: string): any => axios.get(url).then(res => res.data);

type fetchType = {
  revalidateOnFocus: boolean;
  errorRetryCount: number;
}
export const fetchOptions: fetchType = { revalidateOnFocus: false, errorRetryCount: 10 };

export const sleep = (ms: number): Promise<Function> => new Promise(resolve => setTimeout(resolve, ms));

type animationType = {
  loop: boolean;
  autoplay: boolean;
  animationData: any,
  rendererSettings: {
    preserveAspectRatio: string
  }
};
export const defaultOptions = (animationData: any): animationType => ({
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
const proxy: string = 'https://cors-anywhere.herokuapp.com/';

// Only for test purpose the API_TOKEN is being passed by Url
// In a real world I'd send it by cookies gotten from Backend previously
// Cookies are safer, just adding Headers credentials include should do the magic
export const getWeatherUrl = (place: string): string =>
  `${proxy}http://api.openweathermap.org/data/2.5/forecast?q=${place}&cnt=7&units=metric&appid=${process.env.REACT_APP_WEATHER_API_TOKEN}`;

// I believe the same logic would be applied here for partner parameter
export const getFlightUrl = (flyFrom: string, flyTo: string, date: string): string =>
  `https://api.skypicker.com/flights?flyFrom=${flyFrom}&to=${flyTo}&dateFrom=${date}&dateTo=${date}&partner=picky&v=3&one_for_city=1`;

export const getWeatherCityUrl = (cityId: number): string => `https://openweathermap.org/city/${cityId}`;
