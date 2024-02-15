type Seg = {
  departureTime: string;
  arrivalTime: string;
};

export type FlightProps = {
  segments: Seg[];
  priceBreakdown: {
    total: {
      units: number;
    };
  };
  flyFrom: string;
  flyTo: string;
};
