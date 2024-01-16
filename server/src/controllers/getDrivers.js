const axios = require("axios");
const { Driver } = require("../db");

async function getDrivers(req, res) {
  try {
    let drivers = [];

    const [response, responseDB] = await Promise.all([
      axios.get("http://localhost:5000/drivers"),
      Driver.findAll(),
    ]);

    drivers = [...response.data, ...responseDB];

    res.send(drivers);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = getDrivers;
