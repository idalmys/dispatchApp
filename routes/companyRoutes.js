const router = require("express").Router()
const Company = require("../controllers/companyControllers")


router.route("/")
    .get(Company.getAllCompany)
    .post(Company.createCompany)

router.route("/:id")
    .get(Company.getCompany)
    .put(Company.updateCompany)
    .delete(Company.deleteCompany)

module.exports= router;