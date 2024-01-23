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
        driver: {},
      };

    case "GET_DRIVER":
      return {
        ...state,
        driver: action.payload,
        drivers: [],
      };

    case "GET_DRIVER_NAME":
      return {
        ...state,
        drivers: action.payload,
        driver: {},
      };

    default:
      return state;
  }
}
