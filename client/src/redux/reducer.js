/* eslint-disable no-case-declarations */
let initialState = {
  allDrivers: [],
  drivers: [],
  driver: {},
  teams: [],
};

const uuidRegex =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DRIVERS":
      return {
        ...state,
        allDrivers: action.payload,
        drivers: action.payload,
        driver: {},
      };

    case "GET_DRIVER":
      return {
        ...state,
        driver: action.payload,
      };

    case "GET_DRIVER_NAME":
      return {
        ...state,
        drivers: action.payload,
        driver: {},
      };

    case "FILTER_DB_API":
      let filteredDrivers;

      if (action.payload === "API") {
        filteredDrivers = state.allDrivers.filter(
          (driver) => !uuidRegex.test(driver.id)
        );
      } else if (action.payload === "DB") {
        filteredDrivers = state.allDrivers.filter((driver) =>
          uuidRegex.test(driver.id)
        );
      } else if (action.payload === "All") {
        filteredDrivers = state.allDrivers;
      } else {
        filteredDrivers = state.allDrivers;
      }

      return {
        ...state,
        drivers: filteredDrivers,
        driver: {},
      };

    case "FILTER_TEAM":
      let filteredTeam;

      if (action.payload === "All") {
        filteredTeam = state.allDrivers;
      }

      if (action.payload !== "All") {
        filteredTeam = state.allDrivers.filter((driver) => {
          if (uuidRegex.test(driver.id)) {
            for (let i = 0; i < driver.Teams.length; i++) {
              if (driver.Teams[i].nombre === action.payload) {
                return true;
              }
            }
          } else {
            return driver.teams?.includes(action.payload);
          }
        });
      }

      return {
        ...state,
        drivers: filteredTeam,
        driver: {},
      };

    case "ORDER_NOMBRE":
      let sortedDrivers;

      sortedDrivers = state.drivers.sort((a, b) => {
        if (action.payload === "ASC") {
          if (uuidRegex.test(a.id) && uuidRegex.test(b.id)) {
            return a.forename > b.forename ? 1 : -1;
          } else {
            return a.driverRef > b.driverRef ? 1 : -1;
          }
        } else if (action.payload === "DESC") {
          if (uuidRegex.test(a.id) && uuidRegex.test(b.id)) {
            return a.forename < b.forename ? 1 : -1;
          } else {
            return a.driverRef < b.driverRef ? 1 : -1;
          }
        } else {
          return 0;
        }
      });

      return {
        ...state,
        drivers: sortedDrivers,
        driver: {},
      };

    case "ORDER_NACIMIENTO":
      let sortedNacimiento;

      sortedNacimiento = state.drivers.sort((a, b) => {
        if (action.payload === "ASC") {
          return a.dob > b.dob ? 1 : -1;
        } else if (action.payload === "DESC") {
          return a.dob < b.dob ? 1 : -1;
        } else {
          return 0;
        }
      });

      return {
        ...state,
        drivers: sortedNacimiento,
        driver: {},
      };

    case "GET_TEAMS":
      return {
        ...state,
        teams: action.payload,
      };

    case "POST_DRIVER":
      return {
        ...state,
      };

    default:
      return state;
  }
}
