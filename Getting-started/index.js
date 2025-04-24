
const express = require('express')
const app = express()

app.get('/',(req,res) =>{
  res.send('Hello World from Home page server 3000')
})
app.get('/about' , (req,res) =>{
  res.send('about page !')
})


app.listen(3000 , () => console.log("Server started"))