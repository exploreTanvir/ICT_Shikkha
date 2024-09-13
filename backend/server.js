// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");



const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());


const connectDB=async()=>{
  try {
      await mongoose.connect("mongodb://127.0.0.1:27017/ictshikkha")
      console.log("DB is connected")
  } catch (error) {
      console.log("DB is not connected")
      console.log(error)
  }
}
// Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async() => {
  console.log(`Server running on port ${PORT}`);
  await connectDB()
});