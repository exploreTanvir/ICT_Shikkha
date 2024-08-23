const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/IctShikkha");
    console.log("DB is connected");
  } catch (error) {
    console.log("DB is not connected");
    console.log(error);
  }
};

const ChapterDataSchema = new mongoose.Schema({
  class: String,
  title:String,
  desc: String,
  desc2: String,
  chapter: String
});

const ChapterData = mongoose.model("chapterName", ChapterDataSchema);

app.get("/", (req, res) => {
  ChapterData.find()
    .then(chapter => res.json(chapter))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  await connectDB();
});
