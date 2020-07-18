const router = require("express").Router()
const Tools = require("../controllers/toolsController")


router.route("/")
    .get(Tools.getTools)
    .post(Tools.createTools)

router.route("/:id")
    .get(Tools.getAllTools)
    .put(Tools.updateTools)
    .delete(Tools.updateTools)

module.exports= router;