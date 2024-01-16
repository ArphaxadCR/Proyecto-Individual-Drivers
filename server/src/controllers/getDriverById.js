const axios = require("axios");

async function getDriverById(req, res) {
  try {
    res.send("La ruta de getDriverById está funcionando");
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = getDriverById;
