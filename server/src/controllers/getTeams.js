const axios = require("axios");
const { Team } = require("../db");

async function getTeams(req, res) {
  try {
    // Revisar si en la base de datos ya están guardadados los equipos
    const dbResponse = await Team.findAll();

    if (dbResponse.length === 0) {
      const apiResponse = await axios.get("http://localhost:5000/drivers");

      const arreglo = apiResponse.data;

      const setTeams = new Set();

      arreglo.forEach((element) => {
        const teams = element.teams;

        if (teams) {
          let arregloTeams = teams.split(",").map((team) => team.trim());
          arregloTeams.map((team) => {
            setTeams.add(team);
          });
        }
      });

      const equiposUnicosArray = Array.from(setTeams);

      const equiposGuardados = await Team.bulkCreate(
        equiposUnicosArray.map((equipo) => ({ nombre: equipo }))
      );

      res.status(200).send(equiposGuardados);
    } else {
      res.status(200).json(dbResponse);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = getTeams;
