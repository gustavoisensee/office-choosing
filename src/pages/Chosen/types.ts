export type chosenProps = {
  history: {
    location?: {
      state?: {
        name: string,
        img: string
      }
    },
    push: (s: string) => void
  },
};
