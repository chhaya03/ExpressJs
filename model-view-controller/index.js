const express = require('express')




const userRouter = require('./routes/user')
const {connectMongoDb} = require('./connection')

const app = express();
const PORT =6500;

// Middleware - plugin
app.use(express.urlencoded({ extended: false })); // for form data




//connection
connectMongoDb("mongodb://127.0.0.1:27017/MVC-learning").then(()=> console.log("MongoDB connected"))



//routes
app.use("/api/users" , userRouter)


app.listen(PORT,()=>console.log(`Server started at Port:${PORT}`))