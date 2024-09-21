// routes/auth.js
const express = require("express");
const bcrypt = require("bcrypt");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const formDataSchema = require("../models/userDetail");
const NewsDataSchema = require("../models/newsLetter");
const ReviewsDataSchema = require("../models/review");
const router = express.Router();

const db=mysql.createConnection({
  host:"localhost",
  user:"root",  
  password:"",
  database:"ict_shikkha"
}
)

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
  const sql = 'INSERT INTO usersdetails (`name`,`email`,`phone`,`collage`,`divisions`,`district`,`message`) VALUES (?)';
  const values=[
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.collage,
    req.body.divisions,
    req.body.district,
    req.body.message
  ]
  
  db.query(sql, [values], (err, data) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      return res.json(data);
  });
});

// NewsLetter
router.post('/newsletter', (req, res) => {
  const sql = 'INSERT INTO newsletter (email) VALUES (?)';
  const values=[
    req.body.email
  ]
  
  db.query(sql, [values], (err, data) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      return res.json(data);
  });
});


// Reviews
router.post('/reviews', (req, res) => {
  const sql = 'INSERT INTO reviews (`name`,`message`,`batch`) VALUES (?)';
  const values=[
    req.body.name,
    req.body.message,
    req.body.batch,
  ]
  
  db.query(sql, [values], (err, data) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      return res.json(data);
  });
});


// skill data
router.get('/skills', (req, res) => {
  const sql = "SELECT * FROM skills";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      
      const results = data.map(item => {
          if (item.img) {
              item.img = Buffer.from(item.img).toString('base64');
              item.img = `data:image/jpeg;base64,${item.img}`; 
          }
          return item;
      });

      return res.json(results);
  });
});


// hsc data and suggestion
router.get('/hsc', (req, res) => {
  const sql = "SELECT * FROM hscchapterdetail";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
  });
});
router.get('/suggestion', (req, res) => {
  const sql = "SELECT * FROM hscsuggestion";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
  });
});


// nav bar
router.get('/menu', (req, res) => {
  const sql = "SELECT * FROM menu";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
  });
});
router.get('/submenu', (req, res) => {
  const sql = "SELECT * FROM submenu";
  db.query(sql, (err, datatwo) => {
      if (err) return res.json(err);
      return res.json(datatwo);
  });
});

// nav bar
router.get('/faq', (req, res) => {
  const sql = "SELECT * FROM faq";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
  });
});


// blog details
router.get('/blogdetail', (req, res) => {
  const sql = "SELECT * FROM blogdetails";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      
      const results = data.map(item => {
          if (item.blogImg) {
              item.blogImg = Buffer.from(item.blogImg).toString('base64');
              item.blogImg = `data:image/jpeg;base64,${item.blogImg}`; 
          }
          return item;
      });

      return res.json(results);
  });
});

// review text
// router.get('/reviewText', (req, res) => {
//   const sql = "SELECT * FROM reviewtext";
//   db.query(sql, (err, data) => {
//       if (err) return res.json(err);
      
//       const results = data.map(item => {
//           if (item.img) {
//               item.img = Buffer.from(item.img).toString('base64');
//               item.img = `data:image/jpeg;base64,${item.img}`; 
//           }
//           return item;
//       });

//       return res.json(results);
//   });
// });


// gallery 
router.get('/galleryimg', (req, res) => {
  const sql = "SELECT * FROM galleryimg";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      
      const results = data.map(item => {
          if (item.img) {
              item.img = Buffer.from(item.img).toString('base64');
              item.img = `data:image/jpeg;base64,${item.img}`; 
          }
          return item;
      });

      return res.json(results);
  });
});


//about
router.get('/abouttext', (req, res) => {
  const sql = "SELECT * FROM abouttext";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
  });
});
router.get('/aboutostad', (req, res) => {
  const sql = "SELECT * FROM aboutostad";
  db.query(sql, (err, datatwo) => {
      if (err) return res.json(err);
      return res.json(datatwo);
  });
});


//contact details
router.get('/contactdetail', (req, res) => {
  const sql = "SELECT * FROM contactdetail";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
  });
});


//blog details
router.get('/blogdetailone', (req, res) => {
  const sql = "SELECT * FROM blogdetailone";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      
      const results = data.map(item => {
          if (item.blogImg) {
              item.blogImg = Buffer.from(item.blogImg).toString('base64');
              item.blogImg = `data:image/jpeg;base64,${item.blogImg}`; 
          }
          return item;
      });

      return res.json(results);
  });
});


router.get('/blogdetailtwo', (req, res) => {
  const sql = "SELECT * FROM blogdetailtwo";
  db.query(sql, (err, datatwo) => {
      if (err) return res.json(err);
      
      const results = datatwo.map(item => {
          if (item.blogImg) {
              item.blogImg = Buffer.from(item.blogImg).toString('base64');
              item.blogImg = `data:image/jpeg;base64,${item.blogImg}`; 
          }
          return item;
      });

      return res.json(results);
  });
});


router.get('/blogdetailthree', (req, res) => {
  const sql = "SELECT * FROM blogdetailthree";
  db.query(sql, (err, datathree) => {
      if (err) return res.json(err);
      
      const results = datathree.map(item => {
          if (item.blogImg) {
              item.blogImg = Buffer.from(item.blogImg).toString('base64');
              item.blogImg = `data:image/jpeg;base64,${item.blogImg}`; 
          }
          return item;
      });

      return res.json(results);
  });
});



//blog details
router.get('/ictbooks', (req, res) => {
  const sql = "SELECT * FROM ictbooks";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      
      const results = data.map(item => {
          if (item.bookImg) {
              item.bookImg = Buffer.from(item.bookImg).toString('base64');
              item.bookImg = `data:image/jpeg;base64,${item.bookImg}`; 
          }
          return item;
      });

      return res.json(results);
  });
});


// all course
router.get('/allcourse', (req, res) => {
  const sql = "SELECT * FROM allcourse";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      
      const results = data.map(item => {
          if (item.instructor) {
              item.instructor = Buffer.from(item.instructor).toString('base64');
              item.instructor = `data:image/jpeg;base64,${item.instructor}`; 
          }
          if (item.courseImg) {
              item.courseImg = Buffer.from(item.courseImg).toString('base64');
              item.courseImg = `data:image/jpeg;base64,${item.courseImg}`; 
          }
          return item;
      });

      return res.json(results);
  });
});

module.exports = router;