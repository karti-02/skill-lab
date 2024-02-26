import React from 'react'
import Navbar from './Navbar'
import Crousal from './Crousal'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const categories = ['Technology','Fashion','Food','Fitness','Travel','Music'];
  const [blogcontent,setblogcontent]=useState([]);
  const [search,setSearch]=useState('');
 
  
  const navigate = useNavigate();
  const Handleopenblog = (id) => {
    
    navigate(`/Blog`, { state: { yourValue: id ,blogs: blogcontent} });
  };
  const loaddata=async ()=>{
    let response=await fetch("http://localhost:5000/api/Senddata",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      }
    });
  
    response=await response.json();
    setblogcontent(response[0]);
   console.log(response[0]);
  }
  
  useEffect(()=>{
    loaddata();
  },[])



  return (
    <>
    <Navbar/>
    <Crousal/>
    <div className='container ' style={{display:"flex"}}>
    <div style={{marginLeft:"-85px",marginRight:"13px"}}>
      
    <input style={{backgroundColor:"#FFE5B4",border:"none",marginLeft:"3px",marginTop:"30px",padding:"5px",borderRadius:"1px",fontSize:"19.5px",marginRight:"5px"}} type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="  Search.."/>
    <div className="category-box" style={{backgroundColor:"#FFE5B4",width:"230px",padding:"5px",marginTop:"30px"}}>
      <h3 style={{paddingLeft:"4px",fontWeight:"bold"}}>Categories</h3>
      <div style={{padding:"13px"}}>
        {categories.map((category, index) => (
          <h6 key={index}>{category}<hr></hr></h6>
         
        ))}
     </div> 
     











    </div>       
    <div className="category-box" style={{backgroundColor:"#FFE5B4",width:"230px",padding:"5px",marginTop:"30px"}}>
      <h3 style={{paddingLeft:"6px",fontWeight:"bold",paddingBottom:"4px"}}>Top Posts</h3>
      {
       blogcontent.map((data , index)=>{
        return(<div style={{padding:"6px"}} onClick={()=>Handleopenblog(data._id)}>
          
            <h6 style={{fontSize:"18px"}}>
            <span>{index + 1}. </span>{data.title}
              </h6> 
           
            
            </div>   
          )
       }).slice(0,6)           
      } 
    </div>  
 
    </div>

   






<div className='row mb-3' style={{display:"flex",marginTop:"5px",marginBottom:"50px"}}>
    
                {
                    
                    blogcontent.filter((item)=>( (item.category.toLowerCase().includes(search.toLocaleLowerCase())) || (item.title.toLowerCase().includes(search.toLocaleLowerCase()) )))
            .map(
              filteritems=>{
                        return(
                          <div className='col-4 col-md-3 ' onClick={()=>Handleopenblog(filteritems._id)} style={{height:"470px",width:"370px",marginRight:"12px"}}>
                            <div className="card m-2" style={{ "width": "18rem",height:"22rem",backgroundColor:"white",margin:"20px",borderStyle:"none"}}>
                             
                                <div className="card-body"  key={filteritems._id}>
                                  <img style={{width:"360px",height:"300px"}}  src={filteritems.img} alt=''></img>
                                  <h6  style={{color:"#A0A1A0",margin:"6px"}}>{filteritems.category}</h6>
                                 
                                    <h5 className="card-title text-black" style={{fontFamily:"Verdana",fontWeight:"bold",fontSize:"17px",marginBottom:"0px"}} >{filteritems.title}</h5>
                                   
                                    {
                                      filteritems.description.length >=70 ?
                                      
                                      <p>{filteritems.description.substring(0,60)+"....."}</p>
                                     
                                      : <p  style={{marginTop:"0px"}}>{filteritems.description}</p>
                                    }
                                </div>
                              </div>
                              </div>
                        )})
                 } 

          </div>         
         </div>
         
        
    </>
  )
}



