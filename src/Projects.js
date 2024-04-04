import React from 'react'
import './projects.css';
import Navbar from './Navbar';
function Projects(props) {
  const {projects_data}=props;
 
  const mediaQuerymain={
    flexDirection:"column",
    display: "grid",
    gridTemplateColumns: "repeat(1, minmax(200px, 500px))",
    gridGap: "5px",
    justifyContent: "space-around"
  }

  return (
    <>
    <Navbar/>
    <div style={{backgroundColor:"#333",color:"white", fontSize: "1.5rem", padding: "10px 20px"}}>Projects</div>
    <section className='main-card-container' style={{...(window.innerWidth <= 998 && mediaQuerymain)}}>
    {projects_data.map((item,index)=>{
         const {id, name, link,frontend_technologies,backend_technologies, image } = item;

        return(
          <>
          <div className="card-container" key={id}>
            <div className="card ">
                  <div className="card-body">
       
       
        <div className="card-content">
          <h1 className="card-title">{name}</h1>
          <p className="card-description">Frontend technologies:{frontend_technologies}</p>
          <p className="card-description">Backend technologies:{backend_technologies}</p>
          <div className='img'>
          <a href={link}><img className="card-image" src={image} alt="no img" width="400px" height="250px" /></a>
        </div>
         <p>See Live project:</p><a className="a-link" href={link}>Click here</a>
         </div>
          
        </div>
 
   </div>
   </div>
    </>
    );
})}
    </section>
  </>);
};
export default Projects
