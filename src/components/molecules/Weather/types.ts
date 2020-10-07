export type weatherType = {
  main: {
    temp: number
  },
  weather: Array<{
    description: string,
    icon: string
  }>
};

export type weatherProps = {
  weather: weatherType,
  index: number
};