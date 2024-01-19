import axios from "axios";

export const getDrivers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/drivers");
      dispatch({
        type: "GET_DRIVERS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
