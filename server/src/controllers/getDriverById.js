const axios = require("axios");
const { Driver, Team } = require("../db");

async function getDriverById(req, res) {
  try {
    const { id } = req.params;

    const regexPatternAPI = /^(?:[1-9]|[1-9]\d|50[0-8])$/;
    const regexPatternBD =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    if (!regexPatternBD.test(id)) {
      const apiResponse = await axios.get(
        `http://localhost:5000/drivers/${id}`
      );

      res.status(200).json(apiResponse.data);
    } else if (regexPatternBD.test(id)) {
      const bdResponse = await Driver.findByPk(id, {
        include: [
          {
            model: Team,
            attributes: ["id", "nombre"],
            through: {
              attributes: [],
            },
          },
        ],
      });

      if (bdResponse === null) {
        res.status(404).send("Driver not found");
      } else {
        res.status(200).json(bdResponse.toJSON());
      }
    } else {
      res.status(404).send("Driver not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = getDriverById;
