const mongoose = require("mongoose");


const NewsDataSchema=new mongoose.Schema({
    email: String
  }
  )



module.exports = mongoose.model("NewsLetter", NewsDataSchema);