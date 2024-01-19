let initialState = {
  drivers: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DRIVERS":
      return {
        ...state,
        drivers: action.payload,
      };
    default:
      return state;
  }
}
