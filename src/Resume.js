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
        <a className='res-a' href="https://www.canva.com/design/DAGBO54G0jo/QqULj5eozkOgxfPI-ZnX4Q/edit?utm_content=DAGBO54G0jo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
         My Resume
        </a>
      </div>
     
    </>
  )
}

export default Resume;
