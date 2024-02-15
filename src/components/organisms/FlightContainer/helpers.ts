import dayjs from 'dayjs';
import { AxiosRequestConfig } from 'axios';

export const url = 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights';

export const getOptions = (flyFrom: string, flyTo: string, date: string) => ({
  method: 'GET',
  params: {
    fromId: flyFrom,
    toId: flyTo,
    departDate: dayjs(date).format('YYYY-MM-DD'),
    pageNo: '1',
    adults: '1',
    children: '0,17',
    currency_code: 'EUR'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST
  }
} as AxiosRequestConfig);