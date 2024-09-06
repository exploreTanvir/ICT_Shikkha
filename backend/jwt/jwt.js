const token = localStorage.getItem('token');

// Use token in authenticated requests
const response = await fetch('http://localhost:5000/api/protected-route', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
  },
});



const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization').split(' ')[1];
  if (!token) return res.status(401).json({ message: "Access denied!" });

  try {
    const verified = jwt.verify(token, 'yourSecretKey');
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token!" });
  }
};

module.exports = verifyToken;
