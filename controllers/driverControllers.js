const Driver = require("../models/Driver")

module.exports = {

    createDriver: (req, res) => {
        Driver.create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err))
    },
    getDriver: (req, res) => {
        Driver.findById(req.params.id)
            .then((dbUser) => res.json(dbUser))
            .catch((err) => res.status(422).json(err));
    },
    getAllDrivers: (req, res) => {
        Driver.find()
            .then((dbUser) => res.json(dbUser))
            .catch((err) => res.status(422).json(err));
    },
    updateDriver: (req, res) => {
        Driver.findOneAndUpdate(req.params.id)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err))
    },
    deleteDriver: (req, res) => {
        Driver.findOneAndDelete(req.params.id)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err))
    }
}