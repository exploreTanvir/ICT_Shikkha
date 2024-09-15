const mongoose = require("mongoose");


const NewsDataSchema=new mongoose.Schema({
    email: String,
    date:{type:Date,
      default:Date.now()
  },
  }
  )



module.exports = mongoose.model("NewsLetter", NewsDataSchema);