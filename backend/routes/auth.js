// routes/auth.js
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const formDataSchema = require("../models/userDetail");
const NewsDataSchema = require("../models/newsLetter");
const ReviewsDataSchema = require("../models/review");
const router = express.Router();

// Register a new user
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    const token = jwt.sign({ id: user._id }, "your_jwt_secret", {
      expiresIn: "1h",
    });

    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, "your_jwt_secret", {
      expiresIn: "1h",
    });

    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
// Form Data
router.post('/user', (req, res) => {
  const formData = new formDataSchema(req.body);
  formData.save()
    .then(() => res.json({ message: 'Data saved successfully!' }))
    .catch(err => res.status(400).json({ error: err.message }));
});

// NewsLetter
router.post('/newsLetter', (req, res) => {
  const newsData = new NewsDataSchema(req.body);
    newsData.save()
    .then(() => res.json({ message: 'Data saved successfully!' }))
    .catch(err => res.status(400).json({ error: err.message }));
});

// Reviews
router.post('/reviews', (req, res) => {
  const reviewData = new ReviewsDataSchema(req.body);

    reviewData.save()
    .then(() => res.json({ message: 'Data saved successfully!' }))
    .catch(err => res.status(400).json({ error: err.message }));
});

// ChapterDetail
router.get('/ChapterDetail', async (req, res) => {
  try {
    const items = await ChapterDetail.find();
    res.json(items);
  } catch (err) {
    res.status(500).send(err.message);
  }
});



module.exports = router;