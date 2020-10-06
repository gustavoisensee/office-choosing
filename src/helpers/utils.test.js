import {
  formatPrice, getWeatherImg, formatTime,
  defaultOptions, getWeatherUrl, getFlightUrl, getWeatherCityUrl
} from './utils';

describe('utils', () => {
  it('formatPrice should contain ,00', () => {
    expect(formatPrice(50)).toEqual(expect.stringContaining(',00'));
  });

  it('getWeatherImg should return http://openweathermap.org/img/wn/x1@2x.png', () => {
    expect(getWeatherImg('x1')).toBe('http://openweathermap.org/img/wn/x1@2x.png');
  });

  it('formatTime should return HH:mm', () => {
    expect(formatTime(167123123)).toBe('08:05');
  });

  it('defaultOptions should return lottie default options', () => {
    expect(defaultOptions('animation')).toEqual({
      animationData: "animation",
      autoplay: true,
      loop: true,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    });
  });

  it('getWeatherUrl should return weather url', () => {
    expect(getWeatherUrl('Amsterdam,NL'))
      .toBe('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=Amsterdam,NL&cnt=7&units=metric&appid=a977ffb99e5d701b2cb7079181e1af67');
  });

  it('FlightUrl should return skypicker url', () => {
    expect(getFlightUrl('AMS', 'BER,MAD', '12/10/2020'))
      .toBe('https://api.skypicker.com/flights?flyFrom=AMS&to=BER,MAD&dateFrom=12/10/2020&dateTo=12/10/2020&partner=picky&v=3&one_for_city=1')
  });

  it('getWeatherCityUrl should return weather city url', () => {
    expect(getWeatherCityUrl(123)).toBe('https://openweathermap.org/city/123');
  });
});