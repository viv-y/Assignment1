const mangoose = require("mongoose");
const { default: mongoose } = require("mongoose");
const userSchema=mongoose.Schema({
    fName : String,
    lName : String,
    age: { type: Number},
    email : { type: String, required: true},
    password: { type: String , required: true,minLength : 8}

})
const user=new mongoose.model("User",userSchema);
module.exports=user;
