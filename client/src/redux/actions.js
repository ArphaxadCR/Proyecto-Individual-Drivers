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

export const filterBDAPI = (value) => {
  return (dispatch) => {
    dispatch({
      type: "FILTER_DB_API",
      payload: value,
    });
  };
};

export const filterTeam = (value) => {
  return (dispatch) => {
    dispatch({
      type: "FILTER_TEAM",
      payload: value,
    });
  };
};

export const orderNombre = (value) => {
  return (dispatch) => {
    dispatch({
      type: "ORDER_NOMBRE",
      payload: value,
    });
  };
};

export const orderNacimiento = (value) => {
  return (dispatch) => {
    dispatch({
      type: "ORDER_NACIMIENTO",
      payload: value,
    });
  };
};

export const getTeams = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/teams");
      dispatch({
        type: "GET_TEAMS",
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const postDriver = (driver) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/drivers",
        driver
      );
      dispatch({
        type: "POST_DRIVER",
        payload: response.data,
      });
      alert(response.data);
    } catch (error) {
      alert(error.request?.response);
    }
  };
};
