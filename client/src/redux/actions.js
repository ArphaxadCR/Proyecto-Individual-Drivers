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
      alert(error.message);
    }
  };
};

export const getDriver = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/drivers/${id}`);
      dispatch({
        type: "GET_DRIVER",
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getDriverByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/driversName?name=${name}`
      );
      dispatch({
        type: "GET_DRIVER_NAME",
        payload: response.data,
      });
    } catch (error) {
      alert(error.request?.response);
    }
  };
};
