const axios = require("axios");
const { Driver, Team } = require("../db");

async function getDrivers(req, res) {
  try {
    let drivers = [];

    const [response, responseDB] = await Promise.all([
      axios.get("http://localhost:5000/drivers"),
      Driver.findAll({
        include: [
          {
            model: Team,
            attributes: ["id", "nombre"],
            through: {
              attributes: [],
            },
          },
        ],
      }),
    ]);

    drivers = [...response.data, ...responseDB];

    res.send(drivers);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = getDrivers;
