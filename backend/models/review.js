const mongoose = require("mongoose");


const ReviewsDataSchema=new mongoose.Schema({
    name: String,
    title:String,
    work:String
  }
  )


module.exports = mongoose.model("Review", ReviewsDataSchema);