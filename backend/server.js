// server.js
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use(express.static("public"))


const db=mysql.createConnection({
  host:"localhost",
  user:"root",  
  password:"",
  database:"ict_shikkha"
}
)

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});




// Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async() => {
  console.log(`Server running on port ${PORT}`);

});