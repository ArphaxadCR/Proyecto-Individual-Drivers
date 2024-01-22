let initialState = {
  drivers: [],
  driver: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DRIVERS":
      return {
        ...state,
        drivers: action.payload,
      };

    case "GET_DRIVER":
      return {
        ...state,
        driver: action.payload,
      };
    default:
      return state;
  }
}
