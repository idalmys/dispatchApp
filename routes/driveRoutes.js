const router = require("express").Router()
const Driver = require("../controllers/driverControllers");


router.route("/")
    .get(Driver.getAllDrivers)
    .post(Driver.createDriver)

router.route("/:id")
    .get(Driver.getDriver)
    .put(Driver.updateDriver)
    .delete(Driver.deleteDriver)

module.exports= router;