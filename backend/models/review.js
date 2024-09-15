const mongoose = require("mongoose");


const ReviewsDataSchema=new mongoose.Schema({
    name: String,
    title:String,
    work:String,
    date:{type:Date,
      default:Date.now()
  },
  }
  )


module.exports = mongoose.model("Review", ReviewsDataSchema);