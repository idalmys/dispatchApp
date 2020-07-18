const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const driverSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    tools: [
        {
          type: Schema.Types.ObjectId,
          ref: "Tools",
        },
      ],
})
const Driver = mongoose.model("Driver", driverSchema)
module.exports = Driver;