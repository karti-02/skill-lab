import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import Navbar from './Navbar';

export default function Signup() {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })
    const navigate=useNavigate();
    const Handlesubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
        });
        const json = await response.json();
        console.log(json);
        if (!json.success) {
            alert("Enter valid credentials");
        }
        navigate("/");

    }
    const onchange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    return (
        <>
        <Navbar/>
            <div className='container' style={{height:"617px"}}>
                <center>
                <form onSubmit={Handlesubmit} style={{backgroundColor:"#1C1C1C",width:"500px",height:"450px",borderRadius:"20px",marginTop:"50px"}}>
                    <title>Signup</title>
                    <div className="mb-3" style={{paddingLeft:"30px",paddingTop:"40px"}}>
                        <label htmlFor="exampleInputEmail1 " style={{ color: 'white' }} className="form-label">Name</label>
                        <input type="text" placeholder='Enter Name' className="form-control white-text"style={{ "backgroundColor":"lightgray","color":"black",width:"400px" }} name='name' value={credentials.name} onChange={onchange} />

                    </div>
                    <div className="mb-3" style={{paddingLeft:"30px"}}>
                        <label htmlFor="exampleInputEmail1 " style={{ color: 'white' }} className="form-label">Email address</label>
                        <input type="email" placeholder='Enter Email' className="form-control white-text" style={{ "backgroundColor":"lightgray","color":"black",width:"400px" }} name='email' value={credentials.email} onChange={onchange} />

                    </div>
                    <div className="mb-3" style={{paddingLeft:"30px"}}>
                        <label htmlFor="exampleInputPassword1" style={{ color: 'white' }} className="form-label">Password</label>
                        <input type="password" placeholder='Enter Password' className="form-control white-text" style={{ "backgroundColor":"lightgray","color":"black",width:"400px" }} name='password' value={credentials.password} onChange={onchange} />
                    </div>
                   
                    <div className="mb-3"style={{paddingLeft:"30px"}}>
                        <label htmlFor="exampleInputPassword1" style={{ color: 'white' }} className="form-label">Address</label>
                        <input type="text" className="form-control white-text" style={{ "backgroundColor":"lightgray","color":"black",width:"400px" }} name='geolocation' value={credentials.geolocation}onChange={onchange} />
                    </div>

                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
                </form>
                </center>
            </div>

        </>
    )
}
