import React from 'react';
import Navbar from './Navbar';
import './achi.css'
function Achievements() {
  return (
    <>
      <Navbar/>
      <div style={{backgroundColor:"#333",color:"white", fontSize: "1.5rem", padding: "10px 20px"}}>Achievements</div>
      <div className='container'>
        <div className='img-container'>
          <h2>IIT-Bombay AAKAAR'20 Workshop </h2>
          <img src='certi/IIT.jpeg' alt="no img"/>
        </div>
        <div className='img-container'>
          <h2>IQ Test</h2>
          <img src='certi/iq.jpeg' alt="no img"/>
        </div>
        <div className='img-container'>
          <h2>AI Tools Workshop by BE10X</h2>
          <img src='certi/be10x.jpg' alt="no img"/>
        </div>
        <div className='img-container'>
          <h2>AI for India event by Guvi</h2>
          <img src='certi/guvi.jpeg' alt="no img"/>
        </div>
        <div className='img-container'>
          <h2>Coursera Certificate</h2>
          <img src='certi/Coursera.jpg' alt="no img"/>
        </div>
        <div className='img-container'>
          <h2>IOT workshop</h2>
          <img src='certi/iot.jpeg' alt="no img"/>
        </div>
      </div>
    </>
  )
}

export default Achievements;
