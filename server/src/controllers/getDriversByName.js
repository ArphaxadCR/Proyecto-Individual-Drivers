const axios = require("axios");

async function getDriversByName(req, res) {
  try {
    res.send("La ruta de getDriversByName está funcionando");
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = getDriversByName;
