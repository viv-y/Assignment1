const mongoose =require("mongoose");
const User  = require("./model");

const express = require("express");
const cors=require("cors");
const app=express();
const PORT=8080;
app.use(cors());

app.get('/',(req,res)=>{   
 res.status(200).json({msg:"welcome"});
})


app.listen(PORT,()=> {
  console.log(`server at ${PORT}`);

});


mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/login",async (req,res)=>{
const email=req.query.email;
const user=await User.findOne({email});
console.log(user);


if(user)
{
  res.status(200).json(user);

} else {
    res.status(404).json({error: "user not found"});

}

});
app.post("/signup",async(req,res)=>{
  
  const fname=req.query.fname;
  const lname=req.query.lname;
  const age=req.query.age;
  const email=req.query.email;
  const password=req.query.password;
  const user = new User({
  
    fName: fname,
    lName: lname,
    age:age,
    email:email,
    password: password,
  });
  user
  .save()
  .then(() => {
    console.log("User saved");
  })
  .catch((err) => {
    console.log(err);
  });
})



  // const user = new User({
  //   uName:"2018028",
  //   fName: "Prakash",
  //   lName: "Singh",
  //   age: 19,
  //   email: "prince@gmail.com",
  //   password: "12345678hlnklh",
  // });
  
  