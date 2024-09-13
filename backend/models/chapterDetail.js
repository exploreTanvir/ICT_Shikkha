const mongoose = require("mongoose");


  const ChapterSchema = new mongoose.Schema({
  
    class:String,
    title:String,
    url:String,
    desc:String,
    desc2:String,
    chapter:String,
    chapterAudio:String
    });
   
const chapterModel = mongoose.model("ChapterDetail", ChapterSchema);

module.exports=chapterModel