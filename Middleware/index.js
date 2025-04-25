const express = require('express')

const fs = require("fs")
const app = express();
const PORT =5000;

//Middleware - plugin
app.use(express.urlencoded({extended:false}));

//middleware 1
app.use((req,res, next) =>{
  console.log("Hello from middleware 1");
  next();
})

//middleware 2
app.use((req,res, next) =>{
  console.log("Hello from middleware 2");
next();
})






app.listen(PORT,()=>console.log(`Server started at Port:${PORT}`))