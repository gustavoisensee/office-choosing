import dayjs from "dayjs";
import axios, { AxiosRequestConfig } from "axios";

export const formatPrice = (value: number): string =>
  new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    currencyDisplay: "symbol",
  }).format(value);

export const getWeatherImg = (icon: string): string =>
  `https://openweathermap.org/img/wn/${icon}@2x.png`;

export const formatTime = (time: string): string => dayjs(time).format("HH:mm");

export const errorMessage: string = "Something went wrong, please try again!";

export const nextWeek: dayjs.Dayjs = dayjs().add(7, "day");

export const fetcher = (url: string, options: AxiosRequestConfig = {}) =>
  axios.get(url, options).then((res) => res.data);

export const post = (
  url: string,
  data: unknown,
  options: AxiosRequestConfig = {}
) => axios.post(url, data, options);

type fetchType = {
  revalidateOnFocus: boolean;
  errorRetryCount: number;
};
export const fetchOptions: fetchType = {
  revalidateOnFocus: false,
  errorRetryCount: 10,
};

export const sleep = (ms: number): Promise<unknown> =>
  new Promise((resolve) => setTimeout(resolve, ms));

type animationType = {
  loop: boolean;
  autoplay: boolean;
  animationData: unknown;
  rendererSettings: {
    preserveAspectRatio: string;
  };
};
export const defaultOptions = (animationData: unknown): animationType => ({
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});

export const getWeatherUrl = (place: string): string =>
  `/weather/data/2.5/forecast?q=${place}&cnt=7&units=metric&appid=${
    import.meta.env.VITE_WEATHER_API_TOKEN
  }`;

export const getWeatherCityUrl = (cityId: number): string =>
  `https://openweathermap.org/city/${cityId}`;

export const flightUrl = "/flights/apiservices/v3/flights/indicative/search";

export const flightOptions: AxiosRequestConfig = {
  headers: {
    "x-api-key": "sh428739766321522266746152871799", // flyscanner public api / limited access
  },
};

export const getFlightData = (from: string, to: string, date: string) => {
  const cDate = dayjs(date);

  return {
    query: {
      market: "UK",
      locale: "en-GB",
      currency: "EUR",
      queryLegs: [
        {
          originPlace: {
            queryPlace: {
              iata: from,
            },
          },
          destinationPlace: {
            queryPlace: {
              iata: to,
            },
          },
          fixedDate: {
            year: cDate.year(),
            month: cDate.month() + 1,
            day: cDate.date(),
          },
        },
      ],
    },
  };
};
