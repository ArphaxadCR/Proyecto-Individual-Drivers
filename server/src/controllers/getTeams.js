const axios = require("axios");

async function getTeams(req, res) {
  try {
    res.send("La ruta getTeams está funcionando");
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = getTeams;
