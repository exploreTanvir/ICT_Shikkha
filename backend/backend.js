const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port =process.env.PORT|| 5000;

// Middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Connect to MongoDB
const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/ictshikkha_ictshikkha")
        console.log("DB is connected")
    } catch (error) {
        console.log("DB is not connected")
        console.log(error)
    }
}

// Define a schema for the form data
const formDataSchema=new mongoose.Schema({
  name: String,
  phone: String,
  message: String,
  email:{
    type:String,
    unique:true
},
  subject: String,
  division: String,
  district: String,
  date:{type:Date,
    default:Date.now()
},
})
const NewsDataSchema=new mongoose.Schema({
  email: String
}
)

//Create Model
const FormData=mongoose.model("UserDetail",formDataSchema)
const NewsData=mongoose.model("NewsLetter",NewsDataSchema)


// Define a route to handle form submission
app.post('/', (req, res) => {
  const formData = new FormData(req.body);

  console.log(req.body)

  formData.save()
    .then(() => res.json({ message: 'Data saved successfully!' }))
    .catch(err => res.status(400).json({ error: err.message }));
});


app.post('/d', (req, res) => {
  const newsData = new NewsData(req.body);

    newsData.save()
    .then(() => res.json({ message: 'Data saved successfully!' }))
    .catch(err => res.status(400).json({ error: err.message }));
});





app.listen(port, async() => {
  console.log(`Server running on port ${port}`);
  await connectDB()
});
