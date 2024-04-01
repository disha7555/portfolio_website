import React from 'react';
import Navbar from './Navbar';
import './skills.css';
function Skills() {
  return (
    <>
      <Navbar/>
      <div style={{backgroundColor:"#333",color:"white", fontSize: "1.5rem", padding: "10px 20px"}}>Skills</div>
     
        <div className='content-head'>
          <h1>Skills & Technologies</h1>
        </div>
        <div className='cover'>
        <div className='list1'>
          <h2  className='h'>Proficient:</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>
        <div className='list2'>
          <h2  className='h'> Past Experience:</h2>
          <ul>
            <li>Core Java (J2SE)</li>
            <li>Advanced Java (J2EE)</li>
            <li>Springboot</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className='list3'>
        <h2 className='h'>Familiar:</h2>
        <ul>
            <li>PHP</li>
            <li>C</li>
            <li>Python</li>
        </ul>
        </div>
      </div>
    </>
  )
}

export default Skills;
