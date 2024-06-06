import React from 'react'
import './res.css';
import Navbar from './Navbar';
function Resume() {
  return (
    <>
      <Navbar/>
      <div style={{backgroundColor:"#333",color:"white", fontSize: "1.5rem", padding: "10px 20px"}}>Resume</div>
      <div className='resume-container'>
        <div className='res-h'>Click this button to see my resume: </div>
        <a className='res-a' href=" https://drive.google.com/file/d/1pUUVD6XgWTFwsjkfMBrAl-CPuJJt7avk/view?usp=sharing">
         My Resume
        </a>
      </div>
     
    </>
  )
}

export default Resume;
