const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: { type: String},
    desc: { type: String },
    desc2: { type: String },
    chapter:{ type: String },
});

module.exports= mongoose.model("ChapterName", bookSchema);