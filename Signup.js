//import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';

function Signup() {

const signupuser = async (e)=>{
e.preventDefault();
const fname=document.querySelector('#fname').value;
const lname=document.querySelector('#lname').value;
const age=document.querySelector('#age').value;
const email=document.querySelector('#email').value;
const password=document.querySelector('#password').value;


 try{const response = await axios({
    method: "post",
    url:"http://localhost:8080/signup/",
    params:{fname,lname,age,email,password},
 });

  console.log(response);
  if(password === response.data.password){
    alert("User Sign UP Successfully ");

  } else{

    alert("incorrect ");
  }
}
catch(err ) 
{
  console.log(err);
}



};

  return (
    <div >
    
   <form onSubmit={signupuser}>
   <div className="htmlm-group">
    <label htmlFor="exampleInputEmail1">!!!! SignUp Here !!!!</label>
       
  </div>
  <div className="htmlm-group">
    <label htmlFor="exampleInputEmail1"> First Name </label>
    <input type="text" className="form-control" id="fname" aria-describedby="emailHelp" placeholder="Enter First name "/>
    
  </div>
  
  <div className="form-group">
    <label htmlFor="lname1">Last Name</label>
    <input type="address" className="form-control" id="lname" aria-describedby="address" placeholder="Enter Last Name "/>
    
  </div>
  <div className="form-group">
    <label htmlFor="age1">Age </label>
    <input type="text" className="form-control" id="age" aria-describedby="mobile" placeholder="Enter Age "/>
    
  </div>
  <div className="form-group">
    <label htmlFor="email1">E-mail </label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email "/>
    
  </div>
  <div className="form-group">
    <label htmlFor="password1">Password</label>
    <input type="password" className="form-control" id="password" aria-describedby="password" placeholder="Enter password  "/>
    
  </div>
  
  
  <button type="submit" className="btn btn-primary">signUp</button>
</form>



</div>



  );
}

export default Signup;
