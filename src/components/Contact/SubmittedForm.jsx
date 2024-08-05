const express=require("express")
const mongoose=require("mongoose")
const multer=require("multer")
const path=require("path")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname))


const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/task1")
        console.log("DB is connected")
    } catch (error) {
        console.log("DB is not connected")
        console.log(error)
    }
}





// Create schema
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    text:{
        type:String,
        required:true
    }


})

//Create Model
const productModel=mongoose.model("ictShikkha",productSchema)


app.get("/post",(req,res)=>{
    res.sendFile(path.join(__dirname,"./Contact.jsx"))
})


app.post("/post",async(req,res)=>{
try {
    const newData=new productModel({
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    text:req.body.text
})
    const productData=await newData.save()
    res.status(200).send({message:"Data is submitted",data:productData})
    
} catch (error) {
    res.status(500).send({message:error.message})
}
})
const PORT=3000
app.listen(PORT,async()=>{
    console.log(`Server is running on the port number ${PORT}`)
    await connectDB()
})