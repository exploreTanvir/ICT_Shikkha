const mongoose = require("mongoose");


const formDataSchema=new mongoose.Schema({
    name: String,
    phone: String,
    message: String,
    email:{
      type:String,
  },
    subject: String,
    division: String,
    district: String,
    date:{type:Date,
      default:Date.now()
  },
  })



module.exports = mongoose.model("UserDetails", formDataSchema);