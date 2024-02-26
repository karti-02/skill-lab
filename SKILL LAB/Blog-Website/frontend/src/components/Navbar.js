import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
export default function Navbar() {
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("authToken");
    navigate("/Login");
  }
  const handlecreate = () => {
    
    navigate("/Createpost");
  }
  return (
    <div>
      <nav style={{ text: "white", backgroundColor: "black" }} class="navbar navbar-expand-lg navbar-light p-2">
        <div class="container-fluid">
          {/* <Link class="navbar-brand" to="/">VibePeg</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> */}

          <div class=" collapse navbar-collapse" id="navbarNavDropdown">
            <h3 style={{ fontFamily: "cursive" }}>
              <span style={{ color: "white" }}>Quill</span><span style={{ color: "orange", fontWeight: "bold" }}>Craft</span>
            </h3>
            <ul class="navbar-nav ms-auto " >
              <li class="nav-item">
                <Link style={{ color: "white" }} class="nav-link mx-2 active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link style={{ color: "white" }} class="nav-link mx-2" to="/About">About</Link>
              </li>
              <li class="nav-item">
                <Link style={{ color: "white" }} class="nav-link mx-2" to="/Blog">Blog</Link>
              </li>

            </ul>
            <ul class="navbar-nav ms-auto d-none d-lg-inline-flex">
              {(!localStorage.getItem("authToken")) ?
                <div className='d-flex' >
                  <Link className="btn bg-warning text-dark mx-1" to="/Login">Login</Link>

                  <Link className="btn bg-warning text-dark mx-1" to="/Signup">Signup</Link>
                </div>

                :


                <div class="btn-group dropstart">
                  <button type="button" style={{borderRadius:"50px",width:"40px",height:"40px"}} class="btn btn-warning " data-bs-toggle="dropdown" aria-expanded="false">
                    
                  </button>
                  <ul class="dropdown-menu" >
                  <li><button class="dropdown-item" onClick={handlecreate}>Create Post</button></li>
            <li><Link  class="dropdown-item" to="#">My Profile</Link></li>
            <li><button class="dropdown-item" onClick={handlelogout}>Logout</button></li>
                  </ul>
                </div>



              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
