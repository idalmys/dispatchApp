const mongoose= require("mongoose");
const Schema= mongoose.Schema;

const CompanySchema= new Schema({
    compnay_name: {
        type: String,
        required: true,
    },
    Mc_number: {
        type: String,
        required: true,
    },
    EIN_number: {
        type: String,
        required: true,
    },
    Mc_number: {
        type: String,
        required: true,
    },
    drivers: [
        {
          type: Schema.Types.ObjectId,
          ref: "Driver",
        },
      ],
})
const Company =mongoose.model("Company",CompanySchema)
module.exports=Company;