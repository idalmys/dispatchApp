const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ToolSchema = new Schema({
    trailer_size: {
        type: Number,
        default: 0,
    },
    tarp: {
        type: String,
        required: true,
    },
    dunnage: {
        type: Number,
        default: 0,
    },
    pipe_stake: {
        type: Number,
        default: 0,
    },
    chain: {
        type: Number,
        default: 0,
    },



})
const Tools = mongoose.model("Tools", ToolSchema)
module.exports = Tools;