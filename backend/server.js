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


app.post('/user', (req, res) => {
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
app.post('/newsletter', (req, res) => {
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





app.post('/reviews', (req, res) => {
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
app.get('/skills', (req, res) => {
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
app.get('/hsc', (req, res) => {
  const sql = "SELECT * FROM hscchapterdetail";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
  });
});
app.get('/suggestion', (req, res) => {
  const sql = "SELECT * FROM hscsuggestion";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
  });
});


// nav bar
app.get('/menu', (req, res) => {
  const sql = "SELECT * FROM menu";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
  });
});
app.get('/submenu', (req, res) => {
  const sql = "SELECT * FROM submenu";
  db.query(sql, (err, datatwo) => {
      if (err) return res.json(err);
      return res.json(datatwo);
  });
});

// nav bar
app.get('/faq', (req, res) => {
  const sql = "SELECT * FROM faq";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
  });
});

// blog details
app.get('/blogdetail', (req, res) => {
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


app.get('/galleryimg', (req, res) => {
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
app.get('/abouttext', (req, res) => {
  const sql = "SELECT * FROM abouttext";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
  });
});
app.get('/aboutostad', (req, res) => {
  const sql = "SELECT * FROM aboutostad";
  db.query(sql, (err, datatwo) => {
      if (err) return res.json(err);
      return res.json(datatwo);
  });
});


//contact details
app.get('/contactdetail', (req, res) => {
  const sql = "SELECT * FROM contactdetail";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
  });
});


//blog details
app.get('/blogdetailone', (req, res) => {
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


app.get('/blogdetailtwo', (req, res) => {
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


app.get('/blogdetailthree', (req, res) => {
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
app.get('/ictbooks', (req, res) => {
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
app.get('/allcourse', (req, res) => {
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



// review text
app.get('/reviewText', (req, res) => {
  const sql = "SELECT * FROM reviewtext";
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



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
