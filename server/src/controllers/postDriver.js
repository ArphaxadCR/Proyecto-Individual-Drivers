const axios = require("axios");
const { Driver } = require("../db");

async function postDriver(req, res) {
  try {
    const { forename, surname, description, image, nationality, teams, dob } =
      req.body;

    const existingDriver = await Driver.findOne({
      where: {
        forename,
        surname,
        description,
        image,
        nationality,
        teams,
        dob,
      },
    });

    console.log(existingDriver);

    if (existingDriver) {
      res.status(400).json({ error: "El conductor ya existe." });
    } else {
      const newDriver = await Driver.create({
        forename,
        surname,
        description,
        image,
        nationality,
        teams,
        dob,
      });

      res.send("Conductor creado exitosamente.");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = postDriver;
