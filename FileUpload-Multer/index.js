const express = require("express");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 5000;

 
const storage = multer.diskStorage({  //insert my chosen file into folder named upload
  destination: function(req,file,cb) {
    return cb(null, "./upload")
  },
   filename: function (req, file, cb) {
  return cb(null, `${Date.now()}-${file.originalname}`);
}
,
});
const upload = multer({ storage });



app.use(express.urlencoded({extended:false})); //middleware

app.set("view engine","ejs");
app.set("views", path.resolve("./view"));
app.use(express.json());


app.get("/", (req, res) => {
  return res.render("homepage");
});



// file upload route
app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  return res.redirect("/");
});

app.listen(PORT , ()=>console.log(`server started at ${PORT}`));