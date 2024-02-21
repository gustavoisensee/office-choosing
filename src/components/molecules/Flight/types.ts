export type FlightPrices = {
  minPrice: {
    amount: number;
  };
  outboundLeg: {
    marketingCarrierId: string;
  };
};

export type Carriers = {
  [x: string]: {
    name: string;
    imageUrl: string;
  };
};

export type FlightProps = FlightPrices & {
  flyFrom: string;
  flyTo: string;
  carriers: Carriers;
};
