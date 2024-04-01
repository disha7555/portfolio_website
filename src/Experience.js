import React from 'react'
import './ex.css'
import Navbar from './Navbar'
function Experience() {
  return (
    <>
      <Navbar/>
      <div style={{backgroundColor:"#333",color:"white", fontSize: "1.5rem", padding: "10px 20px"}}>Experience</div>
      <div className='exp-details'>
        <div className='exp-column'>
        <div className='ex'>
           <h2 className='ex-header'> Student Trainee | Innoventa</h2> 
           <div className='ex-res'>
            I was a student trainee for Core Java, Advanced Java, and Web development in innoventa 
           </div> 
        </div>

        <div className='ex'>
           <h2 className='ex-header'> Full Stack Developement Intern | Axisray </h2> 
           <div className='ex-res'>
           I have worked at Axisray company as a full stack developement intern
           to develop a webapp based on Springboot framework.
           </div> 
        </div>

        <div className='ex'>
           <h2 className='ex-header'> React JS Intern | Technishal </h2> 
           <div className='ex-res'>
           I have done summer internship at Technishal for React JS.
           I was trained for HTML,CSS,Bootstrap,Javascript and ReactJS.
           </div> 
        </div>

        </div>

      </div>
     
    </>
  )
}

export default Experience
