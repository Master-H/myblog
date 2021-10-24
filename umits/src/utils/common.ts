const updateState = (state: object | undefined, payload: object): object => (
  {
    ...state,
    ...payload,
  }
);
const updateState1 = (state: object | undefined, payload: object): object => (
  {
    ...state,
    ...payload,
  });

const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));
export { updateState, updateState1, sleep };
