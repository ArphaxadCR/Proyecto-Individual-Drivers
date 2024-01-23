const axios = require("axios");
const { Driver } = require("../db");
const { Op } = require("sequelize");

async function getDriversByName(req, res) {
  try {
    const { name } = req.query;

    let [primeraLetra, ...resto] = name;

    const formattedName =
      primeraLetra.toUpperCase() + resto.join("").toLowerCase();

    const [apiResponse, bdResponse] = await Promise.all([
      axios.get(`http://localhost:5000/drivers?name.forename=${formattedName}`),
      Driver.findAll({
        where: {
          forename: {
            [Op.like]: `%${formattedName}%`,
          },
        },
      }),
    ]);

    const finalResponse = [...apiResponse.data, ...bdResponse];

    if (finalResponse.length === 0) {
      res.status(404).send("Drivers not founded");
    } else {
      res.status(200).json(finalResponse);
    }
  } catch (error) {
    res.status(500).send("Hubo un error");
  }
}

module.exports = getDriversByName;
