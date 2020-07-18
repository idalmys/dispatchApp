const Tools = require("../models/Tools")

module.exports={
    createTools: (req, res) => {
        Tools.create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err))
    },
    getTools: (req, res) => {
        Tools.findById(req.params.id)
            .then((dbCompany) => res.json(dbCompany))
            .catch((err) => res.status(422).json(err));
    },
    getAllTools: (req, res) => {
        Tools.find()
            .then((dbCompany) => res.json(dbCompany))
            .catch((err) => res.status(422).json(err));
    },
    updateTools: (req, res) => {
        Tools.findOneAndUpdate(req.params.id)
            .then(dbCompany => res.json(dbCompany))
            .catch(err => res.status(422).json(err))
    },
    deleteTools: (req, res) => {
        Tools.findOneAndDelete(req.params.id)
            .then(dbCompany => res.json(dbCompany))
            .catch(err => res.status(422).json(err))
    }
}