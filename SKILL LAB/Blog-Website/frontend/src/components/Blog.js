import React from 'react'
import Navbar from './Navbar'

import { useLocation } from 'react-router-dom';
export default function Blog () {
  const location = useLocation();
  const id = location.state ? location.state.yourValue : null;
  let blogcontent = location.state ? location.state.blogs : null;

  return (
    <>
    <Navbar></Navbar>
    <div style={{display:"flex",height:"1000px"}}>
    {
       blogcontent.filter((item)=>( item._id===id ) )
       .map(
         filteritems=>{
                   return(
                 <div >
                     
                            <div className="card m-2" style={{ "width": "1400px",height:"800px",backgroundColor:"white",margin:"20px",borderStyle:"none"}}>
                             
                                <div className="card-body"  key={filteritems._id}>
                                  <img style={{width:"1400px",height:"600px"}}  src={filteritems.img} alt=''></img>
                                  <h3  style={{color:"#A0A1A0",margin:"6px",fontSize:"20px"}}>{filteritems.category}</h3>
                                  <div >
                                    <h5 className="card-title text-black" style={{fontFamily:"Verdana",fontWeight:"bold",fontSize:"35px",marginBottom:"0px"}} >{filteritems.title}</h5>
                                    </div>
                                    {<div>
                                       <p  style={{marginTop:"30px",fontSize:"20px"}}>{filteritems.description}</p>
                                     </div>
                                    }
                                </div>
                              </div>
                              </div>

                
                     
                   )
         })
    }
    </div>
  
    </>
    
  )
}
