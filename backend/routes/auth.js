// routes/auth.js
const express = require("express");
const bcrypt = require("bcrypt");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const router = express.Router();

const db=mysql.createConnection({
  host:"localhost",
  user:"root",  
  password:"",
  database:"ict_shikkha"
}
)


// Form Data








// gallery 


module.exports = router;