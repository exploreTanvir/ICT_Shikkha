const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ict_shikkha",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Signup route
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  db.query("SELECT email FROM login WHERE email = ?", [email], (err, result) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (result.length > 0) return res.status(400).json({ message: "User already exists" });

    // Insert user into database
    const sql = "INSERT INTO login (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, password], (err, result) => {
      if (err) return res.status(500).json({ message: "Error registering user" });
      return res.json({ success: true, message: "User registered successfully" });
    });
  });
});

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Check if email and password match
  const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (result.length === 0) return res.status(400).json({ message: "Invalid email or password" });

    // Successful login
    return res.json({ success: true, message: "Login successful" });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
