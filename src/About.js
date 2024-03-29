import React from 'react'
import Navbar from './Navbar'
import './about.css';
function About() {
  return (
    <>
      <Navbar/>
      <div style={{backgroundColor:"#333",color:"white", fontSize: "1.5rem", padding: "10px 20px"}}>About</div>
      <div className='container'>
      <div className='head'>Hi, I am Disha Shah</div>
      <div className='sub-head'>A Computer Engineer</div>
      <div className='content'>
       <div>I reside in Ahmedabad, Gujarat.</div>
 <span>I am passionate about web development especially Full Stack Development.
       I love to learn new technologies and skills & build projects with them.
       I am eager to be challenged in order to grow and further improve my technical
       skills in the field of web development.
       You can have a look at my Projects and  Mini-Projects in respective sections in navigation bar.
       All of my Projects  and Mini-Projects are live for you to try out.</span>
      </div>
      </div>
    </>
  )
}

export default About;
