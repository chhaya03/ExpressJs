
const mongoose = require("mongoose")

//schema 
const userSchema = new mongoose.Schema({
  firstName: {
    type:String,
    required:true,
  },

  lastName: {
    type:String,
  },

  email: {
    type:String,
    unique:true,
    required:true,
  },

  jobTitle: {
    type:String,
  },

  gender:{
    type:String,
  },

})


//model
const User = mongoose.model("user" , userSchema)


module.exports = User