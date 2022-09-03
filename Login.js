//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const Login=()=> {
  const navigate = useNavigate();


const mylogin =async (e)=>{
e.preventDefault();
const email=document.querySelector('#exampleInputEmail1').value;
const password=document.querySelector('#exampleInputPassword1').value;
console.log(email+"   "+password);

 try{const response = await axios({
 method: "get",
 url:"http://localhost:8080/login/",
 params:{email},
 
 });
  console.log(response);
  if(password === response.data.password){
    alert("welcome user");
    navigate("/dashboard");

  } else{

    alert("Incorrect Password ");
  }
}
catch(err ) 
{
  console.log(err);
}



};

  return (
    <div >
   
    <form onSubmit={mylogin}>
    <div className="htmlm-group">
    <label htmlFor="exampleInputEmail1">!!!! Login Here !!!!</label>
       
  </div>
  <div className="htmlm-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>



  );
}

export default Login;
