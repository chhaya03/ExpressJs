const express = require("express")

const router = express.Router();

const {handleCreateNewUser} =require("../controller/user")
const {handleGetAllUsers} = require("../controller/user")
const {handlegetUserById} =require("../controller/user")
const {handleUpdateUserById} =require("../controller/user")
const {handleDeleteUserById} =require("../controller/user")



router.route("/")
.get(handleGetAllUsers).post(handleCreateNewUser)


router.route("/:id")
   .get(handlegetUserById)          // for GET (fetch user)
   .patch(handleUpdateUserById)      // for PATCH (update user)
   .delete(handleDeleteUserById)     // for DELETE (delete user)



 
 module.exports = router
 

 