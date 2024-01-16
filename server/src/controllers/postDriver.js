const axios = require("axios");

async function postDriver(req, res) {
  try {
    res.send("La ruta de postDriver está funcionando");
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = postDriver;
