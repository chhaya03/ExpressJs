const express = require('express')

const users = require("./MOCK_DATA.json")   //databse
const app = express();
const PORT =4000;
const fs = require('fs')



// Routes
app.get('/api/users' , (req,res) =>{
  return res.json(users)
})


//get the user by name 
app.get('/users' ,(req,res)=>{   //status code 200 ok
  const html =`
  <ul>
  ${users.map((user) =>`<li>${user.first_name}</li>`)}
  
  </ul>
  `
   res.send(html)
});


//get the user by id
app.get('/api/users/:id' ,(req,res)=>{   //status code 200 ok
  const id = Number(req.params.id);
  const user = users.find((user) =>user.id===id);

  return res.json(user)
})


//create new users
app.post("/api/users" , (req,res) => {     // status code 201 created 
  return res.json({status :"pending"})
})


//edit the user with id
app.patch("/api/users/:id" , (req,res) => {  // status code 501 not implemented
  return res.json({status :"pending"})
})


//delete the user with id 
app.delete("/api/users/:id" , (req,res) => {   // status code 501 not implemented
  return res.json({status :"pending"})
})



app.listen(PORT,()=>console.log(`Server started at Port:${PORT}`))
