export const mockCity = {
  name: "Amsterdam",
  nameForecast: "Amsterdam,NL",
  flyFrom: "AMS",
  flyTo: "BER,LHR,CDG,FCO,MAD",
  img: "assets/amsterdam.jpg"
};

export const mockFlight = {
  cityTo: 'Paris',
  flyTo: 'CDG',
  price: 64,
  dTime: 1602583200,
  aTime: 1602668700,
  deep_link: 'https://www.kiwi.com/deep?from=AMS&to=CDG&departure=13-10-2020&flightsId=flight-id-test&price=64&passengers=1&affilid=picky&lang=en&currency=EUR&booking_token=test',
};


export const mockWeatherForecast = {
  weather: {
    dt: 1602018000,
    main: {
      temp: 12.15,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10n'
      }
    ],
  },
  'index': 1
};

export const cities = [
  {
    name: 'Amsterdam', nameForecast: 'Amsterdam,NL', cityIdForecast: 2759794,
    flyFrom: 'AMS', flyTo: 'BER,LHR,CDG,FCO,MAD', img: 'assets/amsterdam.jpg'
  },
  {
    name: 'Madrid', nameForecast: 'Madrid,ES', cityIdForecast: 3117735,
    flyFrom: 'MAD', flyTo: 'BER,LHR,CDG,FCO,AMS', img: 'assets/madrid.jpg'
  },
  {
    name: 'Budapest', nameForecast: 'Budapest,HU', cityIdForecast: 3054643,
    flyFrom: 'BUD', flyTo: 'BER,LHR,CDG,FCO,MAD', img: 'assets/budapest.jpeg'
  }
];
