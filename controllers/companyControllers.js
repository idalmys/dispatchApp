const Company = require("../models/Company")

module.exports={
    createCompany: (req, res) => {
        Company.create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err))
    },
    getCompany: (req, res) => {
        Company.findById(req.params.id)
            .then((dbCompany) => res.json(dbCompany))
            .catch((err) => res.status(422).json(err));
    },
    getAllCompany: (req, res) => {
        Company.find()
            .then((dbCompany) => res.json(dbCompany))
            .catch((err) => res.status(422).json(err));
    },
    updateCompany: (req, res) => {
        Company.findOneAndUpdate(req.params.id)
            .then(dbCompany => res.json(dbCompany))
            .catch(err => res.status(422).json(err))
    },
    deleteCompany: (req, res) => {
        Company.findOneAndDelete(req.params.id)
            .then(dbCompany => res.json(dbCompany))
            .catch(err => res.status(422).json(err))
    }
}