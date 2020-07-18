const express= require("express");
const cors= require("cors");
const mongoose= require("mongoose");

//Initialization
const app= express();
const Port= process.env.Port || 9000;

//Middlewares
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}));

//Routes


//Database
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/dispatchDB";
mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
console.log("DB connected");

//server
app.listen(Port,()=>{
    console.log("Server port on " + Port)
})