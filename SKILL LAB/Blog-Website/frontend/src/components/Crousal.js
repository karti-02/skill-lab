import React from 'react';
import './Crousal.css'; // Import your CSS file for styling

const Crousal = () => {
  return (
    <div className="image-row" style={{position:"relative"}}>
      <div className="left-image">
        <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='texted'><h1>Unlocking the Power of Creativity:</h1>
        <h4 style={{paddingLeft:"10px"}}>A Journey into the World of Infinite Possibilities</h4>
        </div>
      </div>
      <div className="right-images">
        <img src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img src="https://images.pexels.com/photos/7242744/pexels-photo-7242744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
      </div>
    </div>
  );
};

export default Crousal;