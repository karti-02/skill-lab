import React from 'react'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" })
  let navigate=useNavigate();
    const Handlesubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/loginuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (!json.success) {
            localStorage.setItem("authToken",json.authToken);
            console.log(localStorage.getItem("authToken"));
            alert("Enter valid credentials");
        }
        if (json.success) {
            localStorage.setItem("authToken",json.authToken);
            console.log(localStorage.getItem("authToken"));
            navigate("/");

      }


    }
    const onchange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }

  return (
    <>
    <Navbar/>
    <div className='container' style={{height:"617px"}}>
        <center>
        <form onSubmit={Handlesubmit} style={{backgroundColor:"#1C1C1C",width:"500px",height:"300px",borderRadius:"20px",marginTop:"50px"}}>
            
            <div className="mb-3" style={{paddingLeft:"30px",paddingTop:"40px"}}>
                <label htmlFor="exampleInputEmail1 " style={{ color: 'white' }} className="form-label">Email address</label>
                <input type="email" placeholder='Enter Email' className="form-control white-text" style={{ "backgroundColor":"lightgray","color":"black",width:"400px" }} name='email' value={credentials.email} onChange={onchange} />

            </div>
            <div className="mb-3" style={{paddingLeft:"30px"}}>
                <label htmlFor="exampleInputPassword1" style={{ color: 'white' }} className="form-label">Password</label>
                <input type="password" placeholder='Enter Password' className="form-control white-text" style={{ "backgroundColor": "lightgray","color":"black",width:"400px" }} name='password' value={credentials.password} onChange={onchange} />
            </div>
           
          
            <button type="submit" className="m-3 btn btn-success" >Submit</button>
            <Link to="/Signup" className='m-3 btn btn-danger'>I am new user</Link>
           
        </form>
        </center>
    </div>

</>
  )
}
