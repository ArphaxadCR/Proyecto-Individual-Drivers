const { Router } = require("express");

const getDrivers = require("../controllers/getDrivers");
const getDriverById = require("../controllers/getDriverById");
const getDriversByName = require("../controllers/getDriversByName");
const getTeams = require("../controllers/getTeams");
const postDriver = require("../controllers/postDriver");

const router = Router();

router.get("/drivers", getDrivers);
router.get("/drivers/:id", getDriverById);
router.get("/driversName", getDriversByName);
router.get("/teams", getTeams);
router.post("/drivers", postDriver);

module.exports = router;
