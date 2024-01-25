const axios = require("axios");
const { Driver, Team } = require("../db");

async function postDriver(req, res) {
  try {
    const {
      forename,
      surname,
      description,
      image,
      nationality,
      teams,
      dob,
      teamIds,
    } = req.body;

    const driver = await Driver.create({
      forename,
      surname,
      description,
      image,
      nationality,
      teams,
      dob,
    });

    const selectedTeams = await Team.findAll({
      where: {
        id: teamIds,
      },
    });

    await driver.addTeams(selectedTeams);

    res.send("Conductor creado exitosamente.");
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = postDriver;
