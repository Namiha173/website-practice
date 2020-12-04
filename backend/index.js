const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const multer = require('multer');
const bcrypt = require('bcryptjs');


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});




// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,"../frontend/src/images")
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+'-'+file.originalname)
  }
})

var upload = multer({ storage: storage })


app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)
  
})
 


app.get("/men", (req, res) => {
  connection.query(`SELECT * from users2 WHERE id=20 `, (errors, result) => {
    if (errors) throw errors;
    else{ res.send(result);
      // var x = document.createElement("IMG");
      // x.setAttribute("src", result[0].image);
      // x.setAttribute("width", "304");
      // x.setAttribute("height", "228");
      // x.setAttribute("alt", "The Pulpit Rock");
      // document.body.appendChild(x);
    }
  });
});


app.post("/",upload.single('myFile'),(req, res,next) => {
  const file = req.file
  connection.query(
    `INSERT INTO users2 (UserName,Email,Password,PhoneNo,image) values(?,?,?,?,?)`,
    [req.body.UserName, req.body.Email, req.body.Password, req.body.PhoneNo,file.filename],
    (errors, result) => {
      if (errors) throw errors;
      else res.send(result); 
    }
  );
});

// pass hashing

// register
// app.post("/register", async (req,res)=>{
//   try{
// const {email,password}=req.body;
// const hash=await bcrypt.hash(password,10);
// await db("user3").insert({email:email,hash:hash});
// res.send(200).json("Good")
//   }catch(a){
//     console.log(a)
//     res.status(500).send("Not good")
//   }
// });


// register
app.post("/register", (req,res)=>{
  // console.log(req.body)
  connection.query(
    `INSERT INTO users2 (UserName,Email,Password,PhoneNo,image)values(?,?,?,?,?)`,
    [req.body.UserName,req.body.Email,req.body.Password,req.body.PhoneNo,req.body.image],
    (errors,result) => {
      if (errors) throw errors;
      else {
      res.send(result);
      console.log("hell")
      }
    }
  );
});




// login
app.post("/login",(req,res)=>{
  res.json("login")
})



app.listen(8000, () => console.log("Hello"));
