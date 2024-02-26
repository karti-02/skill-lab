import React, { useState } from 'react'
import Navbar from './Navbar'
import loaddata from './Home'
export default function Createpost() {
 
  const [credentials, setcredentials] = useState({ title: "", imagelink: "",category: "",blog:""})
  
  const handlepublish = async (e) => {
    
    e.preventDefault();
   
      const response = await fetch("http://localhost:5000/api/Addblog", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title: credentials.title, blog: credentials.blog,category:credentials.category,imagelink:credentials.imagelink})
          
      });
      const json = await response.json();
      console.log(json);
      loaddata();
    
  }

  const onchange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
}



  return (
    <>
    <Navbar></Navbar>
    
   
    <div className='container boxItems'  >
      
          <div className='img '>
            <img style={{width:"700px",margin:"8px",height:"500px"}} src='https://images.pexels.com/photos/6424244/pexels-photo-6424244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' class='image-preview'  />
          </div>
          <input style={{margin:"10px",width:"700px"}} name='imagelink' type='text' placeholder='Enter image link' value={credentials.imagelink} onChange={onchange}  />
          <input style={{margin:"10px",width:"700px"}} name='title' type='text' placeholder='Enter Title' value={credentials.title} onChange={onchange}/>
          <input style={{margin:"10px",width:"700px"}} name='category' type='text' placeholder='Enter Category'value={credentials.category} onChange={onchange} />
            <textarea  placeholder='Type here....' style={{padding:"10px",margin:"10px",border:"1px solid",borderRadius:"14px"}}  name='blog' id='' cols='90' rows='10'value={credentials.blog} onChange={onchange}></textarea>

          <div>
            <button className='btn btn-warning' style={{borderRadius:"4px",marginLeft:"630px",marginBottom:"5px"}} onClick={handlepublish}>Publish</button>
          </div>

    </div>
   
    </>
  )
}
